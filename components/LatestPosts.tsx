"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { allInsights } from "@/app/playbook/insights-data";

interface InsightPost {
  slug: string;
  title: string;
  excerpt: string;
  publishedDate: string;
  readTime?: string;
  coverImage?: string;
}

export default function LatestPosts() {
  const [posts, setPosts] = useState<InsightPost[]>([]);

  useEffect(() => {
    const sorted = [...allInsights].sort(
      (a, b) =>
        new Date(b.publishedDate).getTime() -
        new Date(a.publishedDate).getTime()
    );
    setPosts(sorted.slice(0, 3));
  }, []);

  return (
    <section className="max-w-6xl mx-auto mt-20 px-4">
      <h2 className="text-3xl font-bold tracking-tight text-text-primary mb-8">
        Latest Guides &amp; Playbooks
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post) => {
          // Check if this is a blog post
          const isBlogPost = post.slug === 'design-technical-jargon-explained'
          const href = isBlogPost ? `/playbook/${post.slug}` : `/playbook/${post.slug}`
          
          return (
          <Link key={post.slug} href={href} className="group">
            <div
              className="
                rounded-xl overflow-hidden 
                bg-surface
                border border-border
                shadow-[0_0_18px_rgba(0,0,0,0.35)]
                transform transition-all duration-300
                group-hover:-translate-y-1
                group-hover:border-accent
                group-hover:shadow-[0_0_26px_rgba(197,160,89,0.35)]
              "
            >
              {post.coverImage && (
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="h-44 w-full object-cover"
                />
              )}

              <div className="p-5">
                <h3
                  className="
                    text-lg font-semibold text-text-primary
                    group-hover:text-accent transition-colors
                  "
                >
                  {post.title}
                </h3>

                <p className="text-sm text-text-secondary mt-3 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="mt-4 text-xs text-text-secondary/70 flex items-center gap-2">
                  <span>{post.publishedDate}</span>
                  <span className="text-surface">•</span>
                  <span>{post.readTime || "5 min read"}</span>
                </div>
              </div>
            </div>
          </Link>
          )
        })}
      </div>
    </section>
  );
}


