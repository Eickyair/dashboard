import { z } from "zod";
import { router } from "../trpc";
import { menuRouter } from "./menu/menuRouter";
export const appRouter = router({
  menuRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
