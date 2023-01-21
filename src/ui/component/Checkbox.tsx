import React, {ChangeEvent, useEffect, useState} from 'react';
import styles from "../styles/Dropdown.module.css";

type CheckboxT = {
    defaultChecked: boolean
    addLang: () => void
    deleteLang: () => void
}

const Checkbox: React.FC<CheckboxT> = (props) => {
    const {addLang, deleteLang, defaultChecked} = props

    const [checked, setChecked] = useState<boolean>(defaultChecked)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.currentTarget.checked)

        if (e.currentTarget.checked) {
            addLang()
        } else {
            deleteLang()
        }
    }

    useEffect(() => {
        setChecked(defaultChecked)
    }, [defaultChecked])

    return (
        <>
            <span className={`${styles.listItemCheckboxCustom} ${checked ? styles.active : ''}`}/>
            <input
                type='checkbox'
                checked={checked}
                onChange={onChangeHandler}
                className={styles.listItemCheckbox}
            />
        </>
    );
};

export default Checkbox;