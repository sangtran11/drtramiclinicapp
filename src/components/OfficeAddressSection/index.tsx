import { Container, rem, createStyles, Title, Grid, Flex } from "@mantine/core";
import { CustomTitleSection } from "@/components";
import { IconMapPin, IconPhoneCall, IconClockHour4 } from "@tabler/icons-react";
import { isMobileOnly } from 'react-device-detect';

const useStyles = createStyles((theme) => ({
  mapSection: {
    width: "100%",
    height: rem(450),
    padding: `0 ${rem(40)} ${rem(32)} 0`,
    [theme.fn.smallerThan("md")]: {
      padding: `0 ${rem(12)}`,
      marginBottom: rem(40),
    },
  },
  wrapReview: {
    [theme.fn.largerThan("sm")]: {
      padding: 0,
    },
  },
  reviewSection: {
    backgroundColor: theme.colors.clinicWhite[0],
    height: rem(450),
    padding: `${rem(32)} ${rem(20)}`,
    boxShadow: `0px 4px 12px 0px rgba(0, 0, 0, 0.12)`,
  },
  titleFeedback: {
    fontSize: rem(18),
    fontWeight: 600,
    textTransform: "uppercase",
    color: theme.colors.clinicBlue[0],
    marginBottom: rem(40),
  },
  addressText: {
    fontSize: rem(14),
    fontWeight: 600,
    textTransform: "capitalize",
    color: theme.colors.clinicRose[1],
    lineHeight: rem(24),
  },
}));

const OfficeAddressSection = ({ titleSection = "địa điểm" }) => {
  const { classes } = useStyles();

  return (
    <Container fluid mb={rem(60)} px={{ sm: rem(16), lg: rem(40) }}>
      <CustomTitleSection title={titleSection} />
      <Grid gutter={rem(24)}>
        <Grid.Col sm={12} md={6} lg={8} className={classes.mapSection}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5142372437476!2d106.67843751133654!3d10.771870789332345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f216df27bb9%3A0x3183c9c38db032b3!2zNTEgTmd1eeG7hW4gSGnhu4FuLCBQaMaw4budbmcgNCwgUXXhuq1uIDMsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1718294291496!5m2!1sen!2s"
            width="100%"
            height="450"
            loading="lazy"
          ></iframe>
        </Grid.Col>
        <Grid.Col sm={12} md={6} lg={4} className={classes.wrapReview}>
          <div className={classes.reviewSection}>
            <Title className={classes.titleFeedback}>
              {isMobileOnly ? (
                <span>phòng khám<br/>da liễu, thẩm mỹ da</span>
              ) : (
                <span>phòng khám da liễu thẩm mỹ da</span>
              )}
              <br />
              BS CKII Nguyễn Lê Trà Mi
            </Title>
            <Flex gap={rem(10)} align={"center"} mb={rem(20)}>
              <IconMapPin size={rem(28)} strokeWidth={2} color={"#EF5C76"} />
              <Title className={classes.addressText}>
                51 Nguyễn Hiền, P4, Q3, TP.HCM
              </Title>
            </Flex>
            <Flex gap={rem(10)} align={"center"} mb={rem(20)}>
              <IconClockHour4
                size={rem(28)}
                strokeWidth={2}
                color={"#EF5C76"}
              />
              <Title className={classes.addressText}>
                Thứ 2 - CN<br/>9:00 – 20:00
              </Title>
            </Flex>
            <Flex gap={rem(10)} align={"center"} mb={rem(20)}>
              <IconPhoneCall size={rem(28)} strokeWidth={2} color={"#EF5C76"} />
              <Title className={classes.addressText}>0903065445</Title>
            </Flex>
          </div>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default OfficeAddressSection;
