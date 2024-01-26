<img src="https://github.com/nextap-solutions/astro-strapi-template/assets/49836430/cdd3e7f6-7cc7-4ea6-a873-8a61abe5047a" alt="header imager" style="width: 100%;" />

## Quick Start: Astro + Strapi Template

This template serves as a foundation for developing applications using Astro and Strapi, with the inclusion of Nx for monorepo management, offering a pre-configured setup for immediate use.

## Caution ⚠️
- **Node Version Requirements**: This template is tested with Node versions 18.17.0 and 20.3.0. Functionality with other versions may vary.
- **Strapi Version Note**: The template uses Strapi 4.16.0. Subsequent versions might face issues due to breaking changes with the versioning plugin. The versioning plugin is also expecting a `DATABASE_CLIENT` environmental variable to be set inside of the cms app regardless of setting postgres as the database connection in cms/config/database.ts.

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

You can either start the project in development mode or in production mode. The difference is that in development mode the cms and the web app are started in watch mode, while in production mode they are started in production mode.

###### development mode

```bash
cd docker 
docker compose up
```

###### production mode

```bash
cd docker
docker compose -f docker-compose.yml -f docker-compose.prod.yml up
```

3.b Start outside of docker

```bash
# in two different terminal windows
cd docker && docker compose up db
nx run-many --target=dev --projects=web,cms --parallel
```

At this point you should have the Astro app running on `http://localhost:4321/` and the Strapi CMS admin panel running on `http://localhost:1337/admin`. Go ahead and create a new strapi user and log in.

## Utils for working with Strapi

Because Strapi returns some data in unconventional format, there are several util functions to help you. You can find them in `/apps/web/src/lib/strapi.ts`

### Examples
`fetchApi<T>(props: Props): Promise<T>` - fetch Strapi endpoint

```ts
const homepage = await fetchApi<ApiHomepageHomepage>({
  endpoint: 'homepage',
  wrappedByKey: 'data',
  locale: locale,
})
```
`getStringData(data: Record<string, unknown>): Record<string, string | undefined>` - returns unwrapped Strapi data from `attributtes`

```ts
const { title, description } = getStringData(homepage);
```
`getUploadFileUrl(fileData: unknown): UploadFileData` - returns `url`, `alt` and `mime` from Strapi media type

```ts
const { url, alt, mime } = getUploadFileUrl(homepage.logo);
```

## Support 

Having troubles with the template? Open us a Github issue.

TODO

- NX generator to rebrand/rename project
- Improve Docker files (they are extremenly large and basic right now)
