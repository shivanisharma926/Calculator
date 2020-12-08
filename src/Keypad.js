import React, { Component } from 'react'

export class Keypad extends Component {

    render() {
        return (
            <div className='buttons' >

                <button name='(' >(</button>
                <button name='C' >C</button>
                <button name='CE' >CE</button>
                <button name=')' >)</button>

                <button name='1' >1</button>
                <button name='2' >2</button>
                <button name='3' >3</button>
                <button name='+' >+</button>

                <button name='4' >4</button>
                <button name='5' >5</button>
                <button name='6' >6</button>
                <button name='-' >-</button>

                <button name='7' >7</button>
                <button name='8' >8</button>
                <button name='9' >9</button>
                <button name='*' >*</button>

                <button name='0' >0</button>
                <button name='.' >.</button>
                <button name='=' >=</button>
                <button name='/' >/</button>
  
            </div>
        )
    }
}

export default Keypad
