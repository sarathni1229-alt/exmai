"use client";

import { useState } from "react";
import { Header, Hero, ContentMarquee, BuiltFor, Features, HowItWorks, DeepFeatures, Agents } from "@/components/sections";

export default function Home() {
  const [heroVersion, setHeroVersion] = useState(8);

  return (
    <main>
      <Header currentVersion={heroVersion} onVersionChange={setHeroVersion} />
      <Hero version={heroVersion} />
      <ContentMarquee />
      <BuiltFor />
      <Features />
      <HowItWorks />
      <DeepFeatures />
      <Agents />
    </main>
  );
}
