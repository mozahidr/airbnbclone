'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import { IconType } from 'react-icons';
import qs from "query-string";

interface CategoryBoxProps {
  icon: IconType;
  label: string;
  selected?: boolean;
}

export const CategoryBox: React.FC<CategoryBoxProps> = ({
  icon: Icon,
  label,
  selected,
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if(params) {
        currentQuery = qs.parse(params.toString());
    }

    // UPDATE THE CURRENT QUERY
    const updatedQuery: any = {
        ...currentQuery,
        category: label
    }

    //  IF CATEGORY ALREADY SELECTED IN THE URL WE WILL RESET IT ONCE THEY CLICK AGAIN
    if(params?.get('category') === label) {
        delete updatedQuery.category;
    }
    const url = qs.stringifyUrl({
        url: '/',
        query: updatedQuery
    }, { skipNull: true });

    router.push(url);

  }, [label, params, router]);

  return (
    <div
      onClick={handleClick}
      className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 cursor-pointer
        ${selected ? 'border-b-neutral-800' : 'border-transparent'}
        ${selected ? 'text-neutral-800' : 'text-neutral-500'}
    `}
    >
      <Icon size={26} />
      <div className="font-medium text-sm">{label}</div>
    </div>
  );
};
