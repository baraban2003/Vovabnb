import { NextResponse } from "next/server";
import { NextRequest } from "next/server"; // Import NextRequest

import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";

interface IParams {
  reservationId: string;
}

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<IParams> } // Change params to a Promise
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { reservationId } = await context.params; // Await params

  if (!reservationId || typeof reservationId !== 'string') {
    throw new Error('Invalid ID');
  }

  const reservation = await prisma.reservation.delete({
    where: {
      id: reservationId,
      userId: currentUser.id
    }
  });

  return NextResponse.json(reservation);
}
