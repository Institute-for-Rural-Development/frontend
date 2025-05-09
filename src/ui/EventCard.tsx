import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
interface EventProps {
  title: string;
  description: string;
  date: string;
  image?: string;
  link?: string;
}
const EventCard: React.FC<EventProps> = ({
  title,
  description,
  date,
  link,
  image,
}) => {
  return (
    <li className="bg-card-bg flex flex-col md:flex-row">
      {image && (
        <div className="relative w-full md:w-1/3">
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
      <div className="w-full md:w-2/3">
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <div>
            <h3 className="">{title}</h3>
            <p className="">{date}</p>
          </div>
          <div className="">
            <Link href="#">
              <Button size="medium">Register</Button>
            </Link>
          </div>
        </div>
        <div className="">
          <p>{description}</p>
        </div>
      </div>
    </li>
  );
};

export default EventCard;
