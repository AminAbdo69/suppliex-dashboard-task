import { Card } from "@/components/ui/Card";
import { TrendingUp } from "lucide-react";

const campaigns = [
  {
    id: 1,
    name: "Summer Sale",
    status: "Active",
    reach: "10.5k",
    conversion: "2.4%",
  },
  {
    id: 2,
    name: "New Product Launch",
    status: "Scheduled",
    reach: "5.2k",
    conversion: "3.1%",
  },
  {
    id: 3,
    name: "Holiday Special",
    status: "Draft",
    reach: "-",
    conversion: "-",
  },
];

export default function MarketingPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Marketing</h1>
        <p className="text-gray-500">
          Manage your marketing campaigns and analytics.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {campaigns.map((campaign) => (
          <Card key={campaign.id}>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-[#038C8C]/10 flex items-center justify-center mr-4">
                  <TrendingUp className="h-5 w-5 text-[#038C8C]" />
                </div>
                <div>
                  <h3 className="font-medium">{campaign.name}</h3>
                  <p className="text-sm text-[#038C8C]">{campaign.status}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Reach: {campaign.reach}</p>
                <p className="text-sm text-gray-500">
                  Conversion: {campaign.conversion}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
