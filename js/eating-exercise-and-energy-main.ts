// Copyright 2020-2023, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import Sim from '../../joist/js/Sim.js';
import PreferencesModel from '../../joist/js/preferences/PreferencesModel.js';
import simLauncher from '../../joist/js/simLauncher.js';
import Tandem from '../../tandem/js/Tandem.js';
import EatingExerciseAndEnergySimulationPreferencesContentNode from './common/view/EatingExerciseAndEnergySimulationPreferencesContentNode.js';
import EatingExerciseAndEnergyScreen from './eating-exercise-and-energy/EatingExerciseAndEnergyScreen.js';
import EatingExerciseAndEnergyStrings from './EatingExerciseAndEnergyStrings.js';
import IntentionalAny from '../../phet-core/js/types/IntentionalAny.js';

const eatingExerciseAndEnergyTitleStringProperty = EatingExerciseAndEnergyStrings[ 'eating-exercise-and-energy' ].titleStringProperty;

const simOptions: IntentionalAny = {

  credits: {
    leadDesign: 'Sam Reid',
    softwareDevelopment: 'Sam Reid',
    team: 'PhET Interactive Simulations',
    qualityAssurance: '',
    graphicArts: 'Sam Reid',
    soundDesign: '',
    thanks: ''
  },
  preferencesModel: new PreferencesModel( {
    simulationOptions: {
      customPreferences: [ {
        createContent: ( tandem: IntentionalAny ) => new EatingExerciseAndEnergySimulationPreferencesContentNode( tandem )
      } ]
    }
  } )
};

// launch the sim - beware that scenery Image nodes created outside of simLauncher.launch() will have zero bounds
// until the images are fully loaded, see https://github.com/phetsims/coulombs-law/issues/70
simLauncher.launch( () => {
  const sim = new Sim( eatingExerciseAndEnergyTitleStringProperty, [
    new EatingExerciseAndEnergyScreen( Tandem.ROOT.createTandem( 'eatingExerciseAndEnergyScreen' ) )
  ], simOptions );
  sim.start();
} );
