import Navbar from "./Navbar";
import Footer from "./Footer";

type SiteLayoutProps = {
  children: React.ReactNode;
};

export default function SiteLayout({
  children,
}: SiteLayoutProps) {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#FAFAF8] text-zinc-900">
        {children}
      </main>

      <Footer />
    </>
  );
}