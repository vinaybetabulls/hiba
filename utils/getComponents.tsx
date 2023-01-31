import React from 'react';
import dynamic from 'next/dynamic';

const components = {
  Articles: dynamic(() => import('../components/Articles'), { ssr: false }),
  Institutions: dynamic(() => import('../components/Institutions'), {
    ssr: false,
  }),
  Login: dynamic(() => import('../components/Login'), {
    ssr: false,
  }),
  Users: dynamic(() => import('../components/Users'), { ssr: false }),
};

export function getDynamicComponent(c: keyof typeof components) {
  if (Object.prototype.hasOwnProperty.call(components, c)) {
    return components[c];
  }
  console.log('Unable to find component:', c);
  return '';
}

export function getBodyComponent(component: any) {
  const DynamicComponent = getDynamicComponent(component);
  if (DynamicComponent) {
    return <DynamicComponent />;
  }
}
