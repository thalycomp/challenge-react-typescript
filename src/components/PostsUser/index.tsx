import React, { useEffect } from 'react';
import { useGlobalContext } from '../../hooks/context';
import './styles.scss';

interface IUserId {
  id: number;
}

const PostUser: React.FC<IUserId> = (props: IUserId) => {
  const { getPosts, posts } = useGlobalContext();

  useEffect(() => {
    async function fetchPosts() {
      getPosts(props.id);
    }
    fetchPosts();
  }, [getPosts, props.id]);

  return (
    <ul>
      {posts.map((p) => (
        <li key={p.id} className="postItemPost">
          <h3>{p.title}</h3>
          <p>{p.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default PostUser;
