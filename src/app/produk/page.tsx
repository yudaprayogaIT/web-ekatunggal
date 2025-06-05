import ProdukHero from "@/components/produk/ProdukHero";
import HeaderComponent from "@/components/HeaderComponent";
import { FooterComponent } from "@/components/FooterComponent";
import FloatingIconComponent from "@/components/FloatingIconComponent";
import ProductComponent from "@/components/produk/ProductComponent";

export default async function ProdukPage() {
  return (
    <>
      <HeaderComponent />
      <FloatingIconComponent />

      <main className="space-y-8 px-6 md:px-12 lg:px-10 mb-10">
        {/* Hero Section */}
        <section className="mb-8">
          <ProdukHero />
        </section>
        <section className="mb-8">
          <ProductComponent />
        </section>
        {/* Collapsible “Barang Jadi” */}
        {/* <CollapsibleSection
            title="Barang Jadi"
            lihatSemuaHref="/produk/barangjadi"
          > */}
        {/* <BarangJadiComponent
              kategoriUtama={previewBarangJadi}
              lihatSemuaHref="/produk/barangjadi"
            /> */}
        {/* </CollapsibleSection> */}
        {/* Collapsible “Bahan Baku” */}
        {/* <CollapsibleSection
            title="Bahan Baku"
            lihatSemuaHref="/produk/bahanbaku"
          >
            <BahanBakuComponent
              kategoriUtama={previewBahanBaku}
              lihatSemuaHref="/produk/bahanbaku"
            /> */}
        {/* </CollapsibleSection> */}
      </main>

      <FooterComponent />
    </>
  );
}
