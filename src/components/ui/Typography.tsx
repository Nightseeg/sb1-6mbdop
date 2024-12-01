import { cn } from '@/lib/utils';

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export function H1({ children, className }: TextProps) {
  return (
    <h1 className={cn(
      'text-4xl md:text-6xl font-bold text-white tracking-tight',
      'bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent',
      className
    )}>
      {children}
    </h1>
  );
}

export function H2({ children, className }: TextProps) {
  return (
    <h2 className={cn(
      'text-3xl md:text-4xl font-bold text-white tracking-tight',
      'bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent',
      className
    )}>
      {children}
    </h2>
  );
}

export function H3({ children, className }: TextProps) {
  return (
    <h3 className={cn(
      'text-2xl md:text-3xl font-bold text-white tracking-tight',
      'bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent',
      className
    )}>
      {children}
    </h3>
  );
}

export function Lead({ children, className }: TextProps) {
  return (
    <p className={cn(
      'text-xl text-white/80 leading-relaxed tracking-wide',
      className
    )}>
      {children}
    </p>
  );
}

export function Subtitle({ children, className }: TextProps) {
  return (
    <p className={cn(
      'text-lg font-medium text-white/60 tracking-wide',
      className
    )}>
      {children}
    </p>
  );
}

export function Body({ children, className }: TextProps) {
  return (
    <p className={cn(
      'text-base text-white/70 leading-relaxed',
      className
    )}>
      {children}
    </p>
  );
}

export function Caption({ children, className }: TextProps) {
  return (
    <p className={cn(
      'text-sm text-white/60 tracking-wide',
      className
    )}>
      {children}
    </p>
  );
}