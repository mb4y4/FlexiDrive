import Hero from "./Home/Hero";
import SearchInput from "./Home/SearchInput";
 
export default function Home() {
  return (
      <div className="flex flex-col justify-start h-screen p-5 sm:px-10 md:px-20">
        <Hero/>
        <SearchInput/>
      </div>
    
  )
}
