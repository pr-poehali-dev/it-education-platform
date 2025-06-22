import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

interface TrendingCardProps {
  title: string;
  description: string;
  category: string;
  readTime: string;
  rating: number;
  comments: number;
  image: string;
}

const TrendingCard = ({
  title,
  description,
  category,
  readTime,
  rating,
  comments,
  image,
}: TrendingCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      <div className="relative h-48 bg-gradient-to-r from-blue-500 to-purple-600">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-4 left-4">
          <Badge className="bg-white text-gray-900">{category}</Badge>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Icon name="Clock" className="w-4 h-4 mr-1" />
              {readTime}
            </div>
            <div className="flex items-center">
              <Icon name="Star" className="w-4 h-4 mr-1 text-yellow-500" />
              {rating}
            </div>
            <div className="flex items-center">
              <Icon name="MessageCircle" className="w-4 h-4 mr-1" />
              {comments}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
