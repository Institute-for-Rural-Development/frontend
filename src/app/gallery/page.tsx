import ImageGallery from '@/components/ImageGallery'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-black mb-8">Gallery</h1>
        <p className="text-lg text-gray-700 text-justify mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod fugit cumque repellendus omnis at dolore dolor quisquam minima consequuntur facilis adipisci dignissimos quae ad reprehenderit excepturi nostrum, eum iure officiis.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum nesciunt nemo voluptate! Amet ducimus dolorem molestias ex quos, doloremque in? Culpa, modi. Qui numquam a repudiandae, quae mollitia eaque corrupti.
          </p>
        <ImageGallery />
      </div>
    </main>
  )
}