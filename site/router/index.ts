import { myPkgs } from 'PackageNameByCore';

export default [
  {
    path: '*',
    root: true,
    children: myPkgs,
  },
];
