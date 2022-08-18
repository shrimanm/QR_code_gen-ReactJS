import QRCode from 'qrcode';
import { useState, useEffect } from 'react';

function App() {
  const [src, setsrc] = useState();
  const [text, settext] = useState('');
  const [generated, setgenerated] = useState(false);
  const [nu, setnu] = useState(false);

  const generate = () => {
    if (text) {
      QRCode.toDataURL(text).then(setsrc);
      setgenerated(true);
    } else {
      setnu(true);
    }
  };

  return (
    <div>
      <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 shadow-2xl ">
        <div class="container flex flex-wrap justify-between items-center mx-auto ">
          <h3 class="text-purple-900 p-3 self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
            QR Code Generator
          </h3>
        </div>
      </nav>
      <div class="flex items-center border-b border-teal-500 py-2">
        <input
          class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Enter The URl"
          aria-label="Full name"
          onChange={(e) => {
            settext(e.target.value);
          }}
        />
        <button
          class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="button"
          onClick={() => {
            generate();
          }}
        >
          Generate
        </button>
      </div>

      {generated && (
        <div class=" p-2 bg-zinc-300 flex flex-wrap grid place-items-center w-96 h-96 m-auto mt-10">
          <img
            src={src}
            class="p-1 bg-white border rounded max-w-sm object-cover h-80 w-80"
            alt="..."
          />
        </div>
      )}
      {nu && (
        <div
          class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong class="font-bold">Heyy!!! </strong>
          <span class="block sm:inline">Enter the URL</span>
          <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg
              class="fill-current h-6 w-6 text-red-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              onClick={() => {
                setnu(false);
              }}
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
      )}
    </div>
  );
}

export default App;
