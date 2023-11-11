import Image from 'next/image'
import { Container } from './Container'

const onSales = [
  {
    url: 'https://flowerstoryco.id/cdn/shop/products/AssezViolet250_540x.jpg?v=1698910441',
    name: 'Assez Violet',
    price: '350.000,00',
    strike: '375.000',
  },
  {
    url: 'https://flowerstoryco.id/cdn/shop/products/8C1D4C5A-D442-49D1-AF8E-787D1F3F73BA-4326-000002BCEE799746_540x.jpg?v=1698649408',
    name: 'Mini Hydra',
    price: 'from 175.000,00',
    strike: '225.000',
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
        <div className="flex flex-wrap gap-8">
          {onSales.map((onSale) => (
            <Flower
              key={onSale.url}
              url={onSale.url}
              name={onSale.name}
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
  price,
  strike,
}: {
  url: string
  name: string
  price: string
  strike: string
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative flex min-h-[150px] min-w-[150px] flex-col-reverse rounded-lg bg-white p-4 shadow lg:min-h-[350px] lg:min-w-[350px]">
        <Image
          alt="Flower"
          src={url}
          width={350}
          height={350}
          className="absolute inset-0 rounded-lg"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="flex hidden flex-col-reverse text-right">
          <div className="absolute inset-0 min-h-full min-w-full rounded-lg bg-gradient-to-t from-white/75 from-20% via-black/0"></div>
          <div className="relative font-display text-xl text-slate-900 line-through">
            {strike}
          </div>
          <div className="relative font-display text-xl font-extrabold text-red-500">
            {price}
          </div>
        </div>
      </div>
      <div className="flex flex-col font-display text-xl ">
        <span className="text-slate-900">{name}</span>
        <span className="text-red-500">{price}</span>
        <span className="text-slate-900">{strike}</span>
      </div>
    </div>
  )
}
