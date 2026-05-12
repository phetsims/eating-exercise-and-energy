// Copyright 2020-2026, University of Colorado Boulder

/**
 * @author Sam Reid (PhET Interactive Simulations)
 */

import BooleanProperty from '../../../../axon/js/BooleanProperty.js';
import DerivedProperty from '../../../../axon/js/DerivedProperty.js';
import Multilink from '../../../../axon/js/Multilink.js';
import NumberProperty from '../../../../axon/js/NumberProperty.js';
import PatternStringProperty from '../../../../axon/js/PatternStringProperty.js';
import ChartRectangle from '../../../../bamboo/js/ChartRectangle.js';
import ChartTransform from '../../../../bamboo/js/ChartTransform.js';
import GridLineSet from '../../../../bamboo/js/GridLineSet.js';
import LinePlot from '../../../../bamboo/js/LinePlot.js';
import TickLabelSet from '../../../../bamboo/js/TickLabelSet.js';
import TickMarkSet from '../../../../bamboo/js/TickMarkSet.js';
import Range from '../../../../dot/js/Range.js';
import { clamp } from '../../../../dot/js/util/clamp.js';
import { roundSymmetric } from '../../../../dot/js/util/roundSymmetric.js';
import { toFixedNumber } from '../../../../dot/js/util/toFixedNumber.js';
import Vector2 from '../../../../dot/js/Vector2.js';
import Shape from '../../../../kite/js/Shape.js';
import escapeHTML from '../../../../phet-core/js/escapeHTML.js';
import { combineOptions } from '../../../../phet-core/js/optionize.js';
import EatingExerciseAndEnergyFluent from '../../EatingExerciseAndEnergyFluent.js';
import Orientation from '../../../../phet-core/js/Orientation.js';
import ScreenSummaryContent from '../../../../joist/js/ScreenSummaryContent.js';
import ScreenView from '../../../../joist/js/ScreenView.js';
import ArrowNode from '../../../../scenery-phet/js/ArrowNode.js';
import InfoButton from '../../../../scenery-phet/js/buttons/InfoButton.js';
import ResetAllButton from '../../../../scenery-phet/js/buttons/ResetAllButton.js';
import TrashButton from '../../../../scenery-phet/js/buttons/TrashButton.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import TimeControlNode from '../../../../scenery-phet/js/TimeControlNode.js';
import TimeSpeed from '../../../../scenery-phet/js/TimeSpeed.js';
import AlignGroup from '../../../../scenery/js/layout/constraints/AlignGroup.js';
import ManualConstraint from '../../../../scenery/js/layout/constraints/ManualConstraint.js';
import GridBox from '../../../../scenery/js/layout/nodes/GridBox.js';
import HBox from '../../../../scenery/js/layout/nodes/HBox.js';
import VBox from '../../../../scenery/js/layout/nodes/VBox.js';
import Circle from '../../../../scenery/js/nodes/Circle.js';
import DragListener from '../../../../scenery/js/listeners/DragListener.js';
import HotkeyData from '../../../../scenery/js/input/HotkeyData.js';
import Image from '../../../../scenery/js/nodes/Image.js';
import InteractiveHighlightingNode from '../../../../scenery/js/accessibility/voicing/nodes/InteractiveHighlightingNode.js';
import KeyboardListener from '../../../../scenery/js/listeners/KeyboardListener.js';
import Node from '../../../../scenery/js/nodes/Node.js';
import Rectangle from '../../../../scenery/js/nodes/Rectangle.js';
import RichText from '../../../../scenery/js/nodes/RichText.js';
import Text from '../../../../scenery/js/nodes/Text.js';
import Path, { type PathOptions } from '../../../../scenery/js/nodes/Path.js';
import AccordionBox from '../../../../sun/js/AccordionBox.js';
import Carousel from '../../../../sun/js/Carousel.js';
import Checkbox from '../../../../sun/js/Checkbox.js';
import Dialog from '../../../../sun/js/Dialog.js';
import Panel, { type PanelOptions } from '../../../../sun/js/Panel.js';
import TextPushButton from '../../../../sun/js/buttons/TextPushButton.js';
import Tandem from '../../../../tandem/js/Tandem.js';
import EatingExerciseAndEnergyConstants from '../../common/EatingExerciseAndEnergyConstants.js';
import EatingExerciseAndEnergyPreferences from '../../common/model/EatingExerciseAndEnergyPreferences.js';
import EatingExerciseAndEnergyUnits from '../../common/model/EatingExerciseAndEnergyUnits.js';
import getEatingExerciseAndEnergyImage from '../../common/view/getEatingExerciseAndEnergyImage.js';
import HumanModel from '../../common/model/HumanModel.js';
import eatingExerciseAndEnergy from '../../eatingExerciseAndEnergy.js';
import EatingExerciseAndEnergyModel from '../model/EatingExerciseAndEnergyModel.js';
import IntentionalAny from '../../../../phet-core/js/types/IntentionalAny.js';

const LABEL_FONT = new PhetFont( 16 );
const BUTTON_FONT = new PhetFont( 16 );
const CONTROL_TITLE_FONT = new PhetFont( { size: 18, weight: 'bold' } );
const BODY_ENERGY_LABEL_FONT = new PhetFont( 12.8 );
const BODY_ENERGY_VALUE_FONT = new PhetFont( { size: 14.4, weight: 'bold' } );
const GRAPH_TITLE_FONT = new PhetFont( { size: 10.8, weight: 'bold' } );
const GRAPH_LABEL_FONT = new PhetFont( 6.6 );
const PANEL_OPTIONS = {
  fill: 'white',
  stroke: '#b8b8b8',
  cornerRadius: 6,
  xMargin: 16,
  yMargin: 16
};
const COMPACT_PANEL_OPTIONS = {
  fill: 'white',
  stroke: '#b8b8b8',
  cornerRadius: 6,
  xMargin: 10,
  yMargin: 12
};
const BAR_MAX_CALORIES_PER_DAY = 4000;
const FOOD_BAR_COLOR = '#749e50';
const EXERCISE_BAR_COLOR = '#bd6666';
const LIFESTYLE_BAR_COLOR = '#d89c3a';
const BMR_BAR_COLOR = '#777777';
const FAT_COLOR = '#c77b43';
const CARBOHYDRATE_COLOR = '#6aa64a';
const PROTEIN_COLOR = '#4f80bd';
const DOCK_BAR_HEIGHT = 440;
const DOCK_BAR_WIDTH = 54;
const OFF_SCALE_ARROW_HEIGHT = 20;
const OFF_SCALE_ARROW_OFFSET = 5;
const DOCK_BAR_EFFECTIVE_HEIGHT = DOCK_BAR_HEIGHT - OFF_SCALE_ARROW_HEIGHT - OFF_SCALE_ARROW_OFFSET;
const BAR_SEGMENT_IMAGE_SIZE = 28;
const TOOL_ITEM_IMAGE_SIZE = 30;
const CAROUSEL_ITEMS_PER_PAGE = 8;
const REMOVE_ITEM_HOTKEY_DATA = new HotkeyData( {
  keys: [ 'delete', 'backspace' ],
  repoName: eatingExerciseAndEnergy.name,
  keyboardHelpDialogLabelStringProperty: EatingExerciseAndEnergyFluent.keyboardHelpDialog.removeFoodOrActivityItemStringProperty
} );

type ItemBarNode = VBox & {
  dropZone: Node;
  previewRectangle: Rectangle;
  dropHighlight: Rectangle;
};

const FOOD_ITEM_LABEL_STRING_PROPERTIES = {
  'balanced-daily-diet': EatingExerciseAndEnergyFluent.foodItems.balancedDailyDietStringProperty,
  'serving-corn-flakes': EatingExerciseAndEnergyFluent.foodItems.servingCornFlakesStringProperty,
  'cola-12-oz': EatingExerciseAndEnergyFluent.foodItems.cola12OzStringProperty,
  'slice-pizza': EatingExerciseAndEnergyFluent.foodItems.slicePizzaStringProperty,
  'large-fast-food-value-meal': EatingExerciseAndEnergyFluent.foodItems.largeFastFoodValueMealStringProperty,
  taco: EatingExerciseAndEnergyFluent.foodItems.tacoStringProperty,
  burrito: EatingExerciseAndEnergyFluent.foodItems.burritoStringProperty,
  'entire-pizza-12': EatingExerciseAndEnergyFluent.foodItems.entirePizza12StringProperty,
  'peanut-butter-and-jelly-sandwich': EatingExerciseAndEnergyFluent.foodItems.peanutButterAndJellySandwichStringProperty,
  'sub-sandwich': EatingExerciseAndEnergyFluent.foodItems.subSandwichStringProperty,
  'hot-dog-with-bun': EatingExerciseAndEnergyFluent.foodItems.hotDogWithBunStringProperty,
  hamburger: EatingExerciseAndEnergyFluent.foodItems.hamburgerStringProperty,
  'quarter-lb-hamburger': EatingExerciseAndEnergyFluent.foodItems.quarterLbHamburgerStringProperty,
  'large-fries': EatingExerciseAndEnergyFluent.foodItems.largeFriesStringProperty,
  'salad-with-dressing': EatingExerciseAndEnergyFluent.foodItems.saladWithDressingStringProperty,
  'cup-strawberries': EatingExerciseAndEnergyFluent.foodItems.cupStrawberriesStringProperty,
  'cup-grapefruit': EatingExerciseAndEnergyFluent.foodItems.cupGrapefruitStringProperty,
  apple: EatingExerciseAndEnergyFluent.foodItems.appleStringProperty,
  banana: EatingExerciseAndEnergyFluent.foodItems.bananaStringProperty,
  grapes: EatingExerciseAndEnergyFluent.foodItems.grapesStringProperty,
  'cup-yogurt-low-fat-plain': EatingExerciseAndEnergyFluent.foodItems.cupYogurtLowFatPlainStringProperty,
  'cup-yogurt-flavored': EatingExerciseAndEnergyFluent.foodItems.cupYogurtFlavoredStringProperty,
  'cup-milk-whole': EatingExerciseAndEnergyFluent.foodItems.cupMilkWholeStringProperty,
  'cup-milk-2': EatingExerciseAndEnergyFluent.foodItems.cupMilk2StringProperty,
  'cup-milk-skim': EatingExerciseAndEnergyFluent.foodItems.cupMilkSkimStringProperty,
  'apple-juice-1-cup-248-g': EatingExerciseAndEnergyFluent.foodItems.appleJuice1Cup248GStringProperty,
  'orange-juice-not-concentrate-8-oz': EatingExerciseAndEnergyFluent.foodItems.orangeJuiceNotConcentrate8OzStringProperty,
  'ice-tea-8-fl-oz': EatingExerciseAndEnergyFluent.foodItems.iceTea8FlOzStringProperty,
  'lemonade-8-fl-oz': EatingExerciseAndEnergyFluent.foodItems.lemonade8FlOzStringProperty,
  'diet-cola-12-oz': EatingExerciseAndEnergyFluent.foodItems.dietCola12OzStringProperty,
  'hot-chocolate-whole-milk': EatingExerciseAndEnergyFluent.foodItems.hotChocolateWholeMilkStringProperty,
  'latte-with-whole-milk': EatingExerciseAndEnergyFluent.foodItems.latteWithWholeMilkStringProperty,
  'large-sugary-blended-coffee-drink': EatingExerciseAndEnergyFluent.foodItems.largeSugaryBlendedCoffeeDrinkStringProperty,
  'large-milkshake': EatingExerciseAndEnergyFluent.foodItems.largeMilkshakeStringProperty,
  milkshake: EatingExerciseAndEnergyFluent.foodItems.milkshakeStringProperty,
  'baked-potato-in-skin-with-salt': EatingExerciseAndEnergyFluent.foodItems.bakedPotatoInSkinWithSaltStringProperty,
  'half-cup-sweet-yellow-corn': EatingExerciseAndEnergyFluent.foodItems.halfCupSweetYellowCornStringProperty,
  'half-cup-cauliflower-boiled': EatingExerciseAndEnergyFluent.foodItems.halfCupCauliflowerBoiledStringProperty,
  'half-cup-carrots-chopped': EatingExerciseAndEnergyFluent.foodItems.halfCupCarrotsChoppedStringProperty,
  'half-cup-broccoli-cooked': EatingExerciseAndEnergyFluent.foodItems.halfCupBroccoliCookedStringProperty,
  'serving-honey-ham-100-g': EatingExerciseAndEnergyFluent.foodItems.servingHoneyHam100GStringProperty,
  'pork-chop-3-oz-84-g': EatingExerciseAndEnergyFluent.foodItems.porkChop3Oz84GStringProperty,
  chicken: EatingExerciseAndEnergyFluent.foodItems.chickenStringProperty,
  beef: EatingExerciseAndEnergyFluent.foodItems.beefStringProperty,
  'set-of-3-slices-of-bacon': EatingExerciseAndEnergyFluent.foodItems.setOf3SlicesOfBaconStringProperty,
  'small-bag-potato-chips': EatingExerciseAndEnergyFluent.foodItems.smallBagPotatoChipsStringProperty,
  'quarter-cup-mixed-nuts-with-peanuts': EatingExerciseAndEnergyFluent.foodItems.quarterCupMixedNutsWithPeanutsStringProperty,
  'serving-cream-filled-cookies': EatingExerciseAndEnergyFluent.foodItems.servingCreamFilledCookiesStringProperty,
  'candy-bar': EatingExerciseAndEnergyFluent.foodItems.candyBarStringProperty,
  'banana-split': EatingExerciseAndEnergyFluent.foodItems.bananaSplitStringProperty,
  'rice-cup': EatingExerciseAndEnergyFluent.foodItems.riceCupStringProperty,
  'bowl-of-pasta': EatingExerciseAndEnergyFluent.foodItems.bowlOfPastaStringProperty,
  'slice-of-bread': EatingExerciseAndEnergyFluent.foodItems.sliceOfBreadStringProperty,
  bagel: EatingExerciseAndEnergyFluent.foodItems.bagelStringProperty,
  pancakes: EatingExerciseAndEnergyFluent.foodItems.pancakesStringProperty,
  syrup: EatingExerciseAndEnergyFluent.foodItems.syrupStringProperty,
  egg: EatingExerciseAndEnergyFluent.foodItems.eggStringProperty,
  butter: EatingExerciseAndEnergyFluent.foodItems.butterStringProperty,
  'cream-cheese': EatingExerciseAndEnergyFluent.foodItems.creamCheeseStringProperty
};

