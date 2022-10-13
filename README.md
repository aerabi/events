# Events :beer:
**A MEAN app that store events happening around**

Example: [kube.events](https://kube.events)

This is the 3rd repo that I'm creating to write a Docker blog from. The previous ones are the following:

- [Link Shortener with Django](https://github.com/aerabi/link-shortener)
- [Link Shortener with Nest.js and Redis](https://github.com/aerabi/link-shortener-js)

Based on these two repos, Ajeet and I wrote two blog posts that were published on Docker's website:

- [How to Build and Deploy a Django-based URL Shortener App from Scratch](https://www.docker.com/blog/how-to-build-and-deploy-a-django-based-url-shortener-app-from-scratch/)
- [How to Build and Deploy a URL Shortener Using TypeScript and Nest.js](https://www.docker.com/blog/how-to-build-and-deploy-a-url-shortener-using-typescript-and-nest-js/)

This idea for this repo is the same. This repo will host an event website similar to [kube.events](https://kube.events) that will be the base for the next Docker blog post.

> :warning: Contributions are welcome.

## How to Contribute

I have created a few issue as starting points. You can confer also the aforementioned repos and blog posts. The contributors will be mentioned on the end result.

Some recommendations:
- Use TypeScript instead of JavaScript wherever possible (e.g. for the Express backend).
- Try to use test-driven development (TDD).
- Try to use consistent commit messages, e.g. take a look at [this article](https://itnext.io/ten-commandments-of-git-commit-messages-94bd6dcf6e0e).

The directory structure should be as follows:
```
.
├── 📁 backend
├── 📁 frontend
├── 📄 docker-compose.yaml
└── 📄 README
```

## Contributors

[![List of Contributors](https://contrib.rocks/image?repo=aerabi/events)](https://github.com/aerabi/events/graphs/contributors)
