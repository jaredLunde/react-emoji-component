export default (
  typeof navigator === 'undefined'
    || /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
)
