# ConventionalCommits.org

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

This repo is the home of the Conventional Commits specification.

## Repo Layout

* `./index.md`: contains the current version of the specification.
* `./spec`: contains past versions of the  specification.
* `./lang`: contains various translations of the specification.

## Contributing

We'd love your help refining the language of this specification,
fixing typos, or adding more translations. Please don't hesitate
to send a pull request.

### Adding a translation

1. Create a new folder in `lang/` with the appropriate language tag.
2. Add a translated `index.md` to that folder.
3. Add a translated `spec/vX.X.X.md` for the latest spec to that folder.
4. Ensure all files have the appropriate `title` and `language` front matter (see others as an example).
5. Add the language to the `_config.yml` file.

## Badges!

Tell your users that you use the Conventional Commits specification:

```markdown
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
```

## Thank you semver.org

We used [semver.org](https://github.com/mojombo/semver.org) as a blueprint for
both the website and structure of this specification.
