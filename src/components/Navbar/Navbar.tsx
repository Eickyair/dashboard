import Link from "next/link";
import { Button } from "primereact/button";
import { FC, ReactNode } from "react";
import { PrimeIcons } from "primereact/api";
interface NavbarProps {}
const Navbar: FC<NavbarProps> = () => {
  return (
    <div className="flex justify-end p-4">
      <div className="flex gap-4">
        <Link href={"/ventas"}>
          <Button outlined className="text-xl p-3 flex gap-2 flex-row-reverse" icon={PrimeIcons.SHOPPING_BAG}>
            Ventas
          </Button>
        </Link>
        <Link href={"/menu"}>
          <Button outlined className="text-xl p-3 flex gap-2 flex-row-reverse" icon={PrimeIcons.MAP}>
            Menu
          </Button>
        </Link>
        <Link href={"/ordenes"}>
          <Button outlined className="text-xl p-3 flex gap-2 flex-row-reverse" icon={PrimeIcons.TAG}>
            Ordenes
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
