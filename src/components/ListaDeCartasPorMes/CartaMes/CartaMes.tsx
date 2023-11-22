import { Card } from "primereact/card";
import { Tag } from "primereact/tag";

export const CartaMes = () => {
  return (
    <Card className="min-h-[220px] flex-1" title="Enero">
      <Tag>Total de Ordenes</Tag>
      <p className="text-xl">13930</p>
      <Tag>Promedio del monto total</Tag>
      <p className="text-xl">129.01MXN</p>
      <Tag severity={"danger"}>Ordenes Canceladas</Tag>
      <p className="text-xl">30</p>
    </Card>
  );
};
