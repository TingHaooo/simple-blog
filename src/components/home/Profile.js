import React from 'react'

const Profile = (props) => {
  return (
    <div className="profile">
      <img alt="" className="d-block rounded-circle mx-auto" src={require('../../static/profile-picture.jpg')} style={{width: '150px'}}/>
      <p className="mt-3 text-center">Hello, I am Ting-Hao, welcom to my Blog!</p>
      <div className="icons-container d-flex align-items-start justify-content-center">
        <a className="d-block" target="_black" href="https://www.linkedin.com/in/ting-hao-chang-4b520b147/"><img alt="" className="d-block mr-3" src={require('../../static/icons/linkedin-logo.png')} style={{width: '40px'}}/></a>
        <a className="d-block" target="_blank" href="https://github.com/ztingh"><img alt="" className="d-block" src={require('../../static/icons/github-logo.png')} style={{width: '40px'}}/></a>
      </div>
    </div>
  )
}

export default Profile
