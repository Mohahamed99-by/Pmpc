const LanguageSwitcher = ({ onLanguageChange }) => {
    const handleLangChange = (e) => {
        e.preventDefault();
        const langage = e.target.dataset.lang;
        console.log(langage); // Correctly access data-lang attribute
        onLanguageChange(langage); // Pass the selected language code
    };

    return (
        <ul className="list-unstyled">
            <li className="active">
                <a onClick={handleLangChange} data-lang="en" href="#">English</a>
            </li>
            <li>
                <a onClick={handleLangChange} data-lang="ar" href="#">العربية</a>
            </li>
            <li>
                <a onClick={handleLangChange} data-lang="fr" href="#">Français</a>
            </li>
        </ul>
    );
};

export default LanguageSwitcher;
