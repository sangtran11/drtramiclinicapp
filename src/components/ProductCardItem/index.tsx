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
import { CustomButton } from "@/components";

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
  top1seller: {
    padding: "4px 12px",
    color: "#FFFFFF",
    backgroundColor: "#0378BD",
    border: '1px solid #0378BD',
    textTransform: "uppercase",
    fontSize: rem(14),
    fontWeight: 600,
    textAlign: "center",
    height: rem(30),
  },
  discountNote: {
    padding: "4px 12px",
    border: "1px solid #EF5C76",
    color: "#EF5C76",
    position: "absolute",
    top: 0,
    right: "6px",
    fontSize: rem(14),
    fontWeight: 600,
    textTransform: "capitalize",
  },
  cardContainer: {
    position: "relative",
    height: "100%",
  },
  customButton: {
    width: "100%",
    position: "absolute",
    bottom: 0
  },
  emptyTopSeller: {
    height: rem(30),
  }
}));

type ProductCardItemProps = {
  item: {
    id: number;
    badgeLabel: string;
    imageUrl: string;
    discountNote: string;
    name: string;
    fromPlace: string;
    price: string;
    oldPrice: string;
    isBestSeller: boolean;
  };
  onOpenDetail?: (id?: any) => void;
};

const ProductCardItem: React.FC<ProductCardItemProps> = ({
  item,
  onOpenDetail,
}) => {
  const { classes, cx } = useStyles();
  const { imageUrl, badgeLabel, discountNote, name, fromPlace, price, oldPrice, isBestSeller } =
    item || {};

  return (
    <div className={classes.cardContainer} onClick={onOpenDetail}>
      <Card
        className={classes.cardRoot}
        p={0}
        mb={rem(24)}
      >
        <Image
          width={"100%"}
          fit="contain"
          radius="md"
          src={imageUrl}
          alt="product-image"
          maw={rem(400)}
          mah={rem(400)}
        ></Image>
        {discountNote && <div className={classes.discountNote}>{discountNote}</div>}
        <div className={cx(isBestSeller ? classes.top1seller : classes.emptyTopSeller)}>{isBestSeller ? "Top sản phẩm bán chạy" : ""}</div>
        <Group position="apart" mt="md" mb="xs">
          <Badge className={classes.badgeCustom} variant="light">
            {badgeLabel}
          </Badge>
        </Group>
        <Title
          color="clinicDark.0"
          className="line-clamp-3 font-bold uppercase"
          fz={rem(20)}
          mt="xs"
        >
          {name}
        </Title>
        <Text size="md" color="clinicDark.0" mt={rem(8)} tt="capitalize">
          xuất xứ: {fromPlace}
        </Text>
        <Text size="md" color="clinicDark.0" mt={rem(12)} weight={600}>
          Giá tham khảo:
        </Text>
        <Group spacing="xs" mb="xl">
          <Text size="md" color="clinicBlue.0" weight={600}>
            {price} vnđ
          </Text>
          {oldPrice && (
            <Text size="md" color="gray" weight={600} className="line-through">
              {oldPrice} vnđ
            </Text>
          )}
        </Group>
      </Card>
      <CustomButton className={classes.customButton} label="Mua ngay" />
    </div>
  );
};

export default ProductCardItem;
