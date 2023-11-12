import Dashboard from "@/components/Dashboard"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { redirect } from "next/navigation"

const Page = () => {
  const { getUser } = getKindeServerSession()
  const user = getUser()

  if (!user || !user.id) redirect("/auth-callback?origin=dashboard") // redirect user to auth if not signed and then after auth head back to the origin witch is dashboard

  return <Dashboard />
}

export default Page
