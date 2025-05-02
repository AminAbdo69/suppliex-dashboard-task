import { Card } from "@/components/ui/Card";
import {
  BarChart,
  LineChart,
  Activity,
  DollarSign,
  Package,
  Users,
} from "lucide-react";

const stats = [
  {
    name: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1%",
    icon: DollarSign,
  },
  {
    name: "Active Orders",
    value: "356",
    change: "+8.2%",
    icon: Package,
  },
  {
    name: "Active Users",
    value: "2,103",
    change: "+15.3%",
    icon: Users,
  },
  {
    name: "Conversion Rate",
    value: "15.2%",
    change: "+2.3%",
    icon: Activity,
  },
];

export default function Home() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-500">
          Welcome back! Here s whats happening with your business today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.name} className="relative">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    {stat.name}
                  </p>
                  <p className="text-2xl font-semibold mt-1">{stat.value}</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-[#038C8C]/10 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-[#038C8C]" />
                </div>
              </div>
              <div className="mt-4">
                <span className="text-sm font-medium text-[#038C8C]">
                  {stat.change}
                </span>
                <span className="text-sm text-gray-500"> from last month</span>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Revenue Overview">
          <div className="h-[300px] flex items-center justify-center">
            <LineChart className="h-8 w-8 text-gray-400" />
            <span className="ml-2 text-gray-500">
              Chart will be implemented here
            </span>
          </div>
        </Card>

        <Card title="Sales Analytics">
          <div className="h-[300px] flex items-center justify-center">
            <BarChart className="h-8 w-8 text-gray-400" />
            <span className="ml-2 text-gray-500">
              Chart will be implemented here
            </span>
          </div>
        </Card>
      </div>
    </div>
  );
}
