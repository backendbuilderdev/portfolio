import dynamic from "next/dynamic";

const Recent   = dynamic(import ('../../src/components/sections/articles/recent'));

import Color from '../../src/components/utils/page.colors'

import colors from '../../src/content/articles/_colors.json'
import settings from '../../src/content/_settings.json'
import TitleArticles from "./title.articles";

//this is the article page
export default function Articles({ mediumArticles }) {
	{/*this will return the article page content from medium using api req*/}
	return (
		<>
			<TitleArticles/>
			<Color colors={colors} />
			<Recent mediumArticles={mediumArticles}/>
		</>
	)
}


export async function getServerSideProps({ res }) {
	res.setHeader(
		'Cache-Control',
		'public, s-maxage=600, stale-while-revalidate=59'
	)

	try {
		// Remove @ symbol if present in username
		const username = settings.username.medium.replace('@', '');
		const rssUrl = `https://medium.com/feed/@${username}`;
		
		const mediumRSS = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`);
		const mediumArticles = await mediumRSS.json();

		// Check if RSS fetch was successful
		if (mediumArticles.status === 'error') {
			return {
				props: {
					mediumArticles: { items: [] }
				}
			};
		}

		// Set default thumbnail for articles without one
		if (mediumArticles.items) {
			mediumArticles.items = mediumArticles.items.map(article => ({
				...article,
				thumbnail: article.thumbnail || '/img/logo_rounded.png'
			}));
		}

		return { props: { mediumArticles } };
	} catch (error) {
		console.error('Error fetching Medium articles:', error);
		return {
			props: {
				mediumArticles: { items: [] }
			}
		};
	}
}