import { useCallback, useEffect } from "react";
import { createStyles, rem, Flex, Group, Badge } from "@mantine/core";
import { productFilterTags, originProductList } from "@/constants";
import { useAppContext } from "@/contexts/AppContext";

const useStyles = createStyles((theme) => ({
  badge: {
    color: theme.colors.clinicRose[1],
    backgroundColor: "#FFFFFF",
    textTransform: "uppercase",
    fontSize: rem(14),
    fontWeight: 600,
    cursor: "pointer",
    border: `1px solid ${theme.colors.clinicRose[1]}`,
    padding: rem(16),
    "&:hover": {
      backgroundColor: theme.colors.clinicRose[1],
      color: "#FFFFFF",
    },
  },
  isActiveBadge: {
    color: "#FFFFFF",
    backgroundColor: theme.colors.clinicRose[1],
  },
}));

const ProductTagList = () => {
  const { classes, cx } = useStyles();
  const {
    activeProductBadge,
    setActiveProductBadge,
    setAllOriginProductListList,
  } = useAppContext();

  const handleSelectTag = useCallback(
    (tagId: number) => {
      setActiveProductBadge(tagId);
      if (tagId === 1) {
        setAllOriginProductListList(originProductList);
        return;
      }
      const newList = originProductList.filter((item) => item.tagId === tagId);
      setAllOriginProductListList(newList);
    },
    [originProductList],
  );

  useEffect(() => {
    return () => {
      setAllOriginProductListList(originProductList);
      setActiveProductBadge(1);
    };
  }, []);

  return (
    <Flex
      direction={"column"}
      justify={"center"}
      align={"center"}
      mb={rem(60)}
      px={{ sm: rem(16), lg: rem(200), md: rem(40), xl: rem(300) }}
    >
      <Group position="center" mt="md" mb="xs">
        {productFilterTags.map((tag, index) => (
          <Badge
            onClick={() => handleSelectTag(tag.id)}
            key={index}
            variant="light"
            className={cx(
              classes.badge,
              activeProductBadge === tag.id && classes.isActiveBadge,
            )}
          >
            {tag.label}
          </Badge>
        ))}
      </Group>
    </Flex>
  );
};

export default ProductTagList;
