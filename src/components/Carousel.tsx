import Image from 'next/image'

import one from '@/images/carousel/1.png'
import two from '@/images/carousel/2.png'
import three from '@/images/carousel/3.png'
import four from '@/images/carousel/4.png'
import five from '@/images/carousel/5.png'

export function Carousel() {
  return (
    <section
      id="onsale"
      aria-label="Discover what's on sale"
      className="relative overflow-hidden bg-white"
    >
      <div className="flex snap-x snap-mandatory gap-8 overflow-scroll">
        <CarouselImg src={one} alt="Each flower has a story..." />
        <CarouselImg src={two} alt="...so are you" />
        <CarouselImg
          src={three}
          alt="Because we believe your story matters..."
        />
        <CarouselImg src={four} alt="and it deserves to be remembered." />
        <CarouselImg src={five} alt="Let's celebrate your moment with us." />
      </div>
    </section>
  )
}

function CarouselImg({ src, alt }: { src: any; alt: string }) {
  return (
    <div className="relative min-h-[200px] min-w-[400px] snap-center items-center lg:min-h-[400px] lg:min-w-[800px]">
      <Image
        src={src}
        alt={alt}
        className="snap-0"
        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/40 font-display text-xl text-white">
        {alt}
      </div>
    </div>
  )
}
