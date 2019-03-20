let CR = 0,
  LF = 1,
  Control = 2,
  Extend = 3,
  Regional_Indicator = 4,
  SpacingMark = 5,
  Other = 11,
  E_Base = 13,
  E_Modifier = 14,
  ZWJ = 15,
  Glue_After_Zwj = 16,
  E_Base_GAZ = 17

// BreakTypes
let NotBreak = 0,
  BreakStart = 1,
  Break = 2,
  BreakLastRegional = 3,
  BreakPenultimateRegional = 4

const isSurrogate = (str, pos) =>
  0xd800 <= str.charCodeAt(pos) && str.charCodeAt(pos) <= 0xdbff &&
  0xdc00 <= str.charCodeAt(pos + 1) && str.charCodeAt(pos + 1) <= 0xdfff

// Private function, gets a Unicode code point from a JavaScript UTF-16 string
// handling surrogate pairs appropriately
const codePointAt = (str, idx) => {
  if (idx === void 0) {
    idx = 0
  }

  let code = str.charCodeAt(idx)

  // if a high surrogate
  if (0xD800 <= code && code <= 0xDBFF && idx < str.length - 1) {
    let hi = code,
      low = str.charCodeAt(idx + 1)

    if (0xDC00 <= low && low <= 0xDFFF) {
      return (
        (
          hi - 0xD800
        ) * 0x400
      ) + (
        low - 0xDC00
      ) + 0x10000
    }

    return hi
  }

  // if a low surrogate
  if (0xDC00 <= code && code <= 0xDFFF && idx >= 1) {
    let hi = str.charCodeAt(idx - 1),
      low = code

    if (0xD800 <= hi && hi <= 0xDBFF) {
      return (
        (
          hi - 0xD800
        ) * 0x400
      ) + (
        low - 0xDC00
      ) + 0x10000
    }

    return low
  }

  //just return the char if an unmatched surrogate half or a
  //single-char codepoint
  return code
}

// Private function, returns whether a break is allowed between the
// two given grapheme breaking classes
const shouldBreak = (start, mid, end) => {
  let all = [start].concat(mid).concat([end]),
    previous = all[all.length - 2],
    next = end

  // Lookahead termintor for:
  // GB10. (E_Base | EBG) Extend* ?	E_Modifier
  let eModifierIndex = all.lastIndexOf(E_Modifier)

  if (eModifierIndex > 1 &&
    all.slice(1, eModifierIndex).every(function (c) {
      return c === Extend
    }) &&
    [Extend, E_Base, E_Base_GAZ].indexOf(start) === -1) {
    return Break
  }

  // Lookahead termintor for:
  // GB12. ^ (RI RI)* RI	?	RI
  // GB13. [^RI] (RI RI)* RI	?	RI
  let rIIndex = all.lastIndexOf(Regional_Indicator)

  if (rIIndex > 0 &&
    all.slice(1, rIIndex).every(function (c) {
      return c === Regional_Indicator
    }) &&
    Regional_Indicator !== previous) {
    if (all.filter(function (c) {
      return c === Regional_Indicator
    }).length % 2 === 1) {
      return BreakLastRegional
    }
    else {
      return BreakPenultimateRegional
    }
  }

  // GB3. CR X LF
  if (previous === CR && next === LF) {
    return NotBreak
  }
  // GB4. (Control|CR|LF) ÷
  else if (previous === Control || previous === CR || previous === LF) {
    if (next === E_Modifier && mid.every(function (c) {
      return c === Extend
    })) {
      return Break
    }
    else {
      return BreakStart
    }
  }
  // GB5. ÷ (Control|CR|LF)
  else if (next === Control || next === CR || next === LF) {
    return BreakStart
  }
  // GB9. X (Extend|ZWJ)
  else if (next === Extend || next === ZWJ) {
    return NotBreak
  }
  // GB9a. X SpacingMark
  else if (next === SpacingMark) {
    return NotBreak
  }

  // GB10. (E_Base | EBG) Extend* ?	E_Modifier
  let previousNonExtendIndex = all.indexOf(Extend) > -1
    ? all.lastIndexOf(Extend) - 1
    : all.length - 2
  if ([E_Base, E_Base_GAZ].indexOf(all[previousNonExtendIndex]) > -1 &&
    all.slice(previousNonExtendIndex + 1, -1).every(function (c) {
      return c === Extend
    }) &&
    next === E_Modifier) {
    return NotBreak
  }

  // GB11. ZWJ ? (Glue_After_Zwj | EBG)
  if (previous === ZWJ && [Glue_After_Zwj, E_Base_GAZ].indexOf(next) > -1) {
    return NotBreak
  }

  // GB12. ^ (RI RI)* RI ? RI
  // GB13. [^RI] (RI RI)* RI ? RI
  if (mid.indexOf(Regional_Indicator) > -1) {
    return Break
  }
  if (previous === Regional_Indicator && next === Regional_Indicator) {
    return NotBreak
  }

  // GB999. Any ? Any
  return BreakStart
}

