import { useRef } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Download } from "lucide-react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const PosterDownload = ({ siteUrl = window.location.href }) => {
  const poster1Ref = useRef(null);
  const poster2Ref = useRef(null);
  const poster3Ref = useRef(null);

  const downloadPDF = async (ref, filename) => {
    if (!ref.current) return;
    
    try {
      const canvas = await html2canvas(ref.current, {
        scale: 2,
        backgroundColor: '#0a0a0a',
        useCORS: true,
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });
      
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save(filename);
    } catch (error) {
      console.error('PDF generation failed:', error);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Poster 1 - QR Code Portrait */}
      <div className="bg-[#111] border border-white/10 p-6">
        <h3 className="font-mono text-sm text-[#FF3B30] uppercase tracking-widest mb-4">
          A4 POSTER - QR CODE
        </h3>
        <div 
          ref={poster1Ref}
          className="bg-[#0a0a0a] p-8 mx-auto max-w-[300px] md:max-w-[400px]"
          style={{ aspectRatio: '210/297' }}
          data-testid="poster-qr-a4"
        >
          <div className="h-full flex flex-col justify-between text-center">
            <div>
              <p className="font-mono text-xs text-[#FF3B30] tracking-widest mb-2">
                ⚠ WORKFORCE CRISIS
              </p>
              <h2 className="font-heading text-2xl md:text-3xl text-white leading-none">
                MINISTER IGNORES
              </h2>
              <h2 className="font-heading text-2xl md:text-3xl text-[#FF3B30] leading-none mt-1">
                HIS OWN REPORT
              </h2>
            </div>
            
            <div className="my-6">
              <div className="bg-white p-4 inline-block">
                <QRCodeSVG 
                  value={siteUrl}
                  size={120}
                  bgColor="#ffffff"
                  fgColor="#0a0a0a"
                  level="M"
                />
              </div>
              <p className="font-mono text-xs text-white/60 mt-3">
                SCAN FOR THE TRUTH
              </p>
            </div>
            
            <div className="border-t border-white/20 pt-4">
              <p className="font-heading text-2xl text-[#FF3B30]">909</p>
              <p className="font-body text-xs text-white/60">
                MRP WORKFORCE GAP BY 2032
              </p>
              <p className="font-mono text-[8px] text-white/30 mt-4">
                SOURCE: QLD HEALTH WORKFORCE GAP ANALYSIS NOV 2025
              </p>
            </div>
          </div>
        </div>
        <button 
          onClick={() => downloadPDF(poster1Ref, 'MRP-Crisis-QR-Poster.pdf')}
          className="btn-primary w-full mt-4 flex items-center justify-center gap-2"
          data-testid="download-poster-1-btn"
        >
          <Download className="w-4 h-4" />
          DOWNLOAD A4 PDF
        </button>
      </div>

      {/* Poster 2 - Stats Focus */}
      <div className="bg-[#111] border border-white/10 p-6">
        <h3 className="font-mono text-sm text-[#F5A623] uppercase tracking-widest mb-4">
          A4 POSTER - STATS
        </h3>
        <div 
          ref={poster2Ref}
          className="bg-[#0a0a0a] p-8 mx-auto max-w-[300px] md:max-w-[400px]"
          style={{ aspectRatio: '210/297' }}
          data-testid="poster-stats-a4"
        >
          <div className="h-full flex flex-col justify-between">
            <div className="text-center">
              <p className="font-mono text-xs text-white/50 tracking-widest">
                THE GOVERNMENT'S OWN REPORT SHOWS
              </p>
            </div>
            
            <div className="space-y-6 text-center">
              <div>
                <p className="font-heading text-6xl md:text-7xl text-[#FF3B30]">909</p>
                <p className="font-body text-sm text-white/70">MRP SHORTAGE</p>
              </div>
              <div>
                <p className="font-heading text-5xl md:text-6xl text-[#F5A623]">58%</p>
                <p className="font-body text-sm text-white/70">DEMAND MET BY 2032</p>
              </div>
              <div>
                <p className="font-heading text-5xl md:text-6xl text-white">42%</p>
                <p className="font-body text-sm text-white/70">PATIENTS WON'T GET CARE</p>
              </div>
            </div>
            
            <div className="text-center border-t border-white/20 pt-4">
              <p className="font-heading text-lg text-[#FF3B30]">
                MINISTER'S RESPONSE?
              </p>
              <p className="font-heading text-2xl text-white">SILENCE.</p>
              <div className="mt-4 flex justify-center">
                <div className="bg-white p-2 inline-block">
                  <QRCodeSVG 
                    value={siteUrl}
                    size={60}
                    bgColor="#ffffff"
                    fgColor="#0a0a0a"
                    level="M"
                  />
                </div>
              </div>
              <p className="font-mono text-[8px] text-white/30 mt-2">
                MRPQUEENSLAND@GMAIL.COM
              </p>
            </div>
          </div>
        </div>
        <button 
          onClick={() => downloadPDF(poster2Ref, 'MRP-Crisis-Stats-Poster.pdf')}
          className="btn-primary w-full mt-4 flex items-center justify-center gap-2"
          data-testid="download-poster-2-btn"
        >
          <Download className="w-4 h-4" />
          DOWNLOAD A4 PDF
        </button>
      </div>

      {/* Poster 3 - Mobile/Social Square */}
      <div className="bg-[#111] border border-white/10 p-6">
        <h3 className="font-mono text-sm text-white uppercase tracking-widest mb-4">
          MOBILE / SOCIAL SQUARE
        </h3>
        <div 
          ref={poster3Ref}
          className="bg-[#FF3B30] p-6 mx-auto max-w-[300px]"
          style={{ aspectRatio: '1/1' }}
          data-testid="poster-mobile-square"
        >
          <div className="h-full flex flex-col justify-between">
            <div>
              <p className="font-mono text-xs text-white/80 tracking-widest">
                QLD HEALTH CRISIS
              </p>
              <h2 className="font-heading text-2xl text-white leading-none mt-2">
                DOES THE<br/>HEALTH MINISTER<br/>THINK IT'S
              </h2>
            </div>
            
            <div className="text-center">
              <p className="font-heading text-6xl text-white">1950?</p>
            </div>
            
            <div>
              <p className="font-body text-xs text-white/80">
                909 MRP workforce gap by 2032
              </p>
              <p className="font-body text-xs text-white/80">
                Modern hospitals need MRPs
              </p>
              <div className="flex items-center justify-between mt-2">
                <p className="font-mono text-[8px] text-white/60">
                  MRPQUEENSLAND@GMAIL.COM
                </p>
                <div className="bg-white p-1">
                  <QRCodeSVG 
                    value={siteUrl}
                    size={30}
                    bgColor="#ffffff"
                    fgColor="#0a0a0a"
                    level="L"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button 
          onClick={() => downloadPDF(poster3Ref, 'MRP-Crisis-Mobile-Square.pdf')}
          className="btn-secondary w-full mt-4 flex items-center justify-center gap-2"
          data-testid="download-poster-3-btn"
        >
          <Download className="w-4 h-4" />
          DOWNLOAD SQUARE PDF
        </button>
      </div>
    </div>
  );
};

export default PosterDownload;
