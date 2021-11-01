import { DefaultComponentProps } from "@material-ui/core/OverridableComponent";
import SvgIcon, { SvgIconTypeMap } from "@material-ui/core/SvgIcon/SvgIcon";

interface MdiSvgIconProps extends DefaultComponentProps<SvgIconTypeMap> {
  icon: string;
}

// Material design icons container
const MdiSvgIcon = ({ icon, className = "", ...props }: MdiSvgIconProps) => {
  return (
    <SvgIcon className={className} {...props}>
      <path d={icon} />
    </SvgIcon>
  );
};

export default MdiSvgIcon;
