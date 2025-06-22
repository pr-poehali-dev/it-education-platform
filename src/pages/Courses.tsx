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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Icon from "@/components/ui/icon";
import { mockCourses } from "@/lib/mockData";

const Courses = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("rating");

  const selectedLevel = searchParams.get("level");
  const isFreeFilter = searchParams.get("free") === "true";

  const levels = ["Все", "Для новичков", "Продвинутые"];

  const filteredCourses = mockCourses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel =
      !selectedLevel ||
      selectedLevel === "Все" ||
      course.level === selectedLevel;
    const matchesFree = !isFreeFilter || course.isFree;
    return matchesSearch && matchesLevel && matchesFree;
  });

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.rating - a.rating;
      case "price":
        return a.price - b.price;
      case "students":
        return b.studentsCount - a.studentsCount;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container py-12">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Курсы</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Практические курсы от экспертов индустрии. Изучайте современные
            технологии и развивайте карьеру в IT
          </p>
        </div>

        {/* Поиск и фильтры */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Input
                placeholder="Поиск курсов..."
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
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Сортировать по" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating">По рейтингу</SelectItem>
              <SelectItem value="price">По цене</SelectItem>
              <SelectItem value="students">По популярности</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Фильтры по уровню */}
        <Tabs defaultValue={selectedLevel || "Все"} className="mb-8">
          <TabsList className="grid w-full grid-cols-3 max-w-md">
            {levels.map((level) => (
              <TabsTrigger key={level} value={level} asChild>
                <Link
                  to={level === "Все" ? "/courses" : `/courses?level=${level}`}
                >
                  {level}
                </Link>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Дополнительные фильтры */}
        <div className="flex gap-2 mb-8">
          <Button
            variant={isFreeFilter ? "default" : "outline"}
            size="sm"
            asChild
          >
            <Link to="/courses?free=true">Бесплатные курсы</Link>
          </Button>
          <Button variant="outline" size="sm">
            <Icon name="Filter" className="h-4 w-4 mr-2" />
            Фильтры
          </Button>
        </div>

        {/* Сетка курсов */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedCourses.map((course) => (
            <Card key={course.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <img
                  src={course.imageUrl}
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant={course.isFree ? "secondary" : "default"}>
                    {course.isFree ? "Бесплатно" : `${course.price}₽`}
                  </Badge>
                  {course.originalPrice && !course.isFree && (
                    <Badge
                      variant="outline"
                      className="line-through text-muted-foreground"
                    >
                      {course.originalPrice}₽
                    </Badge>
                  )}
                  <Badge variant="outline">{course.level}</Badge>
                </div>

                <CardTitle className="mb-2 hover:text-primary">
                  <Link to={`/courses/${course.id}`}>{course.title}</Link>
                </CardTitle>
                <CardDescription className="mb-4">
                  {course.description}
                </CardDescription>

                <div className="flex items-center gap-2 mb-4">
                  <img
                    src={course.instructor.avatar}
                    alt={course.instructor.name}
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="text-sm text-muted-foreground">
                    {course.instructor.name}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" className="h-4 w-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Users" className="h-4 w-4" />
                    {course.studentsCount} студентов
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    <Icon
                      name="Star"
                      className="h-4 w-4 fill-current text-yellow-500"
                    />
                    <span className="font-medium">{course.rating}</span>
                  </div>
                  <div className="flex gap-1">
                    {course.technology.slice(0, 2).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full" asChild>
                  <Link to={`/courses/${course.id}`}>
                    {course.isFree ? "Начать изучение" : "Подробнее"}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {sortedCourses.length === 0 && (
          <div className="text-center py-12">
            <Icon
              name="BookOpen"
              className="h-12 w-12 text-muted-foreground mx-auto mb-4"
            />
            <p className="text-lg text-muted-foreground">Курсы не найдены</p>
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

export default Courses;
