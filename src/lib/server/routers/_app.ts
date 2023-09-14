import { computersRouter } from "./computers";
import { router } from "../trpc";
import { authRouter } from "./auth";

export const appRouter = router({
  auth: authRouter,
  computers: computersRouter,
});

export type AppRouter = typeof appRouter;
