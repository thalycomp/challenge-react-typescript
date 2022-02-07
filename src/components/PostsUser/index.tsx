import React, { useState } from 'react';
import './styles.scss';

interface IUserId {
  id: number;
}

const PostUser: React.FC<IUserId> = (props: IUserId) => {
  const [posts, setPosts] = useState(false);

  return (
    <ul>
      <li className="postItemPost">
        <h3>qui est esse</h3>
        <p>
          est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae
          ea dolores neque\nfugiat blanditiis voluptate porro vel nihil
          molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque
          nisi nulla
        </p>
      </li>
      <li className="postItemPost">
        <h3>qui est esse</h3>
        <p>
          est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae
          ea dolores neque\nfugiat blanditiis voluptate porro vel nihil
          molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque
          nisi nulla
        </p>
      </li>
      <li className="postItemPost">
        <h3>qui est esse</h3>
        <p>
          est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae
          ea dolores neque\nfugiat blanditiis voluptate porro vel nihil
          molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque
          nisi nulla
        </p>
      </li>
    </ul>
  );
};

export default PostUser;
