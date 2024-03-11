import Image, { StaticImageData } from "next/image"

interface HeroProps {
    imageData: StaticImageData;
    altText: string;
    heading: string;
}

export const Hero = ({imageData, altText, heading='hello'}: HeroProps) => {
  return (
  <>
  
      <div className="absolute -z-10 inset-0">
      <Image src={imageData} alt={altText} quality={100}
      fill sizes="100vw"
      style={{
        objectFit: 'cover',
      }} />
    </div>
    <div className="flex justify-center items-center h-screen">
    <h2 className="text-center bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-lg p-28 w-screen text-4xl font-bold tracking-tight text-white sm:text-5xl">
        {heading}
    </h2>
  </div>
  </>

  )
}
