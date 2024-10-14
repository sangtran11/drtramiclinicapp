import { useState, useEffect } from "react";
import { Container, rem, Grid, Pagination, Center } from "@mantine/core";
import { CustomTitleSection, ProductCardItem } from "@/components";

const ProductSearchingSection = ({ searchingProductList = [] as any }) => {
  const [
    paginationProductSearchingList,
    setPaginationProductSearchingList,
  ] = useState(searchingProductList);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    const start = (activePage - 1) * 8;
    const end = start + 8;
    setPaginationProductSearchingList(
      searchingProductList.slice(start, end),
    );
  }, [activePage, searchingProductList]);

  const handleOpenLinkShoppe = (link: string) => {
    window.open(link, "_blank");
  };

  if (!searchingProductList.length) return null;

  return (
    <Container fluid mb={rem(60)} px={{ sm: rem(16), lg: rem(40) }}>
      <CustomTitleSection title={"Sản Phẩm"} />
      <Grid gutter={rem(30)}>
        {paginationProductSearchingList.map((item: any, index: number) => (
          <Grid.Col sm={12} md={6} lg={3} key={index}>
            <ProductCardItem
              item={item}
              key={index}
              onOpenDetail={() => handleOpenLinkShoppe(item.linkShoppe)}
            />
          </Grid.Col>
        ))}
      </Grid>
      {searchingProductList.length > 8 && (
        <Center>
          <Pagination
            value={activePage}
            onChange={setActivePage}
            siblings={1}
            total={Math.ceil(searchingProductList.length / 8)}
            mt={rem(36)}
          />
        </Center>
      )}
    </Container>
  )
};

export default ProductSearchingSection;

