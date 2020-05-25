import React, { useState, useEffect } from 'react';
// import Router from './router';

function FriendStatus() {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status: any) {
    setIsOnline(status);
  }

  const ChatAPI = {
    subscribeToFriendStatus(id: string, fn: (status: any) => void) {
      
    },
    unsubscribeFromFriendStatus(id: string, fn: (status: any) => void) {

    }
  };

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

}

export default class App extends React.Component {
  render() {
    // return <Router />
    return (
      <div>
        App
      </div>
    );
  }
};
