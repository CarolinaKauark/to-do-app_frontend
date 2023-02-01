import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function FormTask({ title, button, funcButton, task }) {
  const [description, setDescription] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [date, setDate] = useState('');
  const [isHighPriority, setHighPriority] = useState(false);

  useEffect(() => {
    console.log(task);
    if (task) {
      setDescription(task.description);
      setStartTime(task.startTime);
      setEndTime(task.endTime);
      setDate(task.date);
      setHighPriority(task.isHighPriority);
    }
  }, []);

  return (
    <article>
      <h1>{title}</h1>
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
      {task ? (
        <button
          type="submit"
          onClick={ () => funcButton({
            description,
            endTime,
            startTime,
            date,
            isHighPriority,
            inProgress: true,
            id: task.id }) }
        >
          {button}
        </button>
      )
        : (
          <button
            type="submit"
            onClick={ () => funcButton({
              description,
              endTime,
              startTime,
              date,
              isHighPriority,
              inProgress: true,
            }) }
          >
            {button}
          </button>)}

    </article>
  );
}

FormTask.propTypes = {
  title: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
  funcButton: PropTypes.func.isRequired,
  task: PropTypes.shape({
    description: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
    endTime: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    isHighPriority: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
};

FormTask.defaultProps = {
  task: false,
};

export default FormTask;
