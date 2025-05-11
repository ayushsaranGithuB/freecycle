"use client";
import { Transaction, Item, User as Seller } from "@prisma/client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchInvoice } from "@/app/helpers/api";
import { Coins } from "lucide-react";
import Image from "next/image";

// Use Prisma-generated types directly

type InvoiceData = {
  transaction: Transaction;
  items: Item[];
  seller: Seller;
};

const InvoicePage = () => {
  const params = useParams();
  const transactionId = Array.isArray(params.transactionId)
    ? params.transactionId[0]
    : params.transactionId; // Ensure transactionId is a string
  const [invoiceData, setInvoiceData] = useState<InvoiceData | null>(null);

  useEffect(() => {
    if (transactionId) {
      fetchInvoice(transactionId)
        .then((data: InvoiceData) => setInvoiceData(data))
        .catch((error) => console.error("Error fetching invoice data:", error));
    }
  }, [transactionId]);

  if (!transactionId) {
    return <p>Transaction ID is missing.</p>;
  }

  if (!invoiceData) {
    return <p>Loading...</p>;
  }

  const { transaction, items, seller } = invoiceData;

  return (
    <div className="invoice-page">
      <div className="titleUnderlined flex justify-between items-center">
        <p className="text-2xl">Invoice # {transaction.id}</p>
        <p>{new Date(transaction.createdAt).toLocaleDateString()}</p>
      </div>
      <h2 className="titleUnderlined">Item Details</h2>

      <section>
        {items.map((item) => (
          <div className="item-details flex gap-3" key={item.id}>
            <div className="item-image">
              {Array.isArray(item.images) && item.images.length > 0 ? (
                <Image
                  src={item.images[0]?.toString() || ""}
                  alt={item.title}
                  width={100}
                  height={100}
                />
              ) : (
                <p>No image available</p>
              )}
            </div>
            <p className="text-xl">{item.title}</p>
            <div>
              <p className="flex">
                <Coins /> {item.pointsValue} points
              </p>
              <p>
                <strong>Shipping Cost:</strong> ${transaction.shippingCostPaid}
              </p>
            </div>
          </div>
        ))}
      </section>

      <h2 className="titleUnderlined">Shipment Details</h2>

      <p>
        <strong>Shipped From:</strong> {items[0].locationPincode}{" "}
        <strong>To: </strong> buyer.pincode
      </p>

      <p>
        <strong>On:</strong> shipment.date
      </p>

      <p>
        <strong>By:</strong> {seller.name} - [{seller.phone.slice(0, 2)}
        ****
        {seller.phone.slice(-4)}]
      </p>

      <p>
        <strong>Via:</strong> Delhivery - transaction.trackingId
      </p>
    </div>
  );
};

export default InvoicePage;
