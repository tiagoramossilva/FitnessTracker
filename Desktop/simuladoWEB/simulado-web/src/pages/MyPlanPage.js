import React from "react";
import WorkoutCard from '../components/WorkoutCard';

const MyPlan = ({ myPlan, removeFromPlan }) => {
  const activeWorkouts = myPlan.filter(workout => !workout.completed);

  return (
    <div className="my-plan-page">
      <h1>Meu Plano</h1>
      <div className="workout-list">
        {activeWorkouts.map((workout) => (
          <WorkoutCard
            key={workout.id}
            workout={workout}
            removeFromPlan={removeFromPlan}
            showRemoveButton
          />
        ))}
      </div>
    </div>
  );
};

export default MyPlan;
