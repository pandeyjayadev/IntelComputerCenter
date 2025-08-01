import React from 'react';
import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { FeaturedCourses } from '../components/FeaturedCourses';

export const HomePage = () => {
  return (
    <main>
      <Hero />
      <Stats />
      <FeaturedCourses />
      {/* Other sections */}
    </main>
  );
};
