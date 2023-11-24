import { FC, ReactNode } from "react";

interface OrdenLayoutProps {
  children: ReactNode;
}
export const OrdenLayout: FC<OrdenLayoutProps> = ({ children }) => {
  return (
    <div>
      <header className="text-5xl text-center p-10">Tendencias de Compra</header>
      {children}
    </div>
  );
};
