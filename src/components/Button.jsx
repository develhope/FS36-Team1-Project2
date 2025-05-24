import { useState } from 'react';
import styles from '../css/Button.module.css';

export default function Button({ 
    children, 
    disabled,
    type = 'button',
    color = 'gray',
    size = 'md',
    className = '',
    bounce = false,
    }){
    
    const [isBouncing, setIsBouncing] = useState(false)
    const [heartAnimation, setHeartAnimation] = useState('')
    const isBtnHeart = className.includes('btn-heart');

    const classes = `
    ${styles.btn} 
    ${styles[`btn-${size}`]} 
    ${styles[`btn-${color}`]} 
    ${disabled ? styles['btn-disabled'] : ''}
    ${isBouncing ? styles['btn-bounce']: ''}
    ${isBtnHeart ? styles['btn-heart']: ''}
    ${heartAnimation ? styles[heartAnimation] : ''}
    ${className}
    `;
    
    function handleClick(event){
        !disabled && bounceOnClick()
    }

    function bounceOnClick() {
        if (bounce){
            setIsBouncing(true);
            setTimeout(() => setIsBouncing(false), 300);
        }
    }

    function handleHeartAnimation(){
        const prevBounce = isBouncing
        setIsBouncing(false)
        setHeartAnimation('btn-heart-leave');
        

        setTimeout(() => {
            setHeartAnimation('');
            setIsBouncing(prevBounce)
        }, 550);
    }
    
 

    return(
        <>
            <button type={type} onClick={handleClick} disabled={disabled} className={classes}
            {...(isBtnHeart ? { onMouseLeave: (handleHeartAnimation) } : {})}
            >
                {children}
            </button>
        </>
    )
}
