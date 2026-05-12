// Copyright 2026, University of Colorado Boulder
// AUTOMATICALLY GENERATED – DO NOT EDIT.
// Generated from eating-exercise-and-energy-strings_en.yaml

/* eslint-disable */
/* @formatter:off */

import FluentLibrary from '../../chipper/js/browser-and-node/FluentLibrary.js';
import FluentConstant from '../../chipper/js/browser/FluentConstant.js';
import FluentContainer from '../../chipper/js/browser/FluentContainer.js';
import type {FluentVariable} from '../../chipper/js/browser/FluentPattern.js';
import FluentPattern from '../../chipper/js/browser/FluentPattern.js';
import eatingExerciseAndEnergy from './eatingExerciseAndEnergy.js';
import EatingExerciseAndEnergyStrings from './EatingExerciseAndEnergyStrings.js';

// This map is used to create the fluent file and link to all StringProperties.
// Accessing StringProperties is also critical for including them in the built sim.
// However, if strings are unused in Fluent system too, they will be fully excluded from
// the build. So we need to only add actually used strings.
const fluentKeyToStringPropertyMap = new Map();

const addToMapIfDefined = ( key: string, path: string ) => {
  const sp = _.get( EatingExerciseAndEnergyStrings, path );
  if ( sp ) {
    fluentKeyToStringPropertyMap.set( key, sp );
  }
};

