import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <head>
          <meta charset="UTF-8" />
          <link
            rel="icon"
            type="image/svg+xml"
            href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtvkdZN4qnQuUYBh5EsTaxQP-pHvYwMb8ZGA&s"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Hulu - app</title>
        </head>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
