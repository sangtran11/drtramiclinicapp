import { Flex, MediaQuery, createStyles, rem, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  NavigationLinks,
  CustomLogo,
  CustomButton,
  SearchSection,
} from "@/components";
import { Link } from "react-router-dom";
import { IconSearch } from "@tabler/icons-react";
import mainLogoUrl from "/images/main_logo.png";
import { useAppContext } from "@/contexts/AppContext";

const useStyles = createStyles(() => ({
  imageLogo: {
    width: rem("100%"),
    height: rem(80),
    maxWidth: rem(80),
  },
}));

const HeaderSection = () => {
  const { classes } = useStyles();
  const { setOpenedNavbar } = useAppContext();
  const [opened, { open, close }] = useDisclosure(false);

  const handleClickIconSearch = () => {
    open();
    setOpenedNavbar(false);
  };

  return (
    <Flex align={"center"} justify={"space-between"} w={"100%"}>
      <Link to={"/"} onClick={() => setOpenedNavbar(false)}>
        <CustomLogo className={classes.imageLogo} logoUrl={mainLogoUrl} />
      </Link>
      <MediaQuery smallerThan="md" styles={{ display: "none" }}>
        <Flex justify={"space-between"}>
          <NavigationLinks />
        </Flex>
      </MediaQuery>
      <Flex align={"center"} gap={"md"}>
        <IconSearch
          size={rem(28)}
          strokeWidth={2}
          color={"#535353"}
          className="cursor-pointer"
          onClick={handleClickIconSearch}
        />
        <Drawer
          position="top"
          opened={opened}
          onClose={close}
          title={<p className="font-bold text-xl">Tìm Kiếm</p>}
          size={"sx"}
        >
          <SearchSection onClose={close} />
        </Drawer>
        <Link to={"/dat-lich-hen"} onClick={() => setOpenedNavbar(false)}>
          <CustomButton label="Đặt Lịch Hẹn" />
        </Link>
      </Flex>
    </Flex>
  );
};

export default HeaderSection;
