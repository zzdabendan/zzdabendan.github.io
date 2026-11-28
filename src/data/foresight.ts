// 预知层数据：四列（一年 / 三年 / 四年 / 十年）× 三行（上 / 中 / 下）
// 上 = 最好情况；中 = 按当前节奏最可能发生；下 = 最坏情况
// about 页右栏与 plan 页预知层共用这份数据，填一次两边同步

export type ForesightColumn = {
	horizon: string;
	year: number;
	up: string;
	mid: string;
	down: string;
};

export type ForesightRow = {
	key: 'up' | 'mid' | 'down';
	label: string;
	hint: string;
};

export const foresightColumns: ForesightColumn[] = [
	{ horizon: '一年', year: 2027, up: '', mid: '', down: '' },
	{ horizon: '三年', year: 2029, up: '', mid: '', down: '' },
	{ horizon: '四年', year: 2030, up: '', mid: '', down: '' },
	{ horizon: '十年', year: 2036, up: '', mid: '', down: '' },
];

export const foresightRows: ForesightRow[] = [
	{ key: 'up', label: '上', hint: '最好的情况是什么？' },
	{ key: 'mid', label: '中', hint: '按当前节奏最可能发生什么？' },
	{ key: 'down', label: '下', hint: '最坏的情况是什么，怎么提前防？' },
];
