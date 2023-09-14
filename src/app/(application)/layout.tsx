import { getUserAuth } from "@/lib/auth/utils";
import { redirect } from "next/navigation";
import React from "react";
import NavBar from "./components/NavBar";

const AppLayout = async ({ children }: { children: React.ReactNode }) => {
  const { session } = await getUserAuth();
  if (!session) redirect("/auth/signin");
  return (
    <div>
      <div className="flex flex-col container">
        <NavBar />
      </div>
      {children}
    </div>
  );
};

export default AppLayout;
