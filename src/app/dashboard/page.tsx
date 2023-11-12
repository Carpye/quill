import Dashboard from "@/components/Dashboard"
import { getUserSubscriptionPlan } from "@/lib/stripe"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { redirect } from "next/navigation"

const Page = async () => {
  const { getUser } = getKindeServerSession()
  const user = getUser()

  if (!user || !user.id) redirect("/auth-callback?origin=dashboard") // redirect user to auth if not signed and then after auth head back to the origin witch is dashboard

  const subscribtionPlan = await getUserSubscriptionPlan()

  return <Dashboard subscriptionPlan={subscribtionPlan} />
}

export default Page
