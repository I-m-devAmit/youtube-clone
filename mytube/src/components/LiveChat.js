import React, { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState("");
    const dispatch = useDispatch();

    const chatMessages = useSelector((store) => store.chat.messages);

    useEffect(() => {
        const i = setInterval(() => {
            //API Pooling
            dispatch(addMessage({
                name: generateRandomName(),
                message: makeRandomMessage(12) + " 🚀"
            }))
        }, 2000);

        return () => clearInterval(i);

    }, []);

    return (
        <>
            <div className="w-full h-[600px] ml-2 my-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
                <div>
                    <div className='bg-slate-200 ml-2 p-2'>Live Chat</div>
                    {
                        // Disclaimer: Don't use indexes as keys
                        chatMessages.map((ele, index) => (
                            <ChatMessage key={index} name={ele.name} message={ele.message} />
                        ))
                    }
                </div>
            </div>

            <form
                className="w-80 p-2 ml-2 border border-black rounded-lg"
                onSubmit={(e) => {
                    e.preventDefault();

                    dispatch(
                        addMessage({
                            name: "Amit Sharma",
                            message: liveMessage,
                        })
                    );
                    setLiveMessage("");
                }}
            >
                <input
                    className="px-2 w-60"
                    type="text"
                    value={liveMessage}
                    onChange={(e) => {
                        setLiveMessage(e.target.value);
                    }}
                />
                <button className="px-2 mx-2 mt-2 bg-green-100">Send</button>
            </form>
        </>
    );
};

export default LiveChat;