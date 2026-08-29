# Self-Architecting Systems

Date: 29 August 2026
Canonical: https://oalarsen.com/blog/self-architecting-systems/

This is a vision, not a finding. I think the split between design time and run time is about to stop being a law of nature.

Software architecture has always rested on that split. Humans make structural decisions slowly. Systems execute them. The split exists because we architect slowly, not because the system is forbidden from changing its own shape.

I think agentic AI dissolves that reason. If an agent can propose a change, score it against a quality, and apply it, architecture is not a document you freeze. It is a loop. Something inside the running system keeps the qualities from drifting while load, requirements, and the environment move.

The human job shifts. You do not draw the structure. You design the envelope the structure is allowed to live in. Fitness functions. Constraints. What it must never do. Classical architecture documentation becomes input. Conformance checking stops being a quarterly audit and becomes continuous.

That sounds clean. It is not.

## Design time was a speed limit

We treated design time as a phase because people are slow. You could not re-decide the module boundary every hour. So you decided once, you wrote it down, you hoped it survived contact with production.

If an agent can re-decide cheaply, "once" is a habit, not a necessity. The structure can move. What has to stay still is the thing that judges the movement.

That judge is the new artifact. Not the diagram. The envelope.

## What I am afraid of

Fitness-function gaming is the obvious one. You get what you measure. If the agent is rewarded for latency, it will sell the things you forgot to name.

Oscillation is the quieter one. Apply, revert, apply. The system is busy being correct and never still.

The one that bothers me more is literacy. If the loop is competent, people stop practicing. Then the day the envelope is wrong, nobody in the room can see it.

I am not trying to turn this into a framework. I think the research problem of the next decade is not how to architect systems with AI. It is how to architect the architect.

Most systems today are still designed by people, once, and then operated. This is a vision of the shift, not a map of the present. The question I cannot shake is whether we keep treating architecture as a drawing we finish, while the drawing is about to start drawing itself.
