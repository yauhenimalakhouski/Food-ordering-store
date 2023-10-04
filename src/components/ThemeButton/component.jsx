"use client";

import { useEffect, useState } from "react";
import { Button } from "../Button/component"

const LOCAL_STORAGE_KEY = 'theme';
let themeLocal;

export const ThemeButton = () => {
    if (typeof window !== 'undefined') {
        themeLocal = localStorage.getItem(LOCAL_STORAGE_KEY);
    } else {
        themeLocal = 'light';
    }
    const [theme, setTheme] = useState( themeLocal);

    useEffect(()=> {
        if (typeof window !== 'undefined') {
            localStorage.setItem(LOCAL_STORAGE_KEY, theme);
        }
    }, [theme]);

    return <Button
                onClick={ ()=> setTheme(theme ==='light' ? 'dark' : 'light') }
                type = {`btn_theme`}
                switchType={`${theme}`}
    />
}