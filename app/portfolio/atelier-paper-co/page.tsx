import CaseStudy from "@/components/portfolio/CaseStudy";

export default function AtelierPaperCoPage() {
  return (
    <CaseStudy
      title="Atelier Paper Co."
      subtitle="A timeless brand identity designed for a boutique stationery studio celebrating craftsmanship and intentional design."
      overviewTitle="Minimal elegance with handcrafted character."
      overview1="Atelier Paper Co. required a visual identity that reflected refined craftsmanship and attention to detail. The branding embraces understated elegance through classic typography, soft neutrals, and balanced layouts."
      overview2="The identity system extends across stationery collections, packaging, and digital platforms, creating a cohesive and memorable brand experience."
      client="Atelier Paper Co."
      services={[
        "Brand Identity",
        "Stationery Design",
        "Packaging Design",
        "Brand Guidelines",
      ]}
      year="2026"
      image="/images/portfolio/branding/atelier-paper-co-brand-board.png"
      colors={[
        "#3E3A37",
        "#D9CFC3",
        "#F5F1E8",
        "#FFFFFF",
      ]}
      nextProject={{
        title: "North Coffee",
        href: "/portfolio/north-coffee",
        description:
          "Discover a modern café identity inspired by warmth, simplicity, and everyday rituals.",
      }}
    />
  );
}