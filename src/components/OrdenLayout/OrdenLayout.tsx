import { FC, ReactNode } from "react";

interface OrdenLayoutProps {
  children: ReactNode;
}
export const OrdenLayout: FC<OrdenLayoutProps> = ({ children }) => {
  return <>OrdenLayout{children}</>;
};
