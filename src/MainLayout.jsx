
import Header from './components/Header';
import { Outlet } from 'react-router-dom';



const MainLayout = () => {
    return (
        <div>
            <Header/>
          <div className='mt-20 mb-20'>
          <Outlet/>
          </div>
           
        </div>
    );
};

export default MainLayout;