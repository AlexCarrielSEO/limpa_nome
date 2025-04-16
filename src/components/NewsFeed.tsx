import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface NewsItem {
  title: string;
  link: string;
  pubDate: string;
  image?: string;
  source: string;
}

interface NewsFeedProps {
  searchQuery?: string;
}

export default function NewsFeed({
  searchQuery = "limpa+nome",
}: NewsFeedProps) {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleItems, setVisibleItems] = useState(6);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        // Using a CORS proxy to fetch from Google News RSS
        const response = await fetch(
          `https://api.allorigins.win/get?url=${encodeURIComponent(
            `https://news.google.com/rss/search?q=${searchQuery}&hl=pt-BR&gl=BR&ceid=BR:pt-419`,
          )}`,
        );

        if (!response.ok) {
          throw new Error("Failed to fetch news");
        }

        const data = await response.json();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data.contents, "text/xml");
        const items = xmlDoc.querySelectorAll("item");

        const newsItems: NewsItem[] = [];

        items.forEach((item, index) => {
          // Take the first 8 items
          if (index < 8) {
            const title = item.querySelector("title")?.textContent || "";
            const link = item.querySelector("link")?.textContent || "";
            const pubDate = item.querySelector("pubDate")?.textContent || "";
            const source =
              item.querySelector("source")?.textContent || "Google News";

            // Generate a relevant image based on the news title
            const imageKeywords = encodeURIComponent(
              title.split(" ").slice(0, 3).join(" "),
            );
            const image = `https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=500&q=80`;

            newsItems.push({
              title,
              link,
              pubDate: new Date(pubDate).toLocaleDateString("pt-BR"),
              image,
              source,
            });
          }
        });

        setNews(newsItems);
      } catch (err) {
        console.error("Error fetching news:", err);
        setError(
          "Não foi possível carregar as notícias. Usando dados de exemplo.",
        );

        // Fallback data in case the API fails
        setNews([
          {
            title:
              "Novas técnicas de reabilitação para pacientes pós-AVC mostram resultados promissores",
            link: "#",
            pubDate: "15/05/2023",
            image:
              "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&q=80",
            source: "Saúde em Dia",
          },
          {
            title:
              "Fisioterapia domiciliar: como encontrar o profissional ideal para idosos",
            link: "#",
            pubDate: "02/06/2023",
            image:
              "https://images.unsplash.com/photo-1576765608866-5b51046452be?w=500&q=80",
            source: "Portal da Saúde",
          },
          {
            title:
              "Casas de repouso investem em programas de reabilitação cognitiva",
            link: "#",
            pubDate: "20/06/2023",
            image:
              "https://images.unsplash.com/photo-1576765608866-5b51046452be?w=500&q=80",
            source: "Jornal da Terceira Idade",
          },
          {
            title:
              "Reabilitação cardíaca: especialistas recomendam início precoce do tratamento",
            link: "#",
            pubDate: "25/06/2023",
            image:
              "https://images.unsplash.com/photo-1559757175-7cb057fba93c?w=500&q=80",
            source: "Saúde do Coração",
          },
          {
            title:
              "Tecnologia e reabilitação: aplicativos que auxiliam no tratamento domiciliar",
            link: "#",
            pubDate: "30/06/2023",
            image:
              "https://images.unsplash.com/photo-1551076805-e1869033e561?w=500&q=80",
            source: "Tech Saúde",
          },
          {
            title:
              "Reabilitação neurológica: novos protocolos melhoram qualidade de vida de pacientes",
            link: "#",
            pubDate: "05/07/2023",
            image:
              "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&q=80",
            source: "Neurociência Hoje",
          },
          {
            title:
              "Como escolher a melhor clínica de reabilitação para seu familiar idoso",
            link: "#",
            pubDate: "10/07/2023",
            image:
              "https://images.unsplash.com/photo-1576765608866-5b51046452be?w=500&q=80",
            source: "Guia da Terceira Idade",
          },
          {
            title:
              "Reabilitação pós-COVID: o que esperar e como encontrar tratamento adequado",
            link: "#",
            pubDate: "15/07/2023",
            image:
              "https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=500&q=80",
            source: "Saúde Respiratória",
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [searchQuery]);

  const loadMoreItems = () => {
    setVisibleItems((prevVisibleItems) =>
      Math.min(prevVisibleItems + 2, news.length),
    );
  };

  return (
    <div className="w-full py-10">
      {loading ? (
        // Loading skeleton for list
        <div className="w-full max-w-4xl mx-auto">
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <div
                key={`loading-${index}`}
                className="flex flex-col md:flex-row gap-4 mb-4 p-4 border-b border-gray-100"
              >
                <div className="w-full md:w-1/4 h-32 bg-gray-200 animate-pulse rounded-lg"></div>
                <div className="w-full md:w-3/4">
                  <div className="h-4 bg-gray-200 rounded animate-pulse mb-2 w-1/4"></div>
                  <div className="h-6 bg-gray-200 rounded animate-pulse mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <div className="w-full max-w-4xl mx-auto divide-y divide-gray-100">
          {news.slice(0, visibleItems).map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-4 py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors"
            >
              <div className="w-full md:w-1/4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
              <div className="w-full md:w-3/4 flex flex-col">
                <div className="flex items-center mb-1">
                  <span className="text-xs font-medium text-green-700 bg-green-50 px-2 py-0.5 rounded">
                    {item.source}
                  </span>
                  <span className="text-xs text-gray-500 ml-2">
                    {item.pubDate}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-1 text-gray-800">
                  {item.title}
                </h3>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto"
                >
                  <Button
                    variant="link"
                    className="text-blue-600 p-0 h-auto text-sm"
                  >
                    Ler mais
                  </Button>
                </a>
              </div>
            </div>
          ))}

          {visibleItems < news.length && (
            <div className="text-center mt-8">
              <Button
                onClick={loadMoreItems}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full"
              >
                Ver Mais Notícias
              </Button>
            </div>
          )}
        </div>
      )}
      {error && (
        <div className="text-center text-sm text-gray-500 mt-4">{error}</div>
      )}
    </div>
  );
}
