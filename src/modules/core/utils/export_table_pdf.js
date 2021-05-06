import { jsPDF } from "jspdf";
import "jspdf-autotable";

export default function EXPORT_TABLE_PDF({ head, body, file_name }){
  const doc = new jsPDF();
  doc.autoTable({ head, body });
  doc.save(`${file_name}.pdf`);
}
