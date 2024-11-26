import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
});

export { handler as GET, handler as POST };


//...console.cloud.google.com   for secret key and setup    api and services --> credentials --> createoath --> .env.production file after hosting to use google login instead of localhost:3000