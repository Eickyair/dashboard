import React from "react";
import { CartaMes } from "./CartaMes";

export const ListaDeCartasPorMes = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-between gap-10">
        <CartaMes />
        <CartaMes />
        <CartaMes />
      </div>
      <div className="flex justify-between gap-10">
        <CartaMes />
        <CartaMes />
        <CartaMes />
      </div>
    </div>
  );
};
