import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './FormTask.css';
import { StaticDatePicker } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';

function FormTask({ title, button, funcButton, task }) {
  const [description, setDescription] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [date, setDate] = useState('');
  const [isHighPriority, setHighPriority] = useState(false);

  useEffect(() => {
    if (task) {
      setDescription(task.description);
      setStartTime(task.startTime);
      setEndTime(task.endTime);
      setDate(task.date);
      setHighPriority(task.isHighPriority);
    }
  }, []);

  return (
    <>
      <h1 className="modal_title">{title}</h1>
      <form className="modal_form">
        <label className="modal_inputs" htmlFor="description">
          Task Name
          <input
            className="input"
            type="text"
            placeholder="Enter Your Task Name"
            value={ description }
            onChange={ ({ target: { value } }) => setDescription(value) }
          />
        </label>

        <div className="inputs_inline">
          <label
            className="modal_inputs"
            htmlFor="startTime"
          >
            Start Time
            <input
              className="input"
              id="startTime"
              type="time"
              value={ startTime }
              onChange={ ({ target: { value } }) => setStartTime(value) }
            />
          </label>
          <label
            className="modal_inputs"
            htmlFor="endTime"
          >
            End Time
            <input
              className="input"
              id="endTime"
              type="time"
              value={ endTime }
              onChange={ ({ target: { value } }) => setEndTime(value) }
            />
          </label>
        </div>

        <label htmlFor="highPriority">
          <input
            className="btn_remember"
            type="checkbox"
            checked={ isHighPriority }
            onChange={ () => setHighPriority(!isHighPriority) }
          />
          Hidh Priority?
        </label>

        {/* <div>
          <label htmlFor="date">
            Date
            <input
              id="date"
              type="date"
              value={ date }
              onChange={ ({ target: { value } }) => setDate(value) }
            />
          </label>
        </div> */}

        {/* <LocalizationProvider dateAdapter={ AdapterDayjs }> */}
        <StaticDatePicker
          className="date_picker"
          orientation="landscape"
          openTo="day"
          value={ date }
          // shouldDisableDate={ isWeekend }
          onChange={ (newValue) => {
            setDate(newValue);
          } }
          renderInput={ (params) => <TextField { ...params } /> }
        />
        {/* </LocalizationProvider> */}
      </form>
      {task ? (
        <button
          className="formTask_btn"
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
            className="formTask_btn"
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
    </>
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
