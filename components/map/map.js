// Map.js

import dynamic from 'next/dynamic';
import { useState } from 'react';

const DynamicMap = dynamic(() => import('./DynamicMap'), {
  ssr: false, // Disable server-side rendering
});

const MapPage = () => (
  <div>
    {/* Other components or content */}
    <DynamicMap />
  </div>
);

export default MapPage;
