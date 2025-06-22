import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Icon from "@/components/ui/icon";
import { mockArticles, mockComments } from "@/lib/mockData";

const BlogPost = () => {
  const { id } = useParams();
  const article = mockArticles.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Статья не найдена</h1>
          <Button asChild>
            <Link to="/blog">Вернуться к блогу</Link>
          </Button>
        </div>
      </div>
    );
  }

  const relatedArticles = mockArticles
    .filter((a) => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <article className="container py-12 max-w-4xl">
        {/* Хлебные крошки */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-foreground">
            Главная
          </Link>
          <Icon name="ChevronRight" className="h-4 w-4" />
          <Link to="/blog" className="hover:text-foreground">
            Блог
          </Link>
          <Icon name="ChevronRight" className="h-4 w-4" />
          <span>{article.category}</span>
        </nav>

        {/* Заголовок статьи */}
        <div className="mb-8">
          <Badge className="mb-4">{article.category}</Badge>
          <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
          <p className="text-xl text-muted-foreground mb-6">
            {article.excerpt}
          </p>

          {/* Мета информация */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-medium">{article.author.name}</p>
                <p className="text-sm text-muted-foreground">
                  {new Date(article.publishDate).toLocaleDateString("ru-RU")}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Icon name="Clock" className="h-4 w-4" />
                {article.readTime} мин
              </div>
              <div className="flex items-center gap-1">
                <Icon name="Eye" className="h-4 w-4" />
                {article.views}
              </div>
              <div className="flex items-center gap-1">
                <Icon name="Heart" className="h-4 w-4" />
                {article.likes}
              </div>
            </div>
          </div>

          {/* Кнопки действий */}
          <div className="flex items-center gap-2 mb-8">
            <Button variant="outline" size="sm">
              <Icon name="Heart" className="h-4 w-4 mr-2" />
              Нравится
            </Button>
            <Button variant="outline" size="sm">
              <Icon name="Share" className="h-4 w-4 mr-2" />
              Поделиться
            </Button>
            <Button variant="outline" size="sm">
              <Icon name="Bookmark" className="h-4 w-4 mr-2" />
              Сохранить
            </Button>
          </div>
        </div>

        {/* Изображение статьи */}
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
        />

        {/* Содержание статьи */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="lead">{article.content}</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <h2>Основные принципы</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <ul>
            <li>Первый важный пункт</li>
            <li>Второй ключевой момент</li>
            <li>Третий основной принцип</li>
          </ul>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>

        {/* Теги */}
        <div className="flex items-center gap-2 mb-8">
          <span className="text-sm font-medium">Теги:</span>
          {article.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Автор */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-4">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <CardTitle>{article.author.name}</CardTitle>
                <p className="text-muted-foreground">
                  {article.author.bio || "Опытный автор и эксперт в области IT"}
                </p>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Комментарии */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-6">
            Комментарии ({mockComments.length})
          </h3>
          <div className="space-y-6">
            {mockComments.map((comment) => (
              <Card key={comment.id}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <img
                      src={comment.author.avatar}
                      alt={comment.author.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium">
                          {comment.author.name}
                        </span>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Icon
                              key={i}
                              name="Star"
                              className={`h-4 w-4 ${
                                i < comment.rating
                                  ? "text-yellow-500 fill-current"
                                  : "text-muted-foreground"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {new Date(comment.createdAt).toLocaleDateString(
                            "ru-RU",
                          )}
                        </span>
                      </div>
                      <p className="text-muted-foreground">{comment.content}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Похожие статьи */}
        {relatedArticles.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold mb-6">Похожие статьи</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <Card
                  key={relatedArticle.id}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader className="p-0">
                    <img
                      src={relatedArticle.imageUrl}
                      alt={relatedArticle.title}
                      className="w-full h-32 object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent className="p-4">
                    <Badge className="mb-2">{relatedArticle.category}</Badge>
                    <CardTitle className="text-sm mb-2 hover:text-primary">
                      <Link to={`/blog/${relatedArticle.id}`}>
                        {relatedArticle.title}
                      </Link>
                    </CardTitle>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{relatedArticle.author.name}</span>
                      <span>{relatedArticle.readTime} мин</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
};

export default BlogPost;
