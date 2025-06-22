import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Icon from "@/components/ui/icon";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: "/", label: "Главная" },
    { path: "/blog", label: "Блог" },
    { path: "/courses", label: "Курсы" },
    { path: "/forum", label: "Форум" },
    { path: "/about", label: "О нас" },
    { path: "/contacts", label: "Контакты" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Icon name="GraduationCap" className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold">EduPlatform</span>
        </Link>

        {/* Десктопная навигация */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Блог</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[400px]">
                  <NavigationMenuLink asChild>
                    <Link
                      to="/blog"
                      className="block select-none space-y-1 rounded-md p-3 hover:bg-accent"
                    >
                      <div className="text-sm font-medium">Все статьи</div>
                      <p className="line-clamp-2 text-sm text-muted-foreground">
                        Последние публикации по IT-тематике
                      </p>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/blog?category=Интернет"
                      className="block select-none space-y-1 rounded-md p-3 hover:bg-accent"
                    >
                      <div className="text-sm font-medium">Интернет</div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/blog?category=Кибербезопасность"
                      className="block select-none space-y-1 rounded-md p-3 hover:bg-accent"
                    >
                      <div className="text-sm font-medium">
                        Кибербезопасность
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/blog?category=ИИ"
                      className="block select-none space-y-1 rounded-md p-3 hover:bg-accent"
                    >
                      <div className="text-sm font-medium">
                        Искусственный интеллект
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Курсы</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[400px]">
                  <NavigationMenuLink asChild>
                    <Link
                      to="/courses"
                      className="block select-none space-y-1 rounded-md p-3 hover:bg-accent"
                    >
                      <div className="text-sm font-medium">Все курсы</div>
                      <p className="line-clamp-2 text-sm text-muted-foreground">
                        Обучающие программы для всех уровней
                      </p>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/courses?level=Для новичков"
                      className="block select-none space-y-1 rounded-md p-3 hover:bg-accent"
                    >
                      <div className="text-sm font-medium">Для новичков</div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/courses?level=Продвинутые"
                      className="block select-none space-y-1 rounded-md p-3 hover:bg-accent"
                    >
                      <div className="text-sm font-medium">Продвинутые</div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/courses?free=true"
                      className="block select-none space-y-1 rounded-md p-3 hover:bg-accent"
                    >
                      <div className="text-sm font-medium">Бесплатные</div>
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {navItems.slice(3).map((item) => (
              <NavigationMenuItem key={item.path}>
                <Link
                  to={item.path}
                  className={`group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                    isActive(item.path) ? "text-primary" : ""
                  }`}
                >
                  {item.label}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            <Icon name="Bell" className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="sm">
            <Icon name="User" className="h-5 w-5" />
          </Button>

          {/* Мобильное меню */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="sm">
                <Icon name="Menu" className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Навигация</SheetTitle>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg hover:text-primary ${
                      isActive(item.path) ? "text-primary font-medium" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
