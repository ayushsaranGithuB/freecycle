"use client";
// redirect to /account/dashboard
import { useSession } from "next-auth/react";

const InvoiceRedirect = () => {
  // Check if the user is authenticated
  // If not, redirect to the login page
  // If authenticated, redirect to the dashboard page

  const session = useSession();
  if (session == undefined) {
    return <div className="loading">Loading...</div>;
  }

  if (!session) {
    return (
      <div className="unauthenticated">
        <h1>Please log in to view your account</h1>
        <a href="/api/auth/signin">Log In</a>
      </div>
    );
  }

  // If authenticated, redirect to the dashboard page
  if (session) {
    window.location.href = "/account/dashboard";
    return <div className="loading">Redirecting...</div>;
  }

  return <></>;
};

export default InvoiceRedirect;
