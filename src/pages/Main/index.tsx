import React from 'react';
import './styles.scss';
import CardUsers from '../../components/CardUsers';
import { useGlobalContext } from '../../hooks/context';

const Main: React.FC = () => {
  const { users } = useGlobalContext();

  return (
    <div className="wrapperMain">
      <main className="containerUsersAndPosts">
        <ul>
          {users.map((u) => (
            <CardUsers key={u.id} user={u} />
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Main;
