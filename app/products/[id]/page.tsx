import { getProductById } from '@/app/api/product/route'
import ProductDetail from '@/app/modules/products/ProductDetail'
import { ProductsWithImages } from '@/app/types'
import customMetadata from '@/lib/metadata'
import { Metadata } from 'next'

export async function generateMetadata(
  { params }: { params: { id: string } }
): Promise<Metadata> {
  const product = await getProductById(params.id) as ProductsWithImages | null
  if (!product) {
    return {
      title: 'Product not found',
      description: 'This product does not exist',
    }
  }
  
  return customMetadata({
    title: product.title,
    description: product.description ?? '',
    images: product.images,
  })
}


export default async function page({ params }:{ params: { id: string } }) {
  const data =await params
  const {id}=data
  const product=await getProductById(id) as ProductsWithImages
  return <div><ProductDetail key={product?.id} {...product} /></div>
}
