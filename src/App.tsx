import useFetch from "./customHooks/useFetch";
import styles from "./App.module.css";
import "./index.css";
import AgentCard from "./components/AgentCard/AgentCard";
import EventCard from "./components/EventCard/EventCard";
import { useEffect, useState } from "react";
const eventsDetailsPath = "../data/eventsDetails.json";
const otherEventsDetailsPath = "../data/otherEventsDetails.json";
const agentDetailsPath = "../data/agentDetails.json";

function App() {
  const [eventsPath, setEventsPath] = useState<string>(eventsDetailsPath);

  const eventPaths = [eventsPath, otherEventsDetailsPath];

  useEffect(() => {
    let routeNumber = 0;
    const interval = setInterval(() => {
      setEventsPath(eventPaths[routeNumber]);
      routeNumber = routeNumber === 0 ? 1 : 0;
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const { isLoading: isLoadingEvents, data: eventsData } = useFetch(eventsPath);
  const { details: eventsDetails } = eventsData;

  const { isLoading: isLoadingAgent, data: agentData } =
    useFetch(agentDetailsPath);
  const { details: agentDetails } = agentData;

  return (
    <div className={styles.appContainer}>
      {isLoadingEvents || isLoadingAgent ? (
        <h1>Loading</h1>
      ) : (
        <div className={styles.cardsContainer}>
          <div className={styles.agentCard}>
            <AgentCard details={agentDetails} />
          </div>
          <div className={styles.eventCard}>
            <EventCard details={eventsDetails} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
