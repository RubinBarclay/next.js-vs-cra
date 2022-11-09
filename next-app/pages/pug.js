import Image from 'next/image'
import pugPic from '../public/pug.webp'

function Pug() {
  return (
    <Image 
      priority
      src={pugPic}
      alt="Cute pug dog" 
      width="300"
      height="auto"
    />
  )
}

export default Pug
