# The Death of the Application

Date: 26 August 2026
Canonical: https://oalarsen.com/blog/death-of-the-application/

I keep installing the same class of app. A client, a dashboard, a settings page, an account model, a two-year roadmap. Then I spend an evening in Cursor and watch a working thing appear from a paragraph of intent. The mismatch is getting hard to ignore. Applications exist because software used to be expensive. You wrote it once, you shipped it to a million people who were similar enough, and you amortized the cost. If the cost of getting to working code keeps collapsing, that deal does not hold.

I'm doing an MSc in software engineering at SDU. A lot of my week is still the old shape. Papers. Systems that are supposed to last. The other half is agentic tools. I point Cursor at a messy folder and, sometimes in minutes, I have something that runs. Not something I would ship. Not something I would bet a company on. But it does the thing I asked. Fit to the task I actually had that night, not to a persona in a product doc.

That is the part I keep coming back to. The persistent, versioned application is an economic object. It exists because writing software was slow enough that you had to spread the cost. You do not build a unique program for one person if it takes a team a year. You build one program for a market.

I don't think that constraint survives if agents keep getting better at the "make this work" part.

I want to be boringly specific. I am not saying design is free. I am not saying you can skip the domain. Generated code is often junk. I generate junk all the time and I throw most of it away. The weird part is that throwing it away is fine. It cost an evening, sometimes twenty minutes. The artifact was never the point. The intent was.

If that becomes normal, software stops looking like a product. It starts looking like a query plan. You state what you want. The engine compiles a plan. The plan runs. Then it is gone. Nobody versions the plan. Nobody sells it to a million users. The database is what lasts. The query language is what lasts. The plan is an ephemeral crystallization of intent, used once.

I keep catching myself treating generated tools the same way. I need a converter. A report. A one-off dashboard over a JSON dump from an experiment. I describe it. I get a thing. I use it. I do not open a ticket for v2. There is no installed base. The next time the need is slightly different, I generate again.

Logic, in that loop, is disposable. That sounds sloppy until you remember query planners already work like this. Nobody mourns the plan.

## What actually has to last

Disposable logic is only tolerable if the stuff underneath is not.

I care about this because I work on architecture, not demos. If the program is allowed to vanish, something still has to be there in the morning. The data, for a start. The records I touched. Who may read them. A generated script that quietly copies a private table into some random cloud is not a cute prototype. It is a leak. So the store has to last. Permissions too. Provenance, or you cannot explain what happened after the process is gone.

How the short-lived programs talk matters just as much, and it is the boring part everyone wants to skip. If every generated tool invents its own API, you do not get a system. You get a pile of one-offs that cannot see each other. Message shapes. Auth. The capability boundary nobody wants to specify until something breaks. That protocol layer is what has to stay stable. The generated code can be sloppy if it is speaking a language that is not.

Identity is the one I underweighted for a while. Who asked for this program. On whose behalf it ran. What it was allowed to do. A query plan is sandboxed by the engine. Generated software is not, unless something engine-shaped sits around it. Otherwise cheap generation just scales accidents.

I am not trying to turn that into a framework. It is just where the durability moved, in my head. Down. Out of the application, into protocols, data, identity. The app becomes a brief condensation on top.

## Why this clicked for me now

I have a paper at SEAA this year on architectural quality under agentic AI. I mined 151 Java repositories. Smell counts basically did not move. Lines of code grew 12.8%. Density looked better because the denominator grew, not because the architecture got healthier. That is not evidence that applications are dying. It is a much smaller claim: agents are already inside how real codebases grow, and the old quality story does not automatically improve when they show up.

Still. Sitting with that result, then going back to Cursor the same week, the two pictures collided. In those repos the application is still the unit. People keep adding to it. The artifact persists. In my own evenings the unit is the task. The artifact is optional. I think both can be true at once, for a while. The second one is the one that will not stay in the evenings.

If generating working software from intent keeps getting cheaper, a lot of the objects architects treat as sacred lose their job. API stability contracts assume you will meet the same provider again. Upgrade paths too. Installed bases. Those objects made sense when the program was the product. A thing that exists for one user, one task, one hour does not need them in the same way.

What the work looks like, if I am even half right, is not designing the application. It is designing the substrate it condenses on. Isolation so you can throw the program away. Replay so you can trust what it did. A protocol two throwaway programs can share. A data layer you would still trust after the process is gone. I do not have a method for that. I am supposed to be studying architecture under AI, and this is the question I cannot shake: maybe architecture is polishing the wrong long-lived object.

This is not a finding. It is an idea I am chewing on. I wrote it down because I notice myself reaching for a product when what I actually needed was a plan, and I don't think I am the only one.
