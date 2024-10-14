import { Container, rem, Grid, Image } from "@mantine/core";
import { CustomTitleSection } from "@/components";
import { seminarImageList } from "@/constants";

const SeminarSection = ({
  titleSection = "diễn giả một số hội thảo khoa học",
}) => {
  return (
    <Container fluid mb={rem(60)} px={{ sm: rem(16), lg: rem(40) }}>
      <CustomTitleSection title={titleSection} />
      <Grid>
        {seminarImageList.map((item, index) => (
          <Grid.Col sm={12} md={6} lg={3} key={index}>
            <Image
              width={"auto"}
              height={"auto"}
              radius="md"
              src={`/images/logo_hoi_thao/${item}`}
              alt={item}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default SeminarSection;
