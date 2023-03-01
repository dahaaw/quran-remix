import { Outlet } from '@remix-run/react';

export const handle = {
    menu: 'account' 
}

function account() {
    return (
        <>
            <Outlet />
        </>
    )
}

export default account