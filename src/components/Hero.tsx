import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-food.jpg";

const Hero = () => {
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-secondary/85 to-primary/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          كل ونام
        </h1>
        <p className="text-2xl md:text-3xl mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          طعم الأصالة في كل لقمة
        </p>
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          استمتع بأشهى الأطباق العربية الأصيلة في أجواء دافئة ومريحة تذكرك بطعم البيت
        </p>
        <Button 
          onClick={scrollToMenu}
          size="lg"
          className="bg-white text-primary hover:bg-white/90 text-xl px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500"
        >
          اكتشف القائمة
          <ArrowDown className="mr-2 h-5 w-5" />
        </Button>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
