import { createChatBotMessage } from 'react-chatbot-kit';
import GotItButton from '../Widgets/GotItButton';
import CalenderStrip from '../Widgets/CalenderStrip';
import TimeStrip from '../Widgets/TimeStrip';
import AgeDropDown from '../Widgets/AgeDropDown';
import CountDown from '../Widgets/CountDown';


const botname = "Student enroll system"
const config = {

    initialMessages: [createChatBotMessage(
        `Enter into Student Info System`,
        {
            withAvatar: true,
            delay: 2000,
            widget: 'gotItButton',
        }
    ),
    ],

    botName: botname,
    customStyles: {
      botMessageBox: {
        backgroundColor: 'rgb(25,118,210)',
  
      },
      chatButton: {
        backgroundColor: 'rgb(25,118,210)',
      },
    },

    widgets: [
        {
            widgetName: 'gotItButton',
            widgetFunc: (props) => <GotItButton {...props} />,
        },
        {
            
            widgetName: 'CalenderStip',
            widgetFunc: (props) => <CalenderStrip {...props} />,
        },
        {
            widgetName: 'TimeStrip',
            widgetFunc: (props) => <TimeStrip {...props} />,
        },
        {
            widgetName: 'AgeDropDown',
            widgetFunc: (props) => <AgeDropDown {...props} />,
        },
        {
            widgetName: 'countdown',
            widgetFunc: (props) => <CountDown {...props} />,
        },


    ],
};

export default config;






