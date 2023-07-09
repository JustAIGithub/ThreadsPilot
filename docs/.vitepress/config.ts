import { defineConfig } from 'vitepress';

// refer https://vitepress.vuejs.org/config/introduction for details
export default defineConfig({
	lang: 'en-US',
	title: 'ThreadsPilot',
	description: 'Copilot For Threads & Best Threads Accounts or Tools To Follow.',

	head: [
		['link', { rel: 'icon', href: '/pilot.png' }], // 设置网站的 favicon
		['meta', { name: 'canonical', content: 'https://threadspilot.com' }],
		['meta', { name: 'description', content: 'Discover the best Threads accounts to follow or tools to use in different niches for top-notch content.' }], // 设置页面的描述
		['meta', { name: 'keywords', content: 'Threads Pilot,Threads Accounts,Follow List,CoPilot, for Threads tools' }],
		// 添加 Open Graph 标签
		['meta', { property: 'og:title', content: 'ThreadsPilot - Copilot For Threads' }],
		['meta', { property: 'og:description', content: 'Discover the best Threads accounts to follow or tools to use in different niches for top-notch content.' }],
	],

	themeConfig: {
		siteTitle: "ThreadsPilot",
		logo: "/pilot-logo.png",
		nav: nav(),

		sidebar: {
			'/accounts/': showAccounts(),
		},

		footer: {
			message: '.',
			copyright: 'Copyright © threadspilot.com'
		},

		search: {
			provider: 'local'
		}
	},
});

function nav() {
	return [
		{ text: 'Accounts To Follow', link: '/accounts/best-threads-accounts-to-follow' }
		// { text: 'Blog', link: '/blogs/best-threads-accounts-to-follow' }
	]
}

function showAccounts() {
	return [
		{
			text: 'Best Threads Accounts to Follow',
			collapsed: false,
			items: [
				{ text: 'Follow for Business', link: '/accounts/follow-for-business' },
				{ text: 'Top Threads Accounts to Follow', link: '/accounts/follow-for-top-accounts' },
				{ text: 'Follow for Inspiration', link: '/accounts/follow-for-inspiration' },
				{ text: 'Follow in Start-Ups', link: '/accounts/follow-in-startups' },
				{ text: 'Follow for AI', link: '/accounts/follow-for-ai' },
				{ text: 'Follow as Developer', link: '/accounts/follow-as-developer' },
				{ text: 'Follow in Marketing', link: '/accounts/follow-in-marketing' },
				{ text: 'To Learn Something New', link: '/accounts/follow-to-learn-something-new' },
				{ text: 'Need Good Visuals', link: '/accounts/follow-for-need-good-visuals' },
				{ text: 'IndieHacker Accounts to Follow', link: '/accounts/indie-hacker-accounts' }
			]
		}
	]
}