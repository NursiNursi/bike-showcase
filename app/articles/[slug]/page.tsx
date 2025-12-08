import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { findArticleBySlug, getAllArticleSlugs } from "@/utils";

type PageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const slugs = getAllArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const article = findArticleBySlug(params.slug);
  const title = article?.title ?? "Artikel";
  const description = article?.content
    ? article.content.slice(0, 160)
    : "Detail artikel motor Honda.";
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: article?.coverImage
        ? [{ url: `/${article.coverImage}` }]
        : undefined,
    },
  };
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const article = findArticleBySlug(params.slug);
  if (!article) return notFound();

  return (
    <div className="relative z-0 pt-20 sm:pt-24 md:pt-28 px-4 md:px-8 lg:px-12 pb-12 max-w-4xl mx-auto">
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-3 py-2 border rounded-full border-primary-red text-sm text-primary-red hover:bg-red-50"
          aria-label="Kembali"
        >
          <span className="relative w-5 h-5">
            <Image
              src="/right-chevron.png"
              alt="Kembali"
              fill
              className="object-contain rotate-180"
            />
          </span>
          <span>Kembali</span>
        </Link>
      </div>

      <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold">
        {article.title}
      </h1>

      <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-gray-600">
        {"author" in article && (article as any).author && (
          <span className="font-medium">{(article as any).author}</span>
        )}
        {"publishedAt" in article && (article as any).publishedAt && (
          <span>{(article as any).publishedAt}</span>
        )}
      </div>

      <div className="mt-6 relative w-full h-[220px] sm:h-[300px] md:h-[380px] rounded-2xl overflow-hidden">
        <Image
          src={`/${article.coverImage}`}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <article className="mt-8 text-base sm:text-lg leading-relaxed text-gray-800 whitespace-pre-wrap">
        {article.content}
      </article>

      <p className="italic mt-8">Sumber: Kompas Otomotif</p>
    </div>
  );
}

