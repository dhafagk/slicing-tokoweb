import {
  DownloadSection,
  FeatureSection,
  FooterSection,
  HeroSection,
  Layout,
  NavbarSection,
  ServiceSection,
  TestimonialSection,
  TrackingSection,
} from "../components";

export default function Home() {
  return (
    <>
      <Layout title="Homepage">
        <NavbarSection />
        <HeroSection />
        <TrackingSection />
        <FeatureSection />
        <ServiceSection />
        <TestimonialSection />
        <DownloadSection />
        <FooterSection />
      </Layout>
    </>
  );
}
