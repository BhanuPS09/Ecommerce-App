import "./form-input.styles.scss";
export const Input = (props) => {
    return (
        <div className='group'>
            {props.label && (
                <label
                    className={`${props.value ? "shrink" : ""
                        } form-input-label`} >
                    {props.label}
                </label>
            )}

            <input className='form-input' {...props} />


        </div>

    );
}