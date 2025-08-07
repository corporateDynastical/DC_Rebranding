import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-full overflow-hidden">
      {/* Image */}
      <Image
        src="/Rebrand.png"
        alt="Dynastical Clients"
        width={1800}
        height={900}
        style={{ width: "100%", height: "auto" }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1800px"
        priority
      />

      {/* Mobile-only tagline (centered below image) */}
      <div className="md:hidden flex items-center justify-center h-40">
        <p className="text-lg font-semibold text-gray-800 text-center px-4">
          Our New Website is Coming Soon! |
        </p>
      </div>
    </div>
  );
}

