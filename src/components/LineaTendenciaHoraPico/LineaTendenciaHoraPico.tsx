import { trpc } from "@/utils/trpc";
import { Chart } from "primereact/chart";

export const LineaTendenciaHoraPico = () => {
  const { data } = trpc.ordenRouter.obtenerHorasPico.useQuery();
  if (!data) {
    return "Cargando...";
  }
  const chartData = {
    labels: data.data.map((item) => "Hora:" + item.hora),
    datasets: [
      {
        label: "Promedio de Ordenes por Hora",
        data: data.data.map((item) => item.cantidadDeOrdenes),
        fill: false,
        tension: 0.1,
      },
    ],
  };
  return (
      <div className="bg-grisOscuro p-4 rounded-lg shadow-2xl">
        <Chart type="line" data={chartData} options={{
          responsive:true,
          scales:{
            x:{
              grid:{
                color:"#444"
              }
            },
            y:{
              grid:{
                color:"#444"
              }
            }
          }
        }} />
      </div>
  );
};
