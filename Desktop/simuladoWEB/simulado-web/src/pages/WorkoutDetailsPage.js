// src/pages/WorkoutDetailsPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const WorkoutDetailsPage = ({ workouts, completeWorkout }) => {
  const { id } = useParams();
  const workout = workouts.find((w) => w.id === parseInt(id));

  if (!workout) {
    return <p>Treino não encontrado!</p>;
  }

  return (
    <div>
      <h1>{workout.name}</h1>
      <p>{workout.description}</p>
      <p>Duração: {workout.duration} minutos</p>
      {workout.completed ? (
        <p>Concluído em: {workout.completedDate}</p>
      ) : (
        <button onClick={() => completeWorkout(workout.id)}>Concluir Treino</button>
      )}
    </div>
  );
};

export default WorkoutDetailsPage;
