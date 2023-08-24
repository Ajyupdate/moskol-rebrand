

'use client'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;

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
        
        const response = await axios.get(`${API_ENDPOINT}/admin/verify-token`, {
          headers: {
            Authorization: `Bearer ${jwt}` 
          }
        });

        console.log(response)
        if (response.status !== 201) {
          router.push('/auth/sign-in');
        }
      } catch (error) {
        console.error('Error checking token:', error);
        router.push('/auth/sign-in');
      }
    };

    checkToken();
  }, []);

  return <>{children}</>;
};


export function PrivateRouteForClient({children}:{children: React.ReactNode}){
  
  const router = useRouter();

  useEffect(() => {
    const checkToken = async () => {
      try {
        const jwt = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, "$1");
        
        
        if (!jwt) {
          router.push('/auth/sign-in');
          return;
        }
        
        const response = await axios.get(`${API_ENDPOINT}/client/verify-token`, {
          headers: {
            Authorization: `Bearer ${jwt}` 
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
}

export default PrivateRoute;
