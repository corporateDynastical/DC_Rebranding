import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-full overflow-hidden">
      <Image
        src="/Rebrand.png"
        alt="Dynastical Clients"
        width={1800}
        height={900}
        style={{ width: "100%", height: "auto" }} // Ensures responsiveness
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1800px"
        priority
      />

      {/* Mobile-only tagline */}
      <div className="block md:hidden text-center mt-4 px-4">
        <p className="text-lg font-semibold text-gray-800">
          Our New Website is Coming Soon! |
        </p>
      </div>
    </div>
  );
}
