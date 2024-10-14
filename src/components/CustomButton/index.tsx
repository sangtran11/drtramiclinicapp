import React, { memo } from "react";
import { Button, createStyles, rem } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  baseButton: {
    backgroundColor: theme.colors.clinicRose[0],
    textTransform: "uppercase",
    opacity: 0.9,
    borderRadius: rem(32),
    "&:hover": {
      backgroundColor: theme.colors.clinicRose[0],
      opacity: 1,
    },
  },
}));

interface CustomButtonProps {
  className?: string;
  onClick?: () => void;
  label: string;
}

const CustomButton: React.FC<CustomButtonProps> = memo(
  ({ className, onClick, label }) => {
    const { classes, cx } = useStyles();

    return (
      <Button
        className={cx(classes.baseButton, className)}
        onClick={() => onClick?.()}
      >
        {label}
      </Button>
    );
  },
);

CustomButton.displayName = "CustomButton";
export default CustomButton;
