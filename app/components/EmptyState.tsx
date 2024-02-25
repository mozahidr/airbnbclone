'use client';

import { useRouter } from 'next/navigation';
import { Heading } from './Heading';
import { Button } from './navbar/Button';

interface EmptyStatePros {
  title?: string;
  subtitle?: string;
  showRest?: boolean;
}

const EmptyState: React.FC<EmptyStatePros> = ({
  title = 'No exact matches',
  subtitle = 'Try changing or removing some of your filters',
  showRest,
}) => {
  const router = useRouter();

  return (
    <div className="h-[60vh] flex flex-col gap-2 justify-center items-center">
      <Heading title={title} subtitle={subtitle} center />
      <div className="w-48 mt-4">
        {showRest && (
          <Button
            outline
            label="Remove all filters"
            onClick={() => router.push('/')}
          />
        )}
      </div>
    </div>
  );
};

export default EmptyState;
