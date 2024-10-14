import { useState, useEffect } from "react";
import { createStyles, rem, Flex, Center } from "@mantine/core";
import { useParams } from "react-router-dom";
import {
  CustomTitleSection,
  BookingFormSection,
  OtherServiceSection,
  ImageServiceDetailSection,
} from "@/components";
import { servicesListLogo } from "@/constants";

const useStyles = createStyles((theme) => ({
  titlePage: {
    color: theme.colors.clinicBlue[0],
    padding: `0 ${rem(20)} `,
  },
  description: {
    color: theme.colors.clinicDark[0],
  },
}));

const ServiceDetailPage = () => {
  const [serviceDetail, setServiceDetail] = useState<any>(null);
  const { id } = useParams();
  const { classes } = useStyles();
  useEffect(() => {
    if (!id) return;

    const service = servicesListLogo.find(
      (service) => service.id === parseInt(id),
    );
    setServiceDetail(service);
  }, [id]);

  if (!id || !serviceDetail) return null;

  return (
    <Flex
      direction={"column"}
      justify={"center"}
      align={"center"}
      mb={rem(60)}
      px={{ sm: rem(16), lg: rem(40) }}
    >
      <CustomTitleSection
        title={serviceDetail.content.name}
        customClass={classes.titlePage}
      />
      <Center mx="auto" maw={rem(800)}>
        <div
          className="font-base mb-10 text-[#4C4C4C] px-5"
          dangerouslySetInnerHTML={{
            __html: serviceDetail.content.desctiption,
          }}
        ></div>
      </Center>
      <ImageServiceDetailSection
        imagesList={serviceDetail.content.imagesList}
      />
      <OtherServiceSection idParams={id} />
      <BookingFormSection />
    </Flex>
  );
};

export default ServiceDetailPage;
