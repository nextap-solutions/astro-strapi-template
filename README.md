![astrostrapi](https://github.com/nextap-solutions/astro-strapi-template/assets/49836430/38ac91b6-98c8-435a-81fe-621d37fbe3b9)

## Quick Start: Astro + Strapi Template

This template serves as a foundation for developing applications using Astro and Strapi, offering a pre-configured setup for immediate use.

## Caution ⚠️
- **Node Version Requirements**: This template is tested with Node versions 18.17.0 and 20.3.0. Functionality with other versions may vary.
- **Strapi Version Note**: The template uses Strapi 4.16.0. Subsequent versions might face issues due to breaking changes with the versioning plugin.

## Features Overview

### Nx Support
- **Monorepo Framework**: Integrated with Nx, making it easy to add new apps and libraries within your project's monorepo structure.

### Strapi Integration
- **Automatic Type Generation**: Strapi types are generated in the cms-types workspace. This integration streamlines the use of CMS types in the Astro app, removing the need for crafting custom types manually.

### Docker Configuration
- **Prepared Docker Environment**: Docker setups are provided for both the Astro and Strapi applications, located in the `/docker` folder.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) `protip: use nvm`
  > ⚠️ **Note**: Versions other than 18.17.0 and 20.3.0 may face issues with the sharp package used in one of the strapi dependencies.
- [Yarn](https://yarnpkg.com/) 
- [Docker](https://www.docker.com/) 

### Template layout

```bash
.
├── apps/    # Workspaces
├── docker/     
├── libs/  # Shared libraries 
├── src/  
├── nx.json # Nx configuration
├── package.json 
├── tsconfig.base.json 
├── README.md # You are here now! 
```

### Installation

1. Clone the repository

```bash
git clone git@github.com:nextap-solutions/astro-strapi-template.git
```

2. Install dependencies

```bash
# you have to run this command in the root folder of the project
yarn install
```

3.a Start with docker

```bash
cd docker
docker compose up
```

3.b Start without docker

```bash
# in two different terminals
cd apps/cms && yarn run develop 
cd apps/astro && yarn run dev
```

At this point you should have the Astro app running on ` http://localhost:4321/` and the Strapi CMS admin panel running on `http://localhost:1337/admin`. Go ahead and create a new strapi user and log in.

## Support 

Having troubles with the template? Open us a Github issue.

TODO

- File watcher to generate cms types automatically during development
- Nicer root readme
- NX generator to rebrand/rename project
- Improve Docker files (they are extremenly large and basic right now)
