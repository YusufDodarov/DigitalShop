import { getProductById } from '@/app/api/product/route'
import ProductForm from '@/components/ProductForm'

export default async function ProductPage({ params }: { params: { id: string } }) {
  const { id } = params;
  let product = null;

  try {
    product = await getProductById(id);
  } catch (err) {
    console.error("Error fetching product:", err);
  }

  if (!product) {
    return <div className="text-center py-10 text-red-500">Product not found</div>;
  }

  return (
    <div>
      <ProductForm product={product} />
    </div>
  )
}
