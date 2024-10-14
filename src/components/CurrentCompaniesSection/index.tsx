import { CustomTitleSection } from "@/components";
import { Center, Container, rem, Image, Flex, Text } from "@mantine/core";
import logoTruongYDuoc from "/images/logo_noi_cong_tac/truong-dh-yduoc.png";
import logoBVYDuoc from "/images/logo_noi_cong_tac/bv-dh-yduoc.png";
import logoBVNTP from "/images/logo_noi_cong_tac/bv-ntp.png";
import logoBVDaLieu from "/images/logo_noi_cong_tac/bv-da-lieu.jpg";

const CurrentCompaniesSection = () => {
  return (
    <Container fluid mb={rem(60)} px={{ sm: rem(16), lg: rem(40) }}>
      <Center mx="auto" mt={rem(32)}>
        <CustomTitleSection title="đơn vị công tác" />
      </Center>
      <Flex
        justify={"space-around"}
        align={"center"}
        direction={{ base: "column", sm: "row" }}
        gap={{ base: "sm", sm: rem(20) }}
      >
        <Image
          width={rem(250)}
          height={rem(250)}
          radius="md"
          src={logoTruongYDuoc}
          alt="image"
          caption={
            <Text fz="md" color="clinicBlue.0" fw={"600"}>
              ĐẠI HỌC Y DƯỢC
              <br />
               TP. HỒ CHÍ MINH
            </Text>
          }
        />
        <Image
          width={rem(250)}
          height={rem(250)}
          radius="md"
          src={logoBVYDuoc}
          alt="image"
          caption={
            <Text fz="md" color="clinicBlue.0" fw={"600"}>
              BỆNH VIỆN<br/>ĐẠI HỌC Y DƯỢC<br />TP. HỒ CHÍ MINH
            </Text>
          }
        />
        <Image
          width={rem(250)}
          height={rem(250)}
          radius="md"
          src={logoBVDaLieu}
          alt="image"
          caption={
            <Text fz="md" color="clinicBlue.0" fw={"600"}>
              BỆNH VIỆN<br/> DA LIỄU
              <br />
               TP. HỒ CHÍ MINH
            </Text>
          }
        />
        <Image
          width={rem(250)}
          height={rem(250)}
          radius="md"
          src={logoBVNTP}
          alt="image"
          caption={
            <Text fz="md" color="clinicBlue.0" fw={"600"}>
              BỆNH VIỆN<br/>NGUYỄN TRI PHƯƠNG
            </Text>
          }
        />
      </Flex>
    </Container>
  );
};

export default CurrentCompaniesSection;
