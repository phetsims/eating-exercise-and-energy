// Copyright 2020-2026, University of Colorado Boulder

/**
 * @author Sam Reid (PhET Interactive Simulations)
 */

import Screen from '../../../joist/js/Screen.js';
import Tandem from '../../../tandem/js/Tandem.js';
import EatingExerciseAndEnergyFluent from '../EatingExerciseAndEnergyFluent.js';
import EatingExerciseAndEnergyColors from '../common/EatingExerciseAndEnergyColors.js';
import EatingExerciseAndEnergyKeyboardHelpContent from '../common/view/EatingExerciseAndEnergyKeyboardHelpContent.js';
import EatingExerciseAndEnergyModel from './model/EatingExerciseAndEnergyModel.js';
import EatingExerciseAndEnergyScreenView from './view/EatingExerciseAndEnergyScreenView.js';

class EatingExerciseAndEnergyScreen extends Screen<EatingExerciseAndEnergyModel, EatingExerciseAndEnergyScreenView> {

  public constructor( tandem: Tandem ) {

    const options = {
      name: EatingExerciseAndEnergyFluent.dashboard.titleStringProperty,
      backgroundColorProperty: EatingExerciseAndEnergyColors.SCREEN_VIEW_BACKGROUND,
      createKeyboardHelpNode: () => new EatingExerciseAndEnergyKeyboardHelpContent(),
      tandem: tandem
    };

    super(
      () => new EatingExerciseAndEnergyModel( tandem.createTandem( 'model' ) ),
      model => new EatingExerciseAndEnergyScreenView( model, tandem.createTandem( 'view' ) ),
      options
    );
  }
}

export default EatingExerciseAndEnergyScreen;
