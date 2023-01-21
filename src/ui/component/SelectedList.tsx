import React from 'react';
import styles from "../styles/Dropdown.module.css";
import deleteIcon from "../icons/delete.svg";
import arrowIcon from "../icons/arrow.svg";
import {LanguagesT} from "./Dropdown";

type SelectedListT = {
    openList: boolean
    selectedLang: LanguagesT[]
    setOpenList: React.Dispatch<React.SetStateAction<boolean>>
    setSelectedLang: React.Dispatch<React.SetStateAction<LanguagesT[]>>
    setLanguages: React.Dispatch<React.SetStateAction<LanguagesT[]>>
}

const SelectedList: React.FC<SelectedListT> = (props) => {
    const {setOpenList, selectedLang, openList, setSelectedLang, setLanguages} = props

    const selectedLangJsx = selectedLang.map((lang, i) => {
        const deleteLangFromSelected = () => {
            setSelectedLang(v => v.filter(l => l.lang !== lang.lang))
            setLanguages(v => v.map(l => l.lang === lang.lang ? {...l, checked: false} : l))
        }

        return (<li
            key={i}
            onClick={e => e.stopPropagation()}
            className={styles.activeListItem}
        >
            {lang.lang}

            <button onClick={deleteLangFromSelected}>
                <img src={deleteIcon} alt="удалить язык"/>
            </button>
        </li>)
    })

    return (
        <div>
            <h3 className={styles.title}>Язык</h3>

            <ul className={styles.activeList} onClick={() => setOpenList(open => !open)}>
                {
                    selectedLang.length
                        ? selectedLangJsx
                        : <li className={styles.notFound}>Выберите язык</li>
                }

                <img
                    src={arrowIcon}
                    className={`${styles.arrow} ${openList ? styles.arrowActive : ''}`}
                    alt={openList ? 'список открыт' : 'список закрыт'}
                />
            </ul>
        </div>
    );
};

export default SelectedList;