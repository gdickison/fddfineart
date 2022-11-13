import Link from "next/link"

const ContactTheArtist = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Send me an email</h1>
        </div>
        <div className="flex justify-center lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0k">
          <Link href="mailto:fddickison@gmail.com">
            <button type="button" className="w-full py-2 px-4 font-semibold bg-gray-100 text-gray-800 border-2 hover:border-black">Click here</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ContactTheArtist