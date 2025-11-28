
import { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

 const ExportToPDF = () => {
  const [pageNumber, setPageNumber] = useState<string>("1");

  const handleExport = async () => {
    const element = document.getElementById("analysis-content");
    if (!element) return;

    const canvas = await html2canvas(element, {
      scale: 2,
      backgroundColor: "#ffffff",
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pageWidth;
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

    // Dodaj numeraciju stranice u dnu
    pdf.setFontSize(10);
    pdf.setTextColor(100);
    pdf.text(`Stranica ${pageNumber}`, pageWidth - 40, pageHeight - 10);

    pdf.save(`Finansijska_analiza_${pageNumber}.pdf`);
  };

  return (
    <div className="flex items-center gap-3 mt-8 justify-center">
      <input
        type="text"
        value={pageNumber}
        onChange={(e) => setPageNumber(e.target.value)}
        placeholder="Broj stranice"
        className="border border-gray-300 rounded-md px-3 py-2 w-32 text-center shadow-sm focus:ring-2 focus:ring-green-500"
      />
      <button
        onClick={handleExport}
        className="bg-green-600 text-black font-semibold px-5 py-2 rounded-md hover:bg-green-700 transition"
      >
        Izvezi u PDF
      </button>
    </div>
  );
};
export default ExportToPDF