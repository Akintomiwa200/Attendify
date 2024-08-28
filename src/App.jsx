import router from './router'
import { UserProvider } from './context/UserContext'
import { RouterProvider } from 'react-router-dom'


const App = () => {
  return (
    <>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </>
  );
}
export default App;
