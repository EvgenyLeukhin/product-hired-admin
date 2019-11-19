const Menu = [
  {
    id: 0,
    name: 'Users',
    icon: 'img/icons/person-stalker.svg',
    path: '/users'
  },
  {
    id: 1,
    name: 'Companies',
    icon: 'img/icons/ios-browsers.svg',
    path: '/companies'
  },
  {
    id: 2,
    name: 'Charts',
    icon: 'img/icons/connection-bars.svg',
    submenu: [
      { name: 'Talents',   path: '/talents' },
      { name: 'Employers', path: '/employers' },
      { name: 'Filters',   path: '/filters' }
    ],
  },
  {
    id: 3,
    name: 'Jobs',
    icon: 'img/icons/navicon.svg',
    path: '/jobs'
  },
  {
    id: 4,
    name: 'Skills',
    icon: 'img/icons/navicon.svg',
    path: '/skills'
  },
  {
    id: 5,
    name: 'Roles',
    icon: 'img/icons/navicon.svg',
    path: '/roles'
  },
  {
    id: 6,
    name: 'Plans',
    icon: 'img/icons/navicon.svg',
    path: '/plans'
  },
];

export default Menu;
