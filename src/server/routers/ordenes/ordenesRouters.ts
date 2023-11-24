import { prisma } from "@/server/prisma";
import { procedure, router } from "@/server/trpc";
import groupBy from "just-group-by";
const ordenProcedure = procedure;
export const ordenRouter = router({
  obtenerHorasPico: ordenProcedure.query(async () => {
    const data = await prisma.orden_general.findMany();
    const _data = groupBy(data, ({ fecha }) => fecha.getHours());
    const estadisticas = Object.entries(_data).map(([key, value]) => {
      return {
        hora: key,
        cantidadDeOrdenes: value.length,
      };
    });
    return { data: estadisticas };
  }),
  platoMasVendido: ordenProcedure.query(async () => {
    const informacionAProcesar = await prisma.orden_general.findMany({
      include: {
        orden_detalle: {
          include: {
            alimento: true,
          },
        },
      },
      where: {
        estatus: {
          equals: "ENTREGADA",
        },
      },
    });
    console.log(informacionAProcesar)
    return {
      alimentoMasVendido: {},
      alimentoQueGeneroMas: {},
      alimentoMenosVendido: {},
      informacionAProcesar,
    };
  }),
});
