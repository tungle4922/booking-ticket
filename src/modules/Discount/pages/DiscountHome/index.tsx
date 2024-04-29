import React from 'react'
import DiscountCard from '../../components/DiscountCard';
import EventCard from '../../components/EventCard';

const DiscountHome = () => {
  return (
    <div>
      <h1 className='text-2xl text-white font-bold text-center py-8'>Khuyến mãi</h1>
      <div className="flex flex-wrap max-w-[1322px] mx-auto">
        <DiscountCard></DiscountCard>
        <DiscountCard></DiscountCard>
        <DiscountCard></DiscountCard>
        <DiscountCard></DiscountCard>
      </div>
      <h1 className='text-2xl text-white font-bold text-center py-8'>Sự kiện</h1>
      <div className="flex flex-wrap max-w-[1322px] mx-auto">
        <EventCard></EventCard>
        <EventCard></EventCard>
        <EventCard></EventCard>
        <EventCard></EventCard>
      </div>
    </div>
      
  );
}

export default DiscountHome