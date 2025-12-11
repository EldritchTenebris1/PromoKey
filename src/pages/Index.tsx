import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CodeCard from '@/components/CodeCard';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      <Header />

      <main className="relative pt-32 pb-16 px-4 flex-1">
        <div className="container mx-auto max-w-4xl">
          {/* Hero Text */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
              Ganhe{' '}
              <span className="text-gradient">3 Meses</span>{' '}
              de Spotify Premium
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Gere seu código promocional exclusivo e resgate 3 meses de Spotify Premium grátis. 
              Rápido, fácil e sem complicações!
            </p>
          </div>

          {/* Code Generator Card */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <CodeCard />
          </div>

          {/* Footer Note */}
          <div className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-sm text-muted-foreground">
              ⚠️ Promoção válida apenas para novos usuários do Spotify Premium.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
