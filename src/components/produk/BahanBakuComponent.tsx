import Link from "next/link";

interface KategoriObj {
  slug: string;
  label: string;
  imageUrl: string;
}

interface BahanBakuComponentProps {
  kategoriUtama: KategoriObj[];
  lihatSemuaHref: string; // e.g. "/produk/bahanbaku"
}

export default function BahanBakuComponent({
  kategoriUtama,
  lihatSemuaHref,
}: BahanBakuComponentProps) {
  return (
    <section className="border border-gray-200 rounded-xl shadow-lg overflow-hidden mb-8">
      <div className="flex justify-between items-center px-6 py-3 bg-gray-50">
        <h2 className="text-lg font-semibold text-gray-800">Bahan Baku</h2>
        <Link
          href={lihatSemuaHref}
          className="text-sm text-blue-600 hover:underline"
        >
          Lihat Semua
        </Link>
      </div>

      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {kategoriUtama.map((kat) => (
          <div
            key={kat.slug}
            className="group flex flex-col items-center border border-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="w-full h-56 bg-gray-200 relative">
              <img
                src={kat.imageUrl}
                alt={kat.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 w-full text-center">
              <h5 className="font-medium uppercase text-gray-900">
                {kat.label}
              </h5>
              <Link
                href={`${lihatSemuaHref}/${kat.slug}`}
                className="mt-2 inline-block text-blue-600 hover:underline text-sm font-semibold"
              >
                Telusuri →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// import Link from "next/link";
// import Image from "next/image";

// interface KategoriObj {
//   slug: string;
//   label: string;
//   imageUrl: string;
// }

// interface BahanBakuComponentProps {
//   kategoriUtama: KategoriObj[];
//   lihatSemuaHref: string; // e.g. "/produk/bahanbaku"
// }

// export default function BahanBakuComponent({
//   kategoriUtama,
//   lihatSemuaHref,
// }: BahanBakuComponentProps) {
//   return (
//     <section className="border border-gray-200 rounded-xl shadow-lg overflow-hidden mb-8">
//       <div className="flex justify-between items-center px-6 py-3 bg-gray-50">
//         <h2 className="text-lg font-semibold text-gray-800">Bahan Baku</h2>
//         <Link
//           href={lihatSemuaHref}
//           className="text-sm text-blue-600 hover:underline"
//         >
//           Lihat Semua
//         </Link>
//       </div>

//       <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {kategoriUtama.map((kat) => (
//           <div
//             key={kat.slug}
//             className="group flex flex-col items-center border border-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300"
//           >
//             <div className="relative w-full h-56 bg-gray-200">
//               <Image
//                 src={kat.imageUrl}
//                 alt={kat.label}
//                 fill
//                 sizes="(max-width: 768px) 100vw, 33vw"
//                 className="object-cover group-hover:scale-105 transition-transform duration-300"
//               />
//             </div>
//             <div className="p-4 w-full text-center">
//               <h5 className="font-medium uppercase text-gray-900 truncate">
//                 {kat.label}
//               </h5>
//               <Link
//                 href={`${lihatSemuaHref}/${kat.slug}`}
//                 className="mt-2 inline-block text-blue-600 hover:underline text-sm font-semibold"
//               >
//                 Telusuri →
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
