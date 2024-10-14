import {
  CertificateTimelineSection,
  CurrentCompaniesSection,
  TopKnowledgeSection,
  ServicesSection,
  BannerInfoSection,
  CustomerReviewSection,
  BrandSection,
  BookingFormSection,
  CertificateSection,
} from "@/components";
import { servicesListLogo } from "@/constants";

const HomePage = () => {
  return (
    <>
      <BannerInfoSection />
      <CertificateTimelineSection />
      <CertificateSection />
      <CurrentCompaniesSection />
      <TopKnowledgeSection />
      <ServicesSection customServiceList={servicesListLogo} />
      <CustomerReviewSection />
      <BrandSection />
      <BookingFormSection />
    </>
  );
};

export default HomePage;
