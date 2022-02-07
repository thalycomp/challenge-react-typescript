import React from 'react';
import './styles.scss';
import CardUsers from '../../components/CardUsers';
import { useGlobalContext } from '../../hooks/context';

const cardUsersData = [
  {
    id: 1,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    address: {
      street: 'teste',
      suite: 'teste',
      city: 'teste',
      zipcode: 2392930,
      geo: {
        lat: 23992,
        lng: 20932,
      },
    },
    phone: 'teste',
    website: 'teste',
    company: {
      name: 'Johns Group',
      catchPhrase: 'Configurable multimedia task-force',
      bs: 'teste',
    },
  },
];

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
