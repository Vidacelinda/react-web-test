import { ReactNode } from "react";

interface Props{
  //text prop :string
  children:ReactNode;

}

const Alert = ({children} :Props) => {
  return (
    <div className="alert alert-primary" >{children}</div>
  )
}

export default Alert