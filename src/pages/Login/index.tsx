import MModal from '../../components/atoms/MModal/MModal';
import Seo from '../../components/core/seo';
import LoginMain from '../../components/organism/LoginMain/LoginMain';
import Layout from '../../components/templates/Layout';

const LoginPage = () => {
	return (
		<>
			<Seo title={'Login'} description={'Login'} />
			<Layout Header={null} Footer={null}>
				<MModal isOpen={true}>
					<LoginMain />
				</MModal>
			</Layout>
		</>
	);
};

export default LoginPage;
