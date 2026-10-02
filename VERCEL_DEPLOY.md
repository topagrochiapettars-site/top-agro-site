# Publicar na Vercel

O projeto mantém Vinext e usa Nitro somente no build da Vercel. O desenvolvimento
local e o build padrão continuam usando a configuração Cloudflare existente.

## Importação do GitHub

1. Envie os arquivos da adaptação ao repositório (incluindo `pnpm-lock.yaml`).
2. Na Vercel, escolha **Add New → Project** e importe o repositório.
3. Use a raiz do repositório e **Framework Preset: Other**.
4. Selecione **Node.js 22.x** nas configurações do projeto.
5. `vercel.json` define instalação e build. Não use o preset Next.js nem
   sobrescreva o Output Directory: o Nitro gera a Build Output API da Vercel.
6. Cadastre `SITE_URL` com a URL pública completa, incluindo `https://`, para
   gerar as URLs corretas das imagens de compartilhamento. Ao trocar o domínio,
   atualize essa variável e faça um novo deploy.
7. Faça o deploy e teste home, categorias, produtos, imagens, navegação e WhatsApp.

Configuração: instalação `pnpm install --frozen-lockfile`, build `pnpm build`.
A Vercel define `VERCEL=1` automaticamente e utiliza `.vercel/output`.

## Validar o build Vercel no PowerShell

Use Node.js 22.13 ou superior:

```powershell
pnpm lint
$env:NITRO_PRESET = 'vercel'
try {
  pnpm build
} finally {
  Remove-Item Env:NITRO_PRESET -ErrorAction SilentlyContinue
}
```

O adaptador gera as funções e arquivos estáticos em `.vercel/output`.
Não envie `.vercel`, `.output`, `dist`, `node_modules` ou `.env*` ao GitHub.

## Observação de lançamento

O layout atual define `robots: { index: false, follow: false }`. Essa configuração
foi preservada. A liberação da indexação para o lançamento público deve ser
tratada separadamente.
