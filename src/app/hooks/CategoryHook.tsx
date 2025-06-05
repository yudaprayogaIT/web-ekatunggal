export default interface Category {
  _id: string;
  name: string;
  type: string;
  image: string;
  createdAt: string; // pastikan ini sesuai response API
}

export enum TypeProduct {
  BJ = "Barang Jadi",
  BB = "Bahan Baku",
  ALL = "",
}

export const CategoryHook = async (
  props: {
    limit?: Number;
    type: TypeProduct;
  } = { limit: 0, type: TypeProduct.ALL }
): Promise<Category[]> => {
  try {
    let filters = [];
    if (props.type !== TypeProduct.ALL) {
      filters.push(["type", "=", `${props.type}`]);
    }

    const queryFilters = encodeURIComponent(JSON.stringify(filters));
    const API_BASE = "https://api-ekatalog.ekatunggal.com";
    const TOKEN =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzA5ZDg0ODIyNmVhNDRkZjZkN2QyMmMiLCJuYW1lIjoiQWRtaW5pc3RyYXRvciIsImVtYWlsIjoicmFtZGhhbmlpdEBnbWFpbC5jb20iLCJpbWciOiJyYW1kaGFuaWl0QGdtYWlsLmNvbS5qcGVnIiwidXNlcm5hbWUiOiJhZG1pbmlzdHJhdG9yIiwic3RhdHVzIjoiMSIsImlhdCI6MTc0ODc1MTQ1MX0.BXQO3Ju77IYmyEWP2CYuPvSg7g3zway759KvPJZuLsU";

    const res = await fetch(
      `${API_BASE}/api/resource/Category?limit=${props.limit}&&filters=${queryFilters}&&order_by={"name":1}`,
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
    return data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
