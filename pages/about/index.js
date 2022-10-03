/* eslint-disable @next/next/no-img-element */
import { client } from '../../lib/client'

const About = ({bio}) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col max-w-3xl p-6 gap-4">
        <img src={bio.imageUrl} alt="" className="flex-shrink-0 object-cover rounded-sm bg-gray-500 aspect-square" />
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">{bio.name}</h2>
          <p>{bio.text}</p>
        </div>
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