import { Spinner } from "./spinner"

const Loading=()=>{
    return(
        <div className="w-full h-dvh bg-black/70 z-1 text-white fixed top-0 left-0 flex justify-center items-center">
            <Spinner className="size-20"/>
        </div>
    )
}

export default Loading