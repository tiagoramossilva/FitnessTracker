import React from "react";
import WorkoutCard from "../components/WorkoutCard";

const MyPlanPage = ({ myPlan, removeFromPlan }) => {
  return (
    <div>
      <h2>Meu Plano</h2>
      {myPlan.length === 0 ? (
        <p>Nenhum treino no plano.</p>
      ) : (
        myPlan.map((workout) => (
          <WorkoutCard
            key={workout.id}
            workout={workout}
            onRemove={() => removeFromPlan(workout)}
            isCompleted={workout.completed}
          />
        ))
      )}
    </div>
  );
};

export default MyPlanPage;
