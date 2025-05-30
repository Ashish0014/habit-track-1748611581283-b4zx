import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">About</h1>
      <p className="text-lg text-muted-foreground">
        This is a modern React application built with TypeScript and Tailwind CSS.
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Features</h2>
          <ul className="list-inside list-disc space-y-1">
            <li>React with TypeScript</li>
            <li>Modern component architecture</li>
            <li>Responsive design</li>
            <li>Performance optimized</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Tech Stack</h2>
          <ul className="list-inside list-disc space-y-1">
            <li>React 18</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>Vite</li>
          </ul>
        </div>
      </div>
    </div>
  );
};