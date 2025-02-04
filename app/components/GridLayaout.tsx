import { useEffect, useState } from 'react';
import Map from './Map';

export default function GridLayaout() {
  const [reload, setReload] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setReload(Date.now());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='grid grid-cols-2 gap-4 p-4'>
      <div className='h-96 flex justify-center items-center'>
        <img
          src={`https://siata.gov.co/ultimasFotosCamaras/ultimacam_deslizamiento_la_valeria2.jpg?t=${reload}`}
          alt='Cámara del deslizamiento de La Valeria'
          className='max-h-full'
        />
      </div>
      <div className='h-96 flex justify-center items-center'>
        <img
          src={`https://siata.gov.co/hidrologia/nivel_new/Nivel_Tigra_3h.jpg?t=${reload}`}
          alt='Nivel de la Q. La Tigra'
          className='max-h-full'
        />
      </div>
      <div className='h-96 flex justify-center items-center'>
        <Map />
      </div>
      <div className='h-96 flex justify-center items-center'>
        <img
          src={`https://siata.gov.co/hidrologia/nivel_new/Nivel_Valeria_3h.jpg?t=${reload}`}
          alt='Nivel de la Q. La Valeria'
          className='max-h-full'
        />
      </div>
    </div>
  );
}
