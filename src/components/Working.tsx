import Image from "next/image";
import { BackgroundBeams } from "./ui/background-beams";
import image from "@/images/image.png"
import vscode from "@/images/vscode.png"
import Link from "next/link";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

export default function Working() {
    return(
        <div className="mt-20 flex flex-col align-middle justify-center">
            <h2 className="text-lg md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">Usage</h2>
            
            <div className=" mt-4 flex align-middle justify-center">
            <Link href={"/docs"} >
                <HoverBorderGradient containerClassName="rounded-full" as="button" className="  border-spacing-9 dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2">
                    <span> See Documentation</span>
                </HoverBorderGradient>
            </Link>
            </div>
            <Image src={vscode} alt="update" className=" w-full max-w-3xl max-h-3xl mt-3 mx-auto"/>
            <Image src={image} alt="update" className=" w-full max-w-3xl max-h-3xl mt-3 mx-auto"/>
        </div>
    )
}