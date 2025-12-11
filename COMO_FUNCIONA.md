# Como o PromoKey Funciona

Este documento explica o funcionamento técnico do gerador de códigos promocionais PromoKey.

## Visão Geral

O PromoKey é um gerador de códigos promocionais que cria códigos únicos baseados em UUID (Universally Unique Identifier). O sistema foi projetado para ser simples, rápido e funcionar inteiramente no navegador.

---

## Geração de Códigos

### Algoritmo

```typescript
function gerarCodigo(): string {
  const uuid = crypto.randomUUID().replace(/-/g, '');
  return uuid.slice(0, 16).toUpperCase();
}
```

### Passo a passo:

1. **Geração do UUID**: Utiliza a API nativa `crypto.randomUUID()` do navegador para gerar um UUID v4 (versão 4 - baseado em números aleatórios).

2. **Remoção de hífens**: O UUID padrão tem o formato `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`. Os hífens são removidos para criar uma string contínua.

3. **Extração**: São extraídos os primeiros 16 caracteres da string resultante.

4. **Conversão**: Os caracteres são convertidos para maiúsculas.

### Exemplo:
- UUID gerado: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`
- Após remover hífens: `a1b2c3d4e5f67890abcdef1234567890`
- Primeiros 16 caracteres: `a1b2c3d4e5f67890`
- Resultado final: `A1B2C3D4E5F67890`

---

## Sistema de Limites

### Limite Diário

O sistema implementa um limite de uma geração por dia por dispositivo:

```typescript
const LAST_GENERATION_KEY = 'promokey_last_generation';

function canGenerateToday(): boolean {
  const lastGeneration = localStorage.getItem(LAST_GENERATION_KEY);
  if (!lastGeneration) return true;
  
  const lastDate = new Date(lastGeneration);
  const today = new Date();
  
  return lastDate.toDateString() !== today.toDateString();
}
```

### Funcionamento:
1. Verifica se existe um registro de última geração no `localStorage`
2. Se não existir, permite a geração
3. Se existir, compara a data da última geração com a data atual
4. Permite nova geração apenas se as datas forem diferentes

---

## Histórico de Códigos

### Armazenamento

Os códigos gerados são salvos no histórico local:

```typescript
const HISTORY_KEY = 'promokey_history';
const MAX_HISTORY = 50;

function saveToHistory(code: string): void {
  const history = getHistory();
  history.unshift({ code, timestamp: new Date() });
  if (history.length > MAX_HISTORY) {
    history.pop();
  }
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}
```

### Características:
- **Capacidade máxima**: 50 códigos
- **Ordem**: LIFO (Last In, First Out) - códigos mais recentes aparecem primeiro
- **Dados salvos**: Código + timestamp de geração
- **Persistência**: LocalStorage do navegador

---

## Geração Automática

Ao acessar a página inicial, o sistema automaticamente:

1. Verifica se já foi gerado um código hoje
2. Se não foi gerado, cria um novo código automaticamente
3. Salva o código no histórico
4. Marca a geração como utilizada para o dia

---

## URL Promocional Personalizada

O sistema permite configurar uma URL promocional personalizada:

```typescript
const PROMO_URL_KEY = 'promokey_promo_url';

function getPromoUrl(): string {
  return localStorage.getItem(PROMO_URL_KEY) || 'https://www.microsoft.com/pt-br/store/collections/spotify';
}

function setPromoUrl(url: string): void {
  localStorage.setItem(PROMO_URL_KEY, url);
}
```

---

## Tecnologias Utilizadas

| Tecnologia | Uso |
|------------|-----|
| `crypto.randomUUID()` | Geração de UUIDs únicos |
| `localStorage` | Persistência de dados no navegador |
| `Date` | Controle de limite diário |
| `JSON` | Serialização do histórico |

---

## Segurança e Aleatoriedade

- **crypto.randomUUID()**: Utiliza o gerador de números pseudo-aleatórios criptograficamente seguro (CSPRNG) do navegador
- **Unicidade**: A probabilidade de colisão de UUIDs é astronomicamente baixa (2^122 combinações possíveis)
- **Armazenamento local**: Dados ficam apenas no dispositivo do usuário

---

## Limitações

1. **Dependência do navegador**: Requer um navegador moderno com suporte a `crypto.randomUUID()`
2. **LocalStorage**: Os dados são específicos do navegador e dispositivo
3. **Sem sincronização**: Não há sincronização entre dispositivos

---

## Fluxo de Uso

```
┌─────────────────────┐
│  Usuário acessa     │
│  a página           │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  Verifica se pode   │
│  gerar hoje         │
└──────────┬──────────┘
           │
     ┌─────┴─────┐
     ▼           ▼
   [SIM]       [NÃO]
     │           │
     ▼           ▼
┌─────────┐ ┌─────────────┐
│ Gera    │ │ Mostra      │
│ código  │ │ último      │
│ novo    │ │ código      │
└────┬────┘ └─────────────┘
     │
     ▼
┌─────────────────────┐
│  Salva no histórico │
│  e marca geração    │
└─────────────────────┘
```

---

**Desenvolvido por [Tenebris Development](https://www.tenebris-development.dev)**
