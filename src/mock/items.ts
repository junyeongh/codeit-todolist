import type { ItemDetail, Item } from "@/types";

export const mockDetailedItems: ItemDetail[] = [
  {
    id: 1,
    name: "Buy groceries",
    memo: "Milk, bread, eggs, and vegetables",
    imageUrl: "/img.jpg",
    isCompleted: false,
  },
  {
    id: 2,
    name: "Finish project report",
    memo: "Include quarterly analysis and recommendations",
    imageUrl: undefined,
    isCompleted: true,
  },
  {
    id: 3,
    name: "Call dentist",
    memo: "Schedule annual cleaning appointment",
    imageUrl: undefined,
    isCompleted: false,
  },
  {
    id: 4,
    name: "Exercise",
    imageUrl: undefined,
    isCompleted: false,
  },
  {
    id: 5,
    name: "Read book",
    memo: "Continue reading 'The Clean Code'",
    imageUrl: undefined,
    isCompleted: false,
  },
  {
    id: 6,
    name: "Pay bills",
    memo: "Electricity, water, and internet bills due",
    imageUrl: undefined,
    isCompleted: true,
  },
  {
    id: 7,
    name: "Plan weekend trip",
    imageUrl: undefined,
    isCompleted: true,
  },
  {
    id: 8,
    name: "Update resume",
    memo: "Add recent project experience and skills",
    imageUrl: undefined,
    isCompleted: false,
  },
];

export const mockItems: Item[] = mockDetailedItems.map((item) => ({
  id: item.id,
  name: item.name,
  isCompleted: item.isCompleted,
}));
