import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Icon name="Code" className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">IT Portal</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Главная
            </Link>
            <Link
              to="/blog"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Блог
            </Link>
            <Link
              to="/courses"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Курсы
            </Link>
            <Link
              to="/community"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Сообщество
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              О нас
            </Link>
          </nav>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Icon name="Search" className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Icon name="Bell" className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm">
              Войти
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              Регистрация
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-blue-600">
                Главная
              </Link>
              <Link to="/blog" className="text-gray-700 hover:text-blue-600">
                Блог
              </Link>
              <Link to="/courses" className="text-gray-700 hover:text-blue-600">
                Курсы
              </Link>
              <Link
                to="/community"
                className="text-gray-700 hover:text-blue-600"
              >
                Сообщество
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600">
                О нас
              </Link>
              <div className="flex space-x-2 pt-4">
                <Button variant="outline" size="sm" className="flex-1">
                  Войти
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-blue-600 hover:bg-blue-700"
                >
                  Регистрация
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
