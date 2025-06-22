import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Icon name="Code" className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">IT Portal</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Образовательная платформа для изучения IT технологий. Статьи,
              курсы, сообщество разработчиков.
            </p>
            <div className="flex space-x-4">
              <Icon
                name="Github"
                className="w-5 h-5 cursor-pointer hover:text-blue-400"
              />
              <Icon
                name="Twitter"
                className="w-5 h-5 cursor-pointer hover:text-blue-400"
              />
              <Icon
                name="Linkedin"
                className="w-5 h-5 cursor-pointer hover:text-blue-400"
              />
              <Icon
                name="Youtube"
                className="w-5 h-5 cursor-pointer hover:text-blue-400"
              />
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Разделы</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white">
                  Блог
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-white">
                  Курсы
                </Link>
              </li>
              <li>
                <Link
                  to="/community"
                  className="text-gray-300 hover:text-white"
                >
                  Сообщество
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">
                  О нас
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Поддержка</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-gray-300 hover:text-white">
                  Помощь
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">
                  Контакты
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white">
                  Приватность
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white">
                  Условия
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 IT Portal. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
