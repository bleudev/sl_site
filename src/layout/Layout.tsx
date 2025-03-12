import { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';

const Layout: FunctionComponent = () => {
    return (
        <div id="layout">
            <div className='content'>
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;
