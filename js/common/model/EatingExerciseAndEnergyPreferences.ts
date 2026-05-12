// Copyright 2026, University of Colorado Boulder

/**
 * Simulation-wide preferences for Eating, Exercise, and Energy.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import Property from '../../../../axon/js/Property.js';
import Tandem from '../../../../tandem/js/Tandem.js';
import StringIO from '../../../../tandem/js/types/StringIO.js';

const DISPLAY_UNIT_VALUES = [ 'metric', 'english' ];

const EatingExerciseAndEnergyPreferences = {


  displayUnitsProperty: new Property( 'english', {
    validValues: DISPLAY_UNIT_VALUES,
    tandem: Tandem.PREFERENCES.createTandem( 'displayUnitsProperty' ),
    phetioFeatured: true,
    phetioDocumentation: 'Units used for height and weight readouts.',
    phetioValueType: StringIO
  } )
};

export default EatingExerciseAndEnergyPreferences;
