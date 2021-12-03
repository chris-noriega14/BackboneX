import React from 'react';
import { useQuery } from '@apollo/client';
import ExerciseList from '../components/ExerciseList';

import { QUERY_EXERCISES } from '../utils/queries';

const Exercises = () => {
    // Execute the query on component load
    const { loading, data } = useQuery(QUERY_EXERCISES);

    const exercises = data?.exercises || [];

    return (
        <main>
          <div className="flex-row justify-center">
            <div className="col-12 col-md-8 mb-3">
              {/* If the data is still loading, render a loading message */}
              {loading ? (
                <div>Loading...</div>
              ) : (
                <ExerciseList
                  exercises={exercises}
                  title="List of Exercises"
                />
              )}
            </div>
          </div>
        </main>
      );
};

export default Exercises;