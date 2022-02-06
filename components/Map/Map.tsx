import React from 'react';
import GoogleMapReact from 'google-map-react'

const Map = () => {
    
    
  return <div>
      <h2>Joe Spanduk Location</h2>
      <div className='w-96 h-96'>
          <GoogleMapReact 
          defaultZoom={13}
          bootstrapURLKeys={{key:process.env.NEXT_PUBLIC_MAPS_API_KEY!}}
          defaultCenter={{
              lat:6.8807851,
              lng:107.6354528,
          }} ></GoogleMapReact>
      </div>
      <p>key:{process.env.NEXT_PUBLIC_MAPS_API_KEY}</p>
  </div>;
};

export default Map;
