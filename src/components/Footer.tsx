const Footer = () => {
  return (
    <footer className="relative py-6 border-t border-border/30">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-muted-foreground/60">
          Made by{' '}
          <a
            href="https://www.tenebris-development.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground/80 hover:text-primary transition-colors"
          >
            Tenebris Development
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
