import React from 'react';

const HistoryPage = ({ workouts }) => {
  const completedWorkouts = workouts.filter((workout) => workout.completed);

  return (
    <div>
      <h1>Histórico de Treinos Concluídos</h1>
      {completedWorkouts.map((workout) => (
        <div key={workout.id}>
          <h3>{workout.name}</h3>
          <p>Duração: {workout.duration} minutos</p>
          <p>Concluído em: {workout.completedDate}</p>
        </div>
      ))}
    </div>
  );
};

export default HistoryPage;
