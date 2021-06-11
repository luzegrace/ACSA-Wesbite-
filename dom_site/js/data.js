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
            title: "project 1",
            description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id dui vel massa accumsan luctus. Phasellus massa sapien, molestie tincidunt convallis ut, dapibus vel nunc. Morbi ornare, enim eget mollis ultrices, mi sapien mollis ligula, eu maximus orci neque vel elit. Integer et turpis ac augue pulvinar pulvinar maximus at nisl. Mauris tellus nisi, vestibulum a ullamcorper in, fermentum ac sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur nisi in rutrum lacinia. Donec fringilla mollis dictum. Maecenas urna lacus, interdum at varius in, egestas eu arcu. Nulla egestas finibus justo, in consequat sem consequat sit amet. Nam finibus nulla magna, vel finibus ligula posuere eget. Etiam ut efficitur lacus, tristique dignissim ante. Integer ut scelerisque justo.</p>
<p>Proin a metus turpis. Morbi eget luctus mauris, eu cursus justo. Nam in tincidunt enim. Nunc elementum, nibh id ullamcorper elementum, ante turpis tincidunt eros, in euismod ante ipsum eget augue. Integer nec odio quis tortor aliquet scelerisque. Vestibulum commodo maximus urna, et faucibus diam dictum sit amet. Aenean dolor ante, ultrices non felis et, sollicitudin tincidunt quam. Sed dignissim elit vitae orci ullamcorper, ac tristique dolor condimentum. Sed iaculis elit massa, eu venenatis quam lacinia sit amet. Suspendisse suscipit eros id ullamcorper consequat.</p>
<p>Cras a mollis mi. Nam in pharetra turpis. Quisque consequat efficitur euismod. Duis commodo quis sapien non vestibulum. Quisque non pharetra purus. Aliquam posuere lorem urna, id dapibus ipsum auctor ut. Suspendisse facilisis et tellus ut porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam nisl sem, pretium nec nisl vitae, ultrices dictum lacus. Aliquam erat volutpat. Aliquam sed fringilla sapien. Curabitur odio mauris, condimentum sit amet ante nec, tristique pretium mi.</p>
<p>Sed vel enim velit. In pellentesque tellus nisl, non posuere sapien vestibulum in. Quisque dignissim interdum pulvinar. Phasellus feugiat tellus hendrerit ullamcorper pretium. Nulla ac viverra erat, in vulputate ante. Duis vitae ex sit amet sapien ornare bibendum sed sit amet magna. Suspendisse tincidunt augue ac enim tempus fringilla.</p>
<p>Sed lorem sapien, dignissim id tellus non, tincidunt vulputate erat. Ut sodales orci id nulla vestibulum tristique. Aliquam semper lorem eros. Vivamus tempor vel nibh et ultricies. Suspendisse non commodo ante, vitae tristique nisl. Integer in elit nisi. Sed suscipit consequat dignissim. Vivamus ullamcorper lacus vel justo porta fringilla. Quisque iaculis elit molestie, fermentum quam sed, consectetur quam. Nunc ut ex urna. Quisque tempor vestibulum aliquet. Donec dolor nulla, egestas et nibh quis, venenatis auctor tortor.</p>`,
            projectTags: "human-resource, Yellow, Fucun",
            image: "http://dummyimage.com/247x100.png/dddddd/000000, http://dummyimage.com/185x100.png/dddddd/000000"
        },

        //example data

        {
            title: "Sympoietic Structures: Enfolding Ecological Inputs into Core-Studio Curricula",
            people: "Jason Vignieri-Beane",
            projectTags: "EARLY-DESIGN, ECOLOGY, WATER",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/Sample_Session1.jpg",
            description: "Sympoietic Structures explores environmental morphology in first-year design studio pedagogy with an interest in new fundamentals based on sympoiesis and the enfolding of ecological inputs into form and organization. While first-year design curricula are often driven by abstraction, internal logics, formal processes and a general tendency to foreground autonomous aspects of architecture as a discipline, these features increasingly beg partnerships with inter- or extra-disciplinary operations in order to engage external worlds with environmental agency.",
            session: "ABSTRACT BY DESIGN"
        },

        {
            title: "Jonathan a. scelsa",
            people: "CO-CHAIR OF STEERING COMMITTEE, SCIENTIFIC TRACK COMMITTEE MODERATOR",
            projectTags: "PRODUCTION, URBANISM, INFRASTRUCTURE",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "As an urbanist, Jonathan critically examines the unsustainable models of center-periphery planning that have externalized major services and programs to the hinterlands that forced a massive infrastructural network and a social inequity on the city within the twentieth century. Through speculative project work and scholarly writing, Jonathan explores the potentials of re-invigorating the city with these lost parts informing a collective node-based urbanism towards a more even and equitable density.",
            session: "MONSTROUS INFRASTRUCTURE"
        },

        {
            title: "ARIANE LOURIE HARRISON, PRATT INSTITUTE",
            people: "SCIENTIFIC TRACK COMMITTEE + MODERATOR",
            projectTags: "CONSTRUCTION, ECOLOGY, POST-HUMAN",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "Ariane is a registered architect in New York State and an educator. She is the Coordinator of the Masters of Science programs in Architecture and Urban Design at Pratt GAUD. She was a critic at the Yale School of Architecture from 2006-2017. She received her AB from Princeton (summa), her M.Arch from Columbia GSAPP (excellence in design) and her Ph.D from New York University. ",
            session: "THE CROSS-DISCPLINARY CLIMATE CLASSROOM"
        },

        {
            title: "PARK CARDS",
            people: "Dragana Zoric, Pratt Institute",
            projectTags: "LANDSCAPE, PATTERN, POST-HUMAN",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "Rather than closely aligning with the understanding which clearly delineates disciplinary boundaries and ascribes abstraction solely to landscape.",
            session: "IMAGE EXHIBITION"
        },


        {
            title: "Taking on the Tabula Scripta",
            people: "Nikole Bouchard, University of Wisconsin-Milwaukee",
            projectTags: "MATERIALITY, ADAPTIVE RE-USE, URBANISM",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "“Buildings, like humans, are the products of their generation and their location…Buildings are inevitably formed by both a place and a history. They are brought into existence, they have a youth, a maturity, a senility, a death. Buildings are not fixed things; they change, they grow, they get sick, they die, or, more commonly, they are murdered.",
            session: "MONSTROUS INFRASTRUCTURE"
        },

        {
            title: "Palm-House",
            people: "Brittany Utting, Rice University ; Daniel Jacobs, University of Houston",
            projectTags: "AGRICULTURE, ADAPTIVE RE-USE, WATER",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "PALM-HOUSE is an ongoing research and design project investigating the relationships between natural ecosystems, material commodities, and ecological care. The project takes the form of a speculative design for the Orto Botanico in Padua, Italy, a Medieval garden founded in 1545. Within this walled garden is a palm house protecting Goethe’s Palm, a Mediterranean Palm planted in 1585 that served as the inspiration for Goethe’s The Metamorphosis of Plants. The architecture of this palm house, performing as a protective shelter for a single specimen, can be critically examined as an index of the changing relationship between a living ecosystem and the technical, environmental, and material systems required for its care.",
            session: "MONSTROUS INFRASTRUCTURE"
        },

        {
            title: "CRISISCITY",
            people: "Alex Barker, Pratt Institute",
            projectTags: "AGRICULTURE, ADAPTIVE RE-USE, WATER",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "In the Anthropocene thesis, human activity has affected all ecologic, geologic and biological systems and has eroded the boundary between human and non-human life and between nature and culture, with catastrophic impacts on the Earth that have brought us to a point of climate crisis.  Nature is partly a human creation. As recent texts have argued, the current social and health crises are direct resultants of human actions dating back to the time of Western colonization.",
            session: "MONSTROUS INFRASTRUCTURE"
        },


        {
            title: "CLIMATE AGENCY IN PRACTICE",
            people: "Christoph Korner, Woodbury University",
            projectTags: "PRACTICE, CLIMATE, PEDAGOGY",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "The construction industry is responsible for 40% of global carbon emissions and architecture and other design professions have willingly, or unwillingly, sided with an uneven development that has consequences expanding from food insecurity and nutrient deficiency to imposed displacement due to collapsing ecosystems. Countries and communities that are least responsible are feeling the impact of the decisions made on the opposite side of the world ‐ a trend which will exacerbate in the future as new portions of our shared earth industrialize. As we move out of our current global health emergency and confront the next very real crisis of climate alteration, should architecture’s agenda be to rally forth in action, or can architecture construct a new type of agency in the processes of inaction?",
            session: "PLENARIES"
        },

        {
            title: "Getting Well",
            people: "Christoph Korner, Woodbury University",
            projectTags: "HEALTH, WELLBEING, REPRESENTATION",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "Human safety, health, and comfort are essential parts of our profession, but lack an academic discussion, which makes an integration in the curriculum sometimes challenging. At the same time the traditional output of our students can not represent them in any satisfactory way. How do we draw health and comfort in a floor plan? How do we show safety in a rendering?",
            session: "UNLEARNING ARCHITECTURE"
        },



        //start of cloned data 


        {
            title: "Sympoietic Structures: Enfolding Ecological Inputs into Core-Studio Curricula",
            people: "Jason Vignieri-Beane",
            projectTags: "PRODUCTION, ECOLOGY, WATER",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/Sample_Session1.jpg",
            description: "Sympoietic Structures explores environmental morphology in first-year design studio pedagogy with an interest in new fundamentals based on sympoiesis and the enfolding of ecological inputs into form and organization. While first-year design curricula are often driven by abstraction, internal logics, formal processes and a general tendency to foreground autonomous aspects of architecture as a discipline, these features increasingly beg partnerships with inter- or extra-disciplinary operations in order to engage external worlds with environmental agency.",
            session: "ABSTRACT BY DESIGN"
        },

        {
            title: "Jonathan a. scelsa",
            people: "CO-CHAIR OF STEERING COMMITTEE, SCIENTIFIC TRACK COMMITTEE MODERATOR",
            projectTags: "EARLY-DESIGN, URBANISM, INFRASTRUCTURE",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/Sample_person2.jpg",
            description: "As an urbanist, Jonathan critically examines the unsustainable models of center-periphery planning that have externalized major services and programs to the hinterlands that forced a massive infrastructural network and a social inequity on the city within the twentieth century. Through speculative project work and scholarly writing, Jonathan explores the potentials of re-invigorating the city with these lost parts informing a collective node-based urbanism towards a more even and equitable density.",
            session: "MONSTROUS INFRASTRUCTURE"
        },

        {
            title: "ARIANE LOURIE HARRISON, PRATT INSTITUTE",
            people: "SCIENTIFIC TRACK COMMITTEE + MODERATOR",
            projectTags: "CONSTRUCTION, ECOLOGY, POST-HUMAN",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/Sample_person1.jpg",
            description: "Ariane is a registered architect in New York State and an educator. She is the Coordinator of the Masters of Science programs in Architecture and Urban Design at Pratt GAUD. She was a critic at the Yale School of Architecture from 2006-2017. She received her AB from Princeton (summa), her M.Arch from Columbia GSAPP (excellence in design) and her Ph.D from New York University. ",
            session: "THE CROSS-DISCPLINARY CLIMATE CLASSROOM"
        },

        {
            title: "PARK CARDS",
            people: "Dragana Zoric, Pratt Institute",
            projectTags: "LANDSCAPE, PATTERN, POST-HUMAN",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/Sample_exhibition1.jpg",
            description: "Rather than closely aligning with the understanding which clearly delineates disciplinary boundaries and ascribes abstraction solely to landscape.",
            session: "IMAGE EXHIBITION"
        },


        {
            title: "Taking on the Tabula Scripta",
            people: "Nikole Bouchard, University of Wisconsin-Milwaukee",
            projectTags: "MATERIALITY, ADAPTIVE RE-USE, URBANISM",
            images: [
                "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/Sample_session4.jpg",
                "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/Sample_session41.jpg",
                "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/Sample_session42.jpg",
                "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/Sample_session43.jpg",
                "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/Sample_session44.jpg"
            ],
            description: "“Buildings, like humans, are the products of their generation and their location…Buildings are inevitably formed by both a place and a history. They are brought into existence, they have a youth, a maturity, a senility, a death. Buildings are not fixed things; they change, they grow, they get sick, they die, or, more commonly, they are murdered.",
            session: "MONSTROUS INFRASTRUCTURE"
        },

        {
            title: "Palm-House",
            people: "Brittany Utting, Rice University ; Daniel Jacobs, University of Houston",
            projectTags: "AGRICULTURE, ADAPTIVE RE-USE, WATER",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "PALM-HOUSE is an ongoing research and design project investigating the relationships between natural ecosystems, material commodities, and ecological care. The project takes the form of a speculative design for the Orto Botanico in Padua, Italy, a Medieval garden founded in 1545. Within this walled garden is a palm house protecting Goethe’s Palm, a Mediterranean Palm planted in 1585 that served as the inspiration for Goethe’s The Metamorphosis of Plants. The architecture of this palm house, performing as a protective shelter for a single specimen, can be critically examined as an index of the changing relationship between a living ecosystem and the technical, environmental, and material systems required for its care.",
            session: "MONSTROUS INFRASTRUCTURE"
        },

        {
            title: "CRISISCITY",
            people: "Alex Barker, Pratt Institute",
            projectTags: "AGRICULTURE, ADAPTIVE RE-USE, WATER",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "In the Anthropocene thesis, human activity has affected all ecologic, geologic and biological systems and has eroded the boundary between human and non-human life and between nature and culture, with catastrophic impacts on the Earth that have brought us to a point of climate crisis.  Nature is partly a human creation. As recent texts have argued, the current social and health crises are direct resultants of human actions dating back to the time of Western colonization.",
            session: "MONSTROUS INFRASTRUCTURE"
        },


        {
            title: "CLIMATE AGENCY IN PRACTICE",
            people: "Christoph Korner, Woodbury University",
            projectTags: "PRACTICE, CLIMATE, PEDAGOGY",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "The construction industry is responsible for 40% of global carbon emissions and architecture and other design professions have willingly, or unwillingly, sided with an uneven development that has consequences expanding from food insecurity and nutrient deficiency to imposed displacement due to collapsing ecosystems. Countries and communities that are least responsible are feeling the impact of the decisions made on the opposite side of the world ‐ a trend which will exacerbate in the future as new portions of our shared earth industrialize. As we move out of our current global health emergency and confront the next very real crisis of climate alteration, should architecture’s agenda be to rally forth in action, or can architecture construct a new type of agency in the processes of inaction?",
            session: "PLENARIES"
        },

        {
            title: "Getting Well",
            people: "Christoph Korner, Woodbury University",
            projectTags: "HEALTH, WELLBEING, REPRESENTATION",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "Human safety, health, and comfort are essential parts of our profession, but lack an academic discussion, which makes an integration in the curriculum sometimes challenging. At the same time the traditional output of our students can not represent them in any satisfactory way. How do we draw health and comfort in a floor plan? How do we show safety in a rendering?",
            session: "UNLEARNING ARCHITECTURE"
        },


        {
            title: "Sympoietic Structures: Enfolding Ecological Inputs into Core-Studio Curricula",
            people: "Jason Vignieri-Beane",
            projectTags: "EARLY-DESIGN, ECOLOGY, WATER",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "Sympoietic Structures explores environmental morphology in first-year design studio pedagogy with an interest in new fundamentals based on sympoiesis and the enfolding of ecological inputs into form and organization. While first-year design curricula are often driven by abstraction, internal logics, formal processes and a general tendency to foreground autonomous aspects of architecture as a discipline, these features increasingly beg partnerships with inter- or extra-disciplinary operations in order to engage external worlds with environmental agency.",
            session: "ABSTRACT BY DESIGN"
        },

        {
            title: "Jonathan a. scelsa",
            people: "CO-CHAIR OF STEERING COMMITTEE, SCIENTIFIC TRACK COMMITTEE MODERATOR",
            projectTags: "PRODUCTION, URBANISM, INFRASTRUCTURE",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "As an urbanist, Jonathan critically examines the unsustainable models of center-periphery planning that have externalized major services and programs to the hinterlands that forced a massive infrastructural network and a social inequity on the city within the twentieth century. Through speculative project work and scholarly writing, Jonathan explores the potentials of re-invigorating the city with these lost parts informing a collective node-based urbanism towards a more even and equitable density.",
            session: "MONSTROUS INFRASTRUCTURE"
        },

        {
            title: "ARIANE LOURIE HARRISON, PRATT INSTITUTE",
            people: "SCIENTIFIC TRACK COMMITTEE + MODERATOR",
            projectTags: "CONSTRUCTION, ECOLOGY, POST-HUMAN",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "Ariane is a registered architect in New York State and an educator. She is the Coordinator of the Masters of Science programs in Architecture and Urban Design at Pratt GAUD. She was a critic at the Yale School of Architecture from 2006-2017. She received her AB from Princeton (summa), her M.Arch from Columbia GSAPP (excellence in design) and her Ph.D from New York University. ",
            session: "THE CROSS-DISCPLINARY CLIMATE CLASSROOM"
        },

        {
            title: "PARK CARDS",
            people: "Dragana Zoric, Pratt Institute",
            projectTags: "LANDSCAPE, PATTERN, POST-HUMAN",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "Rather than closely aligning with the understanding which clearly delineates disciplinary boundaries and ascribes abstraction solely to landscape.",
            session: "IMAGE EXHIBITION"
        },


        {
            title: "Taking on the Tabula Scripta",
            people: "Nikole Bouchard, University of Wisconsin-Milwaukee",
            projectTags: "MATERIALITY, ADAPTIVE RE-USE, URBANISM",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "“Buildings, like humans, are the products of their generation and their location…Buildings are inevitably formed by both a place and a history. They are brought into existence, they have a youth, a maturity, a senility, a death. Buildings are not fixed things; they change, they grow, they get sick, they die, or, more commonly, they are murdered.",
            session: "MONSTROUS INFRASTRUCTURE"
        },

        {
            title: "Palm-House",
            people: "Brittany Utting, Rice University ; Daniel Jacobs, University of Houston",
            projectTags: "AGRICULTURE, ADAPTIVE RE-USE, WATER",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "PALM-HOUSE is an ongoing research and design project investigating the relationships between natural ecosystems, material commodities, and ecological care. The project takes the form of a speculative design for the Orto Botanico in Padua, Italy, a Medieval garden founded in 1545. Within this walled garden is a palm house protecting Goethe’s Palm, a Mediterranean Palm planted in 1585 that served as the inspiration for Goethe’s The Metamorphosis of Plants. The architecture of this palm house, performing as a protective shelter for a single specimen, can be critically examined as an index of the changing relationship between a living ecosystem and the technical, environmental, and material systems required for its care.",
            session: "MONSTROUS INFRASTRUCTURE"
        },

        {
            title: "CRISISCITY",
            people: "Alex Barker, Pratt Institute",
            projectTags: "AGRICULTURE, ADAPTIVE RE-USE, WATER",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "In the Anthropocene thesis, human activity has affected all ecologic, geologic and biological systems and has eroded the boundary between human and non-human life and between nature and culture, with catastrophic impacts on the Earth that have brought us to a point of climate crisis.  Nature is partly a human creation. As recent texts have argued, the current social and health crises are direct resultants of human actions dating back to the time of Western colonization.",
            session: "MONSTROUS INFRASTRUCTURE"
        },


        {
            title: "CLIMATE AGENCY IN PRACTICE",
            people: "Christoph Korner, Woodbury University",
            projectTags: "PRACTICE, CLIMATE, PEDAGOGY",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "The construction industry is responsible for 40% of global carbon emissions and architecture and other design professions have willingly, or unwillingly, sided with an uneven development that has consequences expanding from food insecurity and nutrient deficiency to imposed displacement due to collapsing ecosystems. Countries and communities that are least responsible are feeling the impact of the decisions made on the opposite side of the world ‐ a trend which will exacerbate in the future as new portions of our shared earth industrialize. As we move out of our current global health emergency and confront the next very real crisis of climate alteration, should architecture’s agenda be to rally forth in action, or can architecture construct a new type of agency in the processes of inaction?",
            session: "PLENARIES"
        },

        {
            title: "Getting Well",
            people: "Christoph Korner, Woodbury University",
            projectTags: "HEALTH, WELLBEING, REPRESENTATION",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "Human safety, health, and comfort are essential parts of our profession, but lack an academic discussion, which makes an integration in the curriculum sometimes challenging. At the same time the traditional output of our students can not represent them in any satisfactory way. How do we draw health and comfort in a floor plan? How do we show safety in a rendering?",
            session: "UNLEARNING ARCHITECTURE"
        },



        {
            title: "Sympoietic Structures: Enfolding Ecological Inputs into Core-Studio Curricula",
            people: "Jason Vignieri-Beane",
            projectTags: "EARLY-DESIGN, ECOLOGY, WATER",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "Sympoietic Structures explores environmental morphology in first-year design studio pedagogy with an interest in new fundamentals based on sympoiesis and the enfolding of ecological inputs into form and organization. While first-year design curricula are often driven by abstraction, internal logics, formal processes and a general tendency to foreground autonomous aspects of architecture as a discipline, these features increasingly beg partnerships with inter- or extra-disciplinary operations in order to engage external worlds with environmental agency.",
            session: "ABSTRACT BY DESIGN"
        },

        {
            title: "Jonathan a. scelsa",
            people: "CO-CHAIR OF STEERING COMMITTEE, SCIENTIFIC TRACK COMMITTEE MODERATOR",
            projectTags: "PRODUCTION, URBANISM, INFRASTRUCTURE",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "As an urbanist, Jonathan critically examines the unsustainable models of center-periphery planning that have externalized major services and programs to the hinterlands that forced a massive infrastructural network and a social inequity on the city within the twentieth century. Through speculative project work and scholarly writing, Jonathan explores the potentials of re-invigorating the city with these lost parts informing a collective node-based urbanism towards a more even and equitable density.",
            session: "MONSTROUS INFRASTRUCTURE"
        },

        {
            title: "ARIANE LOURIE HARRISON, PRATT INSTITUTE",
            people: "SCIENTIFIC TRACK COMMITTEE + MODERATOR",
            projectTags: "CONSTRUCTION, ECOLOGY, POST-HUMAN",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "Ariane is a registered architect in New York State and an educator. She is the Coordinator of the Masters of Science programs in Architecture and Urban Design at Pratt GAUD. She was a critic at the Yale School of Architecture from 2006-2017. She received her AB from Princeton (summa), her M.Arch from Columbia GSAPP (excellence in design) and her Ph.D from New York University. ",
            session: "THE CROSS-DISCPLINARY CLIMATE CLASSROOM"
        },

        {
            title: "PARK CARDS",
            people: "Dragana Zoric, Pratt Institute",
            projectTags: "LANDSCAPE, PATTERN, POST-HUMAN",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "Rather than closely aligning with the understanding which clearly delineates disciplinary boundaries and ascribes abstraction solely to landscape.",
            session: "IMAGE EXHIBITION"
        },


        {
            title: "Taking on the Tabula Scripta",
            people: "Nikole Bouchard, University of Wisconsin-Milwaukee",
            projectTags: "MATERIALITY, ADAPTIVE RE-USE, URBANISM",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "“Buildings, like humans, are the products of their generation and their location…Buildings are inevitably formed by both a place and a history. They are brought into existence, they have a youth, a maturity, a senility, a death. Buildings are not fixed things; they change, they grow, they get sick, they die, or, more commonly, they are murdered.",
            session: "MONSTROUS INFRASTRUCTURE"
        },

        {
            title: "Palm-House",
            people: "Brittany Utting, Rice University ; Daniel Jacobs, University of Houston",
            projectTags: "AGRICULTURE, ADAPTIVE RE-USE, WATER",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "PALM-HOUSE is an ongoing research and design project investigating the relationships between natural ecosystems, material commodities, and ecological care. The project takes the form of a speculative design for the Orto Botanico in Padua, Italy, a Medieval garden founded in 1545. Within this walled garden is a palm house protecting Goethe’s Palm, a Mediterranean Palm planted in 1585 that served as the inspiration for Goethe’s The Metamorphosis of Plants. The architecture of this palm house, performing as a protective shelter for a single specimen, can be critically examined as an index of the changing relationship between a living ecosystem and the technical, environmental, and material systems required for its care.",
            session: "MONSTROUS INFRASTRUCTURE"
        },

        {
            title: "CRISISCITY",
            people: "Alex Barker, Pratt Institute",
            projectTags: "AGRICULTURE, ADAPTIVE RE-USE, WATER",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "In the Anthropocene thesis, human activity has affected all ecologic, geologic and biological systems and has eroded the boundary between human and non-human life and between nature and culture, with catastrophic impacts on the Earth that have brought us to a point of climate crisis.  Nature is partly a human creation. As recent texts have argued, the current social and health crises are direct resultants of human actions dating back to the time of Western colonization.",
            session: "MONSTROUS INFRASTRUCTURE"
        },


        {
            title: "CLIMATE AGENCY IN PRACTICE",
            people: "Christoph Korner, Woodbury University",
            projectTags: "PRACTICE, CLIMATE, PEDAGOGY",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "The construction industry is responsible for 40% of global carbon emissions and architecture and other design professions have willingly, or unwillingly, sided with an uneven development that has consequences expanding from food insecurity and nutrient deficiency to imposed displacement due to collapsing ecosystems. Countries and communities that are least responsible are feeling the impact of the decisions made on the opposite side of the world ‐ a trend which will exacerbate in the future as new portions of our shared earth industrialize. As we move out of our current global health emergency and confront the next very real crisis of climate alteration, should architecture’s agenda be to rally forth in action, or can architecture construct a new type of agency in the processes of inaction?",
            session: "PLENARIES"
        },

        {
            title: "Getting Well",
            people: "Christoph Korner, Woodbury University",
            projectTags: "HEALTH, WELLBEING, REPRESENTATION",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "Human safety, health, and comfort are essential parts of our profession, but lack an academic discussion, which makes an integration in the curriculum sometimes challenging. At the same time the traditional output of our students can not represent them in any satisfactory way. How do we draw health and comfort in a floor plan? How do we show safety in a rendering?",
            session: "UNLEARNING ARCHITECTURE"
        },



        {
            title: "Sympoietic Structures: Enfolding Ecological Inputs into Core-Studio Curricula",
            people: "Jason Vignieri-Beane",
            projectTags: "EARLY-DESIGN, ECOLOGY, WATER",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "Sympoietic Structures explores environmental morphology in first-year design studio pedagogy with an interest in new fundamentals based on sympoiesis and the enfolding of ecological inputs into form and organization. While first-year design curricula are often driven by abstraction, internal logics, formal processes and a general tendency to foreground autonomous aspects of architecture as a discipline, these features increasingly beg partnerships with inter- or extra-disciplinary operations in order to engage external worlds with environmental agency.",
            session: "ABSTRACT BY DESIGN"
        },

        {
            title: "Jonathan a. scelsa",
            people: "CO-CHAIR OF STEERING COMMITTEE, SCIENTIFIC TRACK COMMITTEE MODERATOR",
            projectTags: "PRODUCTION, URBANISM, INFRASTRUCTURE",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "As an urbanist, Jonathan critically examines the unsustainable models of center-periphery planning that have externalized major services and programs to the hinterlands that forced a massive infrastructural network and a social inequity on the city within the twentieth century. Through speculative project work and scholarly writing, Jonathan explores the potentials of re-invigorating the city with these lost parts informing a collective node-based urbanism towards a more even and equitable density.",
            session: "MONSTROUS INFRASTRUCTURE"
        },

        {
            title: "ARIANE LOURIE HARRISON, PRATT INSTITUTE",
            people: "SCIENTIFIC TRACK COMMITTEE + MODERATOR",
            projectTags: "CONSTRUCTION, ECOLOGY, POST-HUMAN",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "Ariane is a registered architect in New York State and an educator. She is the Coordinator of the Masters of Science programs in Architecture and Urban Design at Pratt GAUD. She was a critic at the Yale School of Architecture from 2006-2017. She received her AB from Princeton (summa), her M.Arch from Columbia GSAPP (excellence in design) and her Ph.D from New York University. ",
            session: "THE CROSS-DISCPLINARY CLIMATE CLASSROOM"
        },

        {
            title: "PARK CARDS",
            people: "Dragana Zoric, Pratt Institute",
            projectTags: "LANDSCAPE, PATTERN, POST-HUMAN",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "Rather than closely aligning with the understanding which clearly delineates disciplinary boundaries and ascribes abstraction solely to landscape.",
            session: "IMAGE EXHIBITION"
        },


        {
            title: "Taking on the Tabula Scripta",
            people: "Nikole Bouchard, University of Wisconsin-Milwaukee",
            projectTags: "MATERIALITY, ADAPTIVE RE-USE, URBANISM",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "“Buildings, like humans, are the products of their generation and their location…Buildings are inevitably formed by both a place and a history. They are brought into existence, they have a youth, a maturity, a senility, a death. Buildings are not fixed things; they change, they grow, they get sick, they die, or, more commonly, they are murdered.",
            session: "MONSTROUS INFRASTRUCTURE"
        },

        {
            title: "Palm-House",
            people: "Brittany Utting, Rice University ; Daniel Jacobs, University of Houston",
            projectTags: "AGRICULTURE, ADAPTIVE RE-USE, WATER",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "PALM-HOUSE is an ongoing research and design project investigating the relationships between natural ecosystems, material commodities, and ecological care. The project takes the form of a speculative design for the Orto Botanico in Padua, Italy, a Medieval garden founded in 1545. Within this walled garden is a palm house protecting Goethe’s Palm, a Mediterranean Palm planted in 1585 that served as the inspiration for Goethe’s The Metamorphosis of Plants. The architecture of this palm house, performing as a protective shelter for a single specimen, can be critically examined as an index of the changing relationship between a living ecosystem and the technical, environmental, and material systems required for its care.",
            session: "MONSTROUS INFRASTRUCTURE"
        },

        {
            title: "CRISISCITY",
            people: "Alex Barker, Pratt Institute",
            projectTags: "AGRICULTURE, ADAPTIVE RE-USE, WATER",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "In the Anthropocene thesis, human activity has affected all ecologic, geologic and biological systems and has eroded the boundary between human and non-human life and between nature and culture, with catastrophic impacts on the Earth that have brought us to a point of climate crisis.  Nature is partly a human creation. As recent texts have argued, the current social and health crises are direct resultants of human actions dating back to the time of Western colonization.",
            session: "MONSTROUS INFRASTRUCTURE"
        },


        {
            title: "CLIMATE AGENCY IN PRACTICE",
            people: "Christoph Korner, Woodbury University",
            projectTags: "PRACTICE, CLIMATE, PEDAGOGY",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "The construction industry is responsible for 40% of global carbon emissions and architecture and other design professions have willingly, or unwillingly, sided with an uneven development that has consequences expanding from food insecurity and nutrient deficiency to imposed displacement due to collapsing ecosystems. Countries and communities that are least responsible are feeling the impact of the decisions made on the opposite side of the world ‐ a trend which will exacerbate in the future as new portions of our shared earth industrialize. As we move out of our current global health emergency and confront the next very real crisis of climate alteration, should architecture’s agenda be to rally forth in action, or can architecture construct a new type of agency in the processes of inaction?",
            session: "PLENARIES"
        },

        {
            title: "Getting Well",
            people: "Christoph Korner, Woodbury University",
            projectTags: "HEALTH, WELLBEING, REPRESENTATION",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "Human safety, health, and comfort are essential parts of our profession, but lack an academic discussion, which makes an integration in the curriculum sometimes challenging. At the same time the traditional output of our students can not represent them in any satisfactory way. How do we draw health and comfort in a floor plan? How do we show safety in a rendering?",
            session: "UNLEARNING ARCHITECTURE"
        },



        {
            title: "Sympoietic Structures: Enfolding Ecological Inputs into Core-Studio Curricula",
            people: "Jason Vignieri-Beane",
            projectTags: "EARLY-DESIGN, ECOLOGY, WATER",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "Sympoietic Structures explores environmental morphology in first-year design studio pedagogy with an interest in new fundamentals based on sympoiesis and the enfolding of ecological inputs into form and organization. While first-year design curricula are often driven by abstraction, internal logics, formal processes and a general tendency to foreground autonomous aspects of architecture as a discipline, these features increasingly beg partnerships with inter- or extra-disciplinary operations in order to engage external worlds with environmental agency.",
            session: "ABSTRACT BY DESIGN"
        },

        {
            title: "Jonathan a. scelsa",
            people: "CO-CHAIR OF STEERING COMMITTEE, SCIENTIFIC TRACK COMMITTEE MODERATOR",
            projectTags: "PRODUCTION, URBANISM, INFRASTRUCTURE",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "As an urbanist, Jonathan critically examines the unsustainable models of center-periphery planning that have externalized major services and programs to the hinterlands that forced a massive infrastructural network and a social inequity on the city within the twentieth century. Through speculative project work and scholarly writing, Jonathan explores the potentials of re-invigorating the city with these lost parts informing a collective node-based urbanism towards a more even and equitable density.",
            session: "MONSTROUS INFRASTRUCTURE"
        },

        {
            title: "ARIANE LOURIE HARRISON, PRATT INSTITUTE",
            people: "SCIENTIFIC TRACK COMMITTEE + MODERATOR",
            projectTags: "CONSTRUCTION, ECOLOGY, POST-HUMAN",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "Ariane is a registered architect in New York State and an educator. She is the Coordinator of the Masters of Science programs in Architecture and Urban Design at Pratt GAUD. She was a critic at the Yale School of Architecture from 2006-2017. She received her AB from Princeton (summa), her M.Arch from Columbia GSAPP (excellence in design) and her Ph.D from New York University. ",
            session: "THE CROSS-DISCPLINARY CLIMATE CLASSROOM"
        },

        {
            title: "PARK CARDS",
            people: "Dragana Zoric, Pratt Institute",
            projectTags: "LANDSCAPE, PATTERN, POST-HUMAN",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "Rather than closely aligning with the understanding which clearly delineates disciplinary boundaries and ascribes abstraction solely to landscape.",
            session: "IMAGE EXHIBITION"
        },


        {
            title: "Taking on the Tabula Scripta",
            people: "Nikole Bouchard, University of Wisconsin-Milwaukee",
            projectTags: "MATERIALITY, ADAPTIVE RE-USE, URBANISM",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "“Buildings, like humans, are the products of their generation and their location…Buildings are inevitably formed by both a place and a history. They are brought into existence, they have a youth, a maturity, a senility, a death. Buildings are not fixed things; they change, they grow, they get sick, they die, or, more commonly, they are murdered.",
            session: "MONSTROUS INFRASTRUCTURE"
        },

        {
            title: "Palm-House",
            people: "Brittany Utting, Rice University ; Daniel Jacobs, University of Houston",
            projectTags: "AGRICULTURE, ADAPTIVE RE-USE, WATER",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "PALM-HOUSE is an ongoing research and design project investigating the relationships between natural ecosystems, material commodities, and ecological care. The project takes the form of a speculative design for the Orto Botanico in Padua, Italy, a Medieval garden founded in 1545. Within this walled garden is a palm house protecting Goethe’s Palm, a Mediterranean Palm planted in 1585 that served as the inspiration for Goethe’s The Metamorphosis of Plants. The architecture of this palm house, performing as a protective shelter for a single specimen, can be critically examined as an index of the changing relationship between a living ecosystem and the technical, environmental, and material systems required for its care.",
            session: "MONSTROUS INFRASTRUCTURE"
        },

        {
            title: "CRISISCITY",
            people: "Alex Barker, Pratt Institute",
            projectTags: "AGRICULTURE, ADAPTIVE RE-USE, WATER",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "In the Anthropocene thesis, human activity has affected all ecologic, geologic and biological systems and has eroded the boundary between human and non-human life and between nature and culture, with catastrophic impacts on the Earth that have brought us to a point of climate crisis.  Nature is partly a human creation. As recent texts have argued, the current social and health crises are direct resultants of human actions dating back to the time of Western colonization.",
            session: "MONSTROUS INFRASTRUCTURE"
        },


        {
            title: "CLIMATE AGENCY IN PRACTICE",
            people: "Christoph Korner, Woodbury University",
            projectTags: "PRACTICE, CLIMATE, PEDAGOGY",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "The construction industry is responsible for 40% of global carbon emissions and architecture and other design professions have willingly, or unwillingly, sided with an uneven development that has consequences expanding from food insecurity and nutrient deficiency to imposed displacement due to collapsing ecosystems. Countries and communities that are least responsible are feeling the impact of the decisions made on the opposite side of the world ‐ a trend which will exacerbate in the future as new portions of our shared earth industrialize. As we move out of our current global health emergency and confront the next very real crisis of climate alteration, should architecture’s agenda be to rally forth in action, or can architecture construct a new type of agency in the processes of inaction?",
            session: "PLENARIES"
        },

        {
            title: "Getting Well",
            people: "Christoph Korner, Woodbury University",
            projectTags: "HEALTH, WELLBEING, REPRESENTATION",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "Human safety, health, and comfort are essential parts of our profession, but lack an academic discussion, which makes an integration in the curriculum sometimes challenging. At the same time the traditional output of our students can not represent them in any satisfactory way. How do we draw health and comfort in a floor plan? How do we show safety in a rendering?",
            session: "UNLEARNING ARCHITECTURE"
        },



        {
            title: "Sympoietic Structures: Enfolding Ecological Inputs into Core-Studio Curricula",
            people: "Jason Vignieri-Beane",
            projectTags: "EARLY-DESIGN, ECOLOGY, WATER",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "Sympoietic Structures explores environmental morphology in first-year design studio pedagogy with an interest in new fundamentals based on sympoiesis and the enfolding of ecological inputs into form and organization. While first-year design curricula are often driven by abstraction, internal logics, formal processes and a general tendency to foreground autonomous aspects of architecture as a discipline, these features increasingly beg partnerships with inter- or extra-disciplinary operations in order to engage external worlds with environmental agency.",
            session: "ABSTRACT BY DESIGN"
        },

        {
            title: "Jonathan a. scelsa",
            people: "CO-CHAIR OF STEERING COMMITTEE, SCIENTIFIC TRACK COMMITTEE MODERATOR",
            projectTags: "PRODUCTION, URBANISM, INFRASTRUCTURE",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "As an urbanist, Jonathan critically examines the unsustainable models of center-periphery planning that have externalized major services and programs to the hinterlands that forced a massive infrastructural network and a social inequity on the city within the twentieth century. Through speculative project work and scholarly writing, Jonathan explores the potentials of re-invigorating the city with these lost parts informing a collective node-based urbanism towards a more even and equitable density.",
            session: "MONSTROUS INFRASTRUCTURE"
        },

        {
            title: "ARIANE LOURIE HARRISON, PRATT INSTITUTE",
            people: "SCIENTIFIC TRACK COMMITTEE + MODERATOR",
            projectTags: "CONSTRUCTION, ECOLOGY, POST-HUMAN",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "Ariane is a registered architect in New York State and an educator. She is the Coordinator of the Masters of Science programs in Architecture and Urban Design at Pratt GAUD. She was a critic at the Yale School of Architecture from 2006-2017. She received her AB from Princeton (summa), her M.Arch from Columbia GSAPP (excellence in design) and her Ph.D from New York University. ",
            session: "THE CROSS-DISCPLINARY CLIMATE CLASSROOM"
        },

        {
            title: "PARK CARDS",
            people: "Dragana Zoric, Pratt Institute",
            projectTags: "LANDSCAPE, PATTERN, POST-HUMAN",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "Rather than closely aligning with the understanding which clearly delineates disciplinary boundaries and ascribes abstraction solely to landscape.",
            session: "IMAGE EXHIBITION"
        },


        {
            title: "Taking on the Tabula Scripta",
            people: "Nikole Bouchard, University of Wisconsin-Milwaukee",
            projectTags: "MATERIALITY, ADAPTIVE RE-USE, URBANISM",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "“Buildings, like humans, are the products of their generation and their location…Buildings are inevitably formed by both a place and a history. They are brought into existence, they have a youth, a maturity, a senility, a death. Buildings are not fixed things; they change, they grow, they get sick, they die, or, more commonly, they are murdered.",
            session: "MONSTROUS INFRASTRUCTURE"
        },

        {
            title: "Palm-House",
            people: "Brittany Utting, Rice University ; Daniel Jacobs, University of Houston",
            projectTags: "AGRICULTURE, ADAPTIVE RE-USE, WATER",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "PALM-HOUSE is an ongoing research and design project investigating the relationships between natural ecosystems, material commodities, and ecological care. The project takes the form of a speculative design for the Orto Botanico in Padua, Italy, a Medieval garden founded in 1545. Within this walled garden is a palm house protecting Goethe’s Palm, a Mediterranean Palm planted in 1585 that served as the inspiration for Goethe’s The Metamorphosis of Plants. The architecture of this palm house, performing as a protective shelter for a single specimen, can be critically examined as an index of the changing relationship between a living ecosystem and the technical, environmental, and material systems required for its care.",
            session: "MONSTROUS INFRASTRUCTURE"
        },

        {
            title: "CRISISCITY",
            people: "Alex Barker, Pratt Institute",
            projectTags: "AGRICULTURE, ADAPTIVE RE-USE, WATER",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "In the Anthropocene thesis, human activity has affected all ecologic, geologic and biological systems and has eroded the boundary between human and non-human life and between nature and culture, with catastrophic impacts on the Earth that have brought us to a point of climate crisis.  Nature is partly a human creation. As recent texts have argued, the current social and health crises are direct resultants of human actions dating back to the time of Western colonization.",
            session: "MONSTROUS INFRASTRUCTURE"
        },


        {
            title: "CLIMATE AGENCY IN PRACTICE",
            people: "Christoph Korner, Woodbury University",
            projectTags: "PRACTICE, CLIMATE, PEDAGOGY",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "The construction industry is responsible for 40% of global carbon emissions and architecture and other design professions have willingly, or unwillingly, sided with an uneven development that has consequences expanding from food insecurity and nutrient deficiency to imposed displacement due to collapsing ecosystems. Countries and communities that are least responsible are feeling the impact of the decisions made on the opposite side of the world ‐ a trend which will exacerbate in the future as new portions of our shared earth industrialize. As we move out of our current global health emergency and confront the next very real crisis of climate alteration, should architecture’s agenda be to rally forth in action, or can architecture construct a new type of agency in the processes of inaction?",
            session: "PLENARIES"
        },

        {
            title: "Getting Well",
            people: "Christoph Korner, Woodbury University",
            projectTags: "HEALTH, WELLBEING, REPRESENTATION",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "Human safety, health, and comfort are essential parts of our profession, but lack an academic discussion, which makes an integration in the curriculum sometimes challenging. At the same time the traditional output of our students can not represent them in any satisfactory way. How do we draw health and comfort in a floor plan? How do we show safety in a rendering?",
            session: "UNLEARNING ARCHITECTURE"
        },



        {
            title: "Sympoietic Structures: Enfolding Ecological Inputs into Core-Studio Curricula",
            people: "Jason Vignieri-Beane",
            projectTags: "EARLY-DESIGN, ECOLOGY, WATER",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "Sympoietic Structures explores environmental morphology in first-year design studio pedagogy with an interest in new fundamentals based on sympoiesis and the enfolding of ecological inputs into form and organization. While first-year design curricula are often driven by abstraction, internal logics, formal processes and a general tendency to foreground autonomous aspects of architecture as a discipline, these features increasingly beg partnerships with inter- or extra-disciplinary operations in order to engage external worlds with environmental agency.",
            session: "ABSTRACT BY DESIGN"
        },

        {
            title: "Jonathan a. scelsa",
            people: "CO-CHAIR OF STEERING COMMITTEE, SCIENTIFIC TRACK COMMITTEE MODERATOR",
            projectTags: "PRODUCTION, URBANISM, INFRASTRUCTURE",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "As an urbanist, Jonathan critically examines the unsustainable models of center-periphery planning that have externalized major services and programs to the hinterlands that forced a massive infrastructural network and a social inequity on the city within the twentieth century. Through speculative project work and scholarly writing, Jonathan explores the potentials of re-invigorating the city with these lost parts informing a collective node-based urbanism towards a more even and equitable density.",
            session: "MONSTROUS INFRASTRUCTURE"
        },

        {
            title: "ARIANE LOURIE HARRISON, PRATT INSTITUTE",
            people: "SCIENTIFIC TRACK COMMITTEE + MODERATOR",
            projectTags: "CONSTRUCTION, ECOLOGY, POST-HUMAN",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "Ariane is a registered architect in New York State and an educator. She is the Coordinator of the Masters of Science programs in Architecture and Urban Design at Pratt GAUD. She was a critic at the Yale School of Architecture from 2006-2017. She received her AB from Princeton (summa), her M.Arch from Columbia GSAPP (excellence in design) and her Ph.D from New York University. ",
            session: "THE CROSS-DISCPLINARY CLIMATE CLASSROOM"
        },

        {
            title: "PARK CARDS",
            people: "Dragana Zoric, Pratt Institute",
            projectTags: "LANDSCAPE, PATTERN, POST-HUMAN",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "Rather than closely aligning with the understanding which clearly delineates disciplinary boundaries and ascribes abstraction solely to landscape.",
            session: "IMAGE EXHIBITION"
        },


        {
            title: "Taking on the Tabula Scripta",
            people: "Nikole Bouchard, University of Wisconsin-Milwaukee",
            projectTags: "MATERIALITY, ADAPTIVE RE-USE, URBANISM",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "“Buildings, like humans, are the products of their generation and their location…Buildings are inevitably formed by both a place and a history. They are brought into existence, they have a youth, a maturity, a senility, a death. Buildings are not fixed things; they change, they grow, they get sick, they die, or, more commonly, they are murdered.",
            session: "MONSTROUS INFRASTRUCTURE"
        },

        {
            title: "Palm-House",
            people: "Brittany Utting, Rice University ; Daniel Jacobs, University of Houston",
            projectTags: "AGRICULTURE, ADAPTIVE RE-USE, WATER",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "PALM-HOUSE is an ongoing research and design project investigating the relationships between natural ecosystems, material commodities, and ecological care. The project takes the form of a speculative design for the Orto Botanico in Padua, Italy, a Medieval garden founded in 1545. Within this walled garden is a palm house protecting Goethe’s Palm, a Mediterranean Palm planted in 1585 that served as the inspiration for Goethe’s The Metamorphosis of Plants. The architecture of this palm house, performing as a protective shelter for a single specimen, can be critically examined as an index of the changing relationship between a living ecosystem and the technical, environmental, and material systems required for its care.",
            session: "MONSTROUS INFRASTRUCTURE"
        },

        {
            title: "CRISISCITY",
            people: "Alex Barker, Pratt Institute",
            projectTags: "AGRICULTURE, ADAPTIVE RE-USE, WATER",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "In the Anthropocene thesis, human activity has affected all ecologic, geologic and biological systems and has eroded the boundary between human and non-human life and between nature and culture, with catastrophic impacts on the Earth that have brought us to a point of climate crisis.  Nature is partly a human creation. As recent texts have argued, the current social and health crises are direct resultants of human actions dating back to the time of Western colonization.",
            session: "MONSTROUS INFRASTRUCTURE"
        },


        {
            title: "CLIMATE AGENCY IN PRACTICE",
            people: "Christoph Korner, Woodbury University",
            projectTags: "PRACTICE, CLIMATE, PEDAGOGY",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "The construction industry is responsible for 40% of global carbon emissions and architecture and other design professions have willingly, or unwillingly, sided with an uneven development that has consequences expanding from food insecurity and nutrient deficiency to imposed displacement due to collapsing ecosystems. Countries and communities that are least responsible are feeling the impact of the decisions made on the opposite side of the world ‐ a trend which will exacerbate in the future as new portions of our shared earth industrialize. As we move out of our current global health emergency and confront the next very real crisis of climate alteration, should architecture’s agenda be to rally forth in action, or can architecture construct a new type of agency in the processes of inaction?",
            session: "PLENARIES"
        },

        {
            title: "Getting Well",
            people: "Christoph Korner, Woodbury University",
            projectTags: "HEALTH, WELLBEING, REPRESENTATION",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "Human safety, health, and comfort are essential parts of our profession, but lack an academic discussion, which makes an integration in the curriculum sometimes challenging. At the same time the traditional output of our students can not represent them in any satisfactory way. How do we draw health and comfort in a floor plan? How do we show safety in a rendering?",
            session: "UNLEARNING ARCHITECTURE"
        },



        {
            title: "Sympoietic Structures: Enfolding Ecological Inputs into Core-Studio Curricula",
            people: "Jason Vignieri-Beane",
            projectTags: "EARLY-DESIGN, ECOLOGY, WATER",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "Sympoietic Structures explores environmental morphology in first-year design studio pedagogy with an interest in new fundamentals based on sympoiesis and the enfolding of ecological inputs into form and organization. While first-year design curricula are often driven by abstraction, internal logics, formal processes and a general tendency to foreground autonomous aspects of architecture as a discipline, these features increasingly beg partnerships with inter- or extra-disciplinary operations in order to engage external worlds with environmental agency.",
            session: "ABSTRACT BY DESIGN"
        },

        {
            title: "Jonathan a. scelsa",
            people: "CO-CHAIR OF STEERING COMMITTEE, SCIENTIFIC TRACK COMMITTEE MODERATOR",
            projectTags: "PRODUCTION, URBANISM, INFRASTRUCTURE",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "As an urbanist, Jonathan critically examines the unsustainable models of center-periphery planning that have externalized major services and programs to the hinterlands that forced a massive infrastructural network and a social inequity on the city within the twentieth century. Through speculative project work and scholarly writing, Jonathan explores the potentials of re-invigorating the city with these lost parts informing a collective node-based urbanism towards a more even and equitable density.",
            session: "MONSTROUS INFRASTRUCTURE"
        },

        {
            title: "ARIANE LOURIE HARRISON, PRATT INSTITUTE",
            people: "SCIENTIFIC TRACK COMMITTEE + MODERATOR",
            projectTags: "CONSTRUCTION, ECOLOGY, POST-HUMAN",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "Ariane is a registered architect in New York State and an educator. She is the Coordinator of the Masters of Science programs in Architecture and Urban Design at Pratt GAUD. She was a critic at the Yale School of Architecture from 2006-2017. She received her AB from Princeton (summa), her M.Arch from Columbia GSAPP (excellence in design) and her Ph.D from New York University. ",
            session: "THE CROSS-DISCPLINARY CLIMATE CLASSROOM"
        },

        {
            title: "PARK CARDS",
            people: "Dragana Zoric, Pratt Institute",
            projectTags: "LANDSCAPE, PATTERN, POST-HUMAN",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "Rather than closely aligning with the understanding which clearly delineates disciplinary boundaries and ascribes abstraction solely to landscape.",
            session: "IMAGE EXHIBITION"
        },


        {
            title: "Taking on the Tabula Scripta",
            people: "Nikole Bouchard, University of Wisconsin-Milwaukee",
            projectTags: "MATERIALITY, ADAPTIVE RE-USE, URBANISM",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "“Buildings, like humans, are the products of their generation and their location…Buildings are inevitably formed by both a place and a history. They are brought into existence, they have a youth, a maturity, a senility, a death. Buildings are not fixed things; they change, they grow, they get sick, they die, or, more commonly, they are murdered.",
            session: "MONSTROUS INFRASTRUCTURE"
        },

        {
            title: "Palm-House",
            people: "Brittany Utting, Rice University ; Daniel Jacobs, University of Houston",
            projectTags: "AGRICULTURE, ADAPTIVE RE-USE, WATER",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "PALM-HOUSE is an ongoing research and design project investigating the relationships between natural ecosystems, material commodities, and ecological care. The project takes the form of a speculative design for the Orto Botanico in Padua, Italy, a Medieval garden founded in 1545. Within this walled garden is a palm house protecting Goethe’s Palm, a Mediterranean Palm planted in 1585 that served as the inspiration for Goethe’s The Metamorphosis of Plants. The architecture of this palm house, performing as a protective shelter for a single specimen, can be critically examined as an index of the changing relationship between a living ecosystem and the technical, environmental, and material systems required for its care.",
            session: "MONSTROUS INFRASTRUCTURE"
        },

        {
            title: "CRISISCITY",
            people: "Alex Barker, Pratt Institute",
            projectTags: "AGRICULTURE, ADAPTIVE RE-USE, WATER",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "In the Anthropocene thesis, human activity has affected all ecologic, geologic and biological systems and has eroded the boundary between human and non-human life and between nature and culture, with catastrophic impacts on the Earth that have brought us to a point of climate crisis.  Nature is partly a human creation. As recent texts have argued, the current social and health crises are direct resultants of human actions dating back to the time of Western colonization.",
            session: "MONSTROUS INFRASTRUCTURE"
        },


        {
            title: "CLIMATE AGENCY IN PRACTICE",
            people: "Christoph Korner, Woodbury University",
            projectTags: "PRACTICE, CLIMATE, PEDAGOGY",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "The construction industry is responsible for 40% of global carbon emissions and architecture and other design professions have willingly, or unwillingly, sided with an uneven development that has consequences expanding from food insecurity and nutrient deficiency to imposed displacement due to collapsing ecosystems. Countries and communities that are least responsible are feeling the impact of the decisions made on the opposite side of the world ‐ a trend which will exacerbate in the future as new portions of our shared earth industrialize. As we move out of our current global health emergency and confront the next very real crisis of climate alteration, should architecture’s agenda be to rally forth in action, or can architecture construct a new type of agency in the processes of inaction?",
            session: "PLENARIES"
        },

        {
            title: "Getting Well",
            people: "Christoph Korner, Woodbury University",
            projectTags: "HEALTH, WELLBEING, REPRESENTATION",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "Human safety, health, and comfort are essential parts of our profession, but lack an academic discussion, which makes an integration in the curriculum sometimes challenging. At the same time the traditional output of our students can not represent them in any satisfactory way. How do we draw health and comfort in a floor plan? How do we show safety in a rendering?",
            session: "UNLEARNING ARCHITECTURE"
        },



        {
            title: "Sympoietic Structures: Enfolding Ecological Inputs into Core-Studio Curricula",
            people: "Jason Vignieri-Beane",
            projectTags: "EARLY-DESIGN, ECOLOGY, WATER",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "Sympoietic Structures explores environmental morphology in first-year design studio pedagogy with an interest in new fundamentals based on sympoiesis and the enfolding of ecological inputs into form and organization. While first-year design curricula are often driven by abstraction, internal logics, formal processes and a general tendency to foreground autonomous aspects of architecture as a discipline, these features increasingly beg partnerships with inter- or extra-disciplinary operations in order to engage external worlds with environmental agency.",
            session: "ABSTRACT BY DESIGN"
        },

        {
            title: "Jonathan a. scelsa",
            people: "CO-CHAIR OF STEERING COMMITTEE, SCIENTIFIC TRACK COMMITTEE MODERATOR",
            projectTags: "PRODUCTION, URBANISM, INFRASTRUCTURE",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "As an urbanist, Jonathan critically examines the unsustainable models of center-periphery planning that have externalized major services and programs to the hinterlands that forced a massive infrastructural network and a social inequity on the city within the twentieth century. Through speculative project work and scholarly writing, Jonathan explores the potentials of re-invigorating the city with these lost parts informing a collective node-based urbanism towards a more even and equitable density.",
            session: "MONSTROUS INFRASTRUCTURE"
        },

        {
            title: "ARIANE LOURIE HARRISON, PRATT INSTITUTE",
            people: "SCIENTIFIC TRACK COMMITTEE + MODERATOR",
            projectTags: "CONSTRUCTION, ECOLOGY, POST-HUMAN",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "Ariane is a registered architect in New York State and an educator. She is the Coordinator of the Masters of Science programs in Architecture and Urban Design at Pratt GAUD. She was a critic at the Yale School of Architecture from 2006-2017. She received her AB from Princeton (summa), her M.Arch from Columbia GSAPP (excellence in design) and her Ph.D from New York University. ",
            session: "THE CROSS-DISCPLINARY CLIMATE CLASSROOM"
        },

        {
            title: "PARK CARDS",
            people: "Dragana Zoric, Pratt Institute",
            projectTags: "LANDSCAPE, PATTERN, POST-HUMAN",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "Rather than closely aligning with the understanding which clearly delineates disciplinary boundaries and ascribes abstraction solely to landscape.",
            session: "IMAGE EXHIBITION"
        },


        {
            title: "Taking on the Tabula Scripta",
            people: "Nikole Bouchard, University of Wisconsin-Milwaukee",
            projectTags: "MATERIALITY, ADAPTIVE RE-USE, URBANISM",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "“Buildings, like humans, are the products of their generation and their location…Buildings are inevitably formed by both a place and a history. They are brought into existence, they have a youth, a maturity, a senility, a death. Buildings are not fixed things; they change, they grow, they get sick, they die, or, more commonly, they are murdered.",
            session: "MONSTROUS INFRASTRUCTURE"
        },

        {
            title: "Palm-House",
            people: "Brittany Utting, Rice University ; Daniel Jacobs, University of Houston",
            projectTags: "AGRICULTURE, ADAPTIVE RE-USE, WATER",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "PALM-HOUSE is an ongoing research and design project investigating the relationships between natural ecosystems, material commodities, and ecological care. The project takes the form of a speculative design for the Orto Botanico in Padua, Italy, a Medieval garden founded in 1545. Within this walled garden is a palm house protecting Goethe’s Palm, a Mediterranean Palm planted in 1585 that served as the inspiration for Goethe’s The Metamorphosis of Plants. The architecture of this palm house, performing as a protective shelter for a single specimen, can be critically examined as an index of the changing relationship between a living ecosystem and the technical, environmental, and material systems required for its care.",
            session: "MONSTROUS INFRASTRUCTURE"
        },

        {
            title: "CRISISCITY",
            people: "Alex Barker, Pratt Institute",
            projectTags: "AGRICULTURE, ADAPTIVE RE-USE, WATER",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "In the Anthropocene thesis, human activity has affected all ecologic, geologic and biological systems and has eroded the boundary between human and non-human life and between nature and culture, with catastrophic impacts on the Earth that have brought us to a point of climate crisis.  Nature is partly a human creation. As recent texts have argued, the current social and health crises are direct resultants of human actions dating back to the time of Western colonization.",
            session: "MONSTROUS INFRASTRUCTURE"
        },


        {
            title: "CLIMATE AGENCY IN PRACTICE",
            people: "Christoph Korner, Woodbury University",
            projectTags: "PRACTICE, CLIMATE, PEDAGOGY",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "The construction industry is responsible for 40% of global carbon emissions and architecture and other design professions have willingly, or unwillingly, sided with an uneven development that has consequences expanding from food insecurity and nutrient deficiency to imposed displacement due to collapsing ecosystems. Countries and communities that are least responsible are feeling the impact of the decisions made on the opposite side of the world ‐ a trend which will exacerbate in the future as new portions of our shared earth industrialize. As we move out of our current global health emergency and confront the next very real crisis of climate alteration, should architecture’s agenda be to rally forth in action, or can architecture construct a new type of agency in the processes of inaction?",
            session: "PLENARIES"
        },

        {
            title: "Getting Well",
            people: "Christoph Korner, Woodbury University",
            projectTags: "HEALTH, WELLBEING, REPRESENTATION",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/",
            description: "Human safety, health, and comfort are essential parts of our profession, but lack an academic discussion, which makes an integration in the curriculum sometimes challenging. At the same time the traditional output of our students can not represent them in any satisfactory way. How do we draw health and comfort in a floor plan? How do we show safety in a rendering?",
            session: "UNLEARNING ARCHITECTURE"
        }
    ];

    var processProjects = function () {
        projects.forEach(function (project) {
            project.tags = project.projectTags.toUpperCase().split(",").map(tag => $.trim(tag));
        });
    }

    return {
        init: init,
        projects: projects
    };
})();