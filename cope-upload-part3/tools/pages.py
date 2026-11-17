"""Page bodies for the COPE site. Run tools/build.py to regenerate the HTML pages
and the single-file preview. Lists (events, partners, news...) come from assets/js/data.js."""

PAGES = {}

PAGES["home"] = ("COPE | Communities Organizing for Prevention and Empowerment", """
<section class="hero"><div class="wrap">
  <div class="hero-copy">
    <span class="eyebrow">A Montclair State University initiative · Serving Paterson, NJ</span>
    <h1><span class="w">Community.</span><span class="w">Hope.</span><span class="w">Enduring.</span></h1>
    <p class="lede">Free prevention workshops, youth leadership, community events and research on substance use, mental health and HIV, built with the people of Paterson.</p>
    <div class="hero-actions"><a class="btn" data-href="workshops">Book a workshop</a><a class="btn alt" data-href="local-legends">Nominate a Local Legend</a></div>
  </div>
  <div class="collage" aria-hidden="true">
    <figure class="frame f1"><div class="ph" data-src="home-hero-community.jpg" data-alt="COPE community event"></div><figcaption>Community</figcaption></figure>
    <figure class="frame f2"><div class="ph" data-src="home-hero-youth.jpg" data-alt="Youth at a COPE workshop"></div><figcaption>Hope</figcaption></figure>
    <figure class="frame f3"><div class="ph" data-src="home-hero-cleanup.jpg" data-alt="Paterson cleanup volunteers"></div><figcaption>Enduring</figcaption></figure>
    <span class="sticker">35+ partners</span>
  </div>
</div></section>

<section class="block"><div class="wrap"><div class="stats" data-render="stats"></div></div></section>

<section class="block tint"><div class="wrap">
  <div class="section-head"><span class="eyebrow">Our mission</span><p class="quote">Empowering the community to build a <span class="mark">safe, healthy, and drug-free</span> Paterson.</p></div>
  <div class="pillars">
    <div class="pillar"><span class="big">Individuals</span><p>Culturally tailored substance use, HIV/AIDS and viral hepatitis health promotion for underserved populations.</p></div>
    <div class="pillar"><span class="big">Community</span><p>Dismantle the social structures that promote underage alcohol and drug use, and reduce youth access to alcohol and tobacco.</p></div>
    <div class="pillar"><span class="big">Policy</span><p>Research and youth-led advocacy that changes local policy, like Paterson&rsquo;s Tobacco 21 ordinance.</p></div>
  </div>
</div></section>

<section class="block"><div class="wrap">
  <div class="section-head split"><div class="stack" style="gap:10px"><span class="eyebrow">What we offer</span><h2>Workshops &amp; trainings</h2></div><a class="btn alt" data-href="workshops">See all</a></div>
  <div class="grid" data-render="workshopPreview"></div>
</div></section>

<section class="block ink"><div class="wrap">
  <div class="section-head"><span class="eyebrow">Funded programs</span><h2>Grants &amp; initiatives we run</h2></div>
  <div class="grid" data-render="initiativeCards"></div>
</div></section>

<section class="block"><div class="wrap">
  <div class="section-head split"><div class="stack" style="gap:10px"><span class="eyebrow">Happening now</span><h2>Ongoing in the community</h2></div><a class="btn alt" data-href="community">All events</a></div>
  <div class="events" data-render="events" data-limit="2"></div>
</div></section>

<section class="block tint"><div class="wrap split">
  <div class="stack"><span class="eyebrow">Latest</span><h2>News</h2><div data-render="announcements" data-limit="3"></div><p><a data-href="news">All news &amp; newsletters →</a></p></div>
  <div class="stack"><span class="eyebrow">New initiative</span><h2>Local Legends</h2><p class="lede">Recognizing the businesses, people and community picks that make Paterson stronger.</p><div class="ph wide" data-src="local-legends-banner.jpg" data-alt="Local Legends"></div><a class="btn" data-href="local-legends">Nominate someone</a></div>
</div></section>

<section class="block"><div class="wrap">
  <div class="section-head split"><div class="stack" style="gap:10px"><span class="eyebrow">Who we work with</span><h2>Partners &amp; schools</h2></div><a class="btn alt" data-href="partners">All partners</a></div>
  <div class="logo-wall" data-render="partnerStrip"></div>
</div></section>

<section class="cta-band"><div class="wrap"><h2>Bring COPE to your school or group</h2><div class="hero-actions"><a class="btn" data-href="contact">Contact us</a><a class="btn alt" data-href="resources">Find resources</a></div></div></section>
""")

