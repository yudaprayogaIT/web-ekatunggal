export default interface Produk {
  _id: string;
  nama: string;
  kategori: string;
  deskripsi: string;
  image: string;
  createdAt: string; // pastikan ini sesuai response API
}

export enum TypeProduct {
  BB = "Bahan Baku",
  BJ = "Barang Jadi",
  ALL = "",
}
export const ProductHook = async (
  props: {
    limit?: number;
    type?: TypeProduct;
    category?: string;
  } = { limit: 0, type: TypeProduct.ALL }
): Promise<Produk[]> => {
  try {
    const API_BASE = "https://api-ekatalog.ekatunggal.com";
    const TOKEN =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzA5ZDg0ODIyNmVhNDRkZjZkN2QyMmMiLCJuYW1lIjoiQWRtaW5pc3RyYXRvciIsImVtYWlsIjoicmFtZGhhbmlpdEBnbWFpbC5jb20iLCJpbWciOiJyYW1kaGFuaWl0QGdtYWlsLmNvbS5qcGVnIiwidXNlcm5hbWUiOiJhZG1pbmlzdHJhdG9yIiwic3RhdHVzIjoiMSIsImlhdCI6MTc0ODc1MTQ1MX0.BXQO3Ju77IYmyEWP2CYuPvSg7g3zway759KvPJZuLsU";
    const filters = [];
    if (props.type !== TypeProduct.ALL) {
      filters.push(["type", "=", `${props.type}`]);
    }

    if (props.category) {
      filters.push(["kategori", "=", `${props.category}`]);
    }

    const queryFilters = encodeURIComponent(JSON.stringify(filters));

    const res = await fetch(
      `${API_BASE}/api/resource/Produk%20Company%20Profile?limit=${props.limit}&&filters=${queryFilters}&&order_by={"name":1}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    console.log(data)
    return data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
