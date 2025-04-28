import { useRouter } from "next/router";

export default function ItemDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const handleBuy = () => {
    // Mock buy action
    console.log(`Buying item with ID: ${id}`);
  };

  return (
    <div>
      <h1>Item Details</h1>
      <p>Details for item ID: {id}</p>
      <button onClick={handleBuy}>Buy</button>
    </div>
  );
}
