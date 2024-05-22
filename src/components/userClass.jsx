import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            count: 1
        }
    }

    render(){
        return (
            <div className='user-card'>
                <h2> Count: {this.state.count}</h2>
                <button onClick={() => {
                    this.setState(
                        {
                            count: this.state.count + 1
                        }
                    )
                }}>
                    Increase By 1
                    </button>
                <h3> Location: {this.props.country} </h3>
                <h3> Contact: @2Siva</h3>
            </div>
          )
    }
 }
 export default UserClass