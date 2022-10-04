/* eslint-disable @next/next/no-img-element */
import { client } from '../../lib/client'

const About = ({bio}) => {
  return (
    <div className="flex p-6 gap-6 max-w-[1170px] max-h-[70vh]">
      <img src={bio.imageUrl} alt="" className="flex-shrink-0 object-cover rounded-sm bg-gray-500 aspect-square w-1/2" />
      <div className={`flex flex-col justify-center ${bio.name === null ? "space-y-0" : "space-y-4"}`}>
        <h2 className={`text-xl font-semibold ${bio.name === null ? "hidden" : "block"}`}>{bio.name}</h2>
        <p className='leading-[1.7rem] font-light'>{bio.text}</p>
      </div>
    </div>
  )
}

export default About

export const getServerSideProps = async () => {

  const bio = await client.fetch(
    `*[_type == "bio"]{
      "id": _id,
      "imageUrl": bio_image.asset->url,
      "name": bio_name,
      "text": bio_text
    }`
  )
  .then(data => data[0])

  return {
    props: {bio}
  }
}