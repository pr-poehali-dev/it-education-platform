import ArticleCard from "./ArticleCard";
import { Button } from "@/components/ui/button";

const ArticlesFeed = () => {
  const articles = [
    {
      title: "Основы Docker для веб-разработчиков",
      excerpt:
        "Изучаем контейнеризацию приложений с помощью Docker. Рассматриваем основные команды, создание Dockerfile и docker-compose.",
      author: {
        name: "Алексей Петров",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      },
      publishDate: "2 дня назад",
      readTime: "10 мин",
      tags: ["Docker", "DevOps", "Backend"],
      rating: 4.6,
      comments: 18,
    },
    {
      title: "Оптимизация производительности React приложений",
      excerpt:
        "Практические советы по улучшению производительности React приложений: мемоизация, lazy loading, профилирование.",
      author: {
        name: "Мария Сидорова",
        avatar:
          "https://images.unsplash.com/photo-1494790108755-2616b332c63c?w=100&h=100&fit=crop&crop=face",
      },
      publishDate: "3 дня назад",
      readTime: "12 мин",
      tags: ["React", "Performance", "Frontend"],
      rating: 4.8,
      comments: 34,
    },
    {
      title: "GraphQL vs REST: Что выбрать в 2024?",
      excerpt:
        "Сравниваем два подхода к построению API. Разбираем преимущества и недостатки каждого решения.",
      author: {
        name: "Дмитрий Козлов",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      },
      publishDate: "5 дней назад",
      readTime: "8 мин",
      tags: ["GraphQL", "REST", "API"],
      rating: 4.7,
      comments: 25,
    },
    {
      title: "Безопасность веб-приложений: OWASP Top 10",
      excerpt:
        "Разбираем самые распространенные уязвимости веб-приложений и способы их предотвращения.",
      author: {
        name: "Елена Новикова",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      },
      publishDate: "1 неделю назад",
      readTime: "15 мин",
      tags: ["Security", "OWASP", "WebDev"],
      rating: 4.9,
      comments: 42,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Последние статьи
            </h2>
            <p className="text-xl text-gray-600">
              Актуальные материалы от экспертов индустрии
            </p>
          </div>
          <Button variant="outline">Все статьи</Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ArticleCard {...article} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesFeed;
