import { Card } from "@/components/ui/Card";
import { Package } from "lucide-react";

const dummyProducts = [
  { id: 1, name: "Product A", price: "$99.99", stock: 150 },
  { id: 2, name: "Product B", price: "$149.99", stock: 89 },
  { id: 3, name: "Product C", price: "$199.99", stock: 234 },
];

export default function ProductsPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Products</h1>
        <p className="text-gray-500">
          Manage your product inventory and listings.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {dummyProducts.map((product) => (
          <Card key={product.id}>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Package className="h-6 w-6 text-[#038C8C] mr-4" />
                <div>
                  <h3 className="font-medium">{product.name}</h3>
                  <p className="text-sm text-gray-500">
                    In stock: {product.stock}
                  </p>
                </div>
              </div>
              <p className="font-medium">{product.price}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
