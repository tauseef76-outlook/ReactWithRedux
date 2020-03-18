import React from "react";
import ReactDom from "react-dom";
import faker from "faker";
import CommentDetails from "./CommentDetails";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetails author = "Sam" date={Date.now()}/>
      </ApprovalCard>
    </div>
  );
};

ReactDom.render(<App/>,document.querySelector("#root"));
