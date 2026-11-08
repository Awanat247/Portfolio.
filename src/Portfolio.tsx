"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ArrowRight, ArrowLeft, X, Menu, Plus, Minus, Check, MessageCircle, Copy } from "lucide-react";

type ProjectStory = { intro:string; facts:{label:string;value:string}[]; choices:{title:string;reason:string;approach:string;sampleIndex:number;linkLabel:string}[]; review:string; context:string };
type Study = { id:string; name:string; category:string; type:string; title:string; summary:string; role:string; roleDetail:string; capabilities:string[]; strategy:{title:string;text:string}[]; outcome:string; detail:string; evidence:string; story?:ProjectStory; samples:{src:string;alt:string;title:string;text:string;source:string;kind:string;file?:string;fileLabel?:string;sourceUrl?:string}[] };
const studies:Study[] = [
  {
    "id": "property",
    "name": "Homesbyolu",
    "category": "PROPERTY CONTENT",
    "type": "Portfolio work",
    "title": "Property stories with a clear visual direction.",
    "summary": "Promotional property creative and a market-report social post from my Canva portfolio.",
    "role": "Property content & graphic layouts",
    "roleDetail": "Property-focused promotional graphics and an educational market-report post, presented together in my portfolio.",
    "capabilities": [
      "Property-focused content",
      "Promotional graphic layouts",
      "Educational social content",
      "Audience-facing messaging"
    ],
    "strategy": [
      {
        "title": "Make the offer easy to understand",
        "text": "The promotional samples pair room photography with a prominent message and practical contact information."
      },
      {
        "title": "Create a consistent visual story",
        "text": "The room galleries give the audience more than a single image, carrying the same property story across multiple views."
      },
      {
        "title": "Balance promotion with useful information",
        "text": "The Homesbyolu social post presents a market report as a carousel, adding an educational format alongside promotional content."
      }
    ],
    "outcome": "Property storytelling in two formats",
    "detail": "Promotional image galleries communicate the offer visually. A market-report social post adds an educational format for the same audience.",
    "evidence": "Portfolio work · figures in the market post are property-market data.",
    "samples": [
      {
        "src": "./work/property-promo-one.webp",
        "alt": "Property promotion and room-image gallery reproduced from Canva portfolio page 18",
        "title": "Promotional content · first gallery",
        "text": "A promotional layout supported by a room-image gallery. Historical artwork.",
        "source": "Property content portfolio",
        "kind": "PROPERTY CREATIVE"
      },
      {
        "src": "./work/property-promo-two.webp",
        "alt": "Second property promotional layout and room-image gallery from Canva portfolio page 18",
        "title": "Promotional content · second gallery",
        "text": "A second layout showing a different room view and offer treatment. Historical artwork.",
        "source": "Property content portfolio",
        "kind": "PROPERTY CREATIVE"
      },
      {
        "src": "./work/homesbyolu-post.webp",
        "alt": "Homesbyolu social post featuring a February 2025 property-market report carousel",
        "title": "A useful market-report post",
        "text": "A February 2025 market-report carousel shared by Homesbyolu. The original post credits TRREB’s MLS system; these are property-market statistics.",
        "source": "Property content portfolio",
        "kind": "SOCIAL POST"
      }
    ]
  },
  {
    "id": "publishing",
    "name": "Content planning & publishing",
    "category": "SOCIAL OPERATIONS",
    "type": "Tool demonstration",
    "title": "A content plan that has a place to go.",
    "summary": "Buffer calendar views and a spreadsheet planning example, brought together in one workflow study.",
    "role": "Content scheduling workflow",
    "roleDetail": "Calendar and spreadsheet examples showing ways to organise a publishing workflow.",
    "capabilities": [
      "Content calendar organisation",
      "Multi-channel scheduling",
      "Weekly & monthly planning",
      "Publishing workflow management"
    ],
    "strategy": [
      {
        "title": "Plan at more than one level",
        "text": "The weekly and monthly calendar views show two ways to review what is scheduled and how content is distributed."
      },
      {
        "title": "Organise content by format",
        "text": "The spreadsheet example separates formats such as Reels, Instagram content and TikTok so the plan can be reviewed at a glance."
      },
      {
        "title": "Keep planning and publishing connected",
        "text": "A structured calendar and a scheduling tool support a repeatable workflow from idea to publishing. These examples illustrate that approach."
      }
    ],
    "outcome": "A visible publishing workflow",
    "detail": "Weekly, monthly and spreadsheet views demonstrate how planned content can be organised across a publishing cycle.",
    "evidence": "Tool demonstrations · shown as workflow examples.",
    "samples": [
      {
        "src": "./work/buffer-week.webp",
        "alt": "Buffer weekly content calendar screenshot from Canva portfolio page 14",
        "title": "The weekly publishing view",
        "text": "A weekly Buffer calendar view, illustrating how posts can be arranged across channels.",
        "source": "Publishing workflow · tool example",
        "kind": "TOOL EXAMPLE"
      },
      {
        "src": "./work/buffer-month.webp",
        "alt": "Buffer monthly scheduling view from Canva portfolio page 14",
        "title": "The monthly overview",
        "text": "A monthly Buffer view for reviewing the publishing schedule at a glance.",
        "source": "Publishing workflow · tool example",
        "kind": "TOOL EXAMPLE"
      },
      {
        "src": "./work/content-calendar.webp",
        "alt": "Colour-coded social media content planning spreadsheet from Canva portfolio page 16",
        "title": "The planning layer",
        "text": "A spreadsheet planning example organised by date and content format.",
        "source": "Publishing workflow · tool example",
        "kind": "TOOL EXAMPLE"
      }
    ]
  },
  {
    "id": "reporting",
    "name": "Performance & reporting",
    "category": "ANALYTICS & INSIGHTS",
    "type": "Tool demonstration",
    "title": "Making the reporting process visible.",
    "summary": "Dashboard views for reading activity, audience response and publishing patterns.",
    "role": "Social reporting workflow",
    "roleDetail": "Interface examples for reviewing publishing activity, audience response and engagement data.",
    "capabilities": [
      "Platform performance review",
      "Content-format comparison",
      "Audience & engagement analysis",
      "Reporting-led recommendations"
    ],
    "strategy": [
      {
        "title": "Read the right view",
        "text": "Different reporting screens separate activity, audience response and publishing behaviour. The first step is understanding what each view actually measures."
      },
      {
        "title": "Keep the context attached",
        "text": "A useful report needs the account, reporting window and metric definition. Figures without that context should not become headline claims."
      },
      {
        "title": "Turn observations into a next step",
        "text": "I use reporting to ask what to repeat, what to refine and what to test next. The screenshots demonstrate the reporting layer, not proof of a completed optimisation cycle."
      }
    ],
    "outcome": "Reporting views that support a review",
    "detail": "Summary screens, audience charts and publishing views show the information a social media report can bring together.",
    "evidence": "Tool demonstrations · dashboard figures are not attributed client results.",
    "samples": [
      {
        "src": "./work/facebook-report.webp",
        "alt": "Facebook summary reporting interface reproduced from Canva portfolio page 13",
        "title": "Publishing behaviour & summary",
        "text": "A reporting interface example for inspecting activity and audience response. Dashboard figures belong to this tool demonstration.",
        "source": "Reporting workflow · tool example",
        "kind": "TOOL EXAMPLE"
      },
      {
        "src": "./work/profile-report.webp",
        "alt": "Social profile performance summary and audience chart from Canva portfolio page 13",
        "title": "A profile-level performance view",
        "text": "A reporting interface example for inspecting activity and audience response. Dashboard figures belong to this tool demonstration.",
        "source": "Reporting workflow · tool example",
        "kind": "TOOL EXAMPLE"
      },
      {
        "src": "./work/meta-weekly.webp",
        "alt": "Meta Business Suite weekly activity review screenshot from Canva portfolio page 10",
        "title": "The weekly activity review",
        "text": "A reporting interface example for inspecting activity and audience response. Dashboard figures belong to this tool demonstration.",
        "source": "Reporting workflow · tool example",
        "kind": "TOOL EXAMPLE"
      }
    ]
  }
];
const driveCollections:Study[] = [
  {
    "id": "planpadi-original",
    "name": "Planpadi content collection",
    "category": "Content",
    "type": "Live brand work",
    "title": "Product education. Audience conversation. A plan that connects them.",
    "summary": "Carousels, brand graphics, community prompts, Reels and a two-week content calendar for Planpadi.",
    "role": "Social media management & content creation",
    "roleDetail": "I managed Planpadi’s live social accounts alongside content planning and creation. The work shown here includes carousel structure and copy, social graphics, short-form video and a two-week content plan.",
    "capabilities": [
      "Live social account management",
      "Carousel structure, copy & design",
      "Brand graphics & conversation prompts",
      "Short-form video creative",
      "Content pillars & calendar planning"
    ],
    "strategy": [
      {
        "title": "Make the product understandable",
        "text": "The feature carousel moves from a clear hook to practical platform features, then closes with a call to action."
      },
      {
        "title": "Give the audience a way in",
        "text": "Choice-led posts and an event-organiser debate create an invitation to participate."
      },
      {
        "title": "Connect the ideas to a plan",
        "text": "The calendar gives each idea a pillar, an objective and a format, supporting a coherent publishing direction."
      }
    ],
    "outcome": "A connected content toolkit",
    "detail": "Feature-led content explains the platform. Conversation prompts give the audience a way to participate. Reels and a calendar connect the creative ideas to a practical content direction.",
    "evidence": "Live brand work · creative and planning deliverables shown here.",
    "story": {
      "intro": "For an event platform, content has several jobs: help people understand how it works, give them something worth joining in with, and guide interest towards an event. This collection connects those jobs in one content direction.",
      "facts": [
        {"label":"My role","value":"Live account management, content planning & creation"},
        {"label":"Brand context","value":"Event discovery, ticketing & the event experience"},
        {"label":"Work to explore","value":"Carousels, graphics, Reels & a two-week calendar"}
      ],
      "choices": [
        {"title":"Make the platform easier to understand","reason":"Product information needs a clear sequence so someone can follow it without learning everything at once.","approach":"The feature carousel introduces one useful idea at a time, moving from the hook through event setup, guests, tickets and promotion to a next action.","sampleIndex":0,"linkLabel":"Inspect the feature carousel"},
        {"title":"Give the audience a reason to respond","reason":"The calendar balances product education with event culture and participation.","approach":"The “Concert or comedy?” graphic gives people an easy way into a conversation. Other prompts bring event organisers into the mix.","sampleIndex":5,"linkLabel":"Inspect the conversation prompt"},
        {"title":"Give each post a place in the journey","reason":"An engaging idea is more useful when its purpose is clear.","approach":"The calendar’s Strategy Flow moves from awareness and engagement through trust, consideration and conversion. Ticket tips, polls, event spotlights and direct calls to action each have a different job.","sampleIndex":8,"linkLabel":"Inspect the calendar & strategy flow"}
      ],
      "review":"I would review reach for discovery content, the substance of replies to conversation posts, and ticket or event-link activity for action-led posts. The next plan would build on useful responses and address recurring questions. Any performance comparison would use a named account, a defined period and consistent metric definitions.",
      "context":"The samples demonstrate the content system and my creative contribution. The review approach describes how I would assess it; it is not a report of measured campaign results."
    },
    "samples": [
      {
        "src": "./work/drive/carousel-one-01.webp",
        "alt": "The opening hook — supplied work sample",
        "title": "The opening hook",
        "text": "An opening hook introduces useful Planpadi features and gives the reader a reason to keep swiping.",
        "kind": "CAROUSEL / 1 OF 5",
        "source": "Planpadi · content portfolio"
      },
      {
        "src": "./work/drive/carousel-one-02.webp",
        "alt": "Create your event — supplied work sample",
        "title": "Create your event",
        "text": "The first feature turns event setup into a clear sequence of practical details.",
        "kind": "CAROUSEL / 2 OF 5",
        "source": "Planpadi · content portfolio"
      },
      {
        "src": "./work/drive/carousel-one-03.webp",
        "alt": "Guests & ticket options — supplied work sample",
        "title": "Guests & ticket options",
        "text": "Guest management and ticket options are explained in one focused slide.",
        "kind": "CAROUSEL / 3 OF 5",
        "source": "Planpadi · content portfolio"
      },
      {
        "src": "./work/drive/carousel-one-04.webp",
        "alt": "Invitations & promotion — supplied work sample",
        "title": "Invitations & promotion",
        "text": "The next step connects invitations, promotion and event discovery.",
        "kind": "CAROUSEL / 4 OF 5",
        "source": "Planpadi · content portfolio"
      },
      {
        "src": "./work/drive/carousel-one-05.webp",
        "alt": "A clear next step — supplied work sample",
        "title": "A clear next step",
        "text": "The closing slide brings the idea back to a clear next action.",
        "kind": "CAROUSEL / 5 OF 5",
        "source": "Planpadi · content portfolio"
      },
      {
        "src": "./work/drive/design-02.webp",
        "alt": "Concert or comedy? — supplied work sample",
        "title": "Concert or comedy?",
        "text": "An audience-conversation prompt using a simple choice and a comments invitation.",
        "kind": "COMMUNITY POST",
        "source": "Planpadi · content portfolio"
      },
      {
        "src": "./work/drive/design-05.webp",
        "alt": "A new-month brand message — supplied work sample",
        "title": "A new-month brand message",
        "text": "A seasonal brand message with a recognisable Planpadi visual treatment.",
        "kind": "BRAND CONTENT",
        "source": "Planpadi · content portfolio"
      },
      {
        "src": "./work/drive/design-09.webp",
        "alt": "Free tickets vs paid tickets — supplied work sample",
        "title": "Free tickets vs paid tickets",
        "text": "A question-led graphic designed to invite event organisers into a conversation.",
        "kind": "DISCUSSION POST",
        "source": "Planpadi · content portfolio"
      },
      {
        "src": "./work/drive/two-week-calendar-preview.webp",
        "alt": "The two-week content plan — supplied work sample",
        "title": "The two-week content plan",
        "text": "A two-week plan connecting each content idea with a pillar, objective and format. Open the original workbook to explore the calendar and strategy-flow sheet.",
        "kind": "CONTENT CALENDAR",
        "source": "Planpadi · content portfolio",
        "file": "./work/drive/two-week-calendar.xlsx",
        "fileLabel": "Download original workbook"
      }
    ]
  },
  {
    "id": "marketing-carousel",
    "name": "Marketing principles carousel",
    "category": "Content",
    "type": "Educational content",
    "title": "An educational idea, carried across a complete series.",
    "summary": "An eight-slide carousel about audience understanding, storytelling and trust.",
    "role": "Educational content & carousel design",
    "roleDetail": "An eight-slide educational carousel with a clear opening promise, a sequence of individual ideas and a closing invitation.",
    "capabilities": [
      "Educational copy structure",
      "Visual hierarchy",
      "Multi-slide storytelling",
      "Audience-focused messaging"
    ],
    "strategy": [
      {
        "title": "Start with one clear promise",
        "text": "The cover gives the audience a reason to continue through the series."
      },
      {
        "title": "Give each slide one job",
        "text": "Each following slide develops a single principle, with consistent typography and numbering."
      },
      {
        "title": "End with a useful action",
        "text": "The final slide invites the audience to save the idea and return to it."
      }
    ],
    "outcome": "A complete educational sequence",
    "detail": "A consistent visual language carries the idea across eight slides, keeping one message in focus at each step.",
    "evidence": "Educational content · creative sample.",
    "samples": [
      {
        "src": "./work/drive/carousel-two-01.webp",
        "alt": "7 marketing principles — supplied work sample",
        "title": "7 marketing principles",
        "text": "Slide 1 of the complete marketing-principles series. Follow the sequence from the opening idea to the final invitation.",
        "kind": "CAROUSEL / 1 OF 8",
        "source": "Marketing principles · carousel"
      },
      {
        "src": "./work/drive/carousel-two-02.webp",
        "alt": "Principles before trends — supplied work sample",
        "title": "Principles before trends",
        "text": "Slide 2 of the complete marketing-principles series. Follow the sequence from the opening idea to the final invitation.",
        "kind": "CAROUSEL / 2 OF 8",
        "source": "Marketing principles · carousel"
      },
      {
        "src": "./work/drive/carousel-two-03.webp",
        "alt": "Focus on the audience — supplied work sample",
        "title": "Focus on the audience",
        "text": "Slide 3 of the complete marketing-principles series. Follow the sequence from the opening idea to the final invitation.",
        "kind": "CAROUSEL / 3 OF 8",
        "source": "Marketing principles · carousel"
      },
      {
        "src": "./work/drive/carousel-two-04.webp",
        "alt": "Speak to the problem — supplied work sample",
        "title": "Speak to the problem",
        "text": "Slide 4 of the complete marketing-principles series. Follow the sequence from the opening idea to the final invitation.",
        "kind": "CAROUSEL / 4 OF 8",
        "source": "Marketing principles · carousel"
      },
      {
        "src": "./work/drive/carousel-two-05.webp",
        "alt": "Stories and features — supplied work sample",
        "title": "Stories and features",
        "text": "Slide 5 of the complete marketing-principles series. Follow the sequence from the opening idea to the final invitation.",
        "kind": "CAROUSEL / 5 OF 8",
        "source": "Marketing principles · carousel"
      },
      {
        "src": "./work/drive/carousel-two-06.webp",
        "alt": "Build trust before the pitch — supplied work sample",
        "title": "Build trust before the pitch",
        "text": "Slide 6 of the complete marketing-principles series. Follow the sequence from the opening idea to the final invitation.",
        "kind": "CAROUSEL / 6 OF 8",
        "source": "Marketing principles · carousel"
      },
      {
        "src": "./work/drive/carousel-two-07.webp",
        "alt": "Test, measure, improve — supplied work sample",
        "title": "Test, measure, improve",
        "text": "Slide 7 of the complete marketing-principles series. Follow the sequence from the opening idea to the final invitation.",
        "kind": "CAROUSEL / 7 OF 8",
        "source": "Marketing principles · carousel"
      },
      {
        "src": "./work/drive/carousel-two-08.webp",
        "alt": "The closing invitation — supplied work sample",
        "title": "The closing invitation",
        "text": "Slide 8 of the complete marketing-principles series. Follow the sequence from the opening idea to the final invitation.",
        "kind": "CAROUSEL / 8 OF 8",
        "source": "Marketing principles · carousel"
      }
    ]
  },
  {
    "id": "social-designs",
    "name": "Social graphic design collection",
    "category": "Content",
    "type": "Design work",
    "title": "Different brands, with a clear message in each frame.",
    "summary": "Nine original shared graphics spanning food, events, beauty, books and brand content.",
    "role": "Graphic design & social content",
    "roleDetail": "Promotional, educational and conversation-led graphic designs across events, food, beauty and books.",
    "capabilities": [
      "Message hierarchy",
      "Promotional content",
      "Brand-led visual layouts",
      "Social-first graphic design"
    ],
    "strategy": [
      {
        "title": "Find the focal point",
        "text": "Each graphic gives the viewer a clear place to start, such as an offer, a quotation or an audience question."
      },
      {
        "title": "Support the message with imagery",
        "text": "Photography and graphic elements help explain the idea rather than compete with it."
      },
      {
        "title": "Design for the context",
        "text": "The collection shows different treatments for educational, conversational and promotional content."
      }
    ],
    "outcome": "A range of social creative",
    "detail": "The collection shows different visual treatments for different communication needs: explain an idea, highlight an offer, introduce a product or invite a response.",
    "evidence": "Design portfolio · dates, offers and quotations belong to the original artwork.",
    "samples": [
      {
        "src": "./work/drive/design-04.webp",
        "alt": "Restaurant menu promotion — supplied work sample",
        "title": "Restaurant menu promotion",
        "text": "A restaurant promotional graphic bringing food images, menu items and contact details into one layout.",
        "kind": "SOCIAL GRAPHIC",
        "source": "Social graphic design portfolio"
      },
      {
        "src": "./work/drive/design-01.webp",
        "alt": "Skincare educational graphic — supplied work sample",
        "title": "Skincare educational graphic",
        "text": "An educational skincare graphic with a clear visual hierarchy and product focus.",
        "kind": "SOCIAL GRAPHIC",
        "source": "Social graphic design portfolio"
      },
      {
        "src": "./work/drive/design-02.webp",
        "alt": "Concert or comedy? — supplied work sample",
        "title": "Concert or comedy?",
        "text": "A community prompt combining event imagery with an invitation to comment.",
        "kind": "SOCIAL GRAPHIC",
        "source": "Social graphic design portfolio"
      },
      {
        "src": "./work/drive/design-03.webp",
        "alt": "Review-layout graphic — supplied work sample",
        "title": "Review-layout graphic",
        "text": "A review-layout design sample. The quotations belong to the artwork and are not testimonials about my services.",
        "kind": "SOCIAL GRAPHIC",
        "source": "Social graphic design portfolio"
      },
      {
        "src": "./work/drive/design-05.webp",
        "alt": "A new-month brand message — supplied work sample",
        "title": "A new-month brand message",
        "text": "A Planpadi seasonal brand message from the shared collection.",
        "kind": "SOCIAL GRAPHIC",
        "source": "Social graphic design portfolio"
      },
      {
        "src": "./work/drive/design-06.webp",
        "alt": "Food offer promotion — supplied work sample",
        "title": "Food offer promotion",
        "text": "A food promotion with offer-led visual hierarchy. The offer belongs to the original artwork and is not presented as current.",
        "kind": "SOCIAL GRAPHIC",
        "source": "Social graphic design portfolio"
      },
      {
        "src": "./work/drive/design-07.webp",
        "alt": "Courage quote graphic — supplied work sample",
        "title": "Courage quote graphic",
        "text": "A quote-led graphic with portrait imagery and supporting brand elements.",
        "kind": "SOCIAL GRAPHIC",
        "source": "Social graphic design portfolio"
      },
      {
        "src": "./work/drive/design-08.webp",
        "alt": "Book promotion graphic — supplied work sample",
        "title": "Book promotion graphic",
        "text": "A book-promotion design sample with a prominent quotation and product imagery.",
        "kind": "SOCIAL GRAPHIC",
        "source": "Social graphic design portfolio"
      },
      {
        "src": "./work/drive/design-09.webp",
        "alt": "An event-organiser debate — supplied work sample",
        "title": "An event-organiser debate",
        "text": "A discussion-led Planpadi design about event ticketing. No sales outcome is claimed.",
        "kind": "SOCIAL GRAPHIC",
        "source": "Social graphic design portfolio"
      }
    ]
  },
  {
    "id": "glow-blueprint",
    "name": "The Glow Blueprint",
    "category": "Strategy",
    "type": "Strategy example",
    "title": "A 12-week content direction for a skincare brand.",
    "summary": "Proposed audience segments, content pillars, phased planning, a calendar and a measurement framework.",
    "role": "Social content strategy & planning",
    "roleDetail": "A proposed skincare content system covering audience segments, tone of voice, content pillars, platform direction, weekly planning and KPI tracking.",
    "capabilities": [
      "Audience & tone-of-voice planning",
      "Content pillars & sequencing",
      "Platform-specific content direction",
      "KPI & calendar structure"
    ],
    "strategy": [
      {
        "title": "Start with a defined audience",
        "text": "The document groups audience needs and sets a proposed tone of voice before choosing formats."
      },
      {
        "title": "Sequence the content",
        "text": "Awareness, trust and conversion phases give the plan a progression across the proposed period."
      },
      {
        "title": "Make execution reviewable",
        "text": "Content calendars, format choices and a KPI template connect the strategic direction to a working system."
      }
    ],
    "outcome": "A strategy built for execution",
    "detail": "A complete planning document connects audience understanding with a week-by-week content system. It includes example captions, format choices and a tracking template.",
    "evidence": "Strategy example · proposed plan with illustrative captions and KPI templates.",
    "story": {
      "intro": "The Glow Blueprint is a proposed 12-week social content system for a skincare brand. It shows how an audience hypothesis can become a voice, a set of content priorities and a plan a team can use.",
      "facts": [
        {"label":"Project type","value":"Proposed strategy example"},
        {"label":"Planning scope","value":"12 weeks · Instagram & TikTok"},
        {"label":"Audience hypothesis","value":"Women aged 18–35 with different skincare concerns"}
      ],
      "choices": [
        {"title":"Start with needs, then choose the message","reason":"The document separates acne concerns, post-acne marks and a desire for a simpler glow-focused routine.","approach":"Each proposed segment has a different need. An educational, approachable voice connects them without making every post speak to everyone.","sampleIndex":1,"linkLabel":"Inspect the audience segments"},
        {"title":"Give the content a deliberate balance","reason":"A product-led feed still needs useful education and opportunities for conversation.","approach":"The five proposed pillars divide the work across education, concerns, proof, product and community. Proof-led ideas would require authentic customer evidence before production.","sampleIndex":2,"linkLabel":"Inspect the content pillars"},
        {"title":"Turn the direction into a reviewable system","reason":"A strategy needs a publishing rhythm and a way to decide what to change.","approach":"The phased plan connects awareness, trust and conversion with weekly ideas, formats and a KPI tracking template.","sampleIndex":9,"linkLabel":"Inspect the rhythm & measurement plan"}
      ],
      "review":"Before using this plan for a real brand, I would validate the audience assumptions through customer questions, comment and DM themes, existing account performance and a competitor content review. I would then adjust the segments, priorities and cadence around that evidence and the brand’s production capacity.",
      "context":"The audience segments and expected content roles are planning hypotheses. This example does not document completed audience research or a live campaign’s results."
    },
    "samples": [
      {
        "src": "./work/drive/skincare-page-01.webp",
        "alt": "Brand overview & tone of voice — supplied strategy page",
        "title": "Brand overview & tone of voice",
        "text": "Page 1 of the strategy example. Explore the planning framework, then open the full PDF for the complete document.",
        "kind": "STRATEGY EXAMPLE / PAGE 1",
        "source": "The Glow Blueprint · strategy example",
        "file": "./work/drive/skincare-strategy.pdf",
        "fileLabel": "Open full strategy PDF"
      },
      {
        "src": "./work/drive/skincare-page-02.webp",
        "alt": "Audience segments & content pillars — supplied strategy page",
        "title": "Audience segments & content pillars",
        "text": "Page 2 of the strategy example. Explore the planning framework, then open the full PDF for the complete document.",
        "kind": "STRATEGY EXAMPLE / PAGE 2",
        "source": "The Glow Blueprint · strategy example",
        "file": "./work/drive/skincare-strategy.pdf",
        "fileLabel": "Open full strategy PDF"
      },
      {
        "src": "./work/drive/skincare-page-03.webp",
        "alt": "Content pillars · concerns, proof & product — supplied strategy page",
        "title": "Content pillars · concerns, proof & product",
        "text": "Page 3 of the strategy example. Explore the planning framework, then open the full PDF for the complete document.",
        "kind": "STRATEGY EXAMPLE / PAGE 3",
        "source": "The Glow Blueprint · strategy example",
        "file": "./work/drive/skincare-strategy.pdf",
        "fileLabel": "Open full strategy PDF"
      },
      {
        "src": "./work/drive/skincare-page-04.webp",
        "alt": "Community pillar & awareness phase — supplied strategy page",
        "title": "Community pillar & awareness phase",
        "text": "Page 4 of the strategy example. Explore the planning framework, then open the full PDF for the complete document.",
        "kind": "STRATEGY EXAMPLE / PAGE 4",
        "source": "The Glow Blueprint · strategy example",
        "file": "./work/drive/skincare-strategy.pdf",
        "fileLabel": "Open full strategy PDF"
      },
      {
        "src": "./work/drive/skincare-page-05.webp",
        "alt": "Trust, conversion & content-plan structure — supplied strategy page",
        "title": "Trust, conversion & content-plan structure",
        "text": "Page 5 of the strategy example. Explore the planning framework, then open the full PDF for the complete document.",
        "kind": "STRATEGY EXAMPLE / PAGE 5",
        "source": "The Glow Blueprint · strategy example",
        "file": "./work/drive/skincare-strategy.pdf",
        "fileLabel": "Open full strategy PDF"
      },
      {
        "src": "./work/drive/skincare-page-06.webp",
        "alt": "Month-one & month-two content plan — supplied strategy page",
        "title": "Month-one & month-two content plan",
        "text": "Page 6 of the strategy example. Explore the planning framework, then open the full PDF for the complete document.",
        "kind": "STRATEGY EXAMPLE / PAGE 6",
        "source": "The Glow Blueprint · strategy example",
        "file": "./work/drive/skincare-strategy.pdf",
        "fileLabel": "Open full strategy PDF"
      },
      {
        "src": "./work/drive/skincare-page-07.webp",
        "alt": "Sales-phase plan & opening content ideas — supplied strategy page",
        "title": "Sales-phase plan & opening content ideas",
        "text": "Page 7 of the strategy example. Explore the planning framework, then open the full PDF for the complete document.",
        "kind": "STRATEGY EXAMPLE / PAGE 7",
        "source": "The Glow Blueprint · strategy example",
        "file": "./work/drive/skincare-strategy.pdf",
        "fileLabel": "Open full strategy PDF"
      },
      {
        "src": "./work/drive/skincare-page-08.webp",
        "alt": "Content idea bank · continued — supplied strategy page",
        "title": "Content idea bank · continued",
        "text": "Page 8 of the strategy example. Explore the planning framework, then open the full PDF for the complete document.",
        "kind": "STRATEGY EXAMPLE / PAGE 8",
        "source": "The Glow Blueprint · strategy example",
        "file": "./work/drive/skincare-strategy.pdf",
        "fileLabel": "Open full strategy PDF"
      },
      {
        "src": "./work/drive/skincare-page-09.webp",
        "alt": "Content ideas & calendar system — supplied strategy page",
        "title": "Content ideas & calendar system",
        "text": "Page 9 of the strategy example. Explore the planning framework, then open the full PDF for the complete document.",
        "kind": "STRATEGY EXAMPLE / PAGE 9",
        "source": "The Glow Blueprint · strategy example",
        "file": "./work/drive/skincare-strategy.pdf",
        "fileLabel": "Open full strategy PDF"
      },
      {
        "src": "./work/drive/skincare-page-10.webp",
        "alt": "Weekly rhythm & KPI direction — supplied strategy page",
        "title": "Weekly rhythm & KPI direction",
        "text": "Page 10 of the strategy example. Explore the planning framework, then open the full PDF for the complete document.",
        "kind": "STRATEGY EXAMPLE / PAGE 10",
        "source": "The Glow Blueprint · strategy example",
        "file": "./work/drive/skincare-strategy.pdf",
        "fileLabel": "Open full strategy PDF"
      },
      {
        "src": "./work/drive/skincare-page-11.webp",
        "alt": "Tracking template & Instagram direction — supplied strategy page",
        "title": "Tracking template & Instagram direction",
        "text": "Page 11 of the strategy example. Explore the planning framework, then open the full PDF for the complete document.",
        "kind": "STRATEGY EXAMPLE / PAGE 11",
        "source": "The Glow Blueprint · strategy example",
        "file": "./work/drive/skincare-strategy.pdf",
        "fileLabel": "Open full strategy PDF"
      },
      {
        "src": "./work/drive/skincare-page-12.webp",
        "alt": "TikTok direction & opening captions — supplied strategy page",
        "title": "TikTok direction & opening captions",
        "text": "Page 12 of the strategy example. Explore the planning framework, then open the full PDF for the complete document.",
        "kind": "STRATEGY EXAMPLE / PAGE 12",
        "source": "The Glow Blueprint · strategy example",
        "file": "./work/drive/skincare-strategy.pdf",
        "fileLabel": "Open full strategy PDF"
      },
      {
        "src": "./work/drive/skincare-page-13.webp",
        "alt": "Example caption bank — supplied strategy page",
        "title": "Example caption bank",
        "text": "Page 13 of the strategy example. Explore the planning framework, then open the full PDF for the complete document.",
        "kind": "STRATEGY EXAMPLE / PAGE 13",
        "source": "The Glow Blueprint · strategy example",
        "file": "./work/drive/skincare-strategy.pdf",
        "fileLabel": "Open full strategy PDF"
      },
      {
        "src": "./work/drive/skincare-page-14.webp",
        "alt": "Example captions & quick-start checklist — supplied strategy page",
        "title": "Example captions & quick-start checklist",
        "text": "Page 14 of the strategy example. Explore the planning framework, then open the full PDF for the complete document.",
        "kind": "STRATEGY EXAMPLE / PAGE 14",
        "source": "The Glow Blueprint · strategy example",
        "file": "./work/drive/skincare-strategy.pdf",
        "fileLabel": "Open full strategy PDF"
      }
    ]
  },
  {
    "id": "content-calendars",
    "name": "Content calendar workbooks",
    "category": "Planning",
    "type": "Planning work",
    "title": "The planning layer behind a consistent social presence.",
    "summary": "The original Planpadi two-week calendar and a monthly calendar template.",
    "role": "Content organisation & scheduling plans",
    "roleDetail": "A two-week Planpadi content plan and a historical monthly planning template, available as editable Excel workbooks.",
    "capabilities": [
      "Content ideas & formats",
      "Pillars & objectives",
      "Schedule organisation",
      "Editable planning documents"
    ],
    "strategy": [
      {
        "title": "Give each idea a purpose",
        "text": "The Planpadi workbook connects ideas with content pillars and objectives."
      },
      {
        "title": "Put the plan on a timeline",
        "text": "Weekly and monthly views make the proposed publishing rhythm visible."
      },
      {
        "title": "Keep the source editable",
        "text": "The original workbooks remain available so the complete plans can be reviewed in their native format."
      }
    ],
    "outcome": "Ideas organised into a working plan",
    "detail": "Content ideas are arranged by timing, format and purpose. Preview the planning structure or download the original workbooks.",
    "evidence": "Planning samples · the monthly file is a historical template.",
    "samples": [
      {
        "src": "./work/drive/two-week-calendar-preview.webp",
        "alt": "Planpadi · two-week calendar — supplied work sample",
        "title": "Planpadi · two-week calendar",
        "text": "The complete Planpadi two-week content-calendar worksheet. The workbook also contains a strategy-flow sheet.",
        "kind": "EXCEL WORKBOOK",
        "source": "Content planning · original workbook",
        "file": "./work/drive/two-week-calendar.xlsx",
        "fileLabel": "Download original workbook"
      },
      {
        "src": "./work/drive/monthly-calendar-preview.webp",
        "alt": "Monthly calendar · opening section — supplied work sample",
        "title": "Monthly calendar · opening section",
        "text": "An opening excerpt from a historical monthly calendar template dated May 2020. Its reporting values are example data. The full workbook is available below.",
        "kind": "EXCEL TEMPLATE",
        "source": "Content planning · original workbook",
        "file": "./work/drive/monthly-calendar.xlsx",
        "fileLabel": "Download original workbook"
      }
    ]
  },
  {
    "id": "analytics-snapshots",
    "name": "Analytics snapshot comparison",
    "category": "Analytics",
    "type": "Reporting material",
    "title": "The original before-and-after screenshots, with the context kept attached.",
    "summary": "Two original platform screenshots, retained with their reporting windows.",
    "role": "Performance review & reporting context",
    "roleDetail": "Two platform screenshots supplied as Before and After, retained with their original reporting windows.",
    "capabilities": [
      "Reading platform insights",
      "Keeping reporting windows visible",
      "Comparing like-for-like definitions",
      "Separating evidence from attribution"
    ],
    "strategy": [
      {
        "title": "Keep the source labels",
        "text": "The images retain the Before and After labels supplied in the folder."
      },
      {
        "title": "Check the reporting context",
        "text": "The dates shown in each screenshot are different; account attribution and year are not visible in these crops."
      },
      {
        "title": "Avoid unsupported conclusions",
        "text": "The images are available for inspection without turning their values into an attributed campaign-growth claim."
      }
    ],
    "outcome": "A reporting comparison to inspect",
    "detail": "The screenshots show different reporting periods. Account identity, year and campaign attribution are not supplied in these crops.",
    "evidence": "Reporting material · no growth calculation or campaign attribution added.",
    "samples": [
      {
        "src": "./work/drive/analytics-02.webp",
        "alt": "Before · supplied screenshot — supplied work sample",
        "title": "Before · supplied screenshot",
        "text": "Original Before screenshot, displaying May 31–Jun 29. Account identity and year are not visible in the crop.",
        "kind": "ANALYTICS / BEFORE",
        "source": "Analytics screenshots · original source"
      },
      {
        "src": "./work/drive/analytics-01.webp",
        "alt": "After · supplied screenshot — supplied work sample",
        "title": "After · supplied screenshot",
        "text": "Original After screenshot, displaying Jun 30–Jul 30. The on-screen values are preserved as supplied.",
        "kind": "ANALYTICS / AFTER",
        "source": "Analytics screenshots · original source"
      }
    ]
  }
];
const services=[
  {
    "title": "Ongoing social media management",
    "label": "ONGOING SUPPORT",
    "text": "For brands that need a consistent pair of hands across planning, publishing and audience conversations.",
    "items": [
      "Content direction and a working calendar",
      "Captions, graphics and short-form content",
      "Scheduling and publishing coordination",
      "Community support and performance reviews"
    ],
    "cta": "Discuss ongoing management"
  },
  {
    "title": "Content creation support",
    "label": "CREATIVE PRODUCTION",
    "text": "For brands with a direction in place that need thoughtful, brand-consistent content to keep it moving.",
    "items": [
      "Social graphics and educational carousels",
      "Reels and short-form video editing",
      "Captions and content messaging",
      "A coordinated set of assets for your channels"
    ],
    "cta": "Discuss content creation"
  },
  {
    "title": "Strategy & content planning",
    "label": "STRATEGY PROJECT",
    "text": "For brands that need a clear content direction and a practical plan their team can put into action.",
    "items": [
      "Audience, brand voice and platform direction",
      "Content pillars and messaging priorities",
      "A calendar with formats and objectives",
      "A framework for reviewing performance"
    ],
    "cta": "Discuss a strategy project"
  }
];
function Sample({study,index=0,compact=false}:{study:Study;index?:number;compact?:boolean}){
 const item=study.samples[index];return <figure className={`source-sample ${study.id} ${compact?"compact":""}`}><div className="source-sample-heading"><span>{item.kind}</span><ArrowUpRight size={12}/></div><div className="source-image-wrap"><img src={item.src} alt={item.alt} loading={compact?"lazy":"eager"}/></div><figcaption><span>{item.source}</span><span>{String(index+1).padStart(2,"0")}</span></figcaption></figure>;
}
function CaseStudy({study,onClose,initialSample=0,initialTab=0}:{study:Study;onClose:()=>void;initialSample?:number;initialTab?:number}){
 const dialog=useRef<HTMLDialogElement>(null);const focusSample=useRef(false);const[tab,setTab]=useState(initialTab);const[sample,setSample]=useState(initialSample);const[enlarged,setEnlarged]=useState(false);const tabs=["Work samples","Role & scope","Strategy","Deliverables",...(study.story?["Project story"]:[])];
 useEffect(()=>{dialog.current?.showModal();const prev=document.body.style.overflow;document.body.style.overflow="hidden";return()=>{document.body.style.overflow=prev}},[]);
 function keyTabs(e:React.KeyboardEvent){let next=tab;if(e.key==="ArrowRight")next=(tab+1)%tabs.length;else if(e.key==="ArrowLeft")next=(tab+tabs.length-1)%tabs.length;else if(e.key==="Home")next=0;else if(e.key==="End")next=tabs.length-1;else return;e.preventDefault();setTab(next);requestAnimationFrame(()=>document.getElementById(`study-tab-${next}`)?.focus())}
 useEffect(()=>{if(tab===0&&focusSample.current){document.getElementById("study-panel-0")?.focus();focusSample.current=false}},[tab,sample]);
 function inspectChoice(index:number){focusSample.current=true;setSample(index);setEnlarged(false);setTab(0)}
 return <dialog ref={dialog} className="case-dialog" onCancel={onClose} onClick={e=>{if(e.target===e.currentTarget)onClose()}} aria-labelledby="study-title"><div className="dialog-inner"><div className="dialog-top"><span className="eyebrow">{study.type} / {study.category}</span><button autoFocus className="icon-button" onClick={onClose} aria-label="Close case study"><X size={21}/></button></div><h2 id="study-title">{study.name}</h2><p className="dialog-intro">{study.title}</p><div className="study-tabs" role="tablist" aria-label="Case study sections" onKeyDown={keyTabs}>{tabs.map((t,i)=><button key={t} role="tab" id={`study-tab-${i}`} aria-selected={tab===i} aria-controls={`study-panel-${i}`} tabIndex={tab===i?0:-1} onClick={()=>setTab(i)}>{t}</button>)}</div><div className="study-panel" role="tabpanel" id={`study-panel-${tab}`} aria-labelledby={`study-tab-${tab}`} tabIndex={0}>
 {tab===0&&<div className={`sample-explorer ${enlarged?"enlarged":""}`}><Sample study={study} index={sample}/><div className="sample-sidebar"><span className="eyebrow">EXPLORE THE WORK</span><h3>{study.samples[sample].title}</h3><p>{study.samples[sample].text}</p><div className="sample-controls"><button className="icon-button" onClick={()=>setSample((sample+study.samples.length-1)%study.samples.length)} aria-label="Previous work sample"><ArrowLeft size={18}/></button><span aria-live="polite">{sample+1} / {study.samples.length}</span><button className="icon-button" onClick={()=>setSample((sample+1)%study.samples.length)} aria-label="Next work sample"><ArrowRight size={18}/></button></div><div className="sample-view-actions"><button onClick={()=>setEnlarged(!enlarged)} aria-pressed={enlarged} aria-label={enlarged?"Fit work sample":"Enlarge work sample"}>{enlarged?"Fit sample":"Enlarge sample"} <Plus size={13}/></button><a href={study.samples[sample].src} target="_blank" rel="noreferrer">View full-size image <ArrowUpRight size={13}/></a>{study.samples[sample].file&&<a className="original-file-link" href={study.samples[sample].file} target="_blank" rel="noreferrer" download={study.samples[sample].file?.endsWith(".xlsx")}>{study.samples[sample].fileLabel||"Open original file"} <ArrowUpRight size={13}/></a>}</div>{study.samples.length>3&&<label className="sample-select-label">Jump to a sample<select aria-label="Choose work sample" value={sample} onChange={e=>setSample(Number(e.target.value))}>{study.samples.map((item,i)=><option key={item.src} value={i}>{i+1}. {item.title}</option>)}</select></label>}<span className="small-note">{study.samples[sample].source}</span></div></div>}

 {tab===1&&<div className="role-panel"><span className="eyebrow">ROLE / SCOPE</span><h3>{study.role}</h3><p>{study.roleDetail}</p><div className="capabilities">{study.capabilities.map((c,i)=><div key={c}><span>0{i+1}</span>{c}<Check size={16}/></div>)}</div></div>}
 {tab===2&&<div className="strategy-panel"><p className="panel-note">The thinking behind the work.</p>{study.strategy.map((s,i)=><div className="strategy-step" key={s.title}><span>0{i+1}</span><div><h3>{s.title}</h3><p>{s.text}</p></div></div>)}</div>}
 {tab===3&&<div className="outcome-panel"><span className="eyebrow">THE OUTPUT & CONTEXT</span><h3>{study.outcome}</h3><p>{study.detail}</p><div className="evidence-note"><Check size={18}/><span>{study.evidence}</span></div><a className="text-link" href="#contact" onClick={onClose}>Let’s talk about your goals <ArrowUpRight size={17}/></a></div>}
 {tab===4&&study.story&&<div className="project-story"><div className="story-intro"><span className="eyebrow">CONTEXT / APPROACH / REVIEW</span><h3>The thinking, connected to the work.</h3><p>{study.story.intro}</p></div><dl className="story-facts">{study.story.facts.map(f=><div key={f.label}><dt>{f.label}</dt><dd>{f.value}</dd></div>)}</dl><div className="story-choices">{study.story.choices.map((c,i)=><article className="story-choice" key={c.title}><span className="story-number">0{i+1}</span><div><h4>{c.title}</h4><p>{c.reason}</p><p className="story-approach">{c.approach}</p><button className="text-link" onClick={()=>inspectChoice(c.sampleIndex)}>{c.linkLabel} <ArrowUpRight size={16}/></button></div></article>)}</div><div className="story-review"><span className="eyebrow">HOW I WOULD REVIEW & REFINE</span><h4>What I would look at next.</h4><p>{study.story.review}</p></div><p className="story-context">{study.story.context}</p><a className="text-link" href="#contact" onClick={onClose}>Let’s talk about your brand <ArrowUpRight size={16}/></a></div>}
 </div></div></dialog>
}
export default function Home(){
 const[menu,setMenu]=useState(false);const[active,setActive]=useState<Study|null>(null);const[activeSample,setActiveSample]=useState(0);const[activeTab,setActiveTab]=useState(0);const[copied,setCopied]=useState(false);const[copyError,setCopyError]=useState(false);const[activeSection,setActiveSection]=useState("top");const[sampleFilter,setSampleFilter]=useState("All samples");const[preview,setPreview]=useState("carousel");const[featuredSlide,setFeaturedSlide]=useState(0);const[selectedService,setSelectedService]=useState("Help me choose");const[projectBrief,setProjectBrief]=useState("");const trigger=useRef<HTMLButtonElement|null>(null);
 const planpadi=driveCollections.find(s=>s.id==="planpadi-original")!;const glow=driveCollections.find(s=>s.id==="glow-blueprint")!;
 useEffect(()=>{const fn=(e:KeyboardEvent)=>{if(e.key==="Escape")setMenu(false)};const onScroll=()=>{for(const id of ["top","work","services","about","work-samples","reels","tools","contact"]){const el=document.getElementById(id);if(el){const r=el.getBoundingClientRect();if(r.top<=180&&r.bottom>180)setActiveSection(id==="work-samples"||id==="reels"?"work":id)}}};window.addEventListener("keydown",fn);window.addEventListener("scroll",onScroll,{passive:true});return()=>{window.removeEventListener("keydown",fn);window.removeEventListener("scroll",onScroll)}},[]);
 function closeStudy(){setActive(null);requestAnimationFrame(()=>trigger.current?.focus())}
 function openStudy(study:Study,button:HTMLButtonElement,initialSample=0,initialTab=0){trigger.current=button;setActiveSample(initialSample);setActiveTab(initialTab);setActive(study)}
 async function copyEmail(){try{await navigator.clipboard.writeText("shabiawanat47@gmail.com");setCopied(true);setCopyError(false);setTimeout(()=>setCopied(false),2500)}catch{setCopyError(true)}}
 const shownCollections=driveCollections.filter(s=>sampleFilter==="All samples"||s.category===sampleFilter);
 const navItems=[{id:"top",label:"Home"},{id:"work",label:"Work"},{id:"services",label:"Services"},{id:"about",label:"About"},{id:"tools",label:"Tools"}];
 const enquiry=`Hi Yetunde,\n\nI’m interested in: ${selectedService}.\n\n${projectBrief.trim()||"My brand / business:\nThe support I need:\nPlatforms:\n"}`;
 const emailBrief=`mailto:shabiawanat47@gmail.com?subject=${encodeURIComponent("Portfolio enquiry · "+selectedService)}&body=${encodeURIComponent(enquiry)}`;
 const whatsappBrief=`https://wa.me/2348105189626?text=${encodeURIComponent(enquiry)}`;
 function previewKeys(e:React.KeyboardEvent){const modes=["carousel","calendar","reel"];let next=modes.indexOf(preview);if(e.key==="ArrowRight")next=(next+1)%3;else if(e.key==="ArrowLeft")next=(next+2)%3;else if(e.key==="Home")next=0;else if(e.key==="End")next=2;else return;e.preventDefault();setPreview(modes[next]);requestAnimationFrame(()=>document.getElementById(`preview-tab-${modes[next]}`)?.focus())}
 return <>
 <a className="skip-link" href="#main">Skip to content</a>
 <header className="site-header"><div className="header-inner"><a className="wordmark" href="#top" aria-label="Yetunde Shabi home"><span className="brand-monogram">Y</span>Yetunde<span className="brand-dot">.</span></a><nav className={menu?"nav open":"nav"} id="main-nav" aria-label="Main navigation">{navItems.map(n=><a key={n.id} href={`#${n.id}`} aria-current={activeSection===n.id?"location":undefined} onClick={()=>setMenu(false)}>{n.label}</a>)}<a onClick={()=>setMenu(false)} className="nav-contact" href="#contact">Let’s work together <ArrowUpRight size={15}/></a></nav><button className="menu-toggle icon-button" aria-label={menu?"Close navigation":"Open navigation"} aria-expanded={menu} aria-controls="main-nav" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></div></header>
 <main id="main">
 <section className="hero section-wrap" id="top" aria-labelledby="hero-title"><div className="hero-copy"><span className="eyebrow">YETUNDE SHABI / SOCIAL MEDIA MANAGER</span><h1 id="hero-title">Your social media.<br/><em>Thoughtfully managed.</em></h1><h2 className="hero-intro">A clear plan, content that fits,<br className="desktop-break"/> and someone to keep it moving.</h2><p>I turn your brand’s ideas into a practical content plan, create the posts and Reels, and help keep your social presence consistent—from publishing to the everyday conversations.</p><ol className="hero-flow" aria-label="My areas of support"><li>Plan the content</li><li>Create with purpose</li><li>Manage the presence</li></ol><div className="hero-actions"><a className="button primary" href="#work">See the Planpadi work <span><ArrowUpRight size={18}/></span></a><a className="button outline-button" href="#services">Find your support <ArrowRight size={16}/></a></div><p className="hero-location">Based in Nigeria · Working remotely</p></div><div className="hero-portrait-stage"><div className="portrait-orbit" aria-hidden="true"/><div className="portrait-window"><img src="./work/yetunde-portrait.webp" alt="Yetunde Shabi in a cream blazer" fetchPriority="high"/></div><a className="portrait-seal" href="#contact" aria-label="Let’s talk about your brand"><span>LET’S TALK</span><ArrowUpRight size={26}/></a><span className="portrait-tag tag-one">Strategy into content</span><span className="portrait-tag tag-two">Your thoughtful brand partner</span></div></section>
 <div className="expertise-strip" aria-label="Areas of focus"><div className="section-wrap"><span>Content strategy</span><i aria-hidden="true">✳</i><span>Creative content</span><i aria-hidden="true">✳</i><span>Community care</span><i aria-hidden="true">✳</i><span>Social media management</span></div></div>
 <section className="featured-work section-wrap" id="work" aria-labelledby="work-title"><div className="section-intro"><span className="section-kicker">Selected work</span><h2 id="work-title">The plan. The content.<br/><em>See how they connect.</em></h2><p>Start with Planpadi: a connected collection of product education, audience conversation, visual content and planning.</p></div>
 <article className="featured-project planpadi-feature"><div className="featured-preview"><div className="preview-tabs" role="tablist" aria-label="Explore Planpadi work" onKeyDown={previewKeys}>{[{id:"carousel",label:"Carousel"},{id:"calendar",label:"Calendar"},{id:"reel",label:"Reel"}].map(t=><button key={t.id} role="tab" id={`preview-tab-${t.id}`} aria-controls="preview-panel" aria-selected={preview===t.id} tabIndex={preview===t.id?0:-1} onClick={()=>setPreview(t.id)}>{t.label}</button>)}</div><div id="preview-panel" className={`featured-preview-panel ${preview}`} role="tabpanel" aria-labelledby={`preview-tab-${preview}`} tabIndex={0}>
 {preview==="carousel"&&<><button className="featured-art-button" onClick={e=>openStudy(planpadi,e.currentTarget,featuredSlide)} aria-label="Open Planpadi carousel"><img src={planpadi.samples[featuredSlide].src} alt={planpadi.samples[featuredSlide].alt} loading="lazy"/><span><Plus size={15}/> Read the carousel</span></button><div className="featured-slide-controls"><button className="icon-button" onClick={()=>setFeaturedSlide((featuredSlide+4)%5)} aria-label="Previous featured slide"><ArrowLeft size={17}/></button><span aria-live="polite">{featuredSlide+1} / 5</span><button className="icon-button" onClick={()=>setFeaturedSlide((featuredSlide+1)%5)} aria-label="Next featured slide"><ArrowRight size={17}/></button></div></>}
 {preview==="calendar"&&<button className="featured-art-button calendar-art" onClick={e=>openStudy(planpadi,e.currentTarget,8)} aria-label="Open Planpadi content calendar"><img src="./work/drive/two-week-calendar-preview.webp" alt="Planpadi two-week content calendar with ideas, pillars, objectives and formats" loading="lazy"/><span><Plus size={15}/> Explore the plan</span></button>}
 {preview==="reel"&&<div className="featured-video"><video controls playsInline preload="metadata" src="./work/drive/planpadi-reel.mp4" poster="./work/drive/planpadi-poster.webp" aria-label="Planpadi brand reel preview"/><p>Brand reel · 14 seconds</p></div>}
 </div></div><div className="featured-story"><span className="project-label">PLANPADI / LIVE BRAND WORK</span><h3>Making an event platform<br/><em>feel closer to its audience.</em></h3><p>I managed Planpadi’s live social accounts and created content around product education, event discovery and audience conversation. Here’s how the creative work connects to the plan.</p><dl className="project-facts"><div><dt>My role</dt><dd>Live account management · content planning & creation</dd></div><div><dt>Formats</dt><dd>Carousels · social graphics · Reels · calendar</dd></div></dl><div className="project-thread"><div><span>01</span><p><strong>Explain the product.</strong> A feature carousel turns platform information into a clear, useful sequence.</p></div><div><span>02</span><p><strong>Start a conversation.</strong> Event questions and brand messages give the audience a way to participate.</p></div><div><span>03</span><p><strong>Connect it to a plan.</strong> The calendar gives each idea a content pillar, purpose and format.</p></div></div><button className="text-link" onClick={e=>openStudy(planpadi,e.currentTarget,0,4)} aria-label="Explore Planpadi content collection case study">Read the project story <ArrowUpRight size={17}/></button></div></article>
 <article className="featured-project strategy-feature"><button className="strategy-cover-button" onClick={e=>openStudy(glow,e.currentTarget)} aria-label="Preview The Glow Blueprint"><img src={glow.samples[0].src} alt="The Glow Blueprint, a skincare content strategy example" loading="lazy"/><span>STRATEGY EXAMPLE <ArrowUpRight size={16}/></span></button><div className="strategy-feature-copy"><span className="project-label">SKINCARE / STRATEGY EXAMPLE</span><h3>The Glow Blueprint.<br/><em>A direction before the next post.</em></h3><p>A proposed 12-week content system for a skincare brand: audience segments, tone of voice, content pillars, platform direction and a working calendar.</p><div className="project-tags"><span>Audience & voice</span><span>Content sequencing</span><span>Calendar & KPI framework</span></div><p className="project-context">A planning example with illustrative captions and tracking templates.</p><div className="project-actions"><button className="text-link" onClick={e=>openStudy(glow,e.currentTarget,0,4)} aria-label="Explore The Glow Blueprint case study">Explore the strategy thinking <ArrowUpRight size={17}/></button><a href="./work/drive/skincare-strategy.pdf" target="_blank" rel="noreferrer">Read the full PDF <ArrowUpRight size={14}/></a></div></div></article>
 <div className="work-next-step"><p>Want this level of thought behind your brand?</p><a className="text-link" href="#services">Find the right support <ArrowRight size={16}/></a></div></section>
 <section className="engagement-section" id="services" aria-labelledby="services-title"><div className="section-wrap"><div className="section-intro"><span className="section-kicker">Ways to work together</span><h2 id="services-title">The support you need.<br/><em>A scope that makes sense.</em></h2><p>Choose a starting point. We’ll shape the work around your brand, your channels and what you need help with.</p></div><div className="engagement-grid">{services.map((s,i)=><article className="engagement-card" key={s.title}><div className="engagement-label"><span>0{i+1}</span>{s.label}</div><h3>{s.title}</h3><p>{s.text}</p><ul>{s.items.map(item=><li key={item}><Check size={14}/>{item}</li>)}</ul><a href="#contact" className="text-link" onClick={()=>setSelectedService(s.title)} aria-label={s.cta}>{s.cta} <ArrowUpRight size={16}/></a></article>)}</div><p className="engagement-note">We’ll agree the platforms, content volume, responsibilities and reporting rhythm before work begins.</p></div></section>
 <section className="about-section" id="about" aria-labelledby="about-title"><div className="section-wrap about-grid"><div className="about-image-column"><div className="about-portrait-frame"><img src="./work/yetunde-portrait.webp" alt="Yetunde Shabi, social media manager and content strategist" loading="lazy"/></div><div className="portrait-caption"><span>YETUNDE SHABI</span><span>A person behind every plan.</span></div></div><div className="about-copy"><span className="section-kicker">The person behind the work</span><h2 id="about-title">I care about the content.<br/><em>And what happens around it.</em></h2><p>I’m Yetunde Shabi, a Nigeria-based social media manager and content strategist. I bring together planning, hands-on creative work and the everyday care that keeps a brand’s presence moving.</p><p>I like content with a clear job to do: explain an idea, help someone make a decision, or start a useful conversation. That’s why I think about the calendar, the captions and the community together.</p><p>My work includes event-brand content, property visuals, educational carousels and content-planning systems. You can explore the complete sets below.</p><div className="about-credentials"><a href="./work/drive/certificate-01.pdf" target="_blank" rel="noreferrer">Meta Social Media Management · 2026 ↗</a><a href="./work/drive/certificate-03.webp" target="_blank" rel="noreferrer">Canva Reel Cover project · 2026 ↗</a></div><details className="credential-details"><summary>More training & certificates <Plus size={14}/></summary><p>ALX AI Career Essentials · completed 2024.</p><p><a href="./work/drive/certificate-02.webp" target="_blank" rel="noreferrer">HubSpot Social Media certificate ↗</a> · issued 2024, valid through March 2026.</p></details></div></div></section>
 <section className="collection-section section-wrap" id="work-samples" aria-labelledby="collection-title"><div className="section-intro"><span className="section-kicker">The work library</span><h2 id="collection-title">Look a little <em>closer.</em></h2><p>Browse complete creative sets, strategy pages and planning files. Each collection includes its scope, thinking and deliverables.</p></div><div className="collection-filters filters" aria-label="Filter work-sample collections">{["All samples","Content","Strategy","Planning","Analytics"].map(f=><button key={f} aria-pressed={sampleFilter===f} className={sampleFilter===f?"active":""} onClick={()=>setSampleFilter(f)}>{f}</button>)}</div><p className="collection-result-count" aria-live="polite">{shownCollections.length} {shownCollections.length===1?"collection":"collections"} to explore</p><div className="collection-grid">{shownCollections.map(c=><button key={c.id} className="collection-card" onClick={e=>openStudy(c,e.currentTarget)} aria-label={`Explore ${c.name} collection`}><div className={`collection-cover ${c.id}`}><img src={c.samples[0].src} alt={c.samples[0].alt} loading="lazy"/><span>{c.samples.length} samples <ArrowUpRight size={14}/></span></div><div className="collection-card-copy"><span className="collection-category">{c.type}</span><h3>{c.name}</h3><p>{c.summary}</p><span className="collection-open">Open the collection <ArrowRight size={15}/></span></div></button>)}</div><div className="library-footer"><p>Full carousels, strategy pages and editable planning files are available to explore.</p><a className="text-link folder-link" href="https://drive.google.com/drive/folders/1bwWUl5EkJHwYMLXATJ4OAfZJF2hvS7g_?usp=drive_link" target="_blank" rel="noreferrer">Browse the original files <ArrowUpRight size={15}/></a></div><details className="supporting-library"><summary>More portfolio work & tool demonstrations <Plus size={19}/></summary><div className="reference-grid">{studies.map(s=><button className="reference-card" key={s.id} onClick={e=>openStudy(s,e.currentTarget)} aria-label={`Explore ${s.name} case study`}><img src={s.samples[0].src} alt={s.samples[0].alt} loading="lazy"/><div><span>{s.type}</span><h3>{s.name}</h3><p>{s.summary}</p><span className="reference-open">Explore <ArrowUpRight size={15}/></span></div></button>)}</div></details></section>
 <section className="reels-section" id="reels" aria-labelledby="reels-title"><div className="section-wrap"><div className="section-intro"><span className="section-kicker">Reels & short-form video</span><h2 id="reels-title">Content built <em>for the feed.</em></h2><p>Destination storytelling and brand messaging, brought to life through short-form video.</p></div><div className="reels-grid">{[{title:"Lagos discovery reel",src:"./work/drive/destination-reel.mp4",poster:"./work/drive/destination-poster.webp",duration:"50 sec",text:"Destination imagery, location labels and paced transitions carry a Planpadi discovery story."},{title:"Planpadi brand reel",src:"./work/drive/planpadi-reel.mp4",poster:"./work/drive/planpadi-poster.webp",duration:"14 sec",text:"Animated phone frames bring a branded ticketing message into a short, focused reel."}].map(v=><article className="reel-card" key={v.src}><div className="reel-video-wrap"><video controls playsInline preload="metadata" poster={v.poster} src={v.src} aria-label={v.title}/></div><div className="reel-meta"><span>PLANPADI / REEL SAMPLE</span><span>{v.duration}</span></div><h3>{v.title}</h3><p>{v.text}</p></article>)}</div><a className="text-link reel-enquiry" href="#contact" onClick={()=>setSelectedService("Content creation support")}>Let’s talk about your content <ArrowUpRight size={16}/></a></div></section>
 <section className="tools-section section-wrap" id="tools" aria-labelledby="tools-title"><div className="section-intro"><span className="section-kicker">A practical toolkit</span><h2 id="tools-title">Tools that support <em>the process.</em></h2></div><div className="tools-grid">{[{title:"Content & planning",items:["Canva","Google Sheets"]},{title:"Management & publishing",items:["Meta Business Suite","Buffer","Hootsuite"]},{title:"Reporting & insights",items:["Sprout Social","Platform analytics"]},{title:"Team communication",items:["Trello","Slack","Zoom"]}].map((group,i)=><div className="tool-group" key={group.title}><span className="tool-number">0{i+1}</span><h3>{group.title}</h3><ul>{group.items.map(t=><li key={t}>{t}</li>)}</ul></div>)}</div></section>
 <section className="start-section section-wrap" aria-labelledby="start-title"><span className="section-kicker">Getting started</span><h2 id="start-title">A clear next step.<br/><em>Then a clear way forward.</em></h2><div className="start-grid">{[{title:"Tell me what you need",text:"Share your brand, your channels and the parts of social media you’d like support with."},{title:"Agree what I’ll handle",text:"We’ll define the deliverables, responsibilities, approval process and working rhythm."},{title:"Start with a practical plan",text:"The agreed direction becomes a content plan and a workflow we can create, publish and review around."}].map((step,i)=><div key={step.title}><span>0{i+1}</span><h3>{step.title}</h3><p>{step.text}</p></div>)}</div></section>
 <section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="section-wrap contact-grid"><div className="contact-copy"><span className="section-kicker">Let’s work together</span><h2 id="contact-title">What would you like<br/><em>to take off your plate?</em></h2><p>Tell me about your brand and the support you need. We’ll use that conversation to shape a scope that fits.</p><div className="direct-contact"><div className="email-line"><a href="mailto:shabiawanat47@gmail.com">shabiawanat47@gmail.com</a><button className="copy-button" onClick={copyEmail} aria-label="Copy email address">{copied?<Check size={17}/>:<Copy size={17}/>}</button></div><span className="copy-status" aria-live="polite">{copied?"Email address copied":copyError?"Please select the email address to copy it.":""}</span><p>Nigeria · Working remotely</p></div></div><div className="contact-details brief-card"><span className="eyebrow">START WITH A SHORT BRIEF</span><label htmlFor="support-choice">What do you need support with?</label><select id="support-choice" value={selectedService} onChange={e=>setSelectedService(e.target.value)}><option>Help me choose</option>{services.map(s=><option key={s.title}>{s.title}</option>)}</select><label htmlFor="project-brief">Your brand and what you need</label><textarea id="project-brief" value={projectBrief} onChange={e=>setProjectBrief(e.target.value)} maxLength={1000} rows={4} placeholder="A little about your business, your channels and what you’d like help with…"/><a className="button brief-send" href={emailBrief} aria-label="Email project brief">Email your brief <ArrowUpRight size={17}/></a><a className="whatsapp-link" href={whatsappBrief} target="_blank" rel="noreferrer"><MessageCircle size={18}/>Or continue on WhatsApp <ArrowUpRight size={16}/></a><p className="draft-note">Your brief opens as a draft in your chosen app. You review it and send it.</p></div></div></section>
 </main><footer className="site-footer"><div className="section-wrap footer-inner"><a className="wordmark" href="#top"><span className="brand-monogram">Y</span>Yetunde Shabi<span className="brand-dot">.</span></a><p>Social Media Manager & Content Strategist</p><a href="#top">Back to top <ArrowUpRight size={15}/></a></div></footer>{active&&<CaseStudy key={`${active.id}-${activeSample}`} study={active} initialSample={activeSample} initialTab={activeTab} onClose={closeStudy}/>}</>
}
