import { ReactElement, ReactPortal } from "react";
import { createPortal } from "react-dom";

// Portal do body dom element
const PortalToBody = ({
  children,
}: {
  children: ReactElement;
}): ReactPortal => {
  return createPortal(children, document.body);
};

export default PortalToBody;
