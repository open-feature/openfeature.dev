import MDBRulesSvg from '@site/static/img/mdb-rules-no-fill.svg';
import { Provider } from '.';

export const MDBRules: Provider = {
  name: 'MongoDB + Rules',
  logo: MDBRulesSvg,
  technologies: [
    {
      technology: 'Go',
      vendorOfficial: false,
      href: 'https://github.com/ZackarySantana/mongo-openfeature-go',
      category: ['Server'],
    },
  ],
};
