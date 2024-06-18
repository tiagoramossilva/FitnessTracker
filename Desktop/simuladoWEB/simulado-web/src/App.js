import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import MyPlanPage from "./pages/MyPlanPage.js";
import WorkoutDetailsPage from "./pages/WorkoutDetailsPage";
import HistoryPage from "./pages/HistoryPage";

import "./App.css";

const App = () => {
  const [myPlan, setMyPlan] = useState([]);
  const [workouts, setWorkouts] = useState([
    {
      id: 1,
      name: "Corrida",
      description: "Corrida leve de 30 minutos",
      duration: 30,
    },
    {
      id: 2,
      name: "Yoga",
      description: "Sessão de Yoga de 45 minutos",
      duration: 45,
    },
    {
      id: 3,
      name: "Treinamento de Força",
      description: "Treino de força para iniciantes",
      duration: 60,
    },
    {
      id: 4,
      name: "Natação",
      description: "Sessão de natação de 1 hora",
      duration: 60,
    },
    { id: 5, name: "Ciclismo", description: "Ciclismo de 20 km", duration: 90 },
    {
      id: 6,
      name: "Alongamento",
      description: "Sessão de alongamento de 15 minutos",
      duration: 15,
    },
    {
      id: 7,
      name: "Pilates",
      description: "Aula de Pilates de 50 minutos",
      duration: 50,
    },
    {
      id: 8,
      name: "Treinamento HIIT",
      description: "Treino de alta intensidade",
      duration: 30,
    },
    {
      id: 9,
      name: "Caminhada",
      description: "Caminhada de 1 hora",
      duration: 60,
    },
    {
      id: 10,
      name: "Dança",
      description: "Aula de dança de 1 hora",
      duration: 60,
    },
    {
      id: 11,
      name: "Crossfit",
      description: "Treino de Crossfit para intermediários",
      duration: 45,
    },
    {
      id: 12,
      name: "Corrida Intervalada",
      description: "Corrida com intervalos de alta intensidade",
      duration: 40,
    },
    {
      id: 13,
      name: "Boxe",
      description: "Sessão de boxe de 45 minutos",
      duration: 45,
    },
    { id: 14, name: "Escalada", description: "Escalada indoor", duration: 90 },
    {
      id: 15,
      name: "Hidroginástica",
      description: "Aula de hidroginástica",
      duration: 50,
    },
    {
      id: 16,
      name: "Circuito Funcional",
      description: "Treino de circuito funcional",
      duration: 40,
    },
    {
      id: 17,
      name: "Treino com Pesos",
      description: "Treino de musculação com pesos",
      duration: 60,
    },
    {
      id: 18,
      name: "Zumba",
      description: "Aula de Zumba de 1 hora",
      duration: 60,
    },
    {
      id: 19,
      name: "Corrida na Esteira",
      description: "Corrida na esteira de 30 minutos",
      duration: 30,
    },
    {
      id: 20,
      name: "Meditação",
      description: "Sessão de meditação guiada",
      duration: 20,
    },
    {
      id: 21,
      name: "Treino de Pernas",
      description: "Treino focado em pernas",
      duration: 50,
    },
    {
      id: 22,
      name: "Treino de Braços",
      description: "Treino focado em braços",
      duration: 50,
    },
    { id: 23, name: "Tai Chi", description: "Sessão de Tai Chi", duration: 45 },
    {
      id: 24,
      name: "Treino Cardio",
      description: "Sessão de cardio intensa",
      duration: 30,
    },
    { id: 25, name: "Spinning", description: "Aula de spinning", duration: 60 },
    {
      id: 26,
      name: "Kickboxing",
      description: "Treino de kickboxing",
      duration: 45,
    },
    {
      id: 27,
      name: "Corrida de Resistência",
      description: "Corrida de longa distância",
      duration: 120,
    },
    {
      id: 28,
      name: "Hatha Yoga",
      description: "Aula de Hatha Yoga",
      duration: 60,
    },
    {
      id: 29,
      name: "Power Yoga",
      description: "Aula de Power Yoga",
      duration: 60,
    },
    {
      id: 30,
      name: "Alongamento Avançado",
      description: "Sessão de alongamento avançado",
      duration: 30,
    },
  ]);

  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const addToPlan = (workout) => {
    if (!myPlan.some((w) => w.id === workout.id)) {
      setMyPlan([...myPlan, workout]);
      setConfirmationMessage(`Treino "${workout.name}" foi adicionado ao seu plano!`);
      setErrorMessage("");
      setTimeout(() => setConfirmationMessage(""), 3000);
    } else {
      setErrorMessage(`Treino "${workout.name}" já está no seu plano!`);
      setTimeout(() => setErrorMessage(""), 3000);
    }
  };

  const removeFromPlan = (workout) => {
    setMyPlan(myPlan.filter((w) => w.id !== workout.id));
  };

  const completeWorkout = (id) => {
    setWorkouts(workouts.map((workout) =>
      workout.id === id ? { ...workout, completed: true, completedDate: new Date().toLocaleDateString() } : workout
    ));
    setMyPlan(myPlan.map((workout) =>
      workout.id === id ? { ...workout, completed: true, completedDate: new Date().toLocaleDateString() } : workout
    ));
  };

  return (
    <Router>
      <Navbar />
      <div className="container">
        {confirmationMessage && (
          <div className="confirmation-message">{confirmationMessage}</div>
        )}
        {errorMessage && (
          <div className="error-message">{errorMessage}</div>
        )}
        <Routes>
          <Route path="/" element={<HomePage workouts={workouts} addToPlan={addToPlan} />} />
          <Route path="/my-plan" element={<MyPlanPage myPlan={myPlan} removeFromPlan={removeFromPlan} />} />
          <Route path="/workout/:id" element={<WorkoutDetailsPage workouts={workouts} myPlan={myPlan} completeWorkout={completeWorkout} />} />
          <Route path="/history" element={<HistoryPage workouts={workouts} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;