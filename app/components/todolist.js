import React, { useState } from 'react';
import '../styles/todolist.css';

function TodoList({ items }) {
  const [checked, setChecked] = useState(Array(items.length).fill(false));

  const [searched, setSearched] = useState("");

  const handleSearched = (event) => {
    setSearched(event.target.value);
  };

  const handleCheck = (index) => {
    setChecked((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  // Helper to extract ingredient after ':' or full string if no ':'
  const getIngredient = (item) => {
    const idx = item.indexOf(':');
    return idx !== -1 ? item.slice(idx + 1).trim() : item.trim();
  };

  // Helper to check if there are multiple components
  const hasMultipleComponents = items.some(item => item.includes(':'));

  // Helper to get unchecked ingredients
  const getUncheckedIngredients = () => items
    .map((item, idx) => (!checked[idx] ? getIngredient(item) : null))
    .filter(Boolean);

  // Helper to open search windows
  const openSearch = (baseUrl, param) => {
    window.open(baseUrl + param, '_blank');
  };

  // Button click handler
  const handleSearch = (platform) => {
    const unchecked = getUncheckedIngredients();
    if (!unchecked.length) return;
    let baseUrl = '';
    let param = '';
    switch (platform) {
      case 'amazon':
        baseUrl = 'https://www.amazon.in/s?k=';
        break;
      case 'blinkit':
        baseUrl = 'https://www.blinkit.com/s/?q=';
        break;
      case 'bigbasket':
        baseUrl = 'https://www.bigbasket.com/ps/?q=';
        break;
      default:
        return;
    }
    if (hasMultipleComponents) {
      unchecked.forEach(ingredient => {
        setTimeout(() => openSearch(baseUrl, encodeURIComponent(ingredient)), 0);
      });
    } else {
      param = encodeURIComponent(unchecked.join(', '));
      openSearch(baseUrl, param);
    }
  };

  return (
    <>
      <ul className="todo-list">
        {items.map((item, idx) => (
          <li
            key={idx}
            className={`todo-list-item${checked[idx] ? ' checked' : ''}`}
          >
            <label className="todo-label">
              <input
                type="checkbox"
                className="todo-checkbox"
                checked={checked[idx]}
                onChange={() => handleCheck(idx)}
              />
              {item}
            </label>
            {!checked[idx] && (
              <div className="todo-list-btns">
                <button
                  type="button"
                  className="todo-btn"
                  title="Search on Amazon"
                  onClick={() => {
                    const ingredient = getIngredient(item);
                    window.open(`https://www.amazon.in/s?k=${encodeURIComponent(ingredient)}`, '_blank');
                  }}
                >
                  <span role="img" aria-label="Amazon">
                    <img src="/amazon.png" alt="Amazon" className='amazon-logo'/>
                  </span>
                </button>
                <button
                  type="button"
                  className="todo-btn"
                  title="Search on Blinkit"
                  onClick={() => {
                    const ingredient = getIngredient(item);
                    window.open(`https://www.blinkit.com/s/?q=${encodeURIComponent(ingredient)}`, '_blank');
                  }}
                >
                  <span role="img" aria-label="Blinkit">
                    <img src="/blinkit.png" alt="Blinkit" className='blinkit-logo'/>
                  </span>
                </button>
                <button
                  type="button"
                  className="todo-btn"
                  title="Search on BigBasket"
                  onClick={() => {
                    const ingredient = getIngredient(item);
                    window.open(`https://www.bigbasket.com/ps/?q=${encodeURIComponent(ingredient)}`, '_blank');
                  }}
                >
                  <span role="img" aria-label="BigBasket">
                    <img src="/bigbasket.png" alt="BigBasket" className='bigbasket-logo'/>
                  </span>
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
