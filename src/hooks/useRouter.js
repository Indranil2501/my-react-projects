import { forwardRef } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export const withRouter = (Component) => {
    const componentWithRouterProp = forwardRef((props, ref) => {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();

        return (
            <Component 
                {...props}
                location={location}
                params={params}
                navigate={navigate}
                ref={ref}
            />
        )
    })
    return componentWithRouterProp;
}