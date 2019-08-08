export default () => {
  if (typeof document === 'undefined') {
    return false
  }
  
  const elem = document.createElement('canvas')

  if (elem.getContext && elem.getContext('2d')) {
    return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0
  }
  else {
    return false
  }
}
