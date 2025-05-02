import { Card } from "@/components/ui/Card";
import { Settings } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-500">Configure your application preferences.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 max-w-2xl">
        <Card>
          <div className="flex items-center mb-4">
            <Settings className="h-6 w-6 text-[#038C8C] mr-3" />
            <h2 className="text-lg font-semibold">General Settings</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Language
              </label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Time Zone
              </label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                <option>UTC-5 (Eastern Time)</option>
                <option>UTC-8 (Pacific Time)</option>
                <option>UTC+0 (GMT)</option>
              </select>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
