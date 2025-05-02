import { Card } from "@/components/ui/Card";
import { User } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
        <p className="text-gray-500">
          Manage your account settings and preferences.
        </p>
      </div>

      <div className="max-w-2xl">
        <Card>
          <div className="flex items-center mb-6">
            <div className="h-16 w-16 rounded-full bg-[#038C8C]/10 flex items-center justify-center">
              <User className="h-8 w-8 text-[#038C8C]" />
            </div>
            <div className="ml-4">
              <h2 className="text-xl font-semibold">John Doe</h2>
              <p className="text-gray-500">john.doe@example.com</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Company</h3>
              <p className="mt-1">Acme Inc.</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Role</h3>
              <p className="mt-1">Administrator</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Location</h3>
              <p className="mt-1">New York, USA</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
