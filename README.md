# Clear Glade Farm

Simple web app for Clear Glade Farm.

## Features

- Built on Gatsby and React Bootstrap.
- Custom booking tool
- Strapi CMS GraphQL integration

## Getting Started

- Due to a big with the used version of webpack, run this command first: `export NODE_OPTIONS=--no-experimental-fetch`
- Run `npm run dev` to spin up API, which can be found [here](https://github.com/jaredgoldman/clear-glade-api). Then run the same command on this repo to spin up the site. As long as there is at least one entry in each collection fetched from the API, the site will build without GraphQL errors.

## Visit production site

- You can browse the site and manage bookings for a generic user [here](https://clear-glade-farm.netlify.app) - use email: `user@usersite.com` and password: `password`

## Dependencies

- react-google-maps/api => ^2.7.0,
- axios => ^0.26.1,
- bootstrap => ^5.1.3,
- date-fns => ^2.28.0,
- dotenv => ^16.0.0,
- gatsby => ^4.11.1,
- gatsby-plugin-image => ^2.11.1,
- gatsby-plugin-netlify => ^4.1.0,
- gatsby-plugin-react-helmet => ^5.11.0,
- gatsby-plugin-sass => ^5.11.1,
- gatsby-plugin-sharp => ^4.11.1,
- gatsby-source-filesystem => ^4.11.1,
- gatsby-source-strapi => ^2.0.0,
- gatsby-transformer-sharp => ^4.11.0,
- local-storage => ^2.0.0,
- react => ^17.0.1,
- react-bootstrap => ^2.2.2,
- react-dom => ^17.0.1,
- react-helmet => ^6.1.0,
- react-image-lightbox => ^5.1.4,
- sass => ^1.49.10
