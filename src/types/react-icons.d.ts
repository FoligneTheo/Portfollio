import React from 'react';

// Surcharge du type IconType pour compatibilité React 19
declare module 'react-icons' {
  export type IconType = (props: React.SVGProps<SVGSVGElement>) => React.ReactNode;
}

declare module 'react-icons/fi' {
  import { IconType } from 'react-icons';
  export const FiMail: IconType;
}

declare module 'react-icons/fa' {
  import { IconType } from 'react-icons';
  export const FaLinkedinIn: IconType;
  export const FaGithub: IconType;
}

