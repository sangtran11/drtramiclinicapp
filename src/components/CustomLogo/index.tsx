import React, { memo } from "react";

interface CustomLogoProps {
  className?: string;
  onClick?: () => void;
  alt?: string;
  logoUrl?: string;
}

const CustomLogo: React.FC<CustomLogoProps> = memo(
  ({ className, onClick, alt = "logo", logoUrl }) => {
    return (
      <img
        className={className}
        src={logoUrl}
        alt={alt}
        onClick={() => onClick?.()}
      />
    );
  },
);

CustomLogo.displayName = "CustomLogo";
export default CustomLogo;
