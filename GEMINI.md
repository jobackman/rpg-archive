# Project Overview

This is a documentation project built with [VitePress](https://vitepress.dev/). It serves as a personal archive for Role-Playing Game (RPG) campaigns. The content is written in Markdown and organized into different campaigns.

The project uses [vitepress-plugin-auto-sidebar](https://www.npmjs.com/package/vitepress-plugin-auto-sidebar) to automatically generate the sidebar based on the directory structure of the `docs` folder. It also uses [markdown-it-image-lazy-loading](https://www.npmjs.com/package/markdown-it-image-lazy-loading) to lazy load images.

## Key Files

- `docs/`: This directory contains all the markdown content for the RPG campaigns.
- `docs/.vitepress/config.ts`: The main configuration file for VitePress. It defines the site's title, description, theme, and plugins.
- `package.json`: This file lists the project's dependencies and scripts.
- `README.md`: The main readme file for the project.

## Building and Running

To work with this project, you need to have Node.js and yarn installed.

1.  **Install dependencies:**
    ```bash
    yarn install
    ```

2.  **Run the development server:**
    ```bash
    yarn dev
    ```
    This will start a local development server and you can view the site in your browser.

3.  **Build the project:**
    ```bash
    yarn build
    ```
    This will build the static site into the `docs/.vitepress/dist` directory.

## Development Conventions

The content is organized by campaign under the `docs` directory. Each campaign has its own subdirectory. The sidebar is automatically generated from this directory structure. Images and other assets are stored in the `docs/assets` directory.
