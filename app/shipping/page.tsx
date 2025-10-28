'use client'

import Footer from "@/components/ui/footer"
import { useCart } from "../page"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import Swal from "sweetalert2"
import toast from "react-hot-toast"
import { useState } from "react"
import Loading from "@/components/ui/loading"

const Shipping = () => {

    const navigate = useRouter()

    const { cart, resetCart } = useCart()

    const [loading, setLoading] = useState(false)

    const total = cart.reduce((t: number, item: any) => {
        return t = t + (item.qty * item.price)
    }, 0)

    // if (cart && cart.length <= 0) {
    //     navigate.push("/")
    // }

    return (
        <div>

            {loading ? <Loading /> : null}

            <div className="p-4">

                {cart && cart.length > 0 ? cart.map((item: any, index: number) => {
                    return (
                        <div className="flex w-full justify-between">
                            <div>
                                <p className="text-[18px] w-[150px] text-nowrap overflow-hidden text-ellipsis font-[medium]">{item.title}</p>
                                <p className="text-[14px] text-gray-500">x {item.qty}</p>
                            </div>
                            <p className="text-[18px] font-[medium]">{item.price * item.qty}</p>
                        </div>
                    )
                }) : null}

                <div className="mt-5">
                    {cart && cart.length > 0 ? <div>
                        <Separator className="bg-foreground"/>

                        <div className="flex justify-between">
                            <p className="font-[medium] text-[22px]">ยอดเงิน</p>
                            <p className="font-[medium] text-[22px]">{total.toFixed(2)} บาท</p>
                        </div>
                    </div> : null}
                </div>


                <Button onClick={() => {
                    setLoading(true)
                    setTimeout(() => {
                        setLoading(false)
                        toast.success("สั่งซื้อสำเร็จ")
                        resetCart()
                        Swal.fire("สั่งซื้อสินค้าสำเร็จ", '', 'success')
                        navigate.push("/")
                    }, 2000)

                }} className="w-[calc(100%-36px)] fixed bottom-25 font-[medium] text-[20px] h-[45px] cursor-pointer">ยืนยันสั่งสินค้า</Button>

            </div>
            <Footer></Footer>
        </div>
    )
}

export default Shipping