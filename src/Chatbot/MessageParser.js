import React from 'react';
import { useDispatch } from 'react-redux';
import { setName } from '../Redux/EnrollSlice';

const MessageParser = ({ children, actions }) => {

  const dispatch = useDispatch();

  const parse = (message) => {
    if (message) {
      dispatch(setName(message));
      actions.handleAge();
   }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {
            handleGotIt: actions.handleGotIt,
            handleTime: actions.handleTime,
            handleSchedule: actions.handleSchedule,
            handleExit: actions.handleExit,
            handleAge: actions.handleAge,
          },
        });
      })}
    </div>
  );
};

export default MessageParser;