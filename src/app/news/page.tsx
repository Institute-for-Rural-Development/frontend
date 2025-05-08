import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";

function Page() {
  const news = [
    {
      id: 1,
      image: "/assets/images/news/news1.png",
      title: "Gramkranti Begins",
      meta_disc:
        "IRD launches Conscious Village Initiative to empower rural Nepal sustainably.",
    },
    {
      id: 2,
      image: "/assets/images/news/news2.png",
      title: "One Tap to Empower",
      meta_disc: "IRD's One App, One Tap bridges rural Nepal's digital divide.",
    },
    {
      id: 3,
      image: "/assets/images/news/news3.png",
      title: "Farming Goes Future",
      meta_disc:
        "IRD boosts Nepalese agriculture with agroforestry, digital tools, and finance.",
    },
    {
      id: 4,
      image: "/assets/images/news/news4.png",
      title: "Saving the Soul of Nepal",
      meta_disc:
        "IRD campaigns to preserve and promote Nepal's rich cultural heritage.",
    },
    {
      id: 5,
      image: "/assets/images/news/news5.png",
      title: "From Classrooms to Communities",
      meta_disc:
        "IRD launches immersive learning trips blending education, culture, and exploration.",
    },
    {
      id: 6,
      image: "/assets/images/news/news6.png",
      title: "Digital Tools, Real Change",
      meta_disc:
        "Apps like Krishimitra and Surakshya are transforming rural life in Nepal.",
    },
  ];

  return (
    <section className="w-full mt-[10rem]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div>
          <h2>News, Stories, and Blogs</h2>
          <p className="!text-[1.6rem] max-w-[70ch]">
            Latest news and updates on rural empowerment initiatives, community
            leadership programs, and sustainable development efforts across
            Nepal&apos;s rural regions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mt-12">
          {news.map((news) => (
            <div key={news.id} className="bg-[#f3f3f3]">
              <div className="relative w-full pt-[65%]">
                <Image
                  src={news.image}
                  alt={`${news.title} Logo`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6">
                <h3>{news.title}</h3>
                <p className="text-[#505050]">{news.meta_disc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/news">
            <Button size="large">Load More</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Page;
