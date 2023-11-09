import React from 'react';
import { createClientMessage } from 'react-chatbot-kit';
import { useSelector } from 'react-redux';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

 const value= useSelector((state)=>state.enroll.day);
 

    const handleGotIt = () => {
        const message = createClientMessage('Got It!');
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message],


        }));

        const botMessage = createChatBotMessage(
            "Pick a Slot",
            {
                withAvatar: true,
                delay: 1000,
                widget: "CalenderStip",
            }
        );
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));

    }

    const handleTime = () => {
        const botMessage = createChatBotMessage(
            "Pick a Slot",
            {
                withAvatar: true,
                delay: 1000,
                widget: "TimeStrip",
            }
        );
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    }

    const handleSchedule = () => {
        const message = createClientMessage(`${value.date}  ${value.time}`);
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message],


        }));
        const botMessage = createChatBotMessage(
            "Enter your Name ",

        );
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));

    }

    const handleAge = () => {
        const botMessage = createChatBotMessage(
            "Enter Your Age",
            {
                withAvatar: true,
                delay: 1000,
                widget: "AgeDropDown",
            }
        );
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    }
    const handleExit = () => {
        const botMessage = createChatBotMessage(
            "Thank you. In 5 seconds, bot will exit",
            {
                widget:'countdown'
            }
        );
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    }
    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        handleGotIt,
                        handleTime,
                        handleSchedule,
                        handleExit,
                        handleAge,
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;