import React from 'react'
import ProfileComponent from '../../components/Profile'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div className='sm:h-screen flex flex-col sm-flex-row'>
        <ProfileComponent />
    </div>
  )
}

export default HomePage