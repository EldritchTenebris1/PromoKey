import { Link, useLocation } from 'react-router-dom';
import { KeyRound, Info, Home } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const isAbout = location.pathname === '/sobre';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <KeyRound className="w-5 h-5 text-primary" />
          </div>
          <span className="font-bold text-xl tracking-tight">
            Promo<span className="text-primary">Key</span>
          </span>
        </Link>

        <nav>
          <Link
            to={isAbout ? '/' : '/sobre'}
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-4 py-2 rounded-full hover:bg-secondary"
          >
            {isAbout ? (
              <>
                <Home className="w-4 h-4" />
                Início
              </>
            ) : (
              <>
                <Info className="w-4 h-4" />
                Sobre
              </>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
