import Image from "next/image";
import { BackgroundBeams } from "./ui/background-beams";
import update from "@/images/update.png"
import fetch from "@/images/fetch.png"

export default function Working() {
    return(
        <div className="mt-20 flex flex-col align-middle justify-center">
            <BackgroundBeams/>
            <h2 className="text-lg md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">Usage</h2>
            <Image src={update} alt="update" className=" w-full max-w-screen max-h-3xl mt-3"/>
            <Image src={fetch} alt="fetch" className=" w-full max-w-screen max-h-3xl mt-3"/>
        </div>
    )
}