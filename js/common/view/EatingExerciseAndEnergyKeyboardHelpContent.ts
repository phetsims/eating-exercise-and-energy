// Copyright 2026, University of Colorado Boulder

/**
 * Keyboard help content for Eating, Exercise, and Energy.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import BasicActionsKeyboardHelpSection from '../../../../scenery-phet/js/keyboard/help/BasicActionsKeyboardHelpSection.js';
import KeyboardHelpSection from '../../../../scenery-phet/js/keyboard/help/KeyboardHelpSection.js';
import KeyboardHelpSectionRow from '../../../../scenery-phet/js/keyboard/help/KeyboardHelpSectionRow.js';
import SliderControlsKeyboardHelpSection from '../../../../scenery-phet/js/keyboard/help/SliderControlsKeyboardHelpSection.js';
import SpinnerControlsKeyboardHelpSection from '../../../../scenery-phet/js/keyboard/help/SpinnerControlsKeyboardHelpSection.js';
import TwoColumnKeyboardHelpContent from '../../../../scenery-phet/js/keyboard/help/TwoColumnKeyboardHelpContent.js';
import HotkeyData from '../../../../scenery/js/input/HotkeyData.js';
import EatingExerciseAndEnergyFluent from '../../EatingExerciseAndEnergyFluent.js';
import eatingExerciseAndEnergy from '../../eatingExerciseAndEnergy.js';

const ADD_ITEM_HOTKEY_DATA = new HotkeyData( {
  keys: [ 'space', 'enter' ],
  repoName: eatingExerciseAndEnergy.name,
  keyboardHelpDialogLabelStringProperty: EatingExerciseAndEnergyFluent.keyboardHelpDialog.addFoodOrActivityItemStringProperty
} );
const REMOVE_ITEM_HOTKEY_DATA = new HotkeyData( {
  keys: [ 'delete', 'backspace' ],
  repoName: eatingExerciseAndEnergy.name,
  keyboardHelpDialogLabelStringProperty: EatingExerciseAndEnergyFluent.keyboardHelpDialog.removeFoodOrActivityItemStringProperty
} );

class EatingExerciseAndEnergyKeyboardHelpContent extends TwoColumnKeyboardHelpContent {

  public constructor() {
    super(
      [
        new KeyboardHelpSection( EatingExerciseAndEnergyFluent.keyboardHelpDialog.foodAndActivityStringProperty, [
          KeyboardHelpSectionRow.fromHotkeyData( ADD_ITEM_HOTKEY_DATA ),
          KeyboardHelpSectionRow.fromHotkeyData( REMOVE_ITEM_HOTKEY_DATA )
        ] ),
        new SliderControlsKeyboardHelpSection(),
        new SpinnerControlsKeyboardHelpSection()
      ],
      [
        new BasicActionsKeyboardHelpSection()
      ], {
        isDisposable: false
      }
    );
  }
}

export default EatingExerciseAndEnergyKeyboardHelpContent;
