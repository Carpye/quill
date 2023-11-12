import { fetchRequestHandler } from "@trpc/server/adapters/fetch"
import { appRouter } from "@/trpc"
import { absoluteUrl } from "@/lib/utils"

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: absoluteUrl("/api/trpc"),
    req,
    router: appRouter,
    createContext: () => ({}),
  })

export { handler as GET, handler as POST }
