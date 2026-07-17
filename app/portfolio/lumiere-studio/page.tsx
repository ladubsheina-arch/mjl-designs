import CaseStudy from "@/components/portfolio/CaseStudy";

export default function LumiereStudioPage() {
  return (
    <CaseStudy
      title="Lumière Studio"
      subtitle="A luxury visual identity created for a modern creative studio, balancing timeless elegance with contemporary simplicity."
      overviewTitle="Elegant branding for a boutique creative studio."
      overview1="Lumière Studio was designed to embody sophistication, craftsmanship, and timeless design. The identity combines refined typography, soft neutral tones, and minimal layouts to create a premium experience across every touchpoint."
      overview2="From stationery to brand guidelines, every element was carefully considered to communicate clarity, elegance, and confidence."
      client="Lumière Studio"
      services={[
        "Brand Identity",
        "Art Direction",
        "Stationery",
        "Brand Guidelines",
      ]}
      year="2026"
      image="/images/portfolio/branding/lumiere-studio-brand-board.png"
      colors={[
        "#232323",
        "#7B9482",
        "#E7EFE9",
        "#F5F1E8",
      ]}
      nextProject={{
        title: "Verde Organics",
        href: "/portfolio/verde-organics",
        description:
          "Explore a packaging system inspired by nature, sustainability, and modern simplicity.",
      }}
    />
  );
}