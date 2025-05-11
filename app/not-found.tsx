import Link from "next/link";
import Image from "next/image";

export default async function NotFound() {
  return (
    <div className="w-full  flex flex-col items-center justify-center text-center py-12">
      <Image src={"/404.svg"} alt="404" width={800} height={360} />
      <h1 className="text-4xl">Oops!</h1>
      <p>We could not find requested path.</p>
      <p className="my-12">
        <Link className="button primary" href="/">
          Go to Home
        </Link>
      </p>
    </div>
  );
}
