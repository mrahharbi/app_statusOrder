import { FaLanguage } from 'react-icons/fa';
    import { useState } from 'react';

    const LanguageToggle = ({ onChangeLanguage }) => {
      const [isArabic, setIsArabic] = useState(false);

      const toggleLanguage = () => {
        const newLang = isArabic ? 'en' : 'ar';
        setIsArabic(!isArabic);
        onChangeLanguage(newLang);
      };

      return (
        <button 
          className="language-toggle"
          onClick={toggleLanguage}
          title={isArabic ? 'English' : 'العربية'}
        >
          <FaLanguage className="icon" />
          <span>{isArabic ? 'EN' : 'AR'}</span>
        </button>
      );
    };

    export default LanguageToggle;
