import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
require ('../css/style')
 
 class Counter extends Component {
     render() {
         const { increment, decrement, incrementIfOdd, incrementAsync, counter } = this.props; //从pros中导入变量和方法
         return (
             <div>
                 <label className="label">{ counter }</label><br/>
                 <button className="btnAdd" onClick = { increment }>ADD</button> 
                 <button onClick = { decrement }>DEC</button>
                 <button onClick = { incrementIfOdd }>AddIfOdd</button>
                 <button onClick = { () => incrementAsync() }>AddAsync</button> {/**
                  * 注意异步的调用方法
                  */}
             </div>
         )
     }
 }

 Counter.propTypes = {
     increment: PropTypes.func.isRequired,
     decrement: PropTypes.func.isRequired,
     counter: PropTypes.number.isRequired
 }

 export default Counter
