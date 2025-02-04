import { useEffect, useState } from 'react';
import { GoogleMap, GroundOverlay, KmlLayer } from '@react-google-maps/api';
import LoadMapScript from './LoadScript';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 6.10281,
  lng: -75.66789,
};

export default function Map() {
  const imageBounds = {
    north: 7.3,
    south: 5.1,
    east: -74.3,
    west: -76.6,
  };
  const [reload, setReload] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setReload(Date.now());
    }, 60000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className='h-full w-full'>
      <LoadMapScript>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12.6}>
          <KmlLayer
            url={
              import.meta.env.VITE_SIATA +
              'kml/04_Divisiones/02_Departamental/La_Valeria.kml'
            }
            options={{ preserveViewport: true }}
          />
          <GroundOverlay
            url={`https://siata.gov.co/kml/00_Radar/Ultimo_Barrido/AreaMetRadar_10_120_DBZH.png?t=${reload}`}
            bounds={imageBounds}
            opacity={0.8}
          />
        </GoogleMap>
      </LoadMapScript>
    </div>
  );
}