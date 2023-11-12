import Image from 'next/image'
import { Container } from './Container'
import clsx from 'clsx'
import Link from 'next/link'

const onSales = [
  {
    url: 'https://flowerstoryco.id/cdn/shop/products/AssezViolet250_540x.jpg?v=1698910441',
    name: 'Assez Violet',
    isStart: false,
    price: '350.000,00',
    strike: '375.000',
  },
  {
    url: 'https://flowerstoryco.id/cdn/shop/products/8C1D4C5A-D442-49D1-AF8E-787D1F3F73BA-4326-000002BCEE799746_540x.jpg?v=1698649408',
    name: 'Mini Hydra',
    isStart: true,
    price: '175.000,00',
    strike: '225.000',
  },
  {
    url: 'https://flowerstoryco.id/cdn/shop/products/Felicite_Peach_325_540x.jpg?v=1699327369',
    name: 'Felicite',
    isStart: true,
    price: '350.000,00',
    strike: '400.000',
  },
  {
    url: 'https://flowerstoryco.id/cdn/shop/products/2022_0308_09331200_540x.jpg?v=1647401538',
    name: 'Hydra Rose',
    isStart: true,
    price: '400.000,00',
    strike: '450.000',
  },
  {
    url: 'https://flowerstoryco.id/cdn/shop/products/AFCDE74D-787E-4EDA-BE65-6C8EF2498D7C-1385-000000E2CE9D4B40_540x.jpg?v=1613895651',
    name: 'Gompie Belle',
    isStart: false,
    price: '450.000,00',
    strike: '500.000',
  },
  {
    url: 'https://flowerstoryco.id/cdn/shop/files/IMG-20231110_111323_526_540x.jpg?v=1699589874',
    name: 'Orchid Sakura',
    isStart: false,
    price: '425.000,00',
    strike: '575.000',
  },
  {
    url: 'https://flowerstoryco.id/cdn/shop/products/Deepend_540x.jpg?v=1626168752',
    name: 'Asterina',
    isStart: false,
    price: '325.000,00',
    strike: '350.000',
  },
  {
    url: 'https://flowerstoryco.id/cdn/shop/products/2021_1005_16292700_540x.jpg?v=1633424795',
    name: 'Petite Orange',
    isStart: false,
    price: '300.000,00',
    strike: '350.000',
  },
]

export function OnSale() {
  return (
    <section
      id="onsale"
      aria-label="Discover what's on sale"
      className="relative overflow-hidden bg-white py-7 lg:py-20"
    >
      <Container>
        <h1 className="mb-12 text-center font-display text-3xl lg:text-4xl">
          On Sale
        </h1>
        <div className="flex flex-wrap justify-center gap-8">
          {onSales.map((onSale) => (
            <Flower
              key={onSale.url}
              url={onSale.url}
              name={onSale.name}
              isStart={onSale.isStart}
              price={onSale.price}
              strike={onSale.strike}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

function Flower({
  url,
  name,
  isStart,
  price,
  strike,
}: {
  url: string
  name: string
  isStart: boolean
  price: string
  strike: string
}) {
  return (
    <Link href="/shop">
      <div className="flex flex-col gap-4 font-display">
        <div className="relative flex min-h-[150px] min-w-[150px] flex-col-reverse rounded-lg px-3 py-1 shadow-md hover:shadow-xl lg:min-h-[250px] lg:min-w-[250px]">
          <Image
            alt="Flower"
            src={url}
            width={350}
            height={350}
            className="absolute inset-0 rounded-lg"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="hidden flex-col text-right lg:flex">
            <div className="absolute inset-0 min-h-full min-w-full rounded-lg bg-gradient-to-t from-white/70 via-black/0 hover:from-white/75"></div>
            {strike && (
              <div className="relative text-lg leading-3 text-slate-600 line-through">
                {strike}
              </div>
            )}

            <div
              className={clsx('relative font-bold', !!strike && 'text-red-500')}
            >
              {isStart ? <span className="text-lg">from </span> : ''}
              <span className="text-xl">{price}</span>
            </div>
          </div>
        </div>
        <div className="items-left flex flex-col gap-2 lg:items-center">
          <span className="text-base leading-none text-slate-900 lg:text-xl">
            {name}
          </span>
          <span className="block text-lg leading-none text-red-500 lg:hidden">
            {price}
          </span>
          {strike && (
            <span className="block leading-none text-slate-500 line-through lg:hidden">
              {strike}
            </span>
          )}
          {strike && (
            <span className="inline-flex w-min items-center rounded-md bg-red-50 px-2 py-1 font-sans text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
              Sale
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}
