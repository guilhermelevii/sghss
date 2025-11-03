🧭 Guia do Projeto Angular

Versão Angular CLI: 20.0.0
Este guia organiza e padroniza instruções de instalação, uso e boas práticas para o projeto Angular.

Fontes de estudo:
🔗 KipperDev - Aprenda Angular do Zero

🔗 Angular Material - Getting Started

🚀 Iniciando o Projeto
ng new castro

🗂️ Estrutura do Projeto
Diretório / Arquivo	Descrição
src/	Contém todo o código-fonte da aplicação (componentes, serviços, módulos).
src/app/	Diretório principal da aplicação onde ficam os componentes, serviços e módulos.
src/assets/	Arquivos estáticos, como imagens e fontes.
src/environments/	Arquivos de configuração para diferentes ambientes.
main.ts	Arquivo principal que inicializa o módulo raiz.
index.html	Página HTML principal onde o app Angular é carregado (injeta o <app-root>).
styles.css	Estilos globais da aplicação.
angular.json	Configurações da CLI (builds, estilos, budgets etc).
package.json	Lista de dependências e scripts.
package-lock.json	Versões exatas das dependências instaladas.
tsconfig.json	Configurações gerais do TypeScript.
tsconfig.app.json	Configurações específicas da aplicação.
tsconfig.spec.json	Configurações para testes unitários.
🔁 Clonando o Repositório (Git)
cd caminho/desejado
git clone <URL-do-repositório>

⚙️ Instalações Obrigatórias

Instale o Node.js (versão LTS recomendada).

Instale o Angular CLI globalmente:

npm install -g @angular/cli

✅ Verificação do Ambiente
node -v       # Versão do Node
npm -v        # Versão do NPM
ng version    # Versão da Angular CLI

🪟 Corrigir PATH (Windows)

Se o comando ng não for reconhecido:

npm list -g


Copie o caminho exibido (ex: C:\Users\usuario\AppData\Roaming\npm)
➡ Vá em Variáveis de Ambiente → Editar variável Path → Adicione o caminho
Reinicie o VSCode e teste novamente com ng version.

🧪 Rodando o Projeto Localmente
📦 Instalar Dependências
npm install

▶️ Iniciar o Servidor de Desenvolvimento
npm run start
# ou
ng serve


Opções úteis:

ng serve --open        # Abre o navegador automaticamente
ng serve --port 4201   # Define uma porta específica


Acesse em: http://localhost:4200

🛠️ Gerando Código com Angular CLI
Criar novo componente
ng generate component nome-do-componente
# ou
ng g c nome-do-componente

Ver todos os comandos disponíveis
ng generate --help

⚖️ Build e Testes
🏗️ Compilar para Produção
ng build


O build será gerado em: /dist

✅ Testes Unitários (Karma)
ng test

🌐 Testes End-to-End (E2E)
ng e2e


ℹ️ O Angular CLI não inclui framework E2E por padrão — use Cypress.

💻 Angular no VS Code
🔌 Extensões Recomendadas

Angular Language Service

Angular Snippets (v18)

Prettier - Code Formatter

🧠 Usar a versão do TypeScript do projeto

Ctrl + Shift + P

Buscar: Select TypeScript Version

Selecionar Use Workspace Version

🎨 CSS com Flexbox
Propriedade	Função
display: flex	Ativa o modo flex.
flex-direction	Alinha itens em linha ou coluna.
flex-wrap	Permite quebra de linha.
gap	Espaço entre os filhos.
.row	Agrupamento horizontal flex.
.col-*	Largura proporcional dos filhos.
@media	Estilos responsivos.

💡 Dica:
Use .row como linha flexível e .col-* para dividir o espaço.
Veja o comportamento via DevTools → Elements → Layout.

Exemplo:

flex: 1 1 100%; /* Cresce, encolhe e ocupa 100% inicialmente */

📂 Padrão de Commits (Angular Style)
Tipo	Descrição
feat	Nova funcionalidade
fix	Correção de bug
refactor	Refatoração sem mudar comportamento
style	Ajustes visuais ou formatação
docs	Mudanças na documentação
test	Criação ou ajuste de testes
chore	Outras mudanças (build, dependências etc.)

Exemplos:

feat(ui): adicionar cabeçalho azul responsivo
fix(layout): corrigir overflow lateral no header
refactor(css): mover estilos para arquivo global


💡 Use Husky + Commitlint para reforçar o padrão automaticamente.

📦 Boas Práticas com Assets
🖼️ Adicionando imagens externas
"assets": [
  {
    "glob": "/*",
    "input": "public",
    "output": "/"
  },
  {
    "glob": "/*",
    "input": "src/assets",
    "output": "/assets/"
  }
]


Exemplo no componente:

logoPath = 'assets/images/logofau.png';


No HTML:

<img [src]="logoPath" alt="Logo FAU" class="header-logo">

🔢 Máscaras (CPF / CEP)

Regras:

Use diretiva com @HostListener('paste')

Limpe com .replace(/\D/g, '')

Aplique a máscara com .replace(...)

Dispare manualmente:
dispatchEvent(new Event('input'))

Adicione maxlength no HTML:

maxlength="14"  <!-- CPF -->
maxlength="9"   <!-- CEP -->


Para integração com Angular Forms → implemente ControlValueAccessor.

🎨 Angular Material
🧱 Módulos Principais
Módulo	Função
MatCardModule	Estrutura visual de cartões.
MatFormFieldModule	Campos com labels flutuantes.
MatInputModule	Campos de texto estilizados.
MatButtonModule	Botões estilizados.
MatIconModule	Ícones do Material Design.
MatCheckboxModule	Checkboxes estilizados.
MatProgressSpinnerModule	Indicadores de loading.
MatSnackBarModule	Notificações tipo toast.
BrowserAnimationsModule	Necessário para animações.
⚙️ Build de Produção

Para versões mais recentes da CLI (2.0+):

ng build --configuration=production


O resultado será gerado em /dist.

🧠 Observações Importantes

O Angular compila o TypeScript/HTML em tempo real no ng serve.

No ng build, o código é convertido e otimizado em JavaScript, HTML e CSS prontos para produção.

O resultado final (pasta /dist) é o que vai para o servidor.

🔁 Reiniciar o TypeScript Server (VS Code)

Se o IntelliSense travar:

Ctrl + Shift + P
→ TypeScript: Restart TS Server
→ Enter

🧩 Módulos Essenciais Utilizados
CommonModule,              // Diretivas NgIf e NgFor
ReactiveFormsModule,       // Formulários reativos
MatFormFieldModule,        // Campos de formulário
MatSelectModule,           // Dropdown estilizado
MatInputModule,            // Inputs com Material Design
MatButtonModule,           // Botões estilizados
MatCardModule,             // Estrutura visual de cards
MatIconModule,             // Ícones Material
NgxMaskDirective           // Máscaras (CPF, CEP, etc)

🪶 Boas Práticas Extras

Utilizar a pasta assets e configurá-la corretamente no angular.json.

Ajustar o tema em custom-theme.scss após instalar o Angular Material.

Verificar o arquivo app.config.ts após alterações em módulos.

Usar MatSnackBar para mensagens de alerta e feedback ao usuário.

🧩 Atalho Útil no VS Code
🧹 Organizar / Format Code

Windows/Linux: Shift + Alt + F

Mac: Shift + Option + F

Ativar formatação automática ao salvar:

Vá em Configurações → Format On Save e marque ✅

📖 Licença

Este projeto é licenciado sob os termos da MIT License.
