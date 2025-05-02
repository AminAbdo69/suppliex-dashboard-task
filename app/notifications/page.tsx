import { Card } from "@/components/ui/Card";
import { Bell } from "lucide-react";

const notifications = [
  {
    id: 1,
    title: "New Order Received",
    message: "You have received a new order #1234",
    time: "5 minutes ago",
  },
  {
    id: 2,
    title: "Low Stock Alert",
    message: "Product 'Widget X' is running low on stock",
    time: "1 hour ago",
  },
  {
    id: 3,
    title: "Payment Received",
    message: "Payment for order #1233 has been processed",
    time: "2 hours ago",
  },
];

export default function NotificationsPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
        <p className="text-gray-500">
          Stay updated with your latest notifications.
        </p>
      </div>

      <div className="max-w-2xl space-y-4">
        {notifications.map((notification) => (
          <Card key={notification.id}>
            <div className="flex items-start">
              <div className="h-8 w-8 rounded-full bg-[#038C8C]/10 flex items-center justify-center mr-4">
                <Bell className="h-4 w-4 text-[#038C8C]" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">{notification.title}</h3>
                <p className="text-sm text-gray-500">{notification.message}</p>
                <p className="text-xs text-gray-400 mt-1">
                  {notification.time}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
