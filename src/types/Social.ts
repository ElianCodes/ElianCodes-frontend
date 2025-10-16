export interface Social {
	name: string;
	url: string;
	icon: SupportedIcon;
}

export enum SupportedIcon {
	'GITHUB' = 'github',
	'TWITTER' = 'twitter',
	'RSS' = 'rss'
}
