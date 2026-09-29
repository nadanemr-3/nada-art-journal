/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { JournalNav } from './components/nav';
import { Hero } from './components/hero';
import portraitUrl from '../me.svg';
import { SeeSection } from './components/see';
import { CuriosityToCreation, MakeToLive } from './components/transitions';
import { MakeSection } from './components/make';
import { LiveSection } from './components/live';
import { ThreeSection } from './components/three';
import { LoopSection } from './components/loop';
import { ArchiveSection } from './components/archive';
import { EndingSection } from './components/ending';
import { JournalCursor } from './components/visual';

export default function App() {
  return (
    <div className="min-h-screen bg-warm-ivory text-ink selection:bg-soft-pink selection:text-ink relative">
      <JournalCursor />
      <JournalNav />
      <main id="main-content">
        <Hero portraitSrc={portraitUrl} />
        <SeeSection />
        <CuriosityToCreation />
        <MakeSection />
        <MakeToLive />
        <LiveSection />
        <ThreeSection />
        <LoopSection />
        <ArchiveSection />
        <EndingSection />
      </main>
    </div>
  );
}

