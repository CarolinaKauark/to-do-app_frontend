import React, { useState } from 'react';

export default function AddTaskModal() {
  const [description, setDescription] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [date, setDate] = useState('');
  const [isHighPriority, setHighPriority] = useState(false);

  return (
    <form>
      <label htmlFor="description">
        Task Name
        <input
          type="text"
          placeholder="Enter Your Task Name"
          value={ description }
          onChange={ ({ target: { value } }) => setDescription(value) }
        />
      </label>

      <div>
        <label htmlFor="startTime">
          Start Time
          <input
            id="startTime"
            type="time"
            value={ startTime }
            onChange={ ({ target: { value } }) => setStartTime(value) }
          />
        </label>
        <label htmlFor="endTime">
          End Time
          <input
            id="endTime"
            type="time"
            value={ endTime }
            onChange={ ({ target: { value } }) => setEndTime(value) }
          />
        </label>
      </div>

      <label htmlFor="highPriority">
        <input
          type="checkbox"
          checked={ isHighPriority }
          onChange={ () => setHighPriority(!isHighPriority) }
        />
        Hidh Priority?
      </label>

      <div>
        <label htmlFor="date">
          Date
          <input
            id="date"
            type="date"
            value={ date }
            onChange={ ({ target: { value } }) => setDate(value) }
          />
        </label>
      </div>
    </form>
  );
}
