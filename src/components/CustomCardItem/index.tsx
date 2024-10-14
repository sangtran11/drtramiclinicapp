import {
  Text,
  createStyles,
  rem,
  Title,
  Card,
  Image,
  Badge,
  Group,
} from "@mantine/core";
import { IconArrowUpRight } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  cardRoot: {
    cursor: "pointer",
    ".mantine-Paper-root": {
      padding: 0,
    },
  },
  badgeCustom: {
    color: theme.colors.clinicRose[1],
    backgroundColor: theme.colors.clinicRose[2],
    textTransform: "capitalize",
    fontSize: rem(12),
    fontWeight: 600,
  },
}));

type CustomCardItemProps = {
  item: {
    id?: number;
    isShowBadge?: boolean;
    imageUrl?: string;
    badgeLabel?: string;
    title?: string;
    subTitle?: string;
    isOutstanding?: boolean;
    fullContent?: string;
  };
  onOpenDetail?: (id?: any) => void;
};

const CustomCardItem: React.FC<CustomCardItemProps> = ({
  item,
  onOpenDetail,
}) => {
  const { classes } = useStyles();
  const { imageUrl, badgeLabel, title, subTitle, isShowBadge } = item;

  return (
    <Card className={classes.cardRoot} p={0} onClick={onOpenDetail}>
      <Image
        width={"100%"}
        height={"380px"}
        radius="md"
        src={imageUrl}
        alt="Random unsplash image"
        maw={rem(405)}
      />
      {isShowBadge && (
        <Group position="apart" mt="md" mb="xs">
          <Badge className={classes.badgeCustom} variant="light">
            {badgeLabel}
          </Badge>
        </Group>
      )}
      <Title color="clinicDark.0" className="line-clamp-1" fz={rem(20)} mt="xs">
        {title}
      </Title>
      <Text
        size="md"
        color="clinicDark.1"
        className="line-clamp-2 leading-5"
        mt="xs"
      >
        {subTitle}
      </Text>
      <Group spacing="xs" mt="xs">
        <Text
          size="md"
          color="clinicBlue.0"
          className="cursor-pointer opacity-90 hover:opacity-100"
        >
          Xem thêm
        </Text>
        <IconArrowUpRight size={20} strokeWidth={2} color={"#0378BD"} />
      </Group>
    </Card>
  );
};

export default CustomCardItem;
