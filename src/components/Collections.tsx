import Image from 'next/image'
import { Container } from './Container'
import Link from 'next/link'

const collections = [
  {
    url: 'https://flowerstoryco.id/cdn/shop/collections/IMG_0168_300x300.jpg?v=1616399631',
    name: 'ON SALE',
    external_url: 'https://flowerstoryco.id/collections/on-sale',
  },
  {
    url: 'https://flowerstoryco.id/cdn/shop/collections/3_Single_rose_100_300x300.jpg?v=1622707467',
    name: 'Small Bouquet',
    external_url: 'https://flowerstoryco.id/collections/mini-bouquet',
  },
  {
    url: 'https://flowerstoryco.id/cdn/shop/collections/1149F491-1FFE-42FB-9108-D601EA023974-740-0000007F113930F8_300x300.jpg?v=1622707445',
    name: 'Medium Bouquet',
    external_url: 'https://flowerstoryco.id/collections/dried-bouquet',
  },
  {
    url: 'https://flowerstoryco.id/cdn/shop/collections/158_Colere_Belle_750_300x300.jpg?v=1622707423',
    name: 'Big Bouquet',
    external_url: 'https://flowerstoryco.id/collections/frontpage',
  },
  {
    url: 'https://flowerstoryco.id/cdn/shop/collections/0F030259-BF81-4138-9773-A9E9AF5BE5C0-BFFD4D42-5773-4B07-BBE9-4CF19C8CAB06_2_300x300.jpg?v=1612414917',
    name: 'Dried Flowers',
    external_url: 'https://flowerstoryco.id/collections/dried-flowers',
  },
  {
    url: 'https://flowerstoryco.id/cdn/shop/collections/7CB4E273-8D08-4408-B245-CBCFDAA7B7C7_300x300.jpg?v=1613907866',
    name: 'Vase Arrangement',
    external_url: 'https://flowerstoryco.id/collections/vase-arrangement',
  },
  {
    url: 'https://flowerstoryco.id/cdn/shop/collections/19FFC1E0-7DAF-4E98-8128-2450598796EF-1972-00000217D4737376_2_300x300.jpg?v=1612507840',
    name: 'Flower Box',
    external_url: 'https://flowerstoryco.id/collections/flower-box',
  },
  {
    url: 'https://flowerstoryco.id/cdn/shop/collections/IMG_9072_720x.jpg?v=1615177755',
    name: 'Wedding',
    external_url: 'https://flowerstoryco.id/collections/wedding',
  },
  {
    url: 'https://flowerstoryco.id/cdn/shop/collections/DSC04080_1_720x.jpg?v=1612715956',
    name: 'Others',
    external_url: 'https://flowerstoryco.id/collections/others',
  },
]

export function Collections() {
  return (
    <section
      id="collections"
      aria-label="Discover our collections"
      className="relative overflow-hidden bg-amber-50 py-7 lg:py-10"
    >
      <Container>
        <h1 className="mb-12 text-center font-display text-3xl lg:text-4xl">
          Shop Our Collection
        </h1>
        <div className="flex flex-wrap justify-center gap-8">
          {collections.map((collection) => (
            <Flower
              key={collection.url}
              url={collection.url}
              name={collection.name}
              external_url={collection.external_url}
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
  external_url,
}: {
  url: string
  name: string
  external_url: string
}) {
  return (
    <Link href={external_url} target="_blank" rel="noopener">
      <div className="flex flex-col gap-4 font-display">
        <div className="relative flex min-h-[150px] min-w-[150px] items-center justify-center rounded-lg px-3 py-1 shadow-md hover:shadow-xl lg:min-h-[300px] lg:min-w-[300px]">
          <Image
            alt="Flower"
            src={url}
            width={350}
            height={350}
            className="absolute inset-0 rounded-lg"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="absolute inset-0 min-h-full min-w-full rounded-lg bg-black/25 hover:bg-black/40"></div>
          <div className="relative text-lg leading-3 text-white lg:text-2xl">
            {name}
          </div>
        </div>
      </div>
    </Link>
  )
}
