import CaseStudy from "@/components/portfolio/CaseStudy";

export default function NorthCoffeePage() {
  return (
    <CaseStudy
      title="North Coffee"
      subtitle="A welcoming café identity blending modern simplicity with the warmth of handcrafted coffee."
      overviewTitle="Designed for everyday coffee moments."
      overview1="North Coffee's identity was created to feel approachable, contemporary, and authentic. A restrained color palette and clean typography establish a calm and inviting visual language."
      overview2="The branding adapts naturally across menus, takeaway packaging, merchandise, and social media while maintaining a consistent customer experience."
      client="North Coffee"
      services={[
        "Brand Identity",
        "Packaging Design",
        "Menu Design",
        "Art Direction",
      ]}
      year="2026"
      image="/images/portfolio/branding/north-coffee-brand-board.png"
      colors={[
        "#3B312C",
        "#8A6E53",
        "#E8DDD1",
        "#F7F5F2",
      ]}
      nextProject={{
        title: "Solis Skincare",
        href: "/portfolio/solis-skincare",
        description:
          "A clean skincare identity inspired by wellness, confidence, and modern beauty.",
      }}
    />
  );
}