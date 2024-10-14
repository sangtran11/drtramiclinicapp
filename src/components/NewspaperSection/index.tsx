import { Container, rem, Grid } from "@mantine/core";
import { CustomCardItem, CustomTitleSection } from "@/components";
import { newspaperList } from "@/constants";

const NewspaperSection = ({ titleSection = "tác giả của một số bài báo" }) => {
  const handleOpenDetail = (item: any) => {
    window.open(item.fullContent, "_blank");
  };

  return (
    <Container fluid mb={rem(60)} px={{ sm: rem(16), lg: rem(40) }}>
      <CustomTitleSection title={titleSection} />
      <Grid align="center" gutter={rem(30)}>
        {newspaperList.map((item, index) => (
          <Grid.Col sm={12} md={6} lg={3} key={index}>
            <CustomCardItem
              item={item}
              key={index}
              onOpenDetail={() => handleOpenDetail(item)}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default NewspaperSection;
