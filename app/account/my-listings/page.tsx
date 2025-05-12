import ListingsList from "@/components/ui/listingsList";

const MyListings = () => {
  return (
    <div>
      <h1>My Listings</h1>
      <ListingsList status="AVAILABLE" limit={5} offset={4} />
    </div>
  );
};

export default MyListings;
