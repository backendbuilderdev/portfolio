import { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'
import dynamic from 'next/dynamic';

const KitModal = dynamic(() => import('../src/components/sections/newsletter/newsletter'));

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta name="description" content="Sandeep Pal - Full Stack Developer proficient in Web, Cloud, DevOps, and AI/ML" />
				<meta name="theme-color" content="#000000" />
				<link rel="canonical" href="https://sandeeppal.com" />
				<link rel="icon" href="/favicon/favicon.ico" />
				<link rel="apple-touch-icon" href="/img/logo_rounded.png" />
				<link rel="manifest" href="/manifest.json" />
				<meta property="og:title" content="Sandeep Pal" />
				<meta property="og:description" content="Full Stack Developer specializing in Cloud, DevOps, AI/ML" />
				<meta property="og:image" content="https://sandeeppal.com/img/sandeeppal.jpeg" />
				<meta property="og:url" content="https://sandeeppal.com" />
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:title" content="Sandeep Pal" />
				<meta name="twitter:description" content="Full Stack Developer specializing in Cloud, DevOps, AI/ML" />
				<meta name="twitter:image" content="https://sandeeppal.com/img/sandeeppal.jpeg" />
				<Script id="theme-init" strategy="beforeInteractive">
					{`document.documentElement.dataset.theme = 'dark';`}
				</Script>
			</Head>
			<body>
				<Main />
				<KitModal />
				<NextScript />
			</body>
		</Html>
	)
}