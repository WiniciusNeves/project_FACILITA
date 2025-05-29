// src/types/Service.ts
import {Category} from './Category';

export interface Service {
  id: number;
  title: string;
  description: string;
  createdAt: Date;
  category: Category;
}
