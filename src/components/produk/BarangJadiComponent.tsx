import Link from "next/link";
import Image from "next/image";

interface KategoriObj {
  slug: string;
  label: string;
  imageUrl: string;
}

interface BarangJadiComponentProps {
  kategoriUtama: KategoriObj[];
  lihatSemuaHref: string; // e.g. "/produk/barangjadi"
}

export default function BarangJadiComponent({
  kategoriUtama,
  lihatSemuaHref,
}: BarangJadiComponentProps) {
  return (
    <section className="overflow-hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {kategoriUtama.map((kat) => (
        <Link
          href={`${lihatSemuaHref}/${kat.slug}`}
          key={kat.slug}
          className="group flex flex-col items-center border border-gray-100 overflow-hidden rounded-2xl hover:shadow-2xs transition-shadow duration-300"
        >
          <div className="w-full h-52 relative">
            <Image
              src={kat.imageUrl}
              alt={kat.label}
              fill
              style={{ objectFit: "cover" }}
              className="group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-3 w-full text-start">
            <h5 className="text-md font-bold uppercase text-gray-900">
              {kat.label}
            </h5>
          </div>
        </Link>
      ))}
    </section>
  );
}
