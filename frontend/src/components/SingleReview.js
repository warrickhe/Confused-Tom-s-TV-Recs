import React from "react";
import { Dropdown, Icon, Button } from "react-materialize";

export default () => {
    return (
        <div>
          <div className="outerBox m10">
            <div>
              <div>
                <div style={{ display: "flex", marginBottom: 10 }}>
                  <div>
                    <div
                      style={{
                        width: 40,
                        height: 40,
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
                  <div style={{ marginLeft: 10, flex: 1 }}>
                    <div
                      style={{
                        color: "#385898",
                        fontWeight: 600
                      }}
                    >
                      isabellechoi11
                    </div>
                    <div style={{ fontSize: 12, color: "gray" }}> 6 min ago </div>
                  </div> 
                    <div>
                      <Dropdown
                        options={{
                          alignment: "left",
                          autoTrigger: true,
                          closeOnClick: true,
                          constrainWidth: true,
                          container: null,
                          coverTrigger: true,
                          hover: false,
                          inDuration: 150,
                          onCloseEnd: null,
                          onCloseStart: null,
                          onOpenEnd: null,
                          onOpenStart: null,
                          outDuration: 250
                        }}
                        trigger={
                          <Button flat node="button">
                            <Icon>options</Icon>
                          </Button>
                        }
                      >
                        <a href="w" style={{ color: "black" }}>
                          Edit
                        </a>
                        <a
                          href="w"
                          style={{ color: "black" }}
                        >
                          Delete
                        </a>
                      </Dropdown>
                    </div>
                </div>
              </div>
                <div>
                  Movie: Up, My Rating: 5/5
                </div>
            </div>
          </div>
        </div>
    );
};