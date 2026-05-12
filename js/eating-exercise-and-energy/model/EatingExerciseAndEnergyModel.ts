// Copyright 2020-2026, University of Colorado Boulder

/**
 * @author Sam Reid (PhET Interactive Simulations)
 */

import BooleanProperty from '../../../../axon/js/BooleanProperty.js';
import Emitter from '../../../../axon/js/Emitter.js';
import EnumerationProperty from '../../../../axon/js/EnumerationProperty.js';
import NumberProperty from '../../../../axon/js/NumberProperty.js';
import TModel from '../../../../joist/js/TModel.js';
import TimeSpeed from '../../../../scenery-phet/js/TimeSpeed.js';
import Tandem from '../../../../tandem/js/Tandem.js';
import EatingExerciseAndEnergyConstants from '../../common/EatingExerciseAndEnergyConstants.js';
import EatingExerciseAndEnergyData from '../../common/model/EatingExerciseAndEnergyData.js';
import HumanModel from '../../common/model/HumanModel.js';
import IntentionalAny from '../../../../phet-core/js/types/IntentionalAny.js';

type DailyItem = { id: number; key: string };

class EatingExerciseAndEnergyModel implements TModel {

  public readonly isPlayingProperty: BooleanProperty;
  public readonly simulationDaysPerRealSecondProperty: NumberProperty;
  public readonly timeSpeedProperty: EnumerationProperty<TimeSpeed>;
  public readonly humanModel: HumanModel;
  public readonly availableFoodItems: readonly IntentionalAny[];
  public readonly availableExerciseItems: readonly IntentionalAny[];
  public readonly exerciseReferenceMassKilograms: number;
  public readonly dailyFoodItems: DailyItem[];
  public readonly dailyExerciseItems: DailyItem[];
  public readonly dailyItemsChangedEmitter: Emitter;

  private nextDailyItemID: number;

  public constructor( tandem: Tandem ) {

    this.isPlayingProperty = new BooleanProperty( false, {
      tandem: tandem.createTandem( 'isPlayingProperty' )
    } );

    this.simulationDaysPerRealSecondProperty = new NumberProperty( EatingExerciseAndEnergyConstants.SIMULATION_DAYS_PER_REAL_SECOND, {
      range: EatingExerciseAndEnergyConstants.SIMULATION_DAYS_PER_REAL_SECOND_RANGE,
      tandem: tandem.createTandem( 'simulationDaysPerRealSecondProperty' )
    } );

    this.timeSpeedProperty = new EnumerationProperty( TimeSpeed.NORMAL, {
      validValues: [ TimeSpeed.SLOW, TimeSpeed.NORMAL, TimeSpeed.FAST ],
      tandem: tandem.createTandem( 'timeSpeedProperty' )
    } );
    this.timeSpeedProperty.link( ( timeSpeed: IntentionalAny ) => {
      this.simulationDaysPerRealSecondProperty.value = timeSpeed === TimeSpeed.SLOW ? 10 :
                                                       timeSpeed === TimeSpeed.NORMAL ? EatingExerciseAndEnergyConstants.SIMULATION_DAYS_PER_REAL_SECOND :
                                                       timeSpeed === TimeSpeed.FAST ? 90 :
                                                       ( () => { throw new Error( `Unrecognized timeSpeed: ${timeSpeed}` ); } )();
    } );

    this.humanModel = new HumanModel( {
      tandem: tandem.createTandem( 'humanModel' )
    } );

    this.availableFoodItems = EatingExerciseAndEnergyData.FOOD_ITEMS;

    this.availableExerciseItems = EatingExerciseAndEnergyData.EXERCISE_ITEMS;

    this.exerciseReferenceMassKilograms = EatingExerciseAndEnergyData.EXERCISE_REFERENCE_MASS_KILOGRAMS;

    this.nextDailyItemID = 1;

    this.dailyFoodItems = [];

    this.dailyExerciseItems = [];

    this.dailyItemsChangedEmitter = new Emitter( {
      tandem: tandem.createTandem( 'dailyItemsChangedEmitter' )
    } );

    this.humanModel.massKilogramsProperty.link( () => {
      this.updateDailyExerciseCalories();
      this.dailyItemsChangedEmitter.emit();
    } );

    this.resetDailyItemLists();
    this.updateDailyFoodCalories();
    this.updateDailyExerciseCalories();
  }

  /**
   * Resets the model.
   */
  public reset(): void {
    this.isPlayingProperty.reset();
    this.timeSpeedProperty.reset();
    this.simulationDaysPerRealSecondProperty.reset();
    this.humanModel.reset();
    this.resetDailyItemLists();
    this.updateDailyFoodCalories();
    this.updateDailyExerciseCalories();
    this.dailyItemsChangedEmitter.emit();
  }

  private resetDailyItemLists(): void {
    this.nextDailyItemID = 1;
    this.dailyFoodItems.length = 0;
    this.dailyExerciseItems.length = 0;
    this.addDailyItemToList( this.dailyFoodItems, 'balanced-daily-diet' );
  }

  private addDailyItemToList( items: DailyItem[], key: string ): DailyItem {
    const item = {
      id: this.nextDailyItemID++,
      key: key
    };
    items.push( item );
    return item;
  }

