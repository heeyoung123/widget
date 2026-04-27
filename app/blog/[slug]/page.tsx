import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogPosts";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    return {
      title: "Blog | PMT",
    };
  }

  return {
    title: `${post.title} | PMT Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((entry) => entry.slug !== post.slug)
    .slice(0, 2);

  return (
    <main className="min-h-screen bg-[#030303] text-white">
      <header className="mx-auto flex max-w-[1280px] items-center justify-between px-6 pt-7 text-sm md:px-10">
        <Link href="/" className="font-semibold uppercase text-white">
          PMT
        </Link>
        <Link
          href="/blog"
          className="text-white/50 transition-colors hover:text-white"
        >
          Back to blog
        </Link>
      </header>

      <article className="pb-24">
        <section className="mx-auto max-w-[1120px] px-6 pt-24 text-center md:px-10 md:pt-32">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/45">
            {post.category}
          </p>
          <h1 className="mx-auto mt-7 max-w-[680px] text-[clamp(1.75rem,3.2vw,2.8rem)] font-semibold leading-[1.14] text-white">
            {post.title}
          </h1>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-white/48">
            <span>{post.publishedAt}</span>
            <span aria-hidden className="text-white/22">
              /
            </span>
            <span>{post.author}</span>
            <span aria-hidden className="text-white/22">
              /
            </span>

          </div>
        </section>

        <section className="mx-auto mt-16 max-w-[1280px] px-4 md:px-8">
          <div
            className={`relative h-[46vw] min-h-[280px] max-h-[580px] overflow-hidden rounded-lg ${post.imageStyle}`}
          >
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.26),transparent_38%,rgba(0,0,0,0.42)),radial-gradient(circle_at_50%_40%,transparent_0%,rgba(0,0,0,0.18)_68%)]" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-left md:bottom-8 md:left-8 md:right-8">
              <p className="max-w-[24rem] text-xs font-medium uppercase tracking-[0.16em] text-white/72">
                {post.eyebrow}
              </p>
              <p className="hidden max-w-[18rem] text-right text-sm leading-6 text-white/58 md:block">
                {post.excerpt}
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-[760px] px-6 md:px-10">
          <div className="space-y-14">
            <div className="space-y-7 text-[1.08rem] leading-8 text-white/68 md:text-[1.18rem] md:leading-9">
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-semibold leading-none text-white">
                Introduction
              </h2>
              <p>{post.intro}</p>
            </div>

            {post.sections.map((section) => (
              <section key={section.heading} className="space-y-6">
                <h3 className="text-2xl font-semibold leading-tight text-white md:text-3xl">
                  {section.heading}
                </h3>
                <div className="space-y-5 text-[1.05rem] leading-8 text-white/64 md:text-[1.12rem] md:leading-9">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}

            <div
              className={`h-[42vw] min-h-[220px] max-h-[420px] overflow-hidden rounded-lg ${post.imageStyle}`}
            >
              <div className="h-full w-full bg-[linear-gradient(120deg,rgba(0,0,0,0.32),transparent_45%,rgba(255,255,255,0.2)),radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.18),transparent_24%)]" />
            </div>

          </div>
        </section>
      </article>

      <section className="mx-auto max-w-[1120px] border-t border-white/12 px-6 py-16 md:px-10">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-3xl font-semibold text-white md:text-5xl">
            Related posts
          </h2>
          <Link
            href="/blog"
            className="hidden text-sm text-white/48 transition-colors hover:text-white md:inline"
          >
            View all
          </Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {relatedPosts.map((relatedPost) => (
            <Link
              key={relatedPost.slug}
              href={`/blog/${relatedPost.slug}`}
              className="group overflow-hidden rounded-lg border border-white/12 bg-white/[0.03] transition-colors hover:border-white/28"
            >
              <div className={`h-48 ${relatedPost.imageStyle}`}>
                <div className="h-full bg-[linear-gradient(135deg,rgba(255,255,255,0.2),transparent_45%,rgba(0,0,0,0.35))]" />
              </div>
              <div className="space-y-4 p-5">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/42">
                  {relatedPost.publishedAt}
                </p>
                <h3 className="text-xl font-semibold leading-tight text-white transition-colors group-hover:text-white/76">
                  {relatedPost.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