PAGES["about"] = ("About Us | COPE", """
<section class="page-head"><div class="wrap"><span class="eyebrow">About us</span><h1>Prevention, built with the community</h1>
<p class="lede" data-org="about"></p></div></section>

<section class="block"><div class="wrap split">
  <div class="stack"><span class="eyebrow">Mission</span><p class="quote" data-org="mission" style="font-size:1.5rem;max-width:none;text-transform:none;font-weight:700"></p></div>
  <div class="ph natural" data-src="about-team.jpg" data-alt="The COPE team"></div>
</div></section>

<section class="block tint"><div class="wrap">
  <div class="section-head"><span class="eyebrow">Goals &amp; objectives</span><h2>Two levels of change</h2></div>
  <div class="grid two">
    <div class="card"><div class="body"><span class="eyebrow">Individual level</span><h3>Health promotion people can use</h3><p>Provide culturally tailored substance abuse, HIV/AIDS, and viral hepatitis health promotion curricula that target underserved populations.</p></div></div>
    <div class="card"><div class="body"><span class="eyebrow">Community level</span><h3>Change the conditions</h3><p>Dismantle the social structures that promote underage alcohol and drug use while striving to reduce youth access to alcohol and tobacco products.</p></div></div>
  </div>
</div></section>

<section class="block"><div class="wrap split">
  <div class="stack"><span class="eyebrow">What we do</span><h2>Five ways we work</h2><p class="lede">From the classroom to City Council, COPE works at every level of prevention.</p><a class="btn alt" data-href="approach">See our approach</a></div>
  <div data-render="whatWeDo"></div>
</div></section>

<section class="block tint"><div class="wrap">
  <div class="section-head"><span class="eyebrow">Points of access</span><h2>Where you'll find us</h2></div>
  <div class="chips big"><span class="chip">In-school programs</span><span class="chip">After school &amp; summer programs</span><span class="chip">Schools &amp; alternative programs</span><span class="chip">Recovery programs</span><span class="chip">Community programs &amp; stakeholders</span></div>
</div></section>

<section class="block"><div class="wrap">
  <div class="section-head"><span class="eyebrow">Our story</span><h2>Our history</h2></div>
  <p class="lede">Since 2003, COPE's prevention projects have focused on reducing health disparities and improving health outcomes among racial and ethnic youth and young adults in Paterson, New Jersey, sustained by more than $8 million in federal funding.</p>
  <p>COPE is a collaborative effort between the Department of Family Science and Human Development in the College of Education and Human Services at Montclair State University and stakeholders across Paterson: families, schools, municipal government, law enforcement, social services, local businesses and faith-based institutions.</p>
  <div class="big-num" style="margin-top:8px"><div><b>2003</b><span>serving Paterson since</span></div><div><b>$8M+</b><span>in federal funding</span></div><div><b>30,000+</b><span>Paterson youth and young adults reached</span></div></div>
  <div class="section-head" style="margin-top:36px"><span class="eyebrow">Proven results</span><h2>What the research shows</h2></div>
  <p>Outcome evaluations by the Center for Prevention Science at Rutgers University, the University of Iowa College of Public Health and the University of New Mexico found that teens in our programs showed significant reductions in substance use and sexual risk behaviors, and marked increases in social support, family cohesion and community involvement.</p>
  <p>Our work was recognized by the U.S. Department of Health and Human Services, Center for Substance Abuse Prevention (CSAP), for having a substantial impact on advancing the agency's mission.</p>
</div></section>

<section class="block tint"><div class="wrap">
  <div class="section-head"><span class="eyebrow">People</span><h2>Our team</h2></div>
  <div class="grid" data-render="team"></div>
</div></section>
""")

