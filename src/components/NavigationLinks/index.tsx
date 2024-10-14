import { useState, useEffect, useCallback } from "react";
import { createStyles, rem } from "@mantine/core";
import { Link, useLocation, useParams } from "react-router-dom";
import { useAppContext } from "@/contexts/AppContext";

const useStyles = createStyles((theme) => ({
  link: {
    color: theme.colors.clinicDark[0],
    fontSize: rem(16),
    fontWeight: 500,
    textTransform: "uppercase",
    letterSpacing: rem(0.65),
    padding: `0 ${rem(16)}`,
    "&:hover": {
      color: theme.colors.clinicBlue[0],
      fontWeight: 700,
    },
  },
  active: {
    color: theme.colors.clinicBlue[0],
    fontWeight: 700,
  },
}));

const menuLinks = [
  { id: 1, label: "trang chủ", path: "/" },
  { id: 2, label: "về chúng tôi", path: "/ve-chung-toi" },
  { id: 3, label: "dịch vụ", path: "/dich-vu" },
  { id: 4, label: "kiến thức", path: "/kien-thuc" },
  { id: 5, label: "cửa hàng", path: "/cua-hang" },
  { id: 6, label: "khóa học", path: "/khoa-hoc" },
];

const NavigationLinks = () => {
  const { id } = useParams();
  const { setOpenedNavbar } = useAppContext();
  const [activePath, setActivePath] = useState<string | any>("/");
  const { classes, cx } = useStyles();
  const location = useLocation();

  const removeParamsPath = useCallback(
    (activePath: any) => {
      const newPath = activePath.split("/").slice(0, 2).join("/");
      return newPath;
    },
    [id],
  );

  useEffect(() => {
    setActivePath(location?.pathname);
  }, [location?.pathname]);

  return (
    <>
      {menuLinks.map((link, index) => (
        <Link
          onClick={() => setOpenedNavbar(false)}
          key={index}
          to={link.path}
          className={cx(
            classes.link,
            link.path === removeParamsPath(activePath) && classes.active,
          )}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
};

export default NavigationLinks;
