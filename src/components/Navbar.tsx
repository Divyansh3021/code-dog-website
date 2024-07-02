import Image from "next/image";
import logo from "@/images/glyph.png"
import Link from "next/link";

export function Navbar(){
    return(
        <div className=" max-h-40 flex w-full float-start">
            <Link href={"/"}>
                <Image src={logo} alt="glyph" className=" max-w-16"/>
            </Link>
        </div>
    )
}