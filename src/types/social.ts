export interface Social {
	name: string;
	url: string;
	icon: SupportedIcon;
}

export interface SocialLink {
	title: string;
	href: string;
}

export enum SupportedIcon {
	'GITHUB' = 'github',
	'TWITTER' = 'twitter',
	'RSS' = 'rss',
	'FACEBOOK' = 'facebook',
	'INSTAGRAM' = 'instagram',
	'LINKEDIN' = 'linkedin',
}
