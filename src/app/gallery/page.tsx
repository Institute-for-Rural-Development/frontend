import ImageGallery from "@/ui/Gallery";
export default function Home() {
  return (
    <div className="w-full mt-[10rem]">
      <div className="max-w-[1280px] mx-auto px-6 space-y-[3rem]">
        <div>
          <h2>Gallery</h2>
          <p className="!text-[1.6rem] max-w-[70ch]">
            Explore vibrant moments from our rural development journey—capturing
            community spirit, culture, and collaboration through powerful
            visuals and storytelling.
          </p>
        </div>
        <ImageGallery />
      </div>
    </div>
  );
}
