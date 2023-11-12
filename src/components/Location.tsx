import Image from 'next/image'

import { Button } from './Button'
import LocationSvg from './logo/LocationSvg'

export function Location() {
  return (
    <section
      id="location"
      aria-label="Location"
      className="relative overflow-hidden bg-white"
    >
      <LocationImg />
    </section>
  )
}

function LocationImg() {
  return (
    <div className="relative min-h-[200px] w-full lg:h-[400px] lg:w-full">
      <Image
        src="https://flowerstoryco.id/cdn/shop/files/DSC04080_1_3000x.jpg?v=1614746402"
        alt="Flowers in 4 vases"
        className="snap-0"
        width={1024}
        height={768}
        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
      />
      <div className="absolute left-1/2 top-1/2 flex h-max w-max max-w-md -translate-x-1/2 -translate-y-1/2 flex-col gap-4 rounded-lg bg-white/50 px-8 py-4 font-display text-lg text-slate-900 backdrop-blur">
        <span className="underline">Pick-up location</span>
        <span className="text-xl font-bold">
          Greenlake City, Cipondoh, Tangerang
          <br />
          Monday - Sunday
          <br />
          8am - 9pm
        </span>
        <Button
          href="https://maps.google.com/?daddr=Greenlake%20City,%20Cipondoh"
          target="_blank"
          rel="noreferer"
          color="white"
          className="w-max"
        >
          <LocationSvg className="w-4" />
          <span className="ml-3 font-bold">Get Direction</span>
        </Button>
      </div>
    </div>
  )
}
