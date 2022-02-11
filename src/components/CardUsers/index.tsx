import React, { useState } from 'react';
import './styles.scss';

import PostUser from '../PostsUser';
import { IUsers } from '../../types';

interface ICardUsers {
  user: IUsers;
  key: number;
}

const CardUsers: React.FC<ICardUsers> = (props: ICardUsers) => {
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
          {posts ? 'See less' : 'See Posts'}
        </button>
      </article>
    </li>
  );
};

export default CardUsers;