PAGES["initiatives"] = ("Grants & Initiatives | COPE", """
<section class="page-head"><div class="wrap"><span class="eyebrow">Grants &amp; initiatives</span><h1>The programs we're funded to run</h1>
<p class="lede">Each initiative below is supported by grant funding and delivered in partnership with the community.</p></div></section>
<section class="block"><div class="wrap" data-render="initiatives"></div></section>
""")

PAGES["workshops"] = ("Workshops & Trainings | COPE", """
<section class="page-head"><div class="wrap"><span class="eyebrow">Workshops &amp; trainings</span><h1>Learning that sticks</h1>
<p class="lede">Interactive, game-based lessons built for real-world impact: activities, games and discussion, not just lectures. Flexible for teens, parents and community groups.</p></div></section>
<section class="block"><div class="wrap">
  <div class="info-strip"><span>Free</span><span>English or Spanish</span><span>45 minutes to 2 hours</span><span>Middle &amp; high school</span><span>Schedule: 973-655-6785 · ProjectCope@montclair.edu</span></div>
  <div data-render="workshops"></div>
</div></section>
<section class="block tint"><div class="wrap">
  <div class="section-head"><span class="eyebrow">Evidence-based prevention curriculum</span><h2>The full series</h2><p class="lede">Workshops marked evidence-based run together as a multi-session curriculum with pre- and post-surveys, so schools can see what changed.</p></div>
  <div data-render="curriculum"></div>
  <div class="section-head" style="margin-top:40px"><span class="eyebrow">In the classroom</span><h2>Workshops in action</h2></div>
  <div class="mini-gallery three"><div class="zoom"><div class="ph" data-src="workshops-in-action-1.jpg" data-alt="COPE workshop in a classroom"></div></div><div class="zoom"><div class="ph" data-src="workshops-in-action-2.jpg" data-alt="Students at a COPE vaping workshop"></div></div><div class="zoom"><div class="ph" data-src="workshop-topic-substance-use.jpg" data-alt="COPE educator leading a workshop"></div></div></div>
</div></section>
<section class="block tint" id="bring-a-partner"><div class="wrap split">
  <div class="stack"><span class="eyebrow">Partner workshops</span><h2>We can bring in partners</h2>
    <p class="lede">COPE can bring partners like Planned Parenthood, the Partnership for Maternal &amp; Child Health of Northern New Jersey and other organizations that provide education into your workshop.</p>
    <p>Send us an inquiry and we&rsquo;ll follow up.</p></div>
  <form class="form" data-form="Partner workshop inquiry">
    <div class="row">
      <div class="field"><label for="pw-name">Name</label><input id="pw-name" name="name" required></div>
      <div class="field"><label for="pw-email">Email</label><input id="pw-email" type="email" name="email" required></div>
    </div>
    <div class="row">
      <div class="field"><label for="pw-org">School or organization</label><input id="pw-org" name="organization"></div>
      <div class="field"><label for="pw-aud">Who is the workshop for?</label><input id="pw-aud" name="audience" placeholder="e.g. 9th graders, parents"></div>
    </div>
    <div class="field"><label for="pw-topic">Topic or partner you&rsquo;re interested in</label><textarea id="pw-topic" name="message" required></textarea></div>
    <button class="btn" type="submit">Send inquiry</button>
    <p class="form-status" role="status" hidden></p>
  </form>
</div></section>
<section class="block"><div class="wrap">
  <div class="section-head"><span class="eyebrow">Trainings</span><h2>For professionals &amp; youth leaders</h2></div>
  <div class="grid two" data-render="trainings"></div>
</div></section>
<section class="cta-band"><div class="wrap"><h2>Want one at your school or org?</h2><a class="btn" data-href="contact">Request a workshop</a></div></section>
""")