  /**
   * @param key   */
  public addDailyFoodItem( key: string ): void {
    assert && assert( this.getFoodItem( key ), `missing food item: ${key}` );
    this.addDailyItemToList( this.dailyFoodItems, key );
    this.updateDailyFoodCalories();
    this.dailyItemsChangedEmitter.emit();
  }

  /**
   * @param key   */
  public addDailyExerciseItem( key: string ): void {
    const exerciseItem = this.availableExerciseItems.find( ( item: IntentionalAny ) => item.key === key );
    assert && assert( exerciseItem, `missing exercise item: ${key}` );
    this.addDailyItemToList( this.dailyExerciseItems, key );
    this.updateDailyExerciseCalories();
    this.dailyItemsChangedEmitter.emit();
  }

  /**
   * @param id   */
  public removeDailyFoodItem( id: number ): void {
    const index = this.dailyFoodItems.findIndex( ( item: IntentionalAny ) => item.id === id );
    if ( index >= 0 ) {
      this.dailyFoodItems.splice( index, 1 );
      this.updateDailyFoodCalories();
      this.dailyItemsChangedEmitter.emit();
    }
  }

  /**
   * @param id   */
  public removeDailyExerciseItem( id: number ): void {
    const index = this.dailyExerciseItems.findIndex( ( item: IntentionalAny ) => item.id === id );
    if ( index >= 0 ) {
      this.dailyExerciseItems.splice( index, 1 );
      this.updateDailyExerciseCalories();
      this.dailyItemsChangedEmitter.emit();
    }
  }

  /**
   */
  public clearDailyItems(): void {
    this.dailyFoodItems.length = 0;
    this.dailyExerciseItems.length = 0;
    this.updateDailyFoodCalories();
    this.updateDailyExerciseCalories();
    this.dailyItemsChangedEmitter.emit();
  }

  /**
   */
  public clearDailyFoodItems(): void {
    this.dailyFoodItems.length = 0;
    this.updateDailyFoodCalories();
    this.dailyItemsChangedEmitter.emit();
  }

  /**
   */
  public clearDailyExerciseItems(): void {
    this.dailyExerciseItems.length = 0;
    this.updateDailyExerciseCalories();
    this.dailyItemsChangedEmitter.emit();
  }

  /**
   */
  public updateDailyFoodCalories(): void {
    const foodItems = this.dailyFoodItems.map( ( dailyItem: IntentionalAny ) => this.getFoodItem( dailyItem.key ) );

    this.humanModel.lipidCaloriesPerDayProperty.value = clampCaloriesPerDay(
      foodItems.reduce( ( sum: IntentionalAny, item: IntentionalAny ) => sum + item.lipidGrams * 9, 0 )
    );
    this.humanModel.carbohydrateCaloriesPerDayProperty.value = clampCaloriesPerDay(
      foodItems.reduce( ( sum: IntentionalAny, item: IntentionalAny ) => sum + item.carbohydrateGrams * 4, 0 )
    );
    this.humanModel.proteinCaloriesPerDayProperty.value = clampCaloriesPerDay(
      foodItems.reduce( ( sum: IntentionalAny, item: IntentionalAny ) => sum + item.proteinGrams * 4, 0 )
    );
  }

  /**
   * @param key   */
  public getFoodItem( key: string ): IntentionalAny {
    return this.availableFoodItems.find( ( item: IntentionalAny ) => item.key === key );
  }

  /**
   * @param key   */
  public getFoodItemCaloriesPerDay( key: string ): number {
    const item = this.getFoodItem( key );
    assert && assert( item, `missing food item: ${key}` );
    return item.lipidGrams * 9 + item.carbohydrateGrams * 4 + item.proteinGrams * 4;
  }

  /**
   */
  public updateDailyExerciseCalories(): void {
    this.humanModel.exerciseCaloriesPerDayProperty.value = clampCaloriesPerDay(
      this.dailyExerciseItems.reduce( ( sum: IntentionalAny, dailyItem: IntentionalAny ) => {
        const exerciseItem = this.availableExerciseItems.find( ( item: IntentionalAny ) => item.key === dailyItem.key );
        const massMultiplier = exerciseItem.weightDependent ?
                               this.humanModel.massKilogramsProperty.value / this.exerciseReferenceMassKilograms :
                               1;
        return sum + exerciseItem.referenceCaloriesPerHour * massMultiplier;
      }, 0 )
    );
  }

  /**
   * Steps the model.
   * @param dt
   */
  public step( dt: number ): void {
    if ( this.isPlayingProperty.value ) {
      this.humanModel.stepDays( dt * this.simulationDaysPerRealSecondProperty.value );
      if ( !this.humanModel.isAliveProperty.value ) {
        this.isPlayingProperty.value = false;
      }
    }
  }
}

const clampCaloriesPerDay = ( caloriesPerDay: number ): number => Math.max(
  EatingExerciseAndEnergyConstants.CALORIES_PER_DAY_RANGE.min,
  Math.min( caloriesPerDay, EatingExerciseAndEnergyConstants.CALORIES_PER_DAY_RANGE.max )
);

export default EatingExerciseAndEnergyModel;
