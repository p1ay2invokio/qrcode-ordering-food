"use client"

import { Button } from "@/components/ui/button";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import ListProduct from "@/components/ui/listproduct";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { create } from "zustand";

const cartStore = (set: any) => ({
  cart: [],
  resetCart: () => set((state: any) => ({ cart: [] })),
  addToCart: (product: any) => {
    set((state: any) => {
      let checksame = state.cart.filter((item: any) => product.id == item.id)

      if (checksame.length <= 0) {
        return {
          cart: [...state.cart, { ...product, qty: 1 }]
        }
      } else {

        let updatedCart = state.cart.map((item: any) => {
          return {
            ...item,
            qty: item.id == product.id ? item.qty ? item.qty + 1 : 1 : item.qty
          }
        })

        return {
          cart: updatedCart
        }
      }

      // return state
    })
  },
  removeCart: (productId: any) => set((state: any) => ({}))
})

export const useCart = create(cartStore)

export default function Home() {

  let navigate = useRouter()


  const { cart } = useCart()

  let totalPrice = cart.reduce((total: number, item: any) => {
    return total = total + (item.price * item.qty)
  }, 0)


  return (
    <div>
      <Header></Header>
      <ListProduct></ListProduct>
      <Footer></Footer>

      {cart && cart.length > 0 ? <Button onClick={()=>{
        navigate.push("/shipping")
      }} className="w-[90%] left-5 h-10 fixed bottom-23 flex justify-between font-[medium] text-[20px] cursor-pointer bg-foreground">
        <p>ชำระเงิน</p>
        <p>{totalPrice.toFixed(2)} บาท</p>
      </Button> : null}
    </div>
  );
}
