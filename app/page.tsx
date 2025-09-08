"use client";

import { Hero } from "@/components";
import Catalogue from "@/components/Catalogue";
import Profile from "@/components/Profile";
import CreditSimulation from "@/components/CreditSimulation";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Catalogue />
      <CreditSimulation />
      <Profile />
    </main>
  );
}
