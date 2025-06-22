import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Icon from "@/components/ui/icon";
import { mockArticles } from "@/lib/mockData";

const Blog = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const selectedCategory = searchParams.get("category");

  const categories = ["Все", "Интернет", "Кибербезопасность", "ИИ"];

  const filteredArticles = mockArticles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      !selectedCategory ||
      selectedCategory === "Все" ||
      article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container py-12">
        {/* Заголовок и поиск */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Блог</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Экспертные статьи о современных IT-технологиях, трендах и лучших
            практиках
          </p>
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Input
                placeholder="Поиск статей..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
              <Icon
                name="Search"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"
              />
            </div>
          </div>
        </div>

        {/* Фильтры по категориям */}
        <Tabs defaultValue={selectedCategory || "Все"} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} asChild>
                <Link
                  to={
                    category === "Все" ? "/blog" : `/blog?category=${category}`
                  }
                >
                  {category}
                </Link>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Сетка статей */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <Card
              key={article.id}
              className="hover:shadow-lg transition-shadow"
            >
              <CardHeader className="p-0">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Badge>{article.category}</Badge>
                  {article.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="mb-2 hover:text-primary">
                  <Link to={`/blog/${article.id}`}>{article.title}</Link>
                </CardTitle>
                <CardDescription className="mb-4">
                  {article.excerpt}
                </CardDescription>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <img
                      src={article.author.avatar}
                      alt={article.author.name}
                      className="w-6 h-6 rounded-full"
                    />
                    {article.author.name}
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" className="h-4 w-4" />
                    {article.readTime} мин
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Icon name="Eye" className="h-4 w-4" />
                      {article.views}
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Heart" className="h-4 w-4" />
                      {article.likes}
                    </div>
                  </div>
                  <span>
                    {new Date(article.publishDate).toLocaleDateString("ru-RU")}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <Icon
              name="FileText"
              className="h-12 w-12 text-muted-foreground mx-auto mb-4"
            />
            <p className="text-lg text-muted-foreground">Статьи не найдены</p>
          </div>
        )}

        {/* Пагинация */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" disabled>
              <Icon name="ChevronLeft" className="h-4 w-4" />
              Предыдущая
            </Button>
            <Button variant="outline" size="sm">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <Button variant="outline" size="sm">
              Следующая
              <Icon name="ChevronRight" className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
