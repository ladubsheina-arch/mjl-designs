import CaseStudy from "@/components/portfolio/CaseStudy";

export default function VerdeOrganicsPage() {
  return (
    <CaseStudy
      title="Verde Organics"
      subtitle="A fresh and sustainable brand identity inspired by nature, wellness, and conscious living."
      overviewTitle="Branding rooted in sustainability."
      overview1="Verde Organics was developed for a modern organic lifestyle brand seeking a clean, trustworthy identity. Natural colors, minimalist layouts, and thoughtful typography work together to create an approachable yet premium presence."
      overview2="The visual system was designed to extend seamlessly across product packaging, social media, marketing materials, and future brand applications while maintaining consistency."
      client="Verde Organics"
      services={[
        "Brand Identity",
        "Packaging Design",
        "Art Direction",
        "Brand Guidelines",
      ]}
      year="2026"
      image="/images/portfolio/branding/verde-organics-brand-board.png"
      colors={[
        "#2F4F3A",
        "#7B9482",
        "#E7EFE9",
        "#F5F1E8",
      ]}
      nextProject={{
        title: "Atelier Paper Co.",
        href: "/portfolio/atelier-paper-co",
        description:
          "A refined visual identity for a boutique stationery brand inspired by craftsmanship and timeless elegance.",
      }}
    />
  );
}