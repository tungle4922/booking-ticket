import React from 'react'
import TheaterCard from '../../components/TheaterCard';

const TheaterHome = () => {
  return (
    <div>
      <h1 className='text-2xl font-bold text-center py-8'>Hệ thống rạp</h1>
      <div className="flex flex-wrap max-w-[1322px] mx-auto">
        <TheaterCard></TheaterCard>
        <TheaterCard></TheaterCard>
        <TheaterCard></TheaterCard>
        <TheaterCard></TheaterCard>
        <TheaterCard></TheaterCard>
        <TheaterCard></TheaterCard>
      </div>
    </div>
  );
}

export default TheaterHome