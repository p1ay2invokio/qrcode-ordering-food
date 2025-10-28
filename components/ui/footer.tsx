"use client";

import { FaHistory } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";

import { useRouter } from "next/navigation";
import { useCart } from "@/app/page";

const Footer = () => {

  const { cart } = useCart()

  const navigate = useRouter();


  let totalQty = cart.reduce((total: number, item: any) => {
    return total = total + item.qty
  }, 0)

  return (
    <div className="w-full border-t grid grid-cols-2  place-items-center shadow-sm h-20 fixed bottom-0 bg-background">
      <div
        onClick={() => {
          navigate.push("/");
        }}
        className="flex w-full h-full flex-col justify-center items-center gap-2 cursor-pointer"
      >
        <FaClipboardList className="w-8 h-8" />
        {cart && cart.length > 0 ? <div className="absolute top-0 right-65 w-8 h-8 flex justify-center items-center bg-red-500 text-white rounded-full">
          <p>{totalQty}</p>
        </div> : null}
        <p className="font-[medium]">อาหาร</p>
      </div>
      <div
        onClick={() => {
          navigate.push("/history");
        }}
        className="flex w-full h-full flex-col justify-center items-center gap-2 cursor-pointer"
      >
        <FaHistory className="w-8 h-8" />
        <p className="font-[medium]">ประวัติสั่งซื้อ</p>
      </div>
    </div>
  );
};

export default Footer;
