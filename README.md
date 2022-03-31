# IBM Systems Training Search Website 🔍

This is a React and Next.js-based [website](https://systemstraining.vercel.app) which delivers pre-rendered pages to view, search and filter for content on IBM Systems. There is a view counter for each course that updates in real time.

Use this website to find Systems infrastructure related training you like.

## Overview

- `/index` - Home page with Most Popular titles
- `/about` - About page with some useful links
- `/course/` - Pre-rendered MDX-based course descriptions in a format designed by Upendra Rajan
- `course/Submission/` - Guidelines on how to add content to this website

## Environment Variables

FIREBASE_PRIVATE_KEY=""\
FIREBASE_CLIENT_EMAIL=""\
GOOGLE_APPLICATION_CREDENTIALS=""\
FIREBASE_AUTH_DOMAIN=""\
FIREBASE_DATABASE_URL=""\
FIREBASE_PROJECT_ID=""\
FIREBASE_PRIVATE_KEY_ID=""\
FIREBASE_CLIENT_ID: ""\
FIREBASE_AUTH_URI: ""\
FIREBASE_TOKEN_URI: ""\
FIREBASE_AUTH_PROVIDER_X509_CERT_URL: ""\
FIREBASE_CLIENT_X509_CERT_URL: ""\
MAILCHIMP_API_KEY=\
MAILCHIMP_API_SERVER=\
MAILCHIMP_AUDIENCE_ID=\
BUTTONDOWN_API_KEY=\
NEXT_PUBLIC_GOOGLE_ANALYTICS=\

## Running Locally 💻

- Clone this project, import environment variables above in .env.local and run;
```bash
npm run dev
```

## Built using 🧰

- [Next.js](https://nextjs.org/)
- [MDX](https://github.com/mdx-js/mdx)
- [Chakra UI](https://chakra-ui.com/)
- Data from [IBM Training](https://ibm.com/training) parsed with Excel and Python (openpyxl)
- [Firebase Realtime Database](https://firebase.google.com/docs/database)
- [ButtonDown](https://buttondown.email) for newsletter