import React from "react";
import { TooltipBody } from "./useTooltip";

import { string, oneOfType, oneOf, element, func, array } from "prop-types";

/**
 * Add description about the component
 */
const Tooltip = ({ position = "bottom", message, children }) => (
  <TooltipBody
    position={position}
    message={message}
    target={children}
  ></TooltipBody>
);

Tooltip.propTypes = {
  position: oneOf([
    "auto-start",
    "auto",
    "auto-end",
    "top-start",
    "top",
    "top-end",
    "right-start",
    "right",
    "right-end",
    "bottom-end",
    "bottom",
    "bottom-start",
    "left-end",
    "left",
    "left-start"
  ]),
  children: oneOfType([element, func, array]),
  message: string
};

export default Tooltip;
