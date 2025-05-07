import ImageGallery from "@/ui/Gallery";
export default function Home() {
  return (
    <section className="sec1-mt sec-mb">
      <div className="layout-wide mx-auto lg:px-8">
        <div>
          <h2>Gallery</h2>
          <p className="dsctext max-w-[80ch]">
            Explore vibrant moments from our rural development journey—capturing
            community spirit, culture, and collaboration through powerful
            visuals and storytelling.
          </p>
        </div>
        <ImageGallery />
      </div>
    </section>
  );
}
