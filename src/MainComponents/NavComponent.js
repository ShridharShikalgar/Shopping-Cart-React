import styled from "@emotion/styled";
import React, { useState } from "react";
import { ListHeader } from "./ListHeader";
import {Box} from '@mui/material'

export function NavComponent(props) {
  let [showDropdown, setShowDropdown] = useState(false);
  const { Data } = props;

  const handleOnHover = () => {
    setShowDropdown(true);
  };

  const handleOnLeave = () => {
    setShowDropdown(false);
  };
 
  const Navitem = styled(Box)`
    // margin-left: 170px;
    position:relative;
    display: block;
  `
  return (
    <>
      <div onMouseOver={handleOnHover} onMouseLeave={handleOnLeave}>
          {Data.title}
        <Navitem>
          {showDropdown
            ? Data.map((elem, key) => (
                <ul>
                  <ListHeader elem={elem[key]} />
                </ul>
              ))
            : null}
        </Navitem>
      </div>
    </>
  );
}
