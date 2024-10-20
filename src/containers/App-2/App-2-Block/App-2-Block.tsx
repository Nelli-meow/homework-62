import * as React from 'react';
import { useState } from 'react';
import { IUser } from '../types';
import UserForm from '../AppComponents/UserForm/UserForm.tsx';
import Users from '../AppComponents/Users/Users.tsx';

const App2 = () => {
  const [user, setUser] = useState<IUser[]>([]);

  const addNewUser = (newUser: IUser) => {
    setUser(prevState => [...prevState, newUser]);
  }

  return (
    <div className="container row border border-3 mt-5 p-4">
      <UserForm addNewUser={addNewUser} />
      <div className="row col-6">
        <Users users={user}/>
      </div>
    </div>
  );

};

export default App2;