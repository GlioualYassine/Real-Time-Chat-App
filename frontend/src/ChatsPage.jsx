import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced"
import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
    return (
      <div className="background">
        <PrettyChatWindow
          projectId="16161fc5-64eb-46c6-bffe-d337d5e283d9"
          username={props.user.username}
          secret={props.user.secret}
        />
      </div>
    );
  };

export default ChatsPage