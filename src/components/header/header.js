import { forwardRef } from "react";
import { bindActionCreators, connect } from "react-redux";
import { withRouter } from "../../hooks/useRouter";

const Header = forwardRef((props, ref) => {

})

const mapStateToProps = (state) => { return {} }
const mapDispatchToProps = (dispatch) => { return bindActionCreators({}, dispatch) }

export default connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true })(withRouter(Header));