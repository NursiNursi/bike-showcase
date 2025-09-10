"use client";

import { Hero } from "@/components";
import Catalogue from "@/components/Catalogue";
import Profile from "@/components/Profile";
import CreditSimulation from "@/components/CreditSimulation";
import ClientReview from "@/components/ClientReview";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Catalogue />
      <CreditSimulation />
      <ClientReview />
      <Profile />
    </main>
  );
}
