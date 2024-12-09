'use client';

import { Button } from "@/components/ui/button";
import { Title } from "@/components/ui/title";

export default function Home() {
  return (
    <>
      <div className="py-3 px-6 flex items-center justify-between border border-t-transparent">
      <Title> 
        Job Listing
      </Title>
      
      <Button size={"sm"} className="shadow-xl" href="/post-job" >Post a Job</Button>
    </div>

      <main className="h-full border-x">
      </main>
    </>
  );
}
