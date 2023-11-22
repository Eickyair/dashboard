import React, { FC, ReactNode } from "react";
interface VentasLayoutProps {
  children: ReactNode;
}
export const VentasLayout: FC<VentasLayoutProps> = ({ children }) => {
  return <>VentasLayout{children}</>;
};