addToMapIfDefined( 'eating_exercise_and_energy_title', 'eating-exercise-and-energy.titleStringProperty' );
addToMapIfDefined( 'dashboard_title', 'dashboard.titleStringProperty' );
addToMapIfDefined( 'readout_elapsedTime', 'readout.elapsedTimeStringProperty' );
addToMapIfDefined( 'readout_age', 'readout.ageStringProperty' );
addToMapIfDefined( 'readout_height', 'readout.heightStringProperty' );
addToMapIfDefined( 'readout_mass', 'readout.massStringProperty' );
addToMapIfDefined( 'readout_bmi', 'readout.bmiStringProperty' );
addToMapIfDefined( 'readout_bodyFat', 'readout.bodyFatStringProperty' );
addToMapIfDefined( 'readout_bmr', 'readout.bmrStringProperty' );
addToMapIfDefined( 'readout_intake', 'readout.intakeStringProperty' );
addToMapIfDefined( 'readout_burn', 'readout.burnStringProperty' );
addToMapIfDefined( 'readout_balance', 'readout.balanceStringProperty' );
addToMapIfDefined( 'readout_heartHealth', 'readout.heartHealthStringProperty' );
addToMapIfDefined( 'controls_start', 'controls.startStringProperty' );
addToMapIfDefined( 'controls_pause', 'controls.pauseStringProperty' );
addToMapIfDefined( 'controls_nextMonth', 'controls.nextMonthStringProperty' );
addToMapIfDefined( 'controls_speed', 'controls.speedStringProperty' );
addToMapIfDefined( 'bodyControls_title', 'bodyControls.titleStringProperty' );
addToMapIfDefined( 'bodyControls_metric', 'bodyControls.metricStringProperty' );
addToMapIfDefined( 'bodyControls_english', 'bodyControls.englishStringProperty' );
addToMapIfDefined( 'bodyControls_gender', 'bodyControls.genderStringProperty' );
addToMapIfDefined( 'bodyControls_female', 'bodyControls.femaleStringProperty' );
addToMapIfDefined( 'bodyControls_male', 'bodyControls.maleStringProperty' );
addToMapIfDefined( 'bodyControls_lifestyle', 'bodyControls.lifestyleStringProperty' );
addToMapIfDefined( 'bodyControls_sedentary', 'bodyControls.sedentaryStringProperty' );
addToMapIfDefined( 'bodyControls_moderate', 'bodyControls.moderateStringProperty' );
addToMapIfDefined( 'bodyControls_active', 'bodyControls.activeStringProperty' );
addToMapIfDefined( 'bodyControls_autoBodyFat', 'bodyControls.autoBodyFatStringProperty' );
addToMapIfDefined( 'preferences_displayUnits', 'preferences.displayUnitsStringProperty' );
addToMapIfDefined( 'graph_weightTrend', 'graph.weightTrendStringProperty' );
addToMapIfDefined( 'graph_calorieTrend', 'graph.calorieTrendStringProperty' );
addToMapIfDefined( 'keyboardHelpDialog_foodAndActivity', 'keyboardHelpDialog.foodAndActivityStringProperty' );
addToMapIfDefined( 'keyboardHelpDialog_addFoodOrActivityItem', 'keyboardHelpDialog.addFoodOrActivityItemStringProperty' );
addToMapIfDefined( 'keyboardHelpDialog_removeFoodOrActivityItem', 'keyboardHelpDialog.removeFoodOrActivityItemStringProperty' );
addToMapIfDefined( 'intakeControls_title', 'intakeControls.titleStringProperty' );
addToMapIfDefined( 'intakeControls_itemSelectionTitle', 'intakeControls.itemSelectionTitleStringProperty' );
addToMapIfDefined( 'intakeControls_edit', 'intakeControls.editStringProperty' );
addToMapIfDefined( 'intakeControls_clear', 'intakeControls.clearStringProperty' );
addToMapIfDefined( 'intakeControls_values', 'intakeControls.valuesStringProperty' );
addToMapIfDefined( 'intakeControls_perServing', 'intakeControls.perServingStringProperty' );
addToMapIfDefined( 'intakeControls_per15Minutes', 'intakeControls.per15MinutesStringProperty' );
addToMapIfDefined( 'intakeControls_foodBar', 'intakeControls.foodBarStringProperty' );
addToMapIfDefined( 'intakeControls_energyBar', 'intakeControls.energyBarStringProperty' );
addToMapIfDefined( 'intakeControls_activityBar', 'intakeControls.activityBarStringProperty' );
addToMapIfDefined( 'intakeControls_energyUse', 'intakeControls.energyUseStringProperty' );
addToMapIfDefined( 'intakeControls_restingMetabolism', 'intakeControls.restingMetabolismStringProperty' );
addToMapIfDefined( 'intakeControls_lifestyle', 'intakeControls.lifestyleStringProperty' );
addToMapIfDefined( 'intakeControls_lipids', 'intakeControls.lipidsStringProperty' );
addToMapIfDefined( 'intakeControls_carbohydrates', 'intakeControls.carbohydratesStringProperty' );
addToMapIfDefined( 'intakeControls_protein', 'intakeControls.proteinStringProperty' );
addToMapIfDefined( 'intakeControls_exercise', 'intakeControls.exerciseStringProperty' );
addToMapIfDefined( 'intakeControls_foodItem', 'intakeControls.foodItemStringProperty' );
addToMapIfDefined( 'intakeControls_exerciseItem', 'intakeControls.exerciseItemStringProperty' );
addToMapIfDefined( 'intakeControls_presets', 'intakeControls.presetsStringProperty' );
addToMapIfDefined( 'intakeControls_pizza', 'intakeControls.pizzaStringProperty' );
addToMapIfDefined( 'intakeControls_fastMeal', 'intakeControls.fastMealStringProperty' );
addToMapIfDefined( 'intakeControls_jog', 'intakeControls.jogStringProperty' );
addToMapIfDefined( 'intakeControls_run', 'intakeControls.runStringProperty' );
addToMapIfDefined( 'foodItems_balancedDailyDiet', 'foodItems.balancedDailyDietStringProperty' );
addToMapIfDefined( 'foodItems_servingCornFlakes', 'foodItems.servingCornFlakesStringProperty' );
addToMapIfDefined( 'foodItems_cola12Oz', 'foodItems.cola12OzStringProperty' );
addToMapIfDefined( 'foodItems_slicePizza', 'foodItems.slicePizzaStringProperty' );
addToMapIfDefined( 'foodItems_largeFastFoodValueMeal', 'foodItems.largeFastFoodValueMealStringProperty' );
addToMapIfDefined( 'foodItems_taco', 'foodItems.tacoStringProperty' );
addToMapIfDefined( 'foodItems_burrito', 'foodItems.burritoStringProperty' );
addToMapIfDefined( 'foodItems_entirePizza12', 'foodItems.entirePizza12StringProperty' );
addToMapIfDefined( 'foodItems_peanutButterAndJellySandwich', 'foodItems.peanutButterAndJellySandwichStringProperty' );
addToMapIfDefined( 'foodItems_subSandwich', 'foodItems.subSandwichStringProperty' );
addToMapIfDefined( 'foodItems_hotDogWithBun', 'foodItems.hotDogWithBunStringProperty' );
addToMapIfDefined( 'foodItems_hamburger', 'foodItems.hamburgerStringProperty' );
addToMapIfDefined( 'foodItems_quarterLbHamburger', 'foodItems.quarterLbHamburgerStringProperty' );
addToMapIfDefined( 'foodItems_largeFries', 'foodItems.largeFriesStringProperty' );
addToMapIfDefined( 'foodItems_saladWithDressing', 'foodItems.saladWithDressingStringProperty' );
addToMapIfDefined( 'foodItems_cupStrawberries', 'foodItems.cupStrawberriesStringProperty' );
addToMapIfDefined( 'foodItems_cupGrapefruit', 'foodItems.cupGrapefruitStringProperty' );
addToMapIfDefined( 'foodItems_apple', 'foodItems.appleStringProperty' );
addToMapIfDefined( 'foodItems_banana', 'foodItems.bananaStringProperty' );
addToMapIfDefined( 'foodItems_grapes', 'foodItems.grapesStringProperty' );
addToMapIfDefined( 'foodItems_cupYogurtLowFatPlain', 'foodItems.cupYogurtLowFatPlainStringProperty' );
addToMapIfDefined( 'foodItems_cupYogurtFlavored', 'foodItems.cupYogurtFlavoredStringProperty' );
addToMapIfDefined( 'foodItems_cupMilkWhole', 'foodItems.cupMilkWholeStringProperty' );
addToMapIfDefined( 'foodItems_cupMilk2', 'foodItems.cupMilk2StringProperty' );
addToMapIfDefined( 'foodItems_cupMilkSkim', 'foodItems.cupMilkSkimStringProperty' );
addToMapIfDefined( 'foodItems_appleJuice1Cup248G', 'foodItems.appleJuice1Cup248GStringProperty' );
addToMapIfDefined( 'foodItems_orangeJuiceNotConcentrate8Oz', 'foodItems.orangeJuiceNotConcentrate8OzStringProperty' );
addToMapIfDefined( 'foodItems_iceTea8FlOz', 'foodItems.iceTea8FlOzStringProperty' );
addToMapIfDefined( 'foodItems_lemonade8FlOz', 'foodItems.lemonade8FlOzStringProperty' );
addToMapIfDefined( 'foodItems_dietCola12Oz', 'foodItems.dietCola12OzStringProperty' );
addToMapIfDefined( 'foodItems_hotChocolateWholeMilk', 'foodItems.hotChocolateWholeMilkStringProperty' );
addToMapIfDefined( 'foodItems_latteWithWholeMilk', 'foodItems.latteWithWholeMilkStringProperty' );
addToMapIfDefined( 'foodItems_largeSugaryBlendedCoffeeDrink', 'foodItems.largeSugaryBlendedCoffeeDrinkStringProperty' );
addToMapIfDefined( 'foodItems_largeMilkshake', 'foodItems.largeMilkshakeStringProperty' );
addToMapIfDefined( 'foodItems_milkshake', 'foodItems.milkshakeStringProperty' );
addToMapIfDefined( 'foodItems_bakedPotatoInSkinWithSalt', 'foodItems.bakedPotatoInSkinWithSaltStringProperty' );
addToMapIfDefined( 'foodItems_halfCupSweetYellowCorn', 'foodItems.halfCupSweetYellowCornStringProperty' );
addToMapIfDefined( 'foodItems_halfCupCauliflowerBoiled', 'foodItems.halfCupCauliflowerBoiledStringProperty' );
addToMapIfDefined( 'foodItems_halfCupCarrotsChopped', 'foodItems.halfCupCarrotsChoppedStringProperty' );
addToMapIfDefined( 'foodItems_halfCupBroccoliCooked', 'foodItems.halfCupBroccoliCookedStringProperty' );
addToMapIfDefined( 'foodItems_servingHoneyHam100G', 'foodItems.servingHoneyHam100GStringProperty' );
addToMapIfDefined( 'foodItems_porkChop3Oz84G', 'foodItems.porkChop3Oz84GStringProperty' );
addToMapIfDefined( 'foodItems_chicken', 'foodItems.chickenStringProperty' );
addToMapIfDefined( 'foodItems_beef', 'foodItems.beefStringProperty' );
addToMapIfDefined( 'foodItems_setOf3SlicesOfBacon', 'foodItems.setOf3SlicesOfBaconStringProperty' );
addToMapIfDefined( 'foodItems_smallBagPotatoChips', 'foodItems.smallBagPotatoChipsStringProperty' );
addToMapIfDefined( 'foodItems_quarterCupMixedNutsWithPeanuts', 'foodItems.quarterCupMixedNutsWithPeanutsStringProperty' );
addToMapIfDefined( 'foodItems_servingCreamFilledCookies', 'foodItems.servingCreamFilledCookiesStringProperty' );
addToMapIfDefined( 'foodItems_candyBar', 'foodItems.candyBarStringProperty' );
addToMapIfDefined( 'foodItems_bananaSplit', 'foodItems.bananaSplitStringProperty' );
addToMapIfDefined( 'foodItems_riceCup', 'foodItems.riceCupStringProperty' );
addToMapIfDefined( 'foodItems_bowlOfPasta', 'foodItems.bowlOfPastaStringProperty' );
addToMapIfDefined( 'foodItems_sliceOfBread', 'foodItems.sliceOfBreadStringProperty' );
addToMapIfDefined( 'foodItems_bagel', 'foodItems.bagelStringProperty' );
addToMapIfDefined( 'foodItems_pancakes', 'foodItems.pancakesStringProperty' );
addToMapIfDefined( 'foodItems_syrup', 'foodItems.syrupStringProperty' );
addToMapIfDefined( 'foodItems_egg', 'foodItems.eggStringProperty' );
addToMapIfDefined( 'foodItems_butter', 'foodItems.butterStringProperty' );
addToMapIfDefined( 'foodItems_creamCheese', 'foodItems.creamCheeseStringProperty' );
addToMapIfDefined( 'exerciseItems_swimmingLaps', 'exerciseItems.swimmingLapsStringProperty' );
addToMapIfDefined( 'exerciseItems_basketball', 'exerciseItems.basketballStringProperty' );
addToMapIfDefined( 'exerciseItems_skateboarding', 'exerciseItems.skateboardingStringProperty' );
addToMapIfDefined( 'exerciseItems_bikingToWorkOrForLeisure10Mph', 'exerciseItems.bikingToWorkOrForLeisure10MphStringProperty' );
addToMapIfDefined( 'exerciseItems_jogging', 'exerciseItems.joggingStringProperty' );
addToMapIfDefined( 'exerciseItems_runningStairs', 'exerciseItems.runningStairsStringProperty' );
addToMapIfDefined( 'exerciseItems_running8Mph75MinMile', 'exerciseItems.running8Mph75MinMileStringProperty' );
addToMapIfDefined( 'exerciseItems_running10Mph6MinMile', 'exerciseItems.running10Mph6MinMileStringProperty' );
addToMapIfDefined( 'exerciseItems_backpacking', 'exerciseItems.backpackingStringProperty' );
addToMapIfDefined( 'exerciseItems_rockOrMountainClimbing', 'exerciseItems.rockOrMountainClimbingStringProperty' );
addToMapIfDefined( 'exerciseItems_snowshoeing', 'exerciseItems.snowshoeingStringProperty' );
addToMapIfDefined( 'exerciseItems_crossCountrySkiing', 'exerciseItems.crossCountrySkiingStringProperty' );
addToMapIfDefined( 'exerciseItems_downhillSkiingModerateEffort', 'exerciseItems.downhillSkiingModerateEffortStringProperty' );
addToMapIfDefined( 'exerciseItems_pilates', 'exerciseItems.pilatesStringProperty' );
addToMapIfDefined( 'exerciseItems_judoKarateTaeKwanDo', 'exerciseItems.judoKarateTaeKwanDoStringProperty' );
addToMapIfDefined( 'exerciseItems_surfing', 'exerciseItems.surfingStringProperty' );
addToMapIfDefined( 'exerciseItems_canoeing', 'exerciseItems.canoeingStringProperty' );
addToMapIfDefined( 'exerciseItems_kayaking', 'exerciseItems.kayakingStringProperty' );
addToMapIfDefined( 'exerciseItems_whitewaterRafting', 'exerciseItems.whitewaterRaftingStringProperty' );
addToMapIfDefined( 'exerciseItems_rowingCrew', 'exerciseItems.rowingCrewStringProperty' );
addToMapIfDefined( 'exerciseItems_horsebackRiding', 'exerciseItems.horsebackRidingStringProperty' );
addToMapIfDefined( 'exerciseItems_mountainOrBMXBiking', 'exerciseItems.mountainOrBMXBikingStringProperty' );
addToMapIfDefined( 'exerciseItems_roadBiking1015Mph', 'exerciseItems.roadBiking1015MphStringProperty' );
addToMapIfDefined( 'exerciseItems_roadBikingRacing16MphUp', 'exerciseItems.roadBikingRacing16MphUpStringProperty' );
addToMapIfDefined( 'exerciseItems_unicycling', 'exerciseItems.unicyclingStringProperty' );
addToMapIfDefined( 'exerciseItems_weightLiftingLightEffort', 'exerciseItems.weightLiftingLightEffortStringProperty' );
addToMapIfDefined( 'exerciseItems_weightLiftingBodyBuilding', 'exerciseItems.weightLiftingBodyBuildingStringProperty' );
addToMapIfDefined( 'exerciseItems_iceSkating', 'exerciseItems.iceSkatingStringProperty' );
addToMapIfDefined( 'exerciseItems_rollerBlading', 'exerciseItems.rollerBladingStringProperty' );
addToMapIfDefined( 'exerciseItems_bowling', 'exerciseItems.bowlingStringProperty' );
addToMapIfDefined( 'exerciseItems_beachVolleyball', 'exerciseItems.beachVolleyballStringProperty' );
addToMapIfDefined( 'exerciseItems_nonCompetitiveVolleyball', 'exerciseItems.nonCompetitiveVolleyballStringProperty' );
addToMapIfDefined( 'exerciseItems_playingCatchFootballOrBaseball', 'exerciseItems.playingCatchFootballOrBaseballStringProperty' );
addToMapIfDefined( 'exerciseItems_tennisSingles', 'exerciseItems.tennisSinglesStringProperty' );
addToMapIfDefined( 'exerciseItems_tennisDoubles', 'exerciseItems.tennisDoublesStringProperty' );
addToMapIfDefined( 'exerciseItems_tableTennis', 'exerciseItems.tableTennisStringProperty' );
addToMapIfDefined( 'exerciseItems_squash', 'exerciseItems.squashStringProperty' );
addToMapIfDefined( 'exerciseItems_soccer', 'exerciseItems.soccerStringProperty' );
addToMapIfDefined( 'exerciseItems_lacrosse', 'exerciseItems.lacrosseStringProperty' );
addToMapIfDefined( 'exerciseItems_ultimateFrisbee', 'exerciseItems.ultimateFrisbeeStringProperty' );
addToMapIfDefined( 'exerciseItems_hockeyIceOrField', 'exerciseItems.hockeyIceOrFieldStringProperty' );
addToMapIfDefined( 'exerciseItems_walkingForPleasureLikeOnABreak', 'exerciseItems.walkingForPleasureLikeOnABreakStringProperty' );
addToMapIfDefined( 'exerciseItems_pushingAStrollerWithAKid', 'exerciseItems.pushingAStrollerWithAKidStringProperty' );
addToMapIfDefined( 'exerciseItems_mowingLawn', 'exerciseItems.mowingLawnStringProperty' );
addToMapIfDefined( 'exerciseItems_gardening', 'exerciseItems.gardeningStringProperty' );
addToMapIfDefined( 'exerciseItems_vacuuming', 'exerciseItems.vacuumingStringProperty' );
addToMapIfDefined( 'exerciseItems_jumpingRope', 'exerciseItems.jumpingRopeStringProperty' );
addToMapIfDefined( 'exerciseItems_dancing', 'exerciseItems.dancingStringProperty' );
addToMapIfDefined( 'exerciseItems_dancingFastDiscoFolkLineDancing', 'exerciseItems.dancingFastDiscoFolkLineDancingStringProperty' );
addToMapIfDefined( 'exerciseItems_dancingBalletOrModern', 'exerciseItems.dancingBalletOrModernStringProperty' );
addToMapIfDefined( 'exerciseItems_fishingInStreamFlyfishing', 'exerciseItems.fishingInStreamFlyfishingStringProperty' );
addToMapIfDefined( 'exerciseItems_golfWalkingAndCarryingClubs', 'exerciseItems.golfWalkingAndCarryingClubsStringProperty' );
addToMapIfDefined( 'exerciseItems_golfUsingPowerCart', 'exerciseItems.golfUsingPowerCartStringProperty' );
addToMapIfDefined( 'exerciseItems_drivingHeavyTruck', 'exerciseItems.drivingHeavyTruckStringProperty' );
addToMapIfDefined( 'healthNote_title', 'healthNote.titleStringProperty' );
addToMapIfDefined( 'healthNote_body', 'healthNote.bodyStringProperty' );
addToMapIfDefined( 'healthWarnings_starvingTitle', 'healthWarnings.starvingTitleStringProperty' );
addToMapIfDefined( 'healthWarnings_starvingBody', 'healthWarnings.starvingBodyStringProperty' );
addToMapIfDefined( 'healthWarnings_stoppedTitle', 'healthWarnings.stoppedTitleStringProperty' );
addToMapIfDefined( 'healthWarnings_stoppedBody', 'healthWarnings.stoppedBodyStringProperty' );
addToMapIfDefined( 'a11y_screenSummary_playArea', 'a11y.screenSummary.playAreaStringProperty' );
addToMapIfDefined( 'a11y_screenSummary_controlArea', 'a11y.screenSummary.controlAreaStringProperty' );
addToMapIfDefined( 'a11y_screenSummary_currentDetails', 'a11y.screenSummary.currentDetailsStringProperty' );
addToMapIfDefined( 'a11y_screenSummary_interactionHint', 'a11y.screenSummary.interactionHintStringProperty' );
addToMapIfDefined( 'a11y_stepperControls_decrease', 'a11y.stepperControls.decreaseStringProperty' );
addToMapIfDefined( 'a11y_stepperControls_increase', 'a11y.stepperControls.increaseStringProperty' );
addToMapIfDefined( 'a11y_intakeControls_clearFood', 'a11y.intakeControls.clearFoodStringProperty' );
addToMapIfDefined( 'a11y_intakeControls_clearExercise', 'a11y.intakeControls.clearExerciseStringProperty' );
addToMapIfDefined( 'a11y_preferences_displayUnits_accessibleName', 'a11y.preferences.displayUnits.accessibleNameStringProperty' );
addToMapIfDefined( 'a11y_preferences_displayUnits_accessibleHelpText', 'a11y.preferences.displayUnits.accessibleHelpTextStringProperty' );
addToMapIfDefined( 'a11y_itemCalories', 'a11y.itemCaloriesStringProperty' );

