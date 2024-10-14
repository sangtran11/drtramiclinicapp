import { useEffect, useState } from "react";
import { Container, rem, Image, Text } from "@mantine/core";
import { CustomTitleSection } from "@/components";
import { servicesListLogo } from "@/constants";
import { useNavigate } from "react-router-dom";
import { Carousel } from "@mantine/carousel";
import { useAppContext } from "@/contexts/AppContext";

type OtherServiceSectionProps = {
  titleSection?: string;
  isShowTitle?: boolean;
  idParams: string;
};

const OtherServiceSection = ({
  titleSection = "các dịch vụ khác",
  isShowTitle = true,
  idParams,
}: OtherServiceSectionProps) => {
  const [otherServiceList, setOtherServiceList] = useState<any>([]);
  const navigate = useNavigate();
  const { setActivePageDetailService } = useAppContext();

  useEffect(() => {
    if (!idParams) return;

    const service = servicesListLogo.filter(
      (service) => service.id !== parseInt(idParams),
    );
    setOtherServiceList(service);
  }, [idParams]);

  const handleOpenDetail = (id: number) => {
    navigate(`/dich-vu/${id}`);
    setActivePageDetailService(1);
  };

  if (otherServiceList.length === 0) return null;

  return (
    <Container fluid mb={rem(60)} px={{ sm: rem(16), lg: rem(40) }}>
      {isShowTitle && <CustomTitleSection title={titleSection} />}
      <Carousel
        w={"100%"}
        height={"100%"}
        mx="auto"
        slideSize="20%"
        slideGap={"lg"}
        loop
        align={"start"}
        breakpoints={[
          { maxWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "80%", slideGap: 15 },
        ]}
      >
        {otherServiceList.map((service: any, index: number) => (
          <Carousel.Slide key={index}>
            <Image
              onClick={() => handleOpenDetail(service.id)}
              width={"auto"}
              height={"auto"}
              radius="md"
              src={`/images/logo_dich_vu/${service.logo}.png`}
              alt={service.logo}
              caption={
                <Text fz="md" color="clinicDark.0" fw={"600"}>
                  {service.title}
                </Text>
              }
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Container>
  );
};

export default OtherServiceSection;
