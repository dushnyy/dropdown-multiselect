import React, {ChangeEvent, useState} from 'react';
import styles from '../styles/Dropdown.module.css'
import SelectedList from "./SelectedList";
import ListLanguages from "./ListLanguages";

export const initialLanguages = [
    {
        lang: 'Русский',
        checked: false,
        code: 'ru'
    },
    {
        lang: 'Английский',
        checked: false,
        code: 'en'
    },
    {
        lang: 'Испанский',
        checked: false,
        code: 'es'
    },
    {
        lang: 'Немецкий',
        checked: false,
        code: 'de'
    },
    {
        lang: 'Итальянский',
        checked: false,
        code: 'it'
    },
    {
        lang: 'Польский',
        checked: false,
        code: 'pl'
    },
]

export type LanguagesT = {
    lang: string,
    code: string
    checked: boolean
}
const Dropdown = () => {
    const [openList, setOpenList] = useState<boolean>(true)

    const [selectedLang, setSelectedLang] = useState<LanguagesT[]>([])

    const [languages, setLanguages] = useState<LanguagesT[]>(initialLanguages)
    const changeLanguage = (e: ChangeEvent<HTMLInputElement>) => {
        setLanguages(initialLanguages
            .filter(l => l.lang.toLowerCase().includes(e.currentTarget.value.toLowerCase()))
            .map(l => selectedLang.filter(f => f.lang.includes(l.lang)).length ? {...l, checked: true} : l)
        )
    }

    return (
        <div className={styles.container}>
            <main className={styles.dropDown}>
                <SelectedList
                    openList={openList}
                    setOpenList={setOpenList}
                    selectedLang={selectedLang}
                    setLanguages={setLanguages}
                    setSelectedLang={setSelectedLang}
                />

                <ListLanguages
                    openList={openList}
                    languages={languages}
                    setLanguages={setLanguages}
                    changeLanguage={changeLanguage}
                    setSelectedLang={setSelectedLang}
                />
            </main>
        </div>
    );
};

export default Dropdown;