// A function that creates contents for a new Fluent file, which will be needed if any string changes.
const createFluentFile = (): string => {
  let ftl = '';
  for (const [key, stringProperty] of fluentKeyToStringPropertyMap.entries()) {
    ftl += `${key} = ${FluentLibrary.formatMultilineForFtl( stringProperty.value )}\n`;
  }
  return ftl;
};

const fluentSupport = new FluentContainer( createFluentFile, Array.from(fluentKeyToStringPropertyMap.values()) );

const EatingExerciseAndEnergyFluent = {
  "eating-exercise-and-energy": {
    titleStringProperty: _.get( EatingExerciseAndEnergyStrings, 'eating-exercise-and-energy.titleStringProperty' )
  },
  dashboard: {
    titleStringProperty: _.get( EatingExerciseAndEnergyStrings, 'dashboard.titleStringProperty' )
  },
  readout: {
    elapsedTimeStringProperty: _.get( EatingExerciseAndEnergyStrings, 'readout.elapsedTimeStringProperty' ),
    ageStringProperty: _.get( EatingExerciseAndEnergyStrings, 'readout.ageStringProperty' ),
    heightStringProperty: _.get( EatingExerciseAndEnergyStrings, 'readout.heightStringProperty' ),
    massStringProperty: _.get( EatingExerciseAndEnergyStrings, 'readout.massStringProperty' ),
    bmiStringProperty: _.get( EatingExerciseAndEnergyStrings, 'readout.bmiStringProperty' ),
    bodyFatStringProperty: _.get( EatingExerciseAndEnergyStrings, 'readout.bodyFatStringProperty' ),
    bmrStringProperty: _.get( EatingExerciseAndEnergyStrings, 'readout.bmrStringProperty' ),
    intakeStringProperty: _.get( EatingExerciseAndEnergyStrings, 'readout.intakeStringProperty' ),
    burnStringProperty: _.get( EatingExerciseAndEnergyStrings, 'readout.burnStringProperty' ),
    balanceStringProperty: _.get( EatingExerciseAndEnergyStrings, 'readout.balanceStringProperty' ),
    heartHealthStringProperty: _.get( EatingExerciseAndEnergyStrings, 'readout.heartHealthStringProperty' ),
    daysPatternStringProperty: _.get( EatingExerciseAndEnergyStrings, 'readout.daysPatternStringProperty' ),
    monthsPatternStringProperty: _.get( EatingExerciseAndEnergyStrings, 'readout.monthsPatternStringProperty' ),
    elapsedYearsPatternStringProperty: _.get( EatingExerciseAndEnergyStrings, 'readout.elapsedYearsPatternStringProperty' ),
    yearsPatternStringProperty: _.get( EatingExerciseAndEnergyStrings, 'readout.yearsPatternStringProperty' ),
    centimetersPatternStringProperty: _.get( EatingExerciseAndEnergyStrings, 'readout.centimetersPatternStringProperty' ),
    feetInchesPatternStringProperty: _.get( EatingExerciseAndEnergyStrings, 'readout.feetInchesPatternStringProperty' ),
    kilogramsPatternStringProperty: _.get( EatingExerciseAndEnergyStrings, 'readout.kilogramsPatternStringProperty' ),
    poundsPatternStringProperty: _.get( EatingExerciseAndEnergyStrings, 'readout.poundsPatternStringProperty' ),
    percentPatternStringProperty: _.get( EatingExerciseAndEnergyStrings, 'readout.percentPatternStringProperty' ),
    caloriesPerDayPatternStringProperty: _.get( EatingExerciseAndEnergyStrings, 'readout.caloriesPerDayPatternStringProperty' ),
    plainNumberPatternStringProperty: _.get( EatingExerciseAndEnergyStrings, 'readout.plainNumberPatternStringProperty' )
  },
  controls: {
    startStringProperty: _.get( EatingExerciseAndEnergyStrings, 'controls.startStringProperty' ),
    pauseStringProperty: _.get( EatingExerciseAndEnergyStrings, 'controls.pauseStringProperty' ),
    nextMonthStringProperty: _.get( EatingExerciseAndEnergyStrings, 'controls.nextMonthStringProperty' ),
    speedStringProperty: _.get( EatingExerciseAndEnergyStrings, 'controls.speedStringProperty' ),
    daysPerSecondPatternStringProperty: _.get( EatingExerciseAndEnergyStrings, 'controls.daysPerSecondPatternStringProperty' )
  },
  bodyControls: {
    titleStringProperty: _.get( EatingExerciseAndEnergyStrings, 'bodyControls.titleStringProperty' ),
    metricStringProperty: _.get( EatingExerciseAndEnergyStrings, 'bodyControls.metricStringProperty' ),
    englishStringProperty: _.get( EatingExerciseAndEnergyStrings, 'bodyControls.englishStringProperty' ),
    genderStringProperty: _.get( EatingExerciseAndEnergyStrings, 'bodyControls.genderStringProperty' ),
    femaleStringProperty: _.get( EatingExerciseAndEnergyStrings, 'bodyControls.femaleStringProperty' ),
    maleStringProperty: _.get( EatingExerciseAndEnergyStrings, 'bodyControls.maleStringProperty' ),
    lifestyleStringProperty: _.get( EatingExerciseAndEnergyStrings, 'bodyControls.lifestyleStringProperty' ),
    sedentaryStringProperty: _.get( EatingExerciseAndEnergyStrings, 'bodyControls.sedentaryStringProperty' ),
    moderateStringProperty: _.get( EatingExerciseAndEnergyStrings, 'bodyControls.moderateStringProperty' ),
    activeStringProperty: _.get( EatingExerciseAndEnergyStrings, 'bodyControls.activeStringProperty' ),
    autoBodyFatStringProperty: _.get( EatingExerciseAndEnergyStrings, 'bodyControls.autoBodyFatStringProperty' )
  },
  preferences: {
    displayUnitsStringProperty: _.get( EatingExerciseAndEnergyStrings, 'preferences.displayUnitsStringProperty' )
  },
  graph: {
    weightTrendStringProperty: _.get( EatingExerciseAndEnergyStrings, 'graph.weightTrendStringProperty' ),
    calorieTrendStringProperty: _.get( EatingExerciseAndEnergyStrings, 'graph.calorieTrendStringProperty' )
  },
  keyboardHelpDialog: {
    foodAndActivityStringProperty: _.get( EatingExerciseAndEnergyStrings, 'keyboardHelpDialog.foodAndActivityStringProperty' ),
    addFoodOrActivityItemStringProperty: _.get( EatingExerciseAndEnergyStrings, 'keyboardHelpDialog.addFoodOrActivityItemStringProperty' ),
    removeFoodOrActivityItemStringProperty: _.get( EatingExerciseAndEnergyStrings, 'keyboardHelpDialog.removeFoodOrActivityItemStringProperty' )
  },
  intakeControls: {
    titleStringProperty: _.get( EatingExerciseAndEnergyStrings, 'intakeControls.titleStringProperty' ),
    itemSelectionTitleStringProperty: _.get( EatingExerciseAndEnergyStrings, 'intakeControls.itemSelectionTitleStringProperty' ),
    editStringProperty: _.get( EatingExerciseAndEnergyStrings, 'intakeControls.editStringProperty' ),
    clearStringProperty: _.get( EatingExerciseAndEnergyStrings, 'intakeControls.clearStringProperty' ),
    valuesStringProperty: _.get( EatingExerciseAndEnergyStrings, 'intakeControls.valuesStringProperty' ),
    perServingStringProperty: _.get( EatingExerciseAndEnergyStrings, 'intakeControls.perServingStringProperty' ),
    per15MinutesStringProperty: _.get( EatingExerciseAndEnergyStrings, 'intakeControls.per15MinutesStringProperty' ),
    caloriesPatternStringProperty: _.get( EatingExerciseAndEnergyStrings, 'intakeControls.caloriesPatternStringProperty' ),
    percentLegendPatternStringProperty: _.get( EatingExerciseAndEnergyStrings, 'intakeControls.percentLegendPatternStringProperty' ),
    foodBarStringProperty: _.get( EatingExerciseAndEnergyStrings, 'intakeControls.foodBarStringProperty' ),
    energyBarStringProperty: _.get( EatingExerciseAndEnergyStrings, 'intakeControls.energyBarStringProperty' ),
    activityBarStringProperty: _.get( EatingExerciseAndEnergyStrings, 'intakeControls.activityBarStringProperty' ),
    energyUseStringProperty: _.get( EatingExerciseAndEnergyStrings, 'intakeControls.energyUseStringProperty' ),
    restingMetabolismStringProperty: _.get( EatingExerciseAndEnergyStrings, 'intakeControls.restingMetabolismStringProperty' ),
    lifestyleStringProperty: _.get( EatingExerciseAndEnergyStrings, 'intakeControls.lifestyleStringProperty' ),
    lipidsStringProperty: _.get( EatingExerciseAndEnergyStrings, 'intakeControls.lipidsStringProperty' ),
    carbohydratesStringProperty: _.get( EatingExerciseAndEnergyStrings, 'intakeControls.carbohydratesStringProperty' ),
    proteinStringProperty: _.get( EatingExerciseAndEnergyStrings, 'intakeControls.proteinStringProperty' ),
    exerciseStringProperty: _.get( EatingExerciseAndEnergyStrings, 'intakeControls.exerciseStringProperty' ),
    foodItemStringProperty: _.get( EatingExerciseAndEnergyStrings, 'intakeControls.foodItemStringProperty' ),
    exerciseItemStringProperty: _.get( EatingExerciseAndEnergyStrings, 'intakeControls.exerciseItemStringProperty' ),
    presetsStringProperty: _.get( EatingExerciseAndEnergyStrings, 'intakeControls.presetsStringProperty' ),
    pizzaStringProperty: _.get( EatingExerciseAndEnergyStrings, 'intakeControls.pizzaStringProperty' ),
    fastMealStringProperty: _.get( EatingExerciseAndEnergyStrings, 'intakeControls.fastMealStringProperty' ),
    jogStringProperty: _.get( EatingExerciseAndEnergyStrings, 'intakeControls.jogStringProperty' ),
    runStringProperty: _.get( EatingExerciseAndEnergyStrings, 'intakeControls.runStringProperty' )
  },
  foodItems: {
    balancedDailyDietStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.balancedDailyDietStringProperty' ),
    servingCornFlakesStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.servingCornFlakesStringProperty' ),
    cola12OzStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.cola12OzStringProperty' ),
    slicePizzaStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.slicePizzaStringProperty' ),
    largeFastFoodValueMealStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.largeFastFoodValueMealStringProperty' ),
    tacoStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.tacoStringProperty' ),
    burritoStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.burritoStringProperty' ),
    entirePizza12StringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.entirePizza12StringProperty' ),
    peanutButterAndJellySandwichStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.peanutButterAndJellySandwichStringProperty' ),
    subSandwichStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.subSandwichStringProperty' ),
    hotDogWithBunStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.hotDogWithBunStringProperty' ),
    hamburgerStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.hamburgerStringProperty' ),
    quarterLbHamburgerStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.quarterLbHamburgerStringProperty' ),
    largeFriesStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.largeFriesStringProperty' ),
    saladWithDressingStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.saladWithDressingStringProperty' ),
    cupStrawberriesStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.cupStrawberriesStringProperty' ),
    cupGrapefruitStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.cupGrapefruitStringProperty' ),
    appleStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.appleStringProperty' ),
    bananaStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.bananaStringProperty' ),
    grapesStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.grapesStringProperty' ),
    cupYogurtLowFatPlainStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.cupYogurtLowFatPlainStringProperty' ),
    cupYogurtFlavoredStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.cupYogurtFlavoredStringProperty' ),
    cupMilkWholeStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.cupMilkWholeStringProperty' ),
    cupMilk2StringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.cupMilk2StringProperty' ),
    cupMilkSkimStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.cupMilkSkimStringProperty' ),
    appleJuice1Cup248GStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.appleJuice1Cup248GStringProperty' ),
    orangeJuiceNotConcentrate8OzStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.orangeJuiceNotConcentrate8OzStringProperty' ),
    iceTea8FlOzStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.iceTea8FlOzStringProperty' ),
    lemonade8FlOzStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.lemonade8FlOzStringProperty' ),
    dietCola12OzStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.dietCola12OzStringProperty' ),
    hotChocolateWholeMilkStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.hotChocolateWholeMilkStringProperty' ),
    latteWithWholeMilkStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.latteWithWholeMilkStringProperty' ),
    largeSugaryBlendedCoffeeDrinkStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.largeSugaryBlendedCoffeeDrinkStringProperty' ),
    largeMilkshakeStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.largeMilkshakeStringProperty' ),
    milkshakeStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.milkshakeStringProperty' ),
    bakedPotatoInSkinWithSaltStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.bakedPotatoInSkinWithSaltStringProperty' ),
    halfCupSweetYellowCornStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.halfCupSweetYellowCornStringProperty' ),
    halfCupCauliflowerBoiledStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.halfCupCauliflowerBoiledStringProperty' ),
    halfCupCarrotsChoppedStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.halfCupCarrotsChoppedStringProperty' ),
    halfCupBroccoliCookedStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.halfCupBroccoliCookedStringProperty' ),
    servingHoneyHam100GStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.servingHoneyHam100GStringProperty' ),
    porkChop3Oz84GStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.porkChop3Oz84GStringProperty' ),
    chickenStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.chickenStringProperty' ),
    beefStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.beefStringProperty' ),
    setOf3SlicesOfBaconStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.setOf3SlicesOfBaconStringProperty' ),
    smallBagPotatoChipsStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.smallBagPotatoChipsStringProperty' ),
    quarterCupMixedNutsWithPeanutsStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.quarterCupMixedNutsWithPeanutsStringProperty' ),
    servingCreamFilledCookiesStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.servingCreamFilledCookiesStringProperty' ),
    candyBarStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.candyBarStringProperty' ),
    bananaSplitStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.bananaSplitStringProperty' ),
    riceCupStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.riceCupStringProperty' ),
    bowlOfPastaStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.bowlOfPastaStringProperty' ),
    sliceOfBreadStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.sliceOfBreadStringProperty' ),
    bagelStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.bagelStringProperty' ),
    pancakesStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.pancakesStringProperty' ),
    syrupStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.syrupStringProperty' ),
    eggStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.eggStringProperty' ),
    butterStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.butterStringProperty' ),
    creamCheeseStringProperty: _.get( EatingExerciseAndEnergyStrings, 'foodItems.creamCheeseStringProperty' )
  },
  exerciseItems: {
    swimmingLapsStringProperty: _.get( EatingExerciseAndEnergyStrings, 'exerciseItems.swimmingLapsStringProperty' ),
    basketballStringProperty: _.get( EatingExerciseAndEnergyStrings, 'exerciseItems.basketballStringProperty' ),
    skateboardingStringProperty: _.get( EatingExerciseAndEnergyStrings, 'exerciseItems.skateboardingStringProperty' ),
    bikingToWorkOrForLeisure10MphStringProperty: _.get( EatingExerciseAndEnergyStrings, 'exerciseItems.bikingToWorkOrForLeisure10MphStringProperty' ),
    joggingStringProperty: _.get( EatingExerciseAndEnergyStrings, 'exerciseItems.joggingStringProperty' ),
    runningStairsStringProperty: _.get( EatingExerciseAndEnergyStrings, 'exerciseItems.runningStairsStringProperty' ),
    running8Mph75MinMileStringProperty: _.get( EatingExerciseAndEnergyStrings, 'exerciseItems.running8Mph75MinMileStringProperty' ),
    running10Mph6MinMileStringProperty: _.get( EatingExerciseAndEnergyStrings, 'exerciseItems.running10Mph6MinMileStringProperty' ),
    backpackingStringProperty: _.get( EatingExerciseAndEnergyStrings, 'exerciseItems.backpackingStringProperty' ),
    rockOrMountainClimbingStringProperty: _.get( EatingExerciseAndEnergyStrings, 'exerciseItems.rockOrMountainClimbingStringProperty' ),
    snowshoeingStringProperty: _.get( EatingExerciseAndEnergyStrings, 'exerciseItems.snowshoeingStringProperty' ),
    crossCountrySkiingStringProperty: _.get( EatingExerciseAndEnergyStrings, 'exerciseItems.crossCountrySkiingStringProperty' ),
    downhillSkiingModerateEffortStringProperty: _.get( EatingExerciseAndEnergyStrings, 'exerciseItems.downhillSkiingModerateEffortStringProperty' ),
    pilatesStringProperty: _.get( EatingExerciseAndEnergyStrings, 'exerciseItems.pilatesStringProperty' ),
    judoKarateTaeKwanDoStringProperty: _.get( EatingExerciseAndEnergyStrings, 'exerciseItems.judoKarateTaeKwanDoStringProperty' ),
    surfingStringProperty: _.get( EatingExerciseAndEnergyStrings, 'exerciseItems.surfingStringProperty' ),
    canoeingStringProperty: _.get( EatingExerciseAndEnergyStrings, 'exerciseItems.canoeingStringProperty' ),
    kayakingStringProperty: _.get( EatingExerciseAndEnergyStrings, 'exerciseItems.kayakingStringProperty' ),
    whitewaterRaftingStringProperty: _.get( EatingExerciseAndEnergyStrings, 'exerciseItems.whitewaterRaftingStringProperty' ),
    rowingCrewStringProperty: _.get( EatingExerciseAndEnergyStrings, 'exerciseItems.rowingCrewStringProperty' ),
    horsebackRidingStringProperty: _.get( EatingExerciseAndEnergyStrings, 'exerciseItems.horsebackRidingStringProperty' ),
    mountainOrBMXBikingStringProperty: _.get( EatingExerciseAndEnergyStrings, 'exerciseItems.mountainOrBMXBikingStringProperty' ),
    roadBiking1015MphStringProperty: _.get( EatingExerciseAndEnergyStrings, 'exerciseItems.roadBiking1015MphStringProperty' ),
    roadBikingRacing16MphUpStringProperty: _.get( EatingExerciseAndEnergyStrings, 'exerciseItems.roadBikingRacing16MphUpStringProperty' ),
    unicyclingStringProperty: _.get( EatingExerciseAndEnergyStrings, 'exerciseItems.unicyclingStringProperty' ),
    weightLiftingLightEffortStringProperty: _.get( EatingExerciseAndEnergyStrings, 'exerciseItems.weightLiftingLightEffortStringProperty' ),
    weightLiftingBodyBuildingStringProperty: _.get( EatingExerciseAndEnergyStrings, 'exerciseItems.weightLiftingBodyBuildingStringProperty' ),
    iceSkatingStringProperty: _.get( EatingExerciseAndEnergyStrings, 'exerciseItems.iceSkatingStringProperty' ),
    rollerBladingStringProperty: _.get( EatingExerciseAndEnergyStrings, 'exerciseItems.rollerBladingStringProperty' ),
    bowlingStringProperty: _.get( EatingExerciseAndEnergyStrings, 'exerciseItems.bowlingStringProperty' ),
    beachVolleyballStringProperty: _.get( EatingExerciseAndEnergyStrings, 'exerciseItems.beachVolleyballStringProperty' ),
    nonCompetitiveVolleyballStringProperty: _.get( EatingExerciseAndEnergyStrings, 'exerciseItems.nonCompetitiveVolleyballStringProperty' ),
    playingCatchFootballOrBaseballStringProperty: _.get( EatingExerciseAndEnergyStrings, 'exerciseItems.playingCatchFootballOrBaseballStringProperty' ),
    tennisSinglesStringProperty: _.get( EatingExerciseAndEnergyStrings, 'exerciseItems.tennisSinglesStringProperty' ),
    tennisDoublesStringProperty: _.get( EatingExerciseAndEnergyStrings, 'exerciseItems.tennisDoublesStringProperty' ),
    tableTennisStringProperty: _.get( EatingExerciseAndEnergyStrings, 'exerciseItems.tableTennisStringProperty' ),
    squashStringProperty: _.get( EatingExerciseAndEnergyStrings, 'exerciseItems.squashStringProperty' ),
    soccerStringProperty: _.get( EatingExerciseAndEnergyStrings, 'exerciseItems.soccerStringProperty' ),
    lacrosseStringProperty: _.get( EatingExerciseAndEnergyStrings, 'exerciseItems.lacrosseStringProperty' ),
    ultimateFrisbeeStringProperty: _.get( EatingExerciseAndEnergyStrings, 'exerciseItems.ultimateFrisbeeStringProperty' ),
    hockeyIceOrFieldStringProperty: _.get( EatingExerciseAndEnergyStrings, 'exerciseItems.hockeyIceOrFieldStringProperty' ),
    walkingForPleasureLikeOnABreakStringProperty: _.get( EatingExerciseAndEnergyStrings, 'exerciseItems.walkingForPleasureLikeOnABreakStringProperty' ),
    pushingAStrollerWithAKidStringProperty: _.get( EatingExerciseAndEnergyStrings, 'exerciseItems.pushingAStrollerWithAKidStringProperty' ),
    mowingLawnStringProperty: _.get( EatingExerciseAndEnergyStrings, 'exerciseItems.mowingLawnStringProperty' ),
    gardeningStringProperty: _.get( EatingExerciseAndEnergyStrings, 'exerciseItems.gardeningStringProperty' ),
    vacuumingStringProperty: _.get( EatingExerciseAndEnergyStrings, 'exerciseItems.vacuumingStringProperty' ),
    jumpingRopeStringProperty: _.get( EatingExerciseAndEnergyStrings, 'exerciseItems.jumpingRopeStringProperty' ),
    dancingStringProperty: _.get( EatingExerciseAndEnergyStrings, 'exerciseItems.dancingStringProperty' ),
    dancingFastDiscoFolkLineDancingStringProperty: _.get( EatingExerciseAndEnergyStrings, 'exerciseItems.dancingFastDiscoFolkLineDancingStringProperty' ),
    dancingBalletOrModernStringProperty: _.get( EatingExerciseAndEnergyStrings, 'exerciseItems.dancingBalletOrModernStringProperty' ),
    fishingInStreamFlyfishingStringProperty: _.get( EatingExerciseAndEnergyStrings, 'exerciseItems.fishingInStreamFlyfishingStringProperty' ),
    golfWalkingAndCarryingClubsStringProperty: _.get( EatingExerciseAndEnergyStrings, 'exerciseItems.golfWalkingAndCarryingClubsStringProperty' ),
    golfUsingPowerCartStringProperty: _.get( EatingExerciseAndEnergyStrings, 'exerciseItems.golfUsingPowerCartStringProperty' ),
    drivingHeavyTruckStringProperty: _.get( EatingExerciseAndEnergyStrings, 'exerciseItems.drivingHeavyTruckStringProperty' )
  },
  healthNote: {
    titleStringProperty: _.get( EatingExerciseAndEnergyStrings, 'healthNote.titleStringProperty' ),
    bodyStringProperty: _.get( EatingExerciseAndEnergyStrings, 'healthNote.bodyStringProperty' )
  },
  healthWarnings: {
    starvingTitleStringProperty: _.get( EatingExerciseAndEnergyStrings, 'healthWarnings.starvingTitleStringProperty' ),
    starvingBodyStringProperty: _.get( EatingExerciseAndEnergyStrings, 'healthWarnings.starvingBodyStringProperty' ),
    stoppedTitleStringProperty: _.get( EatingExerciseAndEnergyStrings, 'healthWarnings.stoppedTitleStringProperty' ),
    stoppedBodyStringProperty: _.get( EatingExerciseAndEnergyStrings, 'healthWarnings.stoppedBodyStringProperty' )
  },
  a11y: {
    screenSummary: {
      playAreaStringProperty: new FluentConstant( fluentSupport.bundleProperty, 'a11y_screenSummary_playArea', _.get( EatingExerciseAndEnergyStrings, 'a11y.screenSummary.playAreaStringProperty' ) ),
      controlAreaStringProperty: new FluentConstant( fluentSupport.bundleProperty, 'a11y_screenSummary_controlArea', _.get( EatingExerciseAndEnergyStrings, 'a11y.screenSummary.controlAreaStringProperty' ) ),
      currentDetails: new FluentPattern<{ age: FluentVariable, balance: FluentVariable, bmi: FluentVariable, bmr: FluentVariable, bodyFat: FluentVariable, burn: FluentVariable, elapsedTime: FluentVariable, heartHealth: FluentVariable, intake: FluentVariable, weight: FluentVariable }>( fluentSupport.bundleProperty, 'a11y_screenSummary_currentDetails', _.get( EatingExerciseAndEnergyStrings, 'a11y.screenSummary.currentDetailsStringProperty' ), [{"name":"age"},{"name":"balance"},{"name":"bmi"},{"name":"bmr"},{"name":"bodyFat"},{"name":"burn"},{"name":"elapsedTime"},{"name":"heartHealth"},{"name":"intake"},{"name":"weight"}] ),
      interactionHintStringProperty: new FluentConstant( fluentSupport.bundleProperty, 'a11y_screenSummary_interactionHint', _.get( EatingExerciseAndEnergyStrings, 'a11y.screenSummary.interactionHintStringProperty' ) )
    },
    stepperControls: {
      decrease: new FluentPattern<{ label: FluentVariable }>( fluentSupport.bundleProperty, 'a11y_stepperControls_decrease', _.get( EatingExerciseAndEnergyStrings, 'a11y.stepperControls.decreaseStringProperty' ), [{"name":"label"}] ),
      increase: new FluentPattern<{ label: FluentVariable }>( fluentSupport.bundleProperty, 'a11y_stepperControls_increase', _.get( EatingExerciseAndEnergyStrings, 'a11y.stepperControls.increaseStringProperty' ), [{"name":"label"}] )
    },
    intakeControls: {
      clearFoodStringProperty: new FluentConstant( fluentSupport.bundleProperty, 'a11y_intakeControls_clearFood', _.get( EatingExerciseAndEnergyStrings, 'a11y.intakeControls.clearFoodStringProperty' ) ),
      clearExerciseStringProperty: new FluentConstant( fluentSupport.bundleProperty, 'a11y_intakeControls_clearExercise', _.get( EatingExerciseAndEnergyStrings, 'a11y.intakeControls.clearExerciseStringProperty' ) )
    },
    preferences: {
      displayUnits: {
        accessibleNameStringProperty: new FluentConstant( fluentSupport.bundleProperty, 'a11y_preferences_displayUnits_accessibleName', _.get( EatingExerciseAndEnergyStrings, 'a11y.preferences.displayUnits.accessibleNameStringProperty' ) ),
        accessibleHelpTextStringProperty: new FluentConstant( fluentSupport.bundleProperty, 'a11y_preferences_displayUnits_accessibleHelpText', _.get( EatingExerciseAndEnergyStrings, 'a11y.preferences.displayUnits.accessibleHelpTextStringProperty' ) )
      }
    },
    itemCalories: new FluentPattern<{ calories: FluentVariable, label: FluentVariable }>( fluentSupport.bundleProperty, 'a11y_itemCalories', _.get( EatingExerciseAndEnergyStrings, 'a11y.itemCaloriesStringProperty' ), [{"name":"calories"},{"name":"label"}] )
  }
};

export default EatingExerciseAndEnergyFluent;

eatingExerciseAndEnergy.register('EatingExerciseAndEnergyFluent', EatingExerciseAndEnergyFluent);
