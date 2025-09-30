import { Card, CardContent } from "@/components/ui/card";
import { Utensils, Heart, Users } from "lucide-react";

const features = [
  {
    icon: Utensils,
    title: "أطباق أصيلة",
    description: "نحضر أطباقنا بوصفات عائلية توارثناها عبر الأجيال"
  },
  {
    icon: Heart,
    title: "مكونات طازجة",
    description: "نستخدم أجود المكونات الطازجة يومياً لضمان أفضل جودة"
  },
  {
    icon: Users,
    title: "أجواء عائلية",
    description: "مساحة مريحة ودافئة مثالية للعائلات والأصدقاء"
  }
];

const AboutSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-foreground">عن المطعم</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            مطعم كل ونام هو وجهتك المثالية لتذوق الأطباق العربية الأصيلة في أجواء دافئة تجمع بين الأصالة والحداثة
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="text-center border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="pt-8 pb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-card border-border">
          <CardContent className="p-8 md:p-12">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold mb-6 text-foreground">قصتنا</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                بدأت رحلتنا من حب الطعام العربي الأصيل ورغبتنا في مشاركة هذا الطعم الفريد مع الجميع. في مطعم كل ونام، نؤمن بأن الطعام ليس مجرد وجبة، بل تجربة كاملة تجمع بين الطعم الرائع والأجواء الدافئة.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                نحرص على تقديم أطباق محضرة بحب وعناية، باستخدام وصفات عائلية أصيلة ومكونات طازجة مختارة بعناية. هدفنا أن تشعر وكأنك في بيتك، تستمتع بطعام شهي في أجواء مريحة.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
