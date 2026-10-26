"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote:
      '"The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable."',
    name: "Michael Chen",
    location: "Singapore",
    photo: "/images/person2.png",
  },
  {
    quote:
      '"Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!"',
    name: "Sarah Johnson",
    location: "New York, USA",
    photo: "/images/person1.png",
  },
] as const;

export function Testimonials() {
  // Embla's loop requires slides other than a loop point to cover the whole
  // viewport (SlideLooper.canLoop); with only 2 cards at sm:basis-1/2 the
  // content exactly fills the view, canLoop() fails, and embla silently
  // disables looping — leaving both arrows dead. Duplicating the set gives
  // the loop engine room to wrap. Remove `slides` and render `testimonials`
  // directly once there are 3+ real entries.
  const slides = [...testimonials, ...testimonials];

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-heading text-3xl text-foreground sm:text-4xl">
                What Travelers Say
              </h2>
              <p className="mt-3 text-sm text-zinc-500">
                Real experiences from our happy travelers
              </p>
            </div>
            <div className="flex items-center gap-3">
              <CarouselPrevious
                size="icon-lg"
                className="static border-zinc-300 text-zinc-500 hover:bg-white hover:text-zinc-700"
              />
              <CarouselNext
                size="icon-lg"
                className="static border-zinc-300 text-zinc-500 hover:bg-white hover:text-zinc-700"
              />
            </div>
          </div>

          <CarouselContent className="mt-10">
            {slides.map((testimonial, index) => (
              <CarouselItem
                key={`${testimonial.name}-${index}`}
                className="sm:basis-1/2"
              >
                <TestimonialCard {...testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}

function TestimonialCard({
  quote,
  name,
  location,
  photo,
}: (typeof testimonials)[number]) {
  return (
    <figure className="grid border border-zinc-200 bg-white sm:grid-cols-[1fr_auto]">
      <div className="flex flex-col p-6">
        <blockquote className="font-heading text-[15px] leading-7 text-foreground">
          {quote}
        </blockquote>
        <figcaption className="mt-auto pt-8">
          <p className="text-sm text-cyan-600">
            <span className="text-zinc-400">— </span>
            {name}
          </p>
          <p className="mt-1 text-xs text-zinc-400">{location}</p>
        </figcaption>
      </div>
      <div className="relative mr-4 hidden w-36 sm:block">
        <Image
          src={photo}
          alt={name}
          fill
          sizes="(min-width: 640px) 144px"
          className="object-cover"
        />
      </div>
    </figure>
  );
}
