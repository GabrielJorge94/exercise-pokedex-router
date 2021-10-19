import React from 'react';

class NotFound extends React.Component {
  render() { 
    return <div className="notfound-container">
      <h1>404 - Not Found</h1>
      <img width="1000" src="https://cdn.dribbble.com/users/1592487/screenshots/6678531/404.png" alt="Page not found" />
    </div>;
  }
}
 
export default NotFound;