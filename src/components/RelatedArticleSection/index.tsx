import { Container, rem, Grid } from "@mantine/core";
import { CustomTitleSection, CustomCardItem } from "@/components";
import { useNavigate } from "react-router-dom";
import { Carousel } from "@mantine/carousel";

type RelatedArticleSectionProps = {
  relatedKnowledgeList: any;
};

const RelatedArticleSection = ({
  relatedKnowledgeList,
}: RelatedArticleSectionProps) => {
  const navigate = useNavigate();

  const handleOpenDetail = (id: number) => {
    navigate(`/kien-thuc/${id}`);
  };

  if (!relatedKnowledgeList.length) return null;

  return (
    <Container fluid mb={rem(60)} px={{ sm: rem(16), lg: rem(40) }} w={"100%"}>
      <CustomTitleSection title={"các bài viết liên quan"} />
      {relatedKnowledgeList.length < 4 ? (
        <Grid gutter={rem(30)}>
          {relatedKnowledgeList.map((item: any, index: number) => (
            <Grid.Col sm={12} md={6} lg={4} key={index}>
              <CustomCardItem
                item={item}
                key={index}
                onOpenDetail={() => handleOpenDetail(item.id)}
              />
            </Grid.Col>
          ))}
        </Grid>
      ) : (
        <Carousel
          styles={{
            controls: {
              top: `calc(35% - 1.625rem / 2)`,
            },
          }}
          controlSize={35}
          w={"100%"}
          height={"100%"}
          mx="auto"
          slideSize="25%"
          slideGap={"lg"}
          loop
          align={"start"}
          breakpoints={[
            { maxWidth: "md", slideSize: "50%" },
            { maxWidth: "sm", slideSize: "80%", slideGap: 15 },
          ]}
        >
          {relatedKnowledgeList.map((item: any, index: number) => (
            <Carousel.Slide key={index}>
              <CustomCardItem
                item={item}
                key={index}
                onOpenDetail={() => handleOpenDetail(item.id)}
              />
            </Carousel.Slide>
          ))}
        </Carousel>
      )}
    </Container>
  );
};

export default RelatedArticleSection;