const EXERCISE_ITEM_LABEL_STRING_PROPERTIES = {
  'swimming-laps': EatingExerciseAndEnergyFluent.exerciseItems.swimmingLapsStringProperty,
  basketball: EatingExerciseAndEnergyFluent.exerciseItems.basketballStringProperty,
  skateboarding: EatingExerciseAndEnergyFluent.exerciseItems.skateboardingStringProperty,
  'biking-to-work-or-for-leisure-10-Mph': EatingExerciseAndEnergyFluent.exerciseItems.bikingToWorkOrForLeisure10MphStringProperty,
  jogging: EatingExerciseAndEnergyFluent.exerciseItems.joggingStringProperty,
  'running-stairs': EatingExerciseAndEnergyFluent.exerciseItems.runningStairsStringProperty,
  'running-8-Mph-7-5-min-mile': EatingExerciseAndEnergyFluent.exerciseItems.running8Mph75MinMileStringProperty,
  'running-10-Mph-6-min-mile': EatingExerciseAndEnergyFluent.exerciseItems.running10Mph6MinMileStringProperty,
  backpacking: EatingExerciseAndEnergyFluent.exerciseItems.backpackingStringProperty,
  'rock-or-mountain-climbing': EatingExerciseAndEnergyFluent.exerciseItems.rockOrMountainClimbingStringProperty,
  snowshoeing: EatingExerciseAndEnergyFluent.exerciseItems.snowshoeingStringProperty,
  'cross-country-skiing': EatingExerciseAndEnergyFluent.exerciseItems.crossCountrySkiingStringProperty,
  'downhill-skiing-Moderate-effort': EatingExerciseAndEnergyFluent.exerciseItems.downhillSkiingModerateEffortStringProperty,
  pilates: EatingExerciseAndEnergyFluent.exerciseItems.pilatesStringProperty,
  'judo-Karate-Tae-Kwan-Do': EatingExerciseAndEnergyFluent.exerciseItems.judoKarateTaeKwanDoStringProperty,
  surfing: EatingExerciseAndEnergyFluent.exerciseItems.surfingStringProperty,
  canoeing: EatingExerciseAndEnergyFluent.exerciseItems.canoeingStringProperty,
  kayaking: EatingExerciseAndEnergyFluent.exerciseItems.kayakingStringProperty,
  'whitewater-rafting': EatingExerciseAndEnergyFluent.exerciseItems.whitewaterRaftingStringProperty,
  'rowing-crew': EatingExerciseAndEnergyFluent.exerciseItems.rowingCrewStringProperty,
  'horseback-riding': EatingExerciseAndEnergyFluent.exerciseItems.horsebackRidingStringProperty,
  'mountain-or-BMX-biking': EatingExerciseAndEnergyFluent.exerciseItems.mountainOrBMXBikingStringProperty,
  'road-biking-10-15-Mph': EatingExerciseAndEnergyFluent.exerciseItems.roadBiking1015MphStringProperty,
  'road-biking-racing-16-Mph-up': EatingExerciseAndEnergyFluent.exerciseItems.roadBikingRacing16MphUpStringProperty,
  unicycling: EatingExerciseAndEnergyFluent.exerciseItems.unicyclingStringProperty,
  'weight-lifting-light-effort': EatingExerciseAndEnergyFluent.exerciseItems.weightLiftingLightEffortStringProperty,
  'weight-lifting-body-building': EatingExerciseAndEnergyFluent.exerciseItems.weightLiftingBodyBuildingStringProperty,
  'ice-skating': EatingExerciseAndEnergyFluent.exerciseItems.iceSkatingStringProperty,
  'roller-blading': EatingExerciseAndEnergyFluent.exerciseItems.rollerBladingStringProperty,
  bowling: EatingExerciseAndEnergyFluent.exerciseItems.bowlingStringProperty,
  'beach-volleyball': EatingExerciseAndEnergyFluent.exerciseItems.beachVolleyballStringProperty,
  'non-competitive-volleyball': EatingExerciseAndEnergyFluent.exerciseItems.nonCompetitiveVolleyballStringProperty,
  'playing-catch-football-or-baseball': EatingExerciseAndEnergyFluent.exerciseItems.playingCatchFootballOrBaseballStringProperty,
  'tennis-singles': EatingExerciseAndEnergyFluent.exerciseItems.tennisSinglesStringProperty,
  'tennis-doubles': EatingExerciseAndEnergyFluent.exerciseItems.tennisDoublesStringProperty,
  'table-tennis': EatingExerciseAndEnergyFluent.exerciseItems.tableTennisStringProperty,
  squash: EatingExerciseAndEnergyFluent.exerciseItems.squashStringProperty,
  soccer: EatingExerciseAndEnergyFluent.exerciseItems.soccerStringProperty,
  lacrosse: EatingExerciseAndEnergyFluent.exerciseItems.lacrosseStringProperty,
  'ultimate-frisbee': EatingExerciseAndEnergyFluent.exerciseItems.ultimateFrisbeeStringProperty,
  'hockey-ice-or-field': EatingExerciseAndEnergyFluent.exerciseItems.hockeyIceOrFieldStringProperty,
  'walking-for-pleasure-like-on-a-break': EatingExerciseAndEnergyFluent.exerciseItems.walkingForPleasureLikeOnABreakStringProperty,
  'pushing-a-stroller-with-a-kid': EatingExerciseAndEnergyFluent.exerciseItems.pushingAStrollerWithAKidStringProperty,
  'mowing-lawn': EatingExerciseAndEnergyFluent.exerciseItems.mowingLawnStringProperty,
  gardening: EatingExerciseAndEnergyFluent.exerciseItems.gardeningStringProperty,
  vacuuming: EatingExerciseAndEnergyFluent.exerciseItems.vacuumingStringProperty,
  'jumping-rope': EatingExerciseAndEnergyFluent.exerciseItems.jumpingRopeStringProperty,
  dancing: EatingExerciseAndEnergyFluent.exerciseItems.dancingStringProperty,
  'dancing-fast-disco-folk-line-dancing': EatingExerciseAndEnergyFluent.exerciseItems.dancingFastDiscoFolkLineDancingStringProperty,
  'dancing-ballet-or-modern': EatingExerciseAndEnergyFluent.exerciseItems.dancingBalletOrModernStringProperty,
  'fishing-in-stream-flyfishing': EatingExerciseAndEnergyFluent.exerciseItems.fishingInStreamFlyfishingStringProperty,
  'golf-walking-and-carrying-clubs': EatingExerciseAndEnergyFluent.exerciseItems.golfWalkingAndCarryingClubsStringProperty,
  'golf-using-power-cart': EatingExerciseAndEnergyFluent.exerciseItems.golfUsingPowerCartStringProperty,
  'driving-heavy-truck': EatingExerciseAndEnergyFluent.exerciseItems.drivingHeavyTruckStringProperty
};

class EatingExerciseAndEnergyScreenView extends ScreenView {

  private readonly carouselValuesVisibleProperty: BooleanProperty;

  public constructor( model: EatingExerciseAndEnergyModel, tandem: Tandem ) {

    const humanModel = model.humanModel;

    const carouselValuesVisibleProperty = new BooleanProperty( false, {
      tandem: tandem.createTandem( 'carouselValuesVisibleProperty' ),
      phetioDocumentation: 'Whether calorie values are visible in the Food & Activity carousel.'
    } );

    super( {
      screenSummaryContent: new ScreenSummaryContent( {
        playAreaContent: EatingExerciseAndEnergyFluent.a11y.screenSummary.playAreaStringProperty,
        controlAreaContent: EatingExerciseAndEnergyFluent.a11y.screenSummary.controlAreaStringProperty,
        currentDetailsContent: EatingExerciseAndEnergyFluent.a11y.screenSummary.currentDetails.createProperty( {
          elapsedTime: createElapsedTimeStringProperty( humanModel.simulationTimeDaysProperty ),
          age: new DerivedProperty( [ humanModel.ageYearsProperty ], ( ageYears: IntentionalAny ) => toFixedNumber( ageYears, 1 ) ),
          weight: createMassStringProperty( humanModel.massKilogramsProperty, EatingExerciseAndEnergyPreferences.displayUnitsProperty ),
          bmi: new DerivedProperty( [ humanModel.bmiProperty ], ( bmi: IntentionalAny ) => toFixedNumber( bmi, 1 ) ),
          bodyFat: new DerivedProperty( [ humanModel.fatMassPercentProperty ], ( fatMassPercent: IntentionalAny ) => toFixedNumber( fatMassPercent, 1 ) ),
          bmr: new DerivedProperty( [ humanModel.basalMetabolicRateCaloriesPerDayProperty ], ( bmr: IntentionalAny ) => roundSymmetric( bmr ) ),
          intake: new DerivedProperty( [ humanModel.caloricIntakeCaloriesPerDayProperty ], ( intake: IntentionalAny ) => roundSymmetric( intake ) ),
          burn: new DerivedProperty( [ humanModel.caloricBurnCaloriesPerDayProperty ], ( burn: IntentionalAny ) => roundSymmetric( burn ) ),
          balance: new DerivedProperty( [ humanModel.calorieBalancePerDayProperty ], ( balance: IntentionalAny ) => roundSymmetric( balance ) ),
          heartHealth: new DerivedProperty( [ humanModel.heartHealthProperty ], ( heartHealth: IntentionalAny ) => roundSymmetric( heartHealth * 100 ) )
        } ),
        interactionHintContent: EatingExerciseAndEnergyFluent.a11y.screenSummary.interactionHintStringProperty
      } ),
      tandem: tandem
    } );

    this.carouselValuesVisibleProperty = carouselValuesVisibleProperty;

    const healthNoteDialog = new Dialog( new RichText( EatingExerciseAndEnergyFluent.healthNote.bodyStringProperty, {
      font: new PhetFont( 13 ),
      maxWidth: 460,
      lineWrap: 460
    } ), {
      title: new Text( EatingExerciseAndEnergyFluent.healthNote.titleStringProperty, {
        font: CONTROL_TITLE_FONT,
        maxWidth: 420
      } ),
      topMargin: 28,
      bottomMargin: 34
    } );
    const healthInfoButton = new InfoButton( {
      listener: () => healthNoteDialog.show(),
      iconFill: '#2b5f89',
      scale: 0.75,
      tandem: tandem.createTandem( 'healthInfoButton' )
    } );

    const humanNode = createHumanBodyNode( humanModel );
    const resetAllButton = new ResetAllButton( {
      listener: () => {
        model.reset();
        this.reset();
      },
      tandem: tandem.createTandem( 'resetAllButton' )
    } );

    const readoutGrid = new GridBox( {
      rows: [
        createReadoutRow(
          EatingExerciseAndEnergyFluent.readout.elapsedTimeStringProperty,
          createElapsedTimeStringProperty( humanModel.simulationTimeDaysProperty )
        ),
        createReadoutRow(
          EatingExerciseAndEnergyFluent.readout.ageStringProperty,
          createPatternValueStringProperty(
            EatingExerciseAndEnergyFluent.readout.yearsPatternStringProperty,
            humanModel.ageYearsProperty,
            ( value: IntentionalAny ) => toFixedNumber( value, 1 )
          )
        ),
        createReadoutRow(
          EatingExerciseAndEnergyFluent.readout.massStringProperty,
          createMassStringProperty( humanModel.massKilogramsProperty, EatingExerciseAndEnergyPreferences.displayUnitsProperty )
        ),
        createReadoutRow(
          EatingExerciseAndEnergyFluent.readout.bmiStringProperty,
          createPatternValueStringProperty(
            EatingExerciseAndEnergyFluent.readout.plainNumberPatternStringProperty,
            humanModel.bmiProperty,
            ( value: IntentionalAny ) => toFixedNumber( value, 1 )
          )
        ),
        createReadoutRow(
          EatingExerciseAndEnergyFluent.readout.bodyFatStringProperty,
          createPatternValueStringProperty(
            EatingExerciseAndEnergyFluent.readout.percentPatternStringProperty,
            humanModel.fatMassPercentProperty,
            ( value: IntentionalAny ) => toFixedNumber( value, 1 )
          )
        ),
        createReadoutRow(
          EatingExerciseAndEnergyFluent.readout.bmrStringProperty,
          createPatternValueStringProperty(
            EatingExerciseAndEnergyFluent.readout.caloriesPerDayPatternStringProperty,
            humanModel.basalMetabolicRateCaloriesPerDayProperty,
            ( value: IntentionalAny ) => roundSymmetric( value )
          )
        ),
        createReadoutRow(
          EatingExerciseAndEnergyFluent.readout.intakeStringProperty,
          createPatternValueStringProperty(
            EatingExerciseAndEnergyFluent.readout.caloriesPerDayPatternStringProperty,
            humanModel.caloricIntakeCaloriesPerDayProperty,
            ( value: IntentionalAny ) => roundSymmetric( value )
          )
        ),
        createReadoutRow(
          EatingExerciseAndEnergyFluent.readout.burnStringProperty,
          createPatternValueStringProperty(
            EatingExerciseAndEnergyFluent.readout.caloriesPerDayPatternStringProperty,
            humanModel.caloricBurnCaloriesPerDayProperty,
            ( value: IntentionalAny ) => roundSymmetric( value )
          )
        ),
        createReadoutRow(
          EatingExerciseAndEnergyFluent.readout.balanceStringProperty,
          createPatternValueStringProperty(
            EatingExerciseAndEnergyFluent.readout.caloriesPerDayPatternStringProperty,
            humanModel.calorieBalancePerDayProperty,
            ( value: IntentionalAny ) => roundSymmetric( value )
          )
        ),
        createReadoutRow(
          EatingExerciseAndEnergyFluent.readout.heartHealthStringProperty,
          createPatternValueStringProperty(
            EatingExerciseAndEnergyFluent.readout.percentPatternStringProperty,
            humanModel.heartHealthProperty,
            ( value: IntentionalAny ) => roundSymmetric( value * 100 )
          )
        )
      ],
      xSpacing: 18,
      ySpacing: 7,
      xAlign: 'left',
      yAlign: 'center'
    } );

    const timeControlNode = new TimeControlNode( model.isPlayingProperty, {
      enabledProperty: humanModel.isAliveProperty,
      timeSpeedProperty: model.timeSpeedProperty,
      timeSpeeds: [ TimeSpeed.SLOW, TimeSpeed.NORMAL, TimeSpeed.FAST ],
      speedRadioButtonGroupPlacement: 'right',
      flowBoxSpacing: 10,
      speedRadioButtonGroupOptions: {
        labelOptions: {
          font: new PhetFont( 11 ),
          maxWidth: 68
        }
      },
      playPauseStepButtonOptions: {
        stepForwardButtonOptions: {
          listener: () => humanModel.stepDays( 30 )
        }
      },
      tandem: tandem.createTandem( 'timeControlNode' )
    } );

    const bodyEnergyDetailsRow = new HBox( {
      children: [ readoutGrid, humanNode ],
      spacing: 22,
      align: 'center'
    } );
    const bodyEnergyContentNode = new Node( {
      children: [
        healthInfoButton,
        resetAllButton,
        bodyEnergyDetailsRow
      ]
    } );
    ManualConstraint.create( bodyEnergyContentNode, [ healthInfoButton, resetAllButton, bodyEnergyDetailsRow ],
      ( infoProxy: IntentionalAny, resetProxy: IntentionalAny, detailsProxy: IntentionalAny ) => {
        const contentWidth = Math.max( detailsProxy.width, infoProxy.width + 20 + resetProxy.width );
        infoProxy.left = 0;
        infoProxy.top = 0;
        resetProxy.right = contentWidth;
        resetProxy.top = 0;
        detailsProxy.centerX = contentWidth / 2;
        detailsProxy.top = Math.max( infoProxy.height, resetProxy.height ) + 4;
      } );

    const bodyStatusPanel = new Panel( bodyEnergyContentNode, combineOptions<PanelOptions>( {}, COMPACT_PANEL_OPTIONS, {
      yMargin: 6
    } ) );

    const foodActivityPanelHeight = this.layoutBounds.height - 2 * EatingExerciseAndEnergyConstants.SCREEN_VIEW_Y_MARGIN;
    const foodActivityPanel = new Panel( new VBox( {
      children: [
        createFoodActivityDockedContent( model, carouselValuesVisibleProperty, tandem.createTandem( 'foodActivityDock' ) )
      ],
      spacing: 10,
      align: 'center',
      justify: 'top'
    } ), combineOptions<PanelOptions>( {}, PANEL_OPTIONS, {
      minHeight: foodActivityPanelHeight
    } ) );
    foodActivityPanel.left = this.layoutBounds.left + EatingExerciseAndEnergyConstants.SCREEN_VIEW_X_MARGIN;
    foodActivityPanel.top = this.layoutBounds.top + EatingExerciseAndEnergyConstants.SCREEN_VIEW_Y_MARGIN;
    this.addChild( foodActivityPanel );

    const rightRegionLeft = foodActivityPanel.right + 14;
    const rightRegionRight = this.layoutBounds.right - EatingExerciseAndEnergyConstants.SCREEN_VIEW_X_MARGIN;
    const rightRegionWidth = rightRegionRight - rightRegionLeft;

    bodyStatusPanel.setScaleMagnitude( 0.65 );
    bodyStatusPanel.right = rightRegionRight;
    bodyStatusPanel.top = this.layoutBounds.top + EatingExerciseAndEnergyConstants.SCREEN_VIEW_Y_MARGIN;
    this.addChild( bodyStatusPanel );

    const bodySettingsAccordionBoxMaxWidth = Math.max( 120, bodyStatusPanel.left - rightRegionLeft - 12 );
    const bodySettingsAccordionBox = createBodySettingsAccordionBox( humanModel, tandem, bodySettingsAccordionBoxMaxWidth );
    bodySettingsAccordionBox.left = rightRegionLeft;
    bodySettingsAccordionBox.top = bodyStatusPanel.top;

    const starvationWarningVisibleProperty = new DerivedProperty(
      [ humanModel.isStarvingProperty, humanModel.isAliveProperty ],
      ( isStarving: IntentionalAny, isAlive: IntentionalAny ) => isStarving || !isAlive
    );

    const trendPanel = createTrendPanel(
      humanModel,
      DerivedProperty.not( starvationWarningVisibleProperty ),
      rightRegionWidth
    );
    trendPanel.left = rightRegionLeft;
    trendPanel.top = bodyStatusPanel.bottom + 8;
    this.addChild( trendPanel );

    const middleColumnWidth = bodyStatusPanel.left - rightRegionLeft - 12;
    timeControlNode.setScaleMagnitude( Math.min( 0.55, middleColumnWidth / timeControlNode.width ) );
    timeControlNode.left = trendPanel.left;
    timeControlNode.bottom = trendPanel.top - 10;
    this.addChild( timeControlNode );

    const starvationWarningPanel = createStarvationWarningPanel( humanModel, starvationWarningVisibleProperty );
    starvationWarningPanel.left = trendPanel.left;
    starvationWarningPanel.top = trendPanel.top;
    this.addChild( starvationWarningPanel );

    this.addChild( bodySettingsAccordionBox );

    this.pdomPlayAreaNode.pdomOrder = [
      foodActivityPanel,
      bodyStatusPanel,
      trendPanel,
      starvationWarningPanel
    ];
    this.pdomControlAreaNode.pdomOrder = [
      timeControlNode,
      bodySettingsAccordionBox,
      resetAllButton
    ];
  }

