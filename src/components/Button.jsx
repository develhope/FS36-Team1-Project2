import styles from '../css/Button.module.css';
export default function Button({ 
    children, 
    handleClick,
    disabled,
    type = 'button',
    variant = 'primary',
    size = 'md',
    className = '',
    bounce = true,
    ...props}){
    
    const classes = `
    ${styles.btn} 
    ${styles[`btn-${size}`]} 
    ${styles[`btn-${variant}`]} 
    ${disabled ? styles['btn-disabled'] : ''} 
    ${className}
    `;

    
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