import { property } from "../mock-data";
import type { Property } from "../types";

export async function getProperty(id: string): Promise<Property> {
  return {
    ...property,
    id,
  };
}

export async function getProperties(): Promise<Property[]> {
  return [property];
}
