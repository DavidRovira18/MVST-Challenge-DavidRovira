import { createContext, useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components';
interface dayNight{
    changeTheme: () => void;
    dayMode: boolean;
}

export const themeContext = createContext({} as dayNight); //Create context for the day/night theme


export const themes_provider = () => {
  
    const [dayMode, setDayMode] = useState<boolean>(true);

    //Defining day and night themes!
    const nightTheme = {
        colors:{
            background: "#141D2F"
        }
    }

    const dayTheme = {
        colors:{
            background: "#DADEDF"
        }
    }

    function changeTheme(): void{
        setDayMode(prev => !prev) // Inverting the actual mode
    }
    
    // Hooks
    useEffect(()=>{
        localStorage.getItem("theme") === "day" && setDayMode(true);  // To restore previous theme when we mount the initial component
    }, [])

    useEffect(()=>{
        const mode = dayMode ? "day" : "night";
        
        localStorage.setItem("theme", mode);  // Save to loocal storage the current mode each time we update the component
    })

    return (
    <themeContext.Provider value={{changeTheme, dayMode}}>
        <ThemeProvider theme={dayMode ? dayTheme : nightTheme}>

        </ThemeProvider>
    </themeContext.Provider>
  )
}

