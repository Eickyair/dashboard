import { FC, ReactNode } from "react";
import { BalancesGenerales } from "..";
interface MenuLayoutProps {
  children: ReactNode;
}
const MenuLayout: FC<MenuLayoutProps> = ({ children }) => {
  return (
    <div className="max-w-[80%] mx-auto flex flex-col gap-10">
      <header className="flex flex-col gap-5 mb-10">
        <h2 className="text-5xl">Reporte por Mes</h2>
        <h3 className="text-4xl">Balances Generales</h3>
      </header>
      <BalancesGenerales />
      {children}
    </div>
  );
};

export default MenuLayout;
