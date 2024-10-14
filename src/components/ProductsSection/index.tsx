import { useState, useEffect, useMemo } from "react";
import { Container, rem, Grid, Pagination, Center } from "@mantine/core";
import { CustomTitleSection, ProductCardItem } from "@/components";
import { useAppContext } from "@/contexts/AppContext";
import { productFilterTags } from "@/constants";

const ProductsSection = () => {
  const { allOriginProductListList, activeProductBadge } = useAppContext();
  const [paginationProductList, setPaginationProductList] = useState(
    allOriginProductListList,
  );

  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    setActivePage(1);
  }, [allOriginProductListList]);

  const handleOpenDetail = (link: string) => {
    // mở link chi tiết sản phẩm bên shoppe
    window.open(link, "_blank");
  };

  useEffect(() => {
    const start = (activePage - 1) * 8;
    const end = start + 8;
    setPaginationProductList(allOriginProductListList.slice(start, end));
  }, [activePage, allOriginProductListList]);

  const activeProductBadgeData = useMemo(
    () => productFilterTags.find((tag) => tag.id === activeProductBadge),
    [activeProductBadge],
  );

  return (
    <Container fluid mb={rem(60)} px={{ sm: rem(16), lg: rem(40) }}>
      <CustomTitleSection title={activeProductBadgeData?.label} />
      {/* <CustomTitleSection title={"tất cả"} /> */}
      <Grid gutter={rem(30)}>
        {paginationProductList.map((item, index) => (
          <Grid.Col sm={12} md={6} lg={3} key={index}>
            <ProductCardItem
              item={item}
              key={index}
              onOpenDetail={() => handleOpenDetail(item.linkShoppe)}
            />
          </Grid.Col>
        ))}
      </Grid>
      {allOriginProductListList.length > 8 && (
        <Center>
          <Pagination
            value={activePage}
            onChange={setActivePage}
            siblings={1}
            total={Math.ceil(allOriginProductListList.length / 8)}
            mt={rem(36)}
          />
        </Center>
      )}
    </Container>
  );
};

export default ProductsSection;
