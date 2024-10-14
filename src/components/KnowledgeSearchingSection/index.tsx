import { useState, useEffect } from "react";
import { Container, rem, Grid, Pagination, Center } from "@mantine/core";
import { CustomCardItem, CustomTitleSection } from "@/components";
import { useNavigate } from "react-router-dom";

const KnowledgeSearchingSection = ({ searchingKnowledgeList = [] as any }) => {
  const [
    paginationKnowledgeSearchingList,
    setPaginationKnowledgeSearchingList,
  ] = useState(searchingKnowledgeList);
  const [activePage, setActivePage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const start = (activePage - 1) * 8;
    const end = start + 8;
    setPaginationKnowledgeSearchingList(
      searchingKnowledgeList.slice(start, end),
    );
  }, [activePage, searchingKnowledgeList]);

  const handleOpenDetail = (id: number) => {
    navigate(`/kien-thuc/${id}`);
  };

  if (!searchingKnowledgeList.length) return null;

  return (
    <Container fluid mb={rem(60)} px={{ sm: rem(16), lg: rem(40) }}>
      <CustomTitleSection title={"kiến thức"} />
      <Grid gutter={rem(30)}>
        {paginationKnowledgeSearchingList.map((item: any, index: number) => (
          <Grid.Col sm={12} md={6} lg={3} key={index}>
            <CustomCardItem
              item={item}
              key={index}
              onOpenDetail={() => handleOpenDetail(item.id)}
            />
          </Grid.Col>
        ))}
      </Grid>
      {searchingKnowledgeList.length > 8 && (
        <Center>
          <Pagination
            value={activePage}
            onChange={setActivePage}
            siblings={1}
            total={Math.ceil(searchingKnowledgeList.length / 8)}
            mt={rem(36)}
          />
        </Center>
      )}
    </Container>
  );
};

export default KnowledgeSearchingSection;
