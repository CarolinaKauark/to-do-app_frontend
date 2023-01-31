import React from 'react';
import { TfiTrash } from 'react-icons/tfi';

export default function ClearAll() {
  return (
    <button type="button">
      <i><TfiTrash /></i>
      {' '}
      Clear All
    </button>
  );
}
