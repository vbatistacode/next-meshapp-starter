import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import SignUpForm from "./SignUpForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function signInPage() {
  return (
    <div className="flex items-center justify-center h-screen p-2">
      <Card className="max-w-[400px]">
        <CardHeader>
          <CardTitle>Sign Up </CardTitle>
          <CardDescription className="mt-2">
            Informe seu email e senha para criar um acesso
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignUpForm />
        </CardContent>
        <CardFooter>
          <Button variant="link">
            <Link href={"/auth/signin"}>
              Already signed up?! Then click here to sign in!
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default signInPage;
