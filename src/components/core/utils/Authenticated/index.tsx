import { ReactNode, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import useAuth from '../../../../hooks/useAuth';

type Props = {
	children: ReactNode;
};

const Authenticated = ({ children }: Props) => {
	const auth = useAuth();
	const location = useLocation();
	const [requestedLocation, setRequestedLocation] = useState<string | null>(
		null
	);

	if (!auth.isAuthenticated) {
		if (location.pathname !== requestedLocation) {
			setRequestedLocation(location.pathname);
		}
		return <Navigate to='/account/login' />;
	}

	if (requestedLocation && location.pathname !== requestedLocation) {
		setRequestedLocation(null);
		return <Navigate to={requestedLocation} />;
	}

	return <>{children}</>;
};

export default Authenticated;
