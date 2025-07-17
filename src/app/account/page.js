import { redirect } from 'next/navigation'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LoginForm } from "@/components/features/accountPage/loginForm"
import { RegisterForm } from "@/components/features/accountPage/registerForm"
import { getUser } from '@/lib/api/user/user'

export default async function AccountPage() {
  const user = await getUser()

  if (user) {
    redirect('/account/user')
  }

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-64px)] bg-gray-50 py-12 px-4">
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login" className="cursor-pointer">Login</TabsTrigger>
          <TabsTrigger value="register" className="cursor-pointer">Register</TabsTrigger>
        </TabsList>

        <TabsContent value="login">
          <LoginForm />
        </TabsContent>

        <TabsContent value="register">
          <RegisterForm />
        </TabsContent>
      </Tabs>
    </div>
  )
}
