import { createStyles, rem, Flex, Container } from "@mantine/core";
import {
  CustomTitleSection,
  BookingFormSection,
  ProductsSection,
  ProductTagList,
} from "@/components";

const useStyles = createStyles((theme) => ({
  titlePage: {
    color: theme.colors.clinicBlue[0],
    fontSize: rem(36),
  },
}));

const StorePage = () => {
  const { classes } = useStyles();

  return (
    <Container fluid mb={rem(60)} px={{ sm: rem(16), lg: rem(40) }} p={0}>
      <Flex direction={"column"} justify={"center"} align={"center"}>
        <CustomTitleSection customClass={classes.titlePage} title="cửa hàng" />
        <ProductTagList />
      </Flex>
      <ProductsSection />
      <BookingFormSection />
    </Container>
  );
};

export default StorePage;
