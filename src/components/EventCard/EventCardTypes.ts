import { Field } from "../AgentCard/AgentCardTypes";

export interface eventCardProps {
  details: EventDetails;
}

export interface EventDetails {
  date: string;
  state: string;
  sections: DataSection[];
}

export interface DataSection {
  id: string;
  headline: string;
  fields: Field[];
}
