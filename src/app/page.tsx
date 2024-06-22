import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Testimonials } from "@/components/Testimonials";
import Working from "@/components/Working";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      <Hero/>
      <Features/>
      <Working/>
      <Testimonials/>
      <Footer/>
    </main>
  );
}
