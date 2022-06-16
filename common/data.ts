import { SideNavLinks } from './props';

export const logo = {
  url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKCIMH_cCPSa1j_DUWHZbjo9mhEvRtEYXqow&usqp=CAU',
  altText: 'Logo',
};

export const sideNavLinks: SideNavLinks[] = [
  {
    url: '/articles',
    label: 'Articles',
    icon: 'chrome_reader_mode_outlined_icon',
  },
  {
    url: '/institutions',
    label: 'Institutions',
    icon: 'business_outlined_icon',
  },
];
