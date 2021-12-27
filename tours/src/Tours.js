import React from 'react';
import Tour from './Tour';

const Tours = ({ tours }) => {
  return (
    <section>
      <div className="itile">
        <h2>Our tours</h2>
        <div className="undeline"></div>
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
