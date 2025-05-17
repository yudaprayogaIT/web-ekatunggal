import Image from "next/image";
import Link from "next/link";

function HeaderComponent() {
  return (
    <nav className="h-[8vh]">
      {/* <nav className='w-full h-[50px] flex justify-between items-center'>
            <Image src="/img/logo_etm.png" alt="etm-logo" width={50} height={50} className='w-auto px-4 h-[41px]' />
            <ul className='pr-6 flex space-x-16 font-bold text-[0.9em]' style={{ fontFamily: "montserrat" }}>
                <li><Link href="#">TENTANG KAMI</Link></li>
                <li><Link href="#">PRODUK</Link></li>
                <li><Link href="#">KARIR</Link></li>
            </ul>
        </nav> */}

      <div className="navbar h-full bg-base-100 shadow-sm w-full">
        <div className="navbar-start">
          <Image
            src="/img/logo_etm.png"
            alt="etm-logo"
            width={80}
            height={60}
            className="w-auto px-4 h-[5vh]"
          />
        </div>
        <div className="navbar-end uppercase font-bold font-[montserrat]">
          {/* versi mobile */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className=" menu menu-sm dropdown-content bg-white rounded-md z-50 mt-2 p-4 shadow-lg right-0 mx-1"
              style={{ width: "95vw" }}
            >
              <li>
                <Link href="#">tentang kami</Link>
              </li>
              <li>
                <details>
                  <summary>produk</summary>
                  <ul className="bg-base-100 rounded-t-none p-1 w-40">
                    <li>
                      <Link href="#">bahan baku</Link>
                    </li>
                    <li>
                      <Link href="#">barang jadi</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link href="#">Karir</Link>
              </li>
            </ul>
          </div>

          {/* versi laptop */}
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1 pr-6 space-x-10 text-[0.8vw]">
              <li>
                <Link href="#">tentang kami</Link>
              </li>
              <li>
                <details>
                  <summary>produk</summary>
                  <ul className="bg-base-100 rounded-t-none p-1 w-40">
                    <li>
                      <Link href="#">bahan baku</Link>
                    </li>
                    <li>
                      <Link href="#">barang jadi</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link href="#">Karir</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default HeaderComponent;
