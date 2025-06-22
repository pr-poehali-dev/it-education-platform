// Типы данных
export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: "student" | "instructor" | "admin";
  joinDate: string;
  bio?: string;
}

export interface Article {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: User;
  publishDate: string;
  readTime: number;
  category: "Интернет" | "Кибербезопасность" | "ИИ";
  tags: string[];
  imageUrl: string;
  views: number;
  likes: number;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: User;
  price: number;
  originalPrice?: number;
  duration: string;
  level: "Для новичков" | "Продвинутые";
  rating: number;
  studentsCount: number;
  imageUrl: string;
  curriculum: string[];
  isFree: boolean;
  technology: string[];
}

export interface ForumPost {
  id: string;
  title: string;
  content: string;
  author: User;
  category: string;
  createdAt: string;
  replies: number;
  views: number;
  lastActivity: string;
  isSticky?: boolean;
}

export interface Comment {
  id: string;
  content: string;
  author: User;
  createdAt: string;
  rating: number;
  replies?: Comment[];
}

// Моковые данные
export const mockUsers: User[] = [
  {
    id: "1",
    name: "Анна Петрова",
    email: "anna@example.com",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612e52f?w=150",
    role: "instructor",
    joinDate: "2023-01-15",
    bio: "Эксперт по кибербезопасности с 10-летним опытом",
  },
  {
    id: "2",
    name: "Михаил Иванов",
    email: "mikhail@example.com",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    role: "instructor",
    joinDate: "2023-02-20",
    bio: "Разработчик ИИ и машинного обучения",
  },
  {
    id: "3",
    name: "Елена Сидорова",
    email: "elena@example.com",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    role: "student",
    joinDate: "2023-03-10",
  },
];

export const mockArticles: Article[] = [
  {
    id: "1",
    title: "Основы кибербезопасности в 2024 году",
    content: "Подробное руководство по защите данных...",
    excerpt:
      "Изучаем современные методы защиты информации и предотвращения кибератак.",
    author: mockUsers[0],
    publishDate: "2024-01-15",
    readTime: 8,
    category: "Кибербезопасность",
    tags: ["безопасность", "защита данных", "хакеры"],
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
    views: 1250,
    likes: 89,
  },
  {
    id: "2",
    title: "Искусственный интеллект в повседневной жизни",
    content: "Как ИИ меняет наш мир...",
    excerpt:
      "Обзор применения искусственного интеллекта в различных сферах жизни.",
    author: mockUsers[1],
    publishDate: "2024-01-10",
    readTime: 12,
    category: "ИИ",
    tags: ["ИИ", "машинное обучение", "технологии"],
    imageUrl:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    views: 2100,
    likes: 156,
  },
  {
    id: "3",
    title: "Веб-разработка: тренды 2024",
    content: "Обзор современных технологий веб-разработки...",
    excerpt:
      "Рассматриваем новые фреймворки и подходы к созданию веб-приложений.",
    author: mockUsers[0],
    publishDate: "2024-01-05",
    readTime: 6,
    category: "Интернет",
    tags: ["веб-разработка", "фреймворки", "React"],
    imageUrl:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800",
    views: 890,
    likes: 67,
  },
];

export const mockCourses: Course[] = [
  {
    id: "1",
    title: "React для начинающих",
    description: "Изучите основы React и создайте свое первое приложение",
    instructor: mockUsers[1],
    price: 4500,
    originalPrice: 6000,
    duration: "6 недель",
    level: "Для новичков",
    rating: 4.8,
    studentsCount: 324,
    imageUrl:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
    curriculum: [
      "Основы React",
      "Компоненты и Props",
      "State и жизненный цикл",
      "События и формы",
      "Роутинг",
    ],
    isFree: false,
    technology: ["React", "JavaScript", "HTML/CSS"],
  },
  {
    id: "2",
    title: "Кибербезопасность на практике",
    description: "Комплексный курс по защите информации и этичному хакингу",
    instructor: mockUsers[0],
    price: 0,
    duration: "8 недель",
    level: "Продвинутые",
    rating: 4.9,
    studentsCount: 198,
    imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800",
    curriculum: [
      "Анализ уязвимостей",
      "Сетевая безопасность",
      "Криптография",
      "Пентестинг",
      "Социальная инженерия",
    ],
    isFree: true,
    technology: ["Security", "Linux", "Python"],
  },
  {
    id: "3",
    title: "Машинное обучение с Python",
    description: "Практический курс по созданию ML-моделей",
    instructor: mockUsers[1],
    price: 7200,
    duration: "10 недель",
    level: "Продвинутые",
    rating: 4.7,
    studentsCount: 156,
    imageUrl: "https://images.unsplash.com/photo-1555949963-f7fe82260b4e?w=800",
    curriculum: [
      "Основы ML",
      "Supervised Learning",
      "Unsupervised Learning",
      "Deep Learning",
      "Computer Vision",
    ],
    isFree: false,
    technology: ["Python", "TensorFlow", "Scikit-learn"],
  },
];

export const mockForumPosts: ForumPost[] = [
  {
    id: "1",
    title: "Лучшие практики React в 2024",
    content: "Обсуждаем современные подходы к разработке на React...",
    author: mockUsers[2],
    category: "Веб-разработка",
    createdAt: "2024-01-20T10:30:00Z",
    replies: 23,
    views: 456,
    lastActivity: "2024-01-22T15:20:00Z",
    isSticky: true,
  },
  {
    id: "2",
    title: "Как защитить API от атак?",
    content: "Нужны советы по безопасности API...",
    author: mockUsers[1],
    category: "Кибербезопасность",
    createdAt: "2024-01-19T14:15:00Z",
    replies: 8,
    views: 234,
    lastActivity: "2024-01-21T09:45:00Z",
  },
  {
    id: "3",
    title: "Выбор первого языка программирования",
    content: "Помогите определиться с языком для начала изучения...",
    author: mockUsers[2],
    category: "Общие вопросы",
    createdAt: "2024-01-18T16:20:00Z",
    replies: 15,
    views: 678,
    lastActivity: "2024-01-20T12:30:00Z",
  },
];

export const mockComments: Comment[] = [
  {
    id: "1",
    content: "Отличная статья! Очень полезная информация.",
    author: mockUsers[2],
    createdAt: "2024-01-16T10:30:00Z",
    rating: 5,
  },
  {
    id: "2",
    content: "Хотелось бы больше примеров кода.",
    author: mockUsers[1],
    createdAt: "2024-01-16T14:20:00Z",
    rating: 4,
  },
];
