import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  const projects = [
    {
      title: "Verde Organics",
      category: "Packaging Design",
      description:
        "A clean and organic packaging system inspired by nature and sustainability.",
      image: "/images/portfolio/branding/verde-organics-brand-board.png",
      href: "/portfolio/verde-organics",
    },
    {
      title: "Atelier Paper Co.",
      category: "Editorial Design",
      description:
        "Elegant stationery and editorial pieces crafted with timeless typography.",
      image: "/images/portfolio/branding/atelier-paper-co-brand-board.png",
      href: "/portfolio/atelier-paper-co",
    },
    {
      title: "North Coffee",
      category: "Brand Identity",
      description:
        "Minimal branding for a specialty coffee shop inspired by adventure and craftsmanship.",
      image: "/images/portfolio/branding/north-coffee-brand-board.png",
      href: "/portfolio/north-coffee",
    },
    {
      title: "Solis Skincare",
      category: "Packaging Design",
      description:
        "A soft luxury skincare identity focused on clean beauty and natural ingredients.",
      image: "/images/portfolio/branding/solis-skincare-brand-board.png",
      href: "/portfolio/solis-skincare",
    },
  ];

  return (
    <section
      id="portfolio"
      className="relative scroll-mt-24 bg-white py-32"
    >
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#FAFAF8] to-white" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-16">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#7B9482]">
            Selected Work
          </p>

          <h2 className="max-w-2xl font-serif text-5xl leading-[1.1] tracking-[-0.02em] md:text-6xl">
            Creative work that
            <br />
            speaks for itself.
          </h2>
        </div>

        {/* Featured Project */}
        <Link
          href="/portfolio/lumiere-studio"
          className="group block"
        >
          <article className="overflow-hidden rounded-[36px] border border-zinc-200 bg-white shadow-xl transition duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
            <div className="overflow-hidden">
              <Image
                src="/images/portfolio/branding/lumiere-studio-brand-board.png"
                alt="Lumière Studio Brand Board"
                width={1600}
                height={1200}
                className="h-auto w-full transition duration-700 group-hover:scale-[1.03]"
                priority
              />
            </div>

            <div className="p-10">
              <p className="text-sm uppercase tracking-[0.35em] text-[#7B9482]">
                Featured Project
              </p>

              <h3 className="mt-3 font-serif text-5xl transition group-hover:text-[#7B9482]">
                Lumière Studio
              </h3>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600">
                A refined visual identity system featuring logo design,
                typography, stationery, packaging, and brand guidelines
                created for a modern boutique creative studio.
              </p>

              <p className="mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.25em] text-[#7B9482]">
                View Case Study
                <span className="transition group-hover:translate-x-1">
                  →
                </span>
              </p>
            </div>
          </article>
        </Link>

        {/* Supporting Projects */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="group block"
            >
              <article className="overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={900}
                    height={700}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <p className="text-xs uppercase tracking-[0.35em] text-[#7B9482]">
                    {project.category}
                  </p>

                  <h3 className="mt-3 font-serif text-3xl transition group-hover:text-[#7B9482]">
                    {project.title}
                  </h3>

                  <p className="mt-4 leading-7 text-zinc-600">
                    {project.description}
                  </p>

                  <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.25em] text-[#7B9482]">
                    View Case Study
                    <span className="transition group-hover:translate-x-1">
                      →
                    </span>
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Portfolio CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center rounded-full border border-[#2E3A34] px-6 py-3 text-sm font-medium uppercase tracking-[0.2em] text-[#2E3A34] transition hover:bg-[#2E3A34] hover:text-white"
          >
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}