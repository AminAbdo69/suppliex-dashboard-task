import Image from "next/image";
import HeaderImage from "../../../assets/images/EditProfileHeader.jpg";
import ProfileImage from "../../../assets/images/profile.png";
import VerifiedImage from "../../../assets/images/Verified.png";
import OGImage from "../../../assets/images/og-image.png";
import OG2Image from "../../../assets/images/og2.jpg";
import FirstChart from "../../../assets/images/firstChart.jpg";
import SecondChart from "../../../assets/images/secondChart.jpg";
import ThirdChart from "../../../assets/images/thirdChart.jpg";
import FourthChart from "../../../assets/images/FourthChart.jpg";
import { Profile } from "@/assets/icons";
import { Component } from "@/components/ui/AreaChartStacked";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export default function EditProfilePage() {
  return (
    <>
      <div className=" flex flex-col gap-4 pl-2">
        <div className="bg-white border-b">
          <div className="relative h-32 ">
            <Image
              src={HeaderImage}
              alt="Cover Image"
              className="w-full h-full object-cover"
            />
            <div className="absolute -bottom-12 left-8 h-24 w-24 rounded-full bg-[#E5DADA]  flex  items-center justify-center">
              <Image
                src={ProfileImage}
                alt="Profile Image"
                className=" bg-cover w-full "
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-6 px-2">
          <div className="flex justify-between flex-col items-center gap-1">
            <Switch className="bg-[#038C8C] data-[state=checked]:bg-[#038C8C] " />
            <p className="text-sm text-gray-500">Make your profile public</p>
          </div>
          <Button className="bg-[#0A3136]">Edit Profile</Button>
          <Button variant={"outline"}>view public profile</Button>
        </div>
        <div className="flex justify-between w-full px-2 ">
          <h1 className="text-xl font-bold text-gray-900 pl-11">Chiko</h1>
          <span className="text-gray-500 text-sm underline">
            Profile Completion status 80%
          </span>
        </div>
      </div>

      <div>
        <div className="flex flex-col gap-4 p-2 mt-4">
          <div className="flex  gap-4 w-full">
            <div className="flex flex-col gap-4">
              <p className=" text-xl">Business Summary</p>
              <div className="text-[#616161] text-sm bg-[#F5F5F5]  h-36 p-2 w-[700px]">
                <p>
                  Chiko Footwear is a modern footwear brand known for its
                  stylish, high-quality, and trend-driven shoes. The company
                  focuses on providing fashionable yet comfortable footwear for
                  both men and women, combining innovative designs with premium
                  craftsmanship. With a strong online presence and a commitment
                  to delivering the latest fashion trends, Chiko Footwear has
                  gained popularity among style-conscious customers worldwide.
                </p>
              </div>

              <p className=" text-xl">Location</p>
              <div className="text-[#616161] text-sm bg-[#F5F5F5]  h-fit p-2 w-[700px]">
                <p>Naser city, cairo , 40 building, 3th floor</p>
              </div>
            </div>
            <div className="w-72 h-40 flex-1 mx-16 px-3">
              <Image
                src={VerifiedImage}
                alt="Verified Image"
                className="w-[240px] h-[200px] "
              />
            </div>
          </div>
          <div className="flex    gap-4">
            <div className="flex w-full gap-6  p-3">
              <div className="flex justify-between gap-2  w-full  ">
                <div>
                  <span className="text-xs text-gray-500">Choose / Change</span>
                  <p className="text-xl font-bold my-1">Templates</p>
                  <p className="text-xs text-gray-500 text-wrap w-70 ">
                    From colors, cards, typography to complex elements, you will
                    find the full documentation.
                  </p>

                  <p className="text-xs underline mt-12">Read more &gt;</p>
                </div>
                <Image
                  src={OGImage}
                  alt="Og Image"
                  className="w-48 h-40 mr-3 rounded-md  "
                />
              </div>
              <Image
                src={OG2Image}
                alt="Og Image"
                className="h-40 mr-3 rounded-md  "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-2">
        <div>
          <p>Business Overview Dashboard</p>
        </div>
        <div className="flex justify-between gap-4 p-2">
          <Image
            src={FirstChart}
            alt="First Chart Image"
            className="w-80 h-60 rounded-lg "
          />
          <Image
            src={SecondChart}
            alt="Second Chart Image"
            className="w-80 h-60 rounded-lg "
          />
          <Image
            src={ThirdChart}
            alt="Third Chart Image"
            className="w-80 h-60 rounded-lg"
          />
        </div>
        <div className="flex justify-between gap-4">
          <div className="flex flex-col gap-4 p-2 w-fit ">
            <div className="w-full ">
              <Image
                src={FourthChart}
                alt="Fouth Chart Image"
                className="rounded-xl w-full "
              />
            </div>
            <div>
              <p className="text-lg">Top 5 Best-Selling Products</p>
              <p className="text-xs text-gray-500">
                <span className="text-green-400"> (+25 )</span>
                than last month
              </p>
            </div>

            <div className="flex gap-4 mt-4 w-full">
              <div className="flex flex-col gap-2 w-1/4">
                <p className="flex items-center gap-2 text-xs text-gray-500">
                  <Profile className="w-5 h-5 text-white bg-[#4FD1C5] p-[2px] rounded-sm" />
                  Users View
                </p>
                <p className="text-sm">32,984</p>
                <div className="border-1  border-gray-200 rounded-full w-28 flex  items-center bg-gray-200">
                  <div className="border-1  border-[#4FD1C5] rounded-full w-20 "></div>
                </div>
              </div>
              <div className="flex flex-col gap-2 w-1/4">
                <p className="flex items-center gap-2 text-xs text-gray-500">
                  <Profile className="w-5 h-5 text-white bg-[#4FD1C5] p-[2px] rounded-sm" />
                  Clicks
                </p>
                <p className="text-sm">2,420</p>
                <div className="border-1  border-gray-200 rounded-full w-28 flex  items-center bg-gray-200">
                  <div className="border-1  border-[#4FD1C5] rounded-full w-24 "></div>
                </div>
              </div>
              <div className="flex flex-col gap-2 w-1/4">
                <p className="flex items-center gap-2 text-xs text-gray-500">
                  <Profile className="w-5 h-5 text-white bg-[#4FD1C5] p-[2px] rounded-sm" />
                  Sales
                </p>
                <p className="text-sm">2,400$</p>
                <div className="border-1  border-gray-200 rounded-full w-28 flex  items-center bg-gray-200">
                  <div className="border-1  border-[#4FD1C5] rounded-full w-16 "></div>
                </div>
              </div>
              <div className="flex flex-col gap-2 w-1/4">
                <p className="flex items-center gap-2 text-xs text-gray-500">
                  <Profile className="w-5 h-5 text-white bg-[#4FD1C5] p-[2px] rounded-sm" />
                  Items Sold
                </p>
                <p className="text-sm">320</p>
                <div className="border-1  border-gray-200 rounded-full w-28 flex  items-center bg-gray-200">
                  <div className="border-1  border-[#4FD1C5] rounded-full w-18 "></div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-2/3">
            <Component />
          </div>
        </div>
      </div>
    </>
  );
}
