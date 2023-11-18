import { useState, useEffect } from 'react';
import { format, sub } from 'date-fns';
import api from '../utils/api';

export function useImageLoader() {
  const [todaysImage, setTodaysImage] = useState();
  const [lastFiveDaysImage, setLastFiveDaysImage] = useState();

  useEffect(() => {
    const loadTodaysImage = async () => {
      try {
        const todaysImageResponse = await api();
        setTodaysImage(todaysImageResponse);
      } catch (error) {
        console.error(error);
        setTodaysImage(undefined);
      }
    };

    const loadLast5DaysImage = async () => {
      try {
        const date = new Date();
        const todaysDate = format(date, 'yyyy-MM-dd');
        const fiveDaysAgoDate = format(sub(date, { days: 5 }), 'yyyy-MM-dd');

        const lastFiveDaysImageResponse = await api(
          `&start_date=${fiveDaysAgoDate}&end_date=${todaysDate}`
        );
        setLastFiveDaysImage(lastFiveDaysImageResponse);
      } catch (error) {
        console.log(error);
        setLastFiveDaysImage(undefined);
      }
    };

    loadTodaysImage().catch(null);
    loadLast5DaysImage().catch(null);
  }, []);

  return { todaysImage, lastFiveDaysImage };
}
