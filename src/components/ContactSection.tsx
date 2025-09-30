import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "العنوان",
    details: ["شارع الأمير محمد بن عبدالعزيز", "الرياض، المملكة العربية السعودية"]
  },
  {
    icon: Phone,
    title: "الهاتف",
    details: ["+966 11 234 5678", "+966 50 123 4567"]
  },
  {
    icon: Clock,
    title: "ساعات العمل",
    details: ["السبت - الخميس: ١٢ ظهراً - ١٢ منتصف الليل", "الجمعة: ١ ظهراً - ١ صباحاً"]
  }
];

const ContactSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-foreground">تواصل معنا</h2>
          <p className="text-xl text-muted-foreground">
            نسعد بزيارتكم وخدمتكم في أي وقت
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center border-border hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-8 pb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <info.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-muted-foreground">{detail}</p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-foreground">تابعنا على السوشيال ميديا</h3>
          <div className="flex justify-center gap-4">
            <Button 
              variant="outline" 
              size="lg"
              className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Instagram className="h-5 w-5 ml-2" />
              إنستقرام
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Facebook className="h-5 w-5 ml-2" />
              فيسبوك
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