// Returns the next grapheme break in the string after the given index
const nextBreak = (string, index) => {
  if (index === void 0) {
    index = 0
  }

  if (index < 0) {
    return 0
  }

  if (index >= string.length - 1) {
    return string.length
  }

  let prev = getGraphemeBreakProperty(codePointAt(string, index))
  let mid = [],
    i = index + 1

  for (; i < string.length; i++) {
    // check for already processed low surrogates
    if (isSurrogate(string, i - 1)) {
      continue
    }

    let next = getGraphemeBreakProperty(codePointAt(string, i))
    if (shouldBreak(prev, mid, next)) {
      return i
    }

    mid.push(next)
  }
  return string.length
}

// Breaks the given string into an array of grapheme cluster strings
const splitGraphemes = str => {
  let res = [], index = 0, brk

  while ((
    brk = nextBreak(str, index)
  ) < str.length) {
    res.push(str.slice(index, brk))
    index = brk
  }

  if (index < str.length) {
    res.push(str.slice(index))
  }

  return res
}

//given a Unicode code point, determines this symbol's grapheme break property
const getGraphemeBreakProperty = code => {
  //grapheme break property for Unicode 10.0.0,
  //taken from http://www.unicode.org/Public/10.0.0/ucd/auxiliary/GraphemeBreakProperty.txt
  //and adapted to JavaScript rules
  if (0x000D === code) { // Cc       <control-000D>
    return CR
  }

  if (0x000A === code) { // Cc       <control-000A>
    return LF
  }

  if (
    (
      0x0000 <= code && code <= 0x0009
    ) || // Cc  [10] <control-0000>..<control-0009>
    (
      0x000B <= code && code <= 0x000C
    ) || // Cc   [2] <control-000B>..<control-000C>
    (
      0x000E <= code && code <= 0x001F
    ) || // Cc  [18] <control-000E>..<control-001F>
    (
      0x007F <= code && code <= 0x009F
    ) || // Cc  [33] <control-007F>..<control-009F>

    0x200B === code || // Cf       ZERO WIDTH SPACE
    (
      0x200E <= code && code <= 0x200F
    ) || // Cf   [2] LEFT-TO-RIGHT MARK..RIGHT-TO-LEFT MARK
    0x2028 === code || // Zl       LINE SEPARATOR
    0x2029 === code || // Zp       PARAGRAPH SEPARATOR
    (
      0x202A <= code && code <= 0x202E
    ) || // Cf   [5] LEFT-TO-RIGHT EMBEDDING..RIGHT-TO-LEFT OVERRIDE
    (
      0x2060 <= code && code <= 0x2064
    ) || // Cf   [5] WORD JOINER..INVISIBLE PLUS
    0x2065 === code || // Cn       <reserved-2065>
    (
      0x2066 <= code && code <= 0x206F
    ) || // Cf  [10] LEFT-TO-RIGHT ISOLATE..NOMINAL DIGIT SHAPES
    (
      0xD800 <= code && code <= 0xDFFF
    ) || // Cs [2048] <surrogate-D800>..<surrogate-DFFF>
    0xFEFF === code || // Cf       ZERO WIDTH NO-BREAK SPACE
    (
      0xFFF0 <= code && code <= 0xFFF8
    ) || // Cn   [9] <reserved-FFF0>..<reserved-FFF8>
    (
      0xFFF9 <= code && code <= 0xFFFB
    ) || // Cf   [3] INTERLINEAR ANNOTATION ANCHOR..INTERLINEAR ANNOTATION TERMINATOR
    (
      0x1BCA0 <= code && code <= 0x1BCA3
    ) || // Cf   [4] SHORTHAND FORMAT LETTER OVERLAP..SHORTHAND FORMAT UP STEP
    (
      0x1D173 <= code && code <= 0x1D17A
    ) || // Cf   [8] MUSICAL SYMBOL BEGIN BEAM..MUSICAL SYMBOL END PHRASE
    0xE0000 === code || // Cn       <reserved-E0000>
    0xE0001 === code || // Cf       LANGUAGE TAG
    (
      0xE0002 <= code && code <= 0xE001F
    ) || // Cn  [30] <reserved-E0002>..<reserved-E001F>
    (
      0xE0080 <= code && code <= 0xE00FF
    ) || // Cn [128] <reserved-E0080>..<reserved-E00FF>
    (
      0xE01F0 <= code && code <= 0xE0FFF
    ) // Cn [3600] <reserved-E01F0>..<reserved-E0FFF>
  ) {
    return Control
  }


  if (
    0x200C === code || // Cf       ZERO WIDTH NON-JOINER
    (
      0x20D0 <= code && code <= 0x20DC
    ) || // Mn  [13] COMBINING LEFT HARPOON ABOVE..COMBINING FOUR DOTS ABOVE
    (
      0x20DD <= code && code <= 0x20E0
    ) || // Me   [4] COMBINING ENCLOSING CIRCLE..COMBINING ENCLOSING CIRCLE BACKSLASH
    0x20E1 === code || // Mn       COMBINING LEFT RIGHT ARROW ABOVE
    (
      0x20E2 <= code && code <= 0x20E4
    ) || // Me   [3] COMBINING ENCLOSING SCREEN..COMBINING ENCLOSING UPWARD POINTING TRIANGLE
    (
      0x20E5 <= code && code <= 0x20F0
    ) || // Mn  [12] COMBINING REVERSE SOLIDUS OVERLAY..COMBINING ASTERISK ABOVE
    (
      0x2CEF <= code && code <= 0x2CF1
    ) || // Mn   [3] COPTIC COMBINING NI ABOVE..COPTIC COMBINING SPIRITUS LENIS
    0x2D7F === code || // Mn       TIFINAGH CONSONANT JOINER
    0xA66F === code || // Mn       COMBINING CYRILLIC VZMET
    (
      0xFE00 <= code && code <= 0xFE0F
    ) || // Mn  [16] VARIATION SELECTOR-1..VARIATION SELECTOR-16
    (
      0xFE20 <= code && code <= 0xFE2F
    ) || // Mn  [16] COMBINING LIGATURE LEFT HALF..COMBINING CYRILLIC TITLO RIGHT HALF
    0x101FD === code || // Mn       PHAISTOS DISC SIGN COMBINING OBLIQUE STROKE
    0x11A47 === code || // Mn       ZANABAZAR SQUARE SUBJOINER
    0x1D165 === code || // Mc       MUSICAL SYMBOL COMBINING STEM
    (
      0x1D167 <= code && code <= 0x1D169
    ) || // Mn   [3] MUSICAL SYMBOL COMBINING TREMOLO-1..MUSICAL SYMBOL COMBINING TREMOLO-3
    (
      0x1D16E <= code && code <= 0x1D172
    ) || // Mc   [5] MUSICAL SYMBOL COMBINING FLAG-1..MUSICAL SYMBOL COMBINING FLAG-5
    (
      0x1D17B <= code && code <= 0x1D182
    ) || // Mn   [8] MUSICAL SYMBOL COMBINING ACCENT..MUSICAL SYMBOL COMBINING LOURE
    (
      0x1D185 <= code && code <= 0x1D18B
    ) || // Mn   [7] MUSICAL SYMBOL COMBINING DOIT..MUSICAL SYMBOL COMBINING TRIPLE TONGUE
    (
      0x1D1AA <= code && code <= 0x1D1AD
    ) || // Mn   [4] MUSICAL SYMBOL COMBINING DOWN BOW..MUSICAL SYMBOL COMBINING SNAP PIZZICATO
    (
      0x1D242 <= code && code <= 0x1D244
    ) || // Mn   [3] COMBINING GREEK MUSICAL TRISEME..COMBINING GREEK MUSICAL PENTASEME
    (
      0x1DA00 <= code && code <= 0x1DA36
    ) || // Mn  [55] SIGNWRITING HEAD RIM..SIGNWRITING AIR SUCKING IN
    (
      0x1DA3B <= code && code <= 0x1DA6C
    ) || // Mn  [50] SIGNWRITING MOUTH CLOSED NEUTRAL..SIGNWRITING EXCITEMENT
    0x1DA75 === code || // Mn       SIGNWRITING UPPER BODY TILTING FROM HIP JOINTS
    0x1DA84 === code || // Mn       SIGNWRITING LOCATION HEAD NECK
    (
      0xE0020 <= code && code <= 0xE007F
    ) || // Cf  [96] TAG SPACE..CANCEL TAG
    (
      0xE0100 <= code && code <= 0xE01EF
    ) // Mn [240] VARIATION SELECTOR-17..VARIATION SELECTOR-256
  ) {
    return Extend
  }


  if (0x1F1E6 <= code && code <= 0x1F1FF) { // So  [26] REGIONAL INDICATOR SYMBOL LETTER A..REGIONAL INDICATOR SYMBOL LETTER Z
    return Regional_Indicator
  }

  if (
    0x1D166 === code || // Mc       MUSICAL SYMBOL COMBINING SPRECHGESANG STEM
    0x1D16D === code // Mc       MUSICAL SYMBOL COMBINING AUGMENTATION DOT
  ) {
    return SpacingMark
  }

  if (
    0x261D === code || // So       WHITE UP POINTING INDEX
    0x26F9 === code || // So       PERSON WITH BALL
    (
      0x270A <= code && code <= 0x270D
    ) || // So   [4] RAISED FIST..WRITING HAND
    0x1F385 === code || // So       FATHER CHRISTMAS
    (
      0x1F3C2 <= code && code <= 0x1F3C4
    ) || // So   [3] SNOWBOARDER..SURFER
    0x1F3C7 === code || // So       HORSE RACING
    (
      0x1F3CA <= code && code <= 0x1F3CC
    ) || // So   [3] SWIMMER..GOLFER
    (
      0x1F442 <= code && code <= 0x1F443
    ) || // So   [2] EAR..NOSE
    (
      0x1F446 <= code && code <= 0x1F450
    ) || // So  [11] WHITE UP POINTING BACKHAND INDEX..OPEN HANDS SIGN
    0x1F46E === code || // So       POLICE OFFICER
    (
      0x1F470 <= code && code <= 0x1F478
    ) || // So   [9] BRIDE WITH VEIL..PRINCESS
    0x1F47C === code || // So       BABY ANGEL
    (
      0x1F481 <= code && code <= 0x1F483
    ) || // So   [3] INFORMATION DESK PERSON..DANCER
    (
      0x1F485 <= code && code <= 0x1F487
    ) || // So   [3] NAIL POLISH..HAIRCUT
    0x1F4AA === code || // So       FLEXED BICEPS
    (
      0x1F574 <= code && code <= 0x1F575
    ) || // So   [2] MAN IN BUSINESS SUIT LEVITATING..SLEUTH OR SPY
    0x1F57A === code || // So       MAN DANCING
    0x1F590 === code || // So       RAISED HAND WITH FINGERS SPLAYED
    (
      0x1F595 <= code && code <= 0x1F596
    ) || // So   [2] REVERSED HAND WITH MIDDLE FINGER EXTENDED..RAISED HAND WITH PART BETWEEN
    // MIDDLE AND RING FINGERS
    (
      0x1F645 <= code && code <= 0x1F647
    ) || // So   [3] FACE WITH NO GOOD GESTURE..PERSON BOWING DEEPLY
    (
      0x1F64B <= code && code <= 0x1F64F
    ) || // So   [5] HAPPY PERSON RAISING ONE HAND..PERSON WITH FOLDED HANDS
    0x1F6A3 === code || // So       ROWBOAT
    (
      0x1F6B4 <= code && code <= 0x1F6B6
    ) || // So   [3] BICYCLIST..PEDESTRIAN
    0x1F6C0 === code || // So       BATH
    0x1F6CC === code || // So       SLEEPING ACCOMMODATION
    (
      0x1F918 <= code && code <= 0x1F91C
    ) || // So   [5] SIGN OF THE HORNS..RIGHT-FACING FIST
    (
      0x1F91E <= code && code <= 0x1F91F
    ) || // So   [2] HAND WITH INDEX AND MIDDLE FINGERS CROSSED..I LOVE YOU HAND SIGN
    0x1F926 === code || // So       FACE PALM
    (
      0x1F930 <= code && code <= 0x1F939
    ) || // So  [10] PREGNANT WOMAN..JUGGLING
    (
      0x1F93D <= code && code <= 0x1F93E
    ) || // So   [2] WATER POLO..HANDBALL
    (
      0x1F9D1 <= code && code <= 0x1F9DD
    ) // So  [13] ADULT..ELF
  ) {
    return E_Base
  }

  if (0x1F3FB <= code && code <= 0x1F3FF) { // Sk   [5] EMOJI MODIFIER FITZPATRICK TYPE-1-2..EMOJI MODIFIER FITZPATRICK TYPE-6
    return E_Modifier
  }

  if (0x200D === code) {// Cf       ZERO WIDTH JOINER
    return ZWJ
  }

  if (
    0x2640 === code || // So       FEMALE SIGN
    0x2642 === code || // So       MALE SIGN
    (
      0x2695 <= code && code <= 0x2696
    ) || // So   [2] STAFF OF AESCULAPIUS..SCALES
    0x2708 === code || // So       AIRPLANE
    0x2764 === code || // So       HEAVY BLACK HEART
    0x1F308 === code || // So       RAINBOW
    0x1F33E === code || // So       EAR OF RICE
    0x1F373 === code || // So       COOKING
    0x1F393 === code || // So       GRADUATION CAP
    0x1F3A4 === code || // So       MICROPHONE
    0x1F3A8 === code || // So       ARTIST PALETTE
    0x1F3EB === code || // So       SCHOOL
    0x1F3ED === code || // So       FACTORY
    0x1F48B === code || // So       KISS MARK
    (
      0x1F4BB <= code && code <= 0x1F4BC
    ) || // So   [2] PERSONAL COMPUTER..BRIEFCASE
    0x1F527 === code || // So       WRENCH
    0x1F52C === code || // So       MICROSCOPE
    0x1F5E8 === code || // So       LEFT SPEECH BUBBLE
    0x1F680 === code || // So       ROCKET
    0x1F692 === code // So       FIRE ENGINE
  ) {
    return Glue_After_Zwj
  }

  if (0x1F466 <= code && code <= 0x1F469) { // So   [4] BOY..WOMAN)
    return E_Base_GAZ
  }


  //all unlisted characters have a grapheme break property of "Other"
  return Other
}

export default splitGraphemes