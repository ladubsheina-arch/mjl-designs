export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 md:flex-row md:items-end md:justify-between">

        <div>
          <h2 className="font-serif text-4xl">
            MJL Designs
          </h2>

          <p className="mt-4 max-w-md leading-7 text-zinc-600">
            Thoughtful design for brands that value clarity,
            purpose, and timeless aesthetics.
          </p>
        </div>

        <div className="text-left md:text-right">

          <a
            href="mailto:mjldesigns.ph@gmail.com"
            className="block text-lg transition hover:text-[#7B9482]"
          >
            mjldesigns.ph@gmail.com
          </a>

          <p className="mt-6 text-sm text-zinc-500">
            © 2026 MJL Designs. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}