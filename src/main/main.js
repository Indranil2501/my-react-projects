import { useEffect } from "react"

const Main = (props) => {
    useEffect(() => {
        //Future use
    }, [])

    return(
        <div className="main-body">
            <h1>Hello</h1>
        </div>
    )
}

export default withRouter(Main);