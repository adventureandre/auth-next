
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import ButtonLogout from "@/components/ButtonLogout";

export default async function Admin() {

  const session = await getServerSession(nextAuthOptions)


  

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl mb-8">{`Olá, ${session?.user.email}. Bem vindo(a)!`}</h1>
   <ButtonLogout/>
    </main>
  );
}
