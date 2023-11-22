import { z } from "zod";
import { router } from "../trpc";
import { menuRouter } from "./menu/menuRouter";
import { ventasRouter } from "./ventas/ventasRouter";
export const appRouter = router({
  menuRouter,
  ventasRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
