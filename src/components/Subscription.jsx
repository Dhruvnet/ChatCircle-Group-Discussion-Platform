import React, { useState, useCallback } from 'react';
import { FaCheck } from 'react-icons/fa';
import {useNavigate} from 'react-router-dom'

const Subscription = () => {
  const [value, setValue] = useState();

  const navigate = useNavigate();

  const handleJoinRoom = useCallback(() => {
      navigate(`/room/${value}`);
  }, [navigate, value]);

  return (
    <div>
      <section className="p-5 lg:flex lg:flex-col items-center justify-center lg:h-screen bg-black dark:bg-white">
        <input value={value} 
        onChange={e => setValue(e.target.value)} 
        type="text" 
        placeholder="Enter Room Code"/>
        <button onClick={handleJoinRoom}>Join</button>
      </section>
    </div>
  );
};

export default Subscription;
