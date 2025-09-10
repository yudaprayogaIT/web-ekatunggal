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
    lat: 0.49583231227571534,
    lng: 101.34521743950603,
    pulau: 'sumatera',
  },
  {
    id: 'palembang',
    name: 'Ekatunggal Tunas Musi',
    address: 'Sukajadi, Kec. Talang Klp., Kab. Banyuasin, Sumatera Selatan 30961',
    lat: -2.852475363308747,
    lng: 104.74517174659928,
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
    lat: -7.009541566022949,
    lng: 110.36956592527811,
    pulau: 'jawa',
  },
  {
    id: 'klaten',
    name: 'Ekatunggal Tumbuh Mandiri',
    address: 'Jl. Pakis - Daleman No.Km 3, Dusun I, Sekaran, Kec. Wonosari, Kabupaten Klaten, Jawa Tengah 57473',
    lat: -7.610808306030121,
    lng: 110.7222597252855,
    pulau: 'jawa',
  },
  {
    id: 'sidoarjo',
    // name: 'Ekatunggal Timur Mandiri',
    name: 'Ekatunggal',
    address: 'Jl. Raya Ketimang No.1, Ketimang, Kec. Wonoayu, Kabupaten Sidoarjo, Jawa Timur 61261',
    lat: -7.443013247385045,
    lng: 112.64473915987881,
    pulau: 'jawa',
  },
  {
    id: 'pontianak',
    name: 'Ekatunggal Tunas Malindo',
    address: 'Pergudangan Trans Bizpark, Jl. Trans Kalimantan No. 16, Sul Ambawang Kuala, Sungai Ambawang, Kab. Kubu Raya, Kalimantan Barat 78241', 
    lat: 0.17621166145534553,
    lng:  109.3987535151328,
    pulau: 'kalimantan',
  },
  {
    id: 'samarinda',
    // name: 'Ekatunggal Timur Mahakam',
    // address: 'Samarinda Central Bizpark, Jl. P. Suryanata, Bukit Pinang, Kec. Samarinda Ulu, Kota Samarinda, Kalimantan Timur 75119',
    name: 'Ekatunggal Samarinda Mahakam',
    address: 'Pergudangan Surya Bussiness Centre No. 1B, Jl. P. Suryanata Samarinda',
    lat: -0.4480696456948464,
    lng: 117.10140096691917,
    pulau: 'kalimantan',
  },
  {
    id: 'manado',
    name: 'Ekatunggal Timur Manado',
    address: 'Pergudangan Angtropolis D1, C15, Watutumou, Kec. Kalawat, Kabupaten Minahasa Utara, Sulawesi Utara',
    lat: 1.4708412489325011,
    lng: 124.92010557537841,
    pulau: 'sulawesi',
  },
  {
    id: 'makassar',
    name: 'Ekatunggal Timur Makassar',
    address: 'Pabentengang, Kec. Marusu, Kabupaten Maros, Sulawesi Selatan 90552',
    lat: -5.054996875434522,
    lng: 119.5044384387484,
    pulau: 'sulawesi',
  },
  {
    id: 'kupang',
    name: 'Ekatunggal Timur Manisa',
    address: 'Komplek Pergudangan Tenau Indah, Jl. Yos Sudarso Blok B-2, Alak, Kota Kupang, Nusa Tenggara Timur 85224',
    lat: -10.186554555329227,
    lng: 123.5440036829938,
    pulau: 'nusa tenggara',
  },
  {
    id: 'palu',
    name: 'Ekatunggal Tunas Maroso',
    address: 'Pergudangan Palu Indah B-27. JL. Ir. Soekarno Hatta No. 327 Palu. Sulawesi Tengah',
    lat: -0.8226723810528729,
    lng: 119.88544690457897,
    pulau: 'nusa tenggara',
  },
];

