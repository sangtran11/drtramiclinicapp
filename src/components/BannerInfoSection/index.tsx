import { createStyles } from "@mantine/core";

const useStyles = createStyles(() => ({
  fullBanner: {
    width: '100%',
    height: '100%',
  },
}));

const BannerInfoSection = () => {
  const { classes } = useStyles();

  return (
    <div>
      <img src='/images/main_banner.png' alt='banner' className={classes.fullBanner} />
    </div>
  );
};

export default BannerInfoSection;
