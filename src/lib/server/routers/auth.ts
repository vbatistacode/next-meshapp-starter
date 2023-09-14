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
      const [findUser] = await db
        .select()
        .from(user)
        .where(eq(user.email, input.email));

      if (!!findUser) {
        console.log("inside findUser conditional");
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Email already taken",
        });
      }

      // hash password
      const hashPass = await hash(input.password, 10);

      // register new user
      const newUser = await db
        .insert(user)
        .values({ name: input.name, email: input.email, password: hashPass });

      return newUser;
    }),

  test: publicProcedure.mutation(() => {
    console.log("trpc test mutation");
  }),
});
