import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrendingSection from "@/components/TrendingSection";
import ArticlesFeed from "@/components/ArticlesFeed";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <TrendingSection />
      <ArticlesFeed />
      <Footer />
    </div>
  );
};

export default Index;
