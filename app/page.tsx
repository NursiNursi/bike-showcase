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
      <section id="catalogue" className="scroll-mt-24" aria-label="Catalogue">
        <Catalogue />
      </section>
      <section id="credit-simulation" className="scroll-mt-24" aria-label="Credit Simulation">
        <CreditSimulation />
      </section>
      <section id="client-review" className="scroll-mt-24" aria-label="Client Review">
        <ClientReview />
      </section>
      <section id="articles" className="scroll-mt-24" aria-label="Articles">
        <Article />
      </section>
    </main>
  );
}
