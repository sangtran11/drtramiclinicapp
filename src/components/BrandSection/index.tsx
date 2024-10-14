import { useRef } from "react";
import { CustomTitleSection } from "@/components";
import { Center, Container, rem, Image } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { brandListLogo } from "@/constants";
import Autoplay from "embla-carousel-autoplay";

const BrandSection = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <Container fluid mb={rem(60)} px={{ sm: rem(16), lg: rem(40) }}>
      <Center mx="auto">
        <CustomTitleSection title="NHỮNG THƯƠNG HIỆU ĐỒNG HÀNH" />
      </Center>
      <Carousel
        w={"100%"}
        height={"100%"}
        mx="auto"
        slideSize="12%"
        slideGap="xs"
        withControls={false}
        loop
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        align={"start"}
        styles={{
          container: {
            alignItems: "center",
          },
        }}
      >
        {brandListLogo.map((brand, index) => (
          <Carousel.Slide key={index}>
            <Image
              width={rem(150)}
              height={"auto"}
              fit="contain"
              radius="md"
              src={`/images/logo_thuong_hieu/${brand}.png`}
              alt={brand}
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Container>
  );
};

export default BrandSection;
