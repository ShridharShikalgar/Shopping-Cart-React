import React, { useState } from "react";
import { Box,styled } from "@mui/system";

export function ListHeader(props) {
  let [showDropdown, setShowDropdown] = useState(false);
  const { Data } = props;

  const handleOnHover = () => {
    setShowDropdown(true);
  };

  const handleOnLeave = () => {
    setShowDropdown(false);
  };
  const ListItems = styled(Box)`
    cursor:pointer;
    position: relative;
    display:block;
    background: none; 
    right: 800px;
  `
  console.log(Data.title);
  return (
    <>
      <div onMouseOver={handleOnHover} onMouseLeave={handleOnLeave}>
        {Data.title}
      </div>
      <ListItems>
        {showDropdown ? Data.list.map((elem) => <div>{elem}</div>) : null}
      </ListItems>
    </>
  );
}
