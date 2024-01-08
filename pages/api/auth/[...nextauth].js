import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const config = {
  runtime: 'experimental-edge',
}


export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: "1040229900259-e4gafsgovrtgedte45tdc4lvepfc1gdi.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    // ...add more providers here
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.uid = token.sub;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
