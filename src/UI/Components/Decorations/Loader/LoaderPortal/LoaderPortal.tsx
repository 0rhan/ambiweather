import { ReactChild } from "react";
import { createPortal } from "react-dom";

interface LoaderPortalProps {
  children: ReactChild | ReactChild[];
}

const LoaderPortal = ({ children }: LoaderPortalProps) => {
  const elements = document.getElementsByTagName("body");

  console.log(elements)

  const [body] = elements;

  return createPortal(children, body);
};

export default LoaderPortal;
