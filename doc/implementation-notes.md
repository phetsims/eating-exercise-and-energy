# Eating, Exercise, and Energy Implementation Notes

This sim is an HTML5 port of PhET's legacy Java Eating & Exercise simulation. The Java sim is treated as a reference for learning goals, data, and model behavior, not as a class-by-class architecture to preserve.

## Architecture

The port uses one screen with a screen model and a screen view:

- `js/eating-exercise-and-energy/model/EatingExerciseAndEnergyModel.js`
- `js/common/model/HumanModel.js`
- `js/eating-exercise-and-energy/view/EatingExerciseAndEnergyScreenView.js`

The screen model owns the full daily food/activity editor state and delegates body-energy calculations to `HumanModel`. View code reads Axon Properties and DerivedProperties instead of duplicating model state.

## Data

Legacy food and exercise tables are represented as structured JavaScript objects in `EatingExerciseAndEnergyData.js`. User-visible item labels live in the sim string files, not in the data table.

## UI

The main screen is organized into:

- body-energy dashboard and health note
- bamboo weight and calorie trend charts
- daily calorie controls
- Food & Activity editor dialog
- time controls
- body settings

The Food & Activity editor uses vertical carousels around adjacent food, burned-energy, and activity bars. Dragging from a carousel previews the bar segment and highlights the drop zone before adding the item.

## Preferences

Display units are a simulation preference. The model remains in SI units; the preference only changes height and weight readouts and controls.

## Accessibility

The first accessibility layer includes screen summary content, PDOM ordering, accessible names for compact steppers, and keyboard-help content for sliders, spinners, buttons, dialogs, and Reset All. More detailed object/context responses can be layered on later without changing the model contract.

## Verification

Use the monorepo check from the repository root:

```bash
npm run check
```

Use the local PhET server for browser smoke testing:

```text
http://localhost/eating-exercise-and-energy/eating-exercise-and-energy_en.html?dev
```

For layout-sensitive changes, also smoke test with dynamic strings:

```text
http://localhost/eating-exercise-and-energy/eating-exercise-and-energy_en.html?dev&stringTest=dynamic
```
