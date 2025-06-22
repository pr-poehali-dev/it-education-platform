import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  author: {
    name: string;
    avatar: string;
  };
  publishDate: string;
  readTime: string;
  tags: string[];
  rating: number;
  comments: number;
}

const ArticleCard = ({
  title,
  excerpt,
  author,
  publishDate,
  readTime,
  tags,
  rating,
  comments,
}: ArticleCardProps) => {
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
      <div className="flex items-center mb-4">
        <Avatar className="w-10 h-10 mr-3">
          <AvatarImage src={author.avatar} alt={author.name} />
          <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <div className="font-medium text-gray-900">{author.name}</div>
          <div className="text-sm text-gray-500">{publishDate}</div>
        </div>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 cursor-pointer">
        {title}
      </h3>

      <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="text-xs">
            {tag}
          </Badge>
        ))}
      </div>

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
        <Icon
          name="Bookmark"
          className="w-4 h-4 cursor-pointer hover:text-blue-600"
        />
      </div>
    </article>
  );
};

export default ArticleCard;
