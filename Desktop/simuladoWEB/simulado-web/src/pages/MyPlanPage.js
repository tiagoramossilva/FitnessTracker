import React from 'react';
import WorkoutCard from '../components/WorkoutCard';

const MyPlanPage = ({ myPlan, removeFromPlan }) => {
  return (
    <div>
      <h1>Meu Plano</h1>
      {myPlan.map((workout) => (
        <WorkoutCard
          key={workout.id}
          workout={workout}
          onRemove={removeFromPlan}
          showAddButton={false}
        />
      ))}
    </div>
  );
};

export default MyPlanPage;
