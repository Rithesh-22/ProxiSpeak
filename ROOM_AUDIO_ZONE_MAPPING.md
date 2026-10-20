# ProxiSpeak — Room-to-Audio-Zone Mapping

## 1. Purpose

This document defines the proposed mapping between ProxiSpeak virtual rooms and audio zones. It also describes how avatar proximity should be evaluated.

## 2. Coordinate System

- Virtual coordinate space: 1200 × 720 units.
- Position format: `{ x, y }`.
- X increases to the right.
- Y increases downward.
- Proximity radius: 168 units, as confirmed by the team lead.

## 3. Room-to-Audio-Zone Mapping

| Virtual Room | Proposed Zone ID | Intended Purpose |
|---|---|---|
| Studio | `studio` | General conversations |
| Ideation Lab | `ideation-lab` | Collaborative discussions and brainstorming |
| Focus Lounge | `focus-lounge` | Focused, quieter conversations |

These zone identifiers are proposed names and should be coordinated with the audio implementation.

## 4. Proximity Rules

The distance between two avatars is calculated using Euclidean distance:

`distance = Math.hypot(x2 - x1, y2 - y1)`

- Distance less than 168 units: within proximity.
- Distance exactly 168 units: within proximity.
- Distance greater than 168 units: outside proximity.

## 5. Expected Room Behavior

1. Identify each avatar's current room.
2. Identify the audio zone associated with that room.
3. Compare avatar positions using the proximity calculation.
4. Apply the agreed audio rules to users in the same room and within the proximity radius.
5. When an avatar changes rooms, update its room or zone association so audio can be handled correctly.

Users in different rooms should not automatically share room audio unless the team explicitly designs a cross-room audio feature.

## 6. Testing Plan

- Verify the distance calculation for standard and negative coordinates.
- Verify proximity at 167, 168, and 169 units.
- Verify that entering and leaving the radius changes the proximity result correctly.
- Verify room changes using the actual frontend room-selection behavior.
- Verify audio-zone behavior after coordination with the audio and backend developers.

## 7. Implementation Status

- Distance calculation and standalone tests: prepared; test results to be recorded after execution.
- Room-to-audio-zone mapping: proposed; requires team coordination.
- Integration with live avatar movement: pending verification.
- Room-aware audio behavior: pending integration testing.
- MongoDB geospatial queries: pending verification; documentation alone does not establish implementation.

## 8. Coordination Note

The existing proximity threshold is 168 units. Do not change the threshold or modify shared frontend/backend integration files without coordinating with the team lead and relevant developers.