import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            count: 1,
            count2: 2,
            count3: 3
        }
    }

    render(){
        return (
            <div className='user-card'>
                <h2> Count: {this.state.count}</h2>
                <h2> Count2: {this.state.count2}</h2>
                <h2> Count3: {this.state.count3}</h2>
                <button onClick={() => {
                    this.setState(
                        {
                            count: this.state.count + 1,
                            count2: this.state.count2 + 2
                        }
                    )
                }}>
                    Increase By 1 & 2
                    </button>
                    <button onClick={() => {
                        this.setState({
                            count3: this.state.count3 + 3
                        })
                    }}>Increase by 3</button>
                    
                <h3> Location: {this.props.country} </h3>
                <h3> Contact: @2Siva</h3>
            </div>
          )
    }
 }
 export default UserClass