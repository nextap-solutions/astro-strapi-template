<img src="https://github.com/nextap-solutions/astro-strapi-template/assets/49836430/cdd3e7f6-7cc7-4ea6-a873-8a61abe5047a" alt="heade imager" style="width: 100%;" />

## Quick Start: Astro + Strapi Template

This template serves as a foundation for developing applications using Astro and Strapi, with the inclusion of Nx for monorepo management, offering a pre-configured setup for immediate use.

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

- [Node.js](https://nodejs.org/en/) `protip: use nvm, volta.js or similar`
  > ⚠️ **Note**: Versions other than 18.17.0 and 20.3.0 may face issues with the sharp package used in one of the strapi dependencies.
- [Yarn](https://yarnpkg.com/) 
- [Docker](https://www.docker.com/) 

### Template layout

```bash
.
├── apps/    # Workspaces
├── docker/     
├── libs/  # Shared libraries 
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

3.a Start in docker

```bash
cd docker
docker compose up
```

3.b Start outside of docker

```bash
# in three different terminal windows
cd docker && docker compose up db
nx run web:dev
nx run cms:develop
```

At this point you should have the Astro app running on `http://localhost:4321/` and the Strapi CMS admin panel running on `http://localhost:1337/admin`. Go ahead and create a new strapi user and log in.

## Support 

Having troubles with the template? Open us a Github issue.

TODO

- File watcher to generate cms types automatically during development
- Nicer root readme
- NX generator to rebrand/rename project
- Improve Docker files (they are extremenly large and basic right now)