PAGES["youth"] = ("Youth Groups & Campaigns | COPE", """
<section class="page-head"><div class="wrap"><span class="eyebrow">Youth</span><h1>Youth-led. Youth-loud.</h1>
<p class="lede">Groups where young people lead prevention work, and the campaigns they've created.</p></div></section>
<section class="block"><div class="wrap">
  <div class="section-head"><span class="eyebrow">Get involved</span><h2>Youth groups</h2></div>
  <div class="grid two" data-render="youthGroups"></div>
  <div class="section-head" style="margin-top:44px"><span class="eyebrow">How the council works</span><h2>From an idea to City Hall</h2></div>
  <div class="steps"><div class="step"><h3>Goal setting</h3><p>Youth pick an issue that matters in their neighborhood.</p></div><div class="step"><h3>Photovoice &amp; scanning</h3><p>They document it with community photovoice and environmental scans.</p></div><div class="step"><h3>Advocacy prep</h3><p>They learn advocacy and practice making their case.</p></div><div class="step"><h3>City Council</h3><p>They present to decision-makers at City Council meetings.</p></div></div>
</div></section>
<section class="block tint"><div class="wrap">
  <div class="section-head split"><div class="stack" style="gap:10px"><span class="eyebrow">Public awareness</span><h2>Campaigns</h2></div><a class="btn alt" data-href="campaigns">All campaigns &amp; infographics</a></div>
  <div class="grid" data-render="youthCampaigns"></div>
</div></section>
""")

PAGES["community"] = ("City Initiatives & Events | COPE", """
<section class="page-head"><div class="wrap"><span class="eyebrow">City initiatives</span><h1>Out in Paterson</h1>
<p class="lede">Ongoing community events, tabling across the city, and citywide efforts COPE leads and supports.</p></div></section>
<section class="block"><div class="wrap">
  <div class="section-head"><span class="eyebrow">Ongoing</span><h2>Community events</h2></div>
  <div class="big-num" style="margin-bottom:22px"><div><b>4 years</b><span>of Self-Care Fairs, 2023–2026</span></div><div><b>1,600+</b><span>students at the 2026 fair</span></div><div><b>40</b><span>organizations in 2026</span></div></div>
  <div class="events" data-render="events"></div>
</div></section>
<section class="block tint" id="join"><div class="wrap split">
  <div class="stack"><span class="eyebrow">Join a meeting</span><h2>Come to the table</h2>
    <p class="lede">The General Coalition Meeting, P.N.C. and Mental Health Advisory Council meet bi-monthly at the Paterson Public Library, 350 Broadway, or virtually.</p>
    <p>Ask to join, get our newsletter, and find out when the next meeting is.</p></div>
  <form class="form" data-form="Meeting & newsletter request">
    <div class="row">
      <div class="field"><label for="j-name">Name</label><input id="j-name" name="name" required></div>
      <div class="field"><label for="j-email">Email</label><input id="j-email" type="email" name="email" required></div>
    </div>
    <div class="row">
      <div class="field"><label for="j-org">Organization (optional)</label><input id="j-org" name="organization"></div>
      <div class="field"><label for="j-meeting">Meeting</label>
        <select id="j-meeting" name="meeting"><option>General Coalition Meeting</option><option>Paterson Networking Connection (P.N.C.)</option><option>Mental Health Advisory Council</option><option>All of them</option></select></div>
    </div>
    <label class="check"><input type="checkbox" id="j-news" name="newsletter" value="yes" checked> Add me to the newsletter</label>
    <button class="btn" type="submit">Ask to join</button>
    <p class="form-status" role="status" hidden></p>
  </form>
</div></section>
<section class="block"><div class="wrap split">
  <div class="stack"><span class="eyebrow">Community tabling</span><h2>We come to you</h2>
    <p class="lede">COPE sets up education tables wherever the community gathers, with free resources, games and real answers on substance use, mental health and HIV prevention.</p>
    <div class="chips big"><span class="chip">Trunk or treats</span><span class="chip">Community fairs</span><span class="chip">Block parties</span><span class="chip">Church events</span><span class="chip">Back-to-school events</span><span class="chip">Career fairs</span><span class="chip">And more</span></div>
    <div><a class="btn" data-href="contact">Invite us to table</a></div></div>
  <div class="stack">
    <div class="zoom"><div class="ph wide" data-src="tabling-events.jpg" data-alt="COPE tabling at a community event"></div></div>
    <div class="mini-gallery two"><div class="zoom"><div class="ph square" data-src="tabling-2.jpg" data-alt="COPE education table"></div></div><div class="zoom"><div class="ph square" data-src="tabling-trunk-or-treat.jpg" data-alt="COPE at a trunk or treat"></div></div></div>
  </div>
</div></section>
<section class="block tint"><div class="wrap">
  <div class="section-head"><span class="eyebrow">Policy &amp; advocacy</span><h2>City initiatives</h2><p class="lede">Real community change happens at the policy level too.</p></div>
  <div class="grid two" data-render="cityInitiatives"></div>
</div></section>
""")

