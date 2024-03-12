import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'

const RoomPage = () => {
        const { roomId } = useParams();

        const myMeeting = async (element) => {
            const appID = 528380420;
            const serverSecret = "53c09f4415b9f5f272d8fdfe208f4a23";
            const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), "Name");
            const zc = ZegoUIKitPrebuilt.create(kitToken);
            zc.joinRoom({
                container: element,
                sharedLinks: [
                    {
                        name: 'Copy Link',
                        url: `https://chatcircle.vercel.app/room/${roomId}`,
                    },
                ],
                scenario: {
                    mode: ZegoUIKitPrebuilt.OneONoneCall,
                },
                showScreenSharingButton: true,
            });
        };

    return <div>
            <div ref={myMeeting}/>
    </div>;
};

export default RoomPage;
