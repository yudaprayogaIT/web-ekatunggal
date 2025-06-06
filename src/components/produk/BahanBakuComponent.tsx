import Link from "next/link";
import Image from "next/image";
import Category from "@/app/hooks/CategoryHook";

interface BahanBakuComponentProps {
  kategoriUtama: Category[];
  lihatSemuaHref: string; // e.g. "/produk/bahanbaku"
}

export default function BahanBakuComponent({
  kategoriUtama,
  lihatSemuaHref,
}: BahanBakuComponentProps) {
  return (
    <section className="overflow-hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
      {kategoriUtama.map((kat) => (
        <Link
          href={`${lihatSemuaHref}/${kat.name}`}
          key={kat.name}
          className="group border border-gray-100 flex flex-col items-center overflow-hidden rounded-2xl hover:shadow-2xs transition-shadow duration-300"
        >
          <div className="w-full h-30 md:h-52 relative">
            <Image
              src={`https://api-ekatalog.ekatunggal.com/public/files/${kat.image}`}
              alt={kat.name}
              fill
              style={{ objectFit: "cover" }}
              className="group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-3 w-full text-start">
            <h5 className="text-sm md:text-base font-bold uppercase text-gray-900">
              {kat.name}
            </h5>
          </div>
        </Link>
      ))}
    </section>
  );
}
