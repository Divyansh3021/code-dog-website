import Link from "next/link";

export default function Footer(){
    return(
        <>     
        <hr className=" mt-5 border-1 w-full border-l-indigo-50" />
        <footer className="bg-transparent text-white mt-10 w-screen max-w-full flex alignn-middle justify-center">
            <div className="container">
                <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-lg md:text-lg font-bold bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-3">Made with ❤️</h2>
                    <Link
                    href="https://marketplace.visualstudio.com/items?itemName=Divyansh3021.CodeArchive"
                    target="_blank"
                    className="text-white hover:text-blue-500"
                    >
                    Download Extension
                    </Link>
                </div>
                <div className="flex space-x-4  float-right">
                    <Link
                    href="https://twitter.com/Divyan__shhh"
                    target="_blank"
                    className="text-white hover:text-blue-500"
                    >
                    Twitter
                    </Link>
                    <Link
                    href="https://www.linkedin.com/in/divyansh04/"
                    className="text-white hover:text-blue-500"
                    target="_blank"
                    >
                    LinkedIn
                    </Link>
                    <Link
                    href="https://github.com/Divyansh3021"
                    className="text-white hover:text-blue-500"
                    target="_blank"
                    >
                    GitHub
                    </Link>
                </div>
                </div>
            </div>
        </footer>
        </>
            )
}