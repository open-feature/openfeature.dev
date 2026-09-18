import PydanticLogfireSvg from '@site/static/img/pydantic-logfire-no-fill.svg';
import { OFREP_API } from '.';

export const PydanticLogfire: OFREP_API = {
  name: 'Pydantic Logfire',
  logo: PydanticLogfireSvg,
  href: 'https://pydantic.dev/docs/logfire/manage/client-side-feature-flags/',
  vendorOfficial: true,
  description:
    'Pydantic Logfire serves its managed variables to browser, mobile, and edge clients through OFREP evaluation endpoints.',
};
