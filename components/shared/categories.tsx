'use client';

import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';
import React from 'react';

interface Props {
  className?: string;
}

const cats = [
  {id: 1, name: 'Pizzas',},
  {id: 2, name: 'Combos',},
  {id: 3, name: 'Snacks',},
  {id: 4, name: 'Cocktail'},
  {id: 5, name: 'Coffee',},
  {id: 6, name: 'Drinks',},
  {id: 7, name: 'Deserts'},
];
const activeIndex = 0;

export const Categories: React.FC<Props> = ({ className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);
  return (
    <div
      className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2x	l', className)}
    >
      {cats.map(({name, id}, index) => (
    		<a className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            (categoryActiveId === id) &&
            'bg-white shadow-md shadow-gray-200 text-primary'
          )}
					key={index}
          href={`/#${name}`}
        >
					<button>
						{name}
					</button>
				</a>
      ))}
    </div>
  );
};
