"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    // Check if the referrer is from the same origin
    if (
      document.referrer &&
      new URL(document.referrer).origin === window.location.origin
    ) {
      setCanGoBack(true);
    }
  }, []);

  return (
    <div className="w-full  flex flex-col items-center justify-center text-center py-12">
      <Image src={"/404.svg"} alt="404" width={800} height={360} />
      <h1 className="text-4xl">Oops!</h1>
      <p>We could not find requested path.</p>
      <p className="my-12">
        {canGoBack ? (
          <button
            className="button primary"
            onClick={() => window.history.back()}
          >
            &laquo; Go Back
          </button>
        ) : (
          <Link className="button primary" href="/">
            Go to Home
          </Link>
        )}
      </p>
    </div>
  );
}
