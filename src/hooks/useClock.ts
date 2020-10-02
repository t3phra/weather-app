import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { DATE_TEMPLATE } from '../constants/constants';

export const useClock = (initialTime = dayjs()) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const id = setInterval(() => {
      setTime(() => dayjs());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return dayjs(time).format(DATE_TEMPLATE);
};
