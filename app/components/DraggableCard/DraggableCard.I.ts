import {SyntheticEvent} from "react";

export interface IDraggableCardProps {
  key: string;
  id: any;
  index: number;
  text: string;
  connectDropTarget?: (element: JSX.Element) => JSX.Element;
  connectDragSource?: (element: JSX.Element) => JSX.Element;
  isDragging?: (element: JSX.Element) => JSX.Element;
  footerText?: string;
  moveCard: (event: SyntheticEvent) => void;
  clickCard: (event: SyntheticEvent) => void;
  indicatorColor: string;
  subtitle?: string;
  class: string;
}
