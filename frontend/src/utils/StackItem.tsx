import React, { ReactNode } from 'react';

type StackItemProps = {
  icon: ReactNode;
  text: string;
};

function StackItem({ icon, text }: StackItemProps) {
  return (
    <div className="d-flex align-items-center">
      <div className="icon-wrapper" style={ { paddingTop: '15px' } }>
        {React.cloneElement(icon as React.ReactElement, { size: '1.5em' })}
      </div>
      <span className="ms-2">{text}</span>
    </div>
  );
}

export default StackItem;
