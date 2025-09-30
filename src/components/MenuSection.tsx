import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import mainDish from "@/assets/main-dish.jpg";
import appetizers from "@/assets/appetizers.jpg";
import desserts from "@/assets/desserts.jpg";

const menuCategories = [
  {
    title: "الأطباق الرئيسية",
    description: "أشهى الأطباق المشوية واليخنات التقليدية",
    image: mainDish,
    items: [
      { name: "كبسة لحم", price: "٥٥ ريال" },
      { name: "مندي دجاج", price: "٤٥ ريال" },
      { name: "مشاوي مشكلة", price: "٧٥ ريال" },
      { name: "برياني لحم", price: "٦٠ ريال" },
    ]
  },
  {
    title: "المقبلات",
    description: "مقبلات طازجة ومتنوعة",
    image: appetizers,
    items: [
      { name: "حمص بالطحينة", price: "١٥ ريال" },
      { name: "متبل باذنجان", price: "١٥ ريال" },
      { name: "فلافل", price: "٢٠ ريال" },
      { name: "فتوش", price: "١٨ ريال" },
    ]
  },
  {
    title: "الحلويات",
    description: "حلويات عربية أصيلة",
    image: desserts,
    items: [
      { name: "بقلاوة", price: "٢٥ ريال" },
      { name: "كنافة", price: "٣٠ ريال" },
      { name: "بسبوسة", price: "٢٠ ريال" },
      { name: "أم علي", price: "٢٨ ريال" },
    ]
  }
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-foreground">قائمة الطعام</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            تذوق أشهى الأطباق العربية المحضرة بعناية من أجود المكونات
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuCategories.map((category, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <CardHeader className="absolute bottom-0 left-0 right-0 text-white">
                  <CardTitle className="text-2xl">{category.title}</CardTitle>
                  <CardDescription className="text-white/90">
                    {category.description}
                  </CardDescription>
                </CardHeader>
              </div>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex justify-between items-center border-b border-border pb-2 last:border-0">
                      <span className="text-foreground font-medium">{item.name}</span>
                      <span className="text-primary font-bold">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
