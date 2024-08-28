

import { useState, useEffect } from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Input from '../input/Input';

const Header2 = () => {
    // State to manage notifications
    const [notifications, setNotifications] = useState([]);
    // State to manage visibility of notification container
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);

    useEffect(() => {
        // Simulate receiving notifications
        setTimeout(() => {
            setNotifications([{ id: 1, message: 'New assignment posted!' }]);
        }, 3000);
    }, []);

    // Toggle notification visibility
    const toggleNotification = () => {
        setIsNotificationOpen(!isNotificationOpen);
    };

    return (
        <>
            <div className='bg-white h-[10vh] flex items-center justify-between mx-4 lg:mx-[4em] sticky top-0 z-index'>
                <div className='flex justify-between items-center gap-[2em] w-[45em]'>
                    <Link to='/'><h2 className='text-blue-700 text-xl lg:text-[2em]'>Attendify</h2></Link>
                    <Input type="text" width="w-[25vw]" placeholder="Search" />
                </div>
                <div className='flex self-center justify-center gap-1 lg:gap-[15px] items-center'>
                    <div className='relative flex items-center justify-center'>
                        <IoMdNotificationsOutline className='text-[2em] cursor-pointer' onClick={toggleNotification} />
                        {notifications.length > 0 && (
                            <span className='bg-blue-700 w-4 h-4 absolute translate-x-2 rounded-full mb-8'></span>
                        )}
                        {isNotificationOpen && (
                            <div className='absolute top-[3em] right-0 bg-white border border-gray-300 rounded-md shadow-lg p-2  w-[10em]'>
                                {notifications.length > 0 ? (
                                    <ul className=' w-[10em]'>
                                        {notifications.map((notification) => (
                                            <li key={notification.id} className='text-gray-700 text-sm'>
                                                {notification.message}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className='text-gray-700 text-sm'>No notifications available</p>
                                )}
                            </div>
                        )}
                    </div>
                    <img src='' className='h-8 w-8 lg:h-[2.5em] lg:w-[2.5em] rounded-full border-2 border-grey-900' alt='img' />
                    <h3 className='text-sm lg:text-[1.1em]'>Akintomiwa</h3>
                </div>
            </div>
        </>
    )
}

export default Header2;
