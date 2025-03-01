import { getServerSession } from "next-auth/next"
import prisma from "@/app/libs/prismadb";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

if (!process.env.NEXTAUTH_URL) {
  console.warn("NEXTAUTH_URL environment variable is not set.");
}

export async function getSession() {
  return await getServerSession(authOptions)
}

export default async function getCurrentUser() {
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
      createdAt: currentUser.createdAt.toISOString(),
      updatedAt: currentUser.updatedAt.toISOString(),
      emailVerified:
        currentUser.emailVerified?.toISOString() || null,
    };
  } catch (error: any) {
    console.error("Error fetching current user:", error);
    return null;
  }
}

