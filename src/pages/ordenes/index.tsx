import {
  LineaTendenciaHoraPico,
  OrdenLayout,
  PlatoMasVendido,
} from "@/components";

const OrdenPage = () => {
  return (
    <OrdenLayout>
      <LineaTendenciaHoraPico />
      <PlatoMasVendido />
    </OrdenLayout>
  );
};

export default OrdenPage;
