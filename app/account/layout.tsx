import AccountNavigation from "../components/ui/accountNavigation";
import "@/app/styles/accountLayout.css";
export default function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="account-layout">
      <AccountNavigation />
      <div className="content card">{children}</div>
    </div>
  );
}
