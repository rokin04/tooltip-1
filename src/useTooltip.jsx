import React, { useState, cloneElement, useCallback, useRef } from "react";
import { usePopper } from "react-popper";
import { string, node, bool, object } from "prop-types";
import styled from "styled-components";

const TooltipWrapper = styled.div`
  box-shadow: 1px 1px 5px 4px rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  background-color: white;
  text-align: left;
  padding: 5px;
  max-width: 300px;
  #arrow::before {
    position: absolute;
    width: 10px;
    height: 10px;
    z-index: -1;
    content: "";
    transform: rotate(45deg);
    background: white;
  }

  &[data-popper-placement^="top"] > #arrow {
    ::before {
      bottom: -4px;
      left: -4px;
    }
  }

  &[data-popper-placement^="bottom"] > #arrow {
    top: -4px;
    ::before {
      left: -4px;
    }
  }

  &[data-popper-placement^="left"] > #arrow {
    right: 4px;
    ::before {
      top: -5px;
    }
  }

  &[data-popper-placement^="right"] > #arrow {
    left: -4px;
    ::before {
      top: -5px;
    }
  }
`;

export const TooltipBody = ({ message, position, showTooltip, target }) => {
  const [popperElement, setPopperElement] = useState();
  const [arrowElement, setArrowElement] = useState();
  const [isTooltip] = useState(showTooltip);

  // const element = cloneElement(target, { "data-for": "tooltip" });
  // console.log("ele", element);
  // const eventX = document.querySelectorAll("data-for");
  // eventX.initMouseEvent("mouseover", alert("hello"));
  // const ele = document.querySelectorAll(useRef(target).current.type)[2];
  // if (ele) {
  //   ele.dispatchEvent(eventX);
  // }

  console.log("trigger", popperElement, "target", target);

  const { styles, attributes } = usePopper(target, popperElement, {
    placement: "bottom",
    modifiers: [
      { name: "arrow", options: { element: arrowElement } },
      { name: "offset", options: { offset: [0, 8] } }
    ]
  });

  return (
    <>
      {target}
      {isTooltip && (
        <TooltipWrapper
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          {message}
          <div id="arrow" ref={setArrowElement} style={styles.arrow} />
        </TooltipWrapper>
      )}
    </>
  );
};

TooltipBody.propTypes = {
  message: string,
  children: node,
  position: string,
  target: node,
  isTooltipOpen: bool,
  targetRef: object
};
