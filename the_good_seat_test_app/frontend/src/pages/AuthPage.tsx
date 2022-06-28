import { Outlet } from 'react-router-dom'
import classes from '../styles/Auth.module.css'

const AuthPage = () => {
    return (
        <div className={classes.auth_page}>
            <Outlet />
        </div>
    )
}

export default AuthPage