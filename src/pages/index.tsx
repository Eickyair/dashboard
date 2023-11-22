import { Login } from "@/components";
import { useSession } from "next-auth/react";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session, status } = useSession();
  if (!session) return <Login />
  return (
    <main className={`${inter.className} bg-gris`}>
    </main>
  );
}
