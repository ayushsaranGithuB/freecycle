import PurchasesList from "@/components/ui/purchasesList";

const MyPurchases = () => {
  return (
    <div>
      <h1>My Purchases</h1>
      <PurchasesList limit={12} />
    </div>
  );
};

export default MyPurchases;
