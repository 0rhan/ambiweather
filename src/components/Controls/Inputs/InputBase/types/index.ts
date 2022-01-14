import { InputHTMLAttributes } from "react";
import { SvgIconComponent } from "@material-ui/icons";

// Basic input component for "text like" input
// Used for creating more complex input components
export interface InputBaseProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Input type attribute */
  /** SvgIconComponent displayed inside input */
  inputIcon?: SvgIconComponent;
  iconSide?: "left" | "right";
  inputLabel?: string;
  name: string;
  className?: string;
}
