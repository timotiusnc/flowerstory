import Image from 'next/image'
import { Container } from './Container'
import Link from 'next/link'

const testimonials = [
  {
    url: 'https://flowerstoryco.id/cdn/shop/files/stellajulian_72401521_149244916466303_7288109275247591425_n_720x.jpg?v=1614730523',
    name: 'stellajulian',
    testi:
      "All the perfect little details that made my day Thank you for all vendors, couldn't be happier with everything 💖",
  },
  {
    url: 'https://flowerstoryco.id/cdn/shop/files/Screen_Shot_2021-02-07_at_01.52.45_720x.png?v=1614746402',
    name: 'biandac',
    testi:
      'Tanpa perlu jelasin panjang lebar, Flowerstory bisa mewujudkan dekor dan backdrop keinginanku, dengan harga yang terjangkau pula. Flowerstory juga sangat sabar mengikuti keinginanku ini dan itu, two thumbs up for her!',
  },
  {
    url: 'https://flowerstoryco.id/cdn/shop/files/Screen_Shot_2021-02-07_at_01.53.33_720x.png?v=1614746402',
    name: 'diah.ayu90',
    testi:
      '“Saya bukan tergolong pecinta bunga, jadi saya kurang mengerti kualitas bunga, tapi saat pertama kali menghubungi dan mengobrol dengan tim Flowerstory, dia bisa memberikan masukan mengenai jenis bunga dan arrangement yang cocok. Saat hari H, bunga diantar tepat waktu dan kaget karena ternyata hasilnya super indah. My favourite red calla lily, so beautiful!',
  },
]

export function WhatTheySaid() {
  return (
    <section
      id="testimonials"
      aria-label="What They Said"
      className="relative overflow-hidden bg-white py-7 lg:py-10"
    >
      <Container>
        <h1 className="mb-12 text-center font-display text-3xl lg:text-4xl">
          What They Said
        </h1>
        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial) => (
            <Testi
              key={testimonial.url}
              url={testimonial.url}
              name={testimonial.name}
              testi={testimonial.testi}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

function Testi({
  url,
  name,
  testi,
}: {
  url: string
  name: string
  testi: string
}) {
  return (
    <div className="flex max-w-xs flex-col gap-4 font-display">
      <div className="relative flex  items-center justify-center">
        <Link
          href={`https://instagram.com/${name}`}
          target="_blank"
          rel="noreferer"
        >
          <Image
            alt="Flower"
            src={url}
            width={200}
            height={300}
            className="rounded-lg shadow-md hover:underline hover:shadow-xl"
            style={{ width: '100%', height: '100%' }}
          />
        </Link>
      </div>
      <Link
        href={`https://instagram.com/${name}`}
        target="_blank"
        rel="noreferer"
      >
        <div className="text-lg text-slate-800 hover:underline lg:text-xl">{`@${name}`}</div>
      </Link>
      <div className="italic text-slate-800">{testi}</div>
    </div>
  )
}
