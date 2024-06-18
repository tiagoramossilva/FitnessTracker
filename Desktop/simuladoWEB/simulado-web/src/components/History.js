import React from "react";
import "./History.css";

const History = ({ workouts }) => {
  const completedWorkouts = workouts.filter((workout) => workout.completed);

  return (
    <div className="history-page">
      <h1>Histórico de Treinos</h1>
      <div className="workout-list">
        {completedWorkouts.map((workout) => (
          <div key={workout.id} className="workout-card">
            <h2>{workout.name}</h2>
            <p>{workout.description}</p>
            <p>Duração: {workout.duration} minutos</p>
            <p>Concluído em: {workout.completedDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
