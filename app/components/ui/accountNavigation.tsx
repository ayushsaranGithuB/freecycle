import Link from "next/link";

const AccountNavigation = () => {
  return (
    <div className="account-navigation">
      <h1>Your Account</h1>
      <Link href="/account/my-listings">Your Listings</Link>
      <Link href="/account/my-purchases">Your Purchases</Link>
      <Link href="/account/my-points">Points Balance</Link>
    </div>
  );
};

export default AccountNavigation;
