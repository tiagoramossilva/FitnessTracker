import React from "react";
import WorkoutCard from "../components/WorkoutCard";

const MyPlanPage = ({ myPlan, removeFromPlan }) => {
  return (
    <div className="my-plan-page">
      <h2>Meu Plano</h2>
      {myPlan.length === 0 ? (
        <p>Você ainda não adicionou nenhum treino ao seu plano.</p>
      ) : (
        myPlan.map((workout) => (
          <WorkoutCard
            key={workout.id}
            workout={workout}
            removeFromPlan={removeFromPlan}
            showRemoveButton={true}
          />
        ))
      )}
    </div>
  );
};

export default MyPlanPage;
