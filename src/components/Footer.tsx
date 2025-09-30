const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-2">كل ونام</h3>
          <p className="text-primary-foreground/80 mb-4">
            طعم الأصالة في كل لقمة
          </p>
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} مطعم كل ونام. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