  /**
   * Resets the view.
   */
  public reset(): void {
    this.carouselValuesVisibleProperty.reset();
  }
}

/**
 * @param patternStringProperty * @param valueProperty * @param format */
const createPatternValueStringProperty = ( patternStringProperty: IntentionalAny, valueProperty: IntentionalAny, format: IntentionalAny ) => new PatternStringProperty( patternStringProperty, {
  value: valueProperty
}, {
  maps: {
    value: format
  }
} );

/**
 * @param simulationTimeDaysProperty */
const createElapsedTimeStringProperty = ( simulationTimeDaysProperty: IntentionalAny ) => {
  const daysStringProperty = createPatternValueStringProperty(
    EatingExerciseAndEnergyFluent.readout.daysPatternStringProperty,
    simulationTimeDaysProperty,
    ( value: IntentionalAny ) => roundSymmetric( value )
  );
  const monthsStringProperty = createPatternValueStringProperty(
    EatingExerciseAndEnergyFluent.readout.monthsPatternStringProperty,
    simulationTimeDaysProperty,
    ( value: IntentionalAny ) => toFixedNumber( value / 30, 1 )
  );
  const yearsStringProperty = createPatternValueStringProperty(
    EatingExerciseAndEnergyFluent.readout.elapsedYearsPatternStringProperty,
    simulationTimeDaysProperty,
    ( value: IntentionalAny ) => toFixedNumber( EatingExerciseAndEnergyUnits.daysToYears( value ), 1 )
  );

  return new DerivedProperty(
    [ simulationTimeDaysProperty, daysStringProperty, monthsStringProperty, yearsStringProperty ],
    ( simulationTimeDays: IntentionalAny, daysString: IntentionalAny, monthsString: IntentionalAny, yearsString: IntentionalAny ) => simulationTimeDays < 60 ? daysString :
                                                                    simulationTimeDays < 730 ? monthsString :
                                                                    yearsString
  );
};

/**
 * @param massKilogramsProperty * @param displayUnitsProperty */
const createMassStringProperty = ( massKilogramsProperty: IntentionalAny, displayUnitsProperty: IntentionalAny ) => {
  const metricMassStringProperty = createPatternValueStringProperty(
    EatingExerciseAndEnergyFluent.readout.kilogramsPatternStringProperty,
    massKilogramsProperty,
    ( value: IntentionalAny ) => toFixedNumber( value, 1 )
  );
  const englishMassStringProperty = createPatternValueStringProperty(
    EatingExerciseAndEnergyFluent.readout.poundsPatternStringProperty,
    massKilogramsProperty,
    ( value: IntentionalAny ) => roundSymmetric( EatingExerciseAndEnergyUnits.kilogramsToPounds( value ) )
  );

  return new DerivedProperty(
    [ displayUnitsProperty, metricMassStringProperty, englishMassStringProperty ],
    ( displayUnits: IntentionalAny, metricMassString: IntentionalAny, englishMassString: IntentionalAny ) => displayUnits === 'metric' ? metricMassString :
                                                           displayUnits === 'english' ? englishMassString :
                                                           ( () => { throw new Error( `Unrecognized displayUnits: ${displayUnits}` ); } )()
  );
};

/**
 * @param heightMetersProperty * @param displayUnitsProperty */
const createHeightStringProperty = ( heightMetersProperty: IntentionalAny, displayUnitsProperty: IntentionalAny ) => {
  const metricHeightStringProperty = createPatternValueStringProperty(
    EatingExerciseAndEnergyFluent.readout.centimetersPatternStringProperty,
    heightMetersProperty,
    ( value: IntentionalAny ) => roundSymmetric( value * 100 )
  );
  const totalInchesProperty = new DerivedProperty(
    [ heightMetersProperty ],
    ( heightMeters: IntentionalAny ) => roundSymmetric( EatingExerciseAndEnergyUnits.metersToFeet( heightMeters ) * 12 )
  );
  const feetProperty = new DerivedProperty( [ totalInchesProperty ], ( totalInches: IntentionalAny ) => Math.floor( totalInches / 12 ) );
  const inchesProperty = new DerivedProperty( [ totalInchesProperty ], ( totalInches: IntentionalAny ) => totalInches % 12 );
  const englishHeightStringProperty = new PatternStringProperty(
    EatingExerciseAndEnergyFluent.readout.feetInchesPatternStringProperty,
    {
      feet: feetProperty,
      inches: inchesProperty
    }
  );

  return new DerivedProperty(
    [ displayUnitsProperty, metricHeightStringProperty, englishHeightStringProperty ],
    ( displayUnits: IntentionalAny, metricHeightString: IntentionalAny, englishHeightString: IntentionalAny ) => displayUnits === 'metric' ? metricHeightString :
                                                             displayUnits === 'english' ? englishHeightString :
                                                             ( () => { throw new Error( `Unrecognized displayUnits: ${displayUnits}` ); } )()
  );
};

/**
 * @param labelStringProperty * @param valueStringProperty */
const createReadoutRow = ( labelStringProperty: IntentionalAny, valueStringProperty: IntentionalAny ) => {
  const labelText = new Text( labelStringProperty, {
    font: BODY_ENERGY_LABEL_FONT,
    maxWidth: 140
  } );
  const valueText = new Text( valueStringProperty, {
    font: BODY_ENERGY_VALUE_FONT,
    maxWidth: 140
  } );

  return [ labelText, valueText ];
};

/**
 * @param humanModel * @param tandem * @param maxWidth */
const createBodySettingsAccordionBox = ( humanModel: IntentionalAny, tandem: IntentionalAny, maxWidth: IntentionalAny ) => {
  const contentXMargin = 10;
  const titleXMargin = 8;
  const titleAndButtonAllowance = 48;
  const labelAlignGroup = new AlignGroup();
  const valueAlignGroup = new AlignGroup();
  const bodySettingsContent = new VBox( {
    children: [
      createGenderControl( humanModel, labelAlignGroup, tandem.createTandem( 'genderControl' ) ),
      createStepperControl(
        EatingExerciseAndEnergyFluent.readout.ageStringProperty,
        createPatternValueStringProperty(
          EatingExerciseAndEnergyFluent.readout.yearsPatternStringProperty,
          humanModel.ageYearsProperty,
          ( value: IntentionalAny ) => roundSymmetric( value )
        ),
        humanModel.ageYearsProperty,
        1,
        labelAlignGroup,
        valueAlignGroup,
        tandem.createTandem( 'ageControl' )
      ),
      createStepperControl(
        EatingExerciseAndEnergyFluent.readout.heightStringProperty,
        createHeightStringProperty( humanModel.heightMetersProperty, EatingExerciseAndEnergyPreferences.displayUnitsProperty ),
        humanModel.heightMetersProperty,
        0.01,
        labelAlignGroup,
        valueAlignGroup,
        tandem.createTandem( 'heightControl' )
      ),
      createStepperControl(
        EatingExerciseAndEnergyFluent.readout.massStringProperty,
        createMassStringProperty( humanModel.massKilogramsProperty, EatingExerciseAndEnergyPreferences.displayUnitsProperty ),
        humanModel.massKilogramsProperty,
        1,
        labelAlignGroup,
        valueAlignGroup,
        tandem.createTandem( 'massControl' )
      ),
      createStepperControl(
        EatingExerciseAndEnergyFluent.readout.bodyFatStringProperty,
        createPatternValueStringProperty(
          EatingExerciseAndEnergyFluent.readout.percentPatternStringProperty,
          humanModel.fatMassPercentProperty,
          ( value: IntentionalAny ) => roundSymmetric( value )
        ),
        humanModel.fatMassPercentProperty,
        1,
        labelAlignGroup,
        valueAlignGroup,
        tandem.createTandem( 'bodyFatControl' )
      ),
      new TextPushButton( EatingExerciseAndEnergyFluent.bodyControls.autoBodyFatStringProperty, {
        listener: () => humanModel.applyEstimatedBodyFatPercent(),
        textNodeOptions: {
          font: new PhetFont( 12 ),
          maxWidth: Math.max( 70, maxWidth - 2 * contentXMargin )
        },
        tandem: tandem.createTandem( 'autoBodyFatButton' )
      } ),
      createLifestyleControl( humanModel, tandem.createTandem( 'lifestyleControl' ) )
    ],
    spacing: 8,
    align: 'left'
  } );
  const contentMaxWidth = Math.max( 0, maxWidth - 2 * contentXMargin );
  if ( bodySettingsContent.width > contentMaxWidth ) {
    bodySettingsContent.setScaleMagnitude( contentMaxWidth / bodySettingsContent.width );
  }

  const bodySettingsAccordionBox = new AccordionBox( bodySettingsContent, {
    titleNode: new Text( EatingExerciseAndEnergyFluent.bodyControls.titleStringProperty, {
      font: CONTROL_TITLE_FONT,
      maxWidth: Math.max( 60, maxWidth - titleAndButtonAllowance )
    } ),
    expandedDefaultValue: false,
    fill: 'white',
    stroke: '#b8b8b8',
    cornerRadius: 6,
    minWidth: maxWidth,
    contentXMargin: contentXMargin,
    contentYMargin: 8,
    titleXMargin: titleXMargin,
    titleYMargin: 4,
    useExpandedBoundsWhenCollapsed: false,
    useContentWidthWhenCollapsed: false,
    buttonAlign: 'right',
    tandem: tandem.createTandem( 'bodySettingsAccordionBox' )
  } );
  bodySettingsAccordionBox.localPreferredWidth = maxWidth;
  return bodySettingsAccordionBox;
};

/**
 * @param humanModel */
const createHumanBodyNode = ( humanModel: IntentionalAny ) => {
  const stableBoundsNode = new Rectangle( -70, -98, 140, 270, {
    fill: 'transparent'
  } );

  const avatarParts = createAvatarPartNodes();
  const rootNode = new Node( {
    children: [
      stableBoundsNode,
      avatarParts.avatarNode
    ]
  } );

  Multilink.multilink(
    [
      humanModel.genderProperty,
      humanModel.heightMetersProperty,
      humanModel.massKilogramsProperty,
      humanModel.fatMassPercentProperty,
      humanModel.heartHealthProperty,
      humanModel.isAliveProperty,
      humanModel.isStarvingProperty
    ],
    ( gender: IntentionalAny, heightMeters: IntentionalAny, massKilograms: IntentionalAny, fatMassPercent: IntentionalAny, heartHealth: IntentionalAny, isAlive: IntentionalAny, isStarving: IntentionalAny ) => {
      updateAvatarGeometry(
        avatarParts,
        gender,
        heightMeters,
        massKilograms,
        fatMassPercent,
        heartHealth,
        isAlive,
        isStarving
      );
    }
  );

  return rootNode;
};

/**
 */
