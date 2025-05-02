import { Card } from "@/components/ui/Card";
import { User } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EditProfilePage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Edit Profile</h1>
        <p className="text-gray-500">Update your personal information</p>
      </div>

      <div className="max-w-2xl">
        <Card>
          <div className="flex items-center mb-6">
            <div className="h-16 w-16 rounded-full bg-[#038C8C]/10 flex items-center justify-center">
              <User className="h-8 w-8 text-[#038C8C]" />
            </div>
            <div className="ml-4">
              <label className="block text-sm font-medium text-gray-700">
                Profile Picture
              </label>
              <button className="mt-1 text-sm text-[#038C8C]">
                Change Photo
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                defaultValue="John Doe"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#038C8C] focus:ring-[#038C8C]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                defaultValue="john.doe@example.com"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#038C8C] focus:ring-[#038C8C]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Company
              </label>
              <input
                type="text"
                defaultValue="Acme Inc."
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#038C8C] focus:ring-[#038C8C]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                type="text"
                defaultValue="New York, USA"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#038C8C] focus:ring-[#038C8C]"
              />
            </div>
            <div className="pt-4 flex justify-end space-x-3">
              <Button
                variant="outline"
                className="bg-transparent text-[#0A3136] border border-[#0A3136] hover:bg-[#0A3136] hover:text-white"
              >
                Cancel
              </Button>
              <Button
                variant="default"
                className="bg-[#038C8C] hover:bg-[#038C8C]/90 text-white"
              >
                Save Changes
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
