let CR = 0,
  Extend = 1,
  RegionalIndicator = 2,
  Other = 3,
  EBase = 4,
  EModifier = 5,
  ZWJ = 6,
  GlueAfterZWJ = 7,
  EBaseGAZ = 8

// BreakTypes
let NotBreak = 0,
  BreakStart = 1,
  Break = 2,
  BreakLastRegional = 3,
  BreakPenultimateRegional = 4


// Private function, gets a Unicode code point from a JavaScript UTF-16 string
// handling surrogate pairs appropriately
const codePointAt = (str, idx = 0) => {
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
  let all = [start]
  all.push.apply(all, mid)
  all.push(end)

  let previous = all[all.length - 2],
      next = end

  // Lookahead terminator for:
  // GB10. (EBase | EBG) Extend* ?	EModifier
  let eModifierIndex = all.lastIndexOf(EModifier)

  if (
    eModifierIndex > 1
    && Extend !== next
    && EBase !== next
    && EBaseGAZ !== next
    && all.slice(1, eModifierIndex).every(c => c === Extend)
  ) {
    return Break
  }

  // Lookahead terminator for:
  // GB12. ^ (RI RI)* RI	?	RI
  // GB13. [^RI] (RI RI)* RI	?	RI
  let rIIndex = all.lastIndexOf(RegionalIndicator)

  if (
    rIIndex > 0
    && all.slice(1, rIIndex).every(c => c === RegionalIndicator)
    && RegionalIndicator !== previous
  ) {
    if (all.filter(c => c === RegionalIndicator).length % 2 === 1) {
      return BreakLastRegional
    }
    else {
      return BreakPenultimateRegional
    }
  }
  // GB4. (Control|CR|LF) ÷
  if (previous === CR) {
    return next === EModifier && mid.every(c => c === Extend) ? Break : BreakStart
  }
  // GB5. ÷ (Control|CR|LF)
  else if (next === CR) {
    return BreakStart
  }
  // GB9. X (Extend|ZWJ)
  else if (next === Extend || next === ZWJ) {
    return NotBreak
  }

  // GB10. (EBase | EBG) Extend* ?	EModifier
  let previousNonExtendIndex = all.indexOf(Extend) > -1
    ? all.lastIndexOf(Extend) - 1
    : all.length - 2

  if (
    (EBase === all[previousNonExtendIndex] || EBaseGAZ === all[previousNonExtendIndex])
    && all.slice(previousNonExtendIndex + 1, -1).every(c => c === Extend)
    && next === EModifier
  ) {
    return NotBreak
  }

  // GB11. ZWJ ? (GlueAfterZWJ | EBG)
  if (previous === ZWJ && (next === GlueAfterZWJ || next === EBaseGAZ)) {
    return NotBreak
  }

  // GB12. ^ (RI RI)* RI ? RI
  // GB13. [^RI] (RI RI)* RI ? RI
  if (mid.indexOf(RegionalIndicator) > -1) {
    return Break
  }
  if (previous === RegionalIndicator && next === RegionalIndicator) {
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
  let mid = [], i = index + 1, atPrev = string.charCodeAt(index)

  for (; i < string.length; i++) {
    const atCurr = string.charCodeAt(i)
    // check for already processed low surrogates
    if (
      // is surrogate
      0xd800 <= atPrev
      && atPrev <= 0xdbff
      && 0xdc00 <= atCurr
      && atCurr <= 0xdfff
    ) {
      continue
    }

    let next = getGraphemeBreakProperty(codePointAt(string, i))

    if (shouldBreak(prev, mid, next) !== NotBreak) {
      return i
    }

    mid.push(next)
    atPrev = atCurr
  }

  return string.length
}

//given a Unicode code point, determines this symbol's grapheme break property
const getGraphemeBreakProperty = code => {
  //grapheme break property for Unicode 10.0.0,
  //taken from http://www.unicode.org/Public/10.0.0/ucd/auxiliary/GraphemeBreakProperty.txt
  //and adapted to JavaScript rules
  if (0x000D === code) { // Cc       <control-000D>
    return CR
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
      0xFE00 <= code && code <= 0xFE0F
    ) || // Mn  [16] VARIATION SELECTOR-1..VARIATION SELECTOR-16
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
    return RegionalIndicator
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
    return EBase
  }

  if (0x1F3FB <= code && code <= 0x1F3FF) { // Sk   [5] EMOJI MODIFIER FITZPATRICK TYPE-1-2..EMOJI MODIFIER FITZPATRICK TYPE-6
    return EModifier
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
    return GlueAfterZWJ
  }

  if (0x1F466 <= code && code <= 0x1F469) { // So   [4] BOY..WOMAN)
    return EBaseGAZ
  }

  //all unlisted characters have a grapheme break property of "Other"
  return Other
}

const splitEmojis = str => {
  let res = [], index = 0, brk, length = str.length

  while ((brk = nextBreak(str, index)) < length) {
    res.push(str.substring(index, brk))
    index = brk
  }

  if (index < str.length) {
    res.push(str.substring(index, length))
  }

  return res
}

export default splitEmojis