const createAvatarPartNodes = () => {
  const skinOptions = {
    fill: '#f7c59f',
    stroke: '#75533e',
    lineWidth: 1
  };
  const suitOptions = {
    fill: '#62aeca',
    stroke: '#285b6b',
    lineWidth: 1.5,
    lineJoin: 'round' as const
  };

  const leftArmNode = new Path( new Shape(), suitOptions );
  const rightArmNode = new Path( new Shape(), suitOptions );
  const leftHandNode = new Circle( 7, skinOptions );
  const rightHandNode = new Circle( 7, skinOptions );
  const leftLegNode = new Path( new Shape(), combineOptions<PathOptions>( {}, suitOptions, {
    fill: '#3f7890'
  } ) );
  const rightLegNode = new Path( new Shape(), combineOptions<PathOptions>( {}, suitOptions, {
    fill: '#3f7890'
  } ) );
  const leftFootNode = new Path( new Shape(), {
    fill: '#2f6274',
    stroke: '#285b6b',
    lineWidth: 1,
    lineJoin: 'round' as const
  } );
  const rightFootNode = new Path( new Shape(), {
    fill: '#2f6274',
    stroke: '#285b6b',
    lineWidth: 1,
    lineJoin: 'round' as const
  } );
  const torsoNode = new Path( new Shape(), suitOptions );
  const contourNode = new Path( new Shape(), {
    stroke: '#1f5465',
    lineWidth: 0.9,
    lineCap: 'round',
    opacity: 0.24
  } );
  const neckNode = new Path( new Shape(), skinOptions );
  const headNode = new Circle( 26, skinOptions );
  const heartGlowNode = new Circle( 16, {
    fill: '#83c772',
    opacity: 0
  } );
  const heartRingBaseNode = new Circle( 13, {
    fill: 'transparent',
    stroke: '#e0e3d7',
    lineWidth: 3
  } );
  const heartRingProgressNode = new Path( new Shape(), {
    stroke: '#4fa765',
    lineWidth: 3,
    lineCap: 'round'
  } );
  const heartNode = new Path( new Shape(), {
    fill: '#d84b63',
    stroke: '#8a2030',
    lineWidth: 1
  } );
  const pulseRaysNode = new Path( new Shape(), {
    stroke: '#6fb96a',
    lineWidth: 1.4,
    lineCap: 'round',
    opacity: 0
  } );
  const bodyFatGaugeFillNode = new Rectangle( 0, 0, 0, 5, 2.5, 2.5, {
    fill: '#f0b84a'
  } );
  const bodyFatGaugeNode = new Node( {
    children: [
      new Rectangle( 0, 0, 54, 5, 2.5, 2.5, {
        fill: '#f6ead0',
        stroke: '#bc7f25',
        lineWidth: 0.5
      } ),
      bodyFatGaugeFillNode
    ]
  } );
  const bodyFatIndicatorNode = new VBox( {
    children: [
      new Text( EatingExerciseAndEnergyFluent.readout.bodyFatStringProperty, {
        font: new PhetFont( 10 ),
        fill: '#5b5347',
        maxWidth: 58
      } ),
      bodyFatGaugeNode
    ],
    spacing: 2,
    align: 'left'
  } );
  bodyFatIndicatorNode.left = -67;
  bodyFatIndicatorNode.top = -96;

  const avatarNode = new Node( {
    children: [
      leftLegNode,
      rightLegNode,
      leftFootNode,
      rightFootNode,
      leftArmNode,
      rightArmNode,
      leftHandNode,
      rightHandNode,
      neckNode,
      torsoNode,
      contourNode,
      heartGlowNode,
      heartRingBaseNode,
      heartRingProgressNode,
      heartNode,
      pulseRaysNode,
      headNode,
      bodyFatIndicatorNode
    ]
  } );

  return {
    avatarNode: avatarNode,
    leftArmNode: leftArmNode,
    rightArmNode: rightArmNode,
    leftHandNode: leftHandNode,
    rightHandNode: rightHandNode,
    leftLegNode: leftLegNode,
    rightLegNode: rightLegNode,
    leftFootNode: leftFootNode,
    rightFootNode: rightFootNode,
    torsoNode: torsoNode,
    contourNode: contourNode,
    neckNode: neckNode,
    headNode: headNode,
    heartGlowNode: heartGlowNode,
    heartRingBaseNode: heartRingBaseNode,
    heartRingProgressNode: heartRingProgressNode,
    heartNode: heartNode,
    pulseRaysNode: pulseRaysNode,
    bodyFatGaugeFillNode: bodyFatGaugeFillNode
  };
};

/**
 * @param avatarParts * @param gender * @param heightMeters * @param massKilograms * @param fatMassPercent * @param heartHealth * @param isAlive * @param isStarving */
const updateAvatarGeometry = ( avatarParts: IntentionalAny, gender: IntentionalAny, heightMeters: IntentionalAny, massKilograms: IntentionalAny, fatMassPercent: IntentionalAny, heartHealth: IntentionalAny, isAlive: IntentionalAny, isStarving: IntentionalAny ) => {
  const heightScale = clamp( heightMeters / 1.65, 0.84, 1.12 );
  const bmi = massKilograms / ( heightMeters * heightMeters );
  const fatAmount = clamp( ( fatMassPercent - 10 ) / 40, 0, 1 );
  const massAmount = clamp( ( bmi - 18 ) / 22, 0, 1 );
  const physiology = getPhysiologyVisualData( gender );
  const baseWidth = clamp( 62 + ( bmi - 22 ) * 4.2 + ( fatMassPercent - 24 ) * 0.55, 52, 112 );
  const shoulderWidth = clamp( baseWidth + physiology.shoulderOffset - fatAmount * 2, 50, 118 );
  const waistWidth = clamp( baseWidth * ( 0.72 + 0.08 * massAmount ) + physiology.waistOffset, 42, 102 );
  const hipWidth = clamp( baseWidth * ( 0.88 + 0.09 * fatAmount ) + physiology.hipOffset, 48, 120 );
  const torsoHeight = 108 * heightScale;
  const torsoTop = -33 * heightScale;
  const hipY = torsoTop + torsoHeight;
  const headRadius = clamp( 24 * heightScale, 21, 29 );
  const neckWidth = clamp( shoulderWidth * 0.24, 13, 21 );
  const neckHeight = 13 * heightScale;
  const limbThickness = clamp( 12 + ( bmi - 22 ) * 0.5 + massAmount * 3, 11, 21 );
  const armReach = clamp( baseWidth / 2 + 22, 48, 61 );
  const armTopY = torsoTop + torsoHeight * 0.18;
  const handY = torsoTop + torsoHeight * 0.56;
  const legTopWidth = clamp( hipWidth * 0.31, 17, 34 );
  const legBottomWidth = clamp( legTopWidth * ( 0.76 + massAmount * 0.18 ), 14, 30 );
  const legGap = clamp( 9 + massAmount * 2, 9, 13 );
  const legHeight = 72 * heightScale;
  const legBottomY = hipY + legHeight;
  const leftLegCenterX = -legGap / 2 - legTopWidth / 2;
  const rightLegCenterX = legGap / 2 + legTopWidth / 2;

  avatarParts.avatarNode.opacity = !isAlive ? 0.42 :
                                   isStarving ? 0.68 :
                                   1;

  avatarParts.headNode.setRadius( headRadius );
  avatarParts.headNode.centerX = 0;
  avatarParts.headNode.centerY = torsoTop - headRadius + 5;
  avatarParts.neckNode.shape = createRoundedBodyShape(
    -neckWidth / 2,
    torsoTop - neckHeight + 3,
    neckWidth / 2,
    torsoTop + 9,
    4
  );
  avatarParts.torsoNode.shape = createTorsoShape( shoulderWidth, waistWidth, hipWidth, torsoTop, torsoHeight, physiology.softness );
  avatarParts.leftArmNode.shape = createLimbShape(
    -shoulderWidth / 2 + 5,
    armTopY,
    -armReach,
    handY,
    limbThickness
  );
  avatarParts.rightArmNode.shape = createLimbShape(
    shoulderWidth / 2 - 5,
    armTopY,
    armReach,
    handY,
    limbThickness
  );
  avatarParts.leftHandNode.setRadius( clamp( limbThickness * 0.43, 5.5, 8 ) );
  avatarParts.leftHandNode.centerX = -armReach;
  avatarParts.leftHandNode.centerY = handY + 1;
  avatarParts.rightHandNode.setRadius( clamp( limbThickness * 0.43, 5.5, 8 ) );
  avatarParts.rightHandNode.centerX = armReach;
  avatarParts.rightHandNode.centerY = handY + 1;
  avatarParts.leftLegNode.shape = createLegShape( leftLegCenterX, hipY - 2, legBottomY, legTopWidth, legBottomWidth );
  avatarParts.rightLegNode.shape = createLegShape( rightLegCenterX, hipY - 2, legBottomY, legTopWidth, legBottomWidth );
  avatarParts.leftFootNode.shape = createFootShape( leftLegCenterX, legBottomY - 3, legBottomWidth + 15, 9, -1 );
  avatarParts.rightFootNode.shape = createFootShape( rightLegCenterX, legBottomY - 3, legBottomWidth + 15, 9, 1 );
  avatarParts.contourNode.shape = createContourShape(
    torsoTop,
    torsoHeight,
    shoulderWidth,
    waistWidth,
    hipWidth,
    armReach,
    handY,
    leftLegCenterX,
    rightLegCenterX,
    legBottomY
  );

  const heartCenterX = shoulderWidth * 0.14;
  const heartCenterY = torsoTop + torsoHeight * 0.31;
  const heartSize = 7.2 + 2.2 * heartHealth;

  updateEnergyReserveVisual( avatarParts, fatMassPercent );
  updateHeartHealthVisual( avatarParts, heartHealth, heartCenterX, heartCenterY, heartSize );
};

/**
 * @param gender */
const getPhysiologyVisualData = ( gender: IntentionalAny ) => {
  return gender === 'female' ? {
           shoulderOffset: -4,
           waistOffset: -1,
           hipOffset: 6,
           softness: 7
         } :
         gender === 'male' ? {
           shoulderOffset: 5,
           waistOffset: 2,
           hipOffset: -3,
           softness: 3
         } :
         ( () => { throw new Error( `Unrecognized gender: ${gender}` ); } )();
};

/**
 * @param avatarParts * @param fatMassPercent */
const updateEnergyReserveVisual = ( avatarParts: IntentionalAny, fatMassPercent: IntentionalAny ) => {
  const fillWidth = clamp( fatMassPercent / 100, 0, 1 ) * 54;
  avatarParts.bodyFatGaugeFillNode.setRect( 0, 0, fillWidth, 5, 2.5, 2.5 );
};

/**
 * @param avatarParts * @param heartHealth * @param centerX * @param centerY * @param heartSize */
const updateHeartHealthVisual = ( avatarParts: IntentionalAny, heartHealth: IntentionalAny, centerX: IntentionalAny, centerY: IntentionalAny, heartSize: IntentionalAny ) => {
  const ringRadius = heartSize + 6;
  const ringColor = heartHealth < 0.4 ? '#c95f4a' :
                    heartHealth < 0.72 ? '#d7aa38' :
                    '#4fa765';
  const ringStartAngle = -Math.PI / 2;
  const ringEndAngle = ringStartAngle + Math.max( heartHealth, 0.001 ) * Math.PI * 2;

  avatarParts.heartNode.shape = createHeartShape( centerX, centerY, heartSize );
  avatarParts.heartNode.opacity = 0.58 + 0.38 * heartHealth;
  avatarParts.heartRingBaseNode.setRadius( ringRadius );
  avatarParts.heartRingBaseNode.centerX = centerX;
  avatarParts.heartRingBaseNode.centerY = centerY;
  avatarParts.heartRingProgressNode.stroke = ringColor;
  avatarParts.heartRingProgressNode.shape = new Shape().arc( centerX, centerY, ringRadius, ringStartAngle, ringEndAngle, false );
  avatarParts.heartGlowNode.setRadius( ringRadius + 4 );
  avatarParts.heartGlowNode.centerX = centerX;
  avatarParts.heartGlowNode.centerY = centerY;
  avatarParts.heartGlowNode.opacity = clamp( ( heartHealth - 0.72 ) / 0.28, 0, 1 ) * 0.22;
  avatarParts.pulseRaysNode.shape = createPulseRaysShape( centerX, centerY, ringRadius + 4, ringRadius + 10 );
  avatarParts.pulseRaysNode.opacity = clamp( ( heartHealth - 0.76 ) / 0.24, 0, 1 ) * 0.85;
};

/**
 * @param left * @param top * @param right * @param bottom * @param radius */
const createRoundedBodyShape = ( left: IntentionalAny, top: IntentionalAny, right: IntentionalAny, bottom: IntentionalAny, radius: IntentionalAny ) => {
  return new Shape()
    .moveTo( left + radius, top )
    .lineTo( right - radius, top )
    .quadraticCurveTo( right, top, right, top + radius )
    .lineTo( right, bottom - radius )
    .quadraticCurveTo( right, bottom, right - radius, bottom )
    .lineTo( left + radius, bottom )
    .quadraticCurveTo( left, bottom, left, bottom - radius )
    .lineTo( left, top + radius )
    .quadraticCurveTo( left, top, left + radius, top )
    .close();
};

/**
 * @param shoulderWidth * @param waistWidth * @param hipWidth * @param torsoTop * @param torsoHeight * @param softness */
const createTorsoShape = ( shoulderWidth: IntentionalAny, waistWidth: IntentionalAny, hipWidth: IntentionalAny, torsoTop: IntentionalAny, torsoHeight: IntentionalAny, softness: IntentionalAny ) => {
  const y0 = torsoTop;
  const y1 = torsoTop + torsoHeight * 0.56;
  const y2 = torsoTop + torsoHeight;

  return new Shape()
    .moveTo( -shoulderWidth / 2 + 7, y0 )
    .cubicCurveTo( -shoulderWidth / 2 - softness, y0 + 24, -waistWidth / 2 - softness * 0.4, y1 - 12, -waistWidth / 2, y1 )
    .cubicCurveTo( -waistWidth / 2, y1 + 20, -hipWidth / 2, y2 - 18, -hipWidth / 2 + 4, y2 - 3 )
    .quadraticCurveTo( 0, y2 + 7, hipWidth / 2 - 4, y2 - 3 )
    .cubicCurveTo( hipWidth / 2, y2 - 18, waistWidth / 2, y1 + 20, waistWidth / 2, y1 )
    .cubicCurveTo( waistWidth / 2 + softness * 0.4, y1 - 12, shoulderWidth / 2 + softness, y0 + 24, shoulderWidth / 2 - 7, y0 )
    .quadraticCurveTo( 0, y0 - 6, -shoulderWidth / 2 + 7, y0 )
    .close();
};

/**
 * @param x1 * @param y1 * @param x2 * @param y2 * @param width */
const createLimbShape = ( x1: IntentionalAny, y1: IntentionalAny, x2: IntentionalAny, y2: IntentionalAny, width: IntentionalAny ) => {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const length = Math.sqrt( dx * dx + dy * dy );
  const normalX = -dy / length * width / 2;
  const normalY = dx / length * width / 2;
  const tangentX = dx / length * width * 0.45;
  const tangentY = dy / length * width * 0.45;

  return new Shape()
    .moveTo( x1 + normalX, y1 + normalY )
    .lineTo( x2 + normalX, y2 + normalY )
    .cubicCurveTo( x2 + normalX + tangentX, y2 + normalY + tangentY, x2 - normalX + tangentX, y2 - normalY + tangentY, x2 - normalX, y2 - normalY )
    .lineTo( x1 - normalX, y1 - normalY )
    .cubicCurveTo( x1 - normalX - tangentX, y1 - normalY - tangentY, x1 + normalX - tangentX, y1 + normalY - tangentY, x1 + normalX, y1 + normalY )
    .close();
};

