"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { allInsights } from "@/app/playbook/insights-data";

interface InsightPost {
  slug: string;
  title: string;
  excerpt: string;
  publishedDate: string;
}

export default function LatestPostsSidebar() {
  const [posts, setPosts] = useState<InsightPost[]>([]);

  useEffect(() => {
    const sorted = [...allInsights].sort(
      (a, b) =>
        new Date(b.publishedDate).getTime() -
        new Date(a.publishedDate).getTime()
    );
    setPosts(sorted.slice(0, 5));
  }, []);

  return (
    <aside className="hidden lg:block w-72 sticky top-28">
      <h3 className="text-xl font-semibold text-text-primary mb-4">
        Recent Posts
      </h3>

      <div className="space-y-5">
        {posts.map((post) => (
          <Link key={post.slug} href={`/playbook/${post.slug}`} className="block group">
            <div
              className="
                bg-surface
                p-3 rounded-lg 
                border border-border
                transition-all duration-300
                hover:border-accent
                hover:shadow-[0_0_18px_rgba(197,160,89,0.35)]
              "
            >
              <h4 className="text-sm text-text-primary group-hover:text-accent">
                {post.title}
              </h4>

              <p className="text-xs text-text-secondary/70 mt-1">
                {post.publishedDate}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
}


