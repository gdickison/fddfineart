/* eslint-disable @next/next/no-img-element */
// import { client } from '../lib/client'
// import PaintingsInShow from '../components/PaintingsInShow'

export default function Home({show}) {
  return (
    <div>
      {/* <div> */}
        <figure className="w-[100vw]">
          <img className="w-[100vw] h-[100vh]" src="/curtain.jpg" alt="" />
          <figcaption className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <h2 className="text-6xl text-gray-200 font-libre tracking-widest uppercase">Coming Soon!</h2>
          </figcaption>
        </figure>
        {/* <PaintingsInShow
          paintings={show[0].paintings}
        /> */}
      {/* </div> */}
    </div>
  )
}

// export const getServerSideProps = async () => {

//   const show = await client.fetch(
//     `*[_type == "shows" && is_current == true]{
//       "id": _id,
//       "imageUrl": image.asset->url,
//       title,
//       slug,
//       description,
//       "paintings": paintings[]->{
//         "id": _id,
//         title,
//         "imageUrl": image.asset->url,
//         placeholder,
//         "original": original_available,
//         "dimensions": original_dimensions,
//         "prints": prints_available,
//         "slug": slug.current,
//         tags,
//         description,
//         order
//       }
//     }`
//   )

//   return {
//     props: {show}
//   }
// }