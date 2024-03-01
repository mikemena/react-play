import { useState } from 'react';

export default function Draggable() {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxChange = (itemId) => {
    if (checkedItems.includes(itemId)) {
      setCheckedItems(checkedItems.filter((id) => id !== itemId));
    } else {
      setCheckedItems([...checkedItems, itemId]);
    }
  };

  console.log('checkedItems', checkedItems);

  return (
    <div className="drg-container">
      <div className="drg-item">
        <div className="chxkbx-container">
          <input
            type="checkbox"
            id="itm-1-chxkbx"
            className="chxkbx"
            onChange={(e) => handleCheckboxChange(e.target.id)}
          />
        </div>
        <span>Item 1</span>
      </div>
      <div className="drg-item">
        <div className="chxkbx-container">
          <input type="checkbox" id="itm-2-chxkbx" className="chxkbx" />
        </div>
        <span>Item 2</span>
      </div>
      <div className="drg-item">
        <div className="chxkbx-container">
          <input type="checkbox" id="itm-3-chxkbx" className="chxkbx" />
        </div>
        <span>Item 3</span>
      </div>
      <div className="drg-item">
        <div className="chxkbx-container">
          <input type="checkbox" id="itm-4-chxkbx" className="chxkbx" />
        </div>
        <span>Item 4</span>
      </div>
    </div>
  );
}
