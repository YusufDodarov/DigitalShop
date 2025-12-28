import { getProducts } from "@/app/api/product/route";
import { ProductsWithImages } from "@/app/types";
import ProductTable from "@/components/ProductTable";

export default async function DashBoardPage() {
  let products: ProductsWithImages[] = [];
  try {
    products = await getProducts() || [];
  } catch (err) {
    console.error("Error fetching products:", err);
  }

  return (
    <div className="mt-30">
      {products.length === 0 ? (
        <div className="text-center py-10 text-gray-500">No products found</div>
      ) : (
        <ProductTable products={products} />
      )}
    </div>
  )
}
