import { createContext } from 'react';
import { Site } from '../common/props';

export const SiteContext = createContext<Site>({
  bodyComponent: 'Articles',
});
