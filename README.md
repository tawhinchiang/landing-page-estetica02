# Salva Beauty - Landing Page

Landing page profissional para o Salva Beauty, salão de beleza em Araguaína - TO, com foco em maquiagens, penteados, noivas e serviços completos de beleza.

## Descrição

Página estática, responsiva e otimizada para conversão via WhatsApp. O conteúdo usa as informações fornecidas do Google, fotos reais em `assets/` e o catálogo `Menu_SalvaBeauty_Final.pdf` como referência para serviços.

## Estrutura

```text
landing-page-estetica02/
├── index.html
├── styles.css
├── script.js
├── config.json
└── assets/
```

## Dados Principais

- Nome: Salva Beauty
- Especialidade: maquiagens e penteados
- WhatsApp: +55 63 99272-5055
- Instagram: @salvabeautyy
- Endereço: Av. Cônego João Lima, 1500 - Centro, Araguaína - TO, 77804-010
- Avaliação informada: 5,0 no Google, 43 avaliações

## Serviços Destacados

- Maquiagem social
- Penteados para eventos
- Noivas e madrinhas
- Escovas e cortes
- Coloração, químicas, mechas e mega hair
- Unhas, alongamento e gel
- Sobrancelhas e micropigmentação

## Como Abrir

Abra `index.html` diretamente no navegador ou rode um servidor local:

```bash
python -m http.server 5173
```

Depois acesse:

```text
http://127.0.0.1:5173/
```

## Personalização

O número de WhatsApp e a mensagem padrão ficam em `script.js`:

```javascript
const whatsappNumber = "5563992725055";
const whatsappMessage = "Olá! Gostaria de agendar um atendimento no Salva Beauty.";
```

As cores principais ficam nas variáveis de `styles.css`. As fotos usadas pela página estão em `assets/` com prefixo `salvabeauty_`.

## Observação

Valores, serviços e horários devem ser confirmados com a equipe do Salva Beauty no momento do agendamento.
