import Image from "next/image";

export default function Home() {
  return (
    <div className="relative max-w-full overflow-hidden">
      <Image
        src="/Rebrand.png"
        alt="Dynastical Clients"
        width={1800}
        height={900}
        style={{ width: "100%", height: "auto" }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1800px"
        priority
      />

      {/* Centered tagline on mobile only */}
      <div className="md:hidden absolute inset-0 flex items-center justify-center">
        <p className="text-lg font-semibold text-white bg-black/60 px-4 py-2 rounded">
          Our New Website is Coming Soon! |
        </p>
      </div>
    </div>
  );
}
