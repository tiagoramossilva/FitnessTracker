import React from "react";
import WorkoutCard from "../components/WorkoutCard";

const HomePage = ({ workouts, addToPlan }) => {
  return (
    <div className="home-page">
      <h2>Treinos Recomendados</h2>
      {workouts.map((workout) => (
        <WorkoutCard
          key={workout.id}
          workout={workout}
          addToPlan={addToPlan}
        />
      ))}
    </div>
  );
};

export default HomePage;
