'use client';

import { Container } from '../Container';
import { CategoryBox } from './CategoryBox';
import { usePathname, useSearchParams } from 'next/navigation';
import { categoryList } from './CategoryList';

export const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();

    const isMainPage = pathname === '/';

    if(!isMainPage) {
        return null;
    }
  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categoryList.map((item) => (
            <CategoryBox
                key={item.label}
                label={item.label}
                selected={category === item.label}
                icon={item.icon}
            />
        ))}
      </div>
    </Container>
  );
};
