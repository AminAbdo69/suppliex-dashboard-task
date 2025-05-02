import Link from "next/link";
import Image from "next/image";

import suppliexLogo from "../../assets/images/logo.svg";
import { Barchart, Home } from "@/assets/icons";
const navigationItems = [
  { name: "Home", icon: Home, href: "/" },
  { name: "Dashboard", icon: Barchart, href: "/" },

  // { name: "Products", icon: Package, href: "/products" },
  // { name: "Orders", icon: Users, href: "/orders" },
  // { name: "Notifications", icon: Bell, href: "/notifications" },
  // { name: "Settings", icon: Settings, href: "/settings" },
];

export function Sidebar() {
  return (
    <div className="w-48 h-screen bg-[#E0F3F1] border-r flex flex-col justify-start gap-10 border-gray-200">
      <div className="p-6 ">
        <Image src={suppliexLogo} alt="Suppliex" className="w-full h-10" />
      </div>
      <nav className="space-y-2 px-3">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center px-3 py-2 text-sm font-medium rounded-lg hover:bg-gray-100 text-gray-900 group"
            >
              <Icon className="h-5 w-5 mr-2 text-gray-500" />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
