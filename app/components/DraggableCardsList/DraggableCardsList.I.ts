export interface IDraggableCardsListProps {
  cards: IDraggableCard[];
  clickCard: (id: string) => void;
  moveCard: () => void;
  title: string;
}

export interface IDraggableCard {
  id: string;
  color: string;
  startDate: string;
  endDate: string;
  name: string;
}
