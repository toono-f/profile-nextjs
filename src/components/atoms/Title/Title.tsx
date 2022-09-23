import { ReactNode } from "react";

type TitleProps = {
  children: ReactNode;
};

export const Title = ({ children }: TitleProps) => {
  return <h2 className="flex items-center gap-4 text-24 font-bold">{children}</h2>;
};
