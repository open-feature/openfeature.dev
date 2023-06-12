import React from 'react';

export function Pill({ color, children }: { color: string; children: React.ReactNode }) {
  return <div className={`${color} px-2 py-1 rounded-md  text-xs font-medium  ring-1 ring-inset`}>{children}</div>;
}
