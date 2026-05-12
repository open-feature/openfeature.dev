import VercelSvg from "@site/static/img/vercel-no-fill.svg";

import { Provider } from ".";

export const Vercel: Provider = {
	name: "Vercel Flags",
	logo: VercelSvg,
	technologies: [
		{
			technology: "JavaScript",
			vendorOfficial: true,
			href: "https://vercel.com/docs/flags/vercel-flags/sdks/openfeature",
			category: ["Server"],
		},
	],
};
