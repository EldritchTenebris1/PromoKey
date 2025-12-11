import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Gift, Clock, Smartphone, CheckCircle, AlertTriangle, ExternalLink, Code } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      <Header />

      <main className="relative pt-32 pb-16 px-4 flex-1">
        <div className="container mx-auto max-w-3xl">
          {/* Hero */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
              Sobre o <span className="text-gradient">PromoKey</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Projeto de estudo e demonstração técnica
            </p>
          </div>

          {/* Content */}
          <div className="space-y-6">
            {/* Disclaimer */}
            <div 
              className="card-glass p-6 md:p-8 border-yellow-500/30 bg-gradient-to-br from-yellow-500/10 to-transparent animate-fade-in-up hover:scale-[1.02] transition-transform duration-300"
              style={{ animationDelay: '0.1s' }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500/30 to-yellow-600/20 flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">Aviso Importante</h2>
                  <p className="text-muted-foreground">
                    Este é um <strong className="text-foreground">projeto de estudo e portfólio</strong>, 
                    desenvolvido exclusivamente para fins educacionais e demonstração de habilidades técnicas. 
                    Não possui qualquer vínculo oficial com o Spotify ou Microsoft.
                  </p>
                </div>
              </div>
            </div>

            {/* O que é */}
            <div 
              className="card-glass p-6 md:p-8 bg-gradient-to-br from-primary/5 to-transparent animate-fade-in-up hover:scale-[1.02] hover:glow-primary-sm transition-all duration-300"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center shrink-0">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">O que é o PromoKey?</h2>
                  <p className="text-muted-foreground">
                    O PromoKey é uma aplicação web desenvolvida como projeto de portfólio que simula 
                    um gerador de códigos promocionais. Demonstra conceitos de React, TypeScript, 
                    gerenciamento de estado e localStorage.
                  </p>
                </div>
              </div>
            </div>

            {/* Como funciona */}
            <div 
              className="card-glass p-6 md:p-8 bg-gradient-to-br from-primary/5 to-transparent animate-fade-in-up hover:scale-[1.02] hover:glow-primary-sm transition-all duration-300"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center shrink-0">
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">Como funciona?</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>Ao acessar o PromoKey, um código é gerado automaticamente</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>A URL completa é exibida pronta para copiar ou acessar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>O código fica salvo e disponível para uso posterior</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Limite diário */}
            <div 
              className="card-glass p-6 md:p-8 bg-gradient-to-br from-primary/5 to-transparent animate-fade-in-up hover:scale-[1.02] hover:glow-primary-sm transition-all duration-300"
              style={{ animationDelay: '0.4s' }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">Limite de Geração</h2>
                  <p className="text-muted-foreground">
                    Como demonstração de controle de uso, a aplicação permite gerar 
                    <strong className="text-foreground"> apenas 1 código por dia</strong>. 
                    Um contador mostra quanto tempo falta para uma nova geração.
                  </p>
                </div>
              </div>
            </div>

            {/* Link para site principal */}
            <div 
              className="card-glass p-6 md:p-8 bg-gradient-to-br from-primary/5 to-transparent animate-fade-in-up hover:scale-[1.02] hover:glow-primary-sm transition-all duration-300"
              style={{ animationDelay: '0.5s' }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center shrink-0">
                  <ExternalLink className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">Saiba Mais</h2>
                  <p className="text-muted-foreground mb-4">
                    Quer conhecer mais sobre este e outros projetos? Acesse meu portfólio completo 
                    para ver a documentação técnica e outros trabalhos desenvolvidos.
                  </p>
                  <a
                    href="https://www.tenebris-development.dev/projetos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Ver Portfólio Completo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
