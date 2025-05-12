import { ItemCondition } from "@prisma/client";
import { ItemCategory } from "@prisma/client";

export interface ItemConditionOptions {
  condition: ItemCondition;
  label: string;
  hint: string;
  guide: string[];
}

export interface DisplayCategory {
  icon: string;
  name: string;
  category: ItemCategory;
}

export interface Listing {
  id: string;
  title: string;
  description: string;
  images: string[];
  pointsValue: number;
  category: string;
  condition: string;
  createdAt: string;
}

export interface ListingsWithTotal {
  listings: Listing[];
  total: number;
}
