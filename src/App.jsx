import React, { useState } from 'react';
    import translations from './translations';
    import LanguageToggle from './LanguageToggle';
    import AdminPanel from './AdminPanel';

    function App() {
      const [language, setLanguage] = useState('en');

      return (
        <div className={language === 'ar' ? 'rtl' : ''}>
          <LanguageToggle onChangeLanguage={setLanguage} />
          <AdminPanel language={language} translations={translations[language]} />
        </div>
      );
    }

    export default App;
