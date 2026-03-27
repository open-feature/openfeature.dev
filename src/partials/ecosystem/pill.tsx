import React from 'react';

export default function Pill({
  color,
  className,
  children,
}: {
  color?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={`${color} ${className ?? 'px-2 py-1 text-xs'} rounded-md font-medium ring-1 ring-inset`}>{children}</div>;
}
