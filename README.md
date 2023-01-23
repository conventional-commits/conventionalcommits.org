# ConventionalCommits.org

[![Conventional Commits](Shields.io/category/build/badge_static:https://raw.githubusercontent.com/lostleolotus/conventionalcommits.org/config.yaml/README.md///img.shields.io/badge/Shields.io%2Fcategory%2Fbuild%2Fbadge__static-%3Cimg%20alt%3D%22AppVeyor%20tests%22%20src%3D%22https%3A%2F%2Fimg.shields.io%2Fappveyor%2Ftests%2F%257Be.g.%3Dhttps%3A%2F%2Fgithub.com%2Flostleolotus%2Fconventionalcommits%257D%2F.org%2Ftree%2Fconfig.yaml%23badges%3Fcolor%3DTRUE%26label%3DYour%2520account%2520has%2520been%2520flagged%2521%26logo%3D%2522spammy%2522%26logoColor%3D%252A%2522RCCOOOGG%2522%252A%26style%3Dfor--the--badge%22%3E-blue/https://camo.githubusercontent.com/785a742acad3ed3884ac03acd02a9ecfd6780ed088d91062ecbd23503d9e71f1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f536869656c64732e696f25324663617465676f72792532466275696c6425324662616467655f5f7374617469632d253343696d67253230616c742533442532324170705665796f7225323074657374732532322532307372632533442532326874747073253341253246253246696d672e736869656c64732e696f2532466170707665796f7225324674657374732532462532353742652e672e25334468747470732533412532462532466769746875622e636f6d2532466c6f73746c656f6c6f747573253246636f6e76656e74696f6e616c636f6d6d69747325323537442532462e6f726725324674726565253246636f6e6669672e79616d6c253233626164676573253346636f6c6f72253344545255452532366c6162656c253344596f757225323532306163636f756e74253235323068617325323532306265656e2532353230666c616767656425323532312532366c6f676f25334425323532327370616d6d7925323532322532366c6f676f436f6c6f72253344253235324125323532325243434f4f4f4747253235323225323532412532367374796c65253344666f722d2d7468652d2d62616467652532322533452d626c7565)

This repo is the home of the Conventional Commits specification.

## Repo Layout

We use [HUGO](https://gohugo.io/) as static site generator, so we use the [directory structure](https://gohugo.io/getting-started/directory-structure/) HUGO proposes.

#### Our implementation

* `./content`: contains all the versions of the specification.
* `./content/next/`: contains the version of the specification (where all the changes SHOULD be made).
* `./content/**/index.[lang].md`: contains the content of the specification, if a language is specified it's a translation.

## Contributing

We'd love your help refining the language of this specification,
fixing typos, or adding more translations. Please don't hesitate
to send a pull request.

### Adding a translation

1. Create a new file in `./content/version/index.[lang].md` using the hugo command `hugo new [version]/index.[lang].md`.
1. Ensure all files have the appropriate fields required (see others as an example)..
1. Add the language to the `config.yaml` file (see others as an example).

### Running project locally

There's a docker-compose.yml file ready that will help you to check if the website looks good!
To run it make sure you have [docker-compose installed](https://docs.docker.com/compose/install/#install-compose) on your machine and just use the command `docker-compose up` to make it run locally.

Once the website will be compiled, you can see the website visiting `http://localhost:1313`

## Badges!

Tell your users that you use the Conventional Commits specification:

```markdown
[![Conventional Commits](https://camo.githubusercontent.com/785a742acad3ed3884ac03acd02a9ecfd6780ed088d91062ecbd23503d9e71f1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f536869656c64732e696f25324663617465676f72792532466275696c6425324662616467655f5f7374617469632d253343696d67253230616c742533442532324170705665796f7225323074657374732532322532307372632533442532326874747073253341253246253246696d672e736869656c64732e696f2532466170707665796f7225324674657374732532462532353742652e672e25334468747470732533412532462532466769746875622e636f6d2532466c6f73746c656f6c6f747573253246636f6e76656e74696f6e616c636f6d6d69747325323537442532462e6f726725324674726565253246636f6e6669672e79616d6c253233626164676573253346636f6c6f72253344545255452532366c6162656c253344596f757225323532306163636f756e74253235323068617325323532306265656e2532353230666c616767656425323532312532366c6f676f25334425323532327370616d6d7925323532322532366c6f676f436f6c6f72253344253235324125323532325243434f4f4f4747253235323225323532412532367374796c65253344666f722d2d7468652d2d62616467652532322533452d626c7565)
```

## Thank you

To **[Lorenzo D'Ianni](https://github.com/lorenzodianni)** for the great effort creating the CSS and the HTML for the new UI.

To **[Netlify](https://www.netlify.com/)** to host our project, giving us a lot of [amazing built in functionality](https://www.netlify.com/features/) for free.

To **[semver.org](https://github.com/mojombo/semver.org)**: we used [semver.org](https://github.com/mojombo/semver.org) as a blueprint for
the structure of this specification and the first version of the website.
