export interface Social {
	name: string;
	url: string;
	icon: SupportedIcon;
}

export interface SocialLink {
	name: string;
	url: string;
}

export enum SupportedIcon {
	'GITHUB' = 'github',
	'TWITTER' = 'twitter',
	'RSS' = 'rss',
	'FACEBOOK' = 'facebook',
	'INSTAGRAM' = 'instagram',
	'LINKEDIN' = 'linkedin',
}
