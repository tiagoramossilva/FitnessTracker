import React from 'react';
import { Link } from 'react-router-dom';
import './WorkoutCard.css';

const WorkoutCard = ({ workout, onAdd, onRemove, showAddButton }) => {
  return (
    <div className="card">
      <h3>{workout.name}</h3>
      <p>{workout.description}</p>
      <p>Duração: {workout.duration} minutos</p>
      <Link to={`/workout/${workout.id}`}>
        <button>Ver Detalhes</button>
      </Link>
      {showAddButton ? (
        <button onClick={() => onAdd(workout)}>Adicionar ao Meu Plano</button>
      ) : (
        <button onClick={() => onRemove(workout)}>Remover</button>
      )}
    </div>
  );
};

export default WorkoutCard;
