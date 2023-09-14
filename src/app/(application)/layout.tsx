import { getUserAuth } from "@/lib/auth/utils";
import { redirect } from "next/navigation";
import React from "react";
import NavBar from "./components/NavBar";

const AppLayout = async ({ children }: { children: React.ReactNode }) => {
  const { session } = await getUserAuth();
  if (!session) redirect("/auth/signin");
  return (
    <main className="flex flex-col container min-h-screen">
      <NavBar />
      <section className="flex flex-col flex-grow">{children}</section>
    </main>
  );
};

export default AppLayout;
