import TrendingCard from "./TrendingCard";

const TrendingSection = () => {
  const trendingPosts = [
    {
      title: "React 19: Новые возможности и изменения",
      description:
        "Обзор ключевых нововведений в React 19, включая Server Components и новые хуки",
      category: "React",
      readTime: "8 мин",
      rating: 4.8,
      comments: 23,
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=200&fit=crop",
    },
    {
      title: "TypeScript в 2024: Лучшие практики",
      description:
        "Современные подходы к типизации и организации TypeScript проектов",
      category: "TypeScript",
      readTime: "12 мин",
      rating: 4.9,
      comments: 41,
      image:
        "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=400&h=200&fit=crop",
    },
    {
      title: "Микросервисы vs Монолит: Когда использовать",
      description: "Сравнение архитектурных подходов и рекомендации по выбору",
      category: "Архитектура",
      readTime: "15 мин",
      rating: 4.7,
      comments: 67,
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Популярные статьи
          </h2>
          <p className="text-xl text-gray-600">
            Самые обсуждаемые материалы недели
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trendingPosts.map((post, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <TrendingCard {...post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
