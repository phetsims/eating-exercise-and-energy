// Copyright 2026, University of Colorado Boulder

/**
 * Simulation preferences for Eating, Exercise, and Energy.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import PreferencesDialogConstants from '../../../../joist/js/preferences/PreferencesDialogConstants.js';
import VBox from '../../../../scenery/js/layout/nodes/VBox.js';
import Text from '../../../../scenery/js/nodes/Text.js';
import VerticalAquaRadioButtonGroup from '../../../../sun/js/VerticalAquaRadioButtonGroup.js';
import Tandem from '../../../../tandem/js/Tandem.js';
import EatingExerciseAndEnergyFluent from '../../EatingExerciseAndEnergyFluent.js';
import EatingExerciseAndEnergyPreferences from '../model/EatingExerciseAndEnergyPreferences.js';

class EatingExerciseAndEnergySimulationPreferencesContentNode extends VBox {

  /**
   * @param tandem   */
  public constructor( tandem: Tandem ) {

    const displayUnitsPreferencesControlTandem = tandem.createTandem( 'displayUnitsPreferencesControl' );
    const textOptions = PreferencesDialogConstants.PANEL_SECTION_CONTENT_OPTIONS;

    const displayUnitsRadioButtonGroup = new VerticalAquaRadioButtonGroup(
      EatingExerciseAndEnergyPreferences.displayUnitsProperty, [ {
        createNode: () => new Text( EatingExerciseAndEnergyFluent.bodyControls.englishStringProperty, textOptions ),
        value: 'english',
        tandemName: 'englishRadioButton'
      }, {
        createNode: () => new Text( EatingExerciseAndEnergyFluent.bodyControls.metricStringProperty, textOptions ),
        value: 'metric',
        tandemName: 'metricRadioButton'
      } ], {
        tandem: displayUnitsPreferencesControlTandem.createTandem( 'radioButtonGroup' ),
        phetioVisiblePropertyInstrumented: false,
        radioButtonOptions: {
          radius: 8
        },
        accessibleName: EatingExerciseAndEnergyFluent.a11y.preferences.displayUnits.accessibleNameStringProperty,
        accessibleHelpText: EatingExerciseAndEnergyFluent.a11y.preferences.displayUnits.accessibleHelpTextStringProperty
      }
    );

    super( {
      align: 'left',
      spacing: PreferencesDialogConstants.CONTENT_SPACING,
      tandem: tandem,
      children: [
        new VBox( {
          align: 'left',
          spacing: PreferencesDialogConstants.CONTENT_SPACING,
          children: [
            new Text( EatingExerciseAndEnergyFluent.preferences.displayUnitsStringProperty, PreferencesDialogConstants.PANEL_SECTION_LABEL_OPTIONS ),
            displayUnitsRadioButtonGroup
          ],
          tandem: displayUnitsPreferencesControlTandem,
          visiblePropertyOptions: {
            phetioFeatured: true
          }
        } )
      ]
    } );
  }
}

export default EatingExerciseAndEnergySimulationPreferencesContentNode;
