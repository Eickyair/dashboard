import { FC, ReactNode } from "react";
interface MenuLayoutProps {
  children: ReactNode;
}
const MenuLayout: FC<MenuLayoutProps> = ({ children }) => {
  return (
    <div>
      <header className="text-5xl text-center p-10">Alimentos Disponibles en el Menu</header>
      {children}
    </div>
  );
};

export default MenuLayout;
