import { connect } from 'react-redux';
import { addUser } from '../redux/account'
import { loginUser } from '../redux/account'
import Login from '../Routes/Login'


const mapStateToProps = (state) => {
    return {
        users: state.account,
    }
}

const mapActionToProps = {
    addUser,
    loginUser
}

export default connect(mapStateToProps, mapActionToProps)(Login);
