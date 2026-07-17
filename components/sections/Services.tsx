export default function Services() {
  const services = [
    {
      title: "Brand Identity",
      description:
        "Building memorable visual identities that communicate with clarity and purpose.",
    },
    {
      title: "Packaging Design",
      description:
        "Thoughtfully crafted packaging that helps products stand out beautifully.",
    },
    {
      title: "Print & Editorial",
      description:
        "Elegant printed materials designed to leave a lasting impression.",
    },
    {
      title: "Digital & Social",
      description:
        "Creative assets for social media, campaigns, and digital marketing.",
    },
  ];

  return (
<section
  id="services"
  className="scroll-mt-24 bg-[#FAFAF8] py-32"
>      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-20">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#7B9482]">
            What We Create
          </p>

          <h2 className="max-w-2xl font-serif text-5xl leading-[1.1] tracking-[-0.02em] md:text-6xl">
            Design services built around thoughtful ideas.
          </h2>
        </div>

        <div className="space-y-10">
          {services.map((service) => (
            <div
              key={service.title}
              className="border-b border-zinc-200 pb-10 transition hover:border-[#7B9482]"
            >
              <div className="grid gap-6 md:grid-cols-2">

                <h3 className="text-3xl font-semibold">
                  {service.title}
                </h3>

                <p className="max-w-lg leading-8 text-zinc-600">
                  {service.description}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}