import React from 'react'

export const Header = () => {
  return (
    <div className="tabs flex justify-center">
      <a className="tab tab-bordered">Tab 1</a>
      <a className="tab tab-bordered tab-active">Tab 2</a>
      <a className="tab tab-bordered">Tab 3</a>
    </div>
  );
}
