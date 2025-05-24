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
    const [animationHeart, setAnimationHeart] = useState('')
    const isBtnHeart = className.includes('btn-heart');

    const classes = `
    ${styles.btn} 
    ${styles[`btn-${size}`]} 
    ${styles[`btn-${color}`]} 
    ${disabled ? styles['btn-disabled'] : ''}
    ${isBouncing ? styles['btn-bounce']: ''}
    ${animationHeart ? styles[animationHeart]: ''} 
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
    
    return(
        <>
            <button type={type} onClick={handleClick} disabled={disabled} className={classes}
            onMouseEnter={() => isBtnHeart && setAnimationHeart('pop-in')}
            onMouseLeave={() => isBtnHeart && setAnimationHeart('pop-out')}>
            {children}
            </button>
        </>
    )
}

{/* <Button size='md' bounce={true} color='white'>example</Button>  */}