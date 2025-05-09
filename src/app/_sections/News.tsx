// import React from "react";
// import Image from "next/image";
// import Button from "@/components/Button";
// import Link from "next/link";

// function News() {
//   return (
//     <section className="w-full">
//       <div className="max-w-[1280px] mx-auto px-6 md:px-8">
//         <div>
//           <h2>News, Stories, and Blogs</h2>
//           <p className="!text-[1.6rem] max-w-[70ch]">
//             Latest news and updates on rural empowerment initiatives, community
//             leadership programs, and sustainable development efforts across
//             Nepal&apos;s rural regions.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mt-12">
//           {news.map((news) => (
//             <div key={news.id} className="bg-[#f3f3f3]">
//               <div className="relative w-full pt-[65%]">
//                 <Image
//                   src={news.image}
//                   alt={`${news.title} Logo`}
//                   fill
//                   className="object-cover"
//                   priority
//                 />
//               </div>
//               <div className="p-6">
//                 <h3>{news.title}</h3>
//                 <p className="text-[#505050]">{news.meta_disc}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <Link href="/news">
//             <Button size="large">View More</Button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default News;
import React from "react";
import Link from "next/link";
import Button from "@/components/Button";
import news from "@/data/news.json";
import Card from "@/ui/Card";
const News = () => {
  return (
    <section className="">
      <div className="">
        <h2>News, Stories, and Blogs</h2>
        <p className="">
          Latest news and updates on rural empowerment initiatives, community
          leadership programs, and sustainable development efforts across
          Nepal&apos;s rural regions.
        </p>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {news.news.map((news, index) => (
          <Card
            key={index}
            title={news.title}
            description={news.meta_disc}
            link={news.link}
            image={news.image}
          />
        ))}
      </ul>

      <div className="">
        <Link href="/news">
          <Button size="large">More News</Button>
        </Link>
      </div>
    </section>
  );
};

export default News;