PAGES["local-legends"] = ("Local Legends | COPE", """
<section class="page-head"><div class="wrap"><span class="eyebrow">Local Legends</span><h1>Paterson's <span class="mark">Local Legends</span></h1>
<p class="lede">An ongoing COPE initiative recognizing the people and places that make our community healthier, safer and stronger.</p></div></section>

<section class="block"><div class="wrap">
  <div class="section-head"><span class="eyebrow">Three pillars</span><h2>Who gets recognized</h2></div>
  <div class="pillars" data-render="legendPillars"></div>
</div></section>

<section class="block tint"><div class="wrap">
  <div class="section-head"><span class="eyebrow">How it works</span><h2>From nomination to legend</h2></div>
  <div class="steps">
    <div class="step"><h3>Nominate</h3><p>Anyone can submit a business or person, and tell us why.</p></div>
    <div class="step"><h3>Review</h3><p>COPE reviews every nomination.</p></div>
    <div class="step"><h3>Vote</h3><p>Finalists go to a community vote.</p></div>
    <div class="step"><h3>Celebrate</h3><p>Legends are honored and featured here.</p></div>
  </div>
</div></section>

<section class="block" id="nominate"><div class="wrap split">
  <div class="stack"><span class="eyebrow">Nominate</span><h2>Know a legend?</h2><p class="lede">Tell us who they are and why they matter. Nominations stay open year-round.</p>
    </div>
  <form class="form" data-form="Local Legends nomination">
    <fieldset class="field"><legend>Category</legend>
      <div class="pillar-pick">
        <label><input type="radio" name="category" id="cat-biz" value="Business" required><b>Business</b>A local shop or company</label>
        <label><input type="radio" name="category" id="cat-ind" value="Individual"><b>Individual</b>A person in the community</label>
        <label><input type="radio" name="category" id="cat-vote" value="Community Vote"><b>Community Vote</b>Put them up for a vote</label>
      </div></fieldset>
    <div class="row">
      <div class="field"><label for="nom-name">Nominee name</label><input id="nom-name" name="nominee_name" required></div>
      <div class="field"><label for="nom-contact">Nominee contact or location</label><input id="nom-contact" name="nominee_contact" placeholder="Business address, Instagram, phone…"></div>
    </div>
    <div class="field"><label for="nom-why">Why are they a Local Legend?</label><textarea id="nom-why" name="why" required placeholder="What have they done for the community?"></textarea></div>
    <div class="row">
      <div class="field"><label for="nom-you">Your name</label><input id="nom-you" name="nominator_name" required></div>
      <div class="field"><label for="nom-email">Your email</label><input id="nom-email" type="email" name="email" required></div>
    </div>
    <div class="field"><label for="nom-photo-link">Photo link (optional)</label><input id="nom-photo-link" name="photo_link" type="url" placeholder="Google Drive, Instagram post…"><span class="hint">Share a link to a photo of the nominee.</span></div>
    <button class="btn" type="submit">Submit nomination</button>
    <p class="form-status" role="status" hidden></p>
  </form>
</div></section>

<section class="block tint"><div class="wrap">
  <div class="section-head"><span class="eyebrow">Hall of legends</span><h2>Honorees</h2></div>
  <div class="grid" data-render="legends"></div>
</div></section>
""")

