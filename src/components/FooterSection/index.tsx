import {
  Grid,
  rem,
  createStyles,
  Center,
  Title,
  Text,
  Flex,
} from "@mantine/core";
import { CustomLogo } from "@/components";
import mainLogoUrl from "/images/big_main_logo.png";
import fbIcon from "/icons/fb.svg";
// import instagramIcon from "/icons/instagram.svg";
import tiktok from "/icons/tiktok.svg";
import { isMobileOnly } from 'react-device-detect';

const useStyles = createStyles((theme) => ({
  footerTitle: {
    fontSize: rem(20),
    fontWeight: 700,
    textTransform: "uppercase",
    color: theme.colors.clinicDark[0],
  },
  subTitle: {
    fontSize: rem(14),
    fontWeight: 700,
    textTransform: "uppercase",
    color: theme.colors.clinicDark[0],
    paddingBottom: rem(8),
  },
  information: {
    fontSize: rem(14),
    color: theme.colors.clinicDark[1],
  },
}));

const FooterSection = () => {
  const { classes } = useStyles();

  return (
    <Grid>
      <Grid.Col md={4} lg={3}>
        <Center>
          <CustomLogo logoUrl={mainLogoUrl} />
        </Center>
      </Grid.Col>
      <Grid.Col md={4} lg={6}>
        {isMobileOnly ? (
          <Title className={classes.footerTitle}>
            phòng khám<br/>da liễu, thẩm mỹ da
          </Title>
        ) : (
          <Title className={classes.footerTitle}>
            phòng khám da liễu thẩm mỹ da
          </Title>
        )}
        <Title className={classes.footerTitle} mb={"lg"}>
          bsckii nguyễn lê trà mi
        </Title>
        <Grid>
          <Grid.Col md={12} lg={3}>
            <Title className={classes.subTitle}>địa chỉ</Title>
            <Text className={classes.information}>
              51 Nguyễn Hiền, P4, Q3, TP.HCM
            </Text>
          </Grid.Col>
          <Grid.Col md={12} lg={3}>
            <Title className={classes.subTitle}>giờ hoạt động</Title>
            <Text className={classes.information}>
              Thứ 2 - Thứ 7<br/>9:00 – 20:00
            </Text>
          </Grid.Col>
          <Grid.Col md={12} lg={3}>
            <Title className={classes.subTitle}>hotline</Title>
            <Text className={classes.information}>0903065445</Text>
          </Grid.Col>
          <Grid.Col md={12} lg={3}>
            <Title className={classes.subTitle} pb={"xs"}>
              mạng xã hội
            </Title>
            <Flex>
              <div className="pr-6">
                <a
                  href={"https://www.facebook.com/BSCKIIDALIEUNGUYENLETRAMI/"}
                  target={"_blank"}
                >
                  <img src={fbIcon} alt={"fb"} />
                </a>
              </div>
              {/* <div className="pr-6">
                <a href={""} target={"_blank"}>
                  <img src={instagramIcon} alt={"IG"} />
                </a>
              </div> */}
              <div>
                <a
                  href={
                    "https://www.tiktok.com/@bstramidalieu?_t=8kZveZsc8VL&_r=1"
                  }
                  target={"_blank"}
                >
                  <img src={tiktok} alt={"tiktok"} />
                </a>
              </div>
            </Flex>
          </Grid.Col>
        </Grid>
      </Grid.Col>
      <Grid.Col md={4} lg={3}></Grid.Col>
    </Grid>
  );
};

export default FooterSection;
