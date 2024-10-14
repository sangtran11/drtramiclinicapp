import { Container, rem, Image } from "@mantine/core";
import { CustomTitleSection } from "@/components";
import { Carousel } from "@mantine/carousel";
import { customerReviewList } from "@/constants";

type IProps = {
  titleSection?: string;
};

const CustomerReviewSection = ({
  titleSection = "nhận xét khách hàng",
}: IProps) => {
  return (
    <Container fluid mb={rem(60)} px={{ sm: rem(16), lg: rem(40) }}>
      <CustomTitleSection title={titleSection} />
      <Carousel
        w={"100%"}
        height={"100%"}
        mx="auto"
        slideSize="50%"
        slideGap={"lg"}
        loop
        align={"start"}
        breakpoints={[
          { maxWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
        ]}
      >
        {customerReviewList.map((item, index) => (
          <Carousel.Slide key={index}>
            <Image
              width={"100%"}
              height={"auto"}
              fit="contain"
              radius="md"
              src={`/images/logo_nhan_xet_kh/${item}.png`}
              alt={item}
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Container>
  );
};

export default CustomerReviewSection;
