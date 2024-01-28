import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props)
        // console.log(props)

        this.state={
            count:0,
            count2:4
        }
        console.log("child constructor")
    }
    componentDidMount(){
        console.log(this.props.name+"child component did mount")
    }
    render(){

        const {name}=this.props
        const {count,count2}=this.state
        console.log(this.props.name+"child render")
        return(
            <div>
                <p>Count1: {this.state.count}</p>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1,
                        count2:this.state.count2+1
                    })
                }}>Count</button>
                <h1>Count2 : {count2}</h1>
            </div>
        )
    }
}

export default UserClass