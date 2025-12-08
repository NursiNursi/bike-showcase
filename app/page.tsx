"use client";

import { Hero } from "@/components";
import Catalogue from "@/components/Catalogue";
import Profile from "@/components/Profile";
import CreditSimulation from "@/components/CreditSimulation";
import ClientReview from "@/components/ClientReview";
import Article from "@/components/Article";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Profile />
      <Catalogue />
      <CreditSimulation />
      <ClientReview />
      <Article />
    </main>
  );
}
