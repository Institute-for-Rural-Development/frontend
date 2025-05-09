import React from "react";
import Link from "next/link";
import Image from "next/image";
interface CardProps {
  title: string;
  description: string;
  image?: string;
  link?: string;
}

const Card: React.FC<CardProps> = ({ title, description, link, image }) => {
  return (
    <li className="overflow-hidden">
      {image && (
        <div className="relative w-full aspect-[16/9]">
          <Image
            src={image}
            alt={`${title}`}
            className="object-cover"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={false}
          />
        </div>
      )}

      <div className="">
        <h3 className="">{title}</h3>
        <p className="">{description}</p>
        <button>
          <Link href="#">Read More</Link>
        </button>
      </div>
    </li>
  );
};

export default Card;
