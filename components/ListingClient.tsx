import { Component } from "react";

interface ListingClientProps {
  listing: any;
  reservations: any;
  currentUser: {
    createdAt?: string;
    updatedAt?: string;
    [key: string]: any;
  };
}

const ListingClient: React.FC<ListingClientProps> = ({ listing, reservations, currentUser }) => {
  // Ensure createdAt is always a string
  const safeUser = {
    ...currentUser,
    createdAt: currentUser.createdAt || new Date().toISOString(),
    updatedAt: currentUser.updatedAt || new Date().toISOString(),
  };

  return (
    <Component
      listing={listing}
      reservations={reservations}
      currentUser={safeUser}
    />
  );
};
