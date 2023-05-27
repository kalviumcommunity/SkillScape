import AdminNavBar from './AdminNavBar';
import './AdminCompany.css';
import Carousel from '../Carousel/Carousel';
import { useAuth0 } from '@auth0/auth0-react';

function Admin() {
  const {user,isAuthenticated} = useAuth0();

  return (
    <div>
        <div id='container'>
        <AdminNavBar />
        <div className='path-admincomp'>
            {isAuthenticated && user.name} / Admin /<b> Add Companies </b>
        </div>
        <div className='header-adminc'>
            <b>Add Companies</b>
        </div>
        <Carousel />
        </div>
    </div>
  )
}

export default Admin