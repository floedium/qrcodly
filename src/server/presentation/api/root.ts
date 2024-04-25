import { postRouter } from "~/server/presentation/api/routers/post";
import {
  createCallerFactory,
  createTRPCRouter,
} from "~/server/presentation/api/trpc";
import { qrCodeRouter } from "./routers/qrCode";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  qrCode: qrCodeRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
