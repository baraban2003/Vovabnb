import { getServerSession } from "next-auth/next"
import prisma from "@/app/libs/prismadb";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { SafeUser } from '../types';

if (!process.env.NEXTAUTH_URL) {
  console.warn("NEXTAUTH_URL environment variable is not set.");
}

export async function getSession() {
  return await getServerSession(authOptions)
}

const getCurrentUser = async (): Promise<SafeUser | null> => {
  try {
    const session = await getSession();

    if (!session) {
      return null;
    }

    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email as string,
      }
    });

    if (!currentUser) {
      return null;
    }

    return {
      ...currentUser,
      createdAt: currentUser.createdAt ? new Date(currentUser.createdAt).toISOString() : new Date().toISOString(),
      updatedAt: currentUser.updatedAt ? new Date(currentUser.updatedAt).toISOString() : new Date().toISOString(),
      emailVerified:
        currentUser.emailVerified?.toISOString() || null,
    };
  } catch (error) {
    console.error("Error fetching current user:", error);
    return null;
  }
};

export default getCurrentUser;

