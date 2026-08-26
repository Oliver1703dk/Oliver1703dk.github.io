# The Death of the Application

Date: 26 August 2026
Canonical: https://oalarsen.com/blog/death-of-the-application/

This is a vision, not a finding. I think we are looking at a paradigm shift in what software even is.

The application, as we have known it, exists for an economic reason. Software was expensive to produce. You amortized that cost across millions of users who were similar enough. You did not write a unique program for one person. You wrote one program for a market, you shipped it, you versioned it, you maintained it. The persistent application is an economic object. It is a way of spreading a cost that used to be high.

Agentic coding tools change the cost. When working software can be generated from a statement of intent in minutes rather than months, the rationale for that persistent object starts to collapse. I am not saying design becomes free, or that the domain disappears, or that generated code is good. A lot of it is junk. The shift I am pointing at is different: if getting to something that runs is cheap, you no longer need to freeze the result into a product and sell it to a crowd.

What replaces it, in this vision, is software as an ephemeral crystallization of intent. Generated at the moment of need. Fit to one user and one task. Discarded after use. Closer in lifecycle to a database query plan than to a product.

Nobody versions a query plan. Nobody sells it to a million users. The database is what lasts. The query language is what lasts. The plan runs, and then it is gone.

That is the paradigm shift. The unit of software stops being the application and becomes the intent. Logic becomes disposable. The durable layer of computing moves down: out of applications, into protocols, data substrates, and identity.

## What has to last

Disposable logic is only tolerable if the stuff underneath is not.

Data has to last. The records that were touched. Who may read them. Provenance, so you can explain what happened after the process is gone. A generated program that copies a private table into some random store is not a cute prototype. It is a leak. The store, the permissions, and the audit trail are the long-lived system.

Protocols have to last. If every generated tool invents its own API, you do not get a system. You get a pile of one-offs that cannot see each other. Message shapes. Auth. The capability boundary. The generated code can be sloppy if it is speaking a language that is not.

Identity has to last. Who asked for this program. On whose behalf it ran. What it was allowed to do. A query plan is sandboxed by the engine. Generated software is not, unless something engine-shaped sits around it. Otherwise cheap generation just scales accidents.

I am not trying to turn this into a framework. It is where I think durability moves in the new shape. Down. Out of the application, into the substrate the application briefly condenses on.

## What architecture is for

If this vision is even half right, a lot of the objects architects treat as sacred lose their job. API stability contracts assume you will meet the same provider again. Upgrade paths assume the artifact survives. Installed bases assume there is something to install. Those made sense when the program was the product. A thing that exists for one task and one hour does not need them in the same way.

The work then is not designing the application. It is designing the substrate. Isolation so you can throw the program away. Replay so you can trust what it did. A protocol two throwaway programs can share. A data layer you would still trust after the process is gone.

Most software today is still an application. This is a vision of the shift, not a map of the present. I think agentic coding tools are making a different shape cheap enough to take seriously. The question I cannot shake is whether architecture keeps polishing the long-lived object that is about to stop being the unit of software.
