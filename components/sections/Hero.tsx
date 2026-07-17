import Image from "next/image";
import Button from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAF8] pt-28 pb-16">
      {/* Background Glow */}
      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-[#E7EFE9] blur-3xl opacity-50"></div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* LEFT */}
        <div className="max-w-xl">

          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#7B9482]">
            Creative Design Studio
          </p>

          <h1 className="font-serif text-5xl leading-[0.95] tracking-[-0.04em] md:text-7xl">
            Thoughtful Design.
            <br />
            Brands with Purpose.
          </h1>

          <div className="mt-8 h-px w-20 bg-[#7B9482]"></div>

          <p className="mt-8 max-w-lg text-lg leading-8 text-zinc-600">
            We create thoughtful visual identities, packaging, print,
            and digital experiences that help businesses communicate
            with clarity, confidence, and character.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
  <Button href="#portfolio">
    Explore Our Work
  </Button>

  <Button variant="secondary" href="#contact">
    Start a Project
  </Button>
</div>

          <div className="mt-16">

            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-zinc-500">
              Featured Brand Concepts
            </p>

            <div className="flex flex-wrap gap-8 text-sm uppercase tracking-[0.25em] text-zinc-500">
              <span>Lumière Studio</span>
              <span>Verde Organics</span>
              <span>Atelier Paper Co.</span>
            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative mt-10 flex justify-center">

          <div className="absolute -top-10 -right-6 h-72 w-72 rounded-full bg-[#E7EFE9] blur-3xl opacity-60"></div>

          <div className="relative w-full max-w-xl">

            <div className="overflow-hidden rounded-[36px] border border-zinc-200 bg-white shadow-xl">

              <Image
                src="/images/portfolio/branding/mjl-brand-board.png"
                alt="MJL Brand Board"
                width={1400}
                height={1000}
                className="w-full h-auto"
                priority
              />

            </div>

            {/* Floating Identity Card */}

            <div className="absolute -left-6 top-20 rounded-2xl border border-zinc-200 bg-white p-5 shadow-xl">

              <div className="mb-3 h-10 w-24 rounded bg-[#7B9482]"></div>

              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                Identity Card
              </p>

            </div>

            {/* Floating Palette */}

            <div className="absolute -right-4 bottom-8 rounded-2xl border border-zinc-200 bg-white p-5 shadow-xl">

              <div className="mb-3 flex gap-2">

                <div className="h-7 w-7 rounded bg-[#232323]"></div>
                <div className="h-7 w-7 rounded bg-[#7B9482]"></div>
                <div className="h-7 w-7 rounded bg-[#E7EFE9]"></div>
                <div className="h-7 w-7 rounded border border-zinc-200 bg-[#F5F1E8]"></div>

              </div>

              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                Brand Palette
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}