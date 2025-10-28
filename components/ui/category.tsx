import { Button } from "./button"
import { Card } from "./card"

const Category=()=>{

    return(
        <div className="w-full mb-5 mt-3 rounded-lg h-[50px] border border-gray-300 flex overflow-scroll bg-card">
            <Button className="w-20 h-full font-[regular] text-[16px]" variant={'ghost'}>ทั้งหมด</Button>
            <Button className="w-20 h-full font-[regular] text-[16px]" variant={'ghost'}>สินค้าแนะนำ</Button>
            <Button className="w-20 h-full font-[regular] text-[16px]" variant={'ghost'}>อาหาร</Button>
            <Button className="w-20 h-full font-[regular] text-[16px]" variant={'ghost'}>เครื่องดื่ม</Button>
            <Button className="w-20 h-full font-[regular] text-[16px]" variant={'ghost'}>ขนม</Button>
        </div>
    )
}

export default Category