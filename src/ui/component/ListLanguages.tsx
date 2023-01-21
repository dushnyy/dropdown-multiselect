import React, {ChangeEvent} from 'react';
import styles from "../styles/Dropdown.module.css";
import {LanguagesT} from "./Dropdown";
import Checkbox from "./Checkbox";

type ListLanguagesT = {
    languages: LanguagesT[]
    openList: boolean
    changeLanguage: (e: ChangeEvent<HTMLInputElement>) => void
    setSelectedLang: React.Dispatch<React.SetStateAction<LanguagesT[]>>
    setLanguages: React.Dispatch<React.SetStateAction<LanguagesT[]>>
}
const ListLanguages: React.FC<ListLanguagesT> = (props) => {
    const {openList, changeLanguage, setSelectedLang, languages, setLanguages} = props


    const listLangJsx = languages.map((lang, i) => {
            const deleteLang = () => setSelectedLang(v => v.filter(l => l.lang !== lang.lang))
            const addLang = () => {
                setSelectedLang(v => [...v, {...lang, checked: true}])
                setLanguages(v => v.map(l => l.lang === lang.lang ? {...l, checked: true} : l))
            }

            return (<li key={i} className={styles.listItem}>
                <label className={styles.listItemLabel}>

                    <div className={styles.listItemWrap}>
                        <img src={`icons/lang/${lang.code}.svg`} alt={`флаг ${lang.lang}`}/>

                        {lang.lang}
                    </div>

                    <Checkbox
                        addLang={addLang}
                        deleteLang={deleteLang}
                        defaultChecked={lang.checked}
                    />
                </label>
            </li>)
        }
    )

    return (
        <div className={`${styles.listLang} ${openList ? styles.open : ''}`}>
            <input
                type="text"
                placeholder='Поиск'
                onChange={changeLanguage}
                className={styles.searchInput}
            />
            <ul className={styles.list}>
                {
                    listLangJsx.length
                        ? listLangJsx
                        : <li className={styles.notFound}>Ничего не надено</li>
                }
            </ul>
        </div>
    );
};

export default ListLanguages;