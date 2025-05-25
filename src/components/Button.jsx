import { useState } from 'react';
import styles from '../css/Button.module.css';

export default function Button({ 
    children, 
    disabled,
    type = 'button',
    variant = 'gray',
    size = 'md',
    className = '',
    bounce = false,
    onActivate,
    }){
    
    const [isBouncing, setIsBouncing] = useState(false)
    const [heartAnimation, setHeartAnimation] = useState('')
    const isBtnHeart = variant === 'heart';

    const classes = [
        styles.btn,
        styles[`btn-${size}`],
        styles[`btn-${variant}`],
        disabled && styles['btn-disabled'],
        isBouncing && styles['btn-bounce'],
        heartAnimation && styles[heartAnimation],
        className
    ].filter(Boolean).join(' ');

    
    function handleClick(event){
        if (disabled) return;

        bounceOnClick();
        //check parent
        onActivate?.();
    }

    function bounceOnClick() {
        if (bounce){
            setIsBouncing(true);
            setTimeout(() => setIsBouncing(false), 300);
        }
    }

    function handleHeartAnimation(){
        setHeartAnimation('btn-heart-leave');
        setTimeout(() => setHeartAnimation(''), 550);
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
