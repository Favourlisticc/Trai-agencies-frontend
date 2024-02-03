// Map.js

import dynamic from 'next/dynamic';
import { useState } from 'react';

const DynamicMap = dynamic(() => import('./DynamicMap'), {
  ssr: false, // Disable server-side rendering
});

const MapPage = (props) => (
  <div>
    {/* Other components or content */}
    <DynamicMap {...props}/>
  </div>
);

export default MapPage;
