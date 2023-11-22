import React, { FC, ReactNode } from "react";
import { BalancesGenerales } from "..";
interface VentasLayoutProps {
  children: ReactNode;
}
export const VentasLayout: FC<VentasLayoutProps> = ({ children }) => {
  return (
    <div className="max-w-[80%] mx-auto flex flex-col gap-2">
      <header className="flex flex-col gap-3 mb-3">
        <h2 className="text-5xl">Reporte por Mes</h2>
      </header>
      <BalancesGenerales />
      {children}
    </div>
  );
};
