import React from "react";

const HistoryPage = ({ workouts }) => {
  const completedWorkouts = workouts.filter((workout) => workout.completed);

  return (
    <div>
      <h2>Histórico de Treinos Concluídos</h2>
      {completedWorkouts.length === 0 ? (
        <p>Nenhum treino concluído ainda.</p>
      ) : (
        completedWorkouts.map((workout) => (
          <div key={workout.id}>
            <h3>{workout.name}</h3>
            <p>Duração: {workout.duration} minutos</p>
            <p>Data de Conclusão: {workout.completedDate}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default HistoryPage;
