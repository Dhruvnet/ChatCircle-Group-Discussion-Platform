import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from "../layouts/Button";

const Subscription = () => {
  const [value, setValue] = useState('');
  const [purpose, setPurpose] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleJoinRoom = useCallback(() => {
    if (value && purpose) {
      navigate(`/room/${value}`);
    } else {
      setError('Both fields are required');
    }
  }, [navigate, value, purpose]);

  return (
    <div>
      <div className="h-full w-full bg-black dark:bg-[#f6f5f7] flex justify-center items-center flex-col">
        <section className="p-5 lg:flex lg:flex-col items-center justify-center lg:h-screen bg-black dark:bg-white">
          <div className="bg-blue-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 border border-gray-100 p-4 mb-4">
            <div>
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="text"
                placeholder="Enter Room Code"
                className="w-1/4 p-2 border border-black rounded mb-2"
                required
              />
            </div>
            <div>
              <input
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                type="text"
                placeholder="Enter Purpose"
                className="w-3/4 p-2 border border-black rounded mb-2"
                required
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
          </div>

          <button className="linear-gradient btn text-white dark:text-black py-3 w-3/6 rounded-lg shadow uppercase cursor-pointer border-2 hover:border-2"
            onClick={handleJoinRoom}
          >
            Join
          </button>
        </section>
      </div>

    </div>
  );
};

export default Subscription;
