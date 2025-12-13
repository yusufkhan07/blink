import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  href?: string;
  as?: 'button' | 'a';
}

export function Button({ 
  variant = 'primary', 
  children, 
  href, 
  as = 'button',
  className = '',
  ...props 
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'text-white bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5',
    secondary: 'text-primary-600 bg-primary-50 hover:bg-primary-100',
    outline: 'text-gray-700 border-2 border-gray-300 hover:border-primary-500 hover:text-primary-600',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (as === 'a' && href) {
    return (
      <a href={href} className={classes} {...(props as any)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}