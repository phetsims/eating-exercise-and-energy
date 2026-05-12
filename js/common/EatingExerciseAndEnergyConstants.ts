// Copyright 2020-2026, University of Colorado Boulder

/**
 * Constants used throughout this simulation.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import Range from '../../../dot/js/Range.js';
import Dimension2 from '../../../dot/js/Dimension2.js';

const EatingExerciseAndEnergyConstants = {

  SCREEN_VIEW_X_MARGIN: 15,
  SCREEN_VIEW_Y_MARGIN: 15,

  DEFAULT_AGE_YEARS: 22,
  AGE_YEARS_RANGE: new Range( 1, 100 ),
  HEIGHT_METERS_RANGE: new Range( 0.75, 2.3 ),
  MASS_KILOGRAMS_RANGE: new Range( 1, 250 ),
  FAT_MASS_PERCENT_RANGE: new Range( 0, 100 ),
  CALORIES_PER_DAY_RANGE: new Range( 0, 10000 ),
  MACRONUTRIENT_CALORIES_PER_DAY_CONTROL_RANGE: new Range( 0, 3000 ),
  EXERCISE_CALORIES_PER_DAY_CONTROL_RANGE: new Range( 0, 2000 ),
  CALORIE_CONTROL_TRACK_SIZE: new Dimension2( 140, 3 ),
  TIME_SPEED_CONTROL_TRACK_SIZE: new Dimension2( 110, 3 ),
  SIMULATION_DAYS_PER_REAL_SECOND_RANGE: new Range( 0, 365 ),
  SIMULATION_DAYS_PER_REAL_SECOND: 30
};

export default EatingExerciseAndEnergyConstants;
