import Image from "next/image";

const Processing = () => {
  return (
    <div className="flex flex-col items-center justify-center py-[140px] gap-12">
      <h1
        className=" text-xl px-8 text-center md:text-3xl md:px-0 "
        style={{
          color: "#666",
        }}
      >
        Hang tight! Your order is being processed...
      </h1>
      <Image
        src={"/cart.png"}
        width={597}
        height={467}
        alt="Processing..."
        className="w-[240px]"
      />
    </div>
  );
};

export default Processing;
