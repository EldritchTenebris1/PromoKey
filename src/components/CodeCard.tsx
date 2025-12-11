import { useState, useEffect } from 'react';
import { Copy, RefreshCw, ExternalLink, Check, Sparkles, Clock } from 'lucide-react';
import { gerarCodigo, saveToHistory, canGenerateToday, markGenerationUsed, getPromoUrlWithCode } from '@/lib/codeGenerator';
import { toast } from '@/hooks/use-toast';

const STORED_CODE_KEY = 'promokey_current_code';

const CodeCard = () => {
  const [code, setCode] = useState('');
  const [copied, setCopied] = useState(false);
  const [canGenerate, setCanGenerate] = useState(true);
  const [timeLeft, setTimeLeft] = useState('');

  const calculateTimeLeft = () => {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    
    const diff = tomorrow.getTime() - now.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const generateNewCode = () => {
    if (!canGenerateToday()) {
      toast({
        title: "Limite atingido",
        description: "Você só pode gerar 1 código por dia. Tente novamente amanhã!",
        variant: "destructive",
      });
      return;
    }

    const newCode = gerarCodigo();
    setCode(newCode);
    saveToHistory(newCode);
    markGenerationUsed();
    localStorage.setItem(STORED_CODE_KEY, newCode);
    setCanGenerate(false);
    setCopied(false);
  };

  const copyToClipboard = async () => {
    const fullUrl = getPromoUrlWithCode(code);
    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      toast({
        title: "URL copiada!",
        description: "A URL foi copiada para a área de transferência.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast({
        title: "Erro ao copiar",
        description: "Não foi possível copiar a URL.",
        variant: "destructive",
      });
    }
  };

  const openPromoUrl = () => {
    window.open(getPromoUrlWithCode(code), '_blank');
  };

  useEffect(() => {
    const storedCode = localStorage.getItem(STORED_CODE_KEY);
    const canGen = canGenerateToday();
    setCanGenerate(canGen);

    if (storedCode) {
      setCode(storedCode);
    } else if (canGen) {
      generateNewCode();
    }
  }, []);

  useEffect(() => {
    if (!canGenerate) {
      setTimeLeft(calculateTimeLeft());
      const interval = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [canGenerate]);

  const fullUrl = getPromoUrlWithCode(code);

  return (
    <div className="card-glass p-8 md:p-12 w-full max-w-xl mx-auto glow-primary">
      {/* Header */}
      <div className="flex items-center justify-center gap-2 mb-8">
        <Sparkles className="w-5 h-5 text-primary" />
        <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Sua URL Promocional
        </span>
        <Sparkles className="w-5 h-5 text-primary" />
      </div>

      {/* URL Display */}
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-xl blur-xl" />
        <div className="relative bg-background/50 border border-border/50 rounded-xl p-6 md:p-8 text-center">
          <p className="text-sm md:text-base font-mono text-foreground break-all">
            {fullUrl}
          </p>
        </div>
      </div>

      {/* Countdown Timer */}
      {!canGenerate && timeLeft && (
        <div className="flex items-center justify-center gap-2 mb-6 text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span className="text-sm">Próximo código disponível em: <strong className="text-foreground font-mono">{timeLeft}</strong></span>
        </div>
      )}

      {/* Actions */}
      <div className="flex flex-col gap-3">
        {canGenerate ? (
          <button
            onClick={generateNewCode}
            className="btn-primary flex items-center justify-center gap-2 w-full"
          >
            <RefreshCw className="w-5 h-5" />
            Gerar Novo Código
          </button>
        ) : (
          <button
            onClick={openPromoUrl}
            className="btn-primary flex items-center justify-center gap-2 w-full"
          >
            <ExternalLink className="w-5 h-5" />
            Resgatar Spotify Premium
          </button>
        )}

        <div className="flex gap-3">
          <button
            onClick={copyToClipboard}
            className="btn-secondary flex-1 flex items-center justify-center gap-2"
          >
            {copied ? (
              <>
                <Check className="w-5 h-5 text-primary" />
                Copiado!
              </>
            ) : (
              <>
                <Copy className="w-5 h-5" />
                Copiar URL
              </>
            )}
          </button>

          {canGenerate && (
            <button
              onClick={openPromoUrl}
              className="btn-ghost flex-1 flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-5 h-5" />
              Resgatar Agora
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CodeCard;
