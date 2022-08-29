import React, { memo } from "react";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import moment from "moment";
import { formatFechaDatePicker } from "../utils/fechas";
const DateTimePicker = (props) => {
  const today = moment(new Date().getDate(), "DD/MM/YYYY");

  return (
    <DatePicker
      autoOk
      views={['year']}
      inputFormat="YYYY"
      mask={"____"}
      id={props.id}
      maxDate={today}
      initialFocusedDate={today}
      label={props.label}
      value={props.value}
      defaultValue={props.defaultValue}
      onBlur={(event) =>
        props.onBlur &&
        props.onBlur({
          target: { value: event.target.value, name: props.name },
        })
      }
      onChange={(date) =>
        props.onChange &&
        props.onChange({
          target: {
            value: formatFechaDatePicker(date),
            name: props.name,
          },
        })
      }
      renderInput={(params) => (
        <TextField
          error={props.error}
          helperText={props.helperText}
          style={{ width: "100%" }}
          {...params}
        />
      )}
    />
  );
};

export default memo(DateTimePicker);
