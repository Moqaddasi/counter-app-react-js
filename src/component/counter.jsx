import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count: 0,
        };
    handleIncrement = product => {
            console.log(product);
        this.setState({count:this.state.count+1})
        }
        handleDecrement = product => {
            console.log(product);
        this.setState({count:this.state.count-1})
        }
        
    render() { 
        return (
            <div style={{position:"relative",textAlign:"center",left:-10,top:300}}>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button
             onClick={ () => this.handleIncrement("product")}
              className='btn btn-info btn-lg m-2'>
               +
               </button> 
               <button
               onClick={ () => this.handleDecrement("product")}
                className='btn btn-danger btn-lg m-2'>
                 -
                 </button> 
            </div>
        );
    }
    getBadgeClasses() {
        let classes = " badge m-2  badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {count} = this.state;
        return count === 0 ? 'zero' :count;
    }
    
}
export default Counter;