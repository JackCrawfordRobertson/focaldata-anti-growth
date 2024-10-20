// components/BodyCopy.js

import React from 'react';

const BodyCopy = ({ htmlText, fontSize = '1.2rem', color = 'black', fontWeight = 'normal', lineHeight = '1.5' }) => {
    return (
        <p style={{ fontSize, color, fontWeight, lineHeight }} dangerouslySetInnerHTML={{ __html: htmlText }}></p>
    );
};

export default BodyCopy; // Correct default export