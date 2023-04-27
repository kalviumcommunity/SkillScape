import AdminNavBar from './AdminNavBar';
import './AdminCompany.css';
import Carousel from '../Carousel/Carousel';
import Footer from '../Student/Footer';

function Admin() {
  return (
    <div>
        <div id='container'>
        <AdminNavBar />
        <div className='path-admincomp'>
            Navaneeth Arunkumar / Admin /<b> Add Companies </b>
        </div>
        <div className='header-adminc'>
            <b>Add Companies</b>
        </div>
        <Carousel />
        <Footer />
        </div>
    </div>
  )
}

export default Admin