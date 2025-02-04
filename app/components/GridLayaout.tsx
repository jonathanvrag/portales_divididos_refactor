import React from 'react';

export default function GridLayaout() {
  return (
    <div className='grid grid-cols-2 gap-4 p-4'>
      <div className=''>
        <img
          src='https://siata.gov.co/ultimasFotosCamaras/ultimacam_deslizamiento_la_valeria2.jpg'
          alt='Cámara del deslizamiento de La Valeria'
        />
      </div>
      <div className=''>
        <img
          src='https://siata.gov.co/hidrologia/nivel_new/Nivel_Tigra_3h.jpg'
          alt='Nivel de la Q. La Tigra'
        />
      </div>
      <div className='bg-zinc-500'>Mapa</div>
      <div>
        <img
          src='https://siata.gov.co/hidrologia/nivel_new/Nivel_Valeria_3h.jpg'
          alt='Nivel de la Q. La Valeria'
        />
      </div>
    </div>
  );
}
