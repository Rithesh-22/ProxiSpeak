
# ProxiSpeak Coordinate Format

## Avatar coordinates

Each avatar position uses:

{ x: number, y: number }

- x: horizontal position
- y: vertical position
- Both values must be finite numbers.

## Distance

Distance is calculated using:

Math.hypot(x2 - x1, y2 - y1)

## Proximity radius

The proposed radius is 168 coordinate units.

Avatars at or below this distance are considered within proximity.

The radius is provisional until confirmed against the frontend's actual coordinate system.

## Validation

Missing, non-numeric, NaN, and infinite coordinates are rejected.

## Integration

The frontend, backend, and audio engine must agree on the coordinate format and coordinate scale.
