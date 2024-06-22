import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Working from "@/components/Working";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero/>
      <Features/>
      <Working/>
    </main>
  );
}
