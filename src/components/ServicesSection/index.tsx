import { Container, rem, Image, Grid, Text } from "@mantine/core";
import { CustomTitleSection } from "@/components";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "@/contexts/AppContext";

const ServicesSection = ({
  titleSection = "dịch vụ",
  isShowTitle = true,
  customServiceList = [] as any,
}) => {
  const navigate = useNavigate();
  const { setActivePageDetailService } = useAppContext();

  const handleOpenDetail = (id: number) => {
    navigate(`/dich-vu/${id}`);
    setActivePageDetailService(1);
  };

  if (!customServiceList.length) return null;

  return (
    <Container fluid mb={rem(60)} px={{ sm: rem(16), lg: rem(40) }}>
      {isShowTitle && <CustomTitleSection title={titleSection} />}
      <Grid>
        {customServiceList.map((service: any, index: number) => (
          <Grid.Col
            sm={12}
            md={6}
            lg={3}
            key={index}
            className="cursor-pointer"
          >
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
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default ServicesSection;
