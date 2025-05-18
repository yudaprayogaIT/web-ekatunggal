import Image from "next/image";
import Link from "next/link";

function HeaderComponent() {
  return (
    <nav className="sticky top-0 z-50 bg-base-100 shadow-sm">
      <div className="h-[8vh] flex items-center w-full px-4">
        {/* Navbar Start */}
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/img/logo_etm.png"
              alt="etm-logo"
              width={80}
              height={60}
              className="h-[6vh] w-auto"
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h14"
                />
                {/* <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                /> */}
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-md shadow-lg mt-3 p-4 w-[95vw] z-[999] text-base uppercase font-bold font-[montserrat]"
            >
              <li>
                <Link href="#">Tentang Kami</Link>
              </li>
              <li>
                <details>
                  <summary>Produk</summary>
                  <ul className="p-2 bg-base-100 w-40 rounded-t-none">
                    <li>
                      <Link href="#">Bahan Baku</Link>
                    </li>
                    <li>
                      <Link href="#">Barang Jadi</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link href="#">Karir</Link>
              </li>
            </ul>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal space-x-8 uppercase font-bold font-[montserrat] text-xs">
              <li>
                <Link href="#">Tentang Kami</Link>
              </li>
              <li>
                <details>
                  <summary>Produk</summary>
                  <ul className="p-1 bg-base-100 w-40 mt-10 rounded-t-none">
                    <li>
                      <Link href="#">Bahan Baku</Link>
                    </li>
                    <li>
                      <Link href="#">Barang Jadi</Link>
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
