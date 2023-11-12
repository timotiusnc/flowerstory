import Link from 'next/link'

import { Button } from '@/components/Button'
import { SlimLayout } from '@/components/SlimLayout'

import logo from '@/images/logo.png'
import Image from 'next/image'

export default function NotFound() {
  return (
    <SlimLayout>
      <div className="flex">
        <Link href="/" aria-label="Home" className="flex items-center">
          <Image src={logo} alt="FlowerStory Logo" className="h-10 w-auto" />
          <span className="ml-2 rounded-lg  p-2 font-display text-lg uppercase lg:bg-transparent lg:p-0 lg:text-xl lg:backdrop-blur-none">
            FlowerStory
          </span>
        </Link>
      </div>
      <p className="mt-20 text-sm font-medium text-gray-700">404</p>
      <h1 className="mt-3 text-lg font-semibold text-gray-900">
        Flower not found
      </h1>
      <p className="mt-3 text-sm text-gray-700">
        Sorry, we couldn’t find the <s>page</s> flower you’re looking for.
      </p>
      <Button href="/" className="mt-10">
        Go back home
      </Button>
    </SlimLayout>
  )
}
