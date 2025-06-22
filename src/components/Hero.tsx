import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Всё об IT и технологиях
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Изучай программирование, следи за трендами, общайся с сообществом
            разработчиков
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              <Icon name="Play" className="w-5 h-5 mr-2" />
              Начать обучение
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              <Icon name="Users" className="w-5 h-5 mr-2" />
              Присоединиться к сообществу
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">15K+</div>
              <div className="text-blue-200">Активных пользователей</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-blue-200">IT статей</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">120+</div>
              <div className="text-blue-200">Курсов</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
