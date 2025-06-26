import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

export function Button({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={clsx(
        'bg-primary text-white font-semibold rounded-lg px-5 py-2 transition hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
        className
      )}
      {...props}
    />
  );
}