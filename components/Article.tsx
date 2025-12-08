import Image from "next/image";
import Link from "next/link";
import { articles } from "@/constants/article";
import { slugifyArticleTitle } from "@/utils";

const Article = () => {
  return (
    <div className="mt-12 padding-x padding-y max-width" id="discover">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-0">
        <div className="home__text-container text-center lg:text-left">
          <h1 className="text-4xl font-extrabold">Baca Artikel</h1>
          <p className="text-xl text-gray-500 mb-2">
            Beberapa Artikel yang dapat membantu Anda memahami lebih lanjut
            mengenai sepeda motor.
          </p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, idx) => (
          <div
            key={idx}
            className="group bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="relative h-48 sm:h-56">
              <Image
                src={`/${article.coverImage}`}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">{article.title}</h3>
              <p className="mt-2 text-gray-600">
                {article.content.length > 160
                  ? `${article.content.slice(0, 160)}...`
                  : article.content}
              </p>
              <div className="mt-4">
                <Link
                  href={`/articles/${slugifyArticleTitle(article.title)}`}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-primary-red text-white hover:bg-red-700 transition-colors"
                >
                  Baca Selengkapnya
                  <span className="ml-2 inline-block">
                    <Image
                      src="/right-arrow.svg"
                      alt="read more"
                      width={20}
                      height={20}
                    />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Article;
