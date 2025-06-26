import React from 'react';

const FilterButtons = ({ activeFilter, setActiveFilter }) => {
  const filters = [
    {
      id: 'all',
      label: 'Todos',
      value: null,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      )
    },
    {
      id: 'hotel',
      label: 'Hoteles',
      value: 'hotel',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      id: 'restaurant',
      label: 'Restaurantes',
      value: 'restaurant',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 'attraction',
      label: 'Atracciones',
      value: 'attraction',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="mt-3 flex overflow-x-auto space-x-2 py-2">
      {filters.map((filter) => {
        const isActive = activeFilter === filter.value || (activeFilter === null && filter.value === null);
        
        return (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.value)}
            className={`px-4 py-1 rounded-full text-sm whitespace-nowrap flex items-center transition-all border-2 ${
              isActive
                ? 'bg-white text-primary font-medium border-green-500 shadow-md'
                : 'bg-white border-gray-200 text-gray-700'
            }`}
          >
            <span className={isActive ? 'text-green-600' : 'text-secondary'}>
              {filter.icon}
            </span>
            {filter.label}
          </button>
        );
      })}
    </div>
  );
};

export default FilterButtons; 