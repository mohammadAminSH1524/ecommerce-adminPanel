import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import UserCard from "./components/UserCard";

export default async function Home() {
  const session = await getServerSession(options);

  return (
    
      
          <UserCard user={session?.user} pagetype={"Home"} />
       
    
  );
}
