import { UserButton } from "@clerk/nextjs";
import Hero from "./Home/Hero";
 
export default function Home() {
  return (
      <div className="flex flex-col justify-start h-screen p-5 sm:px-10 md:px-20">
        <Hero/>
      </div>
    
  )
}
