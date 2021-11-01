import React from 'react'

export const UserContext = React.createContext();
export const AlertContext = React.createContext();
export const TranslationContext = React.createContext();

export const TranslationContextProvier = TranslationContext.Provider;
export const AlertContextProvider = AlertContext.Provider;
export const UserContextProvider = UserContext.Provider;

export default UserContextProvider