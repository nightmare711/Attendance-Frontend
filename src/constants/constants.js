import {
	faTachometerAlt,
	faUser,
	faCalendar,
	faBell,
	faBook,
} from '@fortawesome/free-solid-svg-icons'
export const listSidebar = [
	{
		title: 'Dash Board',
		icon: faTachometerAlt,
		child: [],
		href: '/dashboard',
	},
	{
		title: 'Students',
		icon: faUser,
		child: [],
		href: '/students',
	},
	{
		title: 'Calendar',
		icon: faCalendar,
		child: [],
		href: '/calendar',
	},
	{
		title: 'Subjects',
		icon: faBook,
		child: [],
		href: '/subject',
	},
	{
		title: 'Notification',
		icon: faBell,
		child: [],
		href: '/subject',
	},
	{
		title: 'History',
		icon: faTachometerAlt,
		child: [],
	},
	{
		title: 'Search students',
		icon: faTachometerAlt,
		child: [],
	},
]
export const KEY_SECRET = 'nightmare_secret_key'
