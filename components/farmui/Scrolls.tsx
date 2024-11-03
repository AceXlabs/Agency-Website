/* eslint-disable @next/next/no-img-element */
import React from "react";
import { cn } from "@/lib/utils";
import Marquee from "./Maq";

const reviews = [
  {
    name: "James",
    username: "@james",
    body: "This is beyond what I expected. The experience has been phenomenal!",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "Emily",
    username: "@emily",
    body: "Truly impressed by the quality and attention to detail. Amazing work!",
    img: "https://avatar.vercel.sh/emily",
  },
  {
    name: "Michael",
    username: "@michael",
    body: "I've tried other services, but this one stands out. Absolutely love it!",
    img: "https://avatar.vercel.sh/michael",
  },
  {
    name: "Priya",
    username: "@priya",
    body: "Incredible experience! Exceeded all my expectations. Highly recommend.",
    img: "https://avatar.vercel.sh/priya",
  },
  {
    name: "Oliver",
    username: "@oliver",
    body: "Hands down, one of the best experiences I've had. Worth every bit.",
    img: "https://avatar.vercel.sh/oliver",
  },
  {
    name: "Sophia",
    username: "@sophia",
    body: "The level of professionalism is unmatched. I'm thoroughly impressed!",
    img: "https://avatar.vercel.sh/sophia",
  },
  {
    name: "Ananya",
    username: "@ananya",
    body: "They truly understood my needs and delivered beyond my imagination.",
    img: "https://avatar.vercel.sh/ananya",
  },
  {
    name: "Sarah",
    username: "@sarah",
    body: "Absolutely fantastic! The results speak for themselves.",
    img: "https://avatar.vercel.sh/sarah",
  },
  {
    name: "Ethan",
    username: "@ethan",
    body: "Professional, reliable, and innovative. Couldn’t ask for more!",
    img: "https://avatar.vercel.sh/ethan",
  },
  {
    name: "Charlotte",
    username: "@charlotte",
    body: "Their expertise shines through in every detail. I'm thrilled!",
    img: "https://avatar.vercel.sh/charlotte",
  },
];


const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-40 w-52 my-0  cursor-pointer bg-page-gradient shadow-neon overflow-hidden rounded-xl border p-4",
        // light styles
        "border-white/10 ",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row gap-1 items-center">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const MarqueeDemoVertical = () => {
  return (
    <div className="flex overflow-hidden relative flex-row justify-center items-center bg-transparent ml-11 h-[70vh]">
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      
    </div>
  );
};

export { MarqueeDemoVertical };
