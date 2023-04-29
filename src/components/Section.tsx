import React from 'react';

interface Props {
	children: React.ReactNode | React.ReactNode[] | string;
}

export default function Section({ children }: Props) {
	return (
		<section className="text-slate-900 dark:text-slate-50 pe-3 cursor-pointer font-bold">
			{children}
		</section>
	);
}