PAGES["partners"] = ("Partners | COPE", """
<section class="page-head"><div class="wrap"><span class="eyebrow">Partners</span><h1>Built with partners</h1>
<p class="lede">Schools, organizations, agencies and businesses we've worked with over the years.</p></div></section>
<section class="block"><div class="wrap" data-render="partners"></div></section>
<section class="cta-band"><div class="wrap"><h2>Partner with COPE</h2><a class="btn" data-href="contact">Start a conversation</a></div></section>
""")

PAGES["research"] = ("Research & Publications | COPE", """
<section class="page-head"><div class="wrap"><span class="eyebrow">Research</span><h1>Research &amp; publications</h1>
<p class="lede">Peer-reviewed research, policy briefs and local data that guide prevention in Paterson.</p></div></section>
<section class="block"><div class="wrap">
  <div class="section-head"><span class="eyebrow">Focus areas</span><h2>What we study</h2></div>
  <div class="pillars" data-render="researchAreas"></div>
</div></section>
<section class="block"><div class="wrap split">
  <div class="stack"><span class="eyebrow">How we collect data</span><h2>Measured, not guessed</h2><p class="lede">Every program is evaluated for fidelity, dosage and quality.</p></div>
  <div data-render="dataMethods"></div>
</div></section>
<section class="block tint"><div class="wrap">
  <div class="section-head"><span class="eyebrow">Library</span><h2>Publications, briefs &amp; infographics</h2></div>
  <div data-render="publications"></div>
</div></section>
""")

PAGES["news"] = ("News & Newsletters | COPE", """
<section class="page-head"><div class="wrap"><span class="eyebrow">News</span><h1>Announcements &amp; newsletters</h1></div></section>
<section class="block"><div class="wrap">
  <div class="tabs" role="tablist">
    <button type="button" role="tab" id="tab-ann" aria-selected="true" aria-controls="panel-ann">Announcements</button>
    <button type="button" role="tab" id="tab-nl" aria-selected="false" aria-controls="panel-nl">Newsletters</button>
  </div>
  <div id="panel-ann" role="tabpanel" data-render="announcements"></div>
  <div id="panel-nl" role="tabpanel" hidden><div class="grid" data-render="newsletters"></div></div>
</div></section>
<script>
document.addEventListener("click",function(e){var b=e.target.closest(".tabs [role=tab]");if(!b)return;
b.parentNode.querySelectorAll("[role=tab]").forEach(function(t){var on=t===b;t.setAttribute("aria-selected",on);document.getElementById(t.getAttribute("aria-controls")).hidden=!on;});});
</script>
""")

PAGES["resources"] = ("Resources | COPE", """
<section class="page-head"><div class="wrap"><span class="eyebrow">Resources</span><h1>Find help &amp; information</h1>
<p class="lede">HIV &amp; PrEP testing sites, youth helplines, quitting support, mental health and tools for educators.</p></div></section>
<section class="block"><div class="wrap"><div data-render="crisis"></div></div></section>
<section style="padding-bottom:64px"><div class="wrap" data-render="resources"></div></section>
""")

