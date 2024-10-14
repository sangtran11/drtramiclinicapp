import { createStyles } from "@mantine/core";

const useStyles = createStyles(() => ({
  fullBanner: {
    width: '100%',
    height: '100%',
  },
}));

const CertificateTimelineSection = () => {
  const { classes } = useStyles();

  return (
    <div className="mt-8">
      <img src='/images/bang_cap_chuyen_mon.png' alt='certificate' className={classes.fullBanner} />
    </div>
  )
};

export default CertificateTimelineSection;
