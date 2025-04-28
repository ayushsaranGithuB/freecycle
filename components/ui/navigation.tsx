import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-2 py-4 flex items-center justify-between">
        <Link href="/">
          <Image src="/logo.png" alt="Freecycle Logo" width={120} height={30} />
        </Link>
        <nav className="flex space-x-4">
          <Link href="/list-item">List an Item</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/auth">Login</Link>
          <Link href="/auth/logout">Logout</Link>
        </nav>
      </div>
    </header>
  );
}
