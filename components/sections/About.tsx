export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-32 scroll-mt-24"
    >
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

        {/* Left */}

        <div>

          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#7B9482]">
            Our Philosophy
          </p>

          <h2 className="max-w-xl font-serif text-5xl leading-[1.08] tracking-[-0.02em] md:text-6xl">
            Design begins with understanding.
          </h2>

        </div>

        {/* Right */}

        <div className="space-y-8 text-lg leading-9 text-zinc-600">

          <p>
            Every project begins with listening. We believe meaningful design
            is created through understanding people, businesses, and the
            stories behind them—not simply following trends.
          </p>

          <p>
            From branding and packaging to print and digital experiences,
            every detail is crafted with purpose, clarity, and timeless
            aesthetics that help businesses build lasting connections.
          </p>

          <blockquote className="border-l-2 border-[#7B9482] pl-6 font-serif text-2xl italic text-zinc-900">
            "Beautiful design should feel effortless,
            but every detail should have intention."
          </blockquote>

        </div>

      </div>
    </section>
  );
}