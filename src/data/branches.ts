export interface Branch {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  pulau: string;
}

export const branches: Branch[] = [
  {
    id: 'medan',
    name: 'Ekatunggal Tunas Medan',
    address: 'Kompleks Golden Star No. 8C, Limau Manis, Kec. Tanjung Morawa, Kabupaten Deli Serdang, Sumatera Utara 20362',
    lat: 3.5262415701232617,    
    lng: 98.78782489722047, 
    pulau: 'sumatera',
  },
  {
    id: 'pekanbaru',
    name: 'Ekatunggal Tunas Melaju',
    address: 'Jl. Karosin, Karya Indah, Kec. Tapung, Kabupaten Kampar, Riau 28291',
    lat: 1.5269188184296516,
    lng: 101.1703479059712,
    pulau: 'sumatera',
  },
  {
    id: 'palembang',
    name: 'Ekatunggal Tunas Musi',
    address: 'Sukajadi, Kec. Talang Klp., Kab. Banyuasin, Sumatera Selatan 30961',
    lat: -2.8524003555586734, 
    lng: 104.74525757066733,
    pulau: 'sumatera',
  },
  {
    id: 'bogor',
    name: 'Ekatunggal Tunas Mandiri',
    address: 'Jl. Pahlawan No.29A, Sanja, Kec. Citeureup, Kab. Bogor, Jawa Barat 16810',
    lat: -6.510531900974645,
    lng: 106.86536673512403,
    pulau: 'jawa',
  },
  {
    id: 'semarang',
    name: 'Ekatunggal Tri Mandiri',
    address: 'Jl. Gatot Subroto Kawasan Candi 8E No. 8, Bambankerep, Kec. Ngaliyan, Kota Semarang, Jawa Tengah 50211',
    lat: -7.009709682175652,   
    lng: 110.36959120433835,
    pulau: 'jawa',
  },
  {
    id: 'klaten',
    name: 'Ekatunggal Tumbuh mandiri',
    address: 'Jl. Pakis - Daleman No.Km 3, Dusun I, Sekaran, Kec. Wonosari, Kabupaten Klaten, Jawa Tengah 57473',
    lat: -7.6110031441658235,    
    lng: 110.7222434943871,
    pulau: 'jawa',
  },
  {
    id: 'sidoarjo',
    name: 'Ekatunggal Timur Mandiri',
    address: 'Jl. Raya Ketimang No.1, Ketimang, Kec. Wonoayu, Kabupaten Sidoarjo, Jawa Timur 61261',
    lat: -7.443013247385045, 
    lng: 112.64473915987881,
    pulau: 'jawa',
  },
  {
    id: 'pontianak',
    name: 'Ekatunggal Tunas Malindo',
    address: 'Pergudangan Trans Bizpark, Jl. Trans Kalimantan No. 16, Sul Ambawang Kuala, Sungai Ambawang, Kab. Kubu Raya, Kalimantan Barat 78241', 
    lat: -0.036967669282368026,
    lng:  109.39366196561531,
    pulau: 'kalimantan',
  },
  {
    id: 'samarinda',
    name: 'Ekatunggal Timur Mahakam',
    address: 'Samarinda Central Bizpark, Jl. P. Suryanata, Bukit Pinang, Kec. Samarinda Ulu, Kota Samarinda, Kalimantan Timur 75119',
    lat: -0.4480696456948464,  
    lng: 117.10140096691917,
    pulau: 'kalimantan',
  },
  {
    id: 'manado',
    name: 'Ekatunggal Timur Manado',
    address: 'Pergudangan Angtropolis D1, C15, Watutumou, Kec. Kalawat, Kabupaten Minahasa Utara, Sulawesi Utara',
    lat: 1.471120110549871,
    lng: 124.9206527650488,
    pulau: 'sulawesi',
  },
  {
    id: 'makassar',
    name: 'Ekatunggal Timur Makassar',
    address: 'Pabentengang, Kec. Marusu, Kabupaten Maros, Sulawesi Selatan 90552',
    lat: -5.055101074714889, 
    lng: 119.50443307240425,
    pulau: 'sulawesi',
  },
  {
    id: 'kupang',
    name: 'Ekatunggal Timur Manisa',
    address: 'Komplek Pergudangan Tenau Indah, Jl. Yos Sudarso Blok B-2, Alak, Kota Kupang, Nusa Tenggara Timur 85224',
    lat: -10.18674965244798,  
    lng: 123.54397170310894,
    pulau: 'nusa tenggara',
  },
  // → Tambah objek branch baru di array ini saja
];

