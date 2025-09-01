"use client";

import { Hero } from "@/components";
import Catalogue from "@/components/Catalogue";
import Profile from "@/components/Profile";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Catalogue />
      <Profile />
    </main>
  );
}
