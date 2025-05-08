import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="mt-[10rem] max-w-[1280px] mx-auto pl-[1rem] pr-[1rem]">
      {/* About Section */}
       
        <h1>Institute for Rural Development</h1>
        <p className="!text-[1.6rem] max-w-[70ch] mb-16">
          Institute for Rural Development (IRD) is a non-for-profit organization
          registered under the Government of Nepal. IRD acts as a platform to
          channelize and direct knowledge, resources, and authorities to drive
          holistic development in the grassroot level.
        </p>

        {/* Our Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-28">
          <div className="flex flex-col gap-4 order-2 md:order-1">
            <h2>Our Mission</h2>

            <p className="!text-[1.6rem]">
              Empowering and guiding the local leadership, youths, and
              communities to build the foundation for sustainable rural
              development rooted in Nepal&apos;s ethos
            </p>
          </div>
          <div className="flex justify-center order-1 md:order-2">
            <Image
              src="/assets/images/Nepal_Flag_Circle_500x500.png"
              alt="Nepal Flag Circle"
              width={250}
              height={250}
            />
          </div>
        </div>

        {/* Our Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-28">
          <div className="flex justify-center">
            <Image
              src="/assets/images/Nepal_Flag_Circle_500x500.png"
              alt="Nepal Flag Circle"
              width={250}
              height={250}
            />
          </div>
          <div className="flex flex-col gap-4">
            <h2>Our Vision</h2>

            <p className="!text-[1.6rem]">
              Develop IRD as an open and collaborative platform for all
              individuals/groups who believe in the positive transformation of
              Nepal at its fundamental level
            </p>
          </div>
        </div>
      
    </div>
  );
}
