import React from 'react';

interface Props {
  propName: string;
}

const Store: React.FC<Props> = ({ propName }) => {
  return (
    <div>
      Store
    </div>
  );
};

export default Store;