import App from "../../App";
import {
  HeaderSection,
  FooterSection,
  HeaderMobileSection,
} from "@/components";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  MediaQuery,
  Burger,
  useMantineTheme,
  rem,
} from "@mantine/core";
import { useAppContext } from "@/contexts/AppContext";

export default function AppWrapper() {
  const theme = useMantineTheme();
  const { openedNavbar, setOpenedNavbar } = useAppContext();

  return (
    <AppShell
      styles={{
        main: {
          paddingLeft: 0,
          paddingRight: 0,
          overflowX: "hidden",
        },
      }}
      navbarOffsetBreakpoint="md"
      asideOffsetBreakpoint="md"
      navbar={
        <MediaQuery largerThan="md" styles={{ display: "none" }}>
          <Navbar
            p="md"
            hiddenBreakpoint="md"
            hidden={!openedNavbar}
            width={{ sm: 200, lg: 300 }}
            zIndex={"9999"}
            height={"100%"}
          >
            <HeaderMobileSection />
          </Navbar>
        </MediaQuery>
      }
      footer={
        <Footer
          height={"auto"}
          p="lg"
          styles={() => ({
            root: {
              position: "relative",
              zIndex: 1,
              marginTop: rem(20),
              border: "none",
            },
          })}
        >
          <FooterSection />
        </Footer>
      }
      header={
        <Header
          height={{ base: 80 }}
          p="lg"
          styles={() => ({
            root: {
              border: "none",
            },
          })}
        >
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="md" styles={{ display: "none" }}>
              <Burger
                opened={openedNavbar}
                onClick={() => setOpenedNavbar((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <HeaderSection />
          </div>
        </Header>
      }
    >
      <App />
    </AppShell>
  );
}
