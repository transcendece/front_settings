import React from 'react'
import { Message } from '@/app/chat/page';
import { useRef, useEffect } from 'react';
import { socket } from './socket';

interface ChatContentProps {
    messages: Message[];
  }

function ChatContent({messages}: ChatContentProps) {
  useEffect (() => {
    socket.on('chatMessage', (newMessage: Message) => {
    });

    return () => {
      socket.off('chatMessage');
    };

  }, [messages])

    return (
        <div className="max-h-[80%] h-[78%] px-6 py-1 overflow-y-auto scrollbar-hide">
          { messages.slice(0).reverse().map((message, index) => (
            <div key={index} className={`py-5 flex flex-row w-full ${!message.isOwner ? "justify-end" : "justify-start"}`}>
              <div className={`bg-white ${!message.isOwner ? "order-2" : "order-1"}`}>
                <div>avatar</div>
              </div>
              <div className={`px-2 w-fit py-3 flex flex-col  rounded-lg ${!message.isOwner ? " scrollbar-hide overflow-x-auto  whitespace-normal max-w-[600px] order-1 mr-2 text-[#323232] bg-opacity-90 bg-white" : " scrollbar-hide overflow-x-auto  whitespace-normal max-w-[600px] order-2 ml-2 bg-white bg-opacity-10 text-[#E58E27]"}`}>
                <span className="text-xs ">
                  {message.sender};
                </span>
                <span className="text-md">{message.content}</span>
              </div>
            </div>
          ))}
        </div>
      );
}

export default ChatContent