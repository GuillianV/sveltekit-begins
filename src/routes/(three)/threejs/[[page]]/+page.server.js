import { error, redirect } from '@sveltejs/kit';

const regNumbers = new RegExp('^[0-9]*$');
const pagination = 9;
const experiencesData = [
	{
		path: '/three/journey/5',
		title: 'journey 5'
	},
	{
		path: '/three/journey/6',
		title: 'journey 6'
	},
	{
		path: '/three/journey/7',
		title: 'journey 7'
	},

	{
		path: '/three/journey/8',
		title: 'journey 8'
	},
	{
		path: '/three/journey/9',
		title: 'journey 9'
	},
	{
		path: '/three/journey/10',
		title: 'journey 10'
	},

	{
		path: '/three/journey/11',
		title: 'journey 11'
	},
	{
		path: '/three/journey/12',
		title: 'journey 12'
	},
	{
		path: '/three/journey/13',
		title: 'journey 13'
	},
	{
		path: '/three/journey/15',
		title: 'journey 15'
	},

	{
		path: '/three/journey/16',
		title: 'journey 16'
	},

	{
		path: '/three/journey/17',
		title: 'journey 17'
	},

	{
		path: '/three/journey/18',
		title: 'journey 18'
	},

	{
		path: '/three/journey/19',
		title: 'journey 19'
	},

	{
		path: '/three/journey/20',
		title: 'journey 20'
	},

	{
		path: '/three/journey/21',
		title: 'journey 21'
	},

	{
		path: '/three/journey/22',
		title: 'journey 22'
	},

	{
		path: '/three/journey/23',
		title: 'journey 23'
	},
	{
		path: '/three/journey/24',
		title: 'journey 24'
	},
	{
		path: '/three/journey/25',
		title: 'journey 25'
	},
	{
		path: '/three/journey/26',
		title: 'journey 26'
	},

	{
		path: '/three/journey/28',
		title: 'journey 28'
	},
	{
		path: '/three/journey/29',
		title: 'journey 29'
	},
	{
		path: '/three/journey/30',
		title: 'journey 30'
	},
	{
		path: '/three/journey/31',
		title: 'journey 31'
	},
	{
		path: '/three/journey/32',
		title: 'journey 32'
	},
	{
		path: '/three/journey/33',
		title: 'journey 33'
	},
	{
		path: '/three/journey/35',
		title: 'journey 35 Loading' 
	},
    {
        path:"/three/lameule",
        title:"La meule !",
    },

    {
        path:"/three/rl",
        title:"Rocket Lag !",
    },

    {
        path:"/three/map",
        title:"Google Earth V0.1",
    },
    {
        path:"https://tac-tic.guillian.net/",
        title:"Tac Tic !",
    },
	{
        path:"/three/slider",
        title:"Custom Slider",
    },
  
];

export const load = async (serverloadEvent) => {
	const { params } = serverloadEvent;
	let { page = 1 } = params;

	if (
		page == null ||
		!regNumbers.test(page) ||
		page < 1 ||
		experiencesData.length - 1 + pagination < page * pagination
	)
		throw error(404);

	const experiencesToSend = [];

	for (let i = (page - 1) * pagination; i < pagination * page; i++) {
		if (experiencesData[i] !== undefined) {
			experiencesToSend.push(experiencesData[i]);
		}
	}

	const minPagination = 1;
	const modulo = experiencesData.length % pagination;
	const maxPagination = (experiencesData.length - modulo) / pagination + (modulo > 0 ? 1 : 0);
	const actualPagination = page;
	const arrayOfPagination = [];
	for (let i = minPagination; i <= maxPagination; i++) arrayOfPagination.push(i);

	return {
		experiences: experiencesToSend,
		minPagination,
		maxPagination,
		actualPagination,
		arrayOfPagination
	};
};
