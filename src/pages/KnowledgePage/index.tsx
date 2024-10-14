import { createStyles, rem, Flex, Container } from "@mantine/core";
import {
  CustomTitleSection,
  BookingFormSection,
  KnowledgeTagList,
  TopKnowledgeSection,
  AllKnowledgeSection,
} from "@/components";

const useStyles = createStyles((theme) => ({
  titlePage: {
    color: theme.colors.clinicBlue[0],
    fontSize: rem(36),
  },
}));

const KnowledgePage = () => {
  const { classes } = useStyles();

  return (
    <Container fluid mb={rem(60)} px={{ sm: rem(16), lg: rem(40) }} p={0}>
      <Flex direction={"column"} justify={"center"} align={"center"}>
        <CustomTitleSection customClass={classes.titlePage} title="kiến thức" />
        <KnowledgeTagList />
      </Flex>
      <TopKnowledgeSection titleSection="các bài viết nổi bật" />
      <AllKnowledgeSection />
      <BookingFormSection />
    </Container>
  );
};

export default KnowledgePage;
