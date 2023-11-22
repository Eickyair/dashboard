import React, { FC, ReactNode } from "react";
import Navbar from "../Navbar/Navbar";
import { useSession } from "next-auth/react";
interface LayoutProps {
  children: ReactNode;
}
const Layout: FC<LayoutProps> = ({ children }) => {
  const { data: session } = useSession();
  return (
    <div>
      {session && <Navbar />}
      {children}
    </div>
  );
};

export default Layout;
