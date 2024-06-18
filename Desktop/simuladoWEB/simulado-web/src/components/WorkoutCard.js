import React from "react";
import { Link } from "react-router-dom";
import "./WorkoutCard.css"; // Certifique-se de importar o CSS

const WorkoutCard = ({ workout, onAddToPlan, onRemove, isCompleted }) => {
  return (
    <div className={`workout-card ${isCompleted ? 'completed' : ''}`}>
      <h3>{workout.name}</h3>
      <p>{workout.description}</p>
      <p>Duração: {workout.duration} minutos</p>
      {onAddToPlan && <button onClick={onAddToPlan}>Adicionar ao Meu Plano</button>}
      {onRemove && <button onClick={onRemove}>Remover</button>}
      <Link to={`/workout/${workout.id}`} className="details-button">Ver Detalhes do Treino</Link>
    </div>
  );
};

export default WorkoutCard;
