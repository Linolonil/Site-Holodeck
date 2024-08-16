// src/components/QRCodePopup.jsx
import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import { FaWhatsapp, FaDiscord } from 'react-icons/fa';

const QRCodePopup = () => {
  const [showQRCode, setShowQRCode] = useState(null);

  const handleQRCodeClick = (event, url) => {
    event.preventDefault(); // Impede o carregamento da página
    setShowQRCode(url);
  };

  const handleCloseQRCode = () => {
    setShowQRCode(null);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Entre na Holodeck</h2>
      <div className="flex space-x-4">
        <a
          onClick={(event) =>
            handleQRCodeClick(event, "https://chat.whatsapp.com/Ew4dOwAS4CJ01xdSaUxAwv")
          }
          aria-label="WhatsApp"
        >
          <FaWhatsapp className="text-2xl hover:text-gray-400" />
        </a>
        <a
          onClick={(event) =>
            handleQRCodeClick(event, "https://discord.com/channels/1217480586273488928/1217480586785198111")
          }
          aria-label="Discord"
        >
          <FaDiscord className="text-2xl hover:text-gray-400" />
        </a>
      </div>

      {showQRCode && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white p-6 rounded shadow-lg text-center opacity-100">
            <h3 className="text-lg font-semibold mb-4">Escaneie o QR Code</h3>
            <QRCode value={showQRCode} size={256} />
            <button
              onClick={handleCloseQRCode}
              className="mt-4 px-4 py-2 bg-[#3c297a] hover:bg-[#a9e916] text-white hover:text-slate-900 font-bold rounded"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QRCodePopup;
