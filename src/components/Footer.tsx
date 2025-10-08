const Footer = () => {
  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Anderson Andrade. Todos os direitos reservados.
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;
