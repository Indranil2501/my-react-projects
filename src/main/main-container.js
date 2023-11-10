import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Main from './main'

const mapStateToProps = (state) => { }

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({}, dispatch);
}

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);
export default MainContainer;

