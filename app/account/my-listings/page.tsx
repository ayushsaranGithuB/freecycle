"use client";
import { useState } from "react";
import ListingsList from "@/components/ui/listingsList";

const LIMIT = 6;

const MyListings = () => {
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);

  const handleTotalCount = (count: number) => setTotal(count);
  const maxPage = Math.ceil(total / LIMIT) - 1;

  return (
    <div>
      <h1>My Listings</h1>
      <ListingsList
        status="AVAILABLE"
        limit={LIMIT}
        offset={page * LIMIT}
        onTotalCount={handleTotalCount}
      />
      <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
        <button
          onClick={() => setPage((p) => Math.max(0, p - 1))}
          disabled={page === 0}
        >
          Previous
        </button>
        <span>
          Page {page + 1} of {maxPage + 1}
        </span>
        <button
          onClick={() => setPage((p) => Math.min(maxPage, p + 1))}
          disabled={page >= maxPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MyListings;
