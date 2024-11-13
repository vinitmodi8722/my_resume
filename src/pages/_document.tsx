import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Dots:wght@400..700&family=Kaushan+Script&family=Protest+Strike&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-gradient-to-r from-green-400 to-blue-400 dark:bg-gradient-to-r dark:from-dark-100 dark:to-dark-500">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
