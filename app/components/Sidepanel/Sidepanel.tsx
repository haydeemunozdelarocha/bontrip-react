import * as React from 'react';
import {ISidepanelProps} from "./Sidepanel.I";
import { createRef } from "react";

const Sidepanel: React.FunctionComponent<ISidepanelProps> = ({image, orientation, index, color, children}): React.ReactElement => {
  const sidepanel = createRef<HTMLDivElement>();

  const togglePanel = () => {
    if (!sidepanel.current.classList.contains('sidepanel-open')) {
      sidepanel.current.classList.add('sidepanel-open');
    } else {
      sidepanel.current.classList.remove('sidepanel-open');
    }
  };

  return (
    <div ref={sidepanel} className={`sidepanel sidepanel-${orientation}`} style={{backgroundColor: color || '#2144b7'}}>
      <div className="sidepanel-content">
        {children}
      </div>
      <div className="sidepanel-tab" onClick={() => togglePanel()} style={{top: `${index * 70}px`, backgroundColor: color || '#2144b7'}}>
        <img className="sidepanel-tab-image" src={image} />
      </div>
    </div>
  );
}


export default Sidepanel;
