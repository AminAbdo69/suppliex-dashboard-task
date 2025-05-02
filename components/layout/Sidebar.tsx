"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Barchart,
  Home,
  Markting,
  Notification,
  Orders,
  Product,
  Profile,
  Settings,
} from "@/assets/icons";
import { Button } from "../ui/button";
import { useState } from "react";

import suppliexLogo from "../../assets/images/logo.svg";

const navigationItems = [
  { name: "Home", icon: Home, href: "/" },
  { name: "Dashboard", icon: Barchart, href: "/dashboard" },
  { name: "Products", icon: Product, href: "/products" },
  { name: "Orders", icon: Orders, href: "/orders" },
  { name: "Profile", icon: Profile, href: "/profile" },
  { name: "Settings", icon: Settings, href: "/settings" },
  { name: "Notification", icon: Notification, href: "/notifications" },
  { name: "Markting", icon: Markting, href: "/marketing" },
];

export function Sidebar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="w-48  bg-[#E0F3F1] border-r flex flex-col gap-4 border-gray-200">
      <div className="p-3">
        <Image src={suppliexLogo} alt="Suppliex" className="w-full h-10" />
      </div>
      <nav className="space-y-2 px-3 ">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          if (item.name === "Profile") {
            return (
              <div key={item.name} className="space-y-1">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg hover:bg-[#038C8C] hover:text-white text-gray-900 group transition-colors"
                >
                  <Icon className="h-5 w-5 mr-2 text-black group-hover:text-white" />
                  {item.name}
                </button>
                {isProfileOpen && (
                  <Link
                    href="/profile/edit"
                    className="flex items-center px-3 py-2 text-sm font-medium hover:text-[#038C8C] text-gray-900 transition-colors ml-7"
                  >
                    Edit Profile
                  </Link>
                )}
              </div>
            );
          }
          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center px-3 py-2 text-sm font-medium rounded-lg hover:bg-[#038C8C] hover:text-white text-gray-900 group transition-colors"
            >
              <Icon className="h-5 w-5 mr-2 text-black group-hover:text-white" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="border border-[#0A3136] rounded-lg w-40 items-center mx-auto my-4"></div>

      <div>
        <div className="p-4 space-y-4">
          <Button
            variant="outline"
            className="w-full bg-transparent items-center text-sm text-[#0A3136] border border-[#0A3136] hover:bg-[#0A3136] hover:text-white"
          >
            Need Help!
          </Button>
          <Button
            variant="default"
            className="w-full items-center bg-[#0A3136] hover:bg-[#038C8C]/90 text-white text-sm"
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}
