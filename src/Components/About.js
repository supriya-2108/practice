import User from "./User"
import UserClass from "./UserClass"
import React from "react"
class About extends React.Component{
    constructor(props){
        super(props)
        console.log("parent constructor")
    }
    componentDidMount(){
        console.log("parent mount")
    }
    render(){
        console.log("parent render")
    return(
        <div>    
        <h1>About</h1>
        <User/>
        <UserClass name={"Hello"}/>
        <UserClass name={"bello"}/>
        </div>
    )
}
}
export default About