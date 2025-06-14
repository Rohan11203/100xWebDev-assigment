import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";


const handler = NextAuth({
  providers : [
     CredentialsProvider({
    name: "email",
  
    credentials: {
      username: { label: "Username", type: "text", placeholder: "jsmith" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
      const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }

      if (user) {
        return user
      } else {
        return null
      }
    }
  }),

  GoogleProvider({
    clientId: "process.env.GOOGLE_CLIENT_ID",
    clientSecret: "process.env.GOOGLE_CLIENT_SECRET"
  })
  ]
})

export { handler as GET, handler as POST }