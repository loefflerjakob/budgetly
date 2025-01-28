# Budgetly

This project is created by

- Melanie Kalkhofer
- Jakob Löffler

for the course "Hypermedia UX Engineering"

## Link to application

[Click me](https://budgetly-jakob-lofflers-projects.vercel.app/)

or copy this link into your browser

```sh
https://budgetly-jakob-lofflers-projects.vercel.app/
```

## Purpose of the application/motivation

This application is designed to provide a comprehensive overview of your income and expenses. It simplifies the process of adding and removing entries and includes an automatic currency conversion feature for seamless financial tracking.

## Project Guide

When opening the application for the first time, no income or expense entries are provided. To fill your application with data, just click the **Fill with dummy data** button in the navigation. If you want to remove all entries, just click the **Reset local storage** button.

You can add a new entry with the **Add Expense or Income** button.

Note: If you want to use the automatic currency calculator make sure to include the .env file in the root of your project, as described in [this section](#api-key-env-file). Please only use dates not older then 1 month from today, as the free api only provides data in this time period.

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

A api key can be generated from [FxFeed](https://fxfeed.io/) or obtained from the creator of this project. There is also a valid key provided in the project e-learning submittion.

## Minor issue

There is a minor issue in the project with the bar chart: when deleting a table row, the bar chart only updates at page refresh
