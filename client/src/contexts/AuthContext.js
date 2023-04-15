import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { authServiceFactory } from '../services/authService';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const [auth, setAuth] = useLocalStorage('auth', {});
    const navigate = useNavigate();

    const authService = authServiceFactory(auth.accessToken);

    const onLoginSubmit = async (data) => {
        try {
          const result = await authService.login(data);

          setAuth(result);

          navigate('/');
        } catch (error) {
          //alert user
          console.log('There is a problem')

        }
   };


    const onRegisterSubmit = async (values) => {
        const {repass, ...registerData} = values;
        if(repass !== registerData.password) {
         return;
        }
         
        try {
         console.log(registerData);
         const result =  await authService.register(registerData);
         console.log(result) 
         setAuth(result);
   
         navigate('/');
        } catch (error) {
         console.log('There is a problem')
        }
       }


    const onLogout =  async () => {
        await authService.logout();
  
        setAuth({})
      }

    const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken, // turns truthy value to true
        
       }


       return(
    <>
       <AuthContext.Provider  value={contextValues}>
           {children}
       </AuthContext.Provider>
    
    </>
);
}