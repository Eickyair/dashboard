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
        label: "Horas Pico",
        data: data.data.map((item) => item.cantidadDeOrdenes),
        fill: false,
        tension: 0.1,
      },
    ],
  };
  console.log({ data });
  return (
    <div>
      <div className="w-[70%] mx-auto">
        <Chart type="line" data={chartData} />
      </div>
    </div>
  );
};
