import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";
import getReservations from "@/app/actions/getReservations";

import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";

import ListingClient from "./ListingClient";

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: Promise<IParams> }) => {
  const awaitedParams = await params;
  const listing = await getListingById(awaitedParams);
  const reservations = await getReservations(awaitedParams);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );
  }

  const transformedListing = {
    ...listing,
    createdAt: new Date(listing.createdAt).toISOString(),
    user: {
      ...listing.user,
      createdAt: listing.user.createdAt ? new Date(listing.user.createdAt).toISOString() : '',
      updatedAt: listing.user.updatedAt ? new Date(listing.user.updatedAt).toISOString() : '',
    },
  };

  return (
    <ClientOnly>
      <ListingClient
        listing={transformedListing}
        reservations={reservations}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
}

export default ListingPage;
