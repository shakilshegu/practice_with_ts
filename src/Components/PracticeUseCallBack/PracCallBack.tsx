
import { useCallback, useState } from "react";
import Search from "./Search";
// import { shuffle } from '@/utils';

const allUsers = [
  'john',
  'alex',
  'george',
  'simon',
  'james',
];

interface DemoProps { }

const PracCallBack = ({ }: DemoProps) => {
  const [users, setUsers] = useState(allUsers);

  const handleSearch = useCallback(
    (text: string) => {
      console.log(users[0]);

      const filteredUsers = allUsers.filter((user) =>
        user.includes(text),
      );
      setUsers(filteredUsers);
    },
    [users],
  );
  return (
    <div className='tutorial'>
      <div className='align-center mb-2 flex'>
        {/* <button onClick={() => setUsers(shuffle(allUsers))}>
          Shuffle
        </button> */}

        <Search onChange={handleSearch} />
      </div>
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  )
}

export default PracCallBack
