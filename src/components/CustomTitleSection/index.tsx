import { Title, createStyles, rem } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  mainTitle: {
    fontWeight: 600,
    textTransform: "uppercase",
    fontSize: rem(24),
    color: theme.colors.clinicDark[0],
    lineHeight: rem(30),
    margin: `0 0 ${rem(28)} 0`,
  },
}));

const CustomTitleSection = ({ title, customClass }: any) => {
  const { classes, cx } = useStyles();

  return <Title className={cx(classes.mainTitle, customClass)}>{title}</Title>;
};

export default CustomTitleSection;
