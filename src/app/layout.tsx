import { Inter, Crimson_Text } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s - FlowerStory',
    default: 'FlowerStory - Every petal tells a tale',
  },
  description:
    'Flower delivery available in Jakarta, Tangerang, Bekasi, and Depok. We offer fresh and dried flowers for all occasions: birthdays, anniversaries, grand openings, weddings, graduations, and more. Same-day delivery available.',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Crimson_Text({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
  weight: ['400', '600', '700'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}
