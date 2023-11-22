import React from "react";

interface Props{
    children: String;
    color?:String;
    // if you dont want it to changfe from the colors then use
    // color?:'primary'|'secondary|'danger';
    onClick:()=>void;
} 
// default scondary
export const Button = ({children,onClick,color='secondary'}:Props) => {
  return ( 
  <button className={'btn btn-'+color} onClick={onClick}> {children}</button>
  )
};
export default Button;
