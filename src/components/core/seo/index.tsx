import { Helmet } from 'react-helmet-async';

export interface ISeoProps {
	title?: string;
	description?: any;
}

export default function Seo({ title, description }: ISeoProps) {
	return (
		<Helmet titleTemplate='Challenge Balada' defaultTitle='Balada'>
			{/* Standard metadata tags */}
			<title>{title}</title>
			<meta name='description' content={description} />
			{/* End standard metadata tags */}
		</Helmet>
	);
}
