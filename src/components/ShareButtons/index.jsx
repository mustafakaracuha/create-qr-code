import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdSave } from "react-icons/md";

const ShareButtons = ({ qrValue, handleDownload }) => {
  const handleInstagramShare = () => {
    const instagramUrl = `https://www.instagram.com/share?url=${encodeURIComponent(
      qrValue
    )}`;
    window.open(instagramUrl, "_blank");
  };

  const handleWhatsappShare = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(qrValue)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="flex flex-col items-center justify-around mt-10 mr-5 ml-3">
      <button
        title="Kaydet"
        className="mr-4 p-2 flex shadow-xl items-center justify-center transition duration-500 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full"
        onClick={handleDownload}
      >
        <MdSave className="transition duration-300 text-white" size={30} />
      </button>
      <button
        title="Instagram'da Paylaş"
        className="mr-4 p-2 flex shadow-xl items-center justify-center bg-gradient-to-r from-pink-500 to-red-500 rounded-full text-white"
        onClick={handleInstagramShare}
      >
        <FaInstagram size={32} />
      </button>
      <button
        title="WhatsApp'ta Paylaş"
        className="mr-4 p-2 flex shadow-xl items-center justify-center bg-green-500 rounded-full text-white"
        onClick={handleWhatsappShare}
      >
        <FaWhatsapp size={32} />
      </button>
    </div>
  );
};

export default ShareButtons;
