// private routes protect handle this file
import React, { Suspense } from 'react';
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectRoutes = ({ route, children }) => {
    const { role, userInfo } = useSelector(state => state.auth)
    if (role) {
        if (userInfo) {
            if (route.role) {
                if (userInfo.role === route.role) {
                    if (route.status) {
                        if (route.status === userInfo.status) {
                            return <Suspense fallback={null}>{children}</Suspense>
                        } else {
                            if (userInfo.status === 'pending') {
                                return <Navigate to='/seller/account-pending' replace></Navigate>
                            } else {
                                return <Navigate to='/seller/account-deactive' replace></Navigate>
                            }
                        }
                    } else {
                        if (route.visibility) {
                            if (route.visibility.some(r => r === userInfo.status)) {  //some building functions  some er kaz holo jodi aktar shate match hoiye jai tahole todo return korbe
                                return <Suspense fallback={null}>{children}</Suspense>
                            } else {
                                return <Navigate to='/seller/account-pending' replace></Navigate>
                            }
                        } else {
                            return <Suspense fallback={null}>{children}</Suspense>
                        }
                    }
                    // return <Suspense fallback={null}>{children}</Suspense>
                } else {
                    return <Navigate to='/unauthorized' replace></Navigate>
                }
            } else {
                if (route.ability === 'seller') {
                    return <Suspense fallback={null}>{children}</Suspense>
                }
            }
        }
    } else {
        return <Navigate to='/login' replace></Navigate>
    }
};

export default ProtectRoutes;