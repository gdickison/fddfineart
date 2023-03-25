import Link from "next/link"

const ContactTheArtist = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto space-y-6">
        <div className="flex justify-center lg:w-2/3 w-full mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0k">
          <Link href="mailto:fddickison@gmail.com">
            <span className="w-full py-2 px-4 text-2xl text-gray-600 hover:text-gray-900">fddickison@gmail.com</span>
          </Link>
        </div>
        <div className="flex justify-center lg:w-2/3 w-full mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0k">
          <span className="text-center w-full py-2 px-4 text-2xl text-gray-600">208-596-0896</span>
        </div>
      </div>
    </section>
  )
}

export default ContactTheArtist