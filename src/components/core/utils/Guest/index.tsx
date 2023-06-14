import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import useAuth from '../../../../hooks/useAuth';

type Props = {
	children: ReactNode;
};

const Guest = ({ children }: Props) => {
	const { isAuthenticated } = useAuth();

	if (isAuthenticated) {
		return <Navigate to='/list/songs' />;
	}
	return <>{children}</>;
};

export default Guest;
