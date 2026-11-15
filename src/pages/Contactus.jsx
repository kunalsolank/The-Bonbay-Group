import ContactHeroSection from "../components/subPagesComponents/ContactHeroSection";
import ContactInquirySection from "../components/subPagesComponents/ContactInquirySection";
import ContactVisualStrip from "../components/subPagesComponents/ContactVisualStrip";
import ContactToolkitSection from "../components/subPagesComponents/ContactToolkitSection";
import ContactFinalCta from "../components/subPagesComponents/ContactFinalCta";

export default function Contactus() {
  return (
    <main className="contact-page overflow-hidden bg-[#080908] text-white">
      <ContactHeroSection />
      <ContactInquirySection />
      <ContactVisualStrip />
      <ContactToolkitSection />
      <ContactFinalCta />
    </main>
  );
}
