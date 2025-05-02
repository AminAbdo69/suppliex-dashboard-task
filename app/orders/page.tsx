import { Card } from "@/components/ui/Card";
import { ShoppingCart } from "lucide-react";

const dummyOrders = [
  {
    id: "ORD-001",
    customer: "John Doe",
    status: "Delivered",
    amount: "$299.99",
  },
  {
    id: "ORD-002",
    customer: "Jane Smith",
    status: "Processing",
    amount: "$149.50",
  },
  {
    id: "ORD-003",
    customer: "Mike Johnson",
    status: "Pending",
    amount: "$599.99",
  },
];

export default function OrdersPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Orders</h1>
        <p className="text-gray-500">Track and manage customer orders.</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {dummyOrders.map((order) => (
          <Card key={order.id}>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <ShoppingCart className="h-6 w-6 text-[#038C8C] mr-4" />
                <div>
                  <h3 className="font-medium">{order.customer}</h3>
                  <p className="text-sm text-gray-500">Order ID: {order.id}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">{order.amount}</p>
                <p className="text-sm text-[#038C8C]">{order.status}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
