import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';

function authRoute(Component: any) {
  return function AuthRoute(props: any) {
    const router = useRouter();
    const [authenticated, setAuthenticated] = useState(false);
    useEffect(() => {
      const checkToken = async () => {
        const token = localStorage.getItem('accessToken');

        if (!token) {
          router.replace('/');
        } else {
          const decodedToken: any = jwt_decode(token);
          console.log({ decodedToken });
          if (!decodedToken?.exp) {
            localStorage.removeItem('accessToken');
            router.replace('/');
          }
          if (new Date(decodedToken.exp * 1000).getTime() <= Date.now()) {
            localStorage.removeItem('accessToken');
            router.replace('/');
          } else {
            setAuthenticated(true);
          }
        }
      };
      checkToken();
    }, [router]);

    if (authenticated) {
      return <Component {...props} />;
    } else {
      return null;
    }
  };
}
export default authRoute;
