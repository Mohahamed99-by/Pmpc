import React from 'react'
import ReactDOM from 'react-dom/client'
import UserApp from './users/UserApp'
import UserLayouts from './users/UserLayouts'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserApp>
      <UserLayouts />
    </UserApp>
  </React.StrictMode>,
)
