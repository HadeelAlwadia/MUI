import React from "react";
import { StyledIcon } from "./style";

const CodeIcon = ({ fill }: { fill?: string }) => {
  return (
    <StyledIcon
      fill={fill || "#007FFF"}
      className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
      focusable="false"
      viewBox="0 0 24 24"
      aria-hidden="true"
      data-testid="DarkModeOutlinedIcon"
    >
      <path d="M8.7 15.9 4.8 12l3.9-3.9c.39-.39.39-1.01 0-1.4a.9839.9839 0 0 0-1.4 0l-4.59 4.59c-.39.39-.39 1.02 0 1.41l4.59 4.6c.39.39 1.01.39 1.4 0 .39-.39.39-1.01 0-1.4zm6.6 0 3.9-3.9-3.9-3.9a.9839.9839 0 0 1 0-1.4c.39-.39 1.01-.39 1.4 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.6c-.39.39-1.01.39-1.4 0a.9839.9839 0 0 1 0-1.4z"></path>
    </StyledIcon>
  );
};

export default CodeIcon;
