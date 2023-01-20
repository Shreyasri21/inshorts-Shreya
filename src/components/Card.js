// import { grey } from "@mui/material/colors";
// import { padding } from "@mui/system";
import { Button } from "@mui/material";
import React from "react";

function Card({ newsData, navValue }) {
  if (newsData !== undefined) {
    if (newsData.category === navValue) {
      return (
        <>
          {newsData.data.map((item) => (
            <div>
              <div
                className="card"
                style={{
                  border: "solid grey",
                  borderRadius: "10px",
                  marginTop: "1%",
                  width: "70vw",
                  boxShadow: "initial",
                }}
              >
                <img
                  src={item.imageUrl}
                  alt="Avatar"
                  style={{
                    marginLeft: "4vw",
                    width: "60vw",
                    height: "35vh",
                    paddingLeft: "5px",
                    paddingRight: "5px",
                    paddingTop: "10px",
                    // paddingBottom: "5px",
                    backgroundColor: "black",
                  }}
                />
                <div
                  className="container"
                  style={{
                    paddingLeft: "10px",
                    paddingRight: "5px",
                    border: "solid orange",
                    backgroundColor: "gray",
                  }}
                >
                  <p>
                    <h1>{item.title}</h1>
                    {item.content}
                    <a href={item.readMoreUrl}>
                      <Button>more...</Button>
                    </a>
                  </p>

                  <span>
                    Publish Date:{item.date} Publish Author:<b>{item.author}</b>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </>
      );
    }
  }
}

export default Card;
