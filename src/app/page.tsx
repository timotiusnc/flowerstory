import { CallToAction } from '@/components/CallToAction'
import { Carousel } from '@/components/Carousel'
import { Collections } from '@/components/Collections'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { OnSale } from '@/components/OnSale'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { WhatTheySaid } from '@/components/WhatTheySaid'
import { Location } from '@/components/Location'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <OnSale />
        <Collections />
        <Carousel />
        <WhatTheySaid />
        <Location />
      </main>
      <Footer />
    </>
  )
}
