# Eating, Exercise, and Energy Model

This document summarizes the HTML5 body-energy model and its relationship to the legacy Java simulation.

## State

The screen model owns the simulation clock, the body model, structured food data, structured exercise data, and the additive daily food/activity item lists. The body model stores physical state in SI units and exposes user-facing readouts through derived Properties.

Primary body state:

- physiology
- activity level
- age
- height
- mass
- fat mass percent
- daily lipid, carbohydrate, protein, and exercise calories
- elapsed simulation time
- alive/starving state

Derived state:

- fat mass and lean body mass
- BMI
- basal metabolic rate
- lifestyle activity burn
- total intake
- total burn
- calorie balance
- heart strain, heart strength, and heart health

## Energy Balance

Basal metabolic rate follows the legacy Java RDEE relationship:

```text
BMR = 392 + 21.8 * leanBodyMassKg
```

Total daily burn is BMR plus lifestyle activity calories plus explicit exercise calories. Total daily intake is fats, carbohydrates, and protein calories. The calorie balance drives long-term mass and body-fat changes when the clock advances.

When the body is in calorie surplus, excess calories increase fat mass. When the body is in calorie deficit, the model removes both fat mass and lean mass, with the fat-loss fraction depending on the current body composition and gender-specific legacy constants. Exercise can increase lean mass toward a gender-specific reference lean mass.

## Food And Activity Items

Food items are structured data ported from the Java `foods.properties` table. Adding a food item contributes calories through its grams of fat, carbohydrates, and protein. The additive food list sets the daily macro calorie Properties so the numeric Daily Calories controls and item-based editor use the same model.

Exercise items are structured data ported from the Java `exercise.properties` table. Adding an activity contributes reference calories per hour. Weight-dependent activities scale by current body mass relative to the legacy 160 lb reference body.

## Starvation

The body is starving when body-fat percentage is below the gender-specific legacy starvation threshold. Sustained starvation increments a timer; after 60 simulated days the body is marked not alive and the simulation clock stops.

## History

The model records weekly history samples for weight, intake, and burn. The view uses these samples to drive the bamboo trend charts.
