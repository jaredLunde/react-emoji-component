function divmod(value, lambda) {
  if (typeof value !== 'number' || typeof lambda !== 'number') {
    throw new Error('Specify the type number.');
  }
  if (lambda === 0) {
    throw new Error('Cannot divide by zero.');
  }

  return [Math.floor(value / lambda), value % lambda];
}

module.exports = function strkey (
  val,
  chaffify = 1,
  keyspace = 'abcdefghijklmnopqrstuvwxyzABCDEFHIJKLMNOPQRSTUVWXYZ0123456789'
) {
  const keyLen = keyspace.length
  if (typeof val === 'string') {
    let out = 0

    for (let char of val) {
      out = out * keyLen + keyspace.indexOf(char)
    }

    return out
  }
  else {
    val = val * chaffify

    if (val === 0) {
      return keyspace[0]
    }

    const out = []

    while (val > 0) {
      const [val_, digit] = divmod(val, keyLen)
      val = val_
      out.push(keyspace[digit])
    }

    return out.join('')
  }
}
