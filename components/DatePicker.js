import React, {useState} from "react";
import DateRangePicker from "react-daterange-picker";
import "react-daterange-picker/dist/css/react-calendar.css";
import originalMoment from "moment";
import { extendMoment } from "moment-range";
const moment = extendMoment(originalMoment);

function DatePicker(){
  const today = moment();
  const [value, setValue] = useState(moment.range(today.clone(), today.clone()))
  
  const onSelect = (value, states) => {
    setValue( value, states );
  };

  const renderSelectionValue = () => {
      <div>
        {value.start} {value.end}
      </div>
  };

  const stateDefinitions = {
    available: {
      color: null,
      label: 'Beschikbaar',
    },
    unavailable: {
      selectable: false,
      color: '#78818b',
      label: 'Gereserveerd',
    },
  };
  
  const dateRanges = [
    {
      state: 'unavailable',
      range: moment.range(new Date(2020, 6, 20), new Date(2020, 6, 23)),
    },
  ];

    return (
      <div>
          <DateRangePicker
            value={value}
            onSelect={onSelect}
            singleDateRange={true}
            numberOfCalendars={2}
            selectionType='range'
            minimumDate={new Date()}
            showLegend={true}
            stateDefinitions={stateDefinitions}
            dateStates={dateRanges}
            defaultState="available"
            locale={moment().locale('nl')}
            firstOfWeek={1}
            />
          <div>{renderSelectionValue()}</div>
      </div>
    );
  
}

export default DatePicker;
