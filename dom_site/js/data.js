var dataModule = (function () {
    /*project: {
    title: "",
    description: "",
    projectTags: "", ""]
    people: [{
        role: "", // primary, collaborator
        firstName: ""
        lastName: ""
        honorific: ""
    },
    images: [{
        url: "",
        title: ""
    },
    links: [{
        url: "",
        title: "",
        description: ""
    },
    session: "",
    exhibition: "",
    event: "",
    plenary: ""
    }*/

    // public methods    
    var init = function () {
        processProjects();
    }

    // private methods
    var projects = [
        {
            title: "Vicki Weiner, Pratt Institute",
            subtitle: "Pratt Institute",
            people: "Scientific Track Committee",
            projectTags: "re-use, ecology,Historic Preservation",
            image: "https://curriculumforclimateagency.org/images/vicki.jpg",
            description: "",
            session: "COMMITTEE"
        },        
        {
            title: "Meta Brunzema, Pratt Institute",
            subtitle:"",
            people: "Scientific Track Committee",
            projectTags: "re-use, ecology",
            image: "https://curriculumforclimateagency.org/images/Meta.jpg",
            description: "",
            session: "COMMITTEE"
        },
        {
            title: "Audrey Schultz, Pratt Institute",
            subtitle:"",
            people: "Scientific Track Committee",
            projectTags: "Re-use, decommissionedsites, adaptive re-use,",
            image: "https://curriculumforclimateagency.org/images/Audrey.jpg",
            description: "",
            session: "COMMITTEE"
        },
        {
            title: "Reese Campbell, Pratt Institute",
            subtitle:"",
            people: "Scientific Track Committee",
            projectTags: "Morphology, Performance",
            image: "https://curriculumforclimateagency.org/images/Reese.jpg",
            description: "",
            session: "COMMITTEE"
        },
        {
            title: "Johan De Walsche, EAAE Council",
            subtitle:"",
            people: "Steering Committee",
            projectTags: "Morphology, Performance",
            image: "https://curriculumforclimateagency.org/images/Johan.jpg",
            description: "",
            session: "COMMITTEE"
        },
        {
            title: "Harriet Harriss, Pratt Institute, EAAE Council",
            subtitle:"",
            people: "Steering Committee",
            projectTags: "equity, decolonizing, justice",
            image: "https://curriculumforclimateagency.org/images/Harriet.jpg",
            description: "",
            session: "COMMITTEE"
        },
        {
            title: "Ole Gustavsen, Oslo School of Architecture",
            subtitle:"",
            people: "Steering Committee",
            projectTags: "practice, assembly, profession",
            image: "https://curriculumforclimateagency.org/images/Ole.png",
            description: "",
            session: "COMMITTEE"
        },
        {
            title: "Jonathan A. Scelsa, Pratt Institute",
            subtitle:"",
            people: "Steering Committee, Moderator",
            projectTags: "infrastructure, Food, energy, production, morphology ",
            image: "https://curriculumforclimateagency.org/images/Jonathan.jpg",
            description: "",
            session: "COMMITTEE"
        },
        {
            title: "Jorgen Johan Tandberg, Oslo School of Architecture",
            subtitle:"",
            people: "Steering Committee, Moderator",
            projectTags: "assembly, urbanism, materials",
            image: "https://curriculumforclimateagency.org/images/Jorgen.jfif",
            description: "",
            session: "COMMITTEE"
        },
        {
            title: "Luis Callejas, Oslo School of Architecture",
            people: "Scientific Track Committee, Moderator",
            projectTags: "landscape, urbanism, abstraction,",
            image: "https://curriculumforclimateagency.org/images/Luis.jfif",
            description: "",
            session: "COMMITTEE"
        },
        {
            title: "Tulay Atak, Pratt Institute",
            people: "Scientific Track Committee, Moderator",
            projectTags: "landscape, urbanism, History, Theory,",
            image: "https://curriculumforclimateagency.org/images/tatak.jpg",
            description: "",
            session: "COMMITTEE"
        },
        {
            title: "Ariane Lourie Harrison, Pratt Institute",
            people: "Scientific Track Committee, Moderator",
            projectTags: "post-human, ecology, classroom,",
            image: "https://curriculumforclimateagency.org/images/ariane.jpg",
            description: "",
            session: "COMMITTEE"
        },
        {
            title: "Janike Kampevold Larsen, Oslo School of Architecture",
            people: "Scientific Track Committee, Moderator",
            projectTags: "landscape, urbanism, materials, circularity,",
            image: "https://curriculumforclimateagency.org/images/janike.jpg",
            description: "",
            session: "COMMITTEE"
        },
        {
            title: "Marianne Skjulhaag, Oslo School of Architecture",
            people: "Scientific Track Committee, Moderator",
            projectTags: "migration, urbanism, materials, circularity,",
            image: "https://curriculumforclimateagency.org/images/marianne.jpg",
            description: "",
            session: "COMMITTEE"
        },
        {
            title: "Håkan Edelhold, Oslo School of Architecture",
            people: "Scientific Track Committee, Moderator",
            projectTags: "agency, design, materials, circularity,",
            image: "https://curriculumforclimateagency.org/images/Hakan.jfif",
            description: "",
            session: "COMMITTEE"
        },
        {
            title: "Sabine Muller, Oslo School of Architecture",
            people: "Scientific Track Committee, Moderator",
            projectTags: "agency, water, circularity,",
            image: "https://curriculumforclimateagency.org/images/sabine.jfif",
            description: "",
            session: "COMMITTEE"
        },
        {
            title: "Tine Hegli, Oslo School of Architecture",
            people: "Scientific Track Committee, Moderator",
            projectTags: "agency, circularity,",
            image: "https://curriculumforclimateagency.org/images/tine.jpg",
            description: "",
            session: "COMMITTEE"
        },
        {
            title: "Elisa Cattaneo, Milan Polytechnic",
            people: "Scientific Review Committee, Moderator",
            projectTags: "agency, circularity",
            image: "https://curriculumforclimateagency.org/images/elisa.jpg",
            description: "",
            session: "COMMITTEE"
        },
        {
            title: "Rania Ghosn, MIT",
            people: "Scientific Review Committee, Moderator",
            projectTags: "imaginary, geography, agency, circularity",
            image: "https://curriculumforclimateagency.org/images/rania.jpg",
            description: "",
            session: "COMMITTEE"
        },
        {
            title: "Lisa Marie Enzenhoffer, ETH",
            people: "Scientific Review Committee",
            projectTags: "imaginary, geography, agency, circularity",
            image: "https://curriculumforclimateagency.org/images/Lisa.bmp",
            description: "",
            session: "COMMITTEE"
        },
        {
            title: "Mae-Ling Lokko, RPI",
            people: "Scientific Review Committee",
            projectTags: "agency, design, materials, circularity,",
            image: "https://curriculumforclimateagency.org/images/lokko.jpg",
            description: "",
            session: "COMMITTEE"
        },
        {
            title: "Lydia Kallipoliti, Cooper",
            people: "Scientific Review Committee",
            projectTags: "agency, design, energy, waste-streams,",
            image: "https://curriculumforclimateagency.org/images/lydia.jfif",
            description: "",
            session: "COMMITTEE"
        },
        {
            title: "Christina Geros, UCL",
            people: "Scientific Review Committee",
            projectTags: "agency, design, ecology, waste-streams,",
            image: "https://curriculumforclimateagency.org/images/geros.jpg",
            description: "",
            session: "COMMITTEE"
        },
        //1
        {
            title: "Opening Plenary : Climate Practice",
            people: "Philippe Rahm, Philippe Rahm architectes ; Kotchakorn Voraakham, Landprocess and Porous City Network ; Stella Mutegi & Kabage Karanja, Cave_Bureau",
            projectTags: "EARLY-DESIGN, ECOLOGY, WATER",
            images: [
                "https://curriculumforclimateagency.org/images/Plenary1_pic1.jpg",
                "https://curriculumforclimateagency.org/images/Plenary1_pic2.jpg",
                "https://curriculumforclimateagency.org/images/Plenary1_pic3.jpg",
                "https://curriculumforclimateagency.org/images/Plenary1_pic4.jpg",
                "https://curriculumforclimateagency.org/images/Plenary1_pic5.jpg"
            ],
            description: `The construction industry is responsible for 40% of global carbon emissions and architecture and other design professions have willingly, or unwillingly, sided with an uneven development that has consequences expanding from food insecurity and nutrient deficiency to imposed displacement due to collapsing ecosystems. Countries and communities that are least responsible are feeling the impact of the decisions made on the opposite side of the world ‐ a trend which will exacerbate in the future as new portions of our shared earth industrialize. As we move out of our current global health emergency and confront the next very real crisis of climate alteration, should architecture’s agenda be to rally forth in action, or can architecture construct a new type of agency in the processes of inaction?  <P>Introduction: Ole Gustavsen Oslo School of Architecture and Design <p> Moderator: Elisa Cattaneo, Politecnico di Milano & Politecnico di Torino`,
            session: "PLENARIES"
        },
        //2
        {
            title: "Biomimetic Design in a Living Laboratory Classroom",
            people: "Jana VanderGoot, University of Maryland",
            projectTags: "BIOMIMEMTIC, MODULAR, AIR, HEALTH",
            image: "https://curriculumforclimateagency.org/images/VanderGoot1.jpg",
            description: `<p>Sympoietic Structures explores environmental morphology in first-year design studio pedagogy with an interest in new fundamentals based on sympoiesis and the enfolding of ecological inputs into form and organization. While first-year design curricula are often driven by abstraction, internal logics, formal processes and a general tendency to foreground autonomous aspects of architecture as a discipline, these features increasingly beg partnerships with inter- or extra-disciplinary operations in order to engage external worlds with environmental agency.<p>
            <p>Works on biology and ecology by Maturana and Varela, Margulis, Dempster and Haraway demonstrate a parallel discussion of autonomy and inclusiveness in the form of autopoiesis (self-making, closed systems) and sympoiesis (making-together, open systems). Interestingly, these autonomous and inclusive forms of making are not mutually exclusive but are, as Haraway suggests, mutually reinforcing and nested within each other. Learning from this discourse, Sympoietic Structures looks at multi-phase project strategies wherein first-year students engage different environmental drivers to condition the meso- and macro-scale of architectural bodies and their collective organization, respectively.<p>
            <p>These strategies involve defining relationships between environmental drivers and scales of operation in order to demonstrate fundamental concepts of forming versus organizing or individual morphology versus collective morphology. They involve creative ways by which environmental drivers can be parametricized in order to inform process-based architectural entities that are serial and morphologically specific. Serialization allows first-year students to iterate, test and evaluate form and performance while morphological specificity helps them experience feedback loops between process inputs and spatio-formal outcomes.<p>
            <p>As a curricular case study, the paper will discuss a Sympoietic Structure of co-habitation for vegetation bodies, water bodies and human bodies. These three environmental bodies are in mutually forming partnerships with architectural categories such as envelope, structure and circulation to form composite (sympoietic) bodies of architectural and ecological material. At the meso-scale of form, parametric drivers include dimensional information and force. For example, students select vegetation types and use trunk and root-ball dimensions with root depth to size soil volumes and digitally lofted envelopes that support them over their lifecycle. These composite vegetation bodies have weights that students engage, in turn, to design structural supports, positioning vegetation to receive solar inputs and creating volumetric biproducts of programmable space.<p>
            <p>At the macro-scale of site, students use rainfall data and solar simulation to three-dimensionally organize collectives of vegetation and water bodies, tuning their spatial relationships to receive sunlight and water as well as accommodate formal and informal programs that flow through them. What is more, in a near-future climate scenario, students use flood data and water level modeling as time-based parametric inputs for the sectional displacement of these co-habiting bodies of plant life, water catchment and human occupancy. Ecological architecture is considered over days, seasons and years as well as with and without ground.<p>
            <p>While teaching plan and section, process and time, and form and organization through cascading processes of parametric environmental input, Sympoietic Structures teaches hierarchy, heterarchy and holoarchy wherein parts become wholes and wholes become parts in a composite structure of individual and collective environmental morphology.<p>
            <p>CITATIONS / WORK CITED:
Dempster, Beth. Sympoietic and Autopoietic Systems: A New Distinction for Self-Organizing Systems, School of Planning, University of Waterloo, 2000, https://www.semanticscholar.org/author/Beth-Dempster/88912464, Accessed 07 Apr. 2020.<p> <p>Haraway, Donna J. When Species Meet. Minneapolis, The University of Minnesota Press, 2008.<p> <p>Haraway, Donna J. Staying with The Trouble: Making Kin in the Cthulucene. Durham, Duke University Press, 2016.<p> <p>Holland, John. Hidden Order: How Adaptation Builds Complexity. New York, Basic Books, 1996.<p> <p>Margulis, Lynn and Dorion Sagan. What is Life? Berkeley, University of California Press, 1995.<p> <p>Maturana, Humberto R. and Francisco J. Varela. Autopoiesis and Cognition: The Realization of the Living. Dordrecht, D. Reidel<p> <p>Publishing Company, 1980.<p>`,
            session: "THE CLIMATE CLASSROOM"
        },
        //3
        {
            title: "Barriers to Integrating Carbon Footprint into the US Design Studio",
            people: "Khaled Mansy, Tom Spector, John Phillips, & Jeanne Homer, Oklahoma State University",
            projectTags: "CARBON, EMBODIED-ENERGY, BUILDING-PERFORMANCE",
            description: `<p>The authors co-teach a design studio in which building performance is highlighted as a primary educational goal. For years, we helped students to use evidence-based feedback to improve the structural, energy, and cost performance of their designs. The design-assisting tools used by the students include verified computer programs for structural design, energy simulation, and cost estimating. Most recently, in response to climate change, we examined introducing carbon analysis as an additional design-assisting tool in order to expand the definition of building performance to include the environmental impact of embodied carbon. Initial results were revealing. Findings showed that while energy performance evaluation is often (in both academia and professional practice) limited to the evaluation of operational energy, embodied energy is likely to be the determining factor in the near future. As buildings become more energy efficient and/or increasingly reliant on renewable energy sources, the higher the contribution of its embodied energy is to its overall energy consumption. When buildings reach zero energy in operation, 100% of energy consumption will be due to embodied energy. Furthermore, consideration of a building’s embodied energy is the architects’ most controllable factor. Therefore, educators must stress to students the importance of embodied energy even though educators may face a number of challenges that may hinder their ability to fully integrate carbon analysis into the design studio.`,
            session: "THE CLIMATE CLASSROOM"
        },
        //4
        {
            title: "Designing for Change: Exploring Open Design Strategies in Architectural Education",
            people: "Francesca Ostuzzi, Ghent University; Liesbeth Stam, KU Leuven; Ann Heylighen, KU Leuven",
            projectTags: "CARBON, EMBODIED-ENERGY, BUILDING-PERFORMANCE",
            description: `<p>Buildings and spaces are never fixed: they change over time along with their users, uses and contexts. Whether they can change meaningfully impacts on their performance and lifespan (e.g., unforeseen maintenance, abandonment, end-of-life processing), affecting both environment and society. Climate change highlights the urgency of taking these dynamics into account.
            Nevertheless, how to deal with this during design remains unclear. In search of cross-disciplinary approaches that acknowledge this complexity in how we teach and study design, we explore the value of, and requirements for, weaving an open design approach into architectural education.
            Building upon work in other design fields, we look at attempts in industrial design engineering and human-computer interaction to generate concrete open design strategies, like open-ended design or open script design. Such strategies aim to bring into view during design the dynamic through which artefacts become part of real (end-use) environments that are ever-changing, unpredictable and beyond control.
            In a compulsory subject on actual topics in architecture, we involved master students in architectural engineering as researchers to explore these strategies’ value and applicability in architectural design. So far the course was offered twice. As reported on elsewhere, analysis of its first iteration suggests that open design makes explicit a topic that is latently present to students in their education. Interestingly, students perceive open design as having a high societal relevance which might help their future practice to approach (design) problems in new ways. Problems listed included environmental and social challenges.
            This contribution focuses on the second iteration, which asked students more explicitly to revisit an own design project by adopting open-ended or open script design. Of the nine students who completed the course, eight adopted open script design and one open-ended design. Analysis of focus group interviews with students and their intermediary and final coursework suggests that, at an abstract level, students grasp the notion of open design in general and the strategy they chose in particular. They can explain the idea, identify relevant cases/precedents and apply the open design strategy they chose to a wide range of cases and across different scales: from particular spaces, over (social) housing and public buildings, like schools and railway stations, to urban design and even urban water management.            
            <P>When it comes to adopting the open design strategies in relation to their own design project, however, we observe a wide variety in how students apply them to the actual analysis of spaces, giving the impression that they interpret it in their own way. While some appreciated the freedom in the practical application, others at times felt lost in their analysis and called for further practical development. Students do agree on the potential of open design strategies to open a conversation on the complex interplay of forces their designs are subjected to once entering the real world. An essential step in designing buildings/spaces that change over time meaningfully  and that can support the wider literacy on how to design for change.
            
            <P>CITATIONS / WORK CITED:
            <P>Brand, S. (1995). How buildings learn: What happens after they’re built. London: Penguin Books.
            
            <P>Ostuzzi, F., & Rognoli, V. (2019). Open-ended design : local re-appropriations through imperfection. In M. Ambrosio & C. Vezzoli (Eds.), Designing sustainability for all : proceedings of the 3rd LeNS World Distribured Conference, Vol. 3. Milan: POLI.DESIGN
            
            <P>Redström, J. (2008). RE: Definitions of use. Design Studies,29(4), 410–423.
            
            <P>Stam, L. M., & Eggink, W. (2014). How to interest people for the hare instead of the chase: An exploration of open script design to change consumer behavior. In Proceedings of the Design Research Society (DRS) 2014 Conference (pp. 1535–1548).`,
            session: "THE CLIMATE CLASSROOM"
        },
        //5
        {
            title: "Sugarcane and Asbestos: The Celotex Corporation and Modern Building Materials",
            people: "Hyun Tae Jung, New York Institute of Technology",
            projectTags: "REUSE, CURATORIAL STRATEGY, PROFESSION, CASE-STUDY",
            description: `<p>New materials often have a lasting, transformative impact on the built environment. Cane fiber insulation is exemplary, although it hides behind walls. During the early twentieth century, it reshaped modern architecture, construction, and natural landscapes in the United States, contributing to the rationalization of the human body, labor, and wages. Through the Celotex Corporation, it found its way into wartime projects, such as the secret city of Oak Ridge, TN (1942-45), and transformed agriculture and architecture. By 1929, the Celotex Corporation dedicated more than 100,000 acres of land to sugarcane cultivation, effectively integrating sugar production and building material manufacturing. This paper documents Celotex&rsquo;s dramatic impact on architecture and landscape. The initial success of Celotex relied on converting sugarcane waste into a robust, fibrous building material. Celotex&rsquo;s fiberboard significantly contributed to the building boom of the 1920s. This paper also explores how Celotex used a new product known as Cemesto to further its commercial goals in the 1930s. Cemesto boards were cheap, light, and easy to assemble. They were weather-, fire-, and wear-resistant as well, having no need for insulation and finish. Cemesto boards were widely used for housing development and precipitated changes in the practice of heating and insulation specialists. This paper uses archival materials drawn from the records of the Celotex Corporation to argue its case; it also references manuals and publicly accessible patent documents. It casts a light on how architecture transformed the American sugar plantation in the 1920s and 1930s, as well as the suburban housing developments after the Second World War. It also explores the material supply chains that accelerated the growth of prefabricated heating and insulation systems during the first half of the twentieth century.`,
            session: "UNLEARNING ARCHITECTURE"
        },
        //6
        {
            title: "On Planting and Deconstruction: The architecture exhibition as radical medium",
            people: "Charlotte Greub, North Dakota State University",
            projectTags: "PREFABRICATED, SUPPLY-CHAIN, MATERIALS, CASE-STUDY",
            description: `<P>This presentation reviews Rotor’s strategic use of the exhibition medium in the light of radical practices in architecture and design since the 1960’s.
            <P>The architecture exhibition since the twentieth century has allowed architects to take speculative positions and use exhibitions as laboratories for architectural ideas. In Italy, architects’ collectives – such as Superstudio; Archizoom; Global Tools and Gruppo 9999 – expanded their role in society to shape the contemporary political and cultural agenda through “radical architecture” without the intervention of a building. The ‘radical movement’ presaged in the 1960’s though the medium of the exhibition some of the urgent social and development concerns that the world is now contending with including globalization, ecology, social justice and environmental protection.         
            <P>The world of ‘radical’ architects is now being represented and projected by younger contemporaries. These younger advocates include: Rotor a cooperative architecture design practice based in Brussels (Belgium) that represents a radical design approach in which various disciplines – from research and exhibition-making to material studies and reuse strategies are combined.
            <P>The work of the Radical Movement as well as Belgian architects’ collective “Rotor” displays a valuable understanding of the designer’s role in society, the material world, and the environment.
            <P>This ethos was particularly captured by a number of exhibitions in the 1960s and 1970s, such as group shows “Italy: The New Domestic Landscape”, 1972 at the Museum of Modern Art in New York. The “Casa Orto” – Vegetable Garden House” was one of the exhibition’s feature items and later became an important example in the early ecology movement. And by directly addressing or challenging the architectural dimension on the notion of environment, their exhibitions suggested new terms on which architecture and design could be practiced, prepared and presented.
            <P>Collective design practices in the 1960’s and “Rotor” deconstruct existing value systems in architecture and seek to create opportunities for architecture exhibitions as environments that can initiate or foster a radical redesign of the built environment and also encourages the public to change their attitude towards building materials, and more broadly towards all objects around us.
            <P>Hence, the work of Rotor explores the notion of wear, that is, materials, objects and building structures in relation to use. Use is not to be conflated with program or function, but rather the social aspect of inhabitation of architecture during the lifespan of a building. Material re-use encourages one to consider buildings as repositories, not just of the materials, but also of knowledge and past practices of crafting buildings as a resource for innovation. Not only do their distinct yet comparable approaches entail urgent questions of sustainability, re-use, and appropriation, they also imply a need for a different view on history and the historical production and expand it to the problem of re-use: the re-use of materials and of building elements, but also the re-use of ideas, the re-use of knowledge and memory.
            <P>CITATIONS / WORK CITED:
            <P>Celant, Germano “Radical Architecture”. In Ambasz, Italy: The New Domestic Landscape, MOMA, New York, 1972. (380-87)
            <P>Gielen, Maarten. “Rotor Deconstruction” CCA (2016) url: https://www.youtube.com/watch?v=YLHlxEh_oRk, accessed September 20th, 2020
            <P>Gielen, Maarten. “Rotor -current preoccupations” AA School of Architecture, London (2016) url: https://www.youtube.com/watch?v=o4-5uXW7dWo, accessed September 20th, 2020
            <P>Rotor, “Urban Mining, Salvaging Materials. Conference statement,” in: Dirk van den Heuvel, Maarten Gielen, Lionel Devlieger, Deconstruction: An International Symposium on Off-Site Reuse in Architecture, April 24-25, 2017, 7–12, here: 11, url: http://deconstructionconference.nl/booklet.pdfaccessed September 20th, 2020
            <P>Rotor (Tristan Boniver, Lionel Devlieger, Michael Ghyoot, Maarten Gielen, Benjamin Lasserre, Melanie Tamm & Ariane d’Hoop & Benedikte Zitouni), “Wear makes us act”, in: Usus/Usures: État des lieux/ How things stand
            <P>(Brussels: Éditions Communauté Française Wallonie-Bruxelles, 2010) 81–104, url: http://rotordb.org/hosted/usus_usures_Rotor.pdf accessed September 20th, 2020
            <P>Rotor, “Vade-mecum pour le réemploi hors-site: Comment extraire les matériaux réutilisables de bâtiments publics?”, url: http://www.vademecum-reuse.org/Vademecum_extraire_les_materiaux_reutilisables-Rotor.pdf (accessed September 23rd, 2020)`,
            session: "UNLEARNING ARCHITECTURE"
        },
        //7
        {
            title: "White Walls, Mining Modernism and Surface Sustainability",
            people: "Ingrid Halland, Oslo School of Architecture and Design",
            projectTags: "MATERIALS, CHEMICALS, MODERNISM, CASE-STUDY ",
            description: `The chemical compound titanium dioxide (TiO2) circulates extensively through our architectural, biological, and economic systems, most of the time completely unnoticeable: in the food we eat, the paper we print on, the paint on the wall, and our iPhone chargers. This man-made substance is a white pigment that has been used in the mass-production of materials and goods since its discovery around 1910. TiO2 has been called “the whitest white” and its material properties are inextricably related to invisibility, permanence, and surfaces.
            Representing the new, the bright, and the clean, TiO2 was discovered and patented by Norwegian chemists Peder Farup and Gustav Jebsen, and production for the global market began in the mine Titania AS in Norway in 1916. After a hundred years of mining, the extraction of TiO2 has left an irreversible change in the local landscape: The environmental trace of mining modernism consists of a vast cut through the surface of the earth and a white artificial desert of mining waste.
            Focusing on surfaces—both geological, architectural, and critical—this paper first investigates the invention, extraction and production of TiO2 in the mine Titania AS. Then the paper introduces an alternative material history of the white walls of modernism, and finally, the paper discusses the prospects of the material as a component in the next-generation of sustainable architecture. Once a signature of modernism, TiO2 has now become a signature of innovative materials and smart technologies. Architects, chemists, and building engineers progressively investigate the future prospects of the material as an essential component in renewable and alternative building technology. Today, TiO2 nanopraticles can produce smog-absorbing building surfaces, self-cleaning windows, and antimicrobial coatings for laboratory use.
            <P>There is an urgency to discuss materials in relation to design and sustainability. This paper argues that in order to change ethical attitudes towards use and reuse of materials, design discourse must forge bonds with environmental history in order to unearth the unseen material practices and expand its material investigations into the very core of its production. Thus, the paper ties bonds between mass-exploitation of natural landscapes, TiO2 as a planetary matter—hidden but everywhere—and smart materials for sustainable futures. By writing a novel material history of whiteness, this paper uncovers a continuity of mining modernism concealed in today’s paradigm of surface sustainability.
            <P>CITATIONS / WORK CITED:
            <P>Cardellicchio, Luciano. “Self-cleaning and colour-preserving efficiency of photocatalytic concrete: case study of the Jubilee Church in Rome, Building Research & Information” in Building Research & Information, Volume 48 (2020).
            <P>Fox, John and Nik Nikolov. “Next-Generation Sustainable Architecture: Buildings as Air Pollution Remediators” in Braving a New World: Design Interventions for Changing Climates – Papers from the Subtropical Cities 2013 Fall Conference of the Association of Collegiate Schools of Architecture (ACSA). Washington, DC: ACSA Press, 2013.
            <P>Johnslien, Marte. White to Earth. Oslo: ROM Forlag, 2020.
            <P>Krumdieck, S.P., Boichot, R., Gorthy, R. et al. “Nanostructured TiO2 anatase-rutile-carbon solid coating with visible light antimicrobial activity” in Scientific Reports 9, 1883 (2019).
            <P>Leydecker, Sylvia. Nano Materials: in Architecture, Interior Architecture and Design. Berlin: Birkhäuser, 2008.
            <P>Ritter, Axel. Smart Materials in Architecture, Interior Architecture and Design. Basel: Birkhäuser, 2007.
            <P>Wigley, Mark. White Walls, Designer Dresses: The Fashioning of Modern Architecture. Cambridge, Mass.: MIT Press, 1995.`,
            session: "UNLEARNING ARCHITECTURE"
        },
        //8
        {
            title: "Unbuilding. Prolegomena to a Spatial Environmental Architectonics in Perpetual Becoming",
            people: "Giorgia Aquilar, Università Iuav di Venezia / Bauhaus-Universität Weimar",
            projectTags: "REPRESENTATION, BECOMING, TEMPORALITY, FUTURE, CURATORIAL",
            description: `“Our undoing is also our becoming,” writes Terry Tempest Williams in the preface to her Erosion. Essays of Undoing. There she speaks of erosion – of the United States, and of the world – as a “steady state of flux” (2016: 18), providing a potent analogue for the architectonics in becoming (and of becomings) proposed here. Following Tempest Williams’ call for finding (hi)stories in fragmentation, this contribution aims to rethink a post-disciplinary scholarship for the built world, where architectural theory meets environmental histories and materialities. On these premises, this paper offers a critical account of design histories where the boundaries between built space and environment at large collapse. To this aim, it draws on archival material related to unbuilt architectures from the archival records of the Radical Architecture of the 1970s, whose call for uncertainty and unpredictability as design variables is today more relevant than ever. While apparent oppositions – such as wild and urban, savage and tamed, re-natured and de-natured – collapse in the face of the current upheavals, perhaps the time has come for a collective re-appropriation of those imagined futures that once hovered between polarized alternatives. In the present age of tension between what we tend to call reservoir and danger, abundance and lack, repository and subtraction, those radical proposals may offer an archive of spatial-environmental theories and design tactics yet to be fully explored. Sometimes those un-architectures were meant to trigger paradigmatic inversions to overcome the stasis both in the concrete substance of buildings and in architectural theory. Gordon Matta-Clark’s call for acts of unbuilding as “altering the existing units of perception” (1977: 188) and James Wines’ de-architecture as “a purposeful disassembling of all those restrictive and axiomatic notions of architecture” (1987: 24) may serve as examples of these two modes of dissecting matter and meaning. The hypothesis here sustained is that these radical acts, often remained on paper, can find their counterpart in environmental histories and theories, and that from a joint rereading of both realms a kaleidoscope of strategic devices may emerge. Multispecies encounters, non-human needs and unexpected matter out-of-place emerge, for instance, from Elizabeth Grosz’s becoming undone as the prelude to becoming-with, transposable to the realm of architecture to rethink the material and semiotic substance of spatial theories. Going back to Tempest Williams’ exploration of undoings and becomings, what is at stake here is what she addresses through the notion of imago, whose meaning in the realm of biology refers to “the last stage an insect attains during its metamorphosis, its process of growth and development” (2016: 18). This “imaginal stage” can be seen as the repository of paper architecture that lies awaiting in the archives and can be turned into a fertile material for rethinking an architectural scholarship as able to insufflate new life and potentially turn the current age of embrittlement into one of metastability (Simondon, 1958). We may then ask ourselves: can the damage to the environment be undone?
            <P>CITATIONS / WORK CITED:
            <P>Grosz, Elizabeth. Becoming Undone: Darwinian Reflections on Life, Politics, and Art (Durham: Duke University Press, 2011).
            <P>Kwinter, Sanford. ‘Wildness: Prolegomena to a New Urbanism.’ In: Far From Equilibrium (Barcelona: Actar, 2007), 186-191.
            <P>Matta-Clark, Gordon. ‘Interview with Gordon Matta-Clark’ (1977). In C. Diserens (Ed.), Gordon Matta-Clark (London: Phaidon, 2003).
            <P>Simondon, Gilbert. Du mode d’existence des objets techniques (Paris: Éditions Aubier- Montaigne 1958).
            <P>Tempest Williams, Terry. Erosion. Essays of Undoing (New York: Farrar, Straus & Giroux, 2016).
            <P>Wines, James. ‘Architecture as the Inversion of Architecture’. Oz 9 (1987).`,
            session: "UNLEARNING ARCHITECTURE"
        },
        //9
        {
            title: "Informal Housing as the Third Teacher: Towards a Pedagogical Approach to Housing the Urban Poor",
            people: "Nischolan Pillay & Kamal Orie, Durban University of Technology",
            projectTags: "INFORMALITY, SETTLEMENTS, HEALTH",
            description: `The phenomenon of informality in South Africa is not a new one. Informal settlements around the cities edge started to emerge in the early 1990s as a consequence of an apartheid city planning model and the need for migrant workers within the city. Twenty-six years into the democratic dispensation, informality occurs more frequently and invariably in pockets around the city. Informal settlements on the periphery of Durban’s commercial and suburban precincts continually re-emerge in various settlement patterns on vacant, unused land as temporary/ permanent informal settlements. These settlements come with a host of physical challenges which include structural instability, poor insulation, lack of space, inadequate air circulation amongst other pertinent issues. The proximity of each dwelling unit poses even further issues of fire and safety hazards, the lack of sanitation and the use of non-potable water, creating an ecological and health hazard. However, these settlements also pose positive effects for the urban poor. The “Shanty Town” comes with several challenges; however, it enables its residents to find creative ways of housing themselves in times of need. The construction of an informal dwelling offers the users choice, perpetuating a plethora of forms and elements that unintentionally create the new urban edge of the city. These settlements present various narratives that can be valuable to curricula and pedagogical approaches; however, they continue to suffer disregard by the institutions of academia and exclusivity of practice. The prevalent attempts at responding to urban informalities are one of re-displacement of informal migrant communities through formal approaches of architecture and design. The objective of this paper is to interpret the underlying rationale in the making of informal settlements in its socio-spatial organisation and materiality towards understanding how informal dwelling responds to context and resources.  To this end, unearth the inherently hidden curriculum of an alternative making of built form through the recycling and upcycling of urban waste. At a pedagogic level, the research aims to explore participatory/ bottom-up approaches to design to promote ecologically responsive informal built form. This research will apply a pragmatic qualitative approach, in which primary and secondary data forms the research design. Primary data includes mapping of the settlements using GIS software, photographic analysis, students perceptions through qualitative interviews and interpretation of design sketching. Secondary data is in the form of a synthesised literature review which forms the theoretical and conceptual underpinning of this research. This research is essential as it will add significantly to the body of knowledge in terms of the positive lessons learned from the informal housing sector.`,
            session: "ARCHITECTURE OF MIGRATION"
        },
        //10
        {
            title: "Mobility and Migration as Constituting Elements of Urban Society: Migration as a Gendered Process",
            people: "Marianna Charitonidou, ETH Zurich",
            projectTags: "MODERNITY, CITIZENSHIP",
            description: `The paper aims to present an ensemble of new theoretical frameworks that would allow historiographies of architecture and urban design to take into consideration the question of migration as a gendered process. Unauthorised immigration has emerged as a generalised fact in all Western economies in the post-Second World War era. In such a context, mobility and migration are constituting elements of urban society. Taking as a starting point the fact that domesticity is a construction of the nineteenth century, the main objective of this paper will be to shed light on how migration challenges the concepts of user, domesticity and citizenship. Saskia Sassen’s understanding of immigration as “a process constituted by human beings with will and agency, with multiple identities and life trajectories beyond the fact of being seen, defined and categorised as immigrants for the purposes of the receiving polity, economy and society” is useful in order to better grasp the impact of migration on the status of public space, leading to a more open conception of it and to the reconceptualization of the notion of place beyond traditional definitions, while challenging the boundaries between what is public, communal and domestic. Migrant incorporation triggers processes of place-making which open up new social and conceptual spaces in the city. Over the last four decades, there is a changing paradigm in migration studies that are gradually paying more and more attention to the gender composition of the migration streams. This trend of studying conjointly gender and migration phenomena becomes more and more dominant. Special attention will be paid to methods of gender and migration scholarship drawing on social science approaches, treating gender as an institutional part of immigration studies and establishing legitimacy for gender in immigration studies. The paper will reflect upon the implications of establishing methods based on the endeavour to merge migration studies, urban studies and gender studies for the perception of the concepts of placemaking, displacement and domesticity, on the one hand, and for how the mobility from city to city is understood within the contemporary transnational context, on the other hand. Particular emphasis will be placed on the relationship between the migration processes and social sustainability.
            <P>CITATIONS / WORK CITED:
            <P>Heynen, Hilde, “Modernity and Domesticity: Tensions and Contradictions,” in Hilde Heynen and Gülsüm Baydar, eds., Negotiating Domesticity: Spatial Productions of Gender in Modern Architecture (London; New York: Routledge, 2005), 12.
            <P>Nawyn, Stephanie J., “Gender and Migration: Integrating Feminist Theory into Migration Studies,” in Sociology Compass 4, no. 9 (2010): 750.
            <P>Saarikangas, Kirsi, Liisa Horelli, “Modern Home, Environment, and Gender: Built, Planned, and Lived Spaces in Post-war Finland,” in Alexandra Staub, ed., The Routledge Companion to Modernity, Space and Gender (London; New York: Routledge, 2018), 44.
            <P>Sassen, Saskia, “Anti-Immigrant Politics Along with Institutional Incorporation?,” in Jenna Hennebry and Margaret Walton-Roberts, eds., Territoriality and Migration in the E.U. Neighbourhood: Spilling over the Wall (Heidelberg, Germany: Springer, 2014), 20-21.
            <P>Sinke, Suzanne M., “Gender and Migration: Historical Perspectives,” in The International Migration Review 40, no. 1 (2006): 82.`,
            session: "ARCHITECTURE OF MIGRATION"
        },
        //11
        {
            title: "Teaching Agency in Adaptive Refugee Housing",
            people: "Nancy Cheng, University of Oregon; Ryan Maruyama, Behnisch Architekten; Grace Aaraj, University of Oregon; Earl Mark, University of Virginia; Joachim Kieferle, Hochschule RheinMain; Marziah Rajabzadeh, University of Oregon",
            projectTags: "REFUGEES, HOUSING, SITE-DESIGN",
            images: [
                "https://curriculumforclimateagency.org/images/TeachingAgency1.jpg",
                "https://curriculumforclimateagency.org/images/TeachingAgency2.jpg",
                "https://curriculumforclimateagency.org/images/TeachingAgency3.jpg",
                "https://curriculumforclimateagency.org/images/TeachingAgency4.jpg",
            ],
            description: `1. Introduction
            <P>Man-made and natural disasters demand that architects explore taking a pro-active role in spatial justice. Aggravated by systemic inequities and increased urban density, forced migration has become common. In grappling with housing those facing political and economic hardship, this research group is examining how self-build agency can be encoded into tectonic systems. Studies show that refugee communities fare better if empowered as key decision makers. We examine how building systems can enable future inhabitants to take a more significant role in shaping their environments.
            <P>2. Preparing for uncertainty – connecting classroom to practice
            We are teaching a series of related design studios, seminars and lectures in 2020-21 that examine how connection design can engage local stock materials to yield accessible DIY on-site assembly.  To support the teaching, we are developing prototype kits of parts based upon joints that can use locally available strut elements to generate varied building configurations. The quickly deployable structures are designed to transition into permanent settlements with consideration of site context and vernacular approaches.
            Innovation is needed not only in the end-product, but also in the process and timeline. This group represents practice and education in five countries spanning the Middle East, Europe and North America, at different career stages from recent grad to seasoned professors. In addition to sequential courses at one university, we contribute to and benefit from distributed teaching efforts.
            Our work examines the position of the architect as a domain expert in refugee housing. Uncertainty in resources, political instability, security, health and safety upends the role of traditional design experts as leaders and requires agility in engaging community voices. The timeline for design is viewed in short, mid and longer-term perspectives against a backdrop of political or environmental instability, possible impermanence, and the uncertain availability of resources.
            <P>3. Agile design for various cultural settings
            The focus is on community agency: how to design for it, and how to teach studio in ways that accord with real experience in the field – where architectural design must anticipate participant engagement. Instead of providing a set program and locale, the studio can demand students use the agile thinking required in an emergency. Housing refugees requires improvisation: an immediate assessment of who is in charge and who can build. Accordingly, we account for local ingenuity, materials, and expertise in building; and address timeline and budget.
            <P>Finally, we  explore a site design method that considers a temporary to a more permanent settlement, where cultural and social practices are reflected in a community’s spatial pattern. Poor cultural fit has led to the abandonment of sound disaster relief housing in locations from Haiti1 to Sri Lanka. Thus, at the building scale, we incorporate resident build-out ideas from the Open Building2 movement and Aravena’s Incremental housing3. At the community scale, our work is informed by the EnneadLab4, Co-housing5 and Pocket Neighborhoods6.  We seek ways to adjust our studio pedagogy to a more uncertain world.
            <P>CITATIONS / WORK CITED:
            <P>Payton, Claire Antone. “Concrete Kleptocracy: Building the Foundations of Disaster in Haiti”, In Critical Disaster Studies: Rethinking Disaster, Vulnerability, and Risk, Jacob Remes and Andy Horowitz, eds, Pre-publication Draft, February 2018.
            <P>Kendall, Stephen, Four Decades of Open Building, Architectural Design, September 2017
            <P>Aravena, Alejandro. Elemental: Incremental Housing and Participatory Design Manual, Hatje Cantz, 2013
            <P>EnneadLab, Rethinking Refugee Communities, http://www.enneadlab.org/projects/rethinking-refugee-communities
            <P>Durrett, C. & McCamant, K. Creating Cohousing: Building Sustainable Communities New Society Publishers, 2011.
            <P>Chapin, Ross. Pocket Neighborhoods: Creating Small-Scale Community in a Large-Scale World, Taunton Press, 2011.
            <P>UNHCR Shelter and Settlement Section. Division of Programme Support and Management“Shelter Design Catalog.” January 2016. PDF File.`,
            session: "ARCHITECTURE OF MIGRATION"
        },
        //12
        {
            title: "Down to Earth: Using Natural Building Materials for Community Resiliency",
            people: "Lola Ben Alon, Carnegie Mellon University",
            projectTags: "MATERIALS, DESIGN-BUILD, HANDS-ON",
            images: [
                "https://curriculumforclimateagency.org/images/DowntoEarth1 (1).jpg",
                "https://curriculumforclimateagency.org/images/DowntoEarth1 (2).jpg",
                "https://curriculumforclimateagency.org/images/DowntoEarth1 (3).jpg",
                "https://curriculumforclimateagency.org/images/DowntoEarth1 (4).jpg",
                "https://curriculumforclimateagency.org/images/DowntoEarth1 (5).jpg",
            ],
            description: `Natural building materials are critically needed for modern building to dramatically reduce carbon-intensive and extractive construction practices. Building materials such as rammed earth, cob, hemp and straw, and fungal mycelium, offer a minimally processed, non-toxic, and community self-sufficient alternative to conventional building materials. Constructing with these materials maximizes the potentials of freely available resources, while engaging local communities, regardless of skills, including families and children. Despite these advantages, natural building materials are not widespread because their policy and environmental measures are inadequate to perform decision making in the design process, and they are not widely implemented in educational programs of building professionals.
            This study presents a design-build methodology that fosters academic and community connections for building with natural building materials. Specifically, the presented teaching structure equips interdisciplinary teams of architecture and engineering students with both theoretical knowledge and hands-on building experience of a range of natural materials for different climates. While making a sensitive choice of materials, technical details, and participatory processes, students collaborate with local communities to foster circular economy, create know-how to improve living conditions in the local context, and support a bottom-up form of capacity development. Hands-on workshops provide students with insights from field and give the opportunity to gain expertise of alternative building modes.
            <P>The presented methodology resonates with current research on natural building materials that aims to enhance the performance, perception, and policy of these materials. The work presented in this paper contributes critically needed environmental architecture curriculum to catalyze the advancement of healthier and more environmentally sound commitments to earthen construction worldwide.
            <P>CITATIONS / WORK CITED:
            <P>MacDougall, C. (2008). Natural building materials in mainstream construction: lessons from the UK. Journal of Green Building, 3(3), 1-14.
            King, B. (2017). The New Carbon Architecture: Building to Cool the Climate. New Society Publishers.
            <P>Racusin, J. D., & McArleton, A. (2012). The natural building companion: a comprehensive guide to integrative design and construction. Chelsea Green Publishing.
            <P>Niroumand, H., Kibert, C. J., Barcelo, J. A., & Saaly, M. (2017). Contribution of national guidelines in industry growth of earth architecture and earth buildings as a vernacular architecture. Renewable and Sustainable Energy Reviews, 74, 1108-1118.
            <P>Serrano, S., de Gracia, A., & Cabeza, L. F. (2016). Adaptation of rammed earth to modern construction systems: Comparative study of thermal behavior under summer conditions. Applied energy, 175, 180-188.
            <P>Miccoli, L., Müller, U., & Fontana, P. (2014). Mechanical behavior of earthen materials: A comparison between earth block masonry, rammed earth and cob. Construction and building materials, 61, 327-339.`,
            session: "CLOSING THE LOOP"
        },
        //13
        {
            title: "Building on Material: Towards Circular Construction in the First-Year Design Studio",
            people: "Felix Heisel & Val Warke, Cornell University",
            projectTags: "MATERIALS, EARLY-DESIGN, JOINERY, DESIGN-BUILD, MAKING",
            images: [
                "https://curriculumforclimateagency.org/images/Felix1.jpg",
                "https://curriculumforclimateagency.org/images/Felix2.jpg",
                "https://curriculumforclimateagency.org/images/Felix3.jpg",
                "https://curriculumforclimateagency.org/images/Felix4.jpg",
                "https://curriculumforclimateagency.org/images/Felix5.jpg",
            ],
            description: `Human influence on the socio-economic and ecologic systems of planet Earth has become so dominant that, in May 2019, the Anthropocene Working Group of the International Commission on Stratigraphy officially voted for the introduction of a new unit on the Geological Time Scale — the epoch of humans, or the Anthropocene.[1] This development is especially relevant to architects and engineers, since buildings account for more than 50% of the consumption of global finite resources, 39% of global carbon dioxide emissions, as well as 50% of global solid waste production, over their full life cycles.[2] All of these factors are dominant causes of climate change. We believe that the construction industry requires a complete paradigm shift in the way we design, build, and manage our built environment: a shift from linear resource consumption to circular material usage.
            This paper describes the application of this theory into the curriculum of a first-year Bachelor of Architecture design studio, as well as the teaching methodology developed to facilitate this paradigm shift. The significant steps of the process are illustrated through examples of student work from the Spring 2020 design studio.
            ‘Circular construction’ addresses both the re-activation of anthropogenic material stocks in today’s already built environment as well as the design of buildings as material depots for future construction. Detailed and precise material information as well as designing for adaptability and/or disassembly are prerequisites for both of these aspects. At the heart of the development of the syllabus is our conviction that circular design and construction requires detailed material knowledge at the earliest stage of every design process. Consequently, over the course of the semester, each student was assigned two design parameters presented in the form of a postcard, depicting (1) a raw material and (2) a reversible joint typology. In combination with a third postcard—the site—this technique generated sixty unique results from the same design brief: a small workshop for a craftsperson.
            After the initial material research where students aimed to understand the chemical and physical specifications of the ‘chosen’ material throughout several use cycles, the studio repeatedly shifted in scale, from 10:1 to 1:500, thereby challenging the spatial and constructive qualities of the given joint typology while observing various material behaviors as they ranged from detail to building to ‘urban’ scales. Bringing together the lessons learned, the final workshops were designed to be constructed for adaptability and disassembly, utilizing throughout all aspects of their designs circular materials and reversible connections. Developed from intrinsic material specifications and capabilities as well as a life-cycle perspective, the resulting design proposals seem both oddly familiar and excitingly innovative, and ideally initiating in the students a strong conceptual vector that should propel their awareness of environmental responsibility throughout their educational and professional careers.
            <p>CITATIONS / WORK CITED:
            <p>[1] Anthropocene Working Group. 2019. “Results of the Binding Vote by AWG.” Subcommission on Quaternary Stratigraphy. http://quaternary.stratigraphy.org/working-groups/anthropocene/.
            <p>[2] Transparency Market Research. 2020. “Construction Waste Market – Global Industry Analysis, Size, Share, Growth, Trends, and Forecast 2017 – 2025.” Albany, NY: Pre-Book Report; International Energy Agency and the United Environment Programme. 2018. “2018 Global Status Report: Towards a zero-emission, efficient and resilient buildings and construction sector.”`,
            session: "CLOSING THE LOOP"
        },
        //14
        {
            title: "The Circular Installation",
            people: "Mary Hale, Northeastern University",
            projectTags: "MATERIALS, DESIGN-BUILD, RE-USE",
            images: [
                "https://curriculumforclimateagency.org/images/Hale01.jpg",
                "https://curriculumforclimateagency.org/images/Hale02.jpg",
                "https://curriculumforclimateagency.org/images/Hale03.jpg",
                "https://curriculumforclimateagency.org/images/Hale04.jpg",
                "https://curriculumforclimateagency.org/images/Hale05.jpg",
            ],
            description: `Ubiquitous in our studios and environmentally corrosive: foam board, foam core, acrylic, and PVC to name a few examples, are energy intensive, toxic to produce and persistent.  These persistent materials may try to find an alibi for use in the longer life of a building, but in an architectural model or installation, that alibi falls apart.  A model’s serviceable lifespan may be a mere twenty minute presentation followed by twenty minutes to photograph, and then into overflowing waste bins whose contents flow to a landfill where they will last through millennia.
            The Circular Installation Studio confronts the disconnect between the nearly eternal lifespan of our materials and the exceedingly short lifespan of the physical artifacts of our design process.  We confront this issue through materials research and experimentation, materials analysis, design of temporary physical artifacts, and disposal of these artifacts.  Thereby the studio provides a window into material flows, from whence they come and to where they go, giving students a greater appreciation for how their choices impact the environment.
            During the materials research and experimentation phase, students receive supply kits.  These kits include algae and seaweed based extracts such as Agar Agar, Kappa Carrageenan, Carrageenan Iota, Spirulina, and Alginate.  In their own kitchens, students combine these materials with glycerine, water and various other waste products like egg shells, coffee grounds, newspapers, leaves and mushroom spores, to create and cast bioplastics with different properties.  Students share their experiments with each other and discuss the merits of these materials for practical use.
             Following the experimentation phase and with guidance from faculty with expertise in material assessment, students perform analytical studies of their most promising materials.  Biodegradability tests, life cycle assessments, toxicity assessments, water footprinting quantifications, and biodiversity impact studies form a holistic picture of a material’s “nutritional” value to guide students in materials selection for the subsequent design intervention phase.
            The design intervention phase begins by prompting students to design a spatial installation responding to physical phenomena.  Due to the remote nature of the studio, students work independently on projects that fit within the home workspace.  Projects range from bodywear to spatial installations where students build a full-scale component of a larger project. Following this phase of the studio, students present their work at a virtual review juried by outside critics.  Students are assessed by the conceptual rigor and craft of their projects, as well as its “nutritional” value and promise for circularity.
            <p>The final act of the studio is the ceremonious disposal of the projects, when they are given back to the earth in the form of composting, decomposition into parts that can be reused, or even consumption by the designer.  Students document this final act through video, drawings and analytical diagrams that tell the story of the future life of their projects as they are metabolized by human and non-human actors.
            <p>Throughout the semester, students read and discuss texts that support and enrich their quest to answer the question, “What does it mean for a material to be circular?”
            <p>CITATIONS / WORK CITED:
            <p>Beim, Anne, Ulrik Stylsvig Madsen, Charlotte Bundgaard, Karl Christiansen, Thomas Bo Jensen, and Claus Bech-Danielsen, eds. Towards an Ecology of Tectonics: The Need for Rethinking Construction in Architecture. Stuttgart: Edition Axel Menges, 2014.
            <p>Colomina, Beatriz, and Mark Wigley. Are We Human? Notes on an Archaeology of Design. Zürich, Switzerland: Lars Mul̈ler Publishers, 2016.
            <p>Iturbe, Elisa. LOG 47 – Overcoming Carbon Form. S.l.: Anyone Corporation, 2019.
            <p>McDonough, William, and Michael Braungart. Cradle to Cradle: Remaking the Way We Make Things. 1st ed. New York: North Point Press, 2002.
            <p>Stevens, E. S. Green Plastics: An Introduction to the New Science of Biodegradable Plastics. Princeton: Princeton University Press, 2002.
            <p>Thomas, Dana. Fashionopolis: The Price of Fast Fashion & the Future of Clothes, 2020.
            <p>Weisman, Alan. The World without Us. New York, NY: Picador/Thomas Dunne Books/St. Martin’s Press, 2008.`,
            session: "CLOSING THE LOOP"
        },
        //15
        {
            title: "WaterLines: Speculative Design in the Threshold Between Land and Water",
            people: "Irene Perez Lopez, University of Newcastle",
            projectTags: "WATER, RESILIENCE, URBANISM",
            description: `Water shorelines served as the origin and evolution of civilisations and cities, which occupied river basins, deltas, and floodplains, taking advantage of the water ecosystems for agriculture, farming, fishing and transport. Human civilisations shaped rivers and shorelines to control the variant periods of drought and floods present in such ecosystems. Since industrialisation, the modifications of the natural environment created substantially greater impacts, resulting in a disconnection between the built environment and the natural water systems. Therefore, the current impacts of unpredictable events linked to climate change are amplified without the natural protection inherent to water ecosystems, exponentially impacting and threatening inhabitation.
            Newcastle’s delta and estuary is located in the second largest catchment in New South Wales (NSW), the Hunter River Basin, and was the first urban settlement in NSW in the 18th century. Before European settlement in Australia, the Awabakal aboriginal tribe inhabited the coast around Newcastle. Water was integral to their culture and a way of living since the area has a wealth of biodiversity including marine environments, river, estuarine wetlands, creeks and forested areas. The estuary and delta compose a unique landscape, strongly modified by an intensive history of land reclamation, industrial activity, and coal extraction since European settlement. Efforts have being done to relink the city and the waterfront, although vulnerable ecosystems have been destroyed and the entire shoreline has been modified. As a consequence, the city is facing, as many other coastal and estuary cities, the effects of unpredictable events and the effects of climate change.
            <p>“WaterLines”, the undergraduate design studio ran at the School of Architecture and Built Environment at University of Newcastle, explore the implications of living in the threshold between land and water as space altered by the transitory actions of water: reimagining the connection between water, humans and non-human inhabitation; envisioning challenges and opportunities for waterfront cities being exposed to unpredictable events and dynamics forces (effects of climate change, recurrent and redundant floods affecting the city as well as the risk of potential tsunamis); and speculating with methods and approaches to design with water as an element in constant transformation and as an instrument to re-think the design of the city and its relationship with the non-built environment. Projects propose speculative urban and architectonic scenarios for Newcastle 2050-2100, developing tools and techniques appropriate for working on a particular type of landscapes of change: a city archipelago.`,
            session: "THE CLIMATE CLASSROOM"
        },
        //16
        {
            title: "It Takes a Village: De-Colonising the Architecture Curriculum",
            people: "Samantha Martin-McAuliffe, University College Dublin",
            projectTags: "OUTDOOR-CLASS, DESIGN-BUILD, DECOLONIZING",
            description: `In the very least, the NAAB &lsquo;History and Global Culture&rsquo; requirement demonstrates a commitment to diversifying the curricula of design schools. Yet it can also be interpreted as an invitation to reimagine and de-colonise the ways we teach architecture in the round. Who communicates the histories and building practices of other people? Charged with the task of teaching global architecture at our school, we jettisoned the idea of expanding the traditional, lecture-based survey course and instead established an active-learning initiative that foregrounds the knowledge of many rather than a privileged few. This 'we' is a collective of educators from the disciplines of architecture, biology, archaeology, world heritage conservation and civil engineering. This paper presents the first case-study of our teaching initiative: a &lsquo;learning laboratory&rsquo; located in the Samburu, a region in north-central Kenya that is about 400km north of Nairobi. Our lab is a co-creation between members of the nomadic-pastoralist Samburu tribe and architecture students. Led and supervised by local women, it fully documents the entire process of constructing a vernacular Samburu house. Students are first grounded in the deep-rooted history of this architecture and its attendant culture and ecology. They learn to identify building materials, and are taught how to site the house in the landscape. Under the guidance of locals, the students construct the house and learn how it should be prepared for inhabitation. Entwined in this process is an awareness of how this way of building will soon be history in the most literal sense: Samburu architectural culture is vanishing due to the impacts global warming. As such, this collaborative process brings architecture into convergence with climate change, migration, race and gender. The abiding principal here is the acquisition of knowledge without presumptions. Our students learn through listening to a plurality of voices, and this not only informs but also shapes our wider curriculum. Once home, our students become teachers, communicating and sharing their experience through peer-learning and an architectural exhibition. This in turn is used to teach global culture across the school and to develop further case-studies for the initiative.`,
            session: "THE CLIMATE CLASSROOM"
        },
        //17
        {
            title: "Exploring Climate, Design and Community Resilience",
            people: "Cleary Larkin, Jeff Carney & Morris Hylton, III University of Florida",
            projectTags: "WATER, RESILIENCE, CROSS-DISCIPLINE",
            images: [
                "https://curriculumforclimateagency.org/images/Larkin1 (1).jpg",
                "https://curriculumforclimateagency.org/images/Larkin1 (2).jpg",
                "https://curriculumforclimateagency.org/images/Larkin1 (3).jpg",
                "https://curriculumforclimateagency.org/images/Larkin1 (4).jpg",
                "https://curriculumforclimateagency.org/images/Larkin1 (5).jpg",
            ],
            description: `University of Florida has advanced cross-disciplinary  coursework that centers applied design research on climate change, with focus on social equity, placemaking, and adaptation in coastal communities. Case studies from the Florida Climate Institute’s (FCI) Spring Fieldcourse and the Historic Preservation Program’s Preservation Institute Nantucket (PIN) illustrate the evolution of these initiatives, and the instrumental shaping of the upcoming Envision Resilience Nantucket Challenge, a multi-university effort to engage a nationwide network of design courses in adaptation research.
            <p>The FCI Fieldcourse has spanned ecological systems, built environment and community engagement frameworks with faculty and students from design, planning, historic preservation, engineering, law, communications, science, and agriculture, among others. The 2016 Cedar Key Fieldcourse focused on ecological, coastal and marine issues in a small fishing village on the Gulf of Mexico. The 2018 St. Augustine Fieldcourse evolved to study built environment climate impacts, with students proposing adaptation strategies for increased coastal flooding. The 2020 Port St. Joe Fieldcourse focused on long-term recovery and resilience following Hurricane Michael (2018). Students participating in the Fieldcourse have consistently noted a broadening of their perspective and a new interest in the value of a cross-disciplinary approach for their future professional work.
            <p>Approaching the  fiftieth anniversary of its official founding, PIN represents the evolution of historic preservation studies from concern for the changing built environment to the intersection of human and nature as representational of culture and history. Shifting its focus to rising seas and resilience, the pedagogical model has become more valuable to both student and community in addressing a climate priority: increased flooding events. PIN’s newest initiative, Resilient Nantucket, includes researcher and student work to digitally document historic buildings in relation to the waterfront, prepare 3D models and visualizations of sea level rise, and assess the vulnerability of built and natural environments.  In 2020, PIN’s cross-disciplinary student teams assessed the cultural landscape of the South Washington Street area to prepare a strategic framework for adaptation and enhanced resilience.
            <p>The work of PIN has informed the development of the Envision Resilience Nantucket Challenge by ReMain Nantucket, an island-based non-profit dedicated to a more sustainable and resilient community. Based in part on the FCI Fieldcourse model, in Spring 2021 design colleges from across the U.S. will assemble student teams of architects, landscape architects, planners, engineers, policy experts, and conservationists to reimagine Nantucket’s core and historic waterfront. Student learning outcomes will include applying lessons learned from coastal communities around the country and proposing globally transferrable approaches to the impact of sea level rise.
            <p>This paper addresses the evolving methodology of each program and the changing relationship of cross-disciplinary design research for the breadth of iterative solution-based thinking for climate change.  The case studies highlight potential gaps in disciplinary partnerships and future opportunities to support a broad network of design dialogue that incorporates the local experience of adaptation research. Concluding thoughts explore the student experience in cross-disciplinary learning and the value of strategic application of design, science and social science for addressing the critical complexities of climate change.
            <p>CITATIONS / WORK CITED:
            <p>Buchanan, R. (1992). Wicked Problems in Design Thinking. Design Issues, 8(2), 5-21.
            <p>Carney, J. (2015) Delta Building: Science, Engineering, and an Opportunity for Design Leadership. ACSA Proceedings. New Trajectories in Academia: Contested Settlements.
            <p>Lerch, D. Ed. (2017). The Community Resilience Reader: Essential Resources for an Era of Upheaval. Washington: Island Press.
            <p>Maher, R., Maher, M., Mann, S., & McAlpine, C. A. (2018). Integrating design thinking with sustainability science: A Research through Design approach. Sustainability Science, 13(6), 1565.
            <p>Masterson, J. H., Peacock, W. G., Zandt, S. S. V., Grover, H., Schwarz, L. F., & Cooper, J. T. (2014). Planning for community resilience: a handbook for reducing vulnerability to disasters. Washington, D.C.: Island Press.
            <p>Moore, S. A. (2017). Knowledge, Education, Power and Production: Public Interest Design in North America. Journal of Architectural Education, 71(1), 46–55."`,
            session: "THE CLIMATE CLASSROOM"
        },
        //18
        {
            title: "Business as Unusual: Pedagogical Experiments",
            people: "Moa Carlsson, Remo Pedreschi, & Simone Ferracina, University of Edinburgh",
            projectTags: "REUSE, SUPPLYCHAINS, MATERIALFLOWS",
            images: [
                "https://curriculumforclimateagency.org/images/Moa1.jpg",
                "https://curriculumforclimateagency.org/images/Moa2.jpg",
                "https://curriculumforclimateagency.org/images/Moa3.jpg",
                "https://curriculumforclimateagency.org/images/Moa4.jpg",
                "https://curriculumforclimateagency.org/images/Moa5.jpg",
            ],
            description: `The relationship between design, material processes and their application has been a consistent theme in the teaching and research at the [redacted] School of Architecture and Landscape Architecture. This work was strengthened and consolidated with the formation of the Architectural Research Workshop and its increased ability to produce large-scale prototypes, and has intensified in recent years as we rethink architectural pedagogy in response to the impacts of climate breakdown and its associated injustices. This paper presents a selection of courses and pedagogies, developed by academic staff at [redacted], that seek to take the environmental crisis as an opportunity to prototype novel construction materials, fabrication protocols, and architectural design methods, foregrounding an open-ended design process that privileges encounters with pre-existing materials over the architect&rsquo;s own aspirations and ideas. In three teaching projects, and across several years and programmes, we outline an approach that emphasises reuse and repurposing practices in relation to making (material processes and affordances) and making visible (diverting material flows; reclaiming values and valuing protocols).  These practices encourage a direct engagement in material processes through experiments and full-scale prototyping, embodying a probabilistic approach according to which final outputs are drawn and developed from the material processes themselves. This open-ended pedagogy has investigated the Circular Economy and explored the material affordances--both at the molecular and molar scale--of a diverse range of objects: from typical construction materials such as CLT, aluminum framing and PLA, to atypical ones like dredged waste, hair, and discarded objects (rags, metal scraps, glass bottles, milk cartons, etc.). Here, notions of architectural authorship and hierarchy are contested and modified both within the studio--with the tutor and student sharing a trajectory of discovery, rather than imparting knowledge to one another--and in the exchanges between the architect and its materials, which no longer endorse the expression or embodiment of intents, but are encountered and &lsquo;listened to&rsquo; as co-designers.   These approaches demand that work be not (only) assessed according to final outputs (the beautiful or considered object or building as desirable outcome), but in relation to the technical platforms, material flows, supply chains and labour practices associated with them, questioning our very assumptions and biases in the adjudication of meaning, beauty and value. In the case of the sourcing, diversion and repurposing of waste materials, for example, a vast amount of work is associated with invisible cleaning and reconditioning practices, and with the establishment of reliable local networks of participation, collaboration and care.  The work presented here is therefore not predicated on technological solutionism. Our project briefs aim to develop imaginative proposals and critical responses to the climate emergency, challenging past and present patterns of growth, consumption and extraction and engaging sites as &lsquo;thickened&rsquo; landscapes rich in cultural and material histories, and as collections of distant geologies, industrial processes, and social relations. The paper presents these on-going pedagogical experiments, identifying tentative successes as well as the resistance these approaches encounter in mainstream architectural culture and media.`,
            session: "THE CLIMATE CLASSROOM"
        },
        //19
        {
            title: "Open Thermodynamic Design: Exploring Dialectic Design Processes through Mass Timber",
            people: "Christoph Korner, Woodbury University",
            projectTags: "TIMBER, EMBODIED-ENERGY",
            images: [
                 "https://curriculumforclimateagency.org/images/OpenTherm (1).jpeg",
                 "https://curriculumforclimateagency.org/images/OpenTherm (2).jpeg",
                 "https://curriculumforclimateagency.org/images/OpenTherm (3).jpeg",
                 "https://curriculumforclimateagency.org/images/OpenTherm (4).jpeg",
                 "https://curriculumforclimateagency.org/images/OpenTherm (5).jpeg",
            ],
            description: `The construction industry is responsible for 40% of global carbon emissions and architecture and other design professions have willingly, or unwillingly, sided with an uneven development that has consequences expanding from food insecurity and nutrient deficiency to imposed displacement due to collapsing ecosystems. Countries and communities that are least responsible are feeling the impact of the decisions made on the opposite side of the world ‐ a trend which will exacerbate in the future as new portions of our shared earth industrialize. As we move out of our current global health emergency and confront the next very real crisis of climate alteration, should architecture’s agenda be to rally forth in action, or can architecture construct a new type of agency in the processes of inaction?"`,
            session: "ENVIRONMENTAL MORPHOLOGY"
        },
        //20
        {
            title: "Performative Architecture: Outcome of Assumptions",
            people: "Christopher Meyer, University of Miami",
            projectTags: "BUILDING-PERFORMANCE, ENERGYMODELING",
            description: `Do not fight forces, use them.’
            Buckminster Fuller (American Architect 1895 – 1983)
            Fundamentally, the core function of architecture is to define interiority from exteriority, with the intention of reshaping harsh or inhospitable conditions into comfortable environments of inhabitation, the meso-environment: warmth, coolth, dry, wet, dark, light, and secure.  These alterations to atmospheric conditions of the meso-environment remains a question of energetics.  In American Building 2, James Marston Fitch recognizes architecture as an instrument capable of modulating energy flows responsible for the meso-environment atmosphere and subsequently requested the discipline of architecture judge buildings through their performance.1  These assertions published by Fitch’s in 1947 were not aimed at climate change or energy demands, but instead were concentrated on architectural accountability.  The core lecture course Environment | Building | Systems (E|B|S) acknowledges Fitch’s request and posits the methods and techniques used to shape interior environmental conditions cannot be conceived in isolation, but, instead as a collective of interconnected decisions– a system thinking approach.
            Through a union of lectures, workshops, hands-on exercises and physical testing, the E|B|S course introduces students to the looming energy and environmental issues facing the discipline of architecture.  Course content is delivered explicitly through the lens of energy, reframing investigations in architectural precedents, proposals and analysis lest by formal interests but instead through performative measures.  Operating as a supporting course to the technical and integrated studios, design ideas are tested, interrogated, and analyzed as students are exposed to the successes and failures of their architectural strategies.
            The paper Performative Architecture: Outcome of Assumptions, will focus on the evolving curriculum within the E|B|S course; specifically two exercises employing physical testing and environmental metering– a Climate Walk and a Foam-Box-Model– linking atmospheric conditions with design decisions through quantifiable data of thermal modulation.  Through a series of systematic iterations investigating color, shading elements, thermal mass and phase change materials students learn how to manipulate the temperature profile of the meso-environment through form and material.  The physical testing provides quantifiable empirical data to otherwise assumed outcomes of design decisions. Ultimately, these exercises implement a rewarding process to design decisions that reinforce performative form augmenting the relationship between form and the interior temperature profiles.  The outcomes in the E|B|S course position energy and environment as design drivers influencing formal explorations, spatial configuration, and material selection directly translating to studio projects.  The primary course objective is to provide emerging students methods and techniques to address the imminent pressures of climate change through performative architecture4
            <P>‘Man’s energy and health depend in large measure on the direct effects of his environment.’
            Victor Olgyay (Architect 1910 – 1970)
            <P>Finally, an underlying but equally critical impetus to the class curriculum is the practice of Consortium Community. Through the development of a simple algorithm; a range of learning parameters that each student may experience during this current expanded modalities are analyzed and sorted to create equitable learning communities. These communities are composed of ten students and utilized for class exercises to build and disseminate knowledge.
            <P>CITATIONS / WORK CITED:
            <P>1 Marston James. American Building 2: The Environmental Forces That Shape It. Houghton Mifflin Co., 1972.
            <P> 2Olgyay, Victor, et al. Design with Climate: Bioclimatic Approach to Architectural Regionalism – New and Expanded Edition. Revised, Princeton University Press, 2015.
            <P>3 Banham, Reyner. The Architecture of the Well-Tempered Environment. 2nd ed., The University of Chicago Press, 1984.
            <P>4Course objectives from EBS Course Syllabus. Specific Syllabus not provided as a means to abide by requested anonymity.`,
            session: "ENVIRONMENTAL MORPHOLOGY"
        },
        //21
        {
            title: "Africa Studio: Mange Negotiations",
            people: "Marcos Barinas, University of Illinois, Urbana-Champaign",
            projectTags: "WATER, RESILIENCE, ECOSYSTEMS",
            images: [
                "https://curriculumforclimateagency.org/images/Mange (1).jpg",
                "https://curriculumforclimateagency.org/images/Mange (2).jpg",
                "https://curriculumforclimateagency.org/images/Mange (3).jpg",
                "https://curriculumforclimateagency.org/images/Mange (4).jpg",
                "https://curriculumforclimateagency.org/images/Mange (5).jpg",
            ],
            description: `Do not fight forces, use them.’
            Buckminster Fuller (American Architect 1895 – 1983)
            Fundamentally, the core function of architecture is to define interiority from exteriority, with the intention of reshaping harsh or inhospitable conditions into comfortable environments of inhabitation, the meso-environment: warmth, coolth, dry, wet, dark, light, and secure.  These alterations to atmospheric conditions of the meso-environment remains a question of energetics.  In American Building 2, James Marston Fitch recognizes architecture as an instrument capable of modulating energy flows responsible for the meso-environment atmosphere and subsequently requested the discipline of architecture judge buildings through their performance.1  These assertions published by Fitch’s in 1947 were not aimed at climate change or energy demands, but instead were concentrated on architectural accountability.  The core lecture course Environment | Building | Systems (E|B|S) acknowledges Fitch’s request and posits the methods and techniques used to shape interior environmental conditions cannot be conceived in isolation, but, instead as a collective of interconnected decisions– a system thinking approach.
            Through a union of lectures, workshops, hands-on exercises and physical testing, the E|B|S course introduces students to the looming energy and environmental issues facing the discipline of architecture.  Course content is delivered explicitly through the lens of energy, reframing investigations in architectural precedents, proposals and analysis lest by formal interests but instead through performative measures.  Operating as a supporting course to the technical and integrated studios, design ideas are tested, interrogated, and analyzed as students are exposed to the successes and failures of their architectural strategies.
            The paper Performative Architecture: The study of coastal cities has been traditionally conditioned to a Eurocentric vision of space, where the importance of the metropolis and its infrastructure is imposed over the singularities of the people’s relationship with landscape and nature. Coastal cities in the West Africa have are potential laboratories of climate adaption for building and social space. The sea is an essential part of life for tropical cities, providing vital ecosystem services to urban communities. The coastal natural ecosystem is also a major inspiration for literature, music and cultural events. However, It is often severely impacted by industries that impulse urban growth, like tourism, trade and travel
            The mangrove forest is a very important environmental ecosystem for the future, but it is also a space of political resistance. It is the perfect expression of Black Atlantic Modernism: Transgressive, transatlantic, inclusive, always renovating itself through resistance; a social ecumene where culture is not rooted in the past nor floating away to the future. This landscape has been food for thought to contemporary cultural manifestations like Recife’s Mangebeat, Port of Spain’s Soca and New Orleans’ Bounce. However, mangroves are one of the most threatened habitats on earth, with an annual loss outpacing other tropical rainforests. Mangrove in Africa are rapidly declining, It is estimated that an additional 25% will be lost by 2025 due to rapid development in coastal cities.
            Map Making: The studio focuses on challenging traditional methodologies embracing science and big data towards more creative collaborative processes. The experiment on CONCEPTBOARD map making inverts the technicality of drawing, challenging our abilities as designers to map, model, and represent the environment within the aesthetics of remote collaboration.<p>Assigned themes will give the students a direction into the discussion of many fundamental concerns on the ecosystems of West African coastal cities. The students will read, research, discuss and synthetize on the six topics selected.  We will discuss on artificiality and authenticity, values, strengths and vulnerabilities. Parallel to the lectures and readings the students will produce a collaborative conceptual map supported on the ongoing conclusions of the thematic module.
            <p>Green: Coastal ecosystems and sustainability.
            Blue: Global economics, trade and tourism.
            Orange: Cultural industries and creative economies.
            Gray: City life and urban footprint.
            Pink: Vulnerability and inequality.
            Brown: Materials, tectonics and circular economies.
            <p>We will make use of a Hy-Flex online delivery option where students will be able to interact with the instructor and peers, both on synchronous and asynchronous mode. We will make use of three online resources: GOOGLE DRIVE AND MAIL for internal mail, news, reading material and project submissions; CONCEPTBOARD for Asynchronous online meetings, crits and corrections; and ZOOM for Synchronous meetings and lectures.
            <p>The map has been designed to be explored and browsed through the web. Zooming in and out is the way of getting specific information depending on scale and location.Outcome of Assumptions, will focus on the evolving curriculum within the E|B|S course; specifically two exercises employing physical testing and environmental metering– a Climate Walk and a Foam-Box-Model– linking atmospheric conditions with design decisions through quantifiable data of thermal modulation.  Through a series of systematic iterations investigating color, shading elements, thermal mass and phase change materials students learn how to manipulate the temperature profile of the meso-environment through form and material.  The physical testing provides quantifiable empirical data to otherwise assumed outcomes of design decisions. Ultimately, these exercises implement a rewarding process to design decisions that reinforce performative form augmenting the relationship between form and the interior temperature profiles.  The outcomes in the E|B|S course position energy and environment as design drivers influencing formal explorations, spatial configuration, and material selection directly translating to studio projects.  The primary course objective is to provide emerging students methods and techniques to address the imminent pressures of climate change through performative architecture4
            <P>‘Man’s energy and health depend in large measure on the direct effects of his environment.’
            Victor Olgyay (Architect 1910 – 1970)
            <P>Finally, an underlying but equally critical impetus to the class curriculum is the practice of Consortium Community. Through the development of a simple algorithm; a range of learning parameters that each student may experience during this current expanded modalities are analyzed and sorted to create equitable learning communities. These communities are composed of ten students and utilized for class exercises to build and disseminate knowledge.
            <P>CITATIONS / WORK CITED:
            <P>1 Marston James. American Building 2: The Environmental Forces That Shape It. Houghton Mifflin Co., 1972.
            <P> 2Olgyay, Victor, et al. Design with Climate: Bioclimatic Approach to Architectural Regionalism – New and Expanded Edition. Revised, Princeton University Press, 2015.
            <P>3 Banham, Reyner. The Architecture of the Well-Tempered Environment. 2nd ed., The University of Chicago Press, 1984.
            <P>4Course objectives from EBS Course Syllabus. Specific Syllabus not provided as a means to abide by requested anonymity.`,
            session: "ENVIRONMENTAL MORPHOLOGY"
        },
        //22
        {
            title: "Temporal Boundaries: Multiscalar Dynamic Modeling Techniques for Climate Change and Design",
            people: "Susannah Dickinson & Aletheia Ida, University of Arizona",
            projectTags: "DESERT, BORDER, BOUNDARIES",
            images: [
                "https://curriculumforclimateagency.org/images/Temporal (1).jpg",
                "https://curriculumforclimateagency.org/images/Temporal (2).jpg",
                "https://curriculumforclimateagency.org/images/Temporal (3).jpg",
                "https://curriculumforclimateagency.org/images/Temporal (4).jpg",
                ],
            description: `The climate change emergency requires that we drastically re-evaluate the design of the built environment and our pedagogical methods, tools and curricula. This essay addresses the issue directly through dissemination of both the framework and outcomes from an upper-level architecture design studio course that focuses on this challenging problem and hypothesizes on future, broader curriculum changes. “There is a common conceptual framework underlying all these complex phenomena and that the dynamics, growth, and organization of animals, plants, human social behavior, cities, and companies are, in fact, subject to similar generic ‘laws’.”[1] At its core, the methodological framework insists upon interscalar observation and performative analysis across natural biome dynamics, the built environment, and sociocultural conditions to understand their connections and relationships and see that our climate emergency is having a disproportionate impact on disenfranchised communities.
            Our essay disseminates digital methodologies for linking interscalar contexts through grounded research and climate change investigations within the Sonoran Desert region of Arizona, USA and Sonora, Mexico. This robust natural biome is a complex natural ecosystem with climate change challenges of drought, forest fires, rising currents, and heavy storms. In addition, because of the challenging political context at the border of Mexico and the United States and the presence of a physical boundary, migration paths, ecological flows and humanitarian crises are further exacerbated [2]. The methodology integrates knowledge of climate and complexity theories with advanced digital technologies from different disciplines to provide emergent potentials for our future. We investigate the use of digital tools, such as ArcGISPro for regional data mapping, microphotography imaging software and point cloud dynamics, and intermediary Rhino-Grasshopper plug-in platforms to link the regional and micro-scales with dynamic systems’ logics. In addition, the integration of Processing and Arduino tools allows for live data collection and feedback into visual animations, both from global social networks and local ‘invisible’ information, which inform aspects of stochastic and heuristic modeling techniques leading to alternative decisions in the emergent, form-finding design process.
            Parallel modes for integrating accessible micro-sensing data collection technologies with multi-dimensional digital design methods enable expanding ecologies by allowing for new performative layers of information to intersect where previously hidden. Knowledge of complexity and network science is established as it helps students understand the complex phenomena around them and make connections across multiple fields. “Four subject areas are fundamental to the study of complex systems: information, computation, dynamics and chaos, and evolution […] life and evolution can be mimicked in computers, and conversely how the notion of computation itself is being imported to explain the behavior of natural systems.” [3] In this sense, the emergent design process across micro- and macro- contexts of physical and cultural information culminate in design proposals that simultaneously educate and mitigate current unprecedented climate change impacts. Using the lens of both a microbiologist and geologist, as well as a climatologist and humanitarian, the techniques engaged throughout this design process force transdisciplinary territories to converge.
            <p>CITATIONS / WORK CITED:
            <p>[1] West, G. (2017), Scale – The Universal Laws of Life, Growth and Death in Organisms, Cities and Companies, Penguin Books, New York.
            <p>[2] Beaumont, L. J et al., 2011. Impacts of climate change on the world’s most exceptional ecoregions. Proceedings of the National Academy of Sciences – PNAS, 108(6), pp.2306–2311.
            <p>[3] Mitchell, M. (2009), Complexity – A Guided Tour, Oxford University Press, Oxford.`,
            session: "ENVIRONMENTAL MORPHOLOGY"
        },
        //23
        {
            title: "Architect's Declare",
            people: "Xan Lilehei, US Architects Declare, Andrew Waugh, Waugh Thistleton Architects, University of Arkansas",
            projectTags: "PRACTICE, COLLECTIVE, FUTURE",
            image: "images/ArchitectsDeclare.jpg",
            description: `The crises of climate, biodiversity, and justice must be understood in relation to each other and the urgency of these crises requires immediate transformation in the ways we teach, practice, and build. Architects Declare believes that this means working collectively, across institutions and offices, beyond the boundaries of our roles on individual projects. Incremental approaches will not bring about rapid systemic change and we must leverage the power of the collective to enact a cultural shift. Educators have a significant part to play in this mission and this panel will explore how the work of Architects Declare is directly impacting thinking, teaching, and building across the US and UK in both pedagogy and practice.<P>Panelists:
            Debbie Chen, University of Wisconsin-Milwaukee
            Joyce Hwang, Ants of the Prairie, University at Buffalo
            Julia Barfield, Marks Barfield Architects, Queen’s University Belfast`,
            session: "SPECIAL FOCUS"
        },
        //24
        {
            title: "Teaching Industry Disruption: Studying LBC Projects to Develop Carbon Positive Knowledge, Behaviors, & Advocacy",
            people: "Caryn Brause, University of Massachusetts, Amherst",
            projectTags: "LANDSCAPE, PATTERN, POST-HUMAN",
            description: `There is increasing urgency to address the accelerating impacts of human-created climate change by shifting design and construction practices to those that restore and regenerate the earth’s systems. Researchers, practitioners, and educators are searching for methods to radically reduce atmospheric carbon dioxide associated with buildings and their operations through carbon positive strategies.
            <p>This project considers one pedagogical method for modeling these strategies through a hybrid classroom and field-based applied professional practice course. While the studio remains a primary curricular vehicle for simulating a practice environment, there are domains that continue to be difficult to integrate into this setting and that are essential to achieving carbon reduction targets. Among these are the interrelated domains of professional roles, project delivery methods, collaborative practices, regulatory issues, finances, and labor. This project employs qualitative data analysis1 of student deliverables from a course that integrates these topics into the curriculum through the study of active and recently completed Living Building Challenge (LBC) projects.
            <p>Over the last three decades, the architecture, engineering, construction and owner (AECO) community has developed certifications and rating systems to contend with the economic, social, environmental, and regulatory contexts in which these fields operate. The stringent LBC is considered among the most wide-reaching, employing buildings to shift system behaviors in order “to build an ecologically-minded, restorative world for all people.”2 The LBC is organized into seven “Petals,” many of which address operational and embodied carbon reduction strategies, as well as drawdown approaches beyond the building scale. These Petals comprise requirements for Place, Water, Energy, Health & Happiness, Materials, Equity, and Beauty.
            This research considers work produced by three sections of students who assessed two LBC projects by reviewing project documentation, conducting construction visits, and interviewing team members. Employing QDA, student deliverables were coded for quantitative and qualitative evidence that studying LBC projects increased students’ understanding of the integrated organizational, design, and construction strategies necessary to achieve carbon reduction targets. The coding focuses on student understanding of short- and long-term carbon management strategies3 with a focus on the difficulty of achieving these strategies in real-world settings. For example, students found that meeting the LBC criteria for the Energy Petal by shifting energy sources and designing for energy efficiency4 was easier than the meeting those of the Water and Materials Petals. As in many jurisdictions, the strategies necessary to achieve the net-positive water imperative conflict with building codes and health department regulations and require a fine-tuned approach to occupant behavior.5 And within the Material realm, students learned about selecting carbon-sequestering structural systems and low-carbon material palettes. But they also learned they would need to become advocates to address supply chain limitations and lack of transparency which make it difficult to assess environmental impact and human health concerns.6
            The research considers how teaching professional practice topics and integrative design through a case-study method focused on LBC projects enables emerging practitioners to understand their ability and agency to disrupt established design, construction, and regulatory systems in order to build a more sustainable and equitable society.
            <p>CITATIONS / WORK CITED:
            1. H. Russell Bernard, Amber Wutich, and Gery Wayne Ryan, Analyzing Qualitative Data: Systematic Approaches, Second edition (Los Angeles: SAGE, 2017).
            <p>2. “International Living Future Institute FAQs,” International Living Future Institute (ILFI), accessed April 21, 2020, https://living-future.org/contact-us/faq/#international-living-future-institute-ilfi.
            <p>3. These projects were certified as Living Buildings under earlier versions of LBC, which predate the ILFI Zero Carbon Certification.
            <p> 4.“Sector Summary: Buildings,” Project Drawdown, accessed April 21, 2020, https://drawdown.org/sectors/buildings
            <p> 5. Joel Sisolak and Kate Spataro, “Toward Net Zero Water: Best Management Practices for Decentralized Sourcing and Treatment” (Cascadia Green Building Council, March 2011), https://living-future.org/wp-content/uploads/2016/11/Toward_Net-Zero_Water.pdf.
            <p>6. Jonathan Wright, “From Red List to Ready List – Finding Building Products That Are Not Harmful to People, Humans, or the Environment,” Building Energy, Spring 2017.`,
            session: "DESIGN AGENCY"
        },
        //25
        {
            title: "Natural Adversities: Finding Solid Grounds for School Architecture",
            people: "Maged Guerguis, University of Tennessee-Knoxville",
            projectTags: "SCHOOLS, DISASTER",
            description: `
            Each year, schools damaged by natural disasters often leave hundreds of thousands of students with no access to education. Therefore, there is an urgency for design research that responds to the demand for affordable, innovative, resilient, and environmentally sustainable school buildings. Studio Mozambique is an advanced design research studio that will focus on the cultural, economic, political, and spatial history of schools in cities susceptible to natural disasters 1,2,3.
             Early education has a significant impact on society. It serves as a platform to gain the necessary knowledge and skills to make rational and informed decisions. It is through education that communities can achieve their goals for growth and development. Natural disasters, such as floods, hurricanes, cyclones, and earthquakes, often cause property damage, including schools and educational institutions, disrupting children’s education every year. The proposed research seeks to examine the multiple aspects in which schools and education as a whole struggle to find solid grounds post-natural disasters. In many areas of the world, a natural disaster coupled with poverty is not merely a temporal transition or a reversible state. Rather, it has detrimental long-term effects and often results in school shutdowns 3,4.
            Tropical cyclones are expected to increase due to climate change, which has contributed to an increase in Atlantic hurricane activity. In Mozambique, over 3,400 classrooms were damaged or destroyed in cyclone-affected regions. In some cases, schools require extensive rehabilitation after being used as emergency shelters for children and families displaced by the storm. School facilities in affected regions of the world should be reconstructed to withstand recurring natural disasters. The proposed research focuses on the development of a new high school project and a master plan for Hlauleka high school in Chokwe, Mozambiqu , which was recently hit by a Cyclone Idai in 2019 (Fig. 1).
            The work presented in this paper can serve as a compendium of post-disaster recovery of primary educational institutions. Additionally, it will potentially help to answer these fundamental questions: What are the factors and parameters that inform a more integrated design of a school building? What processes can be adapted for local fabrication or rapid deployment within the limitations of the site? What are the material and construction systems best suited to the limits of transportation and fabrication (i.e., light-weight, local, reused, weather-resistant, adaptability, resilient) 5,6? What strategies could be implemented for the design of school structures for functional integration of sustainable characteristics (i.e., use of local renewable or biodegradable materials and structural optimization)?
            <p>The research discussed in this paper can provide fundamental transformative insight into early design stages and its potential impact on contemporary design practices and decision making and planning of the flood-resistant, affordable, resilient, and environmentally sustainable school buildings designs.
            <p>CITATIONS / WORK CITED:
            <p>[1] Charlesworth, Esther. “Humanitarian architecture: 15 stories of architects working after disaster.” (2014).
            <p>[2] Sinclair, Cameron, and Architecture for Humanity. “Design like you give a damn: Architectural responses to humanitarian crises.” (2006).
            <p>[3] Aquilino, Marie Jeannine, ed. Beyond shelter: architecture and human dignity. New York, NY: Metropolis Books, 2011.
            <p>[4] Lepik, Andres. Small scale, big change: new architectures of social engagement. The Museum of Modern Art, 2010.
            <p>[5] Asquith, Lindsay, and Marcel Vellinga, eds. Vernacular architecture in the 21st century: Theory, education and practice. Taylor & Francis, 2006.
            <p>[6] Fathy, Hassan. “Natural energy and vernacular architecture.” (1986).`,
            session: "DESIGN AGENCY"
        },
        //26
        {
            title: "Embedded and Hopeful: A Curriculum for Change",
            people: "Sarah Keogh, Ball State University",
            projectTags: "SITE-DESIGN, LOCAL-CONDITIONS",
            description: `<p>The next generation of architects will face unprecedented challenges involving ecological collapse as well as related issues of culturally embedded social and political inequities. Architectural education has a key role to play in addressing this ongoing environmental crisis. Our education, however, tends to lead students through formal-operational type design decision making, focusing on form and aesthetics as opposed to training them to start with site-specific studies of social and environmental need. Perhaps unsurprisingly with this formal design logic as a shared foundation, in architectural academia our discourses that surround sustainability tend to follow these kinds of logics as well, searching for commonalities and ubiquitous solutions. Site-specific social and environmental design approaches also need to become a part of our architectural curriculum.
            <p>Long term sustainability will require a shift in societal priorities, away from a culture of consumption and assumed affluence, and toward a studied focus on social needs and embedded ecological priorities. This implies a necessary refocusing which can be achieved through a close examination of everyday local conditions, stressing the specificity and nuance of place and setting. From an architectural perspective, these foci are not disparate from our generalized and formal design approaches, but can and must be co-generative.
            <p>This paper will critically examine the first semester of a multi-year undergraduate design course. In this course, architecture students work with students from a variety of other disciplines to create design proposals for the transformation a failing mall into a local sustainability hub. Students teams prioritize programs that directly address local social and environmental issues; in this first semester the design proposals include a homeless shelter, a local food hub, and an ecological education center.
            
            Students worked through concurrent social and ecological goals throughout their design experience, and through cross-disciplinary teamwork, the students learned to examine sustainability and social agendas through different disciplinary lenses. The students also benefited from an immersive learning approach. Community members and local business groups involved the students in discourses which scrutinized initial project assumptions and helped the students to redefine project goals to better address local social and environmental issues. This exposure to actual local needs provided a cognitive and ethical foundation for the students’ design approach.
            <p>As our design settings become increasingly more complex and volatile, with social issues of inequity at the fore of escalating ecological issues, the architects who face these challenges will need to be capable of working within and mediating a myriad of local complexities. Through a critical examination of this course’s learning outcomes, this paper will discuss a potential trajectory for a hopeful architectural design curriculum, one that can better address a future shadowed by the implications of climate change.
            <P>CITATIONS / WORK CITED:
            Dobson, Andrew. Citizenship and the Environment. New York: Oxford University Press Inc., 2003.
            <p>Fleming, Rob and Sagkinda H Roberts. Sustainable Design for the Built Environment. New York: Routledge, 2019.
            <p.
            Harries, Karsten. The Ethical Function of Architecture. Cambridge: MIT Press, 1998.
            <p>Orr, David W. The Nature of Design: Ecology, Culture, and Human Intention. New York: Oxford University Press, 2002.
            <p>Sussman, Ann and Justin B. Hollander. Cognitive Architecture: Designing for How We Respond to the Built Environment. New York: Routledge, 2015.
            <p>Tonkiss, Fran. Space, the City and Social Theory: Social Relations and Urban Forms. Cambridge: Polity Press, 2005.`,
            session: "DESIGN AGENCY"
        },
        //27
        {
            title: "Core Samples Through the Building and City: Past, Present and Future Seen Through Objects, Materials, Debris and Drawings",
            people: "Aleksandr Mergold, Cornell University; Jason Austin, University of the Arts",
            projectTags: "REPRESENTATION, CHUNK",
            images: [
                "https://curriculumforclimateagency.org/images/Core (1).jpg",
                "https://curriculumforclimateagency.org/images/Core (2).jpg",
                "https://curriculumforclimateagency.org/images/Core (3).jpg",
                "https://curriculumforclimateagency.org/images/Core (4).jpg",
                "https://curriculumforclimateagency.org/images/Core (5).jpg",
                ],
            description: `Core-sampling has long been used as a method to uncover hidden conditions by archeologists, geologists or glaciologist (or medial doctors, on a much smaller scale of biopsy) by physically extracting fragments of the natural and built elements embedded into their contextual situations as a coherent object. This investigative process, instrumental to understanding the various complex strata, served as a generator for several architectural design studios. The concept of core-sampling was used to investigate specific buildings and larger urban conditions, in order to map, reveal, and muse upon the past, present and future of a complex, messy multi-dimensional construct that is an architecture that has been in use, misuse or disuse for a number of decades.
            <P>
            Unlike architectural analysis techniques, core-sampling is not reductive. A “core-sample” consists of layers of material, fragments of details, debris, bits of color, space, and even time. The isolation of a sample from its larger spatial and temporal context revealed relationships formed by time, serendipity, use and decay, instead of pure design intent, form, or technology. The goal of this analysis was to re-introduce context, place, history and memory via (constructed) core artifacts so that the layers of derelict, mundane, unremarkable built form could be considered as geological and anthropological artifacts, and the temporal and material stratigraphy of a historic building or a city can be operated on by an architect in the present.
            A large part of the curriculum was dedicated to designing and representing the architectural core-sampling processes. Core-sampling suggests operations at full scale. In drawing and modelling a fraction of building or of a city, weight and gravity, texture and grain, color and decay, as well as occasional contaminants became problematic and generative. The stratified layers of latent history and the imaginary emerged as analytical tools and as self-sufficient objects, providing material (physical and conceptual) for the narratives inspired by “extracted” cores (artifacts) and for the genesis of an architecture simultaneously of the future and of the past.
            <P>
            The paper will present the idea of an architectural core-sampling as an analysis and representation technique on the examples of work in two design studios. One dealt exclusively with a factory building, constructed in phases over the last 100 years in a small post-industrial town, now so contaminated that its preservation, as well as its disuse, is guaranteed by the virtue of its environmental degradation. The other took on a large north-American post-industrial city as a multi-cultured and multi-layered environment in which core-sampling was used to probe the possibilities of operating within the strata normally out of scale and reach to architects. While dramatically abstract, the idea of removing a manageable sample of a building or a whole city that contains not only built form but its temporal aura, traces of its users, immediate and accumulated climatic conditions, etc., seems to be a productive step toward an architecture that is not purely formal- or material- or economy-driven, but that of a holistic construct in tune with the changes in its cultural, temporal, and climatic environments.<P>
            <P>CITATIONS / WORK CITED:
            <P>Otero-Pailos, Jorge, Erik Langdalen, Thordis Arrhenius (eds.), Experimental Preservation, Lars Mueller, 2016
            <P>Ruskin, John, The Seven Lamps of Architecture, Smith, Elder & Co, 1849
            <P>DeSilvey, Caitlin. Curated Decay: Heritage beyond Saving. Minneapolis, Minnesota: University of Minnesota Press, 2017`,
            session: "ABSTRACT BY NATURE"
        },
        //28
        {
            title: "On Paper // Reciprocity between Architecture and Environment",
            people: "Felix Heisel + Sasa Zivkovic, Cornell University",
            projectTags: "PAPER, PERFORMANCE, EARLY-DESIGN",
            images: [
                "https://curriculumforclimateagency.org/images/Paper (1).jpg",
                "https://curriculumforclimateagency.org/images/Paper (2).jpg",
                "https://curriculumforclimateagency.org/images/Paper (3).jpg",
                "https://curriculumforclimateagency.org/images/Paper (4).jpg",
                "https://curriculumforclimateagency.org/images/Paper (5).jpg",
                ],
            description: `This paper outlines and discusses a number of novel pedagogical strategies developed for a recent First Year Design Studio at [redacted]. The global climate and resource crises are calling for paradigm shifts in the way we design, build, and manage our physical environment. Importantly, those paradigm shifts also fundamentally challenge the way we teach architecture. The studio aims to introduce students to the issues, elements, processes and interdependencies of both sustainability (environment, climate, politics) and architectural design (geometry, materiality, form, structure).
            The ON PAPER First Year Design Studio aims to challenge our understanding of paper, engaging it both in theory and practice, as medium and material, as mediator and actor. Throughout the semester, paper creates the foundation and constitutes the common thread which we use to dissect architecture, pedagogy, and spatial exploration while training the skills, methods and tools of the discipline, as well as critical and proactive student minds. In this context, paper is understood as a practical and widely available resource that is easy to manipulate with basic tools, which is essential during a pandemic.
            The studio loosely borrows and appropriates pedagogical strategies developed by Josef Albers in his Vorkurs at the Bauhaus [1], which themselves are based on the work of Friedrich Fröbel and Japanese Origami Traditions. However, it aims to drastically augment abstract-geometric and analytical “Bauhausian” investigations and digital paper-folding explorations [2] by imbuing assignments with new relevant narratives for creative exploration and critical reflection. One assignment, for example, playfully introduces the notion of environment and performance: utilizing origami and kirigami techniques, students manipulate a planar sheet of paper into a complex and performative surface. The addition of environmental forces such as wind, light, shade, cold, heat, sound, scent, or vapor introduces new design objectives that address environmental performance. A later assignment argues for material as an active participator in the design process: materials are perpetually invented, designed, re-designed, fabricated, or augmented, challenging the very nature of the material, its structural and chemical composition, economic business models and most often aesthetics. Based on haptic qualities (fluffy, spongy, rough, cracked, thorny, granular, smooth, viscous), students are asked to manipulate the materiality of paper and its composition of matter with the goal to investigate, react to and enforce the many physical and aesthetic qualities paper might have. The resulting paper-based material systems in each of the two above mentioned exercises create playful dialogues between performance, geometry, proportion, material, structure, and design concept.
            <p>
            A total of five assignments and their results will be presented in this paper, historically contextualized, and pedagogically analyzed. Each of the exercises incrementally introduces new architectural concepts related to environment, body, material, culture, landscape, spatial tectonics, and representation. As the semester progresses, project narratives are layered, expanding a student’s understanding of architecture as a complex set of abstracted, reciprocal – geometric, proportional, formal, performative, constructed and natural – relationships.
            <p>CITATIONS / WORK CITED:
            <p>[1] Foster, Hal, Terence A. Senter, Hattula Moholy-Nagy, Nicholas Fox Weber, and Michael White. Albers and Moholy-Nagy: From the Bauhaus to the New World. Yale University Press, 2006.
            <p>[2] Greg Lynn (Ed.). (1993). AD: Folding in architecture (Vol. 102). Academy Editions Limited.`,
            session: "ABSTRACT BY NATURE"
        },
        //29
        {
            title: "Pedagogy of the Fourth Wall",
            people: "Kevin Marblestone & Emily Whitbeck, Massachusetts Institute of Technology",
            projectTags: "TIME, VIDEO, EARLY-DESIGN",
            images: [
                "https://curriculumforclimateagency.org/images/FourthWallPedagogy_StillFrame1.jpg",
                "https://curriculumforclimateagency.org/images/FourthWallPedagogy_StillFrame2.jpg",
                "https://curriculumforclimateagency.org/images/FourthWallPedagogy_StillFrame3.jpg",
                "https://curriculumforclimateagency.org/images/FourthWallPedagogy_StillFrame4.jpg",
                "https://curriculumforclimateagency.org/images/FourthWallPedagogy_StillFrame5.jpg",
                ],
            description: `Contemporary design pedagogy has failed to produce architects that can operate effectively within today’s time-based global crises. Embedded in (and dependent on) industries where ‘permanence’ is measured in 10-30 year warranties and sustainability is achieved by moving points around a spreadsheet, architecture has internalized many of these misconceptions about the nature of time. By considering only time-span, architects have trapped themselves in a false dichotomy, perceiving structures to be either temporary or permanent. The type of architecture produced exists asynchronously to the vast temporal scale and complexity of the global climate crisis, and challenges the seemingly inextricable link between architecture and time. The profession must reevaluate this relationship through the creation of a new pedagogy, educating a generation of practitioners that can think differently about time. This project, Pedagogy of the Fourth Wall, focuses on rethinking the true beginning of the design profession, the moment of inception, the first-year design studio.
            Design education’s formidable legacy of first-year studio exercises, from the Nine Square Grid Problem to The Cube and The Hidden Room, have historically inducted students into the profession using critical principles of abstraction and composition to explore tectonics and form. However, these same exercises have effectively stifled the aptitude of students for temporal thinking through their insistence on static conventions of orthography. The media students work through directly impacts how they think and grow as designers. In order for the next generation of architects to engage the time-based urgencies of the Anthropocene, architectural education must engage a new critical eye on time and develop tools and methods for exploring its cyclical, recursive nature.
            Pedagogy of the Fourth Wall is structured as a fictional studio course founded on a working methodology focused on time and perception, rather than program and form. This new framework around time mandates the use of time-based media at the very beginning of the design process. Students work through video and sound to employ abstract structures of composition through the montage and manipulation of image over time. A series of prompts dictate the resolution, duration and temporal rate of the working media, encouraging students to experiment with specific structures of cyclical time. Initially addressing foundational principles of composition and rhythm, the prompts eventually broaden to encompass the perceptual affordance of matter and energy. The studio generates new, productive forms of abstraction that directly engage the underlying temporal principles of environmental exchange and material entropy on multiple scales.
            <p>
            The impact of propagating this pedagogy through an entire architectural education could produce a fleet of architects that are capable of addressing architecture through time. How could this then redirect the course of the profession?
            <p>
            CITATIONS / WORK CITED:
            <p>Franzen, Ulrich, Gómez Alberto Pérez, and Kim Shkapich. Education of an Architect: a Point of View, the Cooper Union School of Art & Architecture. New York: Monacelli Press, 1999.`,
            session: "ABSTRACT BY NATURE"
        },
        //30
        {
            title: "Sympoietic Structures: Enfolding Ecological Inputs into Core-Studio Curricula",
            people: "Jason Vignieri-Beane, Pratt Institute",
            projectTags: "EARLY-DESIGN, WATER, ECOLOGY",
            images: [
                "https://curriculumforclimateagency.org/images/JVB (1).jpg",
                "https://curriculumforclimateagency.org/images/JVB (2).jpg",
                "https://curriculumforclimateagency.org/images/JVB (3).jpg",
                "https://curriculumforclimateagency.org/images/JVB (4).jpg",
                "https://curriculumforclimateagency.org/images/JVB (5).jpg",
                ],
            description: `Sympoietic Structures explores environmental morphology in first-year design studio pedagogy with an interest in new fundamentals based on sympoiesis and the enfolding of ecological inputs into form and organization. While first-year design curricula are often driven by abstraction, internal logics, formal processes and a general tendency to foreground autonomous aspects of architecture as a discipline, these features increasingly beg partnerships with inter- or extra-disciplinary operations in order to engage external worlds with environmental agency.
            <p>Works on biology and ecology by Maturana and Varela, Margulis, Dempster and Haraway demonstrate a parallel discussion of autonomy and inclusiveness in the form of autopoiesis (self-making, closed systems) and sympoiesis (making-together, open systems). Interestingly, these autonomous and inclusive forms of making are not mutually exclusive but are, as Haraway suggests, mutually reinforcing and nested within each other. Learning from this discourse, Sympoietic Structures looks at multi-phase project strategies wherein first-year students engage different environmental drivers to condition the meso- and macro-scale of architectural bodies and their collective organization, respectively.
            <p>These strategies involve defining relationships between environmental drivers and scales of operation in order to demonstrate fundamental concepts of forming versus organizing or individual morphology versus collective morphology. They involve creative ways by which environmental drivers can be parametricized in order to inform process-based architectural entities that are serial and morphologically specific. Serialization allows first-year students to iterate, test and evaluate form and performance while morphological specificity helps them experience feedback loops between process inputs and spatio-formal outcomes.
            <p>As a curricular case study, the paper will discuss a Sympoietic Structure of co-habitation for vegetation bodies, water bodies and human bodies. These three environmental bodies are in mutually forming partnerships with architectural categories such as envelope, structure and circulation to form composite (sympoietic) bodies of architectural and ecological material. At the meso-scale of form, parametric drivers include dimensional information and force. For example, students select vegetation types and use trunk and root-ball dimensions with root depth to size soil volumes and digitally lofted envelopes that support them over their lifecycle. These composite vegetation bodies have weights that students engage, in turn, to design structural supports, positioning vegetation to receive solar inputs and creating volumetric biproducts of programmable space.
            <p>At the macro-scale of site, students use rainfall data and solar simulation to three-dimensionally organize collectives of vegetation and water bodies, tuning their spatial relationships to receive sunlight and water as well as accommodate formal and informal programs that flow through them. What is more, in a near-future climate scenario, students use flood data and water level modeling as time-based parametric inputs for the sectional displacement of these co-habiting bodies of plant life, water catchment and human occupancy. Ecological architecture is considered over days, seasons and years as well as with and without ground.
            <p>While teaching plan and section, process and time, and form and organization through cascading processes of parametric environmental input, Sympoietic Structures teaches hierarchy, heterarchy and holoarchy wherein parts become wholes and wholes become parts in a composite structure of individual and collective environmental morphology.
            <p>
            CITATIONS / WORK CITED:
            <p>Dempster, Beth. Sympoietic and Autopoietic Systems: A New Distinction for Self-Organizing Systems, School of Planning, University of Waterloo, 2000, https://www.semanticscholar.org/author/Beth-Dempster/88912464, Accessed 07 Apr. 2020.
            <p>Haraway, Donna J. When Species Meet. Minneapolis, The University of Minnesota Press, 2008.
            <p>Haraway, Donna J. Staying with The Trouble: Making Kin in the Cthulucene. Durham, Duke University Press, 2016.
            <p>Holland, John. Hidden Order: How Adaptation Builds Complexity. New York, Basic Books, 1996.
            <p>Margulis, Lynn and Dorion Sagan. What is Life? Berkeley, University of California Press, 1995.
            <p>Maturana, Humberto R. and Francisco J. Varela. Autopoiesis and Cognition: The Realization of the Living. Dordrecht, D. Reidel Publishing Company, 1980.`,
            session: "ABSTRACT BY NATURE"
        },
        //31
        {
            title: "Thermally Active Concrete and Zero Energy Building Research",
            people: "Nik Nikolov, Lehigh University",
            projectTags: "ZERO-ENERGY, SOLAR, FORM",
            description: `The presentation will reveal the designs and results of a DoE initiative for Zero Energy Building (ZEB) Research.  While interest in ZEBs has taken off, research and development in this area is lagging. The development of commercial energy-efficient building envelopes, utilization of geothermal energy, and integration of solar collection into the building system is not widespread. Traditionally, ZEB-related research has been compartmentalized, with focused advances on specific facets. This approach is reflected in existing centers developed at other universities. The presentation will showcase a alternative approach due to the diversity of the team and their notable impact on all aspects of ZEBs. The work was performed over a year by a uniquely qualified team of faculty and industry members from Carrier (HVAC research and development) and Metromont Corporation (Precast Concrete Producer). These groups are experienced in research on the fundamental aspects of the proposed concept: thermodynamics, heat transfer, energy piles, surface optimization, and insulated wall panel development.
            <p>            A coupled thermally-active foundation (energy pile) and solar insulated concrete collector cladding system is developed for reduced building energy consumption moving building technology closer to zero energy status. The system relies on three facets: (1) an innovative precast insulated concrete roof and facade cladding system integrating solar collectors, high conductivity concrete designs and topologically optimized concrete surfaces facilitated by 3D printed forms, (2) an energy pile system that builds on proven technology of heat exchange with the ground and improvements to the soil/pile thermal interaction, and (3) a dual source heat pump system that takes advantage of both the radiative energy provided by the solar collectors and the constant ground temperature surrounding piles. The combined system leverages the proven capabilities of ground source heat pumps (GSHPs) and energy piles with precast concrete panels to provide improved energy efficiency with no additional first cost in an architecturally optimized and appealing manner.
            <p>
            The presentation will introduce the main concepts in the research work with a focus on the architectural development of wall surfaces. The presenting faculty will draw form their expertise in utilizing numerical methods in optimizing a surfaces exposure to solar radiation. Exploratory work on the topology optimization of wall surfaces for maximizing sun exposure for use with titanium dioxide concrete will be shown. The presentation will further discuss the processes and problems associated with prototype fabrication and the development of a test bed for the combined thermo-mechanical study of building energy efficiency. Additionally, the presenters will share ZEB concept studies through a test bed demonstration. Lastly, the team will illustrate common applications and the impact of the work.
            <p>
            In its summation, this research examines and maps the multivalent intersections of climate, infrastructure and the built environment. It adds a necessary perspective to a number of disciplinary programs, such as architecture, civil and environmental engineering and , more importantly, it may lay the groundwork for better understanding of the complexity of the intersecting issues at hand through the medium of design research and discourse.
            <p>
            CITATIONS / WORK CITED:
            [3]Zero Energy Buildings | Department of Energy n.d. https://www.energy.gov/eere/buildings/zero-energy-buildings (accessed November 25, 2019).
            <p>
            [4]OneNYC: Mayor Announces Significant Progress In Making Buildings More Energy Efficient | City of New York 2018. https://www1.nyc.gov/office-of-the-mayor/news/215-18/onenyc-mayor-significant-progress-making-buildings-more-energy-efficient (accessed November 25, 2019).
            <p>
            [5]How big is Amazon’s global real estate footprint? New filing reveals tech giant’s astounding presence –GeekWire 2019. https://www.geekwire.com/2019/big-amazons-global-real-estate-footprint-new-filing-reveals-tech-giants-astounding-presence/ (accessed November 25, 2019).
            <p>
            [6]Jeff Bezos Details Amazon’s Net Zero-Carbon Emissions 2040 Goal |Fortune 2019. https://fortune.com/2019/09/19/jeff-bezos-details-amazons-net-zero-carbon-emissions-2040-goals-climate-change/ (accessed November 25, 2019).
            <p>
             [8]Gombeda MJ, Trasborg P, Naito CJ, Quiel SE. Simplified model for partially-composite precast concrete insulated wall panels subjected to lateral loading. Engineering Structures 2017;138. https://doi.org/10.1016/j.engstruct.2017.01.065.
            <p>
            [12]Pan C, Vermaak N, Romero C, Neti S, Hoenig S, Chen C-H. Efficient optimization of a longitudinal finned heat pipe structure for a latent thermal energy storage system. Energy Conversion and Management 2017;153:93–105. https://doi.org/10.1016/j.enconman.2017.09.064.
            <p>
            [15]Nikolov N. Parametric Design of Photo-catalytic Concrete Cladding Panels. Architectural Research Centers Consortium 2013:513–8.`,
            session: "ENVIRONMENTAL MORPHOLOGY"
        },
        //32
        {
            title: "Radical and Systemic Changes to the Design Studio for Fighting Climate Change",
            people: "Robert Fleming, Thomas Jefferson University",
            projectTags: "ZERO-ENERGY, BUILDING-PERFORMANCE",
            images: [
                "https://curriculumforclimateagency.org/images/Radical1 (1).jpg",
                "https://curriculumforclimateagency.org/images/Radical1 (2).jpg",
                "https://curriculumforclimateagency.org/images/Radical1 (3).jpg",
                "https://curriculumforclimateagency.org/images/Radical1 (4).jpg",
                "https://curriculumforclimateagency.org/images/Radical1 (5).jpg",
                ],
            description: `<P>Now that we have entered the second decade of the 21st century, the threat of climate change has morphed into a horrific reality of death, destruction, wide spread suffering with conditions worsening in our lifetimes.[i] Partial complicity in this disaster lies with the architect, a professional who claims health, safety and welfare as a directive for ethical practice but has only recently begun to see the need for radical, meaningful and profound change.[ii] [iii] [iv] Architectural educators have offered incremental improvements to current educational models which yield minimal, if not superficial results. [v] [vi]
            The premise for the paper is quite simple. If we are to truly fight climate change, we’ll need to make fundamental and systemic changes to literally every aspect of the design studio. In other words, simply shifting to the goal high performance design without shifting the primary motivations, guiding philosophies, integrative frameworks and holistic design processes will be insufficient to acheive the kind of sea change that is so desperately needed in our society.
            In Fig. 1, a pyramid diagram illustrates the levels of depth associated with needed changes. This paper will focus on the bottom four levels using examples from student work, references to other alternatively organized design studios and through contrasting descriptions of the status quo  of mainstream architectural studios. At the base of the pyramid, A new set of motivations for design is established. Empathy across time, space and difference will ground students in their thinking about the primary goals of design from a myriad of lenses (fig. 2). A new philosophy must be adopted in the studio where sustainability becomes the “Prime Directive” and “design excellence” becomes a sub-set of the larger imperative of fighting against climate change and advocating for social equity (fig. 3). Commonly accepted design frameworks are necessary to avoid long and confusing conversations about the definition of sustainable design. Using Integral Sustainable Design[vii] (fig. 4) as a consistent framework throughout all studio activities provides a commonly accepted playing field for the professors, students and stakeholders. Finally, a new ordering of the typical studio process is mandatory to “front load” a focus on net-zero energy performance among other metrics. (fig. 5) In this process students cannot move into the formalistic design process until they have proven net-zero performance.
            The changes to the traditional studio discussed in this paper are now in their third iteration via an entry level graduate level design studio focused on sustainable design. Numerous mistakes have been made, and many challenges lie ahead, but early results indicate the possibility that radical and fundamental changes like the ones proposed in this studio, and many other alternative approaches at other schools, offer the first rungs in the ladder towards authentic 21st century design studio pedagogies.
            <p>CITATIONS / WORK CITED:
            <p>[i] https://climate.nasa.gov/effects/
            <p>[ii] US Architects Declare Climate, Justice, and Biodiversity Emergency is a great example of a recent initiative to address this crisis. https://us.architectsdeclare.com/
            <p>[iii] The AIA has recently updated and strengthened its stance on climate change. https://www.aia.org/resources/77541-where-we-stand-climate-change
            <p>[iv] https://www.dezeen.com/2019/06/11/radical-architecture-climate-change-opinion-phineas-harper/
            <p>[v] https://www.architectsjournal.co.uk/news/opinion/architecture-schools-need-to-reform-their-teaching-to-combat-climate-change
            <p>[vi] https://raf.arh.bg.ac.rs/bitstream/handle/123456789/140/138.pdf?sequence=1&isAllowed=y
            <p>[vii] Integral Sustainable Design is a framework developed for architects by Mark DeKay as an evolution on Integral Theory by Ken Wilbur`,
            session: "ENVIRONMENTAL MORPHOLOGY"
        },
        //33
        {
            title: "Solar Sculpting: Building Form & Energy",
            people: "Lawrence Blough, Pratt Institute; Simone Giostra, Politecnico di Milano",
            projectTags: "SOLAR, ZERO-ENERGY, FORM, URBANISM",
            images: [
                "https://curriculumforclimateagency.org/images/sculpt (1).jpg",
                "https://curriculumforclimateagency.org/images/sculpt (2).jpg",
                "https://curriculumforclimateagency.org/images/sculpt (3).jpg",
                "https://curriculumforclimateagency.org/images/sculpt (4).jpg",
                "https://curriculumforclimateagency.org/images/sculpt (5).jpg",
                ],
            description: `For more than ten years, New York City has promoted energy efficiency policies – including PlaNYC and the Greener, Greater Buildings Plan – that will radically reshape the education of architects toward energy performance in buildings, reduction of emissions, and the efficient use of resources. Our series of undergraduate studios investigates the relationship between the building form and energy performance, using form-finding algorithms based on solar radiation to shape mid-rise housing typologies for NYC. Currently funded by the Institute of Design and Construction Foundation, we have been exploring the important environmental design opportunities that exist within building envelopes, particularly in residential buildings that are responsible for most of the greenhouse gas emissions and power consumption.  By integrating and extending current solar technologies such as photovoltaic (PV) and solar thermal (ST) for the predominantly vertical infrastructure of the city, this research targets innovative building mass and surface strategies that are highly energy efficient, generate on-site renewable energy, and produce a new vocabulary for sustainable construction. As part of the initiative, we have also formed an international exchange program between our two institutions to share content and expertise.
            <p>
            Solar potential (or capture) as a design tool has been investigated beginning with Ralph Knowles’s “solar envelope” concept from 1974 – a 3D surface on a given site that does not cast its shadow onto adjacent sites for longer than n hours a day. The same principle was later extended to the notion of “solar collection envelope”, a 3D surface that collects a minimum of sun-hours a day. Using solar capture as parameter and with the help of rudimentary computers, Knowles was able to produce strangely beautiful building forms driven by performance.  Knowles’ solar-driven vessels were the harbingers of a new design aesthetic based on ecological inputs and necessity that is the departure point for our research.
            <p>
            The studios explore how solar design principles paired with formal models can supplant the reliance on mechanical systems and achieve comparable results in terms of energy performance and visual comfort. Students were introduced to digital energy analysis and simulation tools to test and verify empirical speculations about the relation between form and energy such as solar potential, daylighting and energy demand. Milled foam models were used to evaluate the different formal and organization species along with colored printed models mapping yearly average solar radiation on the building surfaces.
            <p>
            Three different scales were introduced to investigate the energy implications of the different formal strategies: 1) urban morphology addressed issues of zoning, overshadowing of neighbouring buildings, and the identification of individual building lots within a typical urban block; 2) building typology focused on the articulation of the building volume using setbacks, balconies, cantilevers and courtyards to maximize solar potential and regulate exchanges of daylight and heat between the building and the site; 3) building envelope targeted the manipulation of the surface geometry of the façade to optimize the integration of PV and ST collectors without negatively affecting daylighting levels in the building interiors.
            CITATIONS / WORK CITED:
            Knowles, Ralph L.  Energy and Form; an Ecological Approach to Urban Growth. Cambridge: MIT Press, 1974.`,
            session: "ENVIRONMENTAL MORPHOLOGY"
        },
        //34
        {
            title: "In Search of a Thermal Machine for Living",
            people: "Arta Yazdanseta & Emily Moss, Parsons The New School for Design",
            projectTags: "MATERIALITY, ADAPTIVE RE-USE, URBANISM",
            description: `Since the late 1960s, with various levels of rigor, the adaptation of “modern” architecture to address, absorb, or deflect environmental forces – i.e. wind, solar radiation, water, and earth – has been studied and implemented.
            With few exceptions, these methods of investigation have operated within the conventional paradigm of architectural design: building elements and composition. That is to say, building elements such as walls, ceilings, floors, and windows are designed to address external environmental forces primarily at compositional levels and within compositional paradigms rather than from phenomenological drivers. The results are predictable formal expressions. “Nothing resembles a solar house more than another solar house”. Or they are tortured applications of “performative” elements that neither fulfill nor delight.
            This fundamental pedagogical gap persists in the majority of design studio curricula. Students are asked to study historical precedents, geographic data, and local weather conditions, and to overlay their findings onto design projects, i.e. Knowledge. Yet, for a novel and emergent design approach, students must also develop a nuanced understanding of terrestrial bodies, terroir, and thermal and spectral phenomena, i.e Knowing. Without an intimate and immediate experience of the ‘facts’ of ‘essential elements’ there is only a superficial appreciation of the forces at work, and therefore a superficial formal response to these forces.
            To shift this paradigm, the current (legacy) model of an architect’s education must be re-formed to allow for a deeper level of connection between the poetics of design and the first principles of the climatology of building science, i.e. convection, conduction, diffusion, radiation, and evaporation. In shifting the focus away from a generalized understanding of environmental forces to pointed first principles of thermal and spectral phenomena, an essential new design process can emerge.
            In 2018, we revised the curriculum of the BFA-Architecture to allow students to gain a deeper understanding of “environmental design” based on climatological first principles coupled with the designer’s mandate for formal invention. We instigated re-formation at several scales: pedagogical, institutional, and curricular. The initiative has matured over the past 3 years, and continues to evolve.
            In this paper, we will share the implementations at each scale of the Studio re-formation. We will share successful and failed strategies at both pedagogical and logistical levels. Of equal importance, we will demonstrate that an impactful environmental morphology requires reshaping not only the curriculum of a Design Studio and the archetypal Environmental Technology sequence but also an institutional approach to the support and training of faculty members.
            <p>
            CITATIONS / WORK CITED:
            <p>1 Rahm, Philippe. “Meteorological encyclopedia.” PRAXIS: Journal of Writing+ Building 13 (2011): 103-111.
            <p>2 Fernández, Guillén, and Luis Fernández-Galiano. Fire and memory: On architecture and energy. Mit Press, 2000.`,
            session: "ENVIRONMENTAL MORPHOLOGY"
        },
        //35
        {
            title: "IMAG(IN)ING A FUTURE IMPERFECT: Virtual Exhibition Opening + Artist Talk",
            people: "Moderators: Luis Callejas + Jorgen Johan Tandberg",
            projectTags: "IMAGE, IMAGINATION, FUTURE", 
            description: `This session will provide the opening of the virtual exhibition of Imag(in)ing a Future Imperfect. Building upon the conference’s theme on the state of design pedagogy in the face of climate change, selected artist’s will be invited to present their image and discuss their process of image making as a form of climate agency. The work will be discussed in terms of medium, content and message. This session will also serve to announce the themes for the expanded Call for Images and physical exhibition to be held at Pratt Institute as a part of the 2022 Charter Summit.`,
            session: "SPECIAL FOCUS"
        },
        //36
        {
            title: "Transforming the Design Studio Through an Engagement With Melbourne’s Hydropshere",
            people: "Leire Asensio-Villoria & David Mah, University of Melbourne",
            projectTags: "WATER, RESILIENCE",
            description: `How does a deliberate engagement with a hydrosphere injured by climate change impact the development of new curricula for the design studio?  Given the anticipation of major destabilizations to our hydrological cycles, it is vital to question whether the conventions of design practice as well as teaching still hold water?  As the development of established disciplinary and practice standards in architecture have been informed by the presumption of a stabilized Holocene, when formulating new design courses, could the design fields acclimatize to a new set of contexts and practices?
            This paper will elaborate on this by reflecting on an ongoing series of design studios that we have initiated and directed within architecture as well as urban design programs in Melbourne, Australia that focus on cultivating design practices that respond to climate challenges associated with the hydrosphere.  These threats are defined by oscillations between two extremes; its acute overabundance and an austere scarcity.  Climate change is anticipated to bring an increased frequency and severity of flood events to the city’s neighborhoods while extended droughts will threaten the capacity for water as a resource to sustain Melbourne’s existing ecologies and projected populations.            
            The possibility of wild swings between tempestuous weather and protracted droughts challenges the idea of place.  Notions of the enduring sense of place, which has figured heavily in design education and discourse, are questionable when designers face an environment defined by dramatic instability.  In lieu of site and place, these design studios are contextualized within wider dynamic urban and ecological systems.  The studio context or site benefits from its reconceptualization as an ecosystem wrought from mutable associations of energy, population and material flows.
            Emphases placed on scale specificity is also probed in the studio, whereby an immersion within the hydrosphere obliges an engagement with multitudes of local and interregional scales, spanning between tangible locations in the city to global structures.  The Melbourne studios adopt hydrological cycles across this wide spectrum of scales and its embeddedness within food, waste and energy systems as the specific contexts of their speculative interventions.
            As the conceptualization of site shifts, the studio brief is also transformed.  Rather than standard programmatic briefs, design strategies emerge from a dedicated investigation of the context systems and metabolisms.  Consideration of how design may augment the hydrosphere precedes any concrete definition of the nature of the proposal itself.  Our studio curriculum is defined by conjectural sensibilities and lyrical dialogues with instability.  This obliges us to cast a critical eye over the traditional outcomes of the design studio and to elaborate on design proposals that also overturn disciplinary stability by bridging to other fields.  Design migrates from the exclusive material definition of proposals to the search for adaptable and mutable interventions capable of assuming multiple conditions, behaviors and associations.  This submission aims to elucidate on the transformation of the design studio curriculum through these Melbourne-based studios provoked by the urgency for design action within the hydrosphere.`,
            session: "INHABITING THE HYDROSPHERE"
        },
        //37
        {
            title: "The Transition Between Rural and Urban in the Peri-Urban Fringes: Water as a Primary Design Tool",
            people: "Lavinia Dondi, Politecnic of Milan",
            projectTags: "RURAL, PERI-URBAN, WATER",
            description: `The focus is on the peri-urban landscape, placed between suburban settlements and the surrounding countryside. It is configured as an “uncertain” area, unable to have crucial urban relations and convincing rural and agricultural fabric. Different expressions of fragility, both physical and social, coagulate in these places: the reason why they represented a significant object of study for several decades, becoming symbols of problematic urban models. Unbalanced use of the soil leads the countryside to be residual and the settlements to be invasive, fueling a general fragmentation of the connections. The design of open spaces visualizes the layout’s inadequacy the most, showing an inability to mend suburban places and be transitional to the surrounding countryside. Buildings were the real focus of the peri-urban plans, even if in-between open spaces are more expansive than within the city, and therefore more strategic.
            <P>            Among the possible regeneration processes, the one that starts from a rural, rather than urban, perspective seems to be the most interesting. Today, what appears essential is considering the peri-urban countryside areas, not as a possibility for the urban fabric to expand, but as the necessary open spaces that complete the suburban fringes’ layout. Actively involving rural areas contributes to a more effective transition between countryside and urban elements and improves a general reinforcement of the open spaces system, thus conceiving as the settlement’s backbone. The importance of inhabiting countryside as loisir spaces for the citizens, beyond agricultural production settings, became more urgent during pandemic times, in which wide open spaces became the safest areas.
            <P>            Therefore, to imagine a multifunctional countryside to inhabit, one of the crucial design tools to work with is the water. Streams innervating the countryside can represent pivotal devices to rethink transitional open spaces in layout and uses between rural and urban practices. Simultaneously, working with streams allows counteracting or preventing possible water imbalances investing and damaging urban areas due to climate change effects and inadequate ways to anthropize the territories. The more dilatated fabric of the peri-urban landscape allows considering water and its ecological connections as a primary design tool.
            <P>            By investigating the more significant design actions connected to these topics, two case studies in Europe seem to be pivotal: the Ecological Park of Saint-Jacques located near Rennes by Atelier de Paysage Bruel Delmar (2008-15) and the Landscape Park Pauwels in Tilburg designed by Strootman Landschapsarchitecten (2018). They prove how effectively providing basins, enlargements, or creeks to contain or filter water or manage runoff can go hand in hand with design goals: improving the relationship between people and water, mending walking or cycling routes, and planning a network of places to rest.
            <P>            Peri-urban areas need spatial devices to relate rural and urban elements, connect ecological issues, infrastructures to prevent water instability, and a general perception of open spaces’ habitability, whose critical condition became more impelling. The architect’s vision, a cross-scalar and multidisciplinary one, works as a mediation between natural, built elements and people gestures, assuring “anti-fragile” and adaptive processes to be efficient in constructing landscape.
            <P>            CITATIONS / WORK CITED:
            <P>Barron P., Mariani M. (eds.) (2014), Terrain Vague: Interstices at the Edge of the Pale (London: Routledge).
            <P>            Bruzzese A., Lapenna A. (eds.) (2017), Linking Territories. Rurality, Landscape and Urban Borders. (Roma-Milano: Planum Publisher).
            <P>            Del Fabbro M., De Togni N., Dezio C., Dondi L., D’Uva D., Fontanella E., Kercuku A., Lepratto F., Mattioli C., Morganti M., Pessina G., Setti G., Tognon A., Vendemmia, B. (eds) (2019), “Territorial fragilities in Italy. Defining a Common Lexicon”, Territorio 91: 22-54.
            <P>            Donadieu P. (2013), Campagne urbane. Una nuova proposta di paesaggio della città (Roma: Donzelli).
            <P>            Prominski M., Stokman A., Zeller S., Stimberg D., Voermanek H., Bajc K. (2017), River.Space.Design. Planning Strategies, Methods and Projects for Urban Streams (Basel: Birkhäuser).
            <P>           Waldheim C. (2016), Landscape as Urbanism. A General Theory (Princeton: Princeton University Press).
            <P>            Zeunert J. (2017), Landscape Architecture and Environmental Sustainability. Creating Positive Change Through Design (New York: Bloomsbury).`,
            session: "INHABITING THE HYDROSPHEREIES"
        },
        //38
        {
            title: "Teaching Delta Urbanism in the Anthropocene: Educating to reduce risk and enhance wellbeing across Louisiana’s dynamic coastal-inland continuum",
            people: "Traci Birch, Louisiana State University",
            projectTags: "WATER, RESILIENCE, WATER",
            images: [
                "https://curriculumforclimateagency.org/images/Delta (1).jpg",
                "https://curriculumforclimateagency.org/images/Delta (2).jpg",
                ],
            description: `In August 2016, a low-pressure system dropped 22-31” of rain in three days across Louisiana’s capital region (see Figure 1).  Resultant flooding took 13 lives, damaged roughly 145,000 structures, and brought the Gulf Coast region to a standstill with multi-day closures of interstate highways. Touted as a “one-in-1,000-year flood” this was the third such event in 2016 in the southeastern US, and one of ten since 2010. Climate predictions indicate severe precipitation events are likely to increase in frequency and intensity (Prein et al., 2016). While Louisiana has demonstrated large-scale risk reduction is possible through coastal protection and restoration, significant inland flooding indicates coastal management alone is not sufficient (Birch & Carney, 2019). There remains a gulf between demonstrated vulnerabilities and systematic deployment of new design practices at sufficient scale to reduce regional flooding.
            To bridge this gap, the Louisiana State University’s Coastal Sustainability Studio (CSS) launched a multi-disciplinary effort known as Inland from the Coast (IFC). Founded in 2009, CSS is a trans-disciplinary institute engaging architects, landscape architects, planners, coastal scientists, and civil engineers to research and respond to issues of resettlement, restoration, and socioeconomic sustainability. In 2017, the Gulf Research Program of the National Academies of Science and the Robert Wood Johnson Foundation funded IFC as part of the Thriving Communities program.  The three-year grant expanded the CSS model to include faculty and students from across the university – including disciplines such as geography, psychology, and law; as well as the Universities of New Orleans and Florida. Funding required innovative applied research approaches. To achieve this, the team also included members from local chapters of American Institute of Architects, American Planning Association, and American Society of Landscape Architects.
            In August 2016, a low-pressure system dropped 22-31” of rain in three days across Louisiana’s capital region (see Figure 1).  Resultant flooding took 13 lives, damaged roughly 145,000 structures, and brought the Gulf Coast region to a standstill with multi-day closures of interstate highways. Touted as a “one-in-1,000-year flood” this was the third such event in 2016 in the southeastern US, and one of ten since 2010. Climate predictions indicate severe precipitation events are likely to increase in frequency and intensity (Prein et al., 2016). While Louisiana has demonstrated large-scale risk reduction is possible through coastal protection and restoration, significant inland flooding indicates coastal management alone is not sufficient (Birch & Carney, 2019). There remains a gulf between demonstrated vulnerabilities and systematic deployment of new design practices at sufficient scale to reduce regional flooding.
            <p>To bridge this gap, the Louisiana State University’s Coastal Sustainability Studio (CSS) launched a multi-disciplinary effort known as Inland from the Coast (IFC). Founded in 2009, CSS is a trans-disciplinary institute engaging architects, landscape architects, planners, coastal scientists, and civil engineers to research and respond to issues of resettlement, restoration, and socioeconomic sustainability. In 2017, the Gulf Research Program of the National Academies of Science and the Robert Wood Johnson Foundation funded IFC as part of the Thriving Communities program.  The three-year grant expanded the CSS model to include faculty and students from across the university – including disciplines such as geography, psychology, and law; as well as the Universities of New Orleans and Florida. Funding required innovative applied research approaches. To achieve this, the team also included members from local chapters of American Institute of Architects, American Planning Association, and American Society of Landscape Architects.
            In August 2016, a low-pressure system dropped 22-31” of rain in three days across Louisiana’s capital region (see Figure 1).  Resultant flooding took 13 lives, damaged roughly 145,000 structures, and brought the Gulf Coast region to a standstill with multi-day closures of interstate highways. Touted as a “one-in-1,000-year flood” this was the third such event in 2016 in the southeastern US, and one of ten since 2010. Climate predictions indicate severe precipitation events are likely to increase in frequency and intensity (Prein et al., 2016). While Louisiana has demonstrated large-scale risk reduction is possible through coastal protection and restoration, significant inland flooding indicates coastal management alone is not sufficient (Birch & Carney, 2019). There remains a gulf between demonstrated vulnerabilities and systematic deployment of new design practices at sufficient scale to reduce regional flooding.
            <p>To bridge this gap, the Louisiana State University’s Coastal Sustainability Studio (CSS) launched a multi-disciplinary effort known as Inland from the Coast (IFC). Founded in 2009, CSS is a trans-disciplinary institute engaging architects, landscape architects, planners, coastal scientists, and civil engineers to research and respond to issues of resettlement, restoration, and socioeconomic sustainability. In 2017, the Gulf Research Program of the National Academies of Science and the Robert Wood Johnson Foundation funded IFC as part of the Thriving Communities program.  The three-year grant expanded the CSS model to include faculty and students from across the university – including disciplines such as geography, psychology, and law; as well as the Universities of New Orleans and Florida. Funding required innovative applied research approaches. To achieve this, the team also included members from local chapters of American Institute of Architects, American Planning Association, and American Society of Landscape Architects.
            <p>IFC posed three questions: How is climate change impacting communities across a coupled coastal-inland system? How can greater understanding of environmental risk and community well-being increase adaptive capacity? How can well-being and adaptation scholarship be incorporated into community-based design? The project took a multi-scalar approach, addressing issues of ecological, social and infrastructural systems across the Amite River watershed (see Figure 2), which includes coastal, transitional, and inland communities (Bilskie & Hagen, 2018). To address environmental and social uncertainty, researchers and students developed coastal-inland hydrodynamics models of the watershed, and a Community Well-being Index, to provide quantifiable measures of pre- and post-disaster recovery capacity. These tools directly informed participatory design processes in flood-damaged communities at the building, neighborhood, and community scales. Design work also scaled up to address regional risk reduction and well-being co-benefits. Participatory processes provided unique opportunities for students and researchers to collect local environmental knowledge for application to design processes.  Over three years, the project supported 32 multi-disciplinary graduate students, who actively engaged the public and worked closely to address complex questions of risk reduction. Further, IFC supported 18 integrated design, engineering, and planning courses engaging students across the university and across institutions to enhance community designs.  This presentation and paper will highlight the successes, challenges, and provide a framework for others to follow for climate education and action.
            <p>
            CITATIONS / WORK CITED:
            <p>Prein, A. F., Rasmussen, R. M., Ikeda, K., Liu, C., Clark, M. P., & Holland, G. J. (2016). The future intensification of hourly precipitation extremes. Nature Climate Change, 7(48)
            <p>
            Birch, T., & Carney, J. (2019). Delta Urbanism: Aligning Adaptation with the Protection and Restoration Paradigm in Coastal Louisiana. Technology|Architecture + Design, 3(1)
            <p>
            Bilskie, M. V., & Hagen, S. C. (2018). Defining Flood Zone Transitions in Low-Gradient Coastal Regions. Geophysical Research Letters, 45(6)
            IFC posed three questions: How is climate change impacting communities across a coupled coastal-inland system? How can greater understanding of environmental risk and community well-being increase adaptive capacity? How can well-being and adaptation scholarship be incorporated into community-based design? The project took a multi-scalar approach, addressing issues of ecological, social and infrastructural systems across the Amite River watershed (see Figure 2), which includes coastal, transitional, and inland communities (Bilskie & Hagen, 2018). To address environmental and social uncertainty, researchers and students developed coastal-inland hydrodynamics models of the watershed, and a Community Well-being Index, to provide quantifiable measures of pre- and post-disaster recovery capacity. These tools directly informed participatory design processes in flood-damaged communities at the building, neighborhood, and community scales. Design work also scaled up to address regional risk reduction and well-being co-benefits. Participatory processes provided unique opportunities for students and researchers to collect local environmental knowledge for application to design processes.  Over three years, the project supported 32 multi-disciplinary graduate students, who actively engaged the public and worked closely to address complex questions of risk reduction. Further, IFC supported 18 integrated design, engineering, and planning courses engaging students across the university and across institutions to enhance community designs.  This presentation and paper will highlight the successes, challenges, and provide a framework for others to follow for climate education and action.
            <p>CITATIONS / WORK CITED:
            Prein, A. F., Rasmussen, R. M., Ikeda, K., Liu, C., Clark, M. P., & Holland, G. J. (2016). The future intensification of hourly precipitation extremes. Nature Climate Change, 7(48)
            Birch, T., & Carney, J. (2019). Delta Urbanism: Aligning Adaptation with the Protection and Restoration Paradigm in Coastal Louisiana. Technology|Architecture + Design, 3(1)
            Bilskie, M. V., & Hagen, S. C. (2018). Defining Flood Zone Transitions in Low-Gradient Coastal Regions. Geophysical Research Letters, 45(6)
            IFC posed three questions: How is climate change impacting communities across a coupled coastal-inland system? How can greater understanding of environmental risk and community well-being increase adaptive capacity? How can well-being and adaptation scholarship be incorporated into community-based design? The project took a multi-scalar approach, addressing issues of ecological, social and infrastructural systems across the Amite River watershed (see Figure 2), which includes coastal, transitional, and inland communities (Bilskie & Hagen, 2018). To address environmental and social uncertainty, researchers and students developed coastal-inland hydrodynamics models of the watershed, and a Community Well-being Index, to provide quantifiable measures of pre- and post-disaster recovery capacity. These tools directly informed participatory design processes in flood-damaged communities at the building, neighborhood, and community scales. Design work also scaled up to address regional risk reduction and well-being co-benefits. Participatory processes provided unique opportunities for students and researchers to collect local environmental knowledge for application to design processes.  Over three years, the project supported 32 multi-disciplinary graduate students, who actively engaged the public and worked closely to address complex questions of risk reduction. Further, IFC supported 18 integrated design, engineering, and planning courses engaging students across the university and across institutions to enhance community designs.  This presentation and paper will highlight the successes, challenges, and provide a framework for others to follow for climate education and action.
            <p>
            CITATIONS / WORK CITED:
            <p>Prein, A. F., Rasmussen, R. M., Ikeda, K., Liu, C., Clark, M. P., & Holland, G. J. (2016). The future intensification of hourly precipitation extremes. Nature Climate Change, 7(48)
            <p>
            Birch, T., & Carney, J. (2019). Delta Urbanism: Aligning Adaptation with the Protection and Restoration Paradigm in Coastal Louisiana. Technology|Architecture + Design, 3(1)
            <p>
            Bilskie, M. V., & Hagen, S. C. (2018). Defining Flood Zone Transitions in Low-Gradient Coastal Regions. Geophysical Research Letters, 45(6)`,
            session: "INHABITING THE HYDROSPHERE"
        },
        //39
        {
            title: "Climate Health/Care: A Low Carbon-Points Pedagogy",
            people: "Luis Hernan, University of Sheffield; Carolina Ramirez-Figueroa, Royal College of Art; Emma Cheatle, University of Sheffield",
            projectTags: "HEALTH, CARBON, DIVERSITY, FRONTLINE-COMMUNITIES",
            description: `In his series of Podcasts on the end of the world, Timothy Morton explains one of the main challenges in theorising the anthropocene: the video game logic. There is a certain mentality, often white, often middle class, often male, which rolls up its sleeves, sits down and goes — right, let’s bloody solve the climate emergency (did you see how many carbon points it scored in just that one move?).
            Whilst recognising the gravity of our situation, we write from a site of resistance to all-encompassing, utilitarian, efficient, and heroic pedagogies. We believe in the transformative potential of pedagogies, but oppose the handing down of methodologies that simply decarbonise buildings or make our products “greener”. Like Donna Haraway, we are convinced of the need to ‘stay with the trouble’ and accept that the so-called climate emergency cannot be solved and is not new — it is entangled with colonial, exploitative practices that extract value from world resources and peoples.
            In this ethos for a slower reflection on the long tentacles of climate change, we argue for an understanding of the way that our designed world has (ill) effects on the health and wellbeing of humans and non-humans. Climate health/care does not score many points but instead aims to address the way that climate change affects populations unequally, especially those that lack agency: people of colour, migrants and refugees, the homeless and certain species of animals bear the brunt of the emergency, whilst the elite are protected by wealth and the guise of a high carbon point score. Whilst certain natural environments are disappearing, our constructed environments – homes and healthcare settings – are often poorly conceived, positioned and constructed and do little to protect those most at risk of flooding, weather disasters, damp, mental distress and poor health. Further, our hierarchical attitudes to the planet, and its climate, which suppose that humans are superior – also seen in the high carbon point ‘solutions’ to climate emergency discussed above – and hence prioritise humans over non-humans, dangerously undermines the nuanced ecologies we inhabit. We eradicate other life forms at our peril.
            Here we discuss climate health/care pedagogies, rooted in our background as creative and humanities practitioners/theorists, to engage with the intersections of design and health. Following the ‘arts of living on a damaged planet’, our approaches include creative-biological methods to understand the bio-social, to narrative writing that makes close readings or micro-histories that speculate on the personal existences of different people, animals and places of health, to instruments constructed and constantly reconfigured to understand health anxieties. We use these tools to reflect on the state of the thesis curriculum at the two institutions where we collectively teach, The Bartlett and Sheffield School of Architecture. We discuss the shortcomings and opportunities to open up the definition of climate care to include health interactions between humans and non-humans and  reflect as much as we speculate on the ways we can raise awareness and invite conversation and kinship.
            <p>CITATIONS / WORK CITED:
            <p>Donna Haraway, Staying with the Trouble: Making Kin in the Chthulucene (2016)
            Maria Puig de Bellacasa, Matters of Care: Speculative Ethics in More Than Human Worlds (2017)
            Anna Lowenhaupt Tsing, The Mushroom at the End of the World (2015)
            <p>            Timothy Morton, We’re Doomed! in The End of the World has Already Happened, BBC Radio 4 (2020)
            Anna Tsing, Heather Swanson, Elaine Gan, Nils Bubandt (eds), Arts of Living on a Damaged Planet (2017)`,
            session: "DESIGN AGENCY"
        },
        //40
        {
            title: "Deep Time Architecture",
            people: "Cristina Parreño, Massachusetts Institute of Technology",
            projectTags: "INDIGENOUSCULTURES, CROSS-DISCIPLINARY, TEMPORAL",
            images:[
                "https://curriculumforclimateagency.org/images/DeepTimeArchitecture (1).jpg",
                "https://curriculumforclimateagency.org/images/DeepTimeArchitecture (2).jpg",
                "https://curriculumforclimateagency.org/images/DeepTimeArchitecture (3).jpg",
                "https://curriculumforclimateagency.org/images/DeepTimeArchitecture (4).jpg",
                "https://curriculumforclimateagency.org/images/DeepTimeArchitecture (5).jpg",
                ],
            description: `Effectively acting upon our most urgent crises requires a profound understanding of how to mentally inhabit the timescales at which they operate. This paper will discuss Deep Time Architecture, a new pedagogical experiment that aims to radically expand architecture’ time sensibilities; to create a space where architecture, design, art and culture become critical tools to cultivate the long-term attitudes and behaviors that are so essential to face the deep timescales of our most urgent crises like climate change. Nobel Laureate Paul Crutzen has proposed that humans have become a geological force, now influencing the Earth’s systems more than all non-human processes combined. The Deep Time Architecture course is set under the premise that as the geological actors that we have become, we must develop the deep time literacy demanded by the great challenge of becoming true planetary stewards.  The course will specifically draw from the knowledge of indigenous cultures and their intrinsic perspectives in their relation with time, life, death and the Earth cycles, looking for instance at the “seven generation principle”. At the core of Deep Time Architecture is the understanding that developing longer perspectives will change the way we behave in the short term and that architecture, design, art and culture are foundational in transforming the way we think about our collective role in shaping the future, from the technologies we develop to the kinds of laws we make.
            <p>
            The Deep Time Architecture course is designed as a platform that enables multiple disciplines to come together with a common goal: to find new ways to articulate the problems of climate change through design from long-term perspectives and to explore how long-term thinking can radically transform individual and collective social behavior on climate change. Starting from Architecture for its passion to imagine futures, the course will engage with a range of disciplines: Philosophy, for its determination to always frame the problem properly; Science, for its tenacity to solve; History, for its capacity to account for time; Art, for understanding at an emotional level; Cinematography, for its expertise in representing time; Anthropology, for its ambition to understand the human place in the cosmos and Geology, for its unquestionable deep time literacy.
            <p>
            Deep Time Architecture will be a platform for *deep time literacy developed in three parts:
            <p>
            1) Observation&Reflection: Curated lecture and film series plus research on deep-time project precedents.
            <p>
            2) Reflection&Mobilization: Collective work to build a collective repository of deep time terms, concepts, ideas and strategies to address long term aspects of climate change.
            <p>
            3) Mobilization&Action: Collaborative art and architecture projects that will take the form of videos and (after COVID19) art installations within a local environment addressing issues of climate change from long-term perspectives.
            <p>
            Deep Time Architecture implies a paradigmatic shift in time-perception, one that radically expands architecture’s perceptual time frames to encompass the geological resources it draws from; one by which architecture takes responsibility for its profound involvement into the deep past, present and future of the Earth.
            <p>
            CITATIONS / WORK CITED:
            <p>Crutzen, P. Geology of Mankind. Nature (2002) 415,23`,
            session: "DESIGN AGENCY"
        },
        //41
        {
            title: "ReFuturing Studio: Designing long term sustainability for the Biosphere",
            people: "Jomy Joseph, Oslo School of Architecture and Design; Maggie Hansen, Tulane University",
            projectTags: "WICKED-PROBLEMS, FUTURE, DECOLONIZING",
            images:[
                "https://curriculumforclimateagency.org/images/DeepTimeArchitecture (1).jpg",
                "https://curriculumforclimateagency.org/images/DeepTimeArchitecture (2).jpg",
                "https://curriculumforclimateagency.org/images/DeepTimeArchitecture (3).jpg",
                "https://curriculumforclimateagency.org/images/DeepTimeArchitecture (4).jpg",
                "https://curriculumforclimateagency.org/images/DeepTimeArchitecture (5).jpg",
                ],
            description: `The trajectories of the Earth’s climate and ecosystem services are unraveling (Steffen et al., 2018). As the worst climate predictions come to pass, it is important to introspect on the predictable consequences of our global economic system designed for extractivism. A system that has favored a handful of people (Chancel & Piketty, 2015) at the cost of human and ecological well-being, putting the life sustaining biosphere on the path to “biological annihilation” (Ceballos et al., 2017). Today, this negation and erasure of our collective possibilities and futures constitute a “defuturing” (Fry, 1999). This paper will discuss these perspectives from observations and discussions with students in a workshop called “ReFuturing Studio”. The workshop, held across three countries, from both the Global South and the Global North, has attempted to engage with young designers on the urgency of climate breakdown and sustainable futures beyond “business as usual” (BAU). Curiously, we find that many of the students envision futures where problems of overpopulation, resource wars, scarcity, rogue artificial intelligence, climate refugees, mass extinction are to be ‘solved’ through totalitarianism, militarism, techno-optimism with digital and biotech domination, and global surveillance as necessary interventions to preserve future progress and development and avoid climate disaster. Confronted with the profoundly wicked problems of climate breakdown, far too often they inadvertently reinforced colonial, patriarchal and ecologically destructive assumptions of today into the future. Thus, their attempts at imagining alternative futures results in a future ‘world’ being destroyed, arguably further entrenching their climate despair for lack of action.

            Therefore, this paper argues for a “refuturing”—a re-imagining, rethinking and ‘re-humanizing’ beyond the homogenizing and hegemonic futurism of BAU, where designers and design educators can begin to nurture profoundly divergent ‘pluriversal’ worlds (Escobar, 2018). Arguably then, the task of “refuturing” must be to reclaim that which is defutured and dehumanized, as a counter hegemonic practise of ‘designerly knowing’ these yet unknown futures. Refuturing requires a new imagination in designing for climate justice, central to which is the integration of decolonizing perspectives within the intellectual and material practice of design education, more specifically towards long term sustainability given the urgency of climate breakdown. Refuturing thus critically looks at the larger systemic assumptions that plague the defutured and dehumanized future visions and instead proposes alternative perspectives and solution spaces for speculating other, pluriversal future worlds. Lastly, this paper will propose how refuturing could reconcile design practice with climate action by “designing for the biosphere” that which looks to regenerate ecosystems as a means for social and ecological flourishing.
            <P>CITATIONS / WORK CITED:
            <P>Ceballos, G., Ehrlich, P. R., & Dirzo, R. (2017). Biological annihilation via the ongoing sixth mass extinction signaled by vertebrate population losses and declines. Proceedings of the National Academy of Sciences, 114(30), E6089–E6096. https://doi.org/10.1073/pnas.170494911
            <P>Chancel, L., & Piketty, T. (2015). Carbon and inequality: From Kyoto to Paris. 50.
            <P>Escobar, A. (2018). Designs for the Pluriverse: Radical Interdependence, Autonomy, and the Making of Worlds. Duke University Press. http://ebookcentral.proquest.com/lib/ahono/detail.action?docID=5322528
            <P> Fry, T. (1999). A new design philosophy: An introduction to defuturing. UNSW Press.
            <P>Steffen, W., Rockström, J., Richardson, K., Lenton, T. M., Folke, C., Liverman, D., Summerhayes, C. P., Barnosky, A. D., Cornell, S. E., Crucifix, M., Donges, J. F., Fetzer, I., Lade, S. J., Scheffer, M., Winkelmann, R., & Schellnhuber, H. J. (2018). Trajectories of the Earth System in the Anthropocene. Proceedings of the National Academy of Sciences, 115(33), 8252–8259. https://doi.org/10.1073/pnas.1810141115`,
            session: "DESIGN AGENCY"
        },
        //42
        {
            title: "Micro infrastructures and Geopolitics: Agile Water Alternatives for the Lebanese Terrain",
            people: "Carla Aramouny, American University of Beirut",
            projectTags: "WASTE-STREAMS, WATER",
            images:[
                "https://curriculumforclimateagency.org/images/Micro (1).jpg",
                "https://curriculumforclimateagency.org/images/Micro (2).jpg",
                "https://curriculumforclimateagency.org/images/Micro (3).jpg",
                "https://curriculumforclimateagency.org/images/Micro (4).jpg",
                ],
            description: `In Lebanon, inefficiencies of infrastructures and the deterioration of the natural environment, from negligence and lack of sustainable governmental strategies, are rapidly spiraling out of control leading to severe impacts on the local community. This is particularly evident in water environments, fresh water supply, and infrastructure, where the situation has led to polluted waterways and increased shortage in supply despite high rainfall and snow levels. Though geographically rich with high mountains, rivers, and springs, Lebanon in 2019 was listed by the World Resource Institute1 (WRI) as one of the countries with the most severe water stress levels. The relatively small country is further delineated by powerful  neighbors, where the interconnection of waterways and fluid networks results in further restrictions and constraints on this natural resource. Fears of political corruption and inflated costs for projected mega infrastructures by the government have as a result mobilized the local civil society into action.
            Within such framework, I teach an advanced elective for undergraduate architecture students, that pushes them to use design and visualization as advocacy tools to affect change on infrastructural systems in Lebanon. In the past session of the course, we focused on water as an urgent concern, and expanded the research and proposals to problematics affecting the geopolitics of water: from territorial scales of conflict and negligence, to local infrastructural deterioration, and the urgency for action and design engagement.
            <p>
            The proposals developed by the students focused on approaches of agility and alternate scales for new water systems, moving beyond mega-scale infrastructures to more resilient alternatives. They tackled and dissected local areas of dispute and potential, both for water and collective opportune. Through research and visualization developed into a design pamphlet, the student proposals attempted to situate and respond to local freshwater needs through a distributed network of small hybrid interventions that additionally activate a spatial social or cultural function. Each project focused on a particular lens of investigation, from polluted sources, lack of rainwater collection or water treatment systems, to cross-border conflict and water regulations. The proposals further tackled specific keys sites: from the Litani river’s toxic basin, Beirut’s roofs as water collection reservoirs, the Assi river’s geopolitical constraints, the Hasbani river’s water conflict, to the problematic Bisri Dam project and its necessary demise. Integrating advocacy with visual research, each of the students’ visions set forth an operative trajectory for water and spatial hybrids, incorporating performances such as rainwater collection systems, adaptable irrigation, toxicity indicators, ground water recharge and others.
            <p>
            This paper thus reflects on the developed work and the necessity to employ design agency towards environmentally aware and responsive projects that cross spatial and social needs with infrastructure. It presents the case of Lebanon and the envisioned main tactics for water potentials through the course’s approach and student results. It further positions a responsibility on the architecture field to expand beyond the immediate bounds of the discipline to address essential environmental and infrastructural needs through applied design research.
            <p>
            CITATIONS / WORK CITED:
            <p>1 – Rutger Hofste, Paul Reig and Leah Schleifer, “17 Countries, Home to One-Quarter of the World’s Population, Face Extremely High Water Stress”, World Resource institute (WRI), August 2019, viewed at`,
            session: "MONSTROUS INFRASTRUCTURE"
        },
        //43
        {
            title: "Palm-House",
            people: "Brittany Utting, Rice University; Daniel Jacobs, University of Houston",
            projectTags: "SOLAR, GREEN-HOUSE, HISTORY, CLASSROOM, TYPOLOGY",
            images:[
                "https://curriculumforclimateagency.org/images/PALM-HOUSE-01.jpg",
                "https://curriculumforclimateagency.org/images/PALM-HOUSE-02.jpg",
                "https://curriculumforclimateagency.org/images/PALM-HOUSE-03.jpg",
                "https://curriculumforclimateagency.org/images/PALM-HOUSE-04.jpg",
                "https://curriculumforclimateagency.org/images/PALM-HOUSE-05.jpg",
                ],
            description: `PALM-HOUSE is an ongoing research and design project investigating the relationships between natural ecosystems, material commodities, and ecological care. The project takes the form of a speculative design for the Orto Botanico in Padua, Italy, a Medieval garden founded in 1545. Within this walled garden is a palm house protecting Goethe’s Palm, a Mediterranean Palm planted in 1585 that served as the inspiration for Goethe’s The Metamorphosis of Plants. The architecture of this palm house, performing as a protective shelter for a single specimen, can be critically examined as an index of the changing relationship between a living ecosystem and the technical, environmental, and material systems required for its care.
            The development of greenhouse technologies reveals a constant tension between architectures of care and systems of extraction. Early greenhouses were often temporary structures built to protect non-native species vulnerable to extremes in temperature and weather. Industrial forms of horticultural production, however, transformed these seasonal shelters into large-scale infrastructures, emerging from the reciprocal development of iron, glass, and colonial capitalism (as embodied in the Kew Gardens palm house from 1844). Today, new generations of greenhouse landscapes take the form of immense distribution centers for living material, supporting a global network of living specimen commodities and horticultural products. The scale of these ecological infrastructures, incorporating big data with surveillance technologies, provide these logistical enclaves with full biological, climatic, and digital control.
            PALM-HOUSE proposes three new prototypes for an updated enclosure for Goethe’s Palm, constituting an alternative ethos for horticultural technology. Making visible the conditions of care work and ecological maintenance, the project proposes a more intimate trans-species alliance within greenhouse architecture. PALM-HOUSE 01 produces new atmospheric compositions, expelling clouds of gases and vapor to envelope the palm when external weather conditions are not ideal. Care workers adjust an air schedule to curate atmospheres composed of particulate clouds, molecular swarms, and synthetic ozones, producing an oxygen-rich environment for the plant to thrive. PALM-HOUSE 02 imagines a near future in which the concentration of environmental pollutants in the air have overcome the palm’s osmotic defense systems. Composed of a wall system of filters that can be adjusted in response to the current atmospheric conditions, the infrastructure is maintained by workers who continuously replace spent units in the envelope. PALM-HOUSE 03 calibrates the palm’s balance of heat and light, protecting it from extreme temperature and lighting conditions as the climate radically shifts. Utilizing moveable wall modules installed with panels of grow lights, heat lamps, and thermal greenhouse curtains, the palm house can protect the plant from extreme temperature fluctuations and prevent the harmful absorption of excess solar radiation.
            Performing as what Damian White describes as “socionatural objects,” the three palm houses seek to reinscribe conditions of labor and ecological stewardship onto the environment [1]. Détourning extractive infrastructures of horticultural production—from the Renaissance botanical garden to the colonial vitrines of Kew Gardens—these prototypes trouble anthropocentric definitions of nature, weirding [2] the technologies of biological and climatic control to produce new alliances of care and ecological maintenance.
            <p>
            CITATIONS / WORK CITED:
            <p>[1] Damian White, Environments, Natures and Social Theory: Towards a Critical Hybridity (London: Palgrave, 2017).
            <p>
            [2] Timothy Morton, Dark Ecology: For a Logic of Future Coexistence (New York: Columbia University Press, 2016.`,
            session: "MONSTROUS INFRASTRUCTURE"
        },
        //44
        {
            title: "Crisiscity: Urban Mixed-Use Infrastructure in the Anthropocene",
            people: "Alexandra Barker, Pratt Institute",
            projectTags: "INFRASTRUCTURE, FOOD, ENERGY",
            images:[
                "https://curriculumforclimateagency.org/images/Crisicity 1.jpg",
                "https://curriculumforclimateagency.org/images/Crisicity 2.jpg",
                "https://curriculumforclimateagency.org/images/Crisicity 3.jpg",
                "https://curriculumforclimateagency.org/images/Crisicity 4.jpg",
                "https://curriculumforclimateagency.org/images/Crisicity 5.jpg",
                ],
            description: `In the Anthropocene thesis, human activity has affected all ecologic, geologic and biological systems and has eroded the boundary between human and non-human life and between nature and culture, with catastrophic impacts on the Earth that have brought us to a point of climate crisis.  Nature is partly a human creation.   As recent texts have argued, the current social and health crises are direct resultants of human actions dating back to the time of Western colonization.
            <p>
            Human pollution of world’s ecosystem is responsible for global warming and the threat of rising waters as well as damage to the earth’s atmosphere. This crisis has also exposed the wastefulness of the building industry, where structures fall into disuse and are demolished and dumped into landfills at astonishing rates. As the pandemic of COVID-19 continues to show, the health of people, animals, ecosystems and the environment are intimately linked. This crisis has also exposed weaknesses in our global supply chain network for consumer goods. Localizing food production and storage for easy distribution is a key strategy of urban resilience in times of crisis.
            <p>
            This graduate architecture studio project proposes additions to and reuse of existing urban infrastructure to locally situate small-scale food production and storage facilities squarely within the dense urban fabric of major metropolitan areas as a retrofit embedded inside existing building fabric within the public realm.  Seafood aquaculture, aquaponics, hydroponics, and algae farming processes produce high yields in relatively compact environments without the necessary access to light and space that typical crops require. Hard grains and legumes can be stored for use as emergency food supply.  Seeds are stored to preserve species against depletion or destruction from natural disasters and as libraries of genetic resources.  Oyster aquaculture can produce food as well as seed for filtering oyster beds that are critical for the cleansing of polluted waterways.
            <p>
            Our test site for this project is Brooklyn’s industrial waterfronts of Red Hook and Sunset Park.  Student projects explore the linkages across ecosystems, people, and animals through the lens of an architectural construct—a speculative addition and alteration to abandoned industrial buildings in these neighborhoods.  Over the course of the first half of the 20th century, these neighborhoods shifted from being the busiest freight ports in the world to being abandoned once containerization changed the processes, storage, and distribution networks for shipping goods.  Retail-focused adaptive reuse has saved some buildings in the neighborhood but at a cost of higher real estate prices that threaten to drive out local residents.  Community groups including Uprose have successfully argued in favor of green energy and food production in industrial zones to create jobs and keep real estate in check.  This approach to develop industrial mixed use buildings has the potential to keep food and supplies locally available for citizens in disaster scenarios like covid-19.   Adapting these buildings to new uses that combine storage, production and public community space is the focus of these investigations.  Anamorphic projection techniques produce interventions with specific orientations toward both human and non-human occupants.
            <p>
            CITATIONS / WORK CITED:
            <p>Lewis, Simon, Maslin, Mark.  The Human Planet:  How We Created the Anthropocene. London:  Penguin Books Ltd, 2018.
            <p>
            Lightfoot, Kent G., Panich, Lee M. Schneider, Tsim D., Gonzalez, Sara L.. “European colonialism and the Anthropocene:  A view from the Pacific Coast of North America, Anthropocene.  vol. 4, December 2013.
            <p>
            Morse, S.S., Mazek, J.A.K., Woolhouse, M., Parrish, C.R., Carroll, D., Karesh, W.B., Zambrana-Torrelio, C., Lipkin, W., Daszak, P. “Prediction and Prevention of the Next Pandemic Zoonosis. “ The Lancet  Vol. 380, Issue 9857, December 2012.
            <p>
            Schlicting, Kara Murphy.  New York Recentered:  Building the Metropolis from the Shore.  Chicago:  University of Chicago Press, 2019.
            <p>
            Purdy, Jedidiah.  After Nature:  A Politics for the Anthropocene.  Cambridge:  Harvard University Press, 2015.
            <p>
            Yusoff, Kathryn.  A Billion Black Anthropocenes or None.  Minneapolis:  University of Minnesota Press, 2018.
            <p>https://criticalposthumanism.net/anthropocene/
            <p>https://www.anthropocenemagazine.org/2020/08/a-memo-from-the-year-2050/
            <p>https://billionoysterproject.org/reefs/
            DiPaola, Francesco, Inzerillo, Laura, Pedone, Pedro, Santagati, Cettina.  “Anamorphic Projection:  Analogical/Digital Algorithms.” Nexus Network Journal, November 2014.`,
            session: "MONSTROUS INFRASTRUCTURE"
        },
        //45
        {
            title: "Beyond Industry: A Systems-Based Approach to Collective Form",
            people: "Jesse Martyn, University of British Columbia",
            projectTags: "COLLECTIVEFORM, INDUSTRY, MECHANICAL-SYSTEMS, DECOMMISSIONED-SITES",
            images:[
                "https://curriculumforclimateagency.org/images/Industry (1).jpg",
                "https://curriculumforclimateagency.org/images/Industry (2).jpg",
                "https://curriculumforclimateagency.org/images/Industry (3).jpg",
                "https://curriculumforclimateagency.org/images/Industry (4).jpg",
                "https://curriculumforclimateagency.org/images/Industry (5).jpg",
                ],
            description: `Globalization and capitalism are resulting in the emergence of more and more urbanized landscapes.  As the world becomes increasingly globalized, ports become ideal places for investment and development.  Because of its strategic coastal location, Prince Rupert has one of the fastest growing port terminals in North America and is the epicentre for the exploitation of natural resources in Northern British Columbia.  As Prince Rupert evolves, peak oil is reached, and non-renewable resources decline, we can imagine a transition toward a renewable resource economy, an influx of renewable resource industries, and an influx of diverse groups of people.
            Fumihiko Maki’s 1964 Investigations in Collective Form is adapted to act as the guiding framework for this project.  Maki’s writing suggests, “Our concern here is not, then, a “master plan,” but a “master program,” since the latter term includes a time dimension.  As a physical correlate of the master program, there are “master forms” which differ from buildings in that they, too, respond to the dictates of time.  Collective form represents groups of buildings and quasi-buildings—the segment of our cities.  Collective form is, however, not a collection of unrelated, separate buildings, but of buildings that have reasons to be together.”   Maki’s three major approaches to collective form—compositional form, mega form, and group form—are used as the fundamental base layer for this project.
            This project seeks to envision how the city can develop through a responsive urbanism shaped by the industries that stimulate the local and global economy.  Urban society is “a dynamic field of interrelated forces,” and as such, this proposal positions the architect as a mediator.  It proposes approaches not as fixed solutions, but as possibilities for how a place can evolve in response to shifting geopolitical and socioeconomic values.  This project suggests ways in which an urbanism can develop and adapt to support these shifts, highlighting the need for the designer to consider cycles and transformations.  Post-war carbon economies can transition towards renewable resource economies as a catalyst for diversification and the growth of Prince Rupert as a collective city.
            Our relationship with natural resources, industry, the economy, and the environment are complex and constantly in a state of contradiction.  This relationship is explored through an understanding of the city as a collective form.  Positioning industry as a generator, a systems-based approach to collective form imagines an urbanism through the lens of a form, a strategy, and a program.  This project forecasts the future generative potential of industries stimulating the North American resource economy, while allowing these industries to productively shape the built environment and the exchanges that occur within it.
            <p>
            CITATIONS / WORK CITED:
            Maki, Fumihiko. Investigations in Collective Form. Washington: School of Architecture,
            Washington University, 1964.`,
            session: "MONSTROUS INFRASTRUCTURE"
        },
        //46
        {
            title: "Profesional Practice + Green Reconstruction",
            people: "Moderator: Jacob Moore, Columbia University",
            projectTags: "PRACTICE, CLIMATE, PEDAGOGY",
            image: "images/buell_center_logo.png",
            description: `The teaching of “Professional Practice” has been standard in US graduate architecture programs for decades. In the National Architectural Accrediting Board’s most recent update to their “Conditions for Accreditation,” professional practice is defined as “professional ethics, the regulatory requirements, the fundamental business processes relevant to architecture practice in the United States, and the forces influencing change in these subjects.”
            The promise of professional expertise under what the panel’s organizing institution, the Temple Hoyne Buell Center for the Study of American Architecture at Columbia University, is calling “Green Reconstruction” is a double-edged sword for which new pedagogical models are necessary. How might architects’ roles as community and client advocates be taught in a context of ever-more competitive and specialized professional market shares of ‘service provision?’ Where in the technical, aesthetic, and fiscal chain of architectural operations between the mouse and the jobsite does ethical, professional responsibility lie? Who should be held accountable in the profession for the very composition of the profession, considering glaring racialized, gendered, and economic disparities (among others), and how might that accountability be designed and sustained? What counts as “best” business practice in an economy and profession where wealth’s default flows are more-and-more from those who need it most toward those who need it least? And for all of these—who decides? In this special session, faculty members and organizers from institutions where shifts in professional practice curricula are underway will share their motivations, methods, and challenges when addressing these and other questions before opening the conversation up to all attendees. <P> Speakers:
            <P>Rebecca Berry, Massachusetts Institute of Technology
            <P>Robert Mohr, Massachusetts Institute of Technology
            <P>Carisima Koenig, Pratt Institute
            <P>Kwesi Daniels, Tuskegee University
            <P>Megan Groth, Woodbury University
            <P>Green Reconstruction, Buell Center`,
            session: "SPECIAL FOCUS"
        },
        //47
        {
            title: "Getting Well",
            people: "Christoph Korner, Woodbury University",
            projectTags: "HEALTH, SAFETY, COMFORT, STANDARDS, ACCREDIDATION",
            description: 'Human safety, health, and comfort are essential parts of our profession, but lack an academic discussion, which makes an integration in the curriculum sometimes challenging. At the same time the traditional output of our students can not represent them in any satisfactory way. How do we draw health and comfort in a floor plan? How do we show safety in a rendering? This dilemma is even more daunting in case of an upcoming CIDA accreditation visit. Parts of Standard 7 and Standard 13, as well as the entire Standard 14 can become a challenge to show in students’ work. How can we document an understanding of indoor air quality, active and passive thermal systems, or acoustical control?  While studying to become a WELL Accredited Professional, it became clear that these aspects of our work are at the center of WELL certification. “The WELL Building Standard is a vehicle for buildings and organizations to deliver more thoughtful and intentional spaces that enhance human health and well-being. Backed by the latest scientific research, WELL includes strategies that aim to advance health by setting performance standards for design interventions, operational protocols and policies and a commitment to fostering a culture of health and wellness.” We decided to use the research and standards of the International WELL Building Institute as a framework for a seminar entitled ‘Human Wellbeing’. The 1-unit course covers the 7 concepts of WELL certification – Air, Water, Nourishment, Light, Fitness, Comfort, and Mind – and explores the synergetic effects between them. The students get an understanding of the interconnection of the built environment and the human body systems. The class also prepares the students to succeed in becoming a WELL Accredited Professional, if they choose to do so. The new class has been developed over the summer of 2020 and is being taught in Fall 2020. The results of the first iteration of it will be available for the 2021 ACSA Teachers Conference. CITATIONS / WORK CITED: Petermans, Ann, and Rebecca Cain, editors. Design for Wellbeing : An Applied Approach. Routledge, 2020. INSERT-MISSING-DATABASE-NAME, INSERT-MISSING-URL. Accessed 20 Sept. 2020. Cook, Justin W, editor. Sustainability, Human Well-Being, and the Future of Education. Palgrave Macmillan, 2019. INSERT-MISSING-DATABASE-NAME, INSERT-MISSING-URL. Accessed 20 Sept. 2020. <p> Cooper, Rachel, et al., editors. Wellbeing, a Complete Reference Guide. Volume Ii, Wellbeing and the Environment /, John Wiley & Sons, 2014. INSERT-MISSING-DATABASE-NAME, INSERT-MISSING-URL. Accessed 20 Sept. 2020.',
            session: "UNLEARNING ARCHITECTURE"
        },
        //48
        {
            title: "Post-Conflict Archives: Representations of Fight or Flight",
            people: "Jumana Abbas, Columbia University",
            projectTags: "REPRESENTATION, RUINS, THOERY, CURATORIAL",
            description: 'In 1521, the Italian Renaissance diplomat and writer Niccolò Machiavelli wrote a treaty on the art of war that was accompanied with a series of diagrammatic figures depicting an analytical placement of troops, soldiers and bunkers. The acclaimed father of modern political philosophy and political science showcased the logistics of military planning as well as the erasure of bodies, space and technology. This representational illustration is arguably no different from the other drawings produced in preparation for war and military occupation, revealing a planar understanding of the city as a functional diagram to be controlled at times of destruction.  Across disparate spaces of occupation, strategies for attack, defense and retaliation are preplanned and drawn on top of aerial plans of urban cities. These drawing reduced bodies to numerical figures and politicized spaces to abstract lines. Positions of attack become the main features of these urban spaces; arrows, lines, military strategies are the political schemes for launching assault, occupying indigenous lands and ensuring long-term occupation.  However, the histories of the city’s representation were mainly centered on the administrative and religious center of the Polis, highlighting the inherent militarization of an urban space as the global condition. This modernist epistemology addresses a systematic relationship between the physical infrastructure and the notions of citizenship and democracy, which overshadows alternative, and critical, views about the entanglement of the urban warfare with questions of spatial politics, violence and injustice. In addition, these politicized representation flatten these complex relations, instead of gendering new methodologies, inquiries, archives and engage with the way the architecture discipline is defined and challenged. Hence, the central question here is how to shift the study of these histories of representation to include these new domains and narratives? In the form of visual essay, the presentation will recapitulate a series of drawings of planned strategies, modes of fight or flight, and ruins from across geographies and time and will examine the production of knowledge about representations of urban warfare. The proposal reframes these drawings as an urgent reminder to rethink the agency of knowledge about the tools of representations that sit at the cross intersection of urban warfare, visual studies and architecture theory.',
            session: "UNLEARNING ARCHITECTURE"
        },
        //49
        {
            title: "Environmental History of Production Spaces From Mill Buildings to Machinic Landscapes",
            people: "Esin Komez Daglioglu & ,Ilayda Guler, Middle East Technical University",
            projectTags: "MODERNISM, FACTORIES, EFFICIENCY, MECAHINCAL-SYSTEMS, TYPOLOGY",
            description: `The Industrial Revolution, initiated with the redesign of steam engine by James Watt in 1764 and utilised as motive power in 1785, transformed the existing industries from the level of craftsmanship to mechanisation.(Friedrich Engels 1886, 54) Industry as a means of production, employment of labour, and fundamentally source of elevation for energy has influenced many discourses. Environmental history and theory, by internalizing these multiple discourses, enable to associate architecture with histories of energy, production, labour, and infrastructure. Production spaces, more specifically factories – the nodal points of engineering, social theory, architecture, and technology – solidify the accumulation of knowledge from each contributory discipline and reflect every concern on the architectural plan. Therefore, this study aims to examine the transformation of the architecture of the production spaces with regard to the multiple histories of industrialization and its relation to energy, production and labour and their corollary effects on climate.
            In the process of advancing industries, be acquainted of new materials and techniques, there arose the necessity of assembling all machines under the same roof, in a factory. Therefrom, nineteenth century mill building typology started to appear.(Image1) Long, narrow, multi-storey artefacts either built by masonry, wood, or brick that constructed with the limited technologies of the century, and illuminated mostly by natural light laid the foundation for architectural narratives of mill buildings.(Lindy Biggs 1996, 18-20) From a central power source either water or steam, and configuration of gears, shafts and belts for power distribution in the nineteenth century; industry converted to electrical lighting and drive with the twentieth century. (Warren D. Devine, Jr. 1983, 350-4) Electrification, as the determinative of second industrial revolution, extended labour with the electrical lighting and heating, and permitted to rearrange the layout of operations.(Tilo Amhoff 2016, 259) Following mill buildings, factories of the twentieth century, referred as daylight factories, were concretised with the invisibility of electrification and an agent of mass production, assembly line.(Image2-3) Daylight factories followed the ‘typical plan’ in the interior arrangement to accommodate improved working conditions, healthy environment, and open space for mass production ideals.(Francesco Marullo 2014, 108-14) (Image4) Thence, the more escalation of production volumes, the more construction of production spaces.(David E. Nye 1997, 205-10) Based on the direct proportional relationship between industry and construction, architecture of production spaces resumed to evolve in regard of floor plan, materials, layout organisation, energy transmission, and ratio between workers and machineries. Today, in the current industrial condition of machine landscapes, fully automated industrial territories have been built up without the existence of labour force.(Liam Young 2019, 8-11) (Image5)
            <p>
            In brief, analysing the spatial formation and transformation of the production spaces with an emphasis on environmental history can uncover the intricate relations between architecture, energy, production and labour and their resultant impact on climate. As a consequence, this paper will underline the relevance and significance of including these themes, histories and building types at the architectural curriculum today for addressing the exigencies of the climate change.
            <p>
            CITATIONS / WORK CITED:
            <p>Amhoff, Tilo. “The Electrification of the Factory: Or the Flexible Layout of Work(s).” In Industries of Architecture, edited by Katie Lloyd Thomas, Tilo Amhoff and Nick Beech, 259-70. London: Routledge, 2016.
            <p>
            Biggs, Lindy. The Rational Factory: Architecture, Technology, and Work in America’s Age of Mass Production. London: The John Hopkins University Press, 1996.
            <p>
            Devine, Jr., Warren D. “From Shafts to Wires: Historical Perspective on Electrification.” The Journal of Economic History 43, no.2 (June 1983): 347-72.
            <p>
            Engels, Friedrich. The Condition of the Working Class in England. New York: Penguin Books, 1886.
            <p>
            Marullo, Francesco. “Typical Plan: The Architecture of Labor and the Space of Production”. PhD diss., The City as a Project, The Berlage Institute and TUDelft, 2014.
            <p>
            Nye, David E. Electrifying America: Social Meanings of a New Technology. Cambridge, Massachusetts: The MIT Press, 1997. First edition in 1992.
            <p>
            Young, Liam. “Neo-Machine: Architecture Without People.” Architectural Design 89, 1 (January/February 2019): 6–13.`,
            session: "UNLEARNING ARCHITECTURE"
        },
        //50
        {
            title: "Environmental History of Production Spaces From Mill Buildings to Machinic Landscapes",
            people: "Bushra Nayeem, University of Kansas",
            projectTags: "DEVELOPMENT, INTERMEDIATE-TECHNOLOGY, PROFESSION, CASE-STUDY",
            images:[
                "https://curriculumforclimateagency.org/images/EnvironTech (1).jpg",
                "https://curriculumforclimateagency.org/images/EnvironTech (2).jpg",
                "https://curriculumforclimateagency.org/images/EnvironTech (3).jpg",
                "https://curriculumforclimateagency.org/images/EnvironTech (4).jpg",
                "https://curriculumforclimateagency.org/images/EnvironTech (5).jpg",
                ],
            description: `Globalization is the result of growth in international organizations (e.g. United Nations, International Monetary Fund, and World Trade Organization) that promote cross border exchanges and finance, resulting in a profoundly diverse economic order . Therefore, knowledge and information are traded internationally, and the process of immigration has become much more prominent and lately, more contentious. In the past, such transitional trajectories led to more global integration such as the acceleration of technological innovations, broader political changes, and liberalized economic policies (Barber 2016). Technological innovations of the 1960s saw exceptional western prosperity from men walking on the moon to futuristic architectural fantasies based on the use of ingenious sci-fi graphics, plug-in-capsule cities, walking cities, and living pods (Frampton 2007b). Thus, western countries started a massive campaign to transfer capital and technology to force rapid industrialization in developing countries (Jackson 1984) (Baron 1984). These foreign-technology imports only benefitted a small minority of urban elites and increased urbanization, pushing the rural poor to move to urban areas in search of financial opportunities. The amplified stress on urban infrastructure and public services led to increasing squalor, severe impacts on public health and distortions in the social structure. At that juncture, economist E.F. Schumacher first envisioned the concept of intermediate technology adapted to the unique needs of developing countries after working with India and Burma (now Myanmar) in 1955. As soon as architecture was brought into line with the idea of intermediate technology, its role started to shift from the contemporary professional architect and modern movement towards alternatives contained in the idea of self-sufficiency. This gave rise to the concept of “minimum,” and the idea of re-use, in addition to concerns about the ecological and social destruction wrought by industrialization, and a desire for people and nature to coexist again. The Minimum Cost Housing Group (MCHG) that emerged at McGill University in Montreal in 1970 as a hub for architects coming from different parts of the world to embrace this intermediate technology not only to challenge the inaccessibility of the abstract grammar of contemporary architecture but also to devise ways for architects to serve the poor sectors of society not normally addressed by the profession (Nataraj and Bhatt 1980) (Pawley 1975). (Rybczynski 1977) (Bhatt 2011). This milieu that shaped this paradigm shift in the profession had remained a tangential, isolated story. In this paper, I will investigate this connection and question entanglement of architecture with environmental conditions, economies, and ecologies offered by globalization. The study focuses on two intersecting areas: the impacts within architectural culture leading to conflicting approaches (over-consumption and minimum cost); and the backdrop in which international development agencies came to embrace the intermediate and environmental solutions from developing countries to further their goals of expanding economic growth.
            <p>CITATIONS / WORK CITED:
            <p>Barber, Daniel A. 2016. “A House in the Sun. Modern Architecture and Solar Energy in the Cold War.” 1 edition. Oxford University Press.
            <p>Frampton, Kenneth. 2007b. “The Evolution of 20th Century Architecture: A Synoptic Account.” 1st Edition. Springer Vienna Architecture.
            <p>Jackson, S. (1984). Ghosh, P.K., ed. “Appropriate Technology in Third World Development.” London: Greenwood Press. p. 76. ISBN 0-313-24150-3.
            <p>
            Baron, C. (1984). Ghosh, P.K., ed. “Appropriate technology in Third World Development.” Westport, Connecticut: Greenwood Press. p. 117. ISBN 0-313-24150-3.
            <p>
            Faulkner, A. O.; Albertson, M. L. (1986). “Tandem use of Hard and Soft Technology: an Evolving Model for Third World Village Development”. International Journal of Applied Engineering Education. 2 (2): 127–137.
            <p>Nataraj, V.S., and Vikram Bhatt. 1980. “A Low Cost Garbage Solar Water Heater.”
            <p>Pawley, Martin. 1975. “Garbage Housing.” In Garbage Housing. Krieger Pub. Co. (February 1975).
            <p>Rybczynski, Witold. 1977. Use It Again Sam.Pdf. McguillUniversity,Montreal, Canada.`,
            session: "UNLEARNING ARCHITECTURE"
        },
        //51
        {
            title: "Designing for the Most Vulnerable: How Empathy Makes a Better City for Everyone",
            people: "Michelle Laboy, Northeastern University",
            projectTags: "CHILDREN, URBANISM, CLASSROOM",
            description: `How would architects design the city if it was only designed for the most vulnerable of us? This seemingly obvious question proved a fertile ground for questioning the most fundamental assumptions about the design process. By thinking deeply and broadly about one specific but large vulnerable group, children, this course revealed the power of a complete change in perspective in inspiring deep empathy in design. As Juliet Kinchin, curator at MoMA said, “We have been periodically reminded how the forces of modernity shape design and childhood in ways that are extraordinary and exhilarating yet also complex and contradictory.” (2012) In a time of social unrest and ecological degradation, children are disproportionately impacted by every crisis in this world, and yet they are seldomly the subject of architectural research or education, unless it involves building typologies specific for them. Their existence in design is typically limited to schools, daycare, and playgrounds – the spaces where they are segregated into. What if instead of making special accommodations or spaces for children, we designed the entire city for them? This graduate research studio started with the premise that designing the city for children would make the best environment for everyone. Students had to examine a simple question: what is the ideal experience for the child in the city? This is a question designers rarely ask when designing urban spaces and buildings. Yet there is ample evidence that an immersive experience in natural landscapes is important for the cognitive, physical and emotional development of the child. Because this idea seems potentially at odds with the benefits of dense and compact urban development, and the patterns of extreme urbanization, this raised a question that is often asked for very different reasons: how to integrate “natural” experiences in everyday life beyond the traditional and centralized park space. The liberating  paradox is that the most significant and historically consequential natural spaces in urban environments are completely constructed, so why not invent a entirely new urban landscape from the perspective of the child? If for the child, learning happens everywhere, what planning principles and design strategies could guide the design of everyday spaces for mobility, dwelling, working, and leisure? Students engaged with these critical questions during the research phase. They examined pedagogical concepts and metaphors for play and environment-based learning. They reviewed evidenced-based  principles from child development sciences. Through site visits, interviews with experts, and field work, students developed a framework of themes representing the biggest challenges in design today: from health to risk aversion to resilience. This served as a point of departure for engaging in individual design investigations that explored the potential for a new constructed urban landscape for childhood in contemporary cities. The projects were unexpected in range and scale: from new street design guidelines to hybrids of infrastructure and school, to coastal resilience planning.
            <p>CITATIONS / WORK CITED:
            <p>Juliet Kinchin. Century of the Child, Growing By Design 1900-2000. (New York, NY: Museum of Modern Art, 2012)`,
            session: "CHARTER FOR HEALTH + JUSTICE"
        },
        //52
        {
            title: "A Seat at the Table: Examining the Designer’s Role in Health Equity Through Addressing the Social Determinants of Health",
            people: "Kendra Kirchmer, Kansas State University; Marin Gillis, Roseman University of Health Science",
            projectTags: "HEALTH, EQUITY,",
            description: `The global pandemic reveals the imperative for designers to collaborate with health professionals. Designers can and must understand the role the built environment plays in health outcomes for individuals and populations; and design educators can and must develop the knowledge and skills needed to position nascent design professionals to become leaders who advance systemic change towards health equity, which is helping all people have a fair and just opportunity to be as healthy as possible. (Braveman et al., 2017)
            Designers already contribute to health outcomes through the design of hospitals and medical devices, however, if we consider that health is influenced by the places that one lives, works, and plays, the role of the designer in health is much more expansive. Health is not just about treatment of disease and illness. A range of factors, like access to education, employment, and healthy food, housing, and social cohesion, collectively known as the Social Determinants of Health (SDoH), play a significant role. (Daniel et al., 2018) Housing, workplaces, bus stops and corner stores, for example, are therefore parts of healthcare design. If equity is the goal of the designer and design professions broadly, then the necessary role of the designer in advancing health equity becomes obvious.            
            Transdisciplinary collaborations between health and design professionals and educators in each domain must not only be advanced but prioritized to effectively address the complexities of health equity, the built environment, and the SDoH. For designers, this means that the territory of design in health must be broadened to include spaces and places not commonly thought of as healthcare design; and design educators must teach students to articulate the ethical ramifications of their designs and understand their agency as designers. Design decisions shape health. Consequently, design educators must prepare their students to marshal the power of design to advocate and realize systemic change, by improving health outcomes and ultimately creating an equitable and just 21st century built environment.
            As an initial response to this emerging opportunity, we introduced a novel course open to students across design disciplines, Vital Design. Students created a proposal for a transdisciplinary intervention and evaluate intersections of the built environment and the SDoH, identify challenges faced by individuals and populations within the context of impacts of the BE/SDoH on health outcomes, define an opportunity to improve those outcomes, and propose a collaborative intervention. Student work was assessed by a panel of health, medical, ethics and design professionals.
            This course and additional transdisciplinary education pilots between 2017-2020 at the College of Architecture Planning and Design at KSU, Manhattan, KS and the Florida International University College of Medicine in Miami, forms the foundation of transdisciplinary design and health curricula. We will present a pedagogy supported by the outcomes of these educational interventions. Such serves as a transferable model for a transdisciplinary approach to teaching the SDoH in design and medical education, with the goal of promoting broader public health, empowering design and medical professionals to work collaboratively towards a just and equitable built environment.
            <p>CITATIONS / WORK CITED:
            <p>Braveman, P., Arkin, E., Orleans, T., Proctor, D., & Plough, A. (2017). What Is Health Equity? And What Difference Does a Definition Make? [Report]. Robert Wood Johnson Foundation
            <p>Daniel, H., Bornstein, S., & Kane, C. (2018). Addressing Social Determinants to Improve Patient Care and Promote Health Equity: An American College of Physicians Position Paper. Annals of Internal Medicine, 168 (8), 577-578. https://doi:10.7326/M17-2441`,
            session: "CHARTER FOR HEALTH + JUSTICE"
        },
        //53
        {
            title: "Students as Agents in Moving Towards Just Environments",
            people: "Ann Heylighen, KU Leuven",
            projectTags: "DIVERSITY, EQUITY, HEALTH",
            description: `Aging, migration, and changes in how disability is understood challenge architects/designers to consider human differences so as to meet the needs of the widest possible audience – the purpose of inclusive design approaches. Originally focused on age and ability, more recently these approaches evolved towards a wider understanding of diversity (e.g., gender, sexuality, socio-cultural differences), with a broader relevance for healthcare and workplace design.
            Paradoxically, however, taking this diversity seriously may severely restrict ‘the widest possible audience’: human differences are too wide to be taken into account in all their varieties. While COVID-19 puts extreme pressure on the carrying capacity of resources, also in conditions of moderate scarcity it is reasonable to expect that trade-offs must be made. How then can building design be just if it is impossible to meet the needs of all?
            In search for mechanisms that promote inclusive pedagogies for the 21st century, we explore how to position students with different kinds of experience and expertise as agents in a broader movement towards inclusive, healthy and just built environments.
            Twelve years ago we started a field experiment to explore how human diversity could be mobilized to inform campus design. Architectural engineering students were teamed up with user/experts – students, staff or visitors on the autism spectrum or having a sensory or mobility impairment. Teams visited and analyzed a university building that would undergo works in the near future. Visits were documented, and insights gained presented to and discussed with architects/built environment professionals and other actors involved.
            Meanwhile the field experiment developed into an approach that aligns with participatory action research (PAR). Through dynamic cycles of planning, action and reflection, PAR seeks to advance knowledge of those involved in the inquiry, which leads to actions. Reflection on these actions in turn leads to new understandings and opens up new areas of inquiry. In outlining this continuous interaction between practice and theory in how the field experiment developed, we rely on students’ analysis reports of building visits, notes taken during presentations and discussions, and formal and informal interactions with and feedback from various actors involved.
            In terms of theory, the original focus on starting points of and concepts related to inclusive design was gradually complemented with conceptions and theories of justice and deliberation. The latter help to make sense of experiences gained in practice, both during building visits – experiences with how the built environment can dis/enable, and the power and limits of empathy – and during presentations/discussions – experiences with the impossibility to literally design for all, and moderate scarcity of resources. Other developments include seeking socially innovative ways to acknowledge and reward the valuable skills user/experts bring to the table, and widening the radius of action beyond the university campus by analyzing buildings owned by others, allowing to involve/include more stakeholders in the movement.
            Possible further developments include finding ways to involve user/experts more actively in planning and reflection without forcing them to leave their comfort zone, and assessing the long term effects of the approach.
            <p>CITATIONS / WORK CITED:
            <p>Clarkson, P. J., & Coleman, R. (2015). History of inclusive design in the UK. Applied Ergonomics, 46(Part B), 235-247.
            <p>Keates, S. (2015). Design for the value of inclusiveness. In J. Van den Hoven, P. E. Vermaas, & I. van de Poel (Eds.), Handbook of Ethics, Values and Technological Design (pp. 383-402). , Dordrecht: Springer.
            <p>Moulaert, F., MacCallum, D., & Hillier, J. (2013). Social innovation: Intuition, precept, concept, theory and practice. In F. Moulaert, D. MacCallum, A. Mehmood, & A. Hamdouch (Eds.), The international handbook on social innovation. Collective action, social learning and transdisciplinary research (Chapter 1, pp. 13–24). Cheltenham: Edward Elgar.
            <p>Rawls, J. (1985). Justice as fairness. Philosophy & Public Affairs, 14(3), 223-251.`,
            session: "CHARTER FOR HEALTH + JUSTICE"
        },
        //54
        {
            title: "Towards a 21st Century Pedagogical Approach for Sustainable Urban Architecture in Post-Apartheid South Africa.",
            people: "Nischolan Pillay & Belula Tecle Misghina, Durban University of Technology",
            projectTags: "DIVERSITY, EQUITY, HEALTH",
            description: `The Athens Charter of 1933 promoted the development of modern, functional cities to ensure the health and wellbeing of its citizens. The four functions defined therein were addressed through rationalization of what constituted healthy urban life, including psychological wellbeing of the individual within the collective community.  On the other hand, in what is now known as the global South, the apartheid regime in South Africa incited acts of racial segregation and human rights violations. Reinforced by the controversial Land Act of 1913, the apartheid movement set itself deep into the land infrastructure by pushing non-whites away from the city – a process by design in the form of the apartheid city model. This model is what defines the current inequities at every facet of the human dwelling, including social factors such as health and safety, access to resources, wealth parity and the ecological quality of living environments. The cavernous apartheid city model thereby perpetuates a segregated society of privilege and deprivation. Whereas the Athens Charter sought to address the challenge of individual and community, in the urban context, the apartheid city model presents problems of displaced and dived communities. One such instance, in which such disparity plays out, is in the city of Durban, a melting pot of Indo-African culture and a typical apartheid city struggling to break through the glass ceilings and walls in a democratic South Africa. Durban, in recent times, has felt the brunt of several urban, socio-economic, health, political, cultural and civil issues. Although these issues may seem familiar to other cities of the world, the apartheid city by design adds a layer of burden to the issues faced by citizens participating in city life. Through exclusion by, a sense of disconnect creates uneasiness between the individual and the collective as different people and communities grapple for opportunities in the city. This ambiguity has created generational qualms and negative perceptions of the city, albeit in the democratic era. Previous work in this research area mention but a few challenging factors; however, several perceptions emerge from different social perspectives, deeply defined by apartheid segregation. It is, therefore, this research aims to define and interpret these various factors contributing to negative perceptions to affect the latent potentiality of the city, in order to formulate an approach for the agency through advanced active pedagogy within an inclusive 21st-century curriculum for redress and the spatial transformation of Durban. This research adopts a pragmatic mixed-method qualitative approach. The synthesis of secondary sources of literature contributes to forming the theoretical and conceptual framework of this study. Primary methods for this research include semi-structured interviews of architecture students to gauge the perceptions of the city of Durban concerning different socio-economic, cultural, racial and political backgrounds. This research aims to integrate the new-found knowledge to implement a critical pedagogical approach in solution-driven city..`,
            session: "CHARTER FOR HEALTH + JUSTICE"
        },
        //55
        {
            title: "Future Nostalgia: Breeds, Deeds, and Otherworldly Ruins",
            people: "Rana Abudayyeh, University of Tennessee-Knoxville",
            projectTags: "RE-USE, DECOMMISSIONEDSITES",
            description: `An accelerated rate of development has left our landscapes cluttered with remnants and fragments of our built environments. These traces of our use sit idle in often contested conditions with a dramatic impact on climate. Together, building and construction are responsible for 39% of all carbon emissions globally, with operational emissions accounting for 28%, and 11% associated with materials and construction.1 These realities raise the question: do we need to build new? The reactivation of dormant existing structures was the main focus of an interdisciplinary vertical design studio that included third-year Architecture and fourth-year Interior Architecture students. The studio addressed the synthesis and propagation of new strategies to revitalize decommissioned parts of our built environment generating speculative narratives for future cities in partnership with one of the world-leading design practices. This collaboration demarked a unique overlap between pedagogy and practice, bringing real-world climate issues into academia for collaborative problem-solving.

            This partnership emerged from the design firm’s involvement in the shaping of existing and future cities. The firm is actively leveraging mobility through design to create multimodal, vibrant settings. Throughout the semester, students interacted with designers from the firm to explore multimodal thinking, climate sensitivity, and the transformative impact of adaptive reuse in the urban environment. The partnership encouraged human-centric design sensibilities, cognizant that human experience is ultimately at the center of any design problem. Together, students and professionals pursued design solutions capable of adapting to a changing world, formulating robust narratives for future settings.
            
            Future cities rely on communal networks and shared platforms, asserting a more collective societal presence. This shift necessitates new multifunctional urban centers. As such, this collaborative studio engaged the design of multimodal transportation hubs grafted in the context of four inactive building types. The building typologies were the indoor mall, the office building, the parking structure, and the abandoned cultural icon. The selected buildings were situated in different cities. Each combination (city and building type) offered distinct challenges and opportunities for intervention within the urban fabric. Collectively, the four locations informed an agenda for resilient future cities, actively responding to the pressing realities of climate change while catering to shifting socio-economic parameters.
            
            Within the push and pull that our new realities induce, a resetting of design processes must occur. As cities continue to navigate the complex terrain of climate change, global markets, generational shifts, and population displacement, a collaborative approach to architecture and its pedagogy is imperative. It is prudent to assume that this decade will witness hyper-political and environmental changes, world conflicts and crises, and global market and policy shifts, among other factors. Here therein, the designer’s role must undergo yet another evolution, one where mitigating, negotiating, and accommodating constant flux outweigh spatial demarcation and management. While such redirection will undoubtedly usher a shift in architectural pedagogy and practice, it will deliver a more significant impact and advance progressive agendas geared towards resilient futures.
            <p>
            CITATIONS / WORK CITED:
            1. New report: The building and construction sector can reach net zero carbon emissions by 2050. (n.d.). Retrieved October 12, 2020, from http://www.worldgbc.org/news-media/WorldGBC-embodied-carbon-report-published`,
            session: "MONSTROUS INFRASTRUCTURE"
        },  
        //56
        {
            title: "Proto-Ecological Pedagogies in Design Education. Urban Reuse at the Laboratory of Architecture & Urban Design",
            people: "Elke Couchez, Hasselt University",
            projectTags: "RE-USE, DECOMMISSIONEDSITES",
            description: `In the last two decades, new educational laboratories and specialized MA and BA training programs have addressed ecological and environmental challenges by formulating ‘society-and citizen-driven’ design-responses for the revitalization, redevelopment and adaptive reuse of the built environment. These design approaches are being verified on a range of scales going from the individual building to the city and the territory and these often-experiential teaching programs pivot around the following learning objectives: a) to develop new didactic strategies and tools to formulate economically viable and sustainable design solutions that counteract the rampant demolition of buildings and urban structures, b) to consider how these strategies and tools can enable a deeper understanding of tangible and intangible values of the built environment, and c) to improve the social resilience of cities – or the way the urban form can adapt to new conditions – through focused design efforts. (Banerjee and Loukaitou-Sideris 2011, 586; Clarke, Kuipers, and Stroux 2019, 1)
            This paper takes a historical approach to identify these so-called ‘wicked problems’ (W.J. Rittel and M. Webber 1973; Cabrera i Fausto 2014; Banerjee and Loukaitou-Sideris 2011, 585) and will do so by focusing on a well-documented, yet under-exposed itinerant and international educational platform: the International Laboratory of Architecture & Urban Design (hereafter abbreviated as ILAUD). ILAUD was a non-profit association established by the architect and planner Giancarlo de Carlo (1919-2005) in 1976. From 1976 till 2005, De Carlo invited Western research and educational institutions – who delegated one or two staff members and five to six students – to participate in a highly-ambitious eight-week residential summer course organised in-situ in an Italian city. De Carlo’s educational platform evolved within the post-war discourse on the historic European city and the region (Elke Couchez 2020a) and developed pedagogical strategies and tools for urban regeneration and the reuse of existing buildings, based on a thorough understanding or ‘reading’ of the marks left by social, historical and topographical transformations on the physical space.
            By contrasting the studio briefs of the first five ‘Urbino years’ to a series of highly illustrative student drawings and based on new archival research, this paper argues that ILAUD sought an intellectual relief between the social sciences and design studies and combined insights from landscape, architecture, conservation studies and city planning. I will not try to resolve these “exogenous disciplinary influences” (Verma 2011), but rather take this interstitial legitimacy as a lens to engage with the notion of disciplinarity. Was this initiative part of what late Michael Sorkin described as “a bid to recover the lost influence of architecture – erstwhile mother of the arts – from its dissolution in an urban field dominated by planners”? (Sorkin 2012, 620) And to what extent did ILAUD reap the rewards of the rise of educational programs in the late ‘50s and ‘60s that replaced physical planning traditions with paradigms derived from environmental psychology and behaviour and came under the headings of ‘Civic Design’, ‘City Design’, ‘Environmental Design’?
            <p>CITATIONS / WORK CITED:
            <p>Cabrera i Fausto, Ivan. 2014. ‘Confronting Wicked Problems: Adapting Architectural Education to the New Situation in Europe’. Erasmus + Project.
            <p>Clarke, Nicholas, Marieke Kuipers, and Sara Stroux. 2019. ‘Embedding Built Heritage Values in Architectural Design Education’. International Journal of Technology and Design Education, August.             Couchez, Elke. 2020. ‘Reading the City by Drawing. Tentative Design as an Educational Tool for Urban Regeneration in the 1977 ILAUD Summer Course’. OASE 107 – The Drawing in Landscape Design and Urbanism, In press.
            <p>
            <p>Sorkin, Michael. 2012. ‘The End(s) of Urban Design’. In The Urban Design Reader, edited by Michael Larice and Elizabeth MacDonald, 2nd ed. New York: Taylor & Francis Group.
            <p>
            <p>Verma, Niraj. 2011. ‘Urban Design – An Incompletely Theorized Project’. In Companion to Urban Design, edited by Banerjee Tridib and Anastasia Loukaitou-Sideris, 57–69. Taylor & Francis Group.
            <p>
            <p>W.J. Rittel, Horst, and Melvin M. Webber. 1973. ‘Dilemmas in a General Theory of Planning’. Policy Sciences4: 155–69.`,
            session: "MONSTROUS INFRASTRUCTURE"
        },

        //57
        {
            title: "21ST Century Frameworks For Architectural Materials",
            people: "Moderator: Mae-Ling Lokko, Rensselaer Polytechnic Institute",
            projectTags: "MATERIALS, SUPPLY-CHAIN",
            description: `As much as “architectural materials” have localized, insidious impacts on indoor human health and well-being, they also drive larger scale impacts on our society, ecology and climate.   Such materials cannot be divorced from their role as part of a larger public health infrastructure and powerful platform in reinforcing  ecological health, equity and social justice.

            <P>The panel discussion hopes to explore/discuss three primary questions:
            <P>1. What framework(s) for linking the ‘architectural material’ to larger scale phenomena (economic, social, environmental, energetic, etc) have emerged in your work?
            <P>2. How have you invented/innovated unique teaching pedagogies and/or research methodologies to foster students understanding, evaluation and design of architectural materials?
            <P>3. What new enterprises* for architectural material sourcing, manufacturing, and maintenance over time have or will emerge from such frameworks?
            * Enterprise is an umbrella for convergent disciplinary collaboration, external partnerships, new green collar industry, etc. <P>Presenters:
            <P>Jeana Ripple, University of Virginia
            <P>Alexandra Rempel, University of Oregon
            <P>Lola Ben Alan, Columbia University`,
            session: "SPECIAL FOCUS"
        },
        //58
        {
            title: "Closing Plenary : Climate Pedagogy",
            people: "Kiel Moe, McGill University ; Albena Yaneva, Univeristy of Manchester UK",
            projectTags: "HEALTH, WELLBEING, REPRESENTATION",
            images:[
                "https://curriculumforclimateagency.org/images/Closing1.jpg",
                "https://curriculumforclimateagency.org/images/Closing2.png",
                "https://curriculumforclimateagency.org/images/Closing3.png",
                "https://curriculumforclimateagency.org/images/Closing4.png",
                ],
            description: `We, as cross continental educators, must collectively address our global emergency as well as the opportunity to circumvent architectures’ role in perpetuating it. These pedagogies require deconstruction of architecture’s master narratives as much as a ground‐up envisioning of its future. In order to change the course of architecture’s curricula, we must re‐assemble our core values by asking critical questions concerning our future contributions to our climate.<P> Introduction Harriet Harriss, Pratt Institute <P> Moderator: Rania Ghosn, MIT`,
            session: "PLENARIES"
        },
        //59
        {
            title: "Peace, Commerce, Friendship",
            people: "Brittany Utting, Rice University; Daniel Jacobs, University of Houston",
            projectTags: "IMAGE, IMAGINATION, FUTURE, ",
            image: "https://curriculumforclimateagency.org/images/Exhibition1.jpg",
            description: "",
            session: "EXHIBITION"
        },
        //60
        {
            title: "Palm-House",
            people: "Brittany Utting, Rice University; Daniel Jacobs, University of Houston",
            projectTags: "IMAGE, IMAGINATION, FUTURE, ",
            image: "https://curriculumforclimateagency.org/images/Exhibition2.jpg",
            description: "",
            session: "EXHIBITION"
        },
        //61
        {
            title: "Preserved",
            people: "Audrey Fischer, Yale University",
            projectTags: "IMAGE, IMAGINATION, FUTURE, ",
            image: "https://curriculumforclimateagency.org/images/Exhibition3.jpg",
            description: "",
            session: "EXHIBITION"
        },
        //62
        {
            title: "Saliocene",
            people: "Audrey Fischer, Yale University",
            projectTags: "IMAGE, IMAGINATION, FUTURE, ",
            image: "https://curriculumforclimateagency.org/images/Exhibition4.jpg",
            description: "",
            session: "EXHIBITION"
        },
        //63
         {
            title: "Sympoietic Structures: Water ",
            people: "Jason Vignieri-Beane, Pratt Institute",
            projectTags: "IMAGE, IMAGINATION, FUTURE, ",
            image: "https://curriculumforclimateagency.org/images/Exhibition5.jpg",
            description: "",
            session: "EXHIBITION"
        },
        //64
        {
            title: "Splitting Soil",
            people: "Nancy, Morgado Diniz, Central Saint Martens",
            projectTags: "IMAGE, IMAGINATION, FUTURE, ",
            image: "https://curriculumforclimateagency.org/images/Exhibition6.jpg",
            description: "",
            session: "EXHIBITION"
        },
        //65
        {
            title: "The Fourth Wall",
            people: "Kevin Marblestone & Emily Whitbeck, Massachusetts Institute of Technology",
            projectTags: "IMAGE, IMAGINATION, FUTURE,",
            image: "https://curriculumforclimateagency.org/images/Exhibition7.jpg",
            description: "",
            session: "EXHIBITION"
        },
        
    ];

    var processProjects = function () {
        projects.forEach(function (project) {
            project.tags = project.projectTags.toUpperCase().split(",")
                .map(tag => $.trim(tag))
                .filter(tag => tag && tag.length > 0);
        });
    }

    return {
        init: init,
        projects: projects
    };
})();