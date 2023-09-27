"use client";

import { useEffect, useState } from "react";
import { Button } from "../Button/component"

const LOCAL_STORAGE_KEY = 'theme';

export const ThemeButton = () => {
    const [theme, setTheme] = useState(localStorage.getItem(LOCAL_STORAGE_KEY) || 'light');

    useEffect(()=> {
        localStorage.setItem(LOCAL_STORAGE_KEY, theme);
    }, [theme]);

    return <Button
                onClick={ ()=> setTheme(theme ==='light' ? 'dark' : 'light') }
                type = {`btn_theme`}
                switchType={`${theme}`}
    />
}