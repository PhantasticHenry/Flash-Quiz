import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import "./HighScores.css";
import "../home/Home.css";

function HighScores() {
  const quizzes = useSelector((state) => state.quizzes);
  const sortedQuizzes = quizzes.sort((a, b) => b.high_score - a.high_score);
  const top25 = sortedQuizzes.slice(0, 100);

  const renderPlayers = top25.map((quiz, i) => (
    <tbody key={i}>
      <tr>
        <td>{quiz.player}</td>
        <td>{quiz.high_score}</td>
        <td>{quiz.category}</td>
      </tr>
    </tbody>
  ));

  // const handleScroll = (e) => {
  //   let scrollTop = e.srcElement.body.scrollTop;
  // };

  return (
    <div className="high-scores">
      <table className="table-scroll">
        <thead className="thead-row">
          <tr>
            <th>Player</th>
            <th>High Score</th>
            <th>Category</th>
          </tr>
        </thead>
        {renderPlayers}
      </table>
    </div>
    // <div className="star-background">
    //   <div className="high-scores">
    //     <table>
    //       <tr>
    //         <th>Player</th>
    //         <th>High Score</th>
    //         <th>Category</th>
    //       </tr>
    //       {renderPlayers}
    //     </table>
    //   </div>
    // </div>
  );
}

export default HighScores;
