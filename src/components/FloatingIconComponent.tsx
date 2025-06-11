// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// const FloatingIconComponent = () => {
//   return (
//     <div className="fixed bottom-8 md:bottom-16 2xl:bottom-23 right-4 z-[99999] md:flex flex-col border-none">
//       <Link href="https://wa.me/628111115365">
//         <Image
//           src="/img/floatingIcon.png"
//           alt="tanya_vika"
//           width={415}
//           height={415}
//           className="h-20 w-auto md:h-28"
//         />
//       </Link>
//     </div>
//   );
// };

// export default FloatingIconComponent;

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// const FloatingIconComponent = () => {
//   // Pesan template yang ingin dikirim
//   const message = "Halo Ekatunggal, saya ingin melihat penawaran anda";
//   // Encode agar aman di URL
//   const encodedMessage = encodeURIComponent(message);

//   return (
//     <div className="fixed bottom-8 md:bottom-16 2xl:bottom-23 right-4 z-[99999] md:flex flex-col border-none">
//       <Link
//         href={`https://wa.me/628111115365?text=${encodedMessage}`}
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <Image
//           src="/img/floatingIcon.png"
//           alt="tanya_vika"
//           width={415}
//           height={415}
//           className="h-20 w-auto md:h-28"
//         />
//       </Link>
//     </div>
//   );
// };

// export default FloatingIconComponent;

import React from "react";
import Image from "next/image";
import Link from "next/link";

const FloatingIconComponent = () => {
  const phone = "628111115365";
  const message = "Halo Ekatunggal, saya ingin melihat penawaran anda";
  const encoded = encodeURIComponent(message);

  // API URL that works on mobile & desktop web
  const href = `https://api.whatsapp.com/send?phone=${phone}&text=${encoded}`;

  // (If you really want to force web.whatsapp.com, you can also do:)
  // const href = `https://web.whatsapp.com/send?phone=${phone}&text=${encoded}`;

  return (
    <div className="fixed bottom-8 md:bottom-16 2xl:bottom-23 right-4 z-[99999]">
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <Image
          src="/img/floatingIcon.png"
          alt="tanya_vika"
          width={415}
          height={415}
          className="h-20 w-auto md:h-28"
        />
      </Link>
    </div>
  );
};

export default FloatingIconComponent;
