---
draft: false
aliases: ["/pt-br/"]
---

# Conventional Commits 1.0.0

## Resumo

A especificação do Conventional Commits é uma convenção simples para utilizar nas mensagens de commit.
Ela define um conjunto de regras para criar um histórico de commit
explícito, o que facilita a criação de ferramentas automatizadas baseadas na especificação.
Esta convenção se encaixa com o [SemVer](https://semver.org), descrevendo os recursos, correções e modificações que quebram a compatibilidade nas mensagens de commit.

A mensagem do commit deve ser estruturada da seguinte forma:

---

```
<tipo>[escopo opcional]: <descrição>

[corpo opcional]

[rodapé(s) opcional(is)]
```

---

<br />
O commit contém os seguintes elementos estruturais, para comunicar a intenção ao utilizador da sua biblioteca:

1. **fix:** um commit do _tipo_ `fix` soluciona um problema na sua base de código (isso se correlaciona com [`PATCH`](https://semver.org/lang/pt-BR/#sum%C3%A1rio) do versionamento semântico).
1. **feat:** um commit do _tipo_ `feat` inclui um novo recurso na sua base de código (isso se correlaciona com [`MINOR`](https://semver.org/lang/pt-BR/#sum%C3%A1rio) do versionamento semântico).
1. **BREAKING CHANGE:** um commit que contém no rodapé opcional o texto `BREAKING CHANGE:`, ou contém o símbolo `!` depois do tipo/escopo, introduz uma modificação que quebra a compatibilidade da API (isso se correlaciona com [`MAJOR`](https://semver.org/lang/pt-BR/#sum%C3%A1rio) do versionamento semântico). Uma BREAKING CHANGE pode fazer parte de commits de qualquer _tipo_.
1. Outros _tipos_ adicionais são permitidos além de `fix:` e `feat:`, por exemplo [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) (baseado na [Convenção do Angular](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)) recomenda-se `build:`, `chore:`, `ci:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, entre outros.
1. Outros _rodapés_ diferentes de `BREAKING CHANGE: <descrição>` podem ser providos e seguem a convenção simular a [git trailer format](https://git-scm.com/docs/git-interpret-trailers).

Observe que esses tipos adicionais não são exigidos pela especificação do Conventional Commits e não têm efeito implícito no versionamento semântico (a menos que incluam uma `BREAKING CHANGE`).
<br /><br />
Um escopo pode ser fornecido ao tipo do commit, para fornecer informações contextuais adicionais e está contido entre parênteses, por exemplo `feat(parser): adiciona capacidade de interpretar arrays`.

## Exemplos

### Mensagem de commit com descrição e modificação que quebra a compatibilidade no rodapé

```
feat: permitir que o objeto de configuração fornecido estenda outras configurações

BREAKING CHANGE: a chave `extends`, no arquivo de configuração, agora é utilizada para estender outro arquivo de configuração
```

### Mensagem de commit com `!` para chamar a atenção para quebra a compatibilidade

```
refactor!: remove suporte para Node 6
```

### Commit message with both `!` and BREAKING CHANGE footer

```
refactor!: remove suporte para Node 6

BREAKING CHANGE: refatorar para usar recursos do JavaScript não disponíveis no Node 6.
```

### Mensagem de commit sem corpo

```
docs: ortografia correta de CHANGELOG
```

### Mensagem de commit com escopo

```
feat(lang): adiciona tradução para português brasileiro
```

### Mensagem de commit de uma correção utilizando número de ticket (opcional)

```
fix: corrige pequenos erros de digitação no código

veja o ticket para detalhes sobre os erros de digitação corrigidos

Revisado por: Daniel Nass
Refs #133
```

## Especificação

As palavras-chaves “DEVE” (“MUST”), “NÃO DEVE” (“MUST NOT”), “OBRIGATÓRIO” (“REQUIRED”), “DEVERÁ” (“SHALL”), “NÃO DEVERÁ” (“SHALL NOT”), “PODEM” (“SHOULD"), “NÃO PODEM” (“SHOULD NOT”), “RECOMENDADO” (“RECOMMENDED”), “PODE” (“MAY”) e “OPCIONAL” (“OPTIONAL”), nesse documento, devem ser interpretados como descrito na [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).

1. A mensagem de commit DEVE ser prefixado com um tipo, que consiste em um substantivo, `feat`,` fix`, etc., seguido por um escopo OPCIONAL, símbolo OPCIONAL `!`, e OBRIGATÓRIO terminar com dois-pontos e um espaço.
1. O tipo `feat` DEVE ser usado quando um commit adiciona um novo recurso ao seu aplicativo ou biblioteca.
1. O tipo `fix` DEVE ser usado quando um commit representa a correção de um problema em seu aplicativo ou biblioteca.
1. Um escopo PODE ser fornecido após um tipo. Um escopo DEVE consistir em um substantivo que descreve uma seção da base de código entre parênteses, por exemplo, `fix(parser): `.
1. Uma descrição DEVE existir depois do espaço após o prefixo tipo/escopo. A descrição é um breve resumo das alterações de código, por exemplo, _fix: problema na interpretação do array quando uma string tem vários espaços._
1. Um corpo de mensagem de commit mais longo PODE ser fornecido após a descrição curta, fornecendo informações contextuais adicionais sobre as alterações no código. O corpo DEVE começar depois de uma linha em branco após a descrição.
1. Um corpo de mensagem de commit é livre e PODE consistir em infinitos parágrafos separados por uma nova linha.
1. PODE(M) ser fornecidos um ou mais rodapés, uma linha em branco após o corpo. Cada rodapé DEVE consistir em um token de palavra, seguido por um separador `:<espaço>` ou `<espaço>#`, seguido por um valor de uma string (isso é inspirado pelo [git trailer convention](https://git-scm.com/docs/git-interpret-trailers)).
1. Um token de rodapé DEVE usar `-` no lugar de espaços em branco, por exemplo, `Acked-by` (isso ajuda a diferenciar a seção de rodapé de um corpo de vários parágrafos). Uma exceção é feita para `BREAKING CHANGE`, que PODE também ser usado como um token.
1. O valor de um rodapé PODE conter espaços e novas linhas, e a análise (parsing) DEVE terminar quando o próximo token/separador de rodapé válido for encontrado.
1. BREAKING CHANGES DEVEM ser indicadas após o tipo/escopo de uma mensagem de commit, ou como uma entrada no rodapé.
1. Se incluída como um rodapé, uma alteração de quebra DEVE consistir no texto em maiúsculas QUEBRAR ALTERAÇÃO, seguido por dois pontos, espaço e descrição, por exemplo,
   _BREAKING CHANGE: as variáveis de ambiente agora têm precedência sobre os arquivos de configuração_.
1. Se incluído no prefixo de tipo/escopo, as `BREAKING CHANGES` DEVEM ser indicadas por um `!` imediatamente antes de `:`. Se o símbolo `!` for usado, `BREAKING CHANGE:` PODE ser omitido da seção de rodapé, e a descrição da mensagem de commit DEVE ser usada para descrever a `BREAKING CHANGE`.
1. Tipos diferentes de `feat` e` fix` PODEM ser usados em suas mensagens de commit, por exemplo, _docs: documentos de referência atualizados_
1. As unidades de informação que compõem o Conventional Commits NÃO DEVEM ser tratadas com distinção entre maiúsculas e minúsculas pelos implementadores, com exceção de `BREAKING CHANGE` que DEVE ser maiúscula.
1. `BREAKING-CHANGE` DEVE ser sinônimo de `BREAKING CHANGE`, quando usado como um token em um rodapé.

## Porque utilizar Conventional Commits

- Criação automatizada de CHANGELOGs.
- Determinar automaticamente alterações no versionamento semântico (com base nos tipos de commits).
- Comunicar a natureza das mudanças para colegas de equipe, o público e outras partes interessadas.
- Disparar processos de build e deploy.
- Facilitar a contribuição de outras pessoas em seus projetos, permitindo que eles explorem um histórico de commits melhor estruturado.

## Perguntas Frequentes

### Como devo lidar com mensagens de commit na fase inicial de desenvolvimento?

Recomendamos que você prossiga como se já tivesse lançado o produto. Normalmente _alguém_, mesmo que seja seus colegas desenvolvedores, está usando seu software. Eles vão querer saber o que foi corrigido, novas features, breaking changes etc.

### Os tipos no título das mensagens commit são maiúsculos ou minúsculos?

Qualquer opção pode ser usada, mas é melhor ser consistente.

### O que eu faço se o commit estiver de acordo com mais de um dos tipos?

Volte e faça vários commits sempre que possível. Parte do benefício do Conventional Commits é a capacidade de nos levar a fazer commits e PRs de forma mais organizada.

### Isso não desencoraja o desenvolvimento rápido e a iteração rápida?

Desencoraja a movimentação rápida de forma desorganizada. Ele ajuda você a ser capaz de se mover rapidamente a longo prazo em vários projetos com múltiplos colaboradores.

### O Conventional Commits leva os desenvolvedores a limitar o tipo de commits que eles fazem porque estarão pensando nos tipos fornecidos?

O Conventional Commits nos encorajam a fazer mais commits de tipos específicos, por exemplo correções. Além disso, a flexibilidade do Conventional Commits permite que sua equipe crie seus próprios tipos e altere ao longo do tempo.

### Qual a relação com o SemVer?

Commits do tipo `fix` devem ser enviados para releases `PATCH`. Commits do tipo `feat` devem ser enviados para releases `MINOR`. Commits com `BREAKING CHANGE` nas mensagens, independentemente do tipo, devem ser enviados para releases `MAJOR`.

### Como devo versionar minhas extensões utilizando a especificação do Conventional Commits Specification, e.g. `@jameswomack/conventional-commit-spec`?

Recomendamos utilizar o [SemVer](http://semver.org) para liberar suas próprias extensões para esta especificação (e incentivamos você criar essas extensões!)

### O que eu faço se acidentalmente usar o tipo errado de commit?

#### Quando você usou um tipo da especificação, mas não do tipo correto, por exemplo `fix` em vez de `feat`

Antes do merge ou release com o erro, recomendamos o uso de `git rebase -i` para editar o histórico do commit. Após o release, a limpeza será diferente de acordo com as ferramentas e processos que você utiliza.

#### Quando você usou um tipo que _não_ é da especificação, por exemplo `feet` em vez de `feat`

Na pior das hipóteses, não é o fim do mundo se um commit não atender à especificação do Conventional Commits. Significa apenas que o commit será ignorado por ferramentas baseadas nessa especificação.

### Todos os meus colaboradores precisam usar a especificação do Conventional Commits?

Não! Se você usar um workflow de git baseado em squash, os mantenedores poderão limpar as mensagens de commit à medida que forem fazendo novos merges, não adicionando carga de trabalho aos committers casuais.
Um workflow comum para isso é fazer com que o git faça squash dos commits automaticamente de um pull request e apresente um formulário para o mantenedor inserir a mensagem do commit apropriada para o merge.

### Como o Conventional Commits trata os commits de reversão?

Reverter código pode ser complicado: você está revertendo vários commits? se você reverter um recurso, a próxima versão deve ser um patch?

O Conventional Commits não o força a definir um comportamento de reversão. Em vez disso, deixamos isso para que os autores de ferramentas usem a flexibilidade de _tipos_ e _rodapés_ para desenvolver sua própria lógica para lidar com reversões.

Uma recomendação é usar o tipo `revert` e um rodapé que referencia os SHAs de commit que estão sendo revertidos:

```
revert: nunca mais falaremos do incidente do miojo

Refs: 676104e, a215868
```

## Sobre

A especificação do Conventional Commits é inspirada e fortemente baseada na [Angular Commit Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).

O primeiro rascunho desta especificação foi escrito em colaboração com algumas pessoas que contribuem para:

- [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog): um conjunto de ferramentas para analisar mensagens de commit baseados no Conventional Commit a partir do histórico git.
- [parse-commit-message](https://npmjs.com/package/parse-commit-message): Utilitários extensíveis para analisar, transformar e validar mensagens de commit baseados no Conventional Commit.
- [bumped](https://bumped.github.io): uma ferramenta que facilita o "release" de software. Facilitando executar ações antes e depois de uma liberar uma nova versão.
- [unleash](https://github.com/netflix/unleash): uma ferramenta para automatizar o ciclo de "release" e publicação de software.
- [lerna](https://github.com/lerna/lerna): uma ferramenta para gerenciar monorepos, que surgiu do projeto Babel.

## Ferramentas para Conventional Commits

- [fastlane-plugin](https://github.com/xotahal/fastlane-plugin-semantic_release): segue a especificação para gerenciar versões e gerar um changelog automaticamente.
- [commitizen/cz-cli](https://github.com/commitizen/cz-cli): Uma ferramenta Node.js para criar mensagens de confirmação seguindo as especificações do Conventional Commits.
- [commitizen-tools/commitizen](https://github.com/commitizen-tools/commitizen): Uma ferramenta escrita em Python para criar regras de confirmação para projetos, versões auto bump e geração automática de changelog.
- [php-commitizen](https://github.com/damianopetrungaro/php-commitizen): Uma ferramenta PHP construída para criar mensagens de confirmação seguindo as especificações do Conventional Commits.
  Configurável e utilizável em projetos PHP como uma dependência composer ou utilizável globalmente para projetos que não usam a linguagem PHP.
- [commitlint](https://github.com/conventional-changelog/commitlint): Um linter para verificar se suas mensagens de confirmação atendem ao formato do Conventional Commits.
- [gitlint](https://github.com/jorisroovers/gitlint): Linter de mensagem Git commit escrito em Python, que pode ser configurado para aplicar o formato do Conventional Commits.
- [conform](https://github.com/autonomy/conform): uma ferramenta que pode ser usada para impor políticas em repositórios git, incluindo Conventional Commits.
- [detect-next-version](https://npmjs.com/package/detect-next-version): Analise, detecte e obtenha mais metadados de mensagens de commit do Conventional Commits.
- [recommended-bump](https://www.npmjs.com/package/recommended-bump): Calcula o aumento da versão recomendada com base nas mensagens de commit do Conventional Commits.
- [git-commits-since](https://www.npmjs.com/package/git-commits-since): Obtenha todos os commits (crus) desde o período ou (por padrão) da última tag git SemVer, além de suporte a plug-ins.
- [standard-version](https://github.com/conventional-changelog/standard-version): Geração automática de versões e gerenciamento de CHANGELOG, usando o novo botão de squash do GitHub e o workflow recomendado do Conventional Commits.
- [Conventional Commit](https://github.com/lppedd/idea-conventional-commit): fornece contexto extensível e conclusão baseada em modelo e inspeções para o Conventional Commits dentro da caixa de diálogo Confirmação VCS. Disponível para todos os [IDEs JetBrains](https://www.jetbrains.com/).
- [Git Commit Template](https://plugins.jetbrains.com/plugin/9861-git-commit-template): Adicione o suporte ao Conventional Commits para [Editores JetBrains](https://www.jetbrains.com/) (IntelliJ IDEA, PyCharm, PhpStorm...).
- [commitsar](https://github.com/commitsar-app/commitsar): Ferramenta Go para verificar se os commits no branch são compatíveis com o Conventional Commits. Vem com imagem Docker para uso de CI.
- [semantic-release](https://github.com/semantic-release/semantic-release): Uma ferramenta que automatiza todo o fluxo de trabalho de lançamento do pacote, incluindo: determinar o próximo número da versão, gerar as notas de lançamento e publicar o pacote.
- [python-semantic-release](https://github.com/relekang/python-semantic-release): Controle de versão semântico automático para projetos Python. Esta é uma implementação Python do [semantic-release](https://github.com/semantic-release/semantic-release) para Node.js.
- [VSCode Conventional Commits](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits): Adiciona suporte para Conventional Commits ao VSCode.
- [Pyhist](https://github.com/jgoodman8/pyhist): Um utilitário Python para atualizar automaticamente a versão do pacote do histórico do git e gerar o Changelog.
- [git-mkver](https://github.com/idc101/git-mkver): Uma ferramenta para aplicar automaticamente semantic-version aos repositórios git com base no Conventional Commits.
- [Conventional Commits Next Version](https://gitlab.com/DeveloperC/conventional_commits_next_version): Um utilitário agnóstico de ferramenta/linguagem para calcular o próximo semantic-release com base nas mensagens de confirmação Git do Conventional Commits desde a última versão.
- [Semantic Commit Generator](https://jadsonlucena.github.io/semantic-commit-generator/): Um gerador prático para criar commits semânticos padronizados.

## Projetos Utilizando Conventional Commits

- [yargs](https://github.com/yargs/yargs): o parser de argumentos de linha de comando, com tema de pirata, favorito de todos.
- [istanbuljs](https://github.com/istanbuljs/istanbuljs): uma coleção de ferramentas e bibliotecas de código aberto para adicionar cobertura de teste a seus testes de JavaScript.
- [uPortal-home](https://github.com/UW-Madison-DoIT/angularjs-portal) e [uPortal-application-framework](https://github.com/UW-Madison-DoIT/uw-frame): Aperfeiçoamento opcional da interface do usuário [Apereo uPortal](https://www.apereo.org/projects/uportal).
- [massive.js](https://github.com/dmfay/massive-js): Uma biblioteca de acesso a dados para o Node e PostgreSQL.
- [electron](https://github.com/electron/electron): Crie aplicativos desktop cross-platform com JavaScript, HTML e CSS.
- [scroll-utility](https://github.com/LeDDGroup/scroll-utility): Um pacote simples de usar para centralizar elementos e animações suaves.
- [Blaze UI](https://github.com/BlazeUI/blaze): UI Toolkit de código aberto, Framework-free.
- [Monica](https://github.com/monicahq/monica): Um CRM pessoal. Lembre-se de tudo sobre seus amigos e familiares.
- [mhy](https://mhy.js.org): Uma toolbox e sistema para desenvolvimento com zero configuração, pronta para uso, multifuncional.

* [@tandil/diffparse](https://github.com/danielduarte/diffparse#readme): analisador simples para arquivos Diff (formato diff unificado).
* [@tandil/diffsplit](https://github.com/danielduarte/diffsplit#readme): Fácil divisão de .diff e .patch em seus arquivos.
* [@thi.ng/umbrella](https://github.com/thi-ng/umbrella): Monorepo de aproximadamente 100 projetos TypeScript para desenvolvimento orientado a dados.
* [yii2-basic-firestarter](https://github.com/HunWalk/yii2-basic-firestarter): 🔥 Um modelo de aplicativo Yii2 aprimorado.
* [dcyou/resume](https://github.com/dcyou/resume): 😎 Modelo para criar seu currículo online de forma fácil e rápida.
* [Nintex Forms](https://www.nintex.com/workflow-automation/modern-forms/): Crie facilmente formulários online dinâmicos para capturar e enviar dados precisos e atuais.
* [Tina CMS](https://tinacms.org): Um kit de ferramentas de código aberto para criar gerenciamento de conteúdo front-end em seu site.
* [Uno Platform](https://platform.uno): Crie aplicativos para celular, desktop e WebAssembly com C # e XAML. Hoje. Código aberto e com suporte profissional.

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

_quer seu projeto nesta lista?_ [envie um pull request](https://github.com/conventional-changelog/conventionalcommits.org/pulls).