/**
 * @param centerX * @param top * @param bottom * @param topWidth * @param bottomWidth */
const createLegShape = ( centerX: IntentionalAny, top: IntentionalAny, bottom: IntentionalAny, topWidth: IntentionalAny, bottomWidth: IntentionalAny ) => {
  return new Shape()
    .moveTo( centerX - topWidth / 2, top )
    .cubicCurveTo( centerX - topWidth / 2 - 2, top + 22, centerX - bottomWidth / 2 - 1, bottom - 20, centerX - bottomWidth / 2, bottom )
    .quadraticCurveTo( centerX, bottom + 3, centerX + bottomWidth / 2, bottom )
    .cubicCurveTo( centerX + bottomWidth / 2 + 1, bottom - 20, centerX + topWidth / 2 + 2, top + 22, centerX + topWidth / 2, top )
    .quadraticCurveTo( centerX, top - 5, centerX - topWidth / 2, top )
    .close();
};

/**
 * @param centerX * @param y * @param width * @param height * @param direction */
const createFootShape = ( centerX: IntentionalAny, y: IntentionalAny, width: IntentionalAny, height: IntentionalAny, direction: IntentionalAny ) => {
  const toeX = centerX + direction * width * 0.38;
  const heelX = centerX - direction * width * 0.46;

  return new Shape()
    .moveTo( heelX, y )
    .cubicCurveTo( centerX - direction * width * 0.2, y - 3, toeX + direction * 5, y - 1, toeX + direction * 6, y + height * 0.42 )
    .quadraticCurveTo( toeX, y + height, centerX - direction * width * 0.05, y + height )
    .lineTo( heelX, y + height * 0.86 )
    .quadraticCurveTo( heelX - direction * 3, y + height * 0.4, heelX, y )
    .close();
};

/**
 * @param torsoTop * @param torsoHeight * @param shoulderWidth * @param waistWidth * @param hipWidth * @param armReach * @param handY * @param leftLegCenterX * @param rightLegCenterX * @param legBottomY */
const createContourShape = ( torsoTop: IntentionalAny, torsoHeight: IntentionalAny, shoulderWidth: IntentionalAny, waistWidth: IntentionalAny, hipWidth: IntentionalAny, armReach: IntentionalAny, handY: IntentionalAny, leftLegCenterX: IntentionalAny, rightLegCenterX: IntentionalAny, legBottomY: IntentionalAny ) => {
  const shape = new Shape()
    .moveTo( 0, torsoTop + 9 )
    .cubicCurveTo( 0.8, torsoTop + torsoHeight * 0.34, -1.2, torsoTop + torsoHeight * 0.62, 0, torsoTop + torsoHeight - 10 )
    .moveTo( -waistWidth * 0.28, torsoTop + torsoHeight * 0.54 )
    .quadraticCurveTo( -hipWidth * 0.18, torsoTop + torsoHeight * 0.70, -hipWidth * 0.26, torsoTop + torsoHeight * 0.84 )
    .moveTo( waistWidth * 0.28, torsoTop + torsoHeight * 0.54 )
    .quadraticCurveTo( hipWidth * 0.18, torsoTop + torsoHeight * 0.70, hipWidth * 0.26, torsoTop + torsoHeight * 0.84 )
    .moveTo( -shoulderWidth * 0.34, torsoTop + torsoHeight * 0.20 )
    .quadraticCurveTo( -armReach * 0.78, torsoTop + torsoHeight * 0.34, -armReach * 0.92, handY - 5 )
    .moveTo( shoulderWidth * 0.34, torsoTop + torsoHeight * 0.20 )
    .quadraticCurveTo( armReach * 0.78, torsoTop + torsoHeight * 0.34, armReach * 0.92, handY - 5 );

  shape.moveTo( leftLegCenterX, torsoTop + torsoHeight + 7 )
    .lineTo( leftLegCenterX, legBottomY - 9 )
    .moveTo( rightLegCenterX, torsoTop + torsoHeight + 7 )
    .lineTo( rightLegCenterX, legBottomY - 9 );

  return shape;
};

/**
 * @param centerX * @param centerY * @param size */
const createHeartShape = ( centerX: IntentionalAny, centerY: IntentionalAny, size: IntentionalAny ) => {
  return new Shape()
    .moveTo( centerX, centerY + size * 0.58 )
    .cubicCurveTo( centerX - size * 1.05, centerY - size * 0.05, centerX - size * 0.58, centerY - size * 0.9, centerX, centerY - size * 0.46 )
    .cubicCurveTo( centerX + size * 0.58, centerY - size * 0.9, centerX + size * 1.05, centerY - size * 0.05, centerX, centerY + size * 0.58 )
    .close();
};

/**
 * @param centerX * @param centerY * @param innerRadius * @param outerRadius */
const createPulseRaysShape = ( centerX: IntentionalAny, centerY: IntentionalAny, innerRadius: IntentionalAny, outerRadius: IntentionalAny ) => {
  const shape = new Shape();
  [ -0.95, -0.55, -0.15, 0.25, 0.65 ].forEach( ( angleOffset: IntentionalAny ) => {
    const angle = -Math.PI / 2 + angleOffset;
    shape.moveTo( centerX + innerRadius * Math.cos( angle ), centerY + innerRadius * Math.sin( angle ) )
      .lineTo( centerX + outerRadius * Math.cos( angle ), centerY + outerRadius * Math.sin( angle ) );
  } );

  return shape;
};

/**
 * @param labelStringProperty * @param valueStringProperty * @param valueProperty * @param delta * @param labelAlignGroup * @param valueAlignGroup * @param tandem */
const createStepperControl = ( labelStringProperty: IntentionalAny, valueStringProperty: IntentionalAny, valueProperty: IntentionalAny, delta: IntentionalAny, labelAlignGroup: IntentionalAny, valueAlignGroup: IntentionalAny, tandem: IntentionalAny ) => {
  const labelText = new Text( labelStringProperty, {
    font: LABEL_FONT,
    maxWidth: 80
  } );
  const valueText = new Text( valueStringProperty, {
    font: LABEL_FONT,
    maxWidth: 90
  } );

  const step = ( direction: IntentionalAny ) => {
    valueProperty.value = clamp(
      valueProperty.value + direction * delta,
      valueProperty.range.min,
      valueProperty.range.max
    );
  };

  const decrementButton = new TextPushButton( '-', {
    listener: () => step( -1 ),
    accessibleName: EatingExerciseAndEnergyFluent.a11y.stepperControls.decrease.createProperty( {
      label: labelStringProperty
    } ),
    textNodeOptions: {
      font: BUTTON_FONT,
      maxWidth: 20
    },
    tandem: tandem.createTandem( 'decrementButton' )
  } );
  const incrementButton = new TextPushButton( '+', {
    listener: () => step( 1 ),
    accessibleName: EatingExerciseAndEnergyFluent.a11y.stepperControls.increase.createProperty( {
      label: labelStringProperty
    } ),
    textNodeOptions: {
      font: BUTTON_FONT,
      maxWidth: 20
    },
    tandem: tandem.createTandem( 'incrementButton' )
  } );

  return new HBox( {
    children: [
      labelAlignGroup.createBox( labelText, {
        xAlign: 'left',
        yAlign: 'center'
      } ),
      decrementButton,
      valueAlignGroup.createBox( valueText, {
        xAlign: 'center',
        yAlign: 'center'
      } ),
      incrementButton
    ],
    spacing: 6,
    align: 'center'
  } );
};

/**
 * @param humanModel * @param labelAlignGroup * @param tandem */
const createGenderControl = ( humanModel: IntentionalAny, labelAlignGroup: IntentionalAny, tandem: IntentionalAny ) => {
  const createButton = ( labelStringProperty: IntentionalAny, gender: IntentionalAny, tandemName: IntentionalAny ) => new TextPushButton( labelStringProperty, {
    listener: () => {
      const genderData = HumanModel.GENDER_DATA[ gender ];
      humanModel.genderProperty.value = gender;
      humanModel.heightMetersProperty.value = genderData.defaultHeightMeters;
      humanModel.massKilogramsProperty.value = genderData.defaultMassKilograms;
      humanModel.fatMassPercentProperty.value = genderData.defaultFatMassPercent;
    },
    baseColor: new DerivedProperty(
      [ humanModel.genderProperty ],
      ( currentGender: IntentionalAny ) => currentGender === gender ? '#bfe4ff' : '#eeeeee'
    ),
    textNodeOptions: {
      font: new PhetFont( 12 ),
      maxWidth: 58
    },
    tandem: tandem.createTandem( tandemName )
  } );

  return new HBox( {
    children: [
      labelAlignGroup.createBox( new Text( EatingExerciseAndEnergyFluent.bodyControls.genderStringProperty, {
        font: LABEL_FONT,
        maxWidth: 76
      } ), {
        xAlign: 'left',
        yAlign: 'center'
      } ),
      createButton( EatingExerciseAndEnergyFluent.bodyControls.femaleStringProperty, 'female', 'femaleButton' ),
      createButton( EatingExerciseAndEnergyFluent.bodyControls.maleStringProperty, 'male', 'maleButton' )
    ],
    spacing: 5,
    align: 'center'
  } );
};

/**
 * @param humanModel * @param tandem */
const createLifestyleControl = ( humanModel: IntentionalAny, tandem: IntentionalAny ) => {
  const createButton = ( labelStringProperty: IntentionalAny, activityLevel: IntentionalAny, tandemName: IntentionalAny ) => new TextPushButton( labelStringProperty, {
    listener: () => {
      humanModel.activityLevelProperty.value = activityLevel;
    },
    baseColor: new DerivedProperty(
      [ humanModel.activityLevelProperty ],
      ( currentActivityLevel: IntentionalAny ) => currentActivityLevel === activityLevel ? '#bfe4ff' : '#eeeeee'
    ),
    textNodeOptions: {
      font: new PhetFont( 12 ),
      maxWidth: 58
    },
    tandem: tandem.createTandem( tandemName )
  } );

  return new VBox( {
    children: [
      new Text( EatingExerciseAndEnergyFluent.bodyControls.lifestyleStringProperty, {
        font: LABEL_FONT,
        maxWidth: 180
      } ),
      new HBox( {
        children: [
          createButton( EatingExerciseAndEnergyFluent.bodyControls.sedentaryStringProperty, 'sedentary', 'sedentaryButton' ),
          createButton( EatingExerciseAndEnergyFluent.bodyControls.moderateStringProperty, 'moderate', 'moderateButton' ),
          createButton( EatingExerciseAndEnergyFluent.bodyControls.activeStringProperty, 'active', 'activeButton' )
        ],
        spacing: 5,
        align: 'center'
      } )
    ],
    spacing: 4,
    align: 'left'
  } );
};

/**
 * @param humanModel * @param visibleProperty */
const createTrendChartNode = ( chartTransform: IntentionalAny, chartRectangle: IntentionalAny, plots: IntentionalAny, xSpacing: IntentionalAny, ySpacing: IntentionalAny ) => new Node( {
  children: [
    chartRectangle,
    new Node( {
      clipArea: chartRectangle.getShape(),
      children: [
        new GridLineSet( chartTransform, Orientation.HORIZONTAL, xSpacing, { stroke: '#eeeeee' } ),
        new GridLineSet( chartTransform, Orientation.VERTICAL, ySpacing, { stroke: '#dddddd' } ),
        ...plots
      ]
    } ),
    new TickMarkSet( chartTransform, Orientation.HORIZONTAL, xSpacing, { edge: 'min', extent: 4 } ),
    new TickLabelSet( chartTransform, Orientation.HORIZONTAL, xSpacing, {
      edge: 'min',
      extent: 4,
      createLabel: ( value: IntentionalAny ) => createTimeAxisTickLabel( value )
    } ),
    new TickMarkSet( chartTransform, Orientation.VERTICAL, ySpacing, { edge: 'min' } ),
    new TickLabelSet( chartTransform, Orientation.VERTICAL, ySpacing, {
      edge: 'min',
      createLabel: ( value: IntentionalAny ) => new Text( value, {
        font: GRAPH_LABEL_FONT,
        maxWidth: 30
      } )
    } )
  ]
} );

const createTimeAxisTickLabel = ( days: IntentionalAny ) => new Text( new PatternStringProperty(
  EatingExerciseAndEnergyFluent.readout.monthsPatternStringProperty,
  { value: new NumberProperty( roundSymmetric( days / 30 ) ) }
), {
  font: GRAPH_LABEL_FONT,
  maxWidth: 34
} );

const createLegendItem = ( color: IntentionalAny, labelStringProperty: IntentionalAny, maxWidth: IntentionalAny = 70 ) => {
  const swatch = new Rectangle( 0, 0, 18, 3, {
    fill: color
  } );
  const labelText = new Text( labelStringProperty, {
    font: new PhetFont( 11 ),
    maxWidth: maxWidth
  } );

  return new HBox( {
    children: [
      swatch,
      labelText
    ],
    spacing: 4,
    align: 'center',
    justify: 'left'
  } );
};

const createBreakdownLegendItem = ( color: IntentionalAny, labelStringProperty: IntentionalAny, entryProperty: IntentionalAny, entries: IntentionalAny, valuesVisibleProperty: IntentionalAny ) => {
  const percentProperty = new DerivedProperty(
    entries.map( ( entry: IntentionalAny ) => entry.property ),
    ( ...values: IntentionalAny[] ) => {
      const total = values.reduce( ( sum: IntentionalAny, value: IntentionalAny ) => sum + Math.max( value, 0 ), 0 );
      const value = Math.max( entryProperty.value, 0 );
      return total > 0 ? value / total * 100 : 0;
    }
  );
  const valueLabelStringProperty = new PatternStringProperty( EatingExerciseAndEnergyFluent.intakeControls.percentLegendPatternStringProperty, {
    label: labelStringProperty,
    value: percentProperty
  }, {
    maps: {
      label: ( label: string ) => label,
      value: ( value: number ) => value
    },
    decimalPlaces: {
      label: null,
      value: 1
    }
  } );
  const labelWithOptionalValueStringProperty = new DerivedProperty(
    [ valuesVisibleProperty, labelStringProperty, valueLabelStringProperty ],
    ( valuesVisible: IntentionalAny, label: IntentionalAny, valueLabel: IntentionalAny ) => valuesVisible ? valueLabel : label
  );

  return createLegendItem( color, labelWithOptionalValueStringProperty, 90 );
};

const createGraphLegendItem = ( color: IntentionalAny, labelStringProperty: IntentionalAny ) => new HBox( {
  children: [
    new Rectangle( 0, 0, 18, 3, {
      fill: color
    } ),
    new Text( labelStringProperty, {
      font: GRAPH_LABEL_FONT,
      maxWidth: 70
    } )
  ],
  spacing: 4,
  align: 'center'
} );

