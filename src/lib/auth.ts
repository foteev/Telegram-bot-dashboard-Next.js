import NextAuth, { Session } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { z } from 'zod';
import type { NextAuthOptions } from 'next-auth';

// Define login schema
const LoginSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters'),
  password: z.string().min(6, 'Password must be at least 6 characters')
});

// Extend the Session type to include the 'id' property
interface ExtendedSession extends Session {
  user: {
    id?: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

export const authOptions: NextAuthOptions = {
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
      const extendedSession = session as ExtendedSession;
      if (extendedSession.user) {
        extendedSession.user.id = token.id as string;
      }
      return extendedSession;
    }
  },
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export const { auth, signIn, signOut } = NextAuth(authOptions);
