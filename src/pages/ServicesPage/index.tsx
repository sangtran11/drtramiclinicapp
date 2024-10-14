import { createStyles, rem, Flex } from "@mantine/core";
import {
  CustomTitleSection,
  ServicesSection,
  BookingFormSection,
} from "@/components";
import { servicesListLogo } from "@/constants";

const useStyles = createStyles((theme) => ({
  titlePage: {
    color: theme.colors.clinicBlue[0],
    fontSize: rem(36),
  },
}));

const ServicesPage = () => {
  const { classes } = useStyles();

  return (
    <Flex
      direction={"column"}
      justify={"center"}
      align={"center"}
      mb={rem(60)}
      px={{ sm: rem(16), lg: rem(40) }}
    >
      <CustomTitleSection customClass={classes.titlePage} title="dịch vụ" />
      <ServicesSection
        isShowTitle={false}
        customServiceList={servicesListLogo}
      />
      <BookingFormSection />
    </Flex>
  );
};

export default ServicesPage;
