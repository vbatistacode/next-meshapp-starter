import { db } from "@/lib/db";
import { publicProcedure, router } from "../trpc";
import { user } from "@/lib/db/schema/auth";
import { eq } from "drizzle-orm";
import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { hash } from "bcrypt";

export const authRouter = router({
  signUp: publicProcedure
    .input(
      z.object({ name: z.string(), email: z.string(), password: z.string() })
    )
    .mutation(async ({ input }) => {
      console.log("inside trpc mutation");

      const [findUser] = await db
        .select()
        .from(user)
        .where(eq(user.email, input.email));

      console.log("find user:", findUser);
      if (!!findUser) {
        console.log("inside findUser conditional");
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Email already taken",
        });
      }

      // hash password
      const hashPass = await hash(input.password);
      console.log("hash password:", hashPass);

      // register new user
      const newUser = await db
        .insert(user)
        .values({ name: input.name, email: input.email, password: hashPass });
      console.log("new user:", newUser);
      return newUser;
    }),

  test: publicProcedure.mutation(() => {
    console.log("trpc test mutation");
  }),
});
