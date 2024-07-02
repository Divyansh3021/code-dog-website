import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border"
import { HoverBorderGradient } from "./ui/hover-border-gradient"

export default function Hero(){

    return (
        <div className="mt-10">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="violet"
            />

            <h2 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pb-5">
                Don't Repeat Yourself. Reimagined
            </h2>
            <p className="mt-4 font-normal text-lg text-neutral-300 max-w-lg text-center mx-auto">
            Meet Glyph, your ultimate VS Code ally. Seamlessly retrieve and integrate your past code, supercharge your productivity, and optimize your workflow. Say farewell to repetitive coding—let Glyph pave the way to smarter development!
            </p>

            <div className="mt-5 flex align-middle justify-center">

            <Link href={"https://marketplace.visualstudio.com/items?itemName=Divyansh3021.CodeArchive"} target="_blank" >
                <HoverBorderGradient containerClassName="rounded-full" as="button" className=" border-spacing-9 dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2">
                    <span>Add to VS Code</span>
                </HoverBorderGradient>
            </Link>
            </div>
        </div>
    )
}