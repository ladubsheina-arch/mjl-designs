import CaseStudy from "@/components/portfolio/CaseStudy";

export default function SolisSkincarePage() {
  return (
    <CaseStudy
      title="Solis Skincare"
      subtitle="A premium skincare brand identity centered on simplicity, confidence, and everyday self-care."
      overviewTitle="Clean beauty with a refined visual language."
      overview1="Solis Skincare combines minimalist aesthetics with warm, approachable visuals to communicate quality and trust. Every design decision reinforces the brand's focus on modern skincare and wellness."
      overview2="The identity system was developed for packaging, digital marketing, and product launches, ensuring a cohesive brand experience across every customer touchpoint."
      client="Solis Skincare"
      services={[
        "Brand Identity",
        "Packaging Design",
        "Art Direction",
        "Brand Guidelines",
      ]}
      year="2026"
      image="/images/portfolio/branding/solis-skincare-brand-board.png"
      colors={[
        "#D8B6A4",
        "#F5E8DE",
        "#7B9482",
        "#FFFFFF",
      ]}
      nextProject={{
        title: "Lumière Studio",
        href: "/portfolio/lumiere-studio",
        description:
          "Return to the featured luxury branding project that started the collection.",
      }}
    />
  );
}