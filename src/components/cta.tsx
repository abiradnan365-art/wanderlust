import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";

export function Cta() {
  return (
    <section className="relative flex min-h-96 flex-1 flex-col items-center justify-center overflow-hidden px-4 py-20 text-center sm:min-h-[420px]">
      <Image
        src="/images/CTA.png"
        alt="Aerial view of a plane flying over a tropical island surrounded by turquoise water"
        fill
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/40" aria-hidden="true" />

      <h2 className="font-heading text-4xl text-white sm:text-5xl">
        Ready To Start Your Journey?
      </h2>
      <p className="mt-4 text-sm text-white/90 sm:text-base">
        Join thousands of travelers who have discovered the world with us
      </p>
      <a
        href="#book"
        className="mt-8 inline-flex h-11 items-center gap-2 rounded-md bg-white px-8 text-xs font-semibold tracking-widest text-zinc-900 uppercase transition-colors hover:bg-zinc-100"
      >
        Book your trip today
        <ArrowRightIcon className="size-4" />
      </a>
    </section>
  );
}
