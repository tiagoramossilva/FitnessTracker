import React from "react";
import WorkoutCard from "../components/WorkoutCard";

const HomePage = ({ workouts, addToPlan }) => {
  return (
    <div>
      <h2>Recomendações de Treino</h2>
      {workouts.map((workout) => (
        <WorkoutCard key={workout.id} workout={workout} onAddToPlan={() => addToPlan(workout)} />
      ))}
    </div>
  );
};

export default HomePage;
