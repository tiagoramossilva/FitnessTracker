import React from "react";
import { Link } from "react-router-dom";
import './WorkoutCard.css';

const WorkoutCard = ({ workout, addToPlan, removeFromPlan, showRemoveButton }) => {
  return (
    <div className={`workout-card ${workout.completed ? 'completed' : ''}`}>
      <h3>{workout.name}</h3>
      <p>{workout.description}</p>
      <p>Duração: {workout.duration} minutos</p>
      <Link to={`/workout/${workout.id}`} className="details-button">
        Ver Detalhes
      </Link>
      {addToPlan && (
        <button className="button" onClick={() => addToPlan(workout)}>
          Adicionar ao Meu Plano
        </button>
      )}
      {showRemoveButton && (
        <button className="button" onClick={() => removeFromPlan(workout)}>
          Remover
        </button>
      )}
    </div>
  );
};

export default WorkoutCard;
