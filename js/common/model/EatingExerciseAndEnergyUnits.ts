// Copyright 2026, University of Colorado Boulder

/**
 * Unit conversions used by the Eating, Exercise, and Energy model.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

const SECONDS_PER_DAY = 24 * 60 * 60;
const DAYS_PER_YEAR = 365;
const KG_PER_POUND = 0.45359237;
const METERS_PER_FOOT = 0.3048;

const EatingExerciseAndEnergyUnits = {
  SECONDS_PER_DAY: SECONDS_PER_DAY,
  DAYS_PER_YEAR: DAYS_PER_YEAR,

  daysToSeconds( days: number ): number {
    return days * SECONDS_PER_DAY;
  },

  secondsToDays( seconds: number ): number {
    return seconds / SECONDS_PER_DAY;
  },

  yearsToDays( years: number ): number {
    return years * DAYS_PER_YEAR;
  },

  daysToYears( days: number ): number {
    return days / DAYS_PER_YEAR;
  },

  poundsToKilograms( pounds: number ): number {
    return pounds * KG_PER_POUND;
  },

  kilogramsToPounds( kilograms: number ): number {
    return kilograms / KG_PER_POUND;
  },

  feetToMeters( feet: number ): number {
    return feet * METERS_PER_FOOT;
  },

  metersToFeet( meters: number ): number {
    return meters / METERS_PER_FOOT;
  }
};

export default EatingExerciseAndEnergyUnits;
