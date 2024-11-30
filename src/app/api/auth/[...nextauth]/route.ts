import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { z } from 'zod';

const LoginSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters'),
  password: z.string().min(6, 'Password must be at least 6 characters')
});

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          throw new Error('Missing credentials');
        }

        try {
          // Validate credentials
          const validatedCredentials = LoginSchema.parse(credentials);

          // Check against environment variables
          if (
            validatedCredentials.username === process.env.ADMIN_USERNAME && 
            validatedCredentials.password === process.env.ADMIN_PASSWORD
          ) {
            return { 
              id: '1', 
              name: validatedCredentials.username,
              email: 'admin@example.com'
            };
          }
          throw new Error('Invalid credentials');
        } catch (error) {
          console.error('Authentication error:', error);
          throw new Error('Invalid credentials');
        }
      }
    })
  ],
  pages: {
    signIn: '/auth/signin',
    error: '/auth/signin',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    }
  },
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
