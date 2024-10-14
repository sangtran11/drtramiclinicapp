import { useCallback, useEffect } from "react";
import { createStyles, rem, Flex, Group, Badge } from "@mantine/core";
import { knowledgeFilterTags, knowledgeArticleList } from "@/constants";
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

const KnowledgeTagList = () => {
  const { classes, cx } = useStyles();
  const {
    activeKnowledgeBadge,
    setActiveKnowledgeBadge,
    setAllKnowledgeArticleList,
  } = useAppContext();

  const handleSelectTag = useCallback(
    (tagId: number) => {
      setActiveKnowledgeBadge(tagId);
      if (tagId === 1) {
        setAllKnowledgeArticleList(knowledgeArticleList);
        return;
      }
      const newList = knowledgeArticleList.filter(
        (item) => item.tagId === tagId,
      );
      setAllKnowledgeArticleList(newList);
    },
    [knowledgeArticleList],
  );

  useEffect(() => {
    return () => {
      setAllKnowledgeArticleList(knowledgeArticleList);
      setActiveKnowledgeBadge(1);
    };
  }, []);

  return (
    <Flex
      direction={"column"}
      justify={"center"}
      align={"center"}
      mb={rem(60)}
      px={{ sm: rem(16), lg: rem(40) }}
    >
      <Group position="left" mt="md" mb="xs">
        {knowledgeFilterTags.map((tag, index) => (
          <Badge
            onClick={() => handleSelectTag(tag.id)}
            key={index}
            variant="light"
            className={cx(
              classes.badge,
              activeKnowledgeBadge === tag.id && classes.isActiveBadge,
            )}
          >
            {tag.label}
          </Badge>
        ))}
      </Group>
    </Flex>
  );
};

export default KnowledgeTagList;
