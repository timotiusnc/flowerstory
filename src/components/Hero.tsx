import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import bgFloral from '@/images/background-floral.png'
import { WhatsAppLogo } from './logo/Whatsapp'

export function Hero() {
  return (
    <Container className="py-20 text-center">
      <Image
        src={bgFloral}
        alt=""
        className="absolute inset-0 h-full min-h-[750px] w-full object-cover"
        priority
      />

      <div className="relative rounded-lg bg-white/50 px-5 py-10 backdrop-blur-[5px] lg:bg-white/40 lg:backdrop-blur">
        <h1 className="relative mx-auto max-w-4xl font-display text-3xl font-medium text-amber-950 lg:text-7xl">
          <span className="bg-gradient-to-b from-amber-950 to-amber-700 bg-clip-text tracking-widest text-transparent">
            FLOWERSTORY
          </span>
          <br />
          <span className="relative whitespace-nowrap text-amber-700">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute left-0 top-2/3 h-[0.58em] w-full fill-amber-300/70"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
            </svg>
            <span className="relative">floral works</span>
          </span>{' '}
        </h1>
        <h2 className="relative mx-auto mt-6 max-w-2xl font-display text-xl font-semibold text-amber-950 lg:text-3xl">
          Every Petal Tells a Tale
        </h2>
        <p className="relative mx-auto mt-6 block max-w-2xl text-sm tracking-tighter text-amber-950 lg:text-lg">
          Experience the art of floral elegance with our bespoke arrangement
          services, tailor-made to add a touch of beauty and emotion to every
          occasion.
        </p>
        <div className="relative flex justify-center gap-x-6 py-10">
          <Button
            href={generateWALink({ phone: '6287788860777' })}
            color="white"
          >
            <WhatsAppLogo className="w-6" />
            <span className="ml-3 font-bold">Contact Us</span>
          </Button>
        </div>
      </div>
    </Container>
  )
}

const defaultWAText =
  'Halo Flower Story, saya dapat kontak ini dari https://flowerstory.vercel.app. Saya ingin pesan karangan bunga.'

export const generateWALink = ({
  phone,
  text,
}: {
  phone: string
  text?: string
}) => {
  return `https://wa.me/${phone}?text=${text ?? defaultWAText}`
}
