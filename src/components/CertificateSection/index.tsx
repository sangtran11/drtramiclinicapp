import { useRef } from "react";
import { Container, rem, Image } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { certificateImageList } from "@/constants";
import Autoplay from "embla-carousel-autoplay";

const CertificateSection = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <Container fluid my={rem(60)} px={{ sm: rem(16), lg: rem(40) }}>
      <Carousel
        w={"100%"}
        height={"100%"}
        mx="auto"
        slideSize="40%"
        slideGap="md"
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
        {certificateImageList.map((brand, index) => (
          <Carousel.Slide key={index}>
            <Image
              height={"auto"}
              fit="contain"
              radius="md"
              src={`/images/logo_bang_cap/${brand}`}
              alt={brand}
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Container>
  );
};

export default CertificateSection;
