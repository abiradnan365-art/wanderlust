import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";

const searchFields = [
  { id: "location", label: "Location", placeholder: "Address, City Or Zip" },
  { id: "date-duration", label: "Date/Duration", placeholder: "Anytime / 3 Days" },
  { id: "budget", label: "Budget", placeholder: "$0 - $3000" },
  { id: "people", label: "People", placeholder: "5 - 10" },
] as const;

export function Banner() {
  return (
    <section className="relative flex flex-1 flex-col">
      <Image
        src="/images/Banner.png"
        alt="Aerial view of a turquoise bay surrounded by forested hills and red-roofed houses"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />

      <div className="flex flex-1 flex-col items-center justify-center px-4 pt-16 pb-40 text-center text-white sm:px-6">
        <h1 className="text-5xl leading-[1.08] font-light sm:text-6xl lg:text-7xl">
          Discover Your
          <br />
          Next Adventure
        </h1>
        <p className="mt-5 max-w-lg text-base leading-7 text-white/90">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#destinations"
            className="inline-flex h-11 items-center gap-2 rounded-md bg-cyan-600 px-8 text-xs font-semibold tracking-widest text-white uppercase transition-colors hover:bg-cyan-700"
          >
            Explore now
            <ArrowRightIcon className="size-4" />
          </a>
          <a
            href="#destinations"
            className="inline-flex h-11 items-center rounded-md bg-white/25 px-8 text-xs font-semibold tracking-widest text-white uppercase backdrop-blur-sm transition-colors hover:bg-white/35"
          >
            View destination
          </a>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 grid grid-cols-2 gap-px sm:grid-cols-[repeat(4,minmax(0,1fr))_minmax(150px,auto)]">
        {searchFields.map((field) => (
          <div
            key={field.id}
            className="flex min-h-14 flex-col justify-center gap-1 bg-white/80 px-5 backdrop-blur-sm"
          >
            <label
              htmlFor={field.id}
              className="text-sm leading-none font-semibold text-foreground"
            >
              {field.label}
            </label>
            <input
              id={field.id}
              type="text"
              placeholder={field.placeholder}
              className="w-full bg-transparent text-xs text-foreground/80 outline-none placeholder:text-zinc-500"
            />
          </div>
        ))}
        <button
          type="button"
          className="col-span-2 min-h-14 bg-cyan-600 text-sm font-semibold text-white transition-colors hover:bg-cyan-700 sm:col-span-1"
        >
          Search
        </button>
      </div>
    </section>
  );
}
