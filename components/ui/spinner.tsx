import Image from "next/image";

export const Spinner = () => {
  return (
    <div className="loading w-full h-full flex justify-center items-center">
      <Image
        src="/logo_spinner.svg"
        alt="Loading..."
        width={150}
        height={150}
      />
    </div>
  );
};

export default Spinner;
