import React from 'react';
import AdSense from 'react-adsense';

const GoogleAd = () => (
    <AdSense.Google
        client='ca-pub-2078397541070702'
        slot='7806394673'
        style={{ display: 'block' }}
        layout='in-article'
        format='fluid'
    />
)


export default GoogleAd;