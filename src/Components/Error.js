import {useRouteError} from 'react-router-dom'
const Error=()=>{
    const err=useRouteError()
    console.log(err)
    return(
        <div>
            <h1>OOPS!! PAGE NOT FOUND  </h1>
            <h3>{err.status}</h3>
        </div>
    )
}

export default Error