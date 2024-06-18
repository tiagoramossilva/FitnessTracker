import React from "react";
import WorkoutCard from "./WorkoutCard";
import "./Home.css";

const Home = ({ addToPlan, workouts }) => {
  return (
    <div className="home-page">
      <h1>Treinos Recomendados</h1>
      <div className="workout-list">
        {workouts.map((workout) => (
          <WorkoutCard
            key={workout.id}
            workout={workout}
            addToPlan={addToPlan}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

