import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Page = () => {

    const [currentLang, setCurrentLang] = useState('ar')

    

    let content;

    if(currentLang === 'ar'){
        content = <p>مرحبا</p>
    }else if(currentLang === 'en'){
        content = <p>Hello</p>
    }else if(currentLang === 'fr'){
        content = <p>Bonjour</p>
    }


    
    return (
        <div className="text-center">

            <p>Current Language: {currentLang}</p>
            <LanguageSwitcher onLanguageChange={ langage => setCurrentLang(langage)} />
            <div>
            <div>
               <strong >{content}</strong>
            </div>
            </div>
        </div>
    );
};

export default Page;