const getHistoryXRange = ( humanModel: IntentionalAny ) => {
  const lastSample = humanModel.weightHistorySamples[ humanModel.weightHistorySamples.length - 1 ];
  const maxTimeDays = Math.max( 365, lastSample.timeDays );
  return new Range( maxTimeDays - 365, maxTimeDays );
};

/**
 * @param humanModel * @param visibleProperty * @param panelWidth */
const createTrendPanel = ( humanModel: IntentionalAny, visibleProperty: IntentionalAny, panelWidth: IntentionalAny ) => {
  const chartWidth = Math.max( 320, panelWidth - 58 );
  const chartHeight = 77;
  const chartTransform = new ChartTransform( {
    viewWidth: chartWidth,
    viewHeight: chartHeight,
    modelXRange: new Range( 0, 365 ),
    modelYRange: new Range( 0, 300 )
  } );
  const chartRectangle = new ChartRectangle( chartTransform, {
    fill: 'white',
    stroke: '#777',
    cornerXRadius: 4,
    cornerYRadius: 4
  } );
  const linePlot = new LinePlot( chartTransform, [], {
    stroke: '#2a7fa2',
    lineWidth: 3
  } );

  const updatePlot = () => {
    chartTransform.setModelXRange( getHistoryXRange( humanModel ) );
    linePlot.setDataSet( humanModel.weightHistorySamples.map( ( sample: IntentionalAny ) =>
      new Vector2( sample.timeDays, EatingExerciseAndEnergyUnits.kilogramsToPounds( sample.massKilograms ) )
    ) );
  };
  humanModel.weightHistoryChangedEmitter.addListener( updatePlot );
  updatePlot();

  const calorieChartTransform = new ChartTransform( {
    viewWidth: chartWidth,
    viewHeight: chartHeight,
    modelXRange: new Range( 0, 365 ),
    modelYRange: new Range( 0, 4000 )
  } );
  const calorieChartRectangle = new ChartRectangle( calorieChartTransform, {
    fill: 'white',
    stroke: '#777',
    cornerXRadius: 4,
    cornerYRadius: 4
  } );
  const intakeLinePlot = new LinePlot( calorieChartTransform, [], {
    stroke: '#5b8d31',
    lineWidth: 3
  } );
  const burnLinePlot = new LinePlot( calorieChartTransform, [], {
    stroke: '#b14b4b',
    lineWidth: 3
  } );

  const updateCaloriePlot = () => {
    calorieChartTransform.setModelXRange( getHistoryXRange( humanModel ) );
    intakeLinePlot.setDataSet( humanModel.weightHistorySamples.map( ( sample: IntentionalAny ) =>
      new Vector2( sample.timeDays, sample.caloricIntakeCaloriesPerDay )
    ) );
    burnLinePlot.setDataSet( humanModel.weightHistorySamples.map( ( sample: IntentionalAny ) =>
      new Vector2( sample.timeDays, sample.caloricBurnCaloriesPerDay )
    ) );
  };
  humanModel.weightHistoryChangedEmitter.addListener( updateCaloriePlot );
  updateCaloriePlot();

  const weightChartNode = createTrendChartNode( chartTransform, chartRectangle, [ linePlot ], 90, 40 );
  const calorieChartNode = createTrendChartNode(
    calorieChartTransform,
    calorieChartRectangle,
    [ intakeLinePlot, burnLinePlot ],
    90,
    1000
  );
  const legendRow = new HBox( {
    children: [
      createGraphLegendItem( '#5b8d31', EatingExerciseAndEnergyFluent.readout.intakeStringProperty ),
      createGraphLegendItem( '#b14b4b', EatingExerciseAndEnergyFluent.readout.burnStringProperty )
    ],
    spacing: 8,
    align: 'center'
  } );

  return new Panel( new VBox( {
    children: [
      new Text( EatingExerciseAndEnergyFluent.graph.weightTrendStringProperty, {
        font: GRAPH_TITLE_FONT,
        maxWidth: chartWidth
      } ),
      weightChartNode,
      new Text( EatingExerciseAndEnergyFluent.graph.calorieTrendStringProperty, {
        font: GRAPH_TITLE_FONT,
        maxWidth: chartWidth
      } ),
      calorieChartNode,
      legendRow
    ],
    spacing: 5,
    align: 'center'
  } ), combineOptions<PanelOptions>( {}, COMPACT_PANEL_OPTIONS, {
    visibleProperty: visibleProperty
  } ) );
};

/**
 * @param humanModel * @param visibleProperty */
const createStarvationWarningPanel = ( humanModel: IntentionalAny, visibleProperty: IntentionalAny ) => {
  const titleStringProperty = new DerivedProperty(
    [
      humanModel.isAliveProperty,
      EatingExerciseAndEnergyFluent.healthWarnings.starvingTitleStringProperty,
      EatingExerciseAndEnergyFluent.healthWarnings.stoppedTitleStringProperty
    ],
    ( isAlive: IntentionalAny, starvingTitle: IntentionalAny, stoppedTitle: IntentionalAny ) => isAlive ? starvingTitle : stoppedTitle
  );
  const bodyStringProperty = new DerivedProperty(
    [
      humanModel.isAliveProperty,
      EatingExerciseAndEnergyFluent.healthWarnings.starvingBodyStringProperty,
      EatingExerciseAndEnergyFluent.healthWarnings.stoppedBodyStringProperty
    ],
    ( isAlive: IntentionalAny, starvingBody: IntentionalAny, stoppedBody: IntentionalAny ) => isAlive ? starvingBody : stoppedBody
  );

  return new Panel( new VBox( {
    children: [
      new Text( titleStringProperty, {
        font: new PhetFont( { size: 16, weight: 'bold' } ),
        fill: '#9c1b1b',
        maxWidth: 220
      } ),
      new RichText( bodyStringProperty, {
        font: new PhetFont( 12 ),
        maxWidth: 220,
        lineWrap: 220
      } )
    ],
    spacing: 2,
    align: 'left'
  } ), {
    fill: '#fff2f2',
    stroke: '#b33a3a',
    cornerRadius: 6,
    xMargin: 8,
    yMargin: 6,
    visibleProperty: visibleProperty
  } );
};

/**
 * @param key */
const toItemTandemName = ( key: IntentionalAny ) => `${key.replace( /[^a-zA-Z0-9]+([a-zA-Z0-9])/g, ( match: IntentionalAny, character: IntentionalAny ) => character.toUpperCase() )}Item`;

/**
 * @param model * @param carouselValuesVisibleProperty * @param tandem */
const createFoodActivityDockedContent = ( model: IntentionalAny, carouselValuesVisibleProperty: IntentionalAny, tandem: IntentionalAny ) => {
  const contentNode = new Node();
  const dragLayer = new Node();

  const foodBar = createEditableItemBar(
    EatingExerciseAndEnergyFluent.intakeControls.foodBarStringProperty,
    model,
    'food',
    contentNode,
    dragLayer,
    tandem.createTandem( 'foodBar' )
  );
  const energyUseBar = createEnergyUseBar( model, contentNode, dragLayer, tandem.createTandem( 'energyUseBar' ) );

  const foodCarouselItems = moveItemWithKeyToIndex( model.availableFoodItems, 'balanced-daily-diet', CAROUSEL_ITEMS_PER_PAGE - 1 );
  const foodCarousel = createItemCarousel(
    foodCarouselItems,
    FOOD_ITEM_LABEL_STRING_PROPERTIES,
    ( key: IntentionalAny ) => getFoodItemCalories( model, key ),
    ( key: IntentionalAny ) => model.addDailyFoodItem( key ),
    foodBar.dropZone,
    foodBar.previewRectangle,
    foodBar.dropHighlight,
    contentNode,
    dragLayer,
    FOOD_BAR_COLOR,
    carouselValuesVisibleProperty,
    [],
    tandem.createTandem( 'foodCarousel' )
  );
  const foodCarouselWithTitle = createTitledCarousel( EatingExerciseAndEnergyFluent.intakeControls.perServingStringProperty, foodCarousel );
  const activityCarousel = createItemCarousel(
    model.availableExerciseItems,
    EXERCISE_ITEM_LABEL_STRING_PROPERTIES,
    ( key: IntentionalAny ) => getExerciseItemCalories( model, key ),
    ( key: IntentionalAny ) => model.addDailyExerciseItem( key ),
    energyUseBar.dropZone,
    energyUseBar.previewRectangle,
    energyUseBar.dropHighlight,
    contentNode,
    dragLayer,
    EXERCISE_BAR_COLOR,
    carouselValuesVisibleProperty,
    [ model.humanModel.massKilogramsProperty ],
    tandem.createTandem( 'activityCarousel' )
  );
  const activityCarouselWithTitle = createTitledCarousel( EatingExerciseAndEnergyFluent.intakeControls.per15MinutesStringProperty, activityCarousel );

  const foodClearButton = new TrashButton( {
    listener: () => model.clearDailyFoodItems(),
    accessibleName: EatingExerciseAndEnergyFluent.a11y.intakeControls.clearFoodStringProperty,
    iconOptions: { scale: 0.65 },
    xMargin: 12,
    yMargin: 5,
    touchAreaXDilation: 5,
    touchAreaYDilation: 5,
    tandem: tandem.createTandem( 'foodClearButton' )
  } );
  const exerciseClearButton = new TrashButton( {
    listener: () => model.clearDailyExerciseItems(),
    accessibleName: EatingExerciseAndEnergyFluent.a11y.intakeControls.clearExerciseStringProperty,
    iconOptions: { scale: 0.65 },
    xMargin: 12,
    yMargin: 5,
    touchAreaXDilation: 5,
    touchAreaYDilation: 5,
    tandem: tandem.createTandem( 'exerciseClearButton' )
  } );
  const valuesCheckbox = new Checkbox( carouselValuesVisibleProperty, new Text( EatingExerciseAndEnergyFluent.intakeControls.valuesStringProperty, {
    font: new PhetFont( 12 ),
    maxWidth: 80
  } ), {
    boxWidth: 16,
    spacing: 5,
    accessibleName: EatingExerciseAndEnergyFluent.intakeControls.valuesStringProperty,
    tandem: tandem.createTandem( 'valuesCheckbox' )
  } );

  const foodBreakdownEntries = FOOD_BREAKDOWN_ENTRIES( model.humanModel );
  const energyUseBreakdownEntries = ENERGY_USE_BREAKDOWN_ENTRIES( model.humanModel );
  const foodPie = createBreakdownPieChartNode( foodBreakdownEntries );
  const energyUsePie = createBreakdownPieChartNode( energyUseBreakdownEntries );
  foodCarouselWithTitle.mutateLayoutOptions( { yAlign: 'bottom' } );
  foodBar.mutateLayoutOptions( { yAlign: 'bottom' } );
  energyUseBar.mutateLayoutOptions( { yAlign: 'bottom' } );
  activityCarouselWithTitle.mutateLayoutOptions( { yAlign: 'bottom' } );

  const foodActivityGrid = new GridBox( {
    rows: [
      [
        foodCarouselWithTitle,
        foodBar,
        energyUseBar,
        activityCarouselWithTitle
      ],
      [
        createFoodPieLegendNode( foodBreakdownEntries, carouselValuesVisibleProperty ),
        foodPie,
        energyUsePie,
        createEnergyUsePieLegendNode( energyUseBreakdownEntries, carouselValuesVisibleProperty )
      ]
    ],
    xSpacing: 10,
    ySpacing: 8,
    yAlign: 'center',
    xAlign: 'center'
  } );
  foodPie.mutateLayoutOptions( { xAlign: 'center' } );
  energyUsePie.mutateLayoutOptions( { xAlign: 'center' } );

  contentNode.addChild( foodActivityGrid );
  contentNode.addChild( foodClearButton );
  contentNode.addChild( exerciseClearButton );
  contentNode.addChild( valuesCheckbox );
  contentNode.addChild( dragLayer );
  ManualConstraint.create(
    contentNode,
    [ foodActivityGrid, foodPie, energyUsePie, foodClearButton, exerciseClearButton, valuesCheckbox ],
    ( gridProxy: IntentionalAny, foodPieProxy: IntentionalAny, energyUsePieProxy: IntentionalAny, foodClearProxy: IntentionalAny, exerciseClearProxy: IntentionalAny, checkboxProxy: IntentionalAny ) => {
      foodClearProxy.centerX = foodPieProxy.centerX;
      foodClearProxy.top = foodPieProxy.bottom + 10;

      exerciseClearProxy.centerX = energyUsePieProxy.centerX;
      exerciseClearProxy.top = energyUsePieProxy.bottom + 10;

      checkboxProxy.left = gridProxy.left;
      checkboxProxy.centerY = foodClearProxy.centerY;
    }
  );
  return contentNode;
};

const createTitledCarousel = ( titleStringProperty: IntentionalAny, carousel: IntentionalAny ) => new VBox( {
  children: [
    new Text( titleStringProperty, {
      font: new PhetFont( { size: 12, weight: 'bold' } ),
      maxWidth: 90
    } ),
    carousel
  ],
  spacing: 3,
  align: 'center'
} );

const createItemCarousel = ( items: IntentionalAny, labelStringProperties: IntentionalAny, getCalories: IntentionalAny, addItem: IntentionalAny, dropZone: IntentionalAny, previewRectangle: IntentionalAny, dropHighlight: IntentionalAny, contentNode: IntentionalAny, dragLayer: IntentionalAny, color: IntentionalAny, carouselValuesVisibleProperty: IntentionalAny, calorieValueDependencies: IntentionalAny, tandem: IntentionalAny ) => {
  const itemIconAlignGroup = new AlignGroup();
  const itemLabelAlignGroup = new AlignGroup( { matchVertical: false } );

  return new Carousel(
    items.map( ( item: IntentionalAny ) => ( {
      createNode: () => createFoodActivityToolNode(
        item,
        getItemLabelStringProperty( labelStringProperties, item.key ),
        createCarouselItemCaloriesStringProperty( item, getCalories, calorieValueDependencies ),
        getCalories,
        addItem,
        dropZone,
        previewRectangle,
        dropHighlight,
        contentNode,
        dragLayer,
        color,
        carouselValuesVisibleProperty,
        itemIconAlignGroup,
        itemLabelAlignGroup
      ),
      tandemName: toItemTandemName( item.key )
    } ) ), {
    orientation: 'vertical',
    itemsPerPage: CAROUSEL_ITEMS_PER_PAGE,
    spacing: 5,
    margin: 4,
    separatorsVisible: true,
    fill: '#f7f7f7',
    stroke: '#b8b8b8',
    tandem: tandem
  }
  );
};

const moveItemWithKeyToIndex = ( items: IntentionalAny, key: IntentionalAny, index: IntentionalAny ) => {
  const reorderedItems = items.slice();
  const currentIndex = reorderedItems.findIndex( ( item: IntentionalAny ) => item.key === key );
  if ( currentIndex >= 0 ) {
    const item = reorderedItems.splice( currentIndex, 1 )[ 0 ];
    reorderedItems.splice( index, 0, item );
  }
  return reorderedItems;
};

