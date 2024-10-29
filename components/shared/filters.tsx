'use client';

import React from 'react';
import { CheckboxFiltersGroup, FilterCheckbox, RangeSlider, Title } from '.';
import { Input } from '../ui';
import { useFilterIngredients } from '@/hooks/useFilterIngredients';

interface Props {
  className?: string;
}
	
export const Filters: React.FC<Props> = ({ className }) => {
  const {ingredients} = useFilterIngredients();
  
  const items = ingredients.map((item) => ({value: String(item.id), text: item.name}));

  return (
    <div className={className}>
      <Title text="Filter" size="sm" className="mb-5 font-bold" />
      {/* Top checkboxes */}
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Custom" value="1" />
        <FilterCheckbox text="New" value="2" />
      </div>

      {/* Price filter */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price from and to:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={30000}
            defaultValue={0}
          />
          <Input type="number" placeholder="30000" max={30000} />
        </div>

        <RangeSlider min={0} max={30000} step={1000} value={[0, 30000]} />
      </div>

      <CheckboxFiltersGroup
        title="Ingredients"
        className="mt-5"
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
      />
    </div>
  );
};
