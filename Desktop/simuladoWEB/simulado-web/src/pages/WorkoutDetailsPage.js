import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const WorkoutDetailsPage = ({ workouts, myPlan, completeWorkout }) => {
  const { id } = useParams();
  const workout = workouts.find((w) => w.id === parseInt(id));
  const navigate = useNavigate();

  if (!workout) {
    return <p>Treino não encontrado</p>;
  }

  const isInPlan = myPlan.some((w) => w.id === workout.id);

  const handleCompleteWorkout = () => {
    completeWorkout(workout.id);
    alert("Treino concluído com sucesso!");
    navigate("/my-plan");
  };

  return (
    <div>
      <h2>{workout.name}</h2>
      <p>{workout.description}</p>
      <p>Duração: {workout.duration} minutos</p>
      {workout.completed && <p>Data de Conclusão: {workout.completedDate}</p>}
      {isInPlan && !workout.completed && (
        <button onClick={handleCompleteWorkout}>Concluir Treino</button>
      )}
    </div>
  );
};

export default WorkoutDetailsPage;
