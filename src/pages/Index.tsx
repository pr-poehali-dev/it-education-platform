import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Icon from "@/components/ui/icon";
import { mockArticles, mockCourses } from "@/lib/mockData";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navbar />

      {/* Hero секция */}
      <section className="container py-24 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Изучайте IT-технологии
            <span className="text-primary"> с экспертами</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Практические курсы, экспертные статьи и активное сообщество
            разработчиков для вашего профессионального роста
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/courses">
                <Icon name="Play" className="mr-2 h-5 w-5" />
                Начать обучение
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/blog">
                <Icon name="BookOpen" className="mr-2 h-5 w-5" />
                Читать блог
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Статистика */}
      <section className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Студентов</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">25+</div>
            <div className="text-muted-foreground">Курсов</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">150+</div>
            <div className="text-muted-foreground">Статей</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Довольных студентов</div>
          </div>
        </div>
      </section>

      {/* Популярные курсы */}
      <section className="container py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Популярные курсы</h2>
          <Button variant="outline" asChild>
            <Link to="/courses">Все курсы</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockCourses.map((course) => (
            <Card key={course.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <img
                  src={course.imageUrl}
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant={course.isFree ? "secondary" : "default"}>
                    {course.isFree ? "Бесплатно" : `${course.price}₽`}
                  </Badge>
                  <Badge variant="outline">{course.level}</Badge>
                </div>
                <CardTitle className="mb-2">{course.title}</CardTitle>
                <CardDescription className="mb-4">
                  {course.description}
                </CardDescription>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" className="h-4 w-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon
                      name="Star"
                      className="h-4 w-4 fill-current text-yellow-500"
                    />
                    {course.rating}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Последние статьи */}
      <section className="container py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Последние статьи</h2>
          <Button variant="outline" asChild>
            <Link to="/blog">Все статьи</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockArticles.map((article) => (
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
                <Badge className="mb-2">{article.category}</Badge>
                <CardTitle className="mb-2">{article.title}</CardTitle>
                <CardDescription className="mb-4">
                  {article.excerpt}
                </CardDescription>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
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
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA секция */}
      <section className="container py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold mb-6">Готовы начать обучение?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Присоединяйтесь к сообществу разработчиков и начните свой путь в IT
            уже сегодня
          </p>
          <Button size="lg" asChild>
            <Link to="/courses">
              Выбрать курс
              <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Футер */}
      <footer className="border-t bg-muted/50">
        <div className="container py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="GraduationCap" className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">EduPlatform</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Платформа для изучения IT-технологий с экспертами
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Обучение</h3>
              <div className="space-y-2 text-sm">
                <Link to="/courses" className="block hover:text-primary">
                  Курсы
                </Link>
                <Link to="/blog" className="block hover:text-primary">
                  Блог
                </Link>
                <Link to="/forum" className="block hover:text-primary">
                  Форум
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <div className="space-y-2 text-sm">
                <Link to="/about" className="block hover:text-primary">
                  О нас
                </Link>
                <Link to="/contacts" className="block hover:text-primary">
                  Контакты
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Социальные сети</h3>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm">
                  <Icon name="Twitter" className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Icon name="Github" className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Icon name="Linkedin" className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 EduPlatform. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