PAGES["contact"] = ("Contact | COPE", """
<section class="page-head"><div class="wrap"><span class="eyebrow">Contact</span><h1>Let's talk</h1>
<p class="lede">Book a workshop, partner with us, join a youth group, or just ask a question.</p></div></section>
<section class="block"><div class="wrap split">
  <div class="stack"><div data-render="contactInfo"></div><div class="ph wide" data-src="contact-office.jpg" data-alt="COPE office"></div></div>
  <form class="form" data-form="Contact">
    <div class="row">
      <div class="field"><label for="c-name">Name</label><input id="c-name" name="name" required></div>
      <div class="field"><label for="c-email">Email</label><input id="c-email" type="email" name="email" required></div>
    </div>
    <div class="row">
      <div class="field"><label for="c-org">School or organization</label><input id="c-org" name="organization"></div>
      <div class="field"><label for="c-topic">I'm reaching out about</label>
        <select id="c-topic" name="topic"><option>Booking a workshop or training</option><option>Partnering with COPE</option><option>Inviting COPE to table at an event</option><option>Joining a meeting or the newsletter</option><option>Bringing a partner into a workshop</option><option>Joining a youth group</option><option>Internships</option><option>Local Legends</option><option>Research or publications</option><option>Something else</option></select></div>
    </div>
    <div class="field"><label for="c-msg">Message</label><textarea id="c-msg" name="message" required></textarea></div>
    <button class="btn" type="submit">Send message</button>
    <p class="form-status" role="status" hidden></p>
  </form>
</div></section>
""")

PAGES["approach"] = ("Our Approach | COPE", """
<section class="page-head"><div class="wrap"><span class="eyebrow">Our approach</span><h1>Prevention that's planned, delivered and measured</h1>
<p class="lede">COPE follows SAMHSA's Strategic Prevention Framework and implementation science, so programs reach the people they're built for and change outcomes.</p></div></section>

<section class="block"><div class="wrap">
  <div class="section-head"><span class="eyebrow">Strategic Prevention Framework</span><h2>Five steps, every time</h2></div>
  <div data-render="spf"></div>
</div></section>

<section class="block tint"><div class="wrap">
  <div class="section-head"><span class="eyebrow">Implementation science</span><h2>How programs lead to results</h2><p class="lede">The study of how programs are delivered.</p></div>
  <div class="flow"><span>Evidence-based content</span><i>→</i><span>High-engagement delivery</span><i>→</i><span>Behavior change</span><i>→</i><span>Better outcomes</span></div>
</div></section>

<section class="block"><div class="wrap">
  <div class="section-head"><span class="eyebrow">Pillars of strong facilitation</span><h2>How our educators show up</h2></div>
  <div data-render="pace"></div>
</div></section>

<section class="block tint"><div class="wrap">
  <div class="section-head"><span class="eyebrow">Validity</span><h2>Three things we track</h2></div>
  <div class="pillars">
    <div class="pillar"><span class="big">Fidelity</span><p>How closely we follow the curriculum the way it was designed.</p></div>
    <div class="pillar"><span class="big">Dosage</span><p>How much of the program participants actually receive.</p></div>
    <div class="pillar"><span class="big">Quality</span><p>How well the educator delivers the curriculum.</p></div>
  </div>
</div></section>

<section class="block"><div class="wrap split">
  <div class="stack"><span class="eyebrow">Ways we connect</span><h2>Directly to community</h2></div>
  <div class="chips big"><span class="chip">Community organization collaboration</span><span class="chip">Community-centered workshops</span><span class="chip">Social media</span><span class="chip">Community events &amp; resource links</span><span class="chip">General coalition meetings</span><span class="chip">Mental Health Advisory Council</span><span class="chip">Paterson Networking Connection (P.N.C.)</span></div>
</div></section>
""")

