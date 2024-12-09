'use client';

import { Button } from "@/components/ui/button";
import { Title } from "@/components/ui/title";

export default function Home() {
  return (
    <>
      <div className="py-3 px-6 flex items-center justify-between border border-t-transparent">
        <Title>
        Post, Share, Hire!
        </Title>
        <Button size="sm" className="shadow-xl" href="/post-job">
          Post a Job
        </Button>
      </div>

      <main className="h-full border-x px-6 py-8 space-y-6">
        <section className="space-y-4">
          <p className="text-gray-1k text-sm leading-relaxed">
            Welcome to our streamlined <span className="font-semibold">Form Builder</span>, 
            designed to make creating, managing, and sharing job applications easier than ever. Whether 
            you're a recruiter or a business owner, our intuitive tool empowers you to:
          </p>
        </section>

        <ul className="space-y-2 list-disc pl-6 text-gray-1k text-sm">
          <li>
            <span className="font-semibold">Craft Tailored Job Forms:</span> Add questions of various types such as 
            short answers, long answers, single select options, and more to suit your specific hiring needs.
          </li>
          <li>
            <span className="font-semibold">Preview with Confidence:</span> Switch seamlessly to a preview mode 
            to see exactly how your job application form will appear to applicants.
          </li>
          <li>
            <span className="font-semibold">Track Completion:</span> Monitor form completeness in real-time with a dynamic 
            progress bar, ensuring every field is properly addressed before publishing.
          </li>
          <li>
            <span className="font-semibold">Simplify Application Submission:</span> Offer candidates a smooth experience 
            with thoughtfully structured forms that guide them step by step.
          </li>
        </ul>

        <section className="text-center py-6 border-t">
          <p className="text-gray-1k text-sm">
            With just a few clicks, post your job listing and connect with top talent. 
            Start building the future of your team today!
          </p>
          <Button size="sm" className="mt-4 bg-gray-1k text-gray-00 hover:bg-gray-1k/90 border-gray-700" href="/post-job">
            Start Creating
          </Button>
        </section>
      </main>
    </>
  );
}
