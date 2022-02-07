import React, { useState } from 'react';
import './styles.scss';
import PostUser from '../PostUser';

interface IUser {
  user: {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: number;
      geo: {
        lat: number;
        lng: number;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  };
}

const CardUsers: React.FC<IUser> = (props: IUser) => {
  const [posts, setPosts] = useState(false);

  return (
    <li className="postItem">
      <article className="postItemContent">
        <header>
          <section>
            <span>User Information</span>
            <div>
              <strong>{props.user.name}</strong>
              <p>{props.user.email}</p>
            </div>
          </section>
          <section>
            <span>Associated company</span>
            <div>
              <strong>{props.user.company.name}</strong>
              <p>{props.user.company.catchPhrase}</p>
            </div>
          </section>
        </header>
        {posts && <PostUser id={props.user.id} />}
        <button className="buttonSeeMorePosts" onClick={() => setPosts(!posts)}>
          See Posts
        </button>
      </article>
    </li>
  );
};

export default CardUsers;
