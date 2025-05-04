---
type: about
draft: false
aliases: ["/pt-br/"]
---

# Sobre

A especificação de Conventional Commits é inspirada e baseada fortemente nas [Diretrizes de Commit do Angular](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).

O primeiro rascunho desta especificação foi escrito em colaboração com algumas das pessoas que contribuem para:

* [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog): um conjunto de ferramentas para analisar mensagens de Conventional Commits a partir de históricos git.
* [parse-commit-message](https://npmjs.com/package/parse-commit-message): Utilitários extensíveis para analisar, formatar e validar mensagens de Commit Convencionais.
* [bumped](https://bumped.github.io): uma ferramenta para lançar software que facilita a realização de ações antes e depois de lançar uma nova versão do seu software.
* [unleash](https://github.com/netflix/unleash): uma ferramenta para automatizar o ciclo de vida de lançamento e publicação de software.
* [lerna](https://github.com/lerna/lerna): uma ferramenta para gerenciar monorepos, que surgiu do projeto Babel.

## Ferramentas para Conventional Commits

* [go-conventional-commits](https://github.com/joselitofilho/go-conventional-commits): Uma ferramenta para analisar suas mensagens de commit do git em uma mensagem de log de alterações baseada na especificação de Conventional Commits.
* [go-conventionalcommits](https://github.com/leodido/go-conventionalcommits): Poderes completos de Go para analisar Conventional Commits.
* [go-conventional-commit](https://gitlab.com/digitalxero/go-conventional-commit): biblioteca Go para analisar mensagens de commit seguindo a especificação.
* [chglog](https://github.com/goreleaser/chglog): uma ferramenta para analisar mensagens de Conventional Commits a partir de históricos git e transformá-los em logs de alterações modeláveis.
* [fastlane-plugin](https://github.com/xotahal/fastlane-plugin-semantic_release): segue a especificação para gerenciar versões e gerar um changelog automaticamente.
* [commitizen/cz-cli](https://github.com/commitizen/cz-cli): Uma ferramenta Node.js para criar mensagens de commit seguindo as especificações de Conventional Commits.
* [commitizen-tools/commitizen](https://github.com/commitizen-tools/commitizen): Uma ferramenta escrita em Python para criar regras de commit para projetos, auto incrementar versões e geração automática de changelog.
* [php-commitizen](https://github.com/damianopetrungaro/php-commitizen): Uma ferramenta PHP construída para criar mensagens de commit seguindo as especificações de Conventional Commits. Configurável e utilizável para projetos PHP como uma dependência do composer ou utilizável globalmente para projetos não-PHP.
* [php-conventional-changelog](https://github.com/marcocesarato/php-conventional-changelog): uma ferramenta construída para gerar um changelog a partir das mensagens e metadados do histórico de commit de um projeto e automatizar a versionamento com Semver, seguindo as especificações de Conventional Commits. Configurável e utilizável para projetos PHP como uma dependência do composer ou utilizável globalmente para projetos não-PHP.
* [conventional-commits](https://github.com/ramsey/conventional-commits): Uma biblioteca PHP para criar e validar mensagens de commit de acordo com a especificação de Conventional Commits.
* [commitlint](https://github.com/conventional-changelog/commitlint): Um linter para verificar se suas mensagens de commit atendem ao formato de Conventional Commits.
* [gitlint](https://github.com/jorisroovers/gitlint): Linter de mensagens de commit Git escrito em Python, que pode ser configurado para [forçar o formato de Conventional Commits](https://jorisroovers.com/gitlint/contrib_rules/#ct1-contrib-title-conventional-commits).
* [conform](https://github.com/autonomy/conform): uma ferramenta que pode ser usada para impor políticas em repositórios git, incluindo Conventional Commits.
* [detect-next-version](https://npmjs.com/package/detect-next-version): Analisar, detectar e obter mais metadados sobre Conventional Commits dados.
* [recommended-bump](https://www.npmjs.com/package/recommended-bump): Calcula o incremento de versão recomendado com base nos Conventional Commits dados.
* [git-commits-since](https://www.npmjs.com/package/git-commits-since): Obtenha todos os commits (brutos) desde o período ou (por padrão) da última tag git SemVer, além do suporte a plugins.
* [standard-version](https://github.com/conventional-changelog/standard-version): Gerenciamento automático de versionamento e CHANGELOG, usando o novo botão de squash do GitHub e o fluxo de trabalho recomendado de Conventional Commits.
* [Conventional Commit](https://github.com/lppedd/idea-conventional-commit): fornece conclusão baseada em contexto e modelo extensível, e inspeções, para Conventional Commits dentro da caixa de diálogo de commit do VCS. Disponível para todos os [IDEs JetBrains](https://www.jetbrains.com/).
* [Git Commit Template](https://plugins.jetbrains.com/plugin/9861-git-commit-template): Adicione suporte a Conventional Commits aos [Editores JetBrains](https://www.jetbrains.com/) (IntelliJ IDEA, PyCharm, PhpStorm...).
* [commitsar](https://github.com/commitsar-app/commitsar): Ferramenta Go para verificar se os commits em um branch estão em conformidade com os Conventional Commits. Vem com imagem Docker para usos de CI.
* [semantic-release](https://github.com/semantic-release/semantic-release): Uma ferramenta que automatiza todo o fluxo de trabalho de lançamento de pacotes, incluindo: determinar o próximo número de versão, gerar as notas de lançamento e publicar o pacote.
* [python-semantic-release](https://github.com/relekang/python-semantic-release): Versionamento Semântico Automático para projetos Python. Esta é uma implementação em Python do [semantic-release](https://github.com/semantic-release/semantic-release) para Node.js.
* [VSCode Conventional Commits](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits): Adicione suporte a Conventional Commits para o VSCode.
* [Pyhist](https://github.com/jgoodman8/pyhist): Uma utilidade Python para atualizar automaticamente a versão do pacote a partir do histórico git e gerar o Changelog.
* [git-mkver](https://github.com/idc101/git-mkver): Uma ferramenta para aplicar automaticamente o Versionamento Semântico a repositórios git baseados em _Conventional Commits_.
* [git-semver](https://github.com/PSanetra/git-semver): Uma ferramenta de linha de comando para calcular a próxima versão semântica de acordo com os últimos _Conventional Commits_ e imprimir changelogs no stdout.
* [Conventional Commits Next Version](https://gitlab.com/DeveloperC/conventional_commits_next_version): Uma utilidade agnóstica de ferramentas e linguagens para calcular a próxima versão semântica com base nos _Conventional Commits_ desde a versão anterior. Suporta monorepos.
* [change](https://github.com/adamtabrams/change): Uma ferramenta para gerar e atualizar um changelog usando Conventional Commits.
* [Turbogit](https://b4nst.github.io/turbogit): Uma ferramenta de linha de comando para ajudá-lo a seguir o fluxo de _Conventional Commits_.
* [sv4git](https://github.com/bvieira/sv4git): Uma ferramenta de linha de comando (CLI) para validar mensagens de commit, incrementar versões, criar tags e gerar changelogs.
* [Versio](https://github.com/chaaz/versio): Uma ferramenta compatível com monorepo que atualiza números de versão com base em Conventional Commits e dependências do projeto. Também pode gerar tags e changelogs.
* [Git Changelog Lib](https://github.com/tomasbjerre/git-changelog-lib): Uma biblioteca Java que suporta a renderização de um changelog dado um contexto derivado do Git. Suporta Conventional Commits com [Handlebars Helpers](https://github.com/tomasbjerre/git-changelog-lib#helpers). É usado em:
    * [Gradle](https://github.com/tomasbjerre/git-changelog-gradle-plugin)
    * [Maven](https://github.com/tomasbjerre/git-changelog-maven-plugin)
    * [Jenkins](https://github.com/jenkinsci/git-changelog-plugin)
    * [Linha de Comando](https://github.com/tomasbjerre/git-changelog-command-line)
    * [Docker](https://hub.docker.com/r/tomasbjerre/git-changelog-command-line)
* [Cocogitto](https://github.com/oknozor/cocogitto): Cocogitto é um conjunto de ferramentas de linha de comando para as especificações de Conventional Commits e semver.
* [Conventional Commits Linter](https://gitlab.com/DeveloperC/conventional_commits_linter): Um linter de commit Git agnóstico de ferramentas e linguagens para a especificação de _Conventional Commits_.
* [Uplift](https://github.com/gembaadvantage/uplift): Versionamento semântico da maneira fácil. Alimentado por Conventional Commits. Construído para uso com CI.
* [Monopub](https://github.com/thi-ng/monopub): Ferramenta de lançamento orientada por Conventional Commits para lançamentos de monorepo, versionamento e geração de changelog.

## Projetos Usando Conventional Commits

* [NFPM](https://github.com/goreleaser/nfpm): NFPM não é FPM - um empacotador deb, rpm e apk simples escrito em Go.
* [yargs](https://github.com/yargs/yargs): o parser de argumentos de linha de comando temático de pirata favorito de todos.
* [istanbuljs](https://github.com/istanbuljs/istanbuljs): uma coleção de ferramentas e bibliotecas de código aberto para adicionar cobertura de teste aos seus testes JavaScript.
* [uPortal-home](https://github.com/UW-Madison-DoIT/angularjs-portal) e [uPortal-application-framework](https://github.com/UW-Madison-DoIT/uw-frame): Interface de usuário suplementar opcional que aprimora o [Apereo uPortal](https://www.apereo.org/projects/uportal).
* [massive.js](https://github.com/dmfay/massive-js): Uma biblioteca de acesso a dados para Node e PostgreSQL.
* [electron](https://github.com/electron/electron): Construa aplicativos de desktop multiplataforma com JavaScript, HTML e CSS.
* [scroll-utility](https://github.com/LeDDGroup/scroll-utility): Um pacote de utilitários de rolagem simples de usar para centralizar elementos e animações suaves
* [Blaze UI](https://github.com/BlazeUI/blaze): Kit de ferramentas de interface do usuário de código aberto sem estrutura.
* [Monica](https://github.com/monicahq/monica): Um sistema de gerenciamento de relacionamento pessoal de código aberto.
* [mhy](https://mhy.js.org): Uma caixa de ferramentas multiuso e ambiente de desenvolvimento prontos para uso, sem configuração.
* [@tandil/diffparse](https://github.com/danielduarte/diffparse#readme): Parser simples para arquivos Diff (formato diff unificado).
* [@tandil/diffsplit](https://github.com/danielduarte/diffsplit#readme): Divisão fácil de .diff & .patch em seus arquivos.
* [@thi.ng/umbrella](https://github.com/thi-ng/umbrella): Ecossistema de amplo escopo e monorepo de ~185 projetos TypeScript para desenvolvimento orientado a dados, funcional e de propósito geral
* [yii2-basic-firestarter](https://github.com/HunWalk/yii2-basic-firestarter): 🔥 Um template de aplicativo Yii2 aprimorado.
* [dcyou/resume](https://github.com/dcyou/resume): 😎 Template para criar fácil e rapidamente seu CV online.
* [Nintex Forms](https://www.nintex.com/workflow-automation/modern-forms/): Crie facilmente formulários online dinâmicos para capturar e enviar dados precisos e atuais.
* [Tina CMS](https://tinacms.org): Um kit de ferramentas de código aberto para construir gerenciamento de conteúdo de front-end em seu site.
* [Belajarpython](https://github.com/belajarpythoncom/belajarpython.com) Site de tutorial de programação python indonésio de código aberto.
* [Uno Platform](https://platform.uno): Construa aplicativos para Mobile, Desktop e WebAssembly com C# e XAML. Hoje. Código aberto e com suporte profissional.
* [Jenkins X](https://jenkins-x.io/): Jenkins X fornece automação de pipeline, GitOps integrado e ambientes de pré-visualização para ajudar as equipes a colaborar e acelerar a entrega de software em qualquer escala.
* [GearLock](https://github.com/axonasif/gearlock): Substituição personalizada de recuperação para Android-x86.
* [Changeloguru](https://github.com/haunt98/changeloguru): Gere automaticamente o changelog a partir de Conventional Commits, escrito em Go.
* [freeCodeCamp](https://www.freecodecamp.org): Uma comunidade sem fins lucrativos que ajuda você a aprender a codificar construindo projetos.

[![Conventional Commits](https://img.shields.io/badge/Commits%20Convencionais-1.0.0-yellow.svg)](https://conventionalcommits.org)

_Quer seu projeto nesta lista?_ [envie um pull request](https://github.com/conventional-changelog/conventionalcommits.org/pulls).