const getItemLabelStringProperty = ( labelStringProperties: IntentionalAny, key: IntentionalAny ) => {
  const labelStringProperty = labelStringProperties[ key ];
  assert && assert( labelStringProperty, `missing label string for item: ${key}` );
  return labelStringProperty;
};

const createCarouselItemCaloriesStringProperty = ( item: IntentionalAny, getCalories: IntentionalAny, calorieValueDependencies: IntentionalAny ) => {
  const caloriesProperty = calorieValueDependencies.length > 0 ?
                           new DerivedProperty( calorieValueDependencies, () => roundSymmetric( getCalories( item.key ) ) ) :
                           new NumberProperty( roundSymmetric( getCalories( item.key ) ) );
  return new PatternStringProperty( EatingExerciseAndEnergyFluent.intakeControls.caloriesPatternStringProperty, {
    value: caloriesProperty
  } );
};

const createItemSegmentNode = ( item: IntentionalAny, labelStringProperty: IntentionalAny, width: IntentionalAny, height: IntentionalAny, color: IntentionalAny, options: IntentionalAny = {} ) => {
  const segmentNode = new Node();
  const y = options.y || 0;
  const showLabel = options.showLabel !== false;
  const horizontal = options.orientation === 'horizontal';
  const imageMaxSize = options.imageMaxSize || BAR_SEGMENT_IMAGE_SIZE;

  segmentNode.addChild( new Rectangle( 0, y, width, height, {
    fill: color,
    stroke: 'white',
    lineWidth: 0.5,
    cornerRadius: options.cornerRadius || 0
  } ) );

  const imageNode = horizontal || height >= 10 ? createItemImageNode( item.image, Math.min( imageMaxSize, Math.max( 8, height - 4 ) ) ) : null;
  const labelNode = showLabel ? new RichText( new DerivedProperty(
    [ labelStringProperty ],
    ( string: IntentionalAny ) => createItemLabelRichTextString( string )
  ), {
    font: new PhetFont( options.labelFontSize || 8 ),
    align: horizontal ? 'left' : 'center',
    fill: 'white',
    maxWidth: options.labelMaxWidth || width - 6
  } ) : null;

  if ( horizontal ) {
    const contentChildren = labelNode ? [ imageNode!, labelNode ] : [ imageNode! ];
    const content = new HBox( {
      children: contentChildren,
      spacing: 6,
      align: 'center'
    } );
    content.left = 6;
    content.centerY = y + height / 2;
    if ( content.width > width - 12 ) {
      content.maxWidth = width - 12;
    }
    segmentNode.addChild( content );
  }
  else {
    if ( imageNode ) {
      imageNode.centerX = width / 2;
      imageNode.centerY = y + Math.min( height / 2, imageMaxSize / 2 + 2 );
      segmentNode.addChild( imageNode );
    }

    if ( labelNode && height >= 56 ) {
      labelNode.centerX = width / 2;
      labelNode.bottom = y + height - 3;
      segmentNode.addChild( labelNode );
    }
  }

  return segmentNode;
};

const createFloatingItemSegmentNode = ( item: IntentionalAny, labelStringProperty: IntentionalAny, height: IntentionalAny, color: IntentionalAny ) => createItemSegmentNode(
  item,
  labelStringProperty,
  DOCK_BAR_WIDTH,
  height,
  color,
  {
    imageMaxSize: BAR_SEGMENT_IMAGE_SIZE,
    labelFontSize: 8,
    labelMaxWidth: DOCK_BAR_WIDTH - 6,
    orientation: 'vertical'
  }
);

const getConstrainedDragCenter = ( contentNode: IntentionalAny, dragBounds: IntentionalAny, draggedSegmentNode: IntentionalAny, globalPoint: IntentionalAny ) => {
  const localPoint = contentNode.globalToLocalPoint( globalPoint );
  const halfWidth = draggedSegmentNode.width / 2;
  const halfHeight = draggedSegmentNode.height / 2;
  const minX = dragBounds.minX + halfWidth;
  const maxX = dragBounds.maxX - halfWidth;
  const minY = dragBounds.minY + halfHeight;
  const maxY = dragBounds.maxY - halfHeight;

  return new Vector2(
    minX <= maxX ? clamp( localPoint.x, minX, maxX ) : ( dragBounds.minX + dragBounds.maxX ) / 2,
    minY <= maxY ? clamp( localPoint.y, minY, maxY ) : ( dragBounds.minY + dragBounds.maxY ) / 2
  );
};

const createCarouselToolContent = ( item: IntentionalAny, labelStringProperty: IntentionalAny, caloriesStringProperty: IntentionalAny, carouselValuesVisibleProperty: IntentionalAny, itemIconAlignGroup: IntentionalAny, itemLabelAlignGroup: IntentionalAny ) => {
  const labelNode = new RichText( new DerivedProperty(
    [ labelStringProperty ],
    ( string: IntentionalAny ) => createItemLabelRichTextString( string )
  ), {
    font: new PhetFont( 12 ),
    align: 'left',
    maxWidth: 84
  } );
  const caloriesNode = new Text( caloriesStringProperty, {
    font: new PhetFont( 10 ),
    fill: '#666666',
    maxWidth: 84,
    opacity: carouselValuesVisibleProperty.value ? 1 : 0
  } );
  carouselValuesVisibleProperty.link( ( visible: IntentionalAny ) => {
    caloriesNode.opacity = visible ? 1 : 0;
  } );
  const labelContent = new VBox( {
    children: [ labelNode, caloriesNode ],
    spacing: 1,
    align: 'left'
  } );

  return new HBox( {
    children: [
      itemIconAlignGroup.createBox( createItemImageNode( item.image, TOOL_ITEM_IMAGE_SIZE ), {
        xAlign: 'center',
        yAlign: 'center'
      } ),
      itemLabelAlignGroup.createBox( labelContent, {
        xAlign: 'left',
        yAlign: 'center'
      } )
    ],
    spacing: 5,
    align: 'center'
  } );
};

const createFoodActivityToolNode = ( item: IntentionalAny, labelStringProperty: IntentionalAny, caloriesStringProperty: IntentionalAny, getCalories: IntentionalAny, addItem: IntentionalAny, dropZone: IntentionalAny, previewRectangle: IntentionalAny, dropHighlight: IntentionalAny, contentNode: IntentionalAny, dragLayer: IntentionalAny, color: IntentionalAny, carouselValuesVisibleProperty: IntentionalAny, itemIconAlignGroup: IntentionalAny, itemLabelAlignGroup: IntentionalAny ) => {
  const key = item.key;
  assert && assert( labelStringProperty, `missing label for item: ${key}` );

  const toolNode = new InteractiveHighlightingNode( {
    children: [
      createCarouselToolContent( item, labelStringProperty, caloriesStringProperty, carouselValuesVisibleProperty, itemIconAlignGroup, itemLabelAlignGroup )
    ],
    cursor: 'pointer',
    tagName: 'button',
    accessibleName: labelStringProperty,
    tandem: Tandem.OPT_OUT
  } );

  toolNode.localBoundsProperty.link( ( localBounds: IntentionalAny ) => {
    toolNode.touchArea = localBounds.dilatedXY( 8, 6 );
    toolNode.mouseArea = localBounds.dilatedXY( 3, 3 );
  } );

  let draggedSegmentNode: Node | null = null;
  let dragBounds: IntentionalAny = null;

  const showPreview = ( event: IntentionalAny ) => {
    const previewHeight = getBarHeight( getCalories( key ), DOCK_BAR_EFFECTIVE_HEIGHT );
    previewRectangle.setRect( 0, DOCK_BAR_HEIGHT - previewHeight, DOCK_BAR_WIDTH, previewHeight );
    previewRectangle.visible = true;
    dropHighlight.visible = true;

    const floatingHeight = Math.max( previewHeight, 2 );
    draggedSegmentNode = createFloatingItemSegmentNode( item, labelStringProperty, floatingHeight, color );
    draggedSegmentNode.opacity = 0.9;
    dragBounds = contentNode.localBounds.copy();
    draggedSegmentNode.center = getConstrainedDragCenter( contentNode, dragBounds, draggedSegmentNode, event.pointer.point );
    dragLayer.addChild( draggedSegmentNode );
  };
  const hidePreview = () => {
    previewRectangle.visible = false;
    dropHighlight.visible = false;
    if ( draggedSegmentNode ) {
      dragLayer.removeChild( draggedSegmentNode );
      draggedSegmentNode = null;
    }
    dragBounds = null;
  };

  toolNode.addInputListener( new DragListener( {
    allowTouchSnag: true,
    start: ( event: IntentionalAny ) => showPreview( event ),
    drag: ( event: IntentionalAny ) => {
      draggedSegmentNode && dragBounds && ( draggedSegmentNode.center = getConstrainedDragCenter( contentNode, dragBounds, draggedSegmentNode, event.pointer.point ) );
    },
    end: ( event: IntentionalAny ) => {
      if ( dropZone.globalBounds.containsPoint( event.pointer.point ) ) {
        addItem( key );
      }
      hidePreview();
    },
    tandem: Tandem.OPT_OUT
  } ) );

  toolNode.addInputListener( new KeyboardListener( {
    fireOnClick: true,
    fire: () => addItem( key )
  } ) );

  return toolNode;
};

const createItemLabelRichTextString = ( string: IntentionalAny ) => {
  const trimmedString = string.trim();
  const rawTokens = trimmedString.match( /\([^)]*\)|\S+/g ) || [];
  const phrasePairs = [
    'fast food',
    'peanut butter',
    'and jelly',
    'whole milk',
    'potato chips',
    'mixed nuts',
    'honey ham',
    'weight lifting',
    'road biking'
  ];
  const tokens: string[] = [];

  for ( let i = 0; i < rawTokens.length; i++ ) {
    const token = rawTokens[ i ];
    const nextToken = rawTokens[ i + 1 ];
    const pair = nextToken ? `${token} ${nextToken}` : '';
    if ( nextToken && phrasePairs.includes( pair.toLowerCase() ) ) {
      tokens.push( pair );
      i++;
    }
    else if ( nextToken && /\d/.test( token ) && /^(mph|oz|fl|g|cup)$/i.test( nextToken.replace( /[()]/g, '' ) ) ) {
      tokens.push( pair );
      i++;
    }
    else {
      tokens.push( token );
    }
  }

  const fullLine = tokens.join( ' ' );
  const lines = fullLine.length <= 18 || tokens.length < 3 ? [ fullLine ] : _.range( 1, tokens.length ).map( ( splitIndex: IntentionalAny ) => {
    return [
      tokens.slice( 0, splitIndex ).join( ' ' ),
      tokens.slice( splitIndex ).join( ' ' )
    ];
  } ).reduce( ( bestLines: IntentionalAny, candidateLines: IntentionalAny ) => {
    const bestWidth = Math.max( ...bestLines.map( ( line: IntentionalAny ) => line.length ) );
    const candidateWidth = Math.max( ...candidateLines.map( ( line: IntentionalAny ) => line.length ) );
    return candidateWidth < bestWidth ? candidateLines : bestLines;
  } );

  return lines.map( ( line: IntentionalAny ) => escapeHTML( line ) ).join( '<br>' );
};

/**
 * @param imageName * @param maxSize */
const createItemImageNode = ( imageName: IntentionalAny, maxSize: IntentionalAny ) => {
  return new Image( getEatingExerciseAndEnergyImage( imageName ), {
    maxWidth: maxSize,
    maxHeight: maxSize
  } );
};

const createRemovableBarSegment = ( item: IntentionalAny, labelStringProperty: IntentionalAny, dailyItem: IntentionalAny, y: IntentionalAny, height: IntentionalAny, color: IntentionalAny, caloriesPerDay: IntentionalAny, dropZone: IntentionalAny, contentNode: IntentionalAny, dragLayer: IntentionalAny, removeItem: IntentionalAny, addItem: IntentionalAny ) => {
  const id = dailyItem.id;
  const segmentNode = new InteractiveHighlightingNode( {
    cursor: 'pointer',
    tagName: 'div',
    focusable: true,
    accessibleName: EatingExerciseAndEnergyFluent.a11y.itemCalories.createProperty( {
      label: labelStringProperty,
      calories: new NumberProperty( roundSymmetric( caloriesPerDay ) )
    } )
  } );

  segmentNode.addChild( createItemSegmentNode( item, labelStringProperty, DOCK_BAR_WIDTH, height, color, {
    y: y,
    imageMaxSize: BAR_SEGMENT_IMAGE_SIZE,
    labelFontSize: 8,
    labelMaxWidth: DOCK_BAR_WIDTH - 6,
    orientation: 'vertical'
  } ) );

  segmentNode.localBoundsProperty.link( ( localBounds: IntentionalAny ) => {
    segmentNode.touchArea = localBounds.dilatedXY( 8, 4 );
    segmentNode.mouseArea = localBounds.dilatedXY( 3, 2 );
  } );

  segmentNode.addInputListener( new KeyboardListener( {
    keyStringProperties: REMOVE_ITEM_HOTKEY_DATA.keyStringProperties,
    fire: () => removeItem( id )
  } ) );

  let draggedSegmentNode: Node | null = null;
  let dragBounds: IntentionalAny = null;
  segmentNode.addInputListener( new DragListener( {
    allowTouchSnag: true,
    start: ( event: IntentionalAny ) => {
      removeItem( id );

      draggedSegmentNode = createFloatingItemSegmentNode( item, labelStringProperty, height, color );
      draggedSegmentNode.opacity = 0.9;
      dragBounds = contentNode.localBounds.copy();
      dragLayer.addChild( draggedSegmentNode );

      draggedSegmentNode.center = getConstrainedDragCenter( contentNode, dragBounds, draggedSegmentNode, event.pointer.point );
    },
    drag: ( event: IntentionalAny ) => {
      if ( draggedSegmentNode && dragBounds ) {
        draggedSegmentNode.center = getConstrainedDragCenter( contentNode, dragBounds, draggedSegmentNode, event.pointer.point );
      }
    },
    end: ( event: IntentionalAny ) => {
      if ( dropZone.globalBounds.containsPoint( event.pointer.point ) ) {
        addItem( dailyItem.key );
      }
      if ( draggedSegmentNode ) {
        dragLayer.removeChild( draggedSegmentNode );
        draggedSegmentNode = null;
      }
      dragBounds = null;
    },
    tandem: Tandem.OPT_OUT
  } ) );

  return segmentNode;
};

const createBarOffScaleArrow = ( fill: IntentionalAny ) => new ArrowNode(
  DOCK_BAR_WIDTH / 2,
  OFF_SCALE_ARROW_HEIGHT,
  DOCK_BAR_WIDTH / 2,
  0, {
    fill: fill,
    stroke: 'black',
    headHeight: DOCK_BAR_WIDTH / 5,
    headWidth: DOCK_BAR_WIDTH / 2.5,
    tailWidth: DOCK_BAR_WIDTH / 4,
    visible: false
  } );

