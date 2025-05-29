// import React, { createContext, useMemo, useState } from "react";
// import it from "@locale/it.json";
// import en from "@locale/en.json";

// const translations = {
//   it,
//   en,
// };

// export const LanguageContext = createContext();

// export const LanguageProvider = ({ children }) => {
//   const [currentLanguage, setCurrentLanguage] = useState("it");

//   const currentTranslations = useMemo(() => {
//     return translations[currentLanguage] || it;
//   }, [currentLanguage]);
//   const value = {
//     language: currentLanguage,
//     setLanguage: setCurrentLanguage,
//     translations: currentTranslations,
//   };
//   return (
//     <LanguageContext.Provider value={value}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };
