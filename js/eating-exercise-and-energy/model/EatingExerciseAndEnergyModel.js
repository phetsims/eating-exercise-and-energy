// Copyright 2020-2023, University of Colorado Boulder

/**
 * @author Sam Reid (PhET Interactive Simulations)
 */

import Tandem from '../../../../tandem/js/Tandem.js';
import eatingExerciseAndEnergy from '../../eatingExerciseAndEnergy.js';

class EatingExerciseAndEnergyModel {

  /**
   * @param {Tandem} tandem
   */
  constructor( tandem ) {
    assert && assert( tandem instanceof Tandem, 'invalid tandem' );
    //TODO https://github.com/phetsims/tasks/issues/1129
  }

  /**
   * Resets the model.
   * @public
   */
  reset() {
    //TODO https://github.com/phetsims/tasks/issues/1129
  }

  /**
   * Steps the model.
   * @param {number} dt - time step, in seconds
   * @public
   */
  step( dt ) {
    //TODO https://github.com/phetsims/tasks/issues/1129
  }
}

eatingExerciseAndEnergy.register( 'EatingExerciseAndEnergyModel', EatingExerciseAndEnergyModel );
export default EatingExerciseAndEnergyModel;