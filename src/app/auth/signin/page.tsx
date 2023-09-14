import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import SignInForm from "./SignInForm";
import { getUserAuth } from "@/lib/auth/utils";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

async function signInPage() {
  const { session } = await getUserAuth();
  if (session) redirect("/");

  return (
    <div className="flex items-center justify-center h-screen p-2">
      <Card className="max-w-[400px]">
        <CardHeader>
          <CardTitle>Sign In </CardTitle>
          <CardDescription>
            Informe seu email e senha para efetuar o login
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignInForm />
        </CardContent>
        <CardFooter>
          <Button variant="link">
            <Link href={"/auth/signup"}>
              Not registered yet?! Then click here to sign up!
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default signInPage;
