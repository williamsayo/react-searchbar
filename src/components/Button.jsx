import classes from './Button.module.css'

const Button = ({ text, handleOnClick,value }) => {
    return <button type='button' className={classes.btn} onClick={() => { handleOnClick(value,text) }}> {value} </button>
}

// Button.propTypes = {
//     text: PropTypes.string.isRequired
// }

export default Button
