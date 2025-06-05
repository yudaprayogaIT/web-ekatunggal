export interface IFile {
  _id: string;
  file_url: string;
}

export const FileHook = async (
  props: {
    limit?: Number;
    filters?: any[];
  } = { limit: 0, filters: [] }
): Promise<IFile[]> => {
  try {
    const API_BASE = "https://api-ekatalog.ekatunggal.com";
    const TOKEN =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzA5ZDg0ODIyNmVhNDRkZjZkN2QyMmMiLCJuYW1lIjoiQWRtaW5pc3RyYXRvciIsImVtYWlsIjoicmFtZGhhbmlpdEBnbWFpbC5jb20iLCJpbWciOiJyYW1kaGFuaWl0QGdtYWlsLmNvbS5qcGVnIiwidXNlcm5hbWUiOiJhZG1pbmlzdHJhdG9yIiwic3RhdHVzIjoiMSIsImlhdCI6MTc0ODc1MTQ1MX0.BXQO3Ju77IYmyEWP2CYuPvSg7g3zway759KvPJZuLsU";

    let queryFilters = "";
    if (props.filters) {
      queryFilters =
        props.filters.length > 0
          ? encodeURIComponent(JSON.stringify(props.filters))
          : "";
    }

    const res = await fetch(
      `${API_BASE}/filelist?limit=${props.limit}&&fields=["file_url"]${
        queryFilters && `&&filters=${queryFilters}`
      }`,
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
