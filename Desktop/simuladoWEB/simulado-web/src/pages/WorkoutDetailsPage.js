import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const WorkoutDetailsPage = ({ workouts, myPlan, completeWorkout }) => {
  const { id } = useParams();
  const workout = workouts.find((w) => w.id === parseInt(id));
  const navigate = useNavigate();

  if (!workout) {
    return <div>Treino não encontrado!</div>;
  }

  const handleComplete = () => {
    completeWorkout(workout.id, navigate);
  };

  const isInPlan = myPlan.some((w) => w.id === workout.id);

  return (
    <div>
      <h2>{workout.name}</h2>
      <p>{workout.description}</p>
      <p>Duração: {workout.duration} minutos</p>
      {workout.completed && <p>Concluído em: {workout.completedDate}</p>}
      {isInPlan && !workout.completed && (
        <button className="button" onClick={handleComplete}>
          Concluir Treino
        </button>
      )}
    </div>
  );
};

export default WorkoutDetailsPage;
