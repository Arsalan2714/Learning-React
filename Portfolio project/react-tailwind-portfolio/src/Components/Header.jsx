import passportPhoto from '../assets/MyPhoto.png'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const Header = () => {
  const handleDownloadPDF = async () => {
    const element = document.getElementById('portfolio-content');
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: [canvas.width, canvas.height]
    });
    pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
    pdf.save('portfolio.pdf');
  };

  return (
    <header className="bg-blue-600 text-white p-5 rounded-xl flex justify-between items-center">
      <div>
        <div className="font-bold text-3xl">Md Arsalan Ali</div>
        <div className="text-xl">Full Stack Web Developer</div>
        <button
          onClick={handleDownloadPDF}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 mt-2 inline-block"
        >
          Generate PDF
        </button>
      </div>
      <img className="rounded-full w-24" src={passportPhoto} alt="" />
    </header>
  );
};

export default Header;