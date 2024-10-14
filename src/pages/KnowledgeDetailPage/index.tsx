import { useState, useEffect } from "react";
import { createStyles, rem, Flex, Center } from "@mantine/core";
import { useParams } from "react-router-dom";
import {
  CustomTitleSection,
  BookingFormSection,
  RelatedArticleSection,
} from "@/components";
import { knowledgeArticleList } from "@/constants";

const useStyles = createStyles((theme) => ({
  titlePage: {
    color: theme.colors.clinicBlue[0],
    padding: `0 ${rem(20)} `,
    textAlign: "center",
  },
  description: {
    color: theme.colors.clinicDark[0],
  },
}));

const KnowledgeDetailPage = () => {
  const { id } = useParams();
  const { classes } = useStyles();
  const [knowledgeDetail, setKnowledgeDetail] = useState<any>(null);
  const [relatedKnowledgeList, setRelatedKnowledgeList] = useState<any>([]);

  useEffect(() => {
    if (!id) return;

    const knowledge = knowledgeArticleList.find(
      (knowledge) => knowledge.id === parseInt(id),
    );
    const relatedList = knowledgeArticleList.filter(
      (item) => item.tagId === knowledge?.tagId && item.id !== knowledge?.id,
    );
    setRelatedKnowledgeList(relatedList);
    setKnowledgeDetail(knowledge);
  }, [id]);

  if (!id || !knowledgeDetail) return null;

  return (
    <Flex
      direction={"column"}
      justify={"center"}
      align={"center"}
      mb={rem(60)}
      px={{ sm: rem(16), lg: rem(40) }}
    >
      <CustomTitleSection
        title={knowledgeDetail.title}
        customClass={classes.titlePage}
      />
      <Center mx="auto" maw={rem(800)}>
        <div
          className="font-base mb-10 text-[#4C4C4C] px-5"
          dangerouslySetInnerHTML={{
            __html: knowledgeDetail.fullContent,
          }}
        ></div>
      </Center>
      <RelatedArticleSection relatedKnowledgeList={relatedKnowledgeList} />
      <BookingFormSection />
    </Flex>
  );
};

export default KnowledgeDetailPage;
