import { ChatCustomer, Details, EditProfile, Home, Posts, Profile } from '@/pages'
import { useRoutes } from 'react-router-dom'

const LayoutUser = () => {
  const elements = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/profile/*", element: <Profile /> },
    { path: "/edit-profile/*", element: <EditProfile /> },
    { path: "/chat", element: <ChatCustomer /> },
    { path: "/details", element: <Details /> },
    { path: "/posts", element: <Posts /> },
  ])

  return (
    <div>
      {elements}
    </div>
  )
}

export default LayoutUser
