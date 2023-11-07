import { useEffect, useState } from 'react';
import './ThemeSwitcher.css';

const ThemeSwitcher = () => {

    const [modo, setModo] = useState(true);
    const [fundo, setFundo] = useState("");

    useEffect (() => {
        if(modo) {
            setFundo("#f2f8ff")
        } else {
            setFundo("#142f4f")
        }
    }, [modo])

    const mudarFundo = () => {
        setModo(!modo)
    }

    return (
        <div className='tema' style={{backgroundColor: fundo}}>
            <div>
                <button 
                    onClick={mudarFundo} 
                    className='bt-salvar'
                >Mudar o tema</button>
            </div>
        </div>
    );
}

export default ThemeSwitcher;