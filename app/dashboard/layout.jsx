import React from 'react'
import Header from './_components/Header'

function Dashboard  ({childern}) {
  return (
    <div>
      <Header/>
      {childern}
      </div>
  )
}

export default Dashboard