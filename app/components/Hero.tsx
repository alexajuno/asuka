import Image from "next/image"

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Giao</h1>
          <p className="text-xl mb-6">A passionate developer crafting digital experiences</p>
          <a
            href="#contact"
            className="bg-white text-indigo-600 py-2 px-6 rounded-full font-bold hover:bg-indigo-100 transition duration-300"
          >
            Get in touch
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center">
        {/*TODO: Fix avatar rounded-full */}
          <Image
            src="/avatar.jpg"
            alt="Giao's avatar"
            width={300}
            height={300}
            className="rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

