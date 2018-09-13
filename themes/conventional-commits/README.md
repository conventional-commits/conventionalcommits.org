# hugo conventional commits theme
Copy hugo-conventional-commits-theme inside your my-hugo-site/theme

## config.yaml example
All config params are optionals.
```yaml
baseURL: 'http://conventional-commits.org/'
languageCode: en-us
title: Conventional Commits
theme: conventional-commits

# Language
defaultContentLanguageInSubdir: true
defaultContentLanguage: "en"
languages:
  en:
    weight: 1
    languageName: "English"
  it:
    weight: 2
    languageName: "Italian"

# Content
params:
  versions:
    current: 1.0.0-beta.2
    list:
    - label: 1.0.0-beta
      url: 'https://github.com/conventional-commits/conventionalcommits.org'
    - label: 1.0.0-beta.1
      url: 'https://github.com/conventional-commits/conventionalcommits.org'
    - label: 1.0.0-beta.2
      url: 'https://github.com/conventional-commits/conventionalcommits.org'

  welcome:
    description: A specification made for write standardized and useful commit messages
    image: 'https://path-to-image'
    actions:
    - label: Read the specs
      url: 'https://github.com/conventional-commits/conventionalcommits.org'
    - label: GitHub
      url: 'https://github.com/conventional-commits/conventionalcommits.org'

  license:
    title: License
    action:
      label: Creative Commons - CC BY 3.0
      url: 'https://creativecommons.org/licenses/by/3.0/'

  footer:
    logos:
    - name: github
      url: 'https://github.com/conventional-commits/conventionalcommits.org'
```

## Apply theme changes
Development script
```ssh
npm run start
```

Production script
```ssh
npm run build
```

## Shortcodes
* banner-image
  * src (optional) | default: static/img/git-flow.png