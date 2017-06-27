import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
// import '../css/bootstrap'
 
 class LabelButton extends Component {
     render() {
         const { increment, decrement, counter } = this.props; //从pros中导入变量和方法
         return (
             <div>
                 <label className="label">{counter}</label>
                 <button className="btn btn-default" onClick = {increment}>ADD</button> 
                 <button onClick = {decrement}>DEC</button>
             </div>
         )
     }
 }
 export default LabelButton
