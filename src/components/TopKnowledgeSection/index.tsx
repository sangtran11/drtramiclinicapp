import { useMemo } from "react";
import { Container, rem, Grid } from "@mantine/core";
import { CustomCardItem, CustomTitleSection } from "@/components";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "@/contexts/AppContext";

const TopKnowledgeSection = ({ titleSection = "kiến thức" }) => {
  const { allKnowledgeArticleList } = useAppContext();
  const navigate = useNavigate();

  const topArticleList = useMemo(
    () => allKnowledgeArticleList.filter((item) => item.isOutstanding),
    [allKnowledgeArticleList],
  );

  const handleOpenDetail = (id: number) => {
    navigate(`/kien-thuc/${id}`);
  };

  if (!topArticleList.length) return null;

  return (
    <Container fluid mb={rem(60)} px={{ sm: rem(16), lg: rem(40) }}>
      <CustomTitleSection title={titleSection} />
      <Grid gutter={rem(30)}>
        {topArticleList.map(
          (item, index) =>
            item.isOutstanding && (
              <Grid.Col sm={12} md={6} lg={3} key={index}>
                <CustomCardItem
                  item={item}
                  key={index}
                  onOpenDetail={() => handleOpenDetail(item.id)}
                />
              </Grid.Col>
            ),
        )}
      </Grid>
    </Container>
  );
};

export default TopKnowledgeSection;
