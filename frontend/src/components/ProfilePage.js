import React from "react";
import { Row, Col, Container, TextInput, Icon } from "react-materialize";

export default () => {
    return (
        <div className="outerBox m10">
            <div style={{ display: "flex", marginBottom: 10 }}>
                <div>
                    <div
                        style={{
                            width:40,
                            height:40,
                            borderRadius: 30,
                            overflow: "hidden"
                        }}
                    >
                        <img
                            src="https://i.scdn.co/image/ab6761610000e5eb006ff3c0136a71bfb9928d34"
                            alt="profile photo"
                            height="100%"
                        />
                    </div>
                </div>
                <div style={{ marginLeft: 10, flex: 1 }}> isabellechoi11 </div>
                <div style={{ cursor: "pointer" }}>
                    <Icon>edit</Icon>
                </div>
            </div>
            <div style={{ borderTop: "1px solid lightgray"}}>
                <div style={{ color: "darkblue", fontFamily: "arial", marginTop: 10}}>
                    About me:
                </div>
                <div style={{ fontSize: 12 }}>
                    Computer Science student at UCLA
                </div>
            </div>
        </div>
    );
};
