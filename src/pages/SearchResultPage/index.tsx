import { createStyles, rem, Flex, Container } from "@mantine/core";
import {
  CustomTitleSection,
  BookingFormSection,
  ServicesSection,
  KnowledgeSearchingSection,
  ProductSearchingSection
} from "@/components";
import { useAppContext } from "@/contexts/AppContext";

const useStyles = createStyles((theme) => ({
  titlePage: {
    color: theme.colors.clinicBlue[0],
    fontSize: rem(36),
  },
}));

const SearchResultPage = () => {
  const { classes } = useStyles();
  const { searchValue, serviceSearchingList, knowledgeSearchingList, productSearchingList } =
    useAppContext();

  return (
    <Container fluid mb={rem(60)} px={{ sm: rem(16), lg: rem(40) }} p={0}>
      <Flex direction={"column"} justify={"center"} align={"center"}>
        <CustomTitleSection
          customClass={classes.titlePage}
          title={`kết quả tìm kiếm "${searchValue}"`}
        />
      </Flex>
      <ServicesSection customServiceList={serviceSearchingList} />
      <KnowledgeSearchingSection
        searchingKnowledgeList={knowledgeSearchingList}
      />
      <ProductSearchingSection searchingProductList={productSearchingList} />
      <BookingFormSection />
    </Container>
  );
};

export default SearchResultPage;
