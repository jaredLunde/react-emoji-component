export default function getSize (size, cmpSizes) {
  let cmpSize

  for (let i = 0; i < cmpSizes.length; i++) {
    cmpSize = cmpSizes[i]
    
    if (size <= cmpSize) {
      return cmpSize
    }
  }

  return cmpSize
}
