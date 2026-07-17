import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Lumière Studio",
    category: "Brand Identity",
    href: "/portfolio/lumiere-studio",
    image: "/images/portfolio/branding/lumiere-studio-brand-board.png",
  },
  {
    title: "Verde Organics",
    category: "Brand Identity",
    href: "/portfolio/verde-organics",
    image: "/images/portfolio/branding/verde-organics-brand-board.png",
  },
  {
    title: "Atelier Paper Co.",
    category: "Brand Identity",
    href: "/portfolio/atelier-paper-co",
    image: "/images/portfolio/branding/atelier-paper-co-brand-board.png",
  },
  {
    title: "North Coffee",
    category: "Brand Identity",
    href: "/portfolio/north-coffee",
    image: "/images/portfolio/branding/north-coffee-brand-board.png",
  },
  {
    title: "Solis Skincare",
    category: "Brand Identity",
    href: "/portfolio/solis-skincare",
    image: "/images/portfolio/branding/solis-skincare-brand-board.png",
  },
];

export default function PortfolioPage() {
  return (
    <main className="bg-[#F8F7F3] min-h-screen">
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-3xl mb-16">
          <p className="uppercase tracking-[0.3em] text-sm text-[#7B9482] font-medium mb-4">
            Portfolio
          </p>

          <h1 className="text-5xl md:text-6xl font-serif text-[#2E3A34] leading-tight mb-6">
            Selected Work
          </h1>

          <p className="text-lg text-[#5E6A64] leading-relaxed">
            A collection of branding and visual identity projects crafted to
            help businesses communicate their story with clarity, consistency,
            and purpose.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="group block"
            >
              <div className="overflow-hidden rounded-3xl shadow-sm bg-white">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-8">
                  <p className="text-sm uppercase tracking-[0.2em] text-[#7B9482] mb-3">
                    {project.category}
                  </p>

                  <h2 className="text-3xl font-serif text-[#2E3A34] mb-4">
                    {project.title}
                  </h2>

                  <span className="inline-flex items-center gap-2 text-[#2E3A34] font-medium group-hover:gap-3 transition-all">
                    View Case Study
                    <span>→</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}