const createEditableItemBar = ( labelStringProperty: IntentionalAny, model: IntentionalAny, itemType: IntentionalAny, contentNode: IntentionalAny, dragLayer: IntentionalAny, tandem: IntentionalAny ) => {
  const segmentsNode = new Node();
  const offScaleArrow = createBarOffScaleArrow( FOOD_BAR_COLOR );
  const previewRectangle = new Rectangle( 0, DOCK_BAR_HEIGHT, DOCK_BAR_WIDTH, 0, {
    fill: FOOD_BAR_COLOR,
    opacity: 0.35,
    visible: false
  } );
  const dropHighlight = new Rectangle( 0, 0, DOCK_BAR_WIDTH, DOCK_BAR_HEIGHT, {
    stroke: '#222222',
    lineWidth: 2,
    lineDash: [ 6, 4 ],
    fill: 'transparent',
    visible: false
  } );
  const dropZone = new Node( {
    children: [
      new Rectangle( 0, 0, DOCK_BAR_WIDTH, DOCK_BAR_HEIGHT, {
        fill: '#fbfbfb',
        stroke: '#777777',
        cornerRadius: 3
      } ),
      segmentsNode,
      offScaleArrow,
      previewRectangle,
      dropHighlight
    ]
  } );

  const totalProperty = itemType === 'food' ?
                        model.humanModel.caloricIntakeCaloriesPerDayProperty :
                        model.humanModel.exerciseCaloriesPerDayProperty;

  const updateSegments = () => {
    const dailyItems = itemType === 'food' ? model.dailyFoodItems : model.dailyExerciseItems;
    const getCalories = itemType === 'food' ?
                        ( key: IntentionalAny ) => getFoodItemCalories( model, key ) :
                        ( key: IntentionalAny ) => getExerciseItemCalories( model, key );
    const getDataItem = itemType === 'food' ?
                        ( key: IntentionalAny ) => model.getFoodItem( key ) :
                        ( key: IntentionalAny ) => model.availableExerciseItems.find( ( item: IntentionalAny ) => item.key === key );
    const removeItem = itemType === 'food' ?
                       ( id: IntentionalAny ) => model.removeDailyFoodItem( id ) :
                       ( id: IntentionalAny ) => model.removeDailyExerciseItem( id );
    const labelStringProperties = itemType === 'food' ?
                                  FOOD_ITEM_LABEL_STRING_PROPERTIES :
                                  EXERCISE_ITEM_LABEL_STRING_PROPERTIES;

    segmentsNode.removeAllChildren();
    let y = DOCK_BAR_HEIGHT;
    let visibleCaloriesPerDay = 0;

    const addSegment = ( dailyItem: IntentionalAny ) => {
      const dataItem = getDataItem( dailyItem.key );
      const caloriesPerDay = getCalories( dailyItem.key );
      const remainingVisibleCaloriesPerDay = Math.max( BAR_MAX_CALORIES_PER_DAY - visibleCaloriesPerDay, 0 );
      const displayedCaloriesPerDay = clamp( caloriesPerDay, 0, remainingVisibleCaloriesPerDay );
      const height = getBarHeight( displayedCaloriesPerDay, DOCK_BAR_EFFECTIVE_HEIGHT );
      segmentsNode.addChild( createRemovableBarSegment(
        dataItem,
        getItemLabelStringProperty( labelStringProperties, dailyItem.key ),
        dailyItem,
        y - height,
        Math.max( height, 2 ),
        FOOD_BAR_COLOR,
        caloriesPerDay,
        dropZone,
        contentNode,
        dragLayer,
        removeItem,
        ( key: IntentionalAny ) => model.addDailyFoodItem( key )
      ) );
      y = y - height;
      visibleCaloriesPerDay += displayedCaloriesPerDay;
    };

    dailyItems.forEach( ( dailyItem: IntentionalAny ) => {
      addSegment( dailyItem );
    } );
    offScaleArrow.visible = totalProperty.value > BAR_MAX_CALORIES_PER_DAY;
  };
  model.dailyItemsChangedEmitter.addListener( updateSegments );
  totalProperty.link( updateSegments );
  updateSegments();

  const barNode = new VBox( {
    children: [
      new Text( labelStringProperty, {
        font: LABEL_FONT,
        maxWidth: 70
      } ),
      dropZone,
      new Text( createPatternValueStringProperty(
        EatingExerciseAndEnergyFluent.readout.caloriesPerDayPatternStringProperty,
        totalProperty,
        ( value: IntentionalAny ) => roundSymmetric( value )
      ), {
        font: new PhetFont( 12 ),
        maxWidth: 76
      } )
    ],
    spacing: 6,
    align: 'center',
    tandem: tandem
  } ) as ItemBarNode;

  barNode.dropZone = dropZone;
  barNode.previewRectangle = previewRectangle;
  barNode.dropHighlight = dropHighlight;
  return barNode;
};

const createEnergyUseBar = ( model: IntentionalAny, contentNode: IntentionalAny, dragLayer: IntentionalAny, tandem: IntentionalAny ) => {
  const humanModel = model.humanModel;
  const segmentsNode = new Node();
  const offScaleArrow = createBarOffScaleArrow( EXERCISE_BAR_COLOR );
  const previewRectangle = new Rectangle( 0, DOCK_BAR_HEIGHT, DOCK_BAR_WIDTH, 0, {
    fill: EXERCISE_BAR_COLOR,
    opacity: 0.35,
    visible: false
  } );
  const dropHighlight = new Rectangle( 0, 0, DOCK_BAR_WIDTH, DOCK_BAR_HEIGHT, {
    stroke: '#222222',
    lineWidth: 2,
    lineDash: [ 6, 4 ],
    fill: 'transparent',
    visible: false
  } );
  const dropZone = new Node( {
    children: [
      new Rectangle( 0, 0, DOCK_BAR_WIDTH, DOCK_BAR_HEIGHT, {
        fill: '#fbfbfb',
        stroke: '#777777',
        cornerRadius: 3
      } ),
      segmentsNode,
      offScaleArrow,
      previewRectangle,
      dropHighlight
    ]
  } );

  const addSegment = ( y: IntentionalAny, visibleCaloriesPerDay: IntentionalAny, caloriesPerDay: IntentionalAny, color: IntentionalAny, segmentNode: IntentionalAny = null ) => {
    const remainingVisibleCaloriesPerDay = Math.max( BAR_MAX_CALORIES_PER_DAY - visibleCaloriesPerDay, 0 );
    const displayedCaloriesPerDay = clamp( caloriesPerDay, 0, remainingVisibleCaloriesPerDay );
    const height = getBarHeight( displayedCaloriesPerDay, DOCK_BAR_EFFECTIVE_HEIGHT );
    segmentsNode.addChild( segmentNode || new Rectangle( 0, y - height, DOCK_BAR_WIDTH, height, {
      fill: color,
      stroke: 'white',
      lineWidth: 0.5
    } ) );
    return {
      y: y - height,
      visibleCaloriesPerDay: visibleCaloriesPerDay + displayedCaloriesPerDay
    };
  };

  const updateSegments = () => {
    segmentsNode.removeAllChildren();
    let y = DOCK_BAR_HEIGHT;
    let visibleCaloriesPerDay = 0;

    let result = addSegment( y, visibleCaloriesPerDay, humanModel.basalMetabolicRateCaloriesPerDayProperty.value, BMR_BAR_COLOR );
    y = result.y;
    visibleCaloriesPerDay = result.visibleCaloriesPerDay;
    result = addSegment( y, visibleCaloriesPerDay, humanModel.activityCaloriesPerDayProperty.value, LIFESTYLE_BAR_COLOR );
    y = result.y;
    visibleCaloriesPerDay = result.visibleCaloriesPerDay;

    model.dailyExerciseItems.forEach( ( dailyItem: IntentionalAny ) => {
      const caloriesPerDay = getExerciseItemCalories( model, dailyItem.key );
      const remainingVisibleCaloriesPerDay = Math.max( BAR_MAX_CALORIES_PER_DAY - visibleCaloriesPerDay, 0 );
      const displayedCaloriesPerDay = clamp( caloriesPerDay, 0, remainingVisibleCaloriesPerDay );
      const height = getBarHeight( displayedCaloriesPerDay, DOCK_BAR_EFFECTIVE_HEIGHT );
      const exerciseItem = model.availableExerciseItems.find( ( item: IntentionalAny ) => item.key === dailyItem.key );
      result = addSegment(
        y,
        visibleCaloriesPerDay,
        caloriesPerDay,
        EXERCISE_BAR_COLOR,
        createRemovableBarSegment(
          exerciseItem,
          getItemLabelStringProperty( EXERCISE_ITEM_LABEL_STRING_PROPERTIES, dailyItem.key ),
          dailyItem,
          y - height,
          Math.max( height, 2 ),
          EXERCISE_BAR_COLOR,
          caloriesPerDay,
          dropZone,
          contentNode,
          dragLayer,
          ( id: IntentionalAny ) => model.removeDailyExerciseItem( id ),
          ( key: IntentionalAny ) => model.addDailyExerciseItem( key )
        )
      );
      y = result.y;
      visibleCaloriesPerDay = result.visibleCaloriesPerDay;
    } );
    offScaleArrow.visible = humanModel.caloricBurnCaloriesPerDayProperty.value > BAR_MAX_CALORIES_PER_DAY;
  };
  humanModel.basalMetabolicRateCaloriesPerDayProperty.link( updateSegments );
  humanModel.activityCaloriesPerDayProperty.link( updateSegments );
  humanModel.exerciseCaloriesPerDayProperty.link( updateSegments );
  model.dailyItemsChangedEmitter.addListener( updateSegments );
  updateSegments();

  const barNode = new VBox( {
    children: [
      new Text( EatingExerciseAndEnergyFluent.intakeControls.energyUseStringProperty, {
        font: LABEL_FONT,
        maxWidth: 78
      } ),
      dropZone,
      new Text( createPatternValueStringProperty(
        EatingExerciseAndEnergyFluent.readout.caloriesPerDayPatternStringProperty,
        humanModel.caloricBurnCaloriesPerDayProperty,
        ( value: IntentionalAny ) => roundSymmetric( value )
      ), {
        font: new PhetFont( 12 ),
        maxWidth: 76
      } )
    ],
    spacing: 6,
    align: 'center',
    tandem: tandem
  } ) as ItemBarNode;

  barNode.dropZone = dropZone;
  barNode.previewRectangle = previewRectangle;
  barNode.dropHighlight = dropHighlight;
  return barNode;
};

const FOOD_BREAKDOWN_ENTRIES = ( humanModel: IntentionalAny ) => [ {
  labelStringProperty: EatingExerciseAndEnergyFluent.intakeControls.lipidsStringProperty,
  property: humanModel.lipidCaloriesPerDayProperty,
  color: FAT_COLOR
}, {
  labelStringProperty: EatingExerciseAndEnergyFluent.intakeControls.carbohydratesStringProperty,
  property: humanModel.carbohydrateCaloriesPerDayProperty,
  color: CARBOHYDRATE_COLOR
}, {
  labelStringProperty: EatingExerciseAndEnergyFluent.intakeControls.proteinStringProperty,
  property: humanModel.proteinCaloriesPerDayProperty,
  color: PROTEIN_COLOR
} ];

const ENERGY_USE_BREAKDOWN_ENTRIES = ( humanModel: IntentionalAny ) => [ {
  labelStringProperty: EatingExerciseAndEnergyFluent.intakeControls.restingMetabolismStringProperty,
  property: humanModel.basalMetabolicRateCaloriesPerDayProperty,
  color: BMR_BAR_COLOR
}, {
  labelStringProperty: EatingExerciseAndEnergyFluent.intakeControls.lifestyleStringProperty,
  property: humanModel.activityCaloriesPerDayProperty,
  color: LIFESTYLE_BAR_COLOR
}, {
  labelStringProperty: EatingExerciseAndEnergyFluent.intakeControls.exerciseStringProperty,
  property: humanModel.exerciseCaloriesPerDayProperty,
  color: EXERCISE_BAR_COLOR
} ];

const createFoodPieLegendNode = ( entries: IntentionalAny, valuesVisibleProperty: IntentionalAny ) => createBreakdownLegendNode( entries, valuesVisibleProperty );

const createEnergyUsePieLegendNode = ( entries: IntentionalAny, valuesVisibleProperty: IntentionalAny ) => createBreakdownLegendNode( entries, valuesVisibleProperty );

const createBreakdownLegendNode = ( entries: IntentionalAny, valuesVisibleProperty: IntentionalAny ) => new VBox( {
  children: entries.map( ( entry: IntentionalAny ) => createBreakdownLegendItem( entry.color, entry.labelStringProperty, entry.property, entries, valuesVisibleProperty ) ),
  spacing: 2,
  align: 'left'
} );

const createBreakdownPieChartNode = ( entries: IntentionalAny ) => {
  const radius = 20;
  const wedgesNode = new Node();
  const outlineNode = new Circle( radius, {
    stroke: '#777777',
    lineWidth: 1,
    fill: 'transparent'
  } );
  const pieNode = new Node( {
    children: [ wedgesNode, outlineNode ]
  } );

  const updateWedges = ( ...values: IntentionalAny[] ) => {
    wedgesNode.removeAllChildren();
    const total = values.reduce( ( sum: IntentionalAny, value: IntentionalAny ) => sum + Math.max( value, 0 ), 0 );
    let startAngle = -Math.PI / 2;

    entries.forEach( ( entry: IntentionalAny, index: IntentionalAny ) => {
      const fraction = total > 0 ? Math.max( values[ index ], 0 ) / total : 0;
      if ( fraction > 0 ) {
        const endAngle = startAngle + fraction * 2 * Math.PI;
        wedgesNode.addChild( new Path( new Shape()
          .moveTo( 0, 0 )
          .lineTo( radius * Math.cos( startAngle ), radius * Math.sin( startAngle ) )
          .arc( 0, 0, radius, startAngle, endAngle, false )
          .close(), {
          fill: entry.color,
          stroke: 'white',
          lineWidth: 0.5
        } ) );
        startAngle = endAngle;
      }
    } );
  };
  Multilink.multilink( entries.map( ( entry: IntentionalAny ) => entry.property ), updateWedges );

  return pieNode;
};

const getBarHeight = ( caloriesPerDay: IntentionalAny, barHeight: IntentionalAny ) => clamp(
  caloriesPerDay / BAR_MAX_CALORIES_PER_DAY * barHeight,
  0,
  barHeight
);

const getFoodItemCalories = ( model: IntentionalAny, key: IntentionalAny ) => {
  return model.getFoodItemCaloriesPerDay( key );
};

const getExerciseItemCalories = ( model: IntentionalAny, key: IntentionalAny ) => {
  const item = model.availableExerciseItems.find( ( exerciseItem: IntentionalAny ) => exerciseItem.key === key );
  assert && assert( item, `missing exercise item: ${key}` );
  const massMultiplier = item.weightDependent ?
                         model.humanModel.massKilogramsProperty.value / model.exerciseReferenceMassKilograms :
                         1;
  return item.referenceCaloriesPerHour * massMultiplier;
};

export default EatingExerciseAndEnergyScreenView;
