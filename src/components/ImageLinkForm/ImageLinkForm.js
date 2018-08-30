import React from 'react';

const ImageLinkForm = () => {
  return (
    <div>
      <p>This mageic brain will detect faces on picture. Give it a try.</p>
      <div>
        <input type='url' placeholder='Enter image url' />
        <button>Detect</button>
      </div>
    </div>
  );
};

export default ImageLinkForm;