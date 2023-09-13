// Copyright 2020-2023, University of Colorado Boulder

/**
 * @author Sam Reid (PhET Interactive Simulations)
 */

import Screen from '../../../joist/js/Screen.js';
import EatingExerciseAndEnergyColors from '../common/EatingExerciseAndEnergyColors.js';
import eatingExerciseAndEnergy from '../eatingExerciseAndEnergy.js';
import EatingExerciseAndEnergyModel from './model/EatingExerciseAndEnergyModel.js';
import EatingExerciseAndEnergyScreenView from './view/EatingExerciseAndEnergyScreenView.js';

class EatingExerciseAndEnergyScreen extends Screen {

  /**
   * @param {Tandem} tandem
   */
  constructor( tandem ) {

    const options = {
      //TODO if you include homeScreenIcon or navigationBarIcon, use JOIST/ScreenIcon https://github.com/phetsims/tasks/issues/1129
      backgroundColorProperty: EatingExerciseAndEnergyColors.SCREEN_VIEW_BACKGROUND,
      tandem: tandem
    };

    super(
      () => new EatingExerciseAndEnergyModel( tandem.createTandem( 'model' ) ),
      model => new EatingExerciseAndEnergyScreenView( model, tandem.createTandem( 'view' ) ),
      options
    );
  }
}

eatingExerciseAndEnergy.register( 'EatingExerciseAndEnergyScreen', EatingExerciseAndEnergyScreen );
export default EatingExerciseAndEnergyScreen;