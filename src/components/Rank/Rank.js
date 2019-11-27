import React from 'react';

const Rank = ({ name, entries }) => {
  return (
    <React.Fragment>
      <div className='f3 center'>
        {`${name}, your current entry count is...`}
      </div>
      <div className='f2 center'>
        {entries}
      </div>
    </React.Fragment>
  );
}

export default Rank;