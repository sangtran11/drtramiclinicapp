import { rem, Image, Flex, createStyles, Pagination } from "@mantine/core";
import { CustomTitleSection } from "@/components";
import { useAppContext } from "@/contexts/AppContext";

const useStyles = createStyles((theme) => ({
  titlePage: {
    color: theme.colors.clinicBlue[0],
    padding: `0 ${rem(20)} `,
  },
}));

type ImageServiceDetailSectionProps = {
  imagesList: string[];
};

const ImageServiceDetailSection = ({
  imagesList,
}: ImageServiceDetailSectionProps) => {
  const { classes } = useStyles();
  const { activePageDetailService, setActivePageDetailService } =
    useAppContext();

  if (imagesList.length === 0) return null;

  return (
    <Flex
      direction={"column"}
      justify={"center"}
      align={"center"}
      mb={rem(60)}
      px={{ sm: rem(16), lg: rem(40) }}
    >
      <CustomTitleSection
        title={"hình ảnh điều trị"}
        customClass={classes.titlePage}
      />
      <Image
        src={`/images/logo_nhan_xet_kh/${imagesList[activePageDetailService - 1]}.png`}
        alt="image"
      />
      {imagesList.length > 1 && (
        <Pagination
          total={imagesList.length}
          siblings={1}
          value={activePageDetailService}
          onChange={setActivePageDetailService}
          mt={rem(20)}
        />
      )}
    </Flex>
  );
};

export default ImageServiceDetailSection;
