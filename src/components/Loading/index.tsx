'use client';

import { GooSpinner } from 'react-spinners-kit';

const Loading = () => {
  return (
    <div className="my-24 flex h-full justify-center">
      <GooSpinner size={100} color="#e4e4e7" />
    </div>
  );
};

export default Loading;
