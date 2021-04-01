import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories})=>{

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue((e.target.value))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // puede recibir un callback, con el estado anterior como argumento

        if (inputValue.trim().length > 2) {
            setCategories((categories) => [inputValue.trim(), ...categories])
            setInputValue('')
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                placeholder="Hola Mundo!"
                onChange={handleInputChange}
            />
        </form>

    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}