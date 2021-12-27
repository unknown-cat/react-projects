import React from 'react';
import Tour from './Tour';

const Tours = ({ tours }) => {
  return (
    <section>
      <div className="title">
        <h2>Our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map(tour => (
          <Tour key={tour.id} {...tours} />
        ))}
      </div>
    </section>
  )
};

export default Tours;
