import AlertIcon from "public/images/icon/alert.svg";
import ZennIcon from "public/images/icon/zenn.svg";
import { SVGAttributes } from "react";

export type SvgIconProps = SVGAttributes<SVGElement> & {
  fileName: "Zenn" | "Alert";
  width: number;
  height: number;
};

export const Zenn = (props: SvgIconProps) => {
  return <ZennIcon {...props} />;
};

export const Alert = (props: SvgIconProps) => {
  return <AlertIcon {...props} />;
};
