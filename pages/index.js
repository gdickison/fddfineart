/* eslint-disable @next/next/no-img-element */
// import { client } from '../lib/client'
// import PaintingsInShow from '../components/PaintingsInShow'

export default function Home({show}) {
  return (
    <div className="h-[70vh] flex justify-center items-center">
      <h2 className="text-6xl text-gray-900 font-libre tracking-widest uppercase">Coming Soon!</h2>
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