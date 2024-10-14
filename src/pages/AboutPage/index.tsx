import {
  CertificateTimelineSection,
  CurrentCompaniesSection,
  BannerInfoSection,
  BriefExperienceSection,
  BookingFormSection,
  SeminarSection,
  NewspaperSection,
  ClinicOfficeImagesList,
  OfficeAddressSection,
  YoutubeVideoSection,
  CertificateSection,

} from "@/components";

const AboutPage = () => {
  return (
    <>
      <BannerInfoSection />
      <CertificateTimelineSection />
      <CertificateSection />
      <CurrentCompaniesSection />
      <BriefExperienceSection />
      <YoutubeVideoSection />
      <SeminarSection />
      <NewspaperSection />
      <ClinicOfficeImagesList />
      <OfficeAddressSection />
      <BookingFormSection />
    </>
  );
};

export default AboutPage;
