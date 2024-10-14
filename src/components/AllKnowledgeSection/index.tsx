import { useState, useEffect, useMemo } from "react";
import { Container, rem, Grid, Pagination, Center } from "@mantine/core";
import { CustomCardItem, CustomTitleSection } from "@/components";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "@/contexts/AppContext";
import { knowledgeFilterTags } from "@/constants";

const AllKnowledgeSection = () => {
  const { allKnowledgeArticleList, activeKnowledgeBadge } = useAppContext();
  const [paginationKnowledgeList, setPaginationKnowledgeList] = useState(
    allKnowledgeArticleList,
  );
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    setActivePage(1);
  }, [allKnowledgeArticleList]);

  const handleOpenDetail = (id: number) => {
    navigate(`/kien-thuc/${id}`);
  };

  useEffect(() => {
    const start = (activePage - 1) * 8;
    const end = start + 8;
    setPaginationKnowledgeList(allKnowledgeArticleList.slice(start, end));
  }, [activePage, allKnowledgeArticleList]);

  const activeKnowledgeBadgeData = useMemo(
    () => knowledgeFilterTags.find((tag) => tag.id === activeKnowledgeBadge),
    [activeKnowledgeBadge],
  );

  return (
    <Container fluid mb={rem(60)} px={{ sm: rem(16), lg: rem(40) }}>
      <CustomTitleSection title={activeKnowledgeBadgeData?.label} />
      <Grid gutter={rem(30)}>
        {paginationKnowledgeList.map((item, index) => (
          <Grid.Col sm={12} md={6} lg={3} key={index}>
            <CustomCardItem
              item={item}
              key={index}
              onOpenDetail={() => handleOpenDetail(item.id)}
            />
          </Grid.Col>
        ))}
      </Grid>
      {allKnowledgeArticleList.length > 8 && (
        <Center>
          <Pagination
            value={activePage}
            onChange={setActivePage}
            siblings={1}
            total={Math.ceil(allKnowledgeArticleList.length / 8)}
            mt={rem(36)}
          />
        </Center>
      )}
    </Container>
  );
};

export default AllKnowledgeSection;
