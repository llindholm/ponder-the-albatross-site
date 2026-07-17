import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#11150f] text-[#f2ead8]">
      <Image
        src="/images/hero.jpg"
        alt=""
        fill
        priority
        className="object-cover opacity-45"
      />

      <div className="absolute inset-0 bg-black/45" />

      <section className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center">
        <div>
          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#c9b47d]">
            Ponder the Albatross
          </p>

          <h1 className="font-serif text-5xl leading-tight md:text-7xl">
            Something special
            <br />
            is coming.
          </h1>

          <div className="mx-auto my-8 h-px w-20 bg-[#c9b47d]/70" />

          <p className="font-serif text-lg italic text-[#e5dcc9] md:text-xl">
            A new chapter begins this week...
          </p>
        </div>
      </section>
    </main>
  );
}