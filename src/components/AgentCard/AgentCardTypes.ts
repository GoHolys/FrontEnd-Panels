import { DataSection } from "../EventCard/EventCardTypes";

export interface AgentDetailsProps {
  details: AgentDetails;
}

export interface AgentDetails {
  alerts: Field[];
  policyGroup: Field;
  metaData: DataSection;
  status: Field;
}

export interface Field {
  id: string;
  title: string;
  value: string;
}
