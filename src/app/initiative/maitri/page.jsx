import { React } from "react";
import Image from "next/image";
import Head from "next/head";

const Maitri = () => {
  const mainSection = {
    title: "Maitri",
    imageSrc: "/assets/images/maitri.jpg",
    description: [
      "Villages are known and cherished for nurturing a sense of closeness and mutual interactions. However, as digital tools become increasingly invasive in people’s lives, outdoor sports are losing importance. This shift not only impacts psychological and physical health but also weakens the foundation for building strong community bonds through shared moments of joy and playfulness.",
      "Sports have the power to bring people together, fostering celebration, unity, and a collective spirit. A little joy and playfulness in life always go a long way.",
      "Through Maitreyi – The Spirit of Sports, IRD is committed to revitalizing the culture of sports in rural communities by ensuring access to essential resources and opportunities."
    ]
  };
  
  const sections = [
    {
      title: "Distributing Sports Materials",
      imageSrc: "/assets/images/first-focus.jpg",
      features: [
        "Providing schools, youth clubs, and local communities with sports gear and equipment, ensuring financial barriers do not hinder participation in physical activities."
      ]
    },
    {
      title: "Reviving Outdoor Play",
      imageSrc: "/assets/images/values-2.jpg",
      features: [
        "Encouraging children and youth to return to outdoor sports by creating engaging play spaces and organizing events that foster team spirit and active lifestyles."
      ]
    },
    {
      title: "Fostering Community Spirit",
      imageSrc: "/assets/images/focus-2.jpg",
      features: [
        "Creating platforms for inter-community tournaments and games to strengthen bonds, celebrate local talent, and build inclusive, healthy environments."
      ]
    }
  ];
  
  
  return (
    <>
      <Head>
        <title>Maitri | IRD</title>
        <meta
          name="description"
          content="IRD's Maitri for holistic student development in Nepal"
        />
      </Head>

      <main className="min-h-screen pb-16 mt-[10rem]">
        <section className="mt-12">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-[1280px] mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-[#850d09] mb-8 text-left">
                {mainSection.title}
              </h1>

              <div className="mb-12">
                <div className="relative w-full aspect-[16/9] max-h-[30rem]">
                  <Image
                    src={mainSection.imageSrc}
                    alt="Education Reform"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>

              <div className="space-y-4 mb-12">
                {mainSection.description.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {sections.map((section, index) => (
          <section key={index} className="py-16">
            <div className="container mx-auto px-4 md:px-8">
              <div className="max-w-[1280px] mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-[#850d09] mb-8 text-left">
                  {section.title}
                </h2>

                <div className="mb-12">
                  <div className="relative w-full aspect-[16/9] max-h-[30rem]">
                    <Image
                      src={section.imageSrc}
                      alt={section.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>

                {section.description && (
                  <div className="space-y-4 mb-8">
                    {section.description.map((para, idx) => (
                      <p key={idx} className="text-gray-700 leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                )}

                {section.features && (
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-semibold text-[#850d09] mb-6 text-left">
                      Key Features
                    </h3>
                    <ul className="space-y-4">
                      {section.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-start">
                          <span className="text-[#850d09] mr-3 mt-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                          <p className="text-gray-700">{feature}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </section>
        ))}
        
      </main>
    </>
  );
};

export default Maitri;