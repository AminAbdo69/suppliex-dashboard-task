import { Card } from "@/components/ui/Card";
import { BarChart } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Analytics Dashboard
        </h1>
        <p className="text-gray-500">
          View your business metrics and performance indicators.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Monthly Performance">
          <div className="h-[300px] flex items-center justify-center">
            <BarChart className="h-8 w-8 text-[#038C8C]" />
            <span className="ml-2 text-gray-500">Chart coming soon</span>
          </div>
        </Card>
      </div>
    </div>
  );
}
