/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import NavBar from "./NavBar"

const HeroBanner = () => {
  return (
    <div className="text-center w-full py-6">
      <div className="max-w-[1170px] my-0 mx-auto relative">
        <div className="overflow-visible w-full py-0 relative">
          <div className="hover:cursor-pointer flex justify-center">
          <Link href="/">
            {/* <a className="text-4xl font-libre uppercase text-black" style={{'letter-spacing': '0.2em'}}>Forrest Dickison Fine Art</a> */}
            <img src="/ForrestDickisonWordmark.jpg" alt="Forrest Dickison Fine Art" className="w-[50rem]" />
          </Link>
          </div>
          <NavBar/>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner