import {
  Center,
  Container,
  rem,
  Title,
  createStyles,
  Text,
} from "@mantine/core";
import { CustomButton } from "@/components";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  root: {
    height: "auto",
    maxHeight: rem(1000),
    backgroundImage: 'url("/images/bg-dat-lich-hen.png")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  contentWrapper: {
    padding: `${rem(32)} 0`,
    maxWidth: "50%",
    margin: "0 auto",
    boxShadow: "0px 5px 40px 0px rgba(0, 0, 0, 0.05)",
    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      margin: "0",
    },
  },
  descriptionWrapper: {
    width: "100%",
    padding: `0 ${rem(60)}`,
    [theme.fn.smallerThan("md")]: {
      padding: `0 ${rem(20)}`,
    },
  },
  desc: {
    fontSize: rem(16),
    color: theme.colors.clinicDark[0],
    lineHeight: rem(24),
    marginBottom: rem(12),
  },
}));

const BriefExperienceSection = () => {
  const { classes } = useStyles();

  return (
    <Container fluid mb={rem(60)} py={rem(80)} className={classes.root}>
      <Container fluid className={classes.contentWrapper}>
        <Center mx="auto">
          <Title color="clinicBlue.0" fz={rem(24)} mb={rem(32)} ta="center">
            KINH NGHIỆM &
            <br />CHUYÊN ĐỀ NGHIÊN CỨU
          </Title>
        </Center>
        <div className={classes.descriptionWrapper}>
          <Text className={classes.desc}>Thành viên Hội Da liễu Việt Nam.</Text>
          <Text className={classes.desc}>
            Tốt nghiệp bác sỹ đa khoa năm 2008; tốt nghiệp bác sỹ nội trú chuyên
            ngành da liễu năm 2011 và tốt nghiệp chuyên khoa 2 da liễu Đại học Y
            Dược TPHCM năm 2020.
          </Text>
          <Text className={classes.desc}>
            Giảng viên chính thức tại Bộ môn Da liễu, Đại học Y Dược TP.HCM từ
            năm 2009 đến nay, đồng thời là bác sỹ điều trị da liễu, thẩm mỹ da
            tại các bệnh viện lớn tại TP.HCM. Hơn 15 năm kinh nghiệm trong lĩnh
            vực Da liễu – Thẩm mỹ da.
          </Text>
          <Text className={classes.desc} mb={rem(32)}>
            Là báo cáo viên tại các hội nghị trong nước và quốc tế chuyên ngành
            Da liễu – Thẩm mỹ Da về các đề tài công nghệ ánh sáng trong điều trị
            sẹo, mụn trứng cá, sắc tố da, lão hóa da, mesotherapy, chất làm đầy…
          </Text>
          <Link to={"/dat-lich-hen"}>
            <CustomButton label="Đặt Lịch Hẹn" />
          </Link>
        </div>
      </Container>
    </Container>
  );
};

export default BriefExperienceSection;
