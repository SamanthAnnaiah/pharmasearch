import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { getuserid, putuser } from "./data-service";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user;
    },
    async signIn({ user, account, profile, email, credentials }) {
      if (user.email) {
        let userid = await getuserid(user.email);
        if (!userid) {
          try {
            let inserteddata = await putuser(user.name, user.email, user.image);
            if (inserteddata) {
              return true;
            } else {
              return false;
            }
          } catch (error) {
            return false;
          }
        } else {
          return true;
        }
      } else {
        return true;
      }
    },
    async session({ session, user }) {
      let userid = await getuserid(session.user.email);
      session.user.userid = userid;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
