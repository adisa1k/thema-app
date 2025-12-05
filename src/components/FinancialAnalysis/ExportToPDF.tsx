
import { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

interface Props {
  targetId: string; // ID elementa koji se izvozi
  fileName: string; // Naziv PDF fajla
}

 const ExportToPDF = ({ targetId, fileName }: Props) => {
  const [pageNumber, setPageNumber] = useState<string>("1");

  const handleExport = async () => {
    const element = document.getElementById(targetId);
    if (!element) {
        alert("Dokument za PDF nije pronadjen");
      return;
    }

    // privremeno uklanjam overflow da html2canvas vidi sve
    const originalOverflow = element.style.overflow;
    element.style.overflow = "visible";

    const canvas = await html2canvas(element, {
      scale: 2,
      backgroundColor: "#ffffff",
      useCORS: true,
      scrollX: 0,
      scrollY: -window.scrollY,
      windowWidth: element.scrollWidth,
      windowHeight: element.scrollHeight,
    });

    element.style.overflow = originalOverflow;

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pageWidth;
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    let position = 0;

    if (pdfHeight <= pageHeight) {
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

    } else {
      // ako tabela prelazi jednu stranicu
      let heightLeft = pdfHeight;

      while (heightLeft > 0) {
        pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pdfHeight);
        heightLeft -= pageHeight;
        position -= pageHeight;

        if (heightLeft > 0) pdf.addPage();
      }
    }

    

    // Dodaj numeraciju stranice u dnu
    pdf.setFontSize(10);
    pdf.setTextColor(100);
    pdf.text(`Stranica ${pageNumber}`, pageWidth - 40, pageHeight - 10);

    pdf.save(`Finansijska_analiza_${fileName}_${pageNumber}.pdf`);
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