PAGES["internships"] = ("Internships | COPE", """
<section class="page-head"><div class="wrap"><span class="eyebrow">Internship program</span><h1>Intern with COPE</h1>
<p class="lede">Get hands-on prevention experience in Paterson. Each semester COPE welcomes interns from Montclair State University and other schools.</p></div></section>

<section class="block"><div class="wrap">
  <div class="big-num"><div><b>3&ndash;10</b><span>interns each semester</span></div><div><b>Every</b><span>semester, including summer</span></div><div><b>All majors</b><span>welcome to apply</span></div></div>
</div></section>

<section class="block tint"><div class="wrap split">
  <div class="stack"><span class="eyebrow">Who it's for</span><h2>Open to students from any school</h2>
    <p class="lede">Ideal for Public Health and Family Science &amp; Human Development students, and open to students from other majors who care about community health.</p>
    <div class="chips big"><span class="chip">Public Health</span><span class="chip">Family Science &amp; Human Development</span><span class="chip">Other majors welcome</span><span class="chip">Montclair State &amp; other schools</span></div></div>
  <div class="ph wide" data-src="internship-interns.jpg" data-alt="COPE interns"></div>
</div></section>

<section class="block"><div class="wrap">
  <div class="section-head"><span class="eyebrow">What interns do</span><h2>Real work in the community</h2></div>
  <div class="grid">
    <div class="card"><div class="body"><h3>Workshops</h3><p>Support and co-facilitate prevention workshops in Paterson schools.</p></div></div>
    <div class="card"><div class="body"><h3>Tabling &amp; events</h3><p>Staff education tables at community fairs, the Self-Care Fair and other events.</p></div></div>
    <div class="card"><div class="body"><h3>Research</h3><p>Take part in COPE&rsquo;s prevention research and evaluation at Montclair State.</p></div></div>
    <div class="card"><div class="body"><h3>Outreach &amp; data</h3><p>Help with outreach, social media and data collection for our grants.</p></div></div>
  </div>
  <div class="info-strip" style="margin-top:22px;margin-bottom:0"><span>Flexible hours, any time 9am&ndash;4pm</span><span>We work with your schedule</span><span>You&rsquo;re responsible for completing your hours</span><span>Apply the semester before you want to start</span></div>
  <p class="meta" style="margin-top:14px">Interns are coordinated by Lucia Mendoza, Community Outreach Specialist &amp; Intern Coordinator.</p>
  <p style="margin-top:14px">COPE&rsquo;s community-university partnership has created training, research and fellowship opportunities for undergraduate, graduate and doctoral students at Montclair State and surrounding universities, including Columbia, Fordham, Rutgers and New York University.</p>
</div></section>

<section class="block tint" id="apply"><div class="wrap split">
  <div class="stack"><span class="eyebrow">Apply</span><h2>Interested?</h2><p class="lede">Tell us a little about yourself and we'll reach out about the next semester.</p></div>
  <form class="form" data-form="Internship interest">
    <div class="row">
      <div class="field"><label for="i-name">Name</label><input id="i-name" name="name" required></div>
      <div class="field"><label for="i-email">Email</label><input id="i-email" type="email" name="email" required></div>
    </div>
    <div class="row">
      <div class="field"><label for="i-school">School</label><input id="i-school" name="school" required></div>
      <div class="field"><label for="i-major">Major</label><input id="i-major" name="major" required></div>
    </div>
    <div class="field"><label for="i-sem">Semester you're applying for</label><input id="i-sem" name="semester" placeholder="e.g. Spring 2027"></div>
    <div class="field"><label for="i-why">Why do you want to intern with COPE?</label><textarea id="i-why" name="why"></textarea></div>
    <button class="btn" type="submit">Send interest form</button>
    <p class="form-status" role="status" hidden></p>
  </form>
</div></section>
""")

PAGES["campaigns"] = ("Campaigns & Infographics | COPE", """
<section class="page-head"><div class="wrap"><span class="eyebrow">Public awareness</span><h1>Campaigns &amp; infographics</h1>
<p class="lede">Bilingual campaigns built from local youth data, on marijuana, lean, alcohol and tobacco in Paterson. Tap any image to see it full size.</p></div></section>
<section class="block"><div class="wrap" data-render="campaignPage"></div></section>
<section class="cta-band"><div class="wrap"><h2>Want these for your school or event?</h2><a class="btn" data-href="contact">Request copies</a></div></section>
""")
