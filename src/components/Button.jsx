import { useState } from 'react';
import styles from '../css/Button.module.css';
export default function Button({ 
    children, 
    handleClick,
    disabled,
    type = 'button',
    variant = 'primary',
    size = 'md',
    className = '',
    bounce = false,
    ...props}){
    
    const [isBouncing, setIsBouncing] = useState(false)

    const classes = `
    ${styles.btn} 
    ${styles[`btn-${size}`]} 
    ${styles[`btn-${variant}`]} 
    ${disabled ? styles['btn-disabled'] : ''}
    ${isBouncing ? styles['btn-bounce']: ''} 
    ${className}
    `;
        function handleClick(event){
            if (disabled) return;
            bounceOnClick()
        }

        function bounceOnClick() {
            if (bounce){
                setIsBouncing(true);
                setTimeout(() => setIsBouncing(false), 300);
            }
        }
    
    return(
        <>
            <button type={type} onClick={handleClick} disabled={disabled} className={classes} {...props}>{children}</button>
        </>
    )
}

{/*
    Sizes: sm, md, lg 
    variant: primary, secondary
*/}