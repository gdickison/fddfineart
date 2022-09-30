/* eslint-disable @next/next/no-img-element */
const ComingSoon = () => {
  return (
    <div>
      <figure className="w-[100vw]">
          <img className="w-[100vw] h-[100vh]" src="/coming_soon.jpg" alt="" />
          <figcaption className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <h2 className="text-6xl text-gray-800 font-libre tracking-widest uppercase">Coming Soon!</h2>
          </figcaption>
        </figure>
    </div>
  )
}

export default ComingSoon