import Image from "next/image";
import Link from "next/link";

type CaseStudyProps = {
  title: string;
  subtitle: string;
  overviewTitle: string;
  overview1: string;
  overview2: string;
  client: string;
  services: string[];
  year: string;
  image: string;
  colors: string[];
  nextProject: {
    title: string;
    href: string;
    description: string;
  };
};

export default function CaseStudy({
  title,
  subtitle,
  overviewTitle,
  overview1,
  overview2,
  client,
  services,
  year,
  image,
  colors,
  nextProject,
}: CaseStudyProps) {
  return (
    <main className="bg-[#FAFAF8]">
      {/* Hero */}
      <section className="border-b border-zinc-200 pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#7B9482]">
            Featured Project
          </p>

          <h1 className="max-w-4xl font-serif text-6xl leading-[1] tracking-[-0.03em] md:text-7xl">
            {title}
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-600">
            {subtitle}
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-[36px] border border-zinc-200 bg-white shadow-xl">
            <Image
              src={image}
              alt={title}
              width={1800}
              height={1400}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="pb-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[2fr_1fr]">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#7B9482]">
              Project Overview
            </p>

            <h2 className="font-serif text-4xl">{overviewTitle}</h2>

            <p className="mt-8 text-lg leading-8 text-zinc-600">
              {overview1}
            </p>

            <p className="mt-6 text-lg leading-8 text-zinc-600">
              {overview2}
            </p>
          </div>

          <aside className="rounded-[28px] border border-zinc-200 bg-white p-8 shadow-sm">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
                Client
              </p>

              <p className="mt-2 text-lg">{client}</p>
            </div>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
                Services
              </p>

              <div className="mt-2 space-y-1">
                {services.map((service) => (
                  <p key={service}>{service}</p>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
                Year
              </p>

              <p className="mt-2">{year}</p>
            </div>
          </aside>
        </div>
      </section>

      {/* Colors */}
      <section className="border-y border-zinc-200 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-12 text-sm uppercase tracking-[0.35em] text-[#7B9482]">
            Color Palette
          </p>

          <div className="grid gap-6 md:grid-cols-4">
            {colors.map((color) => (
              <div
                key={color}
                className="rounded-3xl p-12 text-center"
                style={{
                  backgroundColor: color,
                  color: color === "#232323" || color === "#7B9482" ? "#fff" : "#222",
                }}
              >
                {color}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#7B9482]">
            Next Project
          </p>

          <h2 className="mt-6 font-serif text-5xl">
            {nextProject.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-600">
            {nextProject.description}
          </p>

          <Link
            href={nextProject.href}
            className="mt-10 inline-flex rounded-full bg-[#2E3A34] px-6 py-3 text-white transition hover:opacity-90"
          >
            View Project →
          </Link>
        </div>
      </section>
    </main>
  );
}