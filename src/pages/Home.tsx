import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const Home: React.FC = () => {
  return (
    <div className="space-y-8">
      <section className="flex flex-col items-center justify-center space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Welcome to Your MVP
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Start building something amazing with modern tools and best practices.
        </p>
        <div className="space-x-4">
          <Button size="lg">Get Started</Button>
          <Button variant="outline" size="lg">Learn More</Button>
        </div>
      </section>

      <section className="mx-auto max-w-[700px] space-y-4 pt-8">
        <h2 className="text-2xl font-bold">Quick Start</h2>
        <div className="grid gap-4">
          <div className="space-y-2">
            <Input placeholder="Enter your email" />
            <Button className="w-full">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
};