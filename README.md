# Budgetly

This project is created by Melanie Kalkhofer and Jakob Löffler for the course "Hypermedia UX Engineering"

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

## API Key, .env file

To enable the automatic currency calculator feature, create a `.env` file in the root of your project with the following content:

```sh
VITE_FX_FEED_API_KEY=your_key_here
```

A api key can be generated from [FxFeed](https://fxfeed.io/) or obtained from the creator of this project.

## Minor issue

There is a minor issue in the project with the bar chart: when deleting a table row, the bar chart only updates at page refresh
