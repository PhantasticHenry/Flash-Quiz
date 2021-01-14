import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import "./HighScores.css";
import "../home/Home.css";

function HighScores() {
  const quizzes = useSelector((state) => state.quizzes);
  const sortedQuizzes = quizzes.sort((a, b) => b.high_score - a.high_score);
  const top25 = sortedQuizzes.slice(0, 100);

  const renderPlayers = top25.map((quiz, i) => (
    <tr key={i}>
      <td>{quiz.player}</td>
      <td>{quiz.high_score}</td>
      <td>{quiz.category}</td>
    </tr>
  ));

  return (
    <div className="high-scores">
      <div className="table-scroll">
        <table>
          <thead className="thead-row">
            <tr>
              <th>Player</th>
              <th>High Score</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>{renderPlayers}</tbody>
        </table>
      </div>
    </div>
  );
}

export default HighScores;
