import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border"

export default function Hero(){
    return (
        <div className="">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="violet"
            />
            <h2 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                Meet Your New Best Friend in VS Code!
            </h2>
            <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            Meet Code Dog, your ultimate VS Code companion. Fetch and integrate your past code effortlessly, boost productivity, and streamline your workflow. Say goodbye to redundant coding—let Code Dog lead the way! 🐶🚀
            </p>

            <Link href={"https://marketplace.visualstudio.com/items?itemName=Divyansh3021.CodeArchive"} target="_blank" className="flex justify-center align-middle mt-5">
                <Button
                    borderRadius="1.5rem"
                    className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                >
                    Add to VS Code
                </Button>
            </Link>
        </div>
    )
}