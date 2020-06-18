# The Product Development Life Cycle

## A complex case study regarding the effect of having no product lifecycle at all

One point of view is that the product development life cycle is this:

![product life cycle](images/productlifecycle.png)
￼

The problem with such diagrams is that they fail to demonstrate the interactions of the various parts. For example, Testing and QA, in modern development, aren’t necessarily distinct from Development. The two functions are intertwined with one another to ensure that the product is actually on course. It’d be a shame to develop something, only to find later in QA that it’s a ramshackle mess. Better to find out during the development cycle than afterwards.

Likewise, training should occur during the latter stages of development or early stages of deployment. It’s no good having the product deployed but most of the staff ignorant of how the product functions.

And that brings me to case study. Imagine a product that didn’t go through any of the these steps (regardless of order?). I was involved in one such project.

At the company in question, a product was released where only the sales team, the software team, and hardware/manufacturing were involved. There was no usability team, QA was left out of the equation, there was no training, and the repair department and technical support were left blind to the existence of the product, despite it being released to the general public.

It was in technical support that the problem showed up; a customer call reveled the new product and how few people actually knew about it. This in turn launched a two year program to revise — that is, create almost from scratch — a formal lifecycle process that involved all aspects of the company.

## Unraveling the Knot

The first thing we had to do was create a plan for managing this monumental task. We did this by asking a lot of questions of all the different departments, regardless of their prominence in a traditional product development life cycle. There was a lot to untangle.

Many departments had been left out in cold. It turns out there had been many complaints such as from QA who had stated this wasn’t the first time something like this happened. They had to QA hardware after the fact, which is basically a non-starter. Usability and Design were just nascent departments, barely having any say on a new product would be developed.

## No Blame Policy

With as many departments left out of any formal development process, it would have been easy to point to management or sales or manufacturing to point a finger at for not being wise enough to incorporate other parts of the company into a more comprehensive life cycle. That’s what they were there for, after all.

But decisions were made to “speed up” the release cycle — and to be candid there was quite a bit to ignorance about product development life cycles from those people involved. They did what they did because they didn’t “know” about the rest of the company, in a way. This, obviously, was something that needed to be addressed.

We established a no blame policy because the act of finding out all the whos, whats, and whens was going to take too much effort and be fruitless and frustrating for all involved. All of that energy could be directed towards making a better process so that what had occurred wouldn’t happen again.

## Knowing the Company Better

As noted, part of the problem was that parts of the company weren’t really aware of other parts of the company. They had no contact with other departments, so why should they concern themselves was sort of the logic that had happened.

One of the earliest mandates we had in running the lifecycle creation program was to get everyone on the same page. Sales had to know about QA; Manufacturing had to know about Repair; Software had to be aware of Usability and Design, and so on. Really, everyone had to be at least semi-aware of everyone else and importantly, they had to understand what their relationship was with other departments.

Part of my job on the program committee was to ensure this awareness was made to happen. In particular, because of my background, I focused on raising the awareness of customer service and QA so that they were exposed to the rest of the company, then I in turn started to show the logical connection between departments.

For example, QA’s job is a lot easier if Software writes code in accordance to Design, backed up by research from the Usability department. The chain of events starts at Design and Usability which in turn makes software development easier and testing can be far better implemented, so the work can be completed faster.

Upon release of the product, because it went through all of these stages, Customer Support and Repair would also have less work to do — a higher quality product doesn’t need as much maintenance — thus saving money on the backend.

All of this had to happen to ensure that everyone was engaged with the new emerging product development lifecycle. Everyone had to recognize that they played a part in the lifecycle and that there were many moving parts. No one worked in isolation. Plus, people got to know about their company in a more detailed manner.

## The Work

The hardest work was shepherding all of the interacting departments though a full lifecycle. I facilitated the communication between Software and QA, which, up to this point had been very stand-offish. Once Software understood that QA wasn’t going to bite their hands off, the two groups could communicate better.

Manufacturing needed to coordinated with Repair in a better way. Up till the program started, they acted as independent entities, ordering inventory and spare parts without knowing of each other’s needs. In one case, the product in question needed to change a screw out from the standard one that was used in the past. Before the improvement in communication, Manufacturing may have just gone through, leaving Repair in the lurch for when the product came back from the field.

Now, the two departments could coordinate and money and time could be saved by making better plans and sharing the parts inventory (in this particular case, it caused the two to collaborate to talk to the hardware designers and upper management and contest the need for a new screw at all; turns out they had to get new screws due to problems at the normal vendor’s end).

Most of the effort of the program committee I was on was really just about facilitating the communication between departments. I took the time to have Software and Design have regular conversations and then eventually write up a standardization guide for the user interface. This made current and future products far faster to develop software before because, anticipating the upcoming designs through the standard meant a more robust and flexible software architecture (whereas before, they had been writing a lot of new code because the UI kept changing radically in some cases; and sometimes because Software just felt like it).

Sales also got involved. Like customer service provides feedback to the process via customers who have bought the product, sales provides feedback to the design process by bringing prototypes for potential distributors to see and taking back their thoughts on the product. They acted somewhat like the Usability department, but more indirectly.

Once all the parts started to interact, the wheel that is the product development lifecycle started to gain traction and get rolling. We needed to make sure that make that transition smoother and we did so by implementing new tools practices.

## Tools for Transparency

Before the program committee got involved, the company essentially ran off of internal email communications. This was lacking because, as we could see from the prompting product fiasco, not everyone had visibility into a given project. We need to change how departments communicated with one another.

Part of facilitating communication was moving the company over to company-wide project management system. The company actually had the beginnings of a home-made PM application; it was used mostly for bug tracking, but didn’t take much to make it a full-fledge PM app.

With that in place, we augmented the PM app with instant messaging and a knowledge base system for customer support. I enacted a policy of getting people off of email all together so that they could, and would, focus on entering data strait into the PM app. This made tracking new issues far easier and trackable, as well as establishing context that could easily get lost in an email thread.

Updated tools and processe led to greater transparency. I knew one sales person who participated with a particular new product launch via keeping track of the particular project in the PM application. He was able to contribute his perspective to enhance the product so he could make his selling job that much easier as he went out to talk to distributors.

## Final Days

The program wound down after approximately two years of guidance by the program committee. We went through two full product lifecycles to work out the kinks and on subsequent rollouts, the committee play a far smaller role. The members of the committee slowly went back to working their normal jobs in a full-time capacity.

## Takeaways

There’s a lot more to be said about lessons learned from this single program of improving the product development lifecycle, but here are the big takeaways:

- Transparency allows for everyone to participate in the development process.
- All departments bring value to the product, even on the maintenance side of things, such as customer support.
- Development is not a “pass the bucket” affair; different departments engage in their own “mini-product” cycles together.
- Planning should make up a large amount of the lifecycle. With proper planning and standardization, it’s just a matter of execution, rather than continuous questioning.

This company started with essentially no product lifecycle whatsoever, and after two years of hard and diligent work, we ended up creating a robust product development system.

As far as I’m aware, the company continued to follow the plans we made for many years following. It was all about making sure that people knew what the rest of the company could offer, ensure high quality came out of each step of development, and providing transparency around the overall product.

The product lifecycle works, once you come to understand that it’s not quite as simple as a circle, but is rather an entire system of cycles, each interacting to improve the whole.
