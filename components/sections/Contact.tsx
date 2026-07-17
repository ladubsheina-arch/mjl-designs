export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#FAFAF8] py-32 scroll-mt-24"
    >
      <div className="mx-auto max-w-5xl px-6 text-center">

        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#7B9482]">
          Let's Create Together
        </p>

        <h2 className="mx-auto max-w-3xl font-serif text-5xl leading-[1.08] tracking-[-0.02em] md:text-6xl">
          Every great brand begins with a conversation.
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-600">
          Whether you're starting from scratch or refreshing an existing
          brand, I'd love to help bring your ideas to life through thoughtful
          and meaningful design.
        </p>

        <div className="mt-12">
          <a
            href="mailto:mjldesigns.ph@gmail.com"
            className="inline-flex rounded-full border border-[#7B9482] px-8 py-4 transition hover:bg-[#7B9482] hover:text-white"
          >
            mjldesigns.ph@gmail.com
          </a>
        </div>

      </div>
    </section>
  );
}