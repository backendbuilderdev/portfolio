import React from "react";
import dynamic from 'next/dynamic';

const Player = dynamic(() => import('@lottiefiles/react-lottie-player').then(mod => ({ default: mod.Player })), { ssr: false });

function LoadingScreen() {
    return (
        <div className="loading-screen">
            <div className="centered-image">
                <Player
                    autoplay
                    loop
                    src="/lottie/laptop.json"
                    style={{
                        width: "80%",
                        height: "80%",
                        maxWidth: "800px",
                        maxHeight: "800px",
                    }}
                />
            </div>
            <div className="bottom-right-image">
                <Player
                    autoplay
                    loop
                    src="/lottie/loadcode.json"
                    style={{
                        width: "80px",
                        height: "80px",
                    }}
                />
            </div>
        </div>
    );
}

export default LoadingScreen;
