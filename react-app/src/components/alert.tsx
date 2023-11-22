import { ReactNode } from "react";

interface Props {
  //text prop :string
  children: ReactNode;
  // event
  onClose:()=>void;
}

const Alert = ({ children ,onClose}: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button type='button' className="btn-close" onClick={onClose} data-bs-dismiss></button>
    </div>
  );
};

export default Alert;
 