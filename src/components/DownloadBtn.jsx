import * as XLSX from "xlsx/xlsx.mjs";

export const DownloadBtn = ({ data = [], fieldName }) => {
  return (
    <button
      className="download-btn"
      onClick={() => {
        const datas = data?.length ? data : [];
        const worksheet = XLSX.utils.json_to_sheet(datas);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
        XLSX.writeFile(workbook, fieldName ? `${fieldName}.xlsx` : "data.xlsx");
      }}
    >
      Download
    </button>
  );
};
