"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    const form = e.currentTarget;

    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xykrenoa", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setStatus("✅ Thank you! Your message has been sent.");
        form.reset();
      } else {
        setStatus("❌ Sorry, something went wrong. Please try again.");
      }
    } catch {
      setStatus("❌ Sorry, something went wrong. Please try again.");
    }

    setLoading(false);
  }

  return (
    <section
      id="contact"
      className="bg-[#FAFAF8] py-32 scroll-mt-24"
    >
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#7B9482]">
            Let's Create Together
          </p>

          <h2 className="font-serif text-5xl leading-[1.08] tracking-[-0.02em] md:text-6xl">
            Every great brand begins with a conversation.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-600">
            Whether you're starting from scratch or refreshing an existing
            brand, I'd love to help bring your ideas to life through thoughtful
            and meaningful design.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-14 space-y-6"
        >
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            required
            className="w-full rounded-xl border border-zinc-300 bg-white px-5 py-4 outline-none transition focus:border-[#7B9482]"
          />

          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            className="w-full rounded-xl border border-zinc-300 bg-white px-5 py-4 outline-none transition focus:border-[#7B9482]"
          />

          <input
            name="subject"
            type="text"
            placeholder="Subject"
            required
            className="w-full rounded-xl border border-zinc-300 bg-white px-5 py-4 outline-none transition focus:border-[#7B9482]"
          />

          <textarea
            name="message"
            rows={6}
            placeholder="Tell me about your project..."
            required
            className="w-full rounded-xl border border-zinc-300 bg-white px-5 py-4 outline-none transition focus:border-[#7B9482]"
          />

          <button
            type="submit"
            disabled={loading}
            className="rounded-full bg-[#7B9482] px-8 py-4 text-white transition hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p className="pt-2 text-center text-sm text-zinc-700">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}