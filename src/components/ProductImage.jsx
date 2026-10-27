import { useState } from 'react'
import fallbackImage from '../assets/image-placeholder.svg'

// Product photo that swaps to a local placeholder if the image fails to load.
function ProductImage({ src, alt, size = 300, ...rest }) {
  const [failedSrc, setFailedSrc] = useState(null)

  return (
    <img
      src={failedSrc === src ? fallbackImage : src}
      alt={alt}
      width={size}
      height={size}
      onError={() => setFailedSrc(src)}
      {...rest}
    />
  )
}

export default ProductImage
