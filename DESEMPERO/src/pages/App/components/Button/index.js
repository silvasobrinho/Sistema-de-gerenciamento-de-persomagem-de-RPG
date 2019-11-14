import React from "react";


import { Button } from "./styles";

const CustomButton = ({ children, color, ...props }) => (
  <Button type="button" color={color} {...props}>
    {children}
  </Button>
);



export default CustomButton;
