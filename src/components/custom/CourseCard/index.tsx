import React from 'react';
import Link from '@docusaurus/Link';

type CourseCardProps = {
  href: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  description: string | string[];
};

export const CourseCard: React.FC<CourseCardProps> = ({ href, imageUrl, imageAlt, title, subtitle, description }) => {
  const paragraphs = Array.isArray(description) ? description : [description];

  return (
    <Link to={href} className="card padding--lg card-container relative">
      <div className="flex flex-col sm:flex-row sm:items-center gap-6">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full max-w-xs sm:w-32 h-48 sm:h-32 object-contain flex-shrink-0 self-center sm:self-auto"
        />
        <div className="flex flex-col">
          <h1 className="text-xl font-bold mb-1">{title}</h1>
          <h2 className="text-base font-medium mb-2 text-gray-600 dark:text-gray-400">{subtitle}</h2>
          <div className="flex flex-col gap-2">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-sm text-gray-700 dark:text-gray-300">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};
