const Menu = [{
  name: 'Dashboard',
  path: '/dashboard',
  icon: 'img/icons/aperture.svg',
  label: { value: 1, classNme: 'bg-success' }
}, {
  name: 'Cards',
  path: '/cards',
  icon: 'img/icons/radio-waves.svg'
}, {
  name: 'Charts',
  icon: 'img/icons/connection-bars.svg',
  submenu: [{
      name: 'Flot',
      path: '/charts/flot'
  }, {
      name: 'Radial',
      path: '/charts/radial'
  }, {
      name: 'ChartJS',
      path: '/charts/chartjs'
  }]
}, {
  name: 'Forms',
  icon: 'img/icons/clipboard.svg',
  submenu: [{
      name: 'Classic',
      path: '/forms/classic'
  }, {
      name: 'Validation',
      path: '/forms/validation'
  }, {
      name: 'Advanced',
      path: '/forms/advanced'
  }, {
      name: 'Material',
      path: '/forms/material'
  }, {
      name: 'Editors',
      path: '/forms/editors'
  }, {
      name: 'Dropzone',
      path: '/forms/dropzone'
  }]
}, {
  name: 'Tables',
  icon: 'img/icons/navicon.svg',
  submenu: [
      { name: 'Classic', path: '/tables/classic' },
      { name: 'Datatable', path: '/tables/datatable' },
      { name: 'DataGrid', path: '/tables/datagrid' }
  ]
}, {
  name: 'Layouts',
  icon: 'img/icons/grid.svg',
  submenu: [
      { name: 'Columns', path: '/layouts/columns' },
      { name: 'Overlap', path: '/layouts/overlap' },
      { name: 'Boxed', path: '/layouts/boxed' },
      { name: 'Tabs', path: '/layouts/tabs' },
      { name: 'Containers', path: '/layouts/containers' },
  ]
}, {
  name: 'Elements',
  icon: 'img/icons/levels.svg',
  submenu: [
      { name: 'Colors', path: '/elements/colors' },
      { name: 'Whiteframes', path: '/elements/whiteframes' },
      { name: 'Lists', path: '/elements/lists' },
      { name: 'Bootstrap', path: '/elements/bootstrap' },
      { name: 'Buttons', path: '/elements/buttons' },
      { name: 'Sweet-alert', path: '/elements/sweetalert' },
      { name: 'Spinners', path: '/elements/spinners' },
      { name: 'Toastify', path: '/elements/toastify' },
      { name: 'Grid', path: '/elements/grid' },
      { name: 'Grid Masonry', path: '/elements/gridmasonry' },
      { name: 'Typography', path: '/elements/typography' },
      { name: 'Icons', path: '/elements/icons' },
      { name: 'Utilities', path: '/elements/utilities' }
  ]
}, {
  name: 'Maps',
  icon: 'img/icons/planet.svg',
  submenu: [
      { name: 'Google Maps Full', path: '/maps/googlefull' },
      { name: 'Google Maps', path: '/maps/google' },
      { name: 'Vector Maps', path: '/maps/vector' },
      { name: 'Datamaps', path: '/maps/datamaps' }
  ]
}, {
  name: 'Pages',
  icon: 'img/icons/ios-browsers.svg',
  submenu: [
      { name: 'Timeline', path: '/pages/timeline' },
      { name: 'Invoice', path: '/pages/invoice' },
      { name: 'Pricing', path: '/pages/pricing' },
      { name: 'Contacts', path: '/pages/contacts' },
      { name: 'FAQ', path: '/pages/faq' },
      { name: 'Projects', path: '/pages/projects' },
      { name: 'Blog', path: '/pages/blog' },
      { name: 'Article', path: '/pages/article' },
      { name: 'Profile', path: '/pages/profile' },
      { name: 'Gallery', path: '/pages/gallery' },
      { name: 'Wall', path: '/pages/wall' },
      { name: 'Search', path: '/pages/search' },
      { name: 'Messages Board', path: '/pages/messagesboard' }
  ]
}, {
  name: 'User',
  icon: 'img/icons/person-stalker.svg',
  submenu: [
      { name: 'Login', path: '/login' },
      { name: 'Signup', path: '/signup' },
      { name: 'Lock', path: '/lock' },
      { name: 'Recover', path: '/recover' }
  ]
},

];

export default Menu;
