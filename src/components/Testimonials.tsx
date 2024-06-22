"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Testimonials() {
  return (
    <div className=" mt-20 max-w-full">
        <h2 className="text-lg md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Testimonials
        </h2>
        <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="normal"
                className=""
            />
        </div>
    </div>
  );
}

const testimonials = [
    {
        quote: "Code Dog has been a lifesaver! It's amazing how much time I save by reusing my old code effortlessly. I can't imagine coding without it now.",
        name: "Ayush Gupta",
        title: "Software Developer"
      },
      {
        quote: "I love how Code Dog integrates seamlessly with VS Code. The smart suggestions are spot on and it’s super easy to find and use my previous code snippets.",
        name: "Chaitanya Rai",
        title: "AI/ML Developer"
      },
      {
        quote: "Code Dog is like having a personal assistant that remembers all my past work. It’s boosted my productivity and helped me focus on writing new code.",
        name: "Himesh Nayak",
        title: "Software Engineer"
      },
      {
        quote: "Using Code Dog has made coding so much more efficient. I can quickly find and reuse my previous code, which means I get to focus on solving new problems.",
        name: "Utkarsh Rai",
        title: "Full Stack Developer"
      },
      {
        quote: "I was skeptical at first, but Code Dog has exceeded my expectations. It’s intuitive, easy to use, and has significantly improved my workflow.",
        name: "Ayush Baliyan",
        title: "Full Stack Developer"
      },
      {
        quote: "Code Dog is a must-have tool for any developer. It’s fantastic at finding the right code snippets from my past projects, saving me tons of time.",
        name: "Aditya Singh",
        title: "Full Stack Developer"
      }
      
];
