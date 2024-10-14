import { Container, rem, createStyles } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { youtubeVideoList } from "@/constants";

const useStyles = createStyles(() => ({
  videoContainer: {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    paddingTop: "56.25%",
    "& iframe": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    },
  },
}));

const YoutubeVideoSection = () => {
  const { classes } = useStyles();

  return (
    <Container fluid mb={rem(60)} px={{ sm: rem(16), lg: rem(40) }}>
      <Carousel
        w={"100%"}
        height={"100%"}
        controlSize={35}
        mx="auto"
        slideSize="30%"
        slideGap={"lg"}
        loop
        align={"start"}
        breakpoints={[
          { maxWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
        ]}
      >
        {youtubeVideoList.map((item, index) => (
          <Carousel.Slide key={index}>
            <div className={classes.videoContainer}>
              <iframe
                width="560"
                height="315"
                src={item}
                title="clinic-video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </Container>
  );
};

export default YoutubeVideoSection;
