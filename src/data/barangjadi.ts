export interface Produk { id: string; name: string; desc: string; image: string; }

interface Data {
  [kategori: string]: Produk[];
}

const data: Data = {
  lemari: [
    { id: 'l1', name: 'Lemari 1', desc: 'Ukuran 120×55×180 cm', image: '/img/produk/BahanBaku/produk1.jpg' },
    { id: 'l2', name: 'Lemari 2', desc: 'Ukuran 150×60×200 cm', image: '/img/produk/BahanBaku/produk2.jpg' },
    { id: 'l3', name: 'Lemari 3', desc: 'Ukuran 100×50×170 cm', image: '/img/produk/BahanBaku/produk3.jpg' },
  ],
  meja: [ /* ... */ ],
  kursi: [ /* ... */ ],
}
export default data
