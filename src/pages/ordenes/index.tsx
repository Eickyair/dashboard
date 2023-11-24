import {
  LineaTendenciaHoraPico,
  OrdenLayout,
  PlatoMasVendido,
} from "@/components";

const OrdenPage = () => {
  return (
    <OrdenLayout>
      <div className="p-10 bg-blanco w-[70%] mx-auto">
        <LineaTendenciaHoraPico />
      </div>
      <PlatoMasVendido />
    </OrdenLayout>
  );
};

export default OrdenPage;
