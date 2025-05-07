import Image from "next/image";

const ShippingInfo = () => {
  return (
    <div className="p-6">
      <Image
        src={"/shipping.svg"}
        alt="Shipping"
        width={800}
        height={360}
        className="mb-4"
      />
      <h1 className="text-2xl font-bold mb-4">Shipping Information</h1>
      <p className="mb-2">All items are shipped via Delhivery.</p>
      <p className="mb-2">Shipping is calculated based on the pincode.</p>
      <p className="mb-2">All shipping charges are borne by the buyer.</p>
      <p className="mb-2">
        If an item has to be returned due to an error in the listing or a
        mismatch between the description and the item's condition, the seller
        will be deducted the return shipping fee, and the buyer will be refunded
        in full.
      </p>
    </div>
  );
};

export default ShippingInfo;
