// Copyright 2026, University of Colorado Boulder

/**
 * Core body-energy model for Eating, Exercise, and Energy.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import BooleanProperty from '../../../../axon/js/BooleanProperty.js';
import DerivedProperty from '../../../../axon/js/DerivedProperty.js';
import Emitter from '../../../../axon/js/Emitter.js';
import NumberProperty from '../../../../axon/js/NumberProperty.js';
import Property from '../../../../axon/js/Property.js';
import Range from '../../../../dot/js/Range.js';
import { clamp } from '../../../../dot/js/util/clamp.js';
import BooleanIO from '../../../../tandem/js/types/BooleanIO.js';
import NumberIO from '../../../../tandem/js/types/NumberIO.js';
import StringIO from '../../../../tandem/js/types/StringIO.js';
import Tandem from '../../../../tandem/js/Tandem.js';
import EatingExerciseAndEnergyConstants from '../EatingExerciseAndEnergyConstants.js';
import EatingExerciseAndEnergyUnits from './EatingExerciseAndEnergyUnits.js';
import IntentionalAny from '../../../../phet-core/js/types/IntentionalAny.js';

const GENDER_VALUES = [ 'female', 'male' ];
const ACTIVITY_LEVEL_VALUES = [ 'verySedentary', 'sedentary', 'moderate', 'active' ];

const GENDER_DATA: Record<string, IntentionalAny> = {
  female: {
    defaultHeightMeters: EatingExerciseAndEnergyUnits.feetToMeters( 5 + 5 / 12 ),
    defaultMassKilograms: EatingExerciseAndEnergyUnits.poundsToKilograms( 135 ),
    defaultFatMassPercent: 26,
    starvationFatMassPercent: 8,
    normalFatMassPercentRange: new Range( 16, 31 ),
    standardBMI: 23,
    standardLeanMassFraction: 0.91,
    fatMassMultiplier: 2.25,
    fatMassLimiter: 1 / 2.25
  },
  male: {
    defaultHeightMeters: EatingExerciseAndEnergyUnits.feetToMeters( 5 + 8 / 12 ),
    defaultMassKilograms: EatingExerciseAndEnergyUnits.poundsToKilograms( 150 ),
    defaultFatMassPercent: 14,
    starvationFatMassPercent: 4,
    normalFatMassPercentRange: new Range( 6, 25 ),
    standardBMI: 27,
    standardLeanMassFraction: 0.96,
    fatMassMultiplier: 4,
    fatMassLimiter: 0.25
  }
};

const ACTIVITY_LEVEL_DATA: Record<string, IntentionalAny> = {
  verySedentary: {
    activityMultiplier: 0.05,
    referenceBMI: 18.5
  },
  sedentary: {
    activityMultiplier: 0.15,
    referenceBMI: 20
  },
  moderate: {
    activityMultiplier: 0.45,
    referenceBMI: 22.5
  },
  active: {
    activityMultiplier: 0.75,
    referenceBMI: 25
  }
};

const MINIMUM_HISTORY_INTERVAL_DAYS = 7;
const MAX_HISTORY_SAMPLE_COUNT = 120;
const STARVATION_DEATH_DAYS = 60;

class HumanModel {

  public static readonly GENDER_VALUES = GENDER_VALUES;
  public static readonly ACTIVITY_LEVEL_VALUES = ACTIVITY_LEVEL_VALUES;
  public static readonly GENDER_DATA = GENDER_DATA;
  public static readonly ACTIVITY_LEVEL_DATA = ACTIVITY_LEVEL_DATA;

  public readonly genderProperty: Property<IntentionalAny>;
  public readonly activityLevelProperty: Property<IntentionalAny>;
  public readonly simulationTimeDaysProperty: NumberProperty;
  public readonly ageYearsProperty: NumberProperty;
  public readonly heightMetersProperty: NumberProperty;
  public readonly massKilogramsProperty: NumberProperty;
  public readonly fatMassPercentProperty: NumberProperty;
  public readonly lipidCaloriesPerDayProperty: NumberProperty;
  public readonly carbohydrateCaloriesPerDayProperty: NumberProperty;
  public readonly proteinCaloriesPerDayProperty: NumberProperty;
  public readonly exerciseCaloriesPerDayProperty: NumberProperty;
  public readonly fatMassKilogramsProperty: IntentionalAny;
  public readonly leanBodyMassKilogramsProperty: IntentionalAny;
  public readonly bmiProperty: IntentionalAny;
  public readonly basalMetabolicRateCaloriesPerDayProperty: IntentionalAny;
  public readonly activityCaloriesPerDayProperty: IntentionalAny;
  public readonly caloricIntakeCaloriesPerDayProperty: IntentionalAny;
  public readonly caloricBurnCaloriesPerDayProperty: IntentionalAny;
  public readonly calorieBalancePerDayProperty: IntentionalAny;
  public readonly isStarvingProperty: IntentionalAny;
  public readonly heartStrainProperty: IntentionalAny;
  public readonly heartStrengthProperty: IntentionalAny;
  public readonly heartHealthProperty: IntentionalAny;
  public readonly isAliveProperty: BooleanProperty;
  public readonly starvingTimeDaysProperty: NumberProperty;
  public readonly weightHistorySamples: {
    timeDays: number;
    massKilograms: number;
    caloricIntakeCaloriesPerDay: number;
    caloricBurnCaloriesPerDay: number;
  }[];
  public readonly weightHistoryChangedEmitter: Emitter;

  public constructor( providedOptions: { tandem: Tandem } ) {
    const tandem = providedOptions.tandem;

    this.genderProperty = new Property( 'female', {
      validValues: GENDER_VALUES,
      tandem: tandem.createTandem( 'genderProperty' ),
      phetioValueType: StringIO
    } );

    this.activityLevelProperty = new Property( 'moderate', {
      validValues: ACTIVITY_LEVEL_VALUES,
      tandem: tandem.createTandem( 'activityLevelProperty' ),
      phetioValueType: StringIO
    } );

    this.simulationTimeDaysProperty = new NumberProperty( 0, {
      isValidValue: ( value: IntentionalAny ) => value >= 0,
      tandem: tandem.createTandem( 'simulationTimeDaysProperty' )
    } );

    this.ageYearsProperty = new NumberProperty( EatingExerciseAndEnergyConstants.DEFAULT_AGE_YEARS, {
      range: EatingExerciseAndEnergyConstants.AGE_YEARS_RANGE,
      tandem: tandem.createTandem( 'ageYearsProperty' )
    } );

    this.heightMetersProperty = new NumberProperty( GENDER_DATA.female.defaultHeightMeters, {
      range: EatingExerciseAndEnergyConstants.HEIGHT_METERS_RANGE,
      tandem: tandem.createTandem( 'heightMetersProperty' )
    } );

    this.massKilogramsProperty = new NumberProperty( GENDER_DATA.female.defaultMassKilograms, {
      range: EatingExerciseAndEnergyConstants.MASS_KILOGRAMS_RANGE,
      tandem: tandem.createTandem( 'massKilogramsProperty' )
    } );

    this.fatMassPercentProperty = new NumberProperty( GENDER_DATA.female.defaultFatMassPercent, {
      range: EatingExerciseAndEnergyConstants.FAT_MASS_PERCENT_RANGE,
      tandem: tandem.createTandem( 'fatMassPercentProperty' )
    } );

    this.lipidCaloriesPerDayProperty = new NumberProperty( 600, {
      range: EatingExerciseAndEnergyConstants.CALORIES_PER_DAY_RANGE,
      tandem: tandem.createTandem( 'lipidCaloriesPerDayProperty' )
    } );

    this.carbohydrateCaloriesPerDayProperty = new NumberProperty( 800, {
      range: EatingExerciseAndEnergyConstants.CALORIES_PER_DAY_RANGE,
      tandem: tandem.createTandem( 'carbohydrateCaloriesPerDayProperty' )
    } );

    this.proteinCaloriesPerDayProperty = new NumberProperty( 600, {
      range: EatingExerciseAndEnergyConstants.CALORIES_PER_DAY_RANGE,
      tandem: tandem.createTandem( 'proteinCaloriesPerDayProperty' )
    } );

    this.exerciseCaloriesPerDayProperty = new NumberProperty( 0, {
      range: EatingExerciseAndEnergyConstants.CALORIES_PER_DAY_RANGE,
      tandem: tandem.createTandem( 'exerciseCaloriesPerDayProperty' )
    } );

    this.fatMassKilogramsProperty = new DerivedProperty(
      [ this.massKilogramsProperty, this.fatMassPercentProperty ],
      ( massKilograms: IntentionalAny, fatMassPercent: IntentionalAny ) => massKilograms * fatMassPercent / 100, {
        tandem: tandem.createTandem( 'fatMassKilogramsProperty' ),
        phetioValueType: NumberIO
      } );

    this.leanBodyMassKilogramsProperty = new DerivedProperty(
      [ this.massKilogramsProperty, this.fatMassKilogramsProperty ],
      ( massKilograms: IntentionalAny, fatMassKilograms: IntentionalAny ) => Math.max( massKilograms - fatMassKilograms, 0 ), {
        tandem: tandem.createTandem( 'leanBodyMassKilogramsProperty' ),
        phetioValueType: NumberIO
      } );

    this.bmiProperty = new DerivedProperty(
      [ this.massKilogramsProperty, this.heightMetersProperty ],
      ( massKilograms: IntentionalAny, heightMeters: IntentionalAny ) => massKilograms / ( heightMeters * heightMeters ), {
        tandem: tandem.createTandem( 'bmiProperty' ),
        phetioValueType: NumberIO
      } );

    // Legacy Java used RDEE = 392 + 21.8 * lean body mass.
    this.basalMetabolicRateCaloriesPerDayProperty = new DerivedProperty(
      [ this.leanBodyMassKilogramsProperty ],
      ( leanBodyMassKilograms: IntentionalAny ) => 392 + 21.8 * leanBodyMassKilograms, {
        tandem: tandem.createTandem( 'basalMetabolicRateCaloriesPerDayProperty' ),
        phetioValueType: NumberIO
      } );

    this.activityCaloriesPerDayProperty = new DerivedProperty(
      [ this.activityLevelProperty, this.massKilogramsProperty ],
      ( activityLevel: IntentionalAny, massKilograms: IntentionalAny ) => ACTIVITY_LEVEL_DATA[ activityLevel ].activityMultiplier * massKilograms * 20, {
        tandem: tandem.createTandem( 'activityCaloriesPerDayProperty' ),
        phetioValueType: NumberIO
      } );

    this.caloricIntakeCaloriesPerDayProperty = new DerivedProperty(
      [
        this.lipidCaloriesPerDayProperty,
        this.carbohydrateCaloriesPerDayProperty,
        this.proteinCaloriesPerDayProperty
      ],
      ( lipidCaloriesPerDay: IntentionalAny, carbohydrateCaloriesPerDay: IntentionalAny, proteinCaloriesPerDay: IntentionalAny ) =>
        lipidCaloriesPerDay + carbohydrateCaloriesPerDay + proteinCaloriesPerDay, {
        tandem: tandem.createTandem( 'caloricIntakeCaloriesPerDayProperty' ),
        phetioValueType: NumberIO
      } );

    this.caloricBurnCaloriesPerDayProperty = new DerivedProperty(
      [
        this.basalMetabolicRateCaloriesPerDayProperty,
        this.activityCaloriesPerDayProperty,
        this.exerciseCaloriesPerDayProperty
      ],
      ( bmrCaloriesPerDay: IntentionalAny, activityCaloriesPerDay: IntentionalAny, exerciseCaloriesPerDay: IntentionalAny ) =>
        bmrCaloriesPerDay + activityCaloriesPerDay + exerciseCaloriesPerDay, {
        tandem: tandem.createTandem( 'caloricBurnCaloriesPerDayProperty' ),
        phetioValueType: NumberIO
      } );

    this.calorieBalancePerDayProperty = new DerivedProperty(
      [ this.caloricIntakeCaloriesPerDayProperty, this.caloricBurnCaloriesPerDayProperty ],
      ( caloricIntakeCaloriesPerDay: IntentionalAny, caloricBurnCaloriesPerDay: IntentionalAny ) =>
        caloricIntakeCaloriesPerDay - caloricBurnCaloriesPerDay, {
        tandem: tandem.createTandem( 'calorieBalancePerDayProperty' ),
        phetioValueType: NumberIO
      } );

    this.isStarvingProperty = new DerivedProperty(
      [ this.genderProperty, this.fatMassPercentProperty ],
      ( gender: IntentionalAny, fatMassPercent: IntentionalAny ) => fatMassPercent < GENDER_DATA[ gender ].starvationFatMassPercent, {
        tandem: tandem.createTandem( 'isStarvingProperty' ),
        phetioValueType: BooleanIO
      } );

    this.heartStrainProperty = new DerivedProperty(
      [ this.genderProperty, this.fatMassPercentProperty ],
      ( gender: IntentionalAny, fatMassPercent: IntentionalAny ) => {
        const normalRange = GENDER_DATA[ gender ].normalFatMassPercentRange;
        const distanceFromNormal = fatMassPercent < normalRange.min ?
                                   normalRange.min - fatMassPercent :
                                   fatMassPercent > normalRange.max ? fatMassPercent - normalRange.max : 0;
        return clamp( distanceFromNormal * 2 / 100, 0, 1 );
      }, {
        tandem: tandem.createTandem( 'heartStrainProperty' ),
        phetioValueType: NumberIO
      } );

    this.heartStrengthProperty = new DerivedProperty(
      [ this.exerciseCaloriesPerDayProperty, this.activityCaloriesPerDayProperty ],
      ( exerciseCaloriesPerDay: IntentionalAny, activityCaloriesPerDay: IntentionalAny ) => {
        const activityToCount = clamp( ( activityCaloriesPerDay - 200 ) * 0.2, 0, 100 );
        return clamp( Math.log10( 1 + 100 * ( exerciseCaloriesPerDay + activityToCount ) / 1100 ) / Math.log10( 101 ), 0, 1 );
      }, {
        tandem: tandem.createTandem( 'heartStrengthProperty' ),
        phetioValueType: NumberIO
      } );

    this.heartHealthProperty = new DerivedProperty(
      [ this.heartStrengthProperty, this.heartStrainProperty ],
      ( heartStrength: IntentionalAny, heartStrain: IntentionalAny ) => ( heartStrength + ( 1 - heartStrain ) ) / 2, {
        tandem: tandem.createTandem( 'heartHealthProperty' ),
        phetioValueType: NumberIO
      } );

    this.isAliveProperty = new BooleanProperty( true, {
      tandem: tandem.createTandem( 'isAliveProperty' )
    } );

    this.starvingTimeDaysProperty = new NumberProperty( 0, {
      isValidValue: ( value: IntentionalAny ) => value >= 0,
      tandem: tandem.createTandem( 'starvingTimeDaysProperty' )
    } );

    this.weightHistorySamples = [];

    this.weightHistoryChangedEmitter = new Emitter();

    this.recordWeightHistorySample();
  }

  /**
   * Advances the body model by a number of simulation days.
   * @param days   */
  public stepDays( days: IntentionalAny ): void {
    if ( days <= 0 || !this.isAliveProperty.value ) {
      return;
    }

    const startingMassKilograms = this.massKilogramsProperty.value;
    const startingFatMassKilograms = this.fatMassKilogramsProperty.value;
    const balanceCalories = this.calorieBalancePerDayProperty.value * days;
    const genderData = GENDER_DATA[ this.genderProperty.value ];
    const fatMassFraction = startingFatMassKilograms / startingMassKilograms;
    const excessCalories = Math.max( balanceCalories, 0 );
    const deficitCalories = Math.max( -balanceCalories, 0 );
    const fractionFatLost = this.isStarvingProperty.value ? 0.05 :
                            Math.min( fatMassFraction * genderData.fatMassMultiplier, genderData.fatMassLimiter ) >= genderData.fatMassLimiter ? 1 :
                            fatMassFraction * genderData.fatMassMultiplier;
    const fatKilogramsGained = excessCalories / 9000;
    const fatKilogramsLost = deficitCalories * fractionFatLost / 9000;
    const leanKilogramsLost = deficitCalories * ( 1 - fractionFatLost ) / 4000;
    const exerciseCalories = ( this.exerciseCaloriesPerDayProperty.value + this.activityCaloriesPerDayProperty.value / 2 ) * days;
    const targetLeanMassKilograms = genderData.standardBMI * this.heightMetersProperty.value * this.heightMetersProperty.value *
                                    genderData.standardLeanMassFraction;
    const leanKilogramsGained = Math.max( 0, 0.08 * exerciseCalories *
                                             ( targetLeanMassKilograms - this.leanBodyMassKilogramsProperty.value ) /
                                             targetLeanMassKilograms / 4000 );
    const nextFatMassKilograms = Math.max( startingFatMassKilograms + fatKilogramsGained - fatKilogramsLost, 0.001 );
    const nextLeanBodyMassKilograms = Math.max( this.leanBodyMassKilogramsProperty.value - leanKilogramsLost + leanKilogramsGained, 0.001 );
    const nextMassKilograms = clamp(
      nextFatMassKilograms + nextLeanBodyMassKilograms,
      EatingExerciseAndEnergyConstants.MASS_KILOGRAMS_RANGE.min,
      EatingExerciseAndEnergyConstants.MASS_KILOGRAMS_RANGE.max
    );

    this.massKilogramsProperty.value = nextMassKilograms;
    this.fatMassPercentProperty.value = clamp(
      100 * nextFatMassKilograms / nextMassKilograms,
      EatingExerciseAndEnergyConstants.FAT_MASS_PERCENT_RANGE.min,
      EatingExerciseAndEnergyConstants.FAT_MASS_PERCENT_RANGE.max
    );
    this.ageYearsProperty.value = clamp(
      this.ageYearsProperty.value + EatingExerciseAndEnergyUnits.daysToYears( days ),
      EatingExerciseAndEnergyConstants.AGE_YEARS_RANGE.min,
      EatingExerciseAndEnergyConstants.AGE_YEARS_RANGE.max
    );
    this.simulationTimeDaysProperty.value = this.simulationTimeDaysProperty.value + days;

    this.starvingTimeDaysProperty.value = this.isStarvingProperty.value ?
                                          this.starvingTimeDaysProperty.value + days :
                                          0;
    if ( this.starvingTimeDaysProperty.value > STARVATION_DEATH_DAYS ) {
      this.isAliveProperty.value = false;
    }

    const lastSample = this.weightHistorySamples[ this.weightHistorySamples.length - 1 ];
    if ( this.simulationTimeDaysProperty.value - lastSample.timeDays >= MINIMUM_HISTORY_INTERVAL_DAYS ) {
      this.recordWeightHistorySample();
    }
  }

  /**
   */
  public recordWeightHistorySample(): void {
    this.weightHistorySamples.push( {
      timeDays: this.simulationTimeDaysProperty.value,
      massKilograms: this.massKilogramsProperty.value,
      caloricIntakeCaloriesPerDay: this.caloricIntakeCaloriesPerDayProperty.value,
      caloricBurnCaloriesPerDay: this.caloricBurnCaloriesPerDayProperty.value
    } );

    while ( this.weightHistorySamples.length > MAX_HISTORY_SAMPLE_COUNT ) {
      this.weightHistorySamples.shift();
    }

    this.weightHistoryChangedEmitter.emit();
  }

  /**
   * Estimates body fat from BMI and gender, following the legacy Java auto-body-fat formula.
   */
  public getEstimatedBodyFatPercent(): number {
    const gender = this.genderProperty.value;
    const genderAdjustment = gender === 'female' ? 0 :
                             gender === 'male' ? 8 :
                             ( () => { throw new Error( `Unrecognized gender: ${gender}` ); } )();

    return clamp(
      1.4 * this.bmiProperty.value - genderAdjustment - 9,
      EatingExerciseAndEnergyConstants.FAT_MASS_PERCENT_RANGE.min,
      EatingExerciseAndEnergyConstants.FAT_MASS_PERCENT_RANGE.max
    );
  }

  /**
   */
  public applyEstimatedBodyFatPercent(): void {
    this.fatMassPercentProperty.value = this.getEstimatedBodyFatPercent();
  }

  /**
   */
  public reset(): void {
    this.genderProperty.reset();
    this.activityLevelProperty.reset();
    this.simulationTimeDaysProperty.reset();
    this.ageYearsProperty.reset();
    this.heightMetersProperty.reset();
    this.massKilogramsProperty.reset();
    this.fatMassPercentProperty.reset();
    this.lipidCaloriesPerDayProperty.reset();
    this.carbohydrateCaloriesPerDayProperty.reset();
    this.proteinCaloriesPerDayProperty.reset();
    this.exerciseCaloriesPerDayProperty.reset();
    this.isAliveProperty.reset();
    this.starvingTimeDaysProperty.reset();

    this.weightHistorySamples.length = 0;
    this.recordWeightHistorySample();
  }
}

export default HumanModel;
