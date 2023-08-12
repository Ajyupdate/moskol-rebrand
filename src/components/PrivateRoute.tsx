// import { useRouter } from 'next/router';
// import { useEffect } from 'react';

// const PrivateRoute = ({ children }) => {
//   const router = useRouter();

//   useEffect(() => {
//     const jwt = document.cookie
//     if (!jwt) {
//       router.push('/login');
//     }
//   }, []);

//   return <>{children}</>;
// };

// export default PrivateRoute;

'use client'
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const PrivateRoute = ({ children }:{children: React.ReactNode}) => {
  const router = useRouter();

  useEffect(() => {
    const checkToken = async () => {
      try {
        const jwt = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, "$1");
        
        
        if (!jwt) {
          router.push('/auth/sign-in');
          return;
        }
        
        const response = await axios.get('http://localhost:3001/verify-token', {
          headers: {
            Authorization: `Bearer ${jwt}` // Include the token in the Authorization header
          }
        });

        console.log(response)
        if (response.status !== 201) {
          router.push('/auth/sign-in');
        }
      } catch (error) {
        console.error('Error checking tokenn:', error);
        router.push('/auth/sign-in');
      }
    };

    checkToken();
  }, []);

  return <>{children}</>;
};

export default PrivateRoute;
