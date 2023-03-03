import React, { useEffect, useState } from 'react'
function App() {
  const [backendData, setBackendData] = useState([{}])
  useEffect(() =>{
    fetch("/api").then(
        response => response.json()
      ).then(
        data => { setBackendData(data)}
      )
  }, [])
  return (
    <div>
      <div>
        {(typeof backendData.users === "undefined") ? (
          <p>Loading...</p>
        ): (
          backendData.users.map((user,i) =>(
            <p key={i}>{user}</p>
          ))
        )}
      </div>
      <div>
      {(typeof backendData.shopping === "undefined") ? (
        <p>Loading...</p>
      ): (
        backendData.shopping.map((shopping,i) =>(
          <p key={i}>{shopping}</p>
        ))
      )}
    </div>
  </div>
  )
}
export default App