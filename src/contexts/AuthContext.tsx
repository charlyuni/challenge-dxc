import { createClient } from '@supabase/supabase-js';
import { User } from '@types';
import { createContext, ReactNode, useEffect, useState } from 'react';

export const setSession = (accessToken?: string) => {
	if (accessToken) {
		localStorage.setItem('accessToken', accessToken);
	} else {
		localStorage.removeItem('accessToken');
	}
};

type AuthContextType = {
	user: User;
	error: boolean;
	isLoading: boolean;
	isAuthenticated: boolean;
	isInitialized: boolean;
	loginUser: (email: string, password: string) => Promise<void>;
	logout: () => Promise<void>;
	loginGuest: (tokenGuest: string) => Promise<void>;
};

const initialState: AuthContextType = {
	user: null,
	error: false,
	isLoading: true,
	isInitialized: false,
	isAuthenticated: false,
	loginUser: () => Promise.resolve(),
	logout: () => Promise.resolve(),
	loginGuest: () => Promise.resolve(),
};

export const AuthContext = createContext<AuthContextType>(initialState);

type Props = {
	children: ReactNode;
};

export function AuthProvider({ children }: Props) {
	const [user, setUser] = useState<User>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
	const [isInitialized, setIsInitialized] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);

	const supabase = createClient(
		'https://uptfspwkxomvqkizwmtc.supabase.co',
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVwdGZzcHdreG9tdnFraXp3bXRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY1OTkyNDgsImV4cCI6MjAwMjE3NTI0OH0.f5tk6z0RkfKebbkO6BietfYqaWoHw7ySmQ7wtj_EJaA'
	);

	useEffect(() => {
		const initialize = async () => {
			setIsLoading(true);
			try {
				const accessToken = window.localStorage.getItem('accessToken');

				if (accessToken) {
					setIsAuthenticated(true);
				} else {
					setUser(null);
					setIsAuthenticated(false);
				}
			} catch (err) {
				console.error(err);
			} finally {
				setIsLoading(false);
				setIsInitialized(true);
			}
		};

		initialize();
	}, []);

	const loginUser = async (email: string, password: string) => {
		setError(false);
		try {
			await supabase
				.from('user')
				.select('*')
				.eq('email', email.toLocaleLowerCase())
				.eq('password', password)
				.then((response) => {
					if (response.data && response.data.length > 0) {
						setIsAuthenticated(true);
						setSession(response.data[0].token);
						setError(false);

						const createUser: User = {
							id: response.data[0].id,
							name: response.data[0].name,
							emailUser: response.data[0].email,
						};
						setUser(createUser);
					} else {
						setSession();
						setIsAuthenticated(false);
						setUser(null);
						setError(true);
					}
				});
		} catch (err) {
			console.error(err);
		} finally {
			setIsLoading(false);
		}
	};

	const loginGuest = async (tokenGuest: string) => {
		console.log(tokenGuest);
		setError(false);
		try {
			await supabase
				.from('tokenGuest')
				.select('*')
				.eq('token', tokenGuest)
				.then((response) => {
					console.log(response.data);
					if (response.data && response.data.length > 0) {
						setIsAuthenticated(true);
						setSession(tokenGuest);
						setError(false);
					} else {
						setSession();
						setIsAuthenticated(false);
						setUser(null);
						setError(true);
					}
				});
		} catch (err) {
			console.error(err);
		} finally {
			setIsLoading(false);
		}
	};

	const logout = async () => {
		setSession();
		setIsAuthenticated(false);
		setUser(null);
	};

	const value = {
		user,
		error,
		isLoading,
		isInitialized,
		isAuthenticated,
		loginUser,
		logout,
		loginGuest,
	};
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
