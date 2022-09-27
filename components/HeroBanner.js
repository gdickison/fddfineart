import Link from "next/link"
import NavBar from "./NavBar"

const HeroBanner = () => {
  return (
    <div className="text-center w-full py-12">
      <div className="max-w-[1170px] my-0 mx-auto relative">
        <div className="overflow-visible w-full py-0 px-4 relative">
          <div className="mb-4 pl-4">
          <Link href="/">
            <a className="text-4xl font-thin tracking-widest uppercase">Forrest Dickison Fine Art</a>
          </Link>
          </div>
          <NavBar/>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner