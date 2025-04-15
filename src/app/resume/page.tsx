// src/app/resume/page.tsx
'use client';

import ResumeCard from '@/components/ResumeCard';

export default function ResumePage() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16">
      <ResumeCard />
    </section>
  );
}
