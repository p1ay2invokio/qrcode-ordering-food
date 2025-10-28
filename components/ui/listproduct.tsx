'use client'

import { useEffect, useState } from "react";
import { Menubar, MenubarMenu, MenubarTrigger } from "./menubar";
import axios from "axios";
import { useCart } from "@/app/page";
import Category from "./category";



const ListProduct = () => {

  const {cart, resetCart, addToCart} = useCart()

  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const data = await axios.get(`https://fakestoreapi.com/products`)

    return data
  }

  useEffect(() => {
    (async () => {
      let res = await getProducts()

      // console.log(res)
      setProducts(res.data)
    })()
  }, [])


  return (
    <div className="p-2 pb-30">

      <Category/>

      <div className="flex justify-center items-center">
        <div className="grid grid-cols-2 gap-2 w-full">
          {products && products.length > 0 ? products.map((item: any, index:number) => {
            return (
              <div key={index} onClick={()=>{
                addToCart(item)
              }} className="border bg-card cursor-pointer shadow rounded-lg w-full h-[200px]">
                <div className="w-full h-[80%] flex justify-center items-center">
                  <p>No Image</p>
                </div>
                <div className="flex font-[pmedium] justify-between w-full pl-2 pr-2">
                  <p className="w-[70px] text-nowrap overflow-hidden text-ellipsis">{item.title}</p>
                  <p>{item.price}$</p>
                </div>
              </div>
            )
          }) : null}
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
