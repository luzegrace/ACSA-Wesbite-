var dataModule = (function () {
    /*project: {
	title: "",
	description: "",
	tags: ["", ""]
	people: [{
		role: "", // primary, collaborator
		firstName: ""
		lastName: ""
		honorific: ""
	}],
	images: [{
		url: "",
		title: ""
	}],
	links: [{
		url: "",
		title: "",
		description: ""
	}],
	session: "",
	exhibition: "",
	event: "",
	plenary: ""
    }*/

    var projects = [
        { title: "project 1", description: "Phasellus sit amet erat.", tags: ["human-resource", "Yellow", "Fucun"], image: "http://dummyimage.com/247x100.png/dddddd/000000, http://dummyimage.com/185x100.png/dddddd/000000" },
       
        //example data 


          { title: "Sympoietic Structures: Enfolding Ecological Inputs into Core-Studio Curricula", 
            people: "Jason Vignieri-Beane", 
            tags: ["EARLY-DESIGN, ECOLOGY, WATER"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/Sample_Session1.jpg" ,
            description: "Sympoietic Structures explores environmental morphology in first-year design studio pedagogy with an interest in new fundamentals based on sympoiesis and the enfolding of ecological inputs into form and organization. While first-year design curricula are often driven by abstraction, internal logics, formal processes and a general tendency to foreground autonomous aspects of architecture as a discipline, these features increasingly beg partnerships with inter- or extra-disciplinary operations in order to engage external worlds with environmental agency.",
            session: "ABSTRACT BY DESIGN"
        },

           { title: "Jonathan a. scelsa", 
            people: "CO-CHAIR OF STEERING COMMITTEE, SCIENTIFIC TRACK COMMITTEE MODERATOR", 
            tags: ["PRODUCTION, URBANISM, INFRASTRUCTURE"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "As an urbanist, Jonathan critically examines the unsustainable models of center-periphery planning that have externalized major services and programs to the hinterlands that forced a massive infrastructural network and a social inequity on the city within the twentieth century. Through speculative project work and scholarly writing, Jonathan explores the potentials of re-invigorating the city with these lost parts informing a collective node-based urbanism towards a more even and equitable density.",
            session: "MONSTROUS INFRASTRUCTURE"
        },

           { title: "ARIANE LOURIE HARRISON, PRATT INSTITUTE", 
            people: "SCIENTIFIC TRACK COMMITTEE + MODERATOR", 
            tags: ["CONSTRUCTION, ECOLOGY, POST-HUMAN"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "Ariane is a registered architect in New York State and an educator. She is the Coordinator of the Masters of Science programs in Architecture and Urban Design at Pratt GAUD. She was a critic at the Yale School of Architecture from 2006-2017. She received her AB from Princeton (summa), her M.Arch from Columbia GSAPP (excellence in design) and her Ph.D from New York University. ",
            session: "THE CROSS-DISCPLINARY CLIMATE CLASSROOM"
        },

        { title: "PARK CARDS", 
            people: "Dragana Zoric, Pratt Institute", 
            tags: ["LANDSCAPE, PATTERN, POST-HUMAN"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "Rather than closely aligning with the understanding which clearly delineates disciplinary boundaries and ascribes abstraction solely to landscape.",
            session: "IMAGE EXHIBITION"
        },


           { title: "Taking on the Tabula Scripta", 
            people: "Nikole Bouchard, University of Wisconsin-Milwaukee", 
            tags: ["MATERIALITY, ADAPTIVE RE-USE, URBANISM"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "“Buildings, like humans, are the products of their generation and their location…Buildings are inevitably formed by both a place and a history. They are brought into existence, they have a youth, a maturity, a senility, a death. Buildings are not fixed things; they change, they grow, they get sick, they die, or, more commonly, they are murdered.",
            session: "MONSTROUS INFRASTRUCTURE"
        },

           { title: "Palm-House", 
            people: "Brittany Utting, Rice University ; Daniel Jacobs, University of Houston", 
            tags: ["AGRICULTURE, ADAPTIVE RE-USE, WATER"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "PALM-HOUSE is an ongoing research and design project investigating the relationships between natural ecosystems, material commodities, and ecological care. The project takes the form of a speculative design for the Orto Botanico in Padua, Italy, a Medieval garden founded in 1545. Within this walled garden is a palm house protecting Goethe’s Palm, a Mediterranean Palm planted in 1585 that served as the inspiration for Goethe’s The Metamorphosis of Plants. The architecture of this palm house, performing as a protective shelter for a single specimen, can be critically examined as an index of the changing relationship between a living ecosystem and the technical, environmental, and material systems required for its care.",
            session: "MONSTROUS INFRASTRUCTURE"
        },
        
        { title: "CRISISCITY", 
            people: "Alex Barker, Pratt Institute", 
            tags: ["AGRICULTURE, ADAPTIVE RE-USE, WATER"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "In the Anthropocene thesis, human activity has affected all ecologic, geologic and biological systems and has eroded the boundary between human and non-human life and between nature and culture, with catastrophic impacts on the Earth that have brought us to a point of climate crisis.  Nature is partly a human creation. As recent texts have argued, the current social and health crises are direct resultants of human actions dating back to the time of Western colonization.",
            session: "MONSTROUS INFRASTRUCTURE"
        },


           { title: "CLIMATE AGENCY IN PRACTICE", 
            people: "Christoph Korner, Woodbury University", 
            tags: ["PRACTICE, CLIMATE, PEDAGOGY"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "The construction industry is responsible for 40% of global carbon emissions and architecture and other design professions have willingly, or unwillingly, sided with an uneven development that has consequences expanding from food insecurity and nutrient deficiency to imposed displacement due to collapsing ecosystems. Countries and communities that are least responsible are feeling the impact of the decisions made on the opposite side of the world ‐ a trend which will exacerbate in the future as new portions of our shared earth industrialize. As we move out of our current global health emergency and confront the next very real crisis of climate alteration, should architecture’s agenda be to rally forth in action, or can architecture construct a new type of agency in the processes of inaction?",
            session: "PLENARIES"
        },

           { title: "Getting Well", 
            people: "Christoph Korner, Woodbury University", 
            tags: ["HEALTH, WELLBEING, REPRESENTATION"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "Human safety, health, and comfort are essential parts of our profession, but lack an academic discussion, which makes an integration in the curriculum sometimes challenging. At the same time the traditional output of our students can not represent them in any satisfactory way. How do we draw health and comfort in a floor plan? How do we show safety in a rendering?",
            session: "UNLEARNING ARCHITECTURE"
        },
        


//start of cloned data 


          { title: "Sympoietic Structures: Enfolding Ecological Inputs into Core-Studio Curricula", 
            people: "Jason Vignieri-Beane", 
            tags: ["EARLY-DESIGN, ECOLOGY, WATER"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/Sample_Session1.jpg" ,
            description: "Sympoietic Structures explores environmental morphology in first-year design studio pedagogy with an interest in new fundamentals based on sympoiesis and the enfolding of ecological inputs into form and organization. While first-year design curricula are often driven by abstraction, internal logics, formal processes and a general tendency to foreground autonomous aspects of architecture as a discipline, these features increasingly beg partnerships with inter- or extra-disciplinary operations in order to engage external worlds with environmental agency.",
            session: "ABSTRACT BY DESIGN"
        },

           { title: "Jonathan a. scelsa", 
            people: "CO-CHAIR OF STEERING COMMITTEE, SCIENTIFIC TRACK COMMITTEE MODERATOR", 
            tags: ["PRODUCTION, URBANISM, INFRASTRUCTURE"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/Sample_person2.jpg" ,
            description: "As an urbanist, Jonathan critically examines the unsustainable models of center-periphery planning that have externalized major services and programs to the hinterlands that forced a massive infrastructural network and a social inequity on the city within the twentieth century. Through speculative project work and scholarly writing, Jonathan explores the potentials of re-invigorating the city with these lost parts informing a collective node-based urbanism towards a more even and equitable density.",
            session: "MONSTROUS INFRASTRUCTURE"
        },

           { title: "ARIANE LOURIE HARRISON, PRATT INSTITUTE", 
            people: "SCIENTIFIC TRACK COMMITTEE + MODERATOR", 
            tags: ["CONSTRUCTION, ECOLOGY, POST-HUMAN"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/Sample_person1.jpg" ,
            description: "Ariane is a registered architect in New York State and an educator. She is the Coordinator of the Masters of Science programs in Architecture and Urban Design at Pratt GAUD. She was a critic at the Yale School of Architecture from 2006-2017. She received her AB from Princeton (summa), her M.Arch from Columbia GSAPP (excellence in design) and her Ph.D from New York University. ",
            session: "THE CROSS-DISCPLINARY CLIMATE CLASSROOM"
        },

        { title: "PARK CARDS", 
            people: "Dragana Zoric, Pratt Institute", 
            tags: ["LANDSCAPE, PATTERN, POST-HUMAN"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/Sample_exhibition1.jpg" ,
            description: "Rather than closely aligning with the understanding which clearly delineates disciplinary boundaries and ascribes abstraction solely to landscape.",
            session: "IMAGE EXHIBITION"
        },


           { title: "Taking on the Tabula Scripta", 
            people: "Nikole Bouchard, University of Wisconsin-Milwaukee", 
            tags: ["MATERIALITY, ADAPTIVE RE-USE, URBANISM"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/Sample_session4.jpg" ,
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/Sample_session41.jpg",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/Sample_session42.jpg",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/Sample_session43.jpg",
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/Sample_session44.jpg",
            description: "“Buildings, like humans, are the products of their generation and their location…Buildings are inevitably formed by both a place and a history. They are brought into existence, they have a youth, a maturity, a senility, a death. Buildings are not fixed things; they change, they grow, they get sick, they die, or, more commonly, they are murdered.",
            session: "MONSTROUS INFRASTRUCTURE"
        },

           { title: "Palm-House", 
            people: "Brittany Utting, Rice University ; Daniel Jacobs, University of Houston", 
            tags: ["AGRICULTURE, ADAPTIVE RE-USE, WATER"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "PALM-HOUSE is an ongoing research and design project investigating the relationships between natural ecosystems, material commodities, and ecological care. The project takes the form of a speculative design for the Orto Botanico in Padua, Italy, a Medieval garden founded in 1545. Within this walled garden is a palm house protecting Goethe’s Palm, a Mediterranean Palm planted in 1585 that served as the inspiration for Goethe’s The Metamorphosis of Plants. The architecture of this palm house, performing as a protective shelter for a single specimen, can be critically examined as an index of the changing relationship between a living ecosystem and the technical, environmental, and material systems required for its care.",
            session: "MONSTROUS INFRASTRUCTURE"
        },
        
        { title: "CRISISCITY", 
            people: "Alex Barker, Pratt Institute", 
            tags: ["AGRICULTURE, ADAPTIVE RE-USE, WATER"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "In the Anthropocene thesis, human activity has affected all ecologic, geologic and biological systems and has eroded the boundary between human and non-human life and between nature and culture, with catastrophic impacts on the Earth that have brought us to a point of climate crisis.  Nature is partly a human creation. As recent texts have argued, the current social and health crises are direct resultants of human actions dating back to the time of Western colonization.",
            session: "MONSTROUS INFRASTRUCTURE"
        },


           { title: "CLIMATE AGENCY IN PRACTICE", 
            people: "Christoph Korner, Woodbury University", 
            tags: ["PRACTICE, CLIMATE, PEDAGOGY"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "The construction industry is responsible for 40% of global carbon emissions and architecture and other design professions have willingly, or unwillingly, sided with an uneven development that has consequences expanding from food insecurity and nutrient deficiency to imposed displacement due to collapsing ecosystems. Countries and communities that are least responsible are feeling the impact of the decisions made on the opposite side of the world ‐ a trend which will exacerbate in the future as new portions of our shared earth industrialize. As we move out of our current global health emergency and confront the next very real crisis of climate alteration, should architecture’s agenda be to rally forth in action, or can architecture construct a new type of agency in the processes of inaction?",
            session: "PLENARIES"
        },

           { title: "Getting Well", 
            people: "Christoph Korner, Woodbury University", 
            tags: ["HEALTH, WELLBEING, REPRESENTATION"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "Human safety, health, and comfort are essential parts of our profession, but lack an academic discussion, which makes an integration in the curriculum sometimes challenging. At the same time the traditional output of our students can not represent them in any satisfactory way. How do we draw health and comfort in a floor plan? How do we show safety in a rendering?",
            session: "UNLEARNING ARCHITECTURE"
        },
        

          { title: "Sympoietic Structures: Enfolding Ecological Inputs into Core-Studio Curricula", 
          people: "Jason Vignieri-Beane", 
          tags: ["EARLY-DESIGN, ECOLOGY, WATER"], 
          image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
          description: "Sympoietic Structures explores environmental morphology in first-year design studio pedagogy with an interest in new fundamentals based on sympoiesis and the enfolding of ecological inputs into form and organization. While first-year design curricula are often driven by abstraction, internal logics, formal processes and a general tendency to foreground autonomous aspects of architecture as a discipline, these features increasingly beg partnerships with inter- or extra-disciplinary operations in order to engage external worlds with environmental agency.",
          session: "ABSTRACT BY DESIGN"
      },

         { title: "Jonathan a. scelsa", 
          people: "CO-CHAIR OF STEERING COMMITTEE, SCIENTIFIC TRACK COMMITTEE MODERATOR", 
          tags: ["PRODUCTION, URBANISM, INFRASTRUCTURE"], 
          image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
          description: "As an urbanist, Jonathan critically examines the unsustainable models of center-periphery planning that have externalized major services and programs to the hinterlands that forced a massive infrastructural network and a social inequity on the city within the twentieth century. Through speculative project work and scholarly writing, Jonathan explores the potentials of re-invigorating the city with these lost parts informing a collective node-based urbanism towards a more even and equitable density.",
          session: "MONSTROUS INFRASTRUCTURE"
      },

         { title: "ARIANE LOURIE HARRISON, PRATT INSTITUTE", 
          people: "SCIENTIFIC TRACK COMMITTEE + MODERATOR", 
          tags: ["CONSTRUCTION, ECOLOGY, POST-HUMAN"], 
          image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
          description: "Ariane is a registered architect in New York State and an educator. She is the Coordinator of the Masters of Science programs in Architecture and Urban Design at Pratt GAUD. She was a critic at the Yale School of Architecture from 2006-2017. She received her AB from Princeton (summa), her M.Arch from Columbia GSAPP (excellence in design) and her Ph.D from New York University. ",
          session: "THE CROSS-DISCPLINARY CLIMATE CLASSROOM"
      },

      { title: "PARK CARDS", 
          people: "Dragana Zoric, Pratt Institute", 
          tags: ["LANDSCAPE, PATTERN, POST-HUMAN"], 
          image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
          description: "Rather than closely aligning with the understanding which clearly delineates disciplinary boundaries and ascribes abstraction solely to landscape.",
          session: "IMAGE EXHIBITION"
      },


         { title: "Taking on the Tabula Scripta", 
          people: "Nikole Bouchard, University of Wisconsin-Milwaukee", 
          tags: ["MATERIALITY, ADAPTIVE RE-USE, URBANISM"], 
          image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
          description: "“Buildings, like humans, are the products of their generation and their location…Buildings are inevitably formed by both a place and a history. They are brought into existence, they have a youth, a maturity, a senility, a death. Buildings are not fixed things; they change, they grow, they get sick, they die, or, more commonly, they are murdered.",
          session: "MONSTROUS INFRASTRUCTURE"
      },

         { title: "Palm-House", 
          people: "Brittany Utting, Rice University ; Daniel Jacobs, University of Houston", 
          tags: ["AGRICULTURE, ADAPTIVE RE-USE, WATER"], 
          image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
          description: "PALM-HOUSE is an ongoing research and design project investigating the relationships between natural ecosystems, material commodities, and ecological care. The project takes the form of a speculative design for the Orto Botanico in Padua, Italy, a Medieval garden founded in 1545. Within this walled garden is a palm house protecting Goethe’s Palm, a Mediterranean Palm planted in 1585 that served as the inspiration for Goethe’s The Metamorphosis of Plants. The architecture of this palm house, performing as a protective shelter for a single specimen, can be critically examined as an index of the changing relationship between a living ecosystem and the technical, environmental, and material systems required for its care.",
          session: "MONSTROUS INFRASTRUCTURE"
      },
      
      { title: "CRISISCITY", 
          people: "Alex Barker, Pratt Institute", 
          tags: ["AGRICULTURE, ADAPTIVE RE-USE, WATER"], 
          image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
          description: "In the Anthropocene thesis, human activity has affected all ecologic, geologic and biological systems and has eroded the boundary between human and non-human life and between nature and culture, with catastrophic impacts on the Earth that have brought us to a point of climate crisis.  Nature is partly a human creation. As recent texts have argued, the current social and health crises are direct resultants of human actions dating back to the time of Western colonization.",
          session: "MONSTROUS INFRASTRUCTURE"
      },


         { title: "CLIMATE AGENCY IN PRACTICE", 
          people: "Christoph Korner, Woodbury University", 
          tags: ["PRACTICE, CLIMATE, PEDAGOGY"], 
          image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
          description: "The construction industry is responsible for 40% of global carbon emissions and architecture and other design professions have willingly, or unwillingly, sided with an uneven development that has consequences expanding from food insecurity and nutrient deficiency to imposed displacement due to collapsing ecosystems. Countries and communities that are least responsible are feeling the impact of the decisions made on the opposite side of the world ‐ a trend which will exacerbate in the future as new portions of our shared earth industrialize. As we move out of our current global health emergency and confront the next very real crisis of climate alteration, should architecture’s agenda be to rally forth in action, or can architecture construct a new type of agency in the processes of inaction?",
          session: "PLENARIES"
      },

         { title: "Getting Well", 
          people: "Christoph Korner, Woodbury University", 
          tags: ["HEALTH, WELLBEING, REPRESENTATION"], 
          image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
          description: "Human safety, health, and comfort are essential parts of our profession, but lack an academic discussion, which makes an integration in the curriculum sometimes challenging. At the same time the traditional output of our students can not represent them in any satisfactory way. How do we draw health and comfort in a floor plan? How do we show safety in a rendering?",
          session: "UNLEARNING ARCHITECTURE"
      },
      


          { title: "Sympoietic Structures: Enfolding Ecological Inputs into Core-Studio Curricula", 
            people: "Jason Vignieri-Beane", 
            tags: ["EARLY-DESIGN, ECOLOGY, WATER"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "Sympoietic Structures explores environmental morphology in first-year design studio pedagogy with an interest in new fundamentals based on sympoiesis and the enfolding of ecological inputs into form and organization. While first-year design curricula are often driven by abstraction, internal logics, formal processes and a general tendency to foreground autonomous aspects of architecture as a discipline, these features increasingly beg partnerships with inter- or extra-disciplinary operations in order to engage external worlds with environmental agency.",
            session: "ABSTRACT BY DESIGN"
        },

           { title: "Jonathan a. scelsa", 
            people: "CO-CHAIR OF STEERING COMMITTEE, SCIENTIFIC TRACK COMMITTEE MODERATOR", 
            tags: ["PRODUCTION, URBANISM, INFRASTRUCTURE"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "As an urbanist, Jonathan critically examines the unsustainable models of center-periphery planning that have externalized major services and programs to the hinterlands that forced a massive infrastructural network and a social inequity on the city within the twentieth century. Through speculative project work and scholarly writing, Jonathan explores the potentials of re-invigorating the city with these lost parts informing a collective node-based urbanism towards a more even and equitable density.",
            session: "MONSTROUS INFRASTRUCTURE"
        },

           { title: "ARIANE LOURIE HARRISON, PRATT INSTITUTE", 
            people: "SCIENTIFIC TRACK COMMITTEE + MODERATOR", 
            tags: ["CONSTRUCTION, ECOLOGY, POST-HUMAN"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "Ariane is a registered architect in New York State and an educator. She is the Coordinator of the Masters of Science programs in Architecture and Urban Design at Pratt GAUD. She was a critic at the Yale School of Architecture from 2006-2017. She received her AB from Princeton (summa), her M.Arch from Columbia GSAPP (excellence in design) and her Ph.D from New York University. ",
            session: "THE CROSS-DISCPLINARY CLIMATE CLASSROOM"
        },

        { title: "PARK CARDS", 
            people: "Dragana Zoric, Pratt Institute", 
            tags: ["LANDSCAPE, PATTERN, POST-HUMAN"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "Rather than closely aligning with the understanding which clearly delineates disciplinary boundaries and ascribes abstraction solely to landscape.",
            session: "IMAGE EXHIBITION"
        },


           { title: "Taking on the Tabula Scripta", 
            people: "Nikole Bouchard, University of Wisconsin-Milwaukee", 
            tags: ["MATERIALITY, ADAPTIVE RE-USE, URBANISM"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "“Buildings, like humans, are the products of their generation and their location…Buildings are inevitably formed by both a place and a history. They are brought into existence, they have a youth, a maturity, a senility, a death. Buildings are not fixed things; they change, they grow, they get sick, they die, or, more commonly, they are murdered.",
            session: "MONSTROUS INFRASTRUCTURE"
        },

           { title: "Palm-House", 
            people: "Brittany Utting, Rice University ; Daniel Jacobs, University of Houston", 
            tags: ["AGRICULTURE, ADAPTIVE RE-USE, WATER"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "PALM-HOUSE is an ongoing research and design project investigating the relationships between natural ecosystems, material commodities, and ecological care. The project takes the form of a speculative design for the Orto Botanico in Padua, Italy, a Medieval garden founded in 1545. Within this walled garden is a palm house protecting Goethe’s Palm, a Mediterranean Palm planted in 1585 that served as the inspiration for Goethe’s The Metamorphosis of Plants. The architecture of this palm house, performing as a protective shelter for a single specimen, can be critically examined as an index of the changing relationship between a living ecosystem and the technical, environmental, and material systems required for its care.",
            session: "MONSTROUS INFRASTRUCTURE"
        },
        
        { title: "CRISISCITY", 
            people: "Alex Barker, Pratt Institute", 
            tags: ["AGRICULTURE, ADAPTIVE RE-USE, WATER"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "In the Anthropocene thesis, human activity has affected all ecologic, geologic and biological systems and has eroded the boundary between human and non-human life and between nature and culture, with catastrophic impacts on the Earth that have brought us to a point of climate crisis.  Nature is partly a human creation. As recent texts have argued, the current social and health crises are direct resultants of human actions dating back to the time of Western colonization.",
            session: "MONSTROUS INFRASTRUCTURE"
        },


           { title: "CLIMATE AGENCY IN PRACTICE", 
            people: "Christoph Korner, Woodbury University", 
            tags: ["PRACTICE, CLIMATE, PEDAGOGY"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "The construction industry is responsible for 40% of global carbon emissions and architecture and other design professions have willingly, or unwillingly, sided with an uneven development that has consequences expanding from food insecurity and nutrient deficiency to imposed displacement due to collapsing ecosystems. Countries and communities that are least responsible are feeling the impact of the decisions made on the opposite side of the world ‐ a trend which will exacerbate in the future as new portions of our shared earth industrialize. As we move out of our current global health emergency and confront the next very real crisis of climate alteration, should architecture’s agenda be to rally forth in action, or can architecture construct a new type of agency in the processes of inaction?",
            session: "PLENARIES"
        },

           { title: "Getting Well", 
            people: "Christoph Korner, Woodbury University", 
            tags: ["HEALTH, WELLBEING, REPRESENTATION"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "Human safety, health, and comfort are essential parts of our profession, but lack an academic discussion, which makes an integration in the curriculum sometimes challenging. At the same time the traditional output of our students can not represent them in any satisfactory way. How do we draw health and comfort in a floor plan? How do we show safety in a rendering?",
            session: "UNLEARNING ARCHITECTURE"
        },
        


          { title: "Sympoietic Structures: Enfolding Ecological Inputs into Core-Studio Curricula", 
            people: "Jason Vignieri-Beane", 
            tags: ["EARLY-DESIGN, ECOLOGY, WATER"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "Sympoietic Structures explores environmental morphology in first-year design studio pedagogy with an interest in new fundamentals based on sympoiesis and the enfolding of ecological inputs into form and organization. While first-year design curricula are often driven by abstraction, internal logics, formal processes and a general tendency to foreground autonomous aspects of architecture as a discipline, these features increasingly beg partnerships with inter- or extra-disciplinary operations in order to engage external worlds with environmental agency.",
            session: "ABSTRACT BY DESIGN"
        },

           { title: "Jonathan a. scelsa", 
            people: "CO-CHAIR OF STEERING COMMITTEE, SCIENTIFIC TRACK COMMITTEE MODERATOR", 
            tags: ["PRODUCTION, URBANISM, INFRASTRUCTURE"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "As an urbanist, Jonathan critically examines the unsustainable models of center-periphery planning that have externalized major services and programs to the hinterlands that forced a massive infrastructural network and a social inequity on the city within the twentieth century. Through speculative project work and scholarly writing, Jonathan explores the potentials of re-invigorating the city with these lost parts informing a collective node-based urbanism towards a more even and equitable density.",
            session: "MONSTROUS INFRASTRUCTURE"
        },

           { title: "ARIANE LOURIE HARRISON, PRATT INSTITUTE", 
            people: "SCIENTIFIC TRACK COMMITTEE + MODERATOR", 
            tags: ["CONSTRUCTION, ECOLOGY, POST-HUMAN"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "Ariane is a registered architect in New York State and an educator. She is the Coordinator of the Masters of Science programs in Architecture and Urban Design at Pratt GAUD. She was a critic at the Yale School of Architecture from 2006-2017. She received her AB from Princeton (summa), her M.Arch from Columbia GSAPP (excellence in design) and her Ph.D from New York University. ",
            session: "THE CROSS-DISCPLINARY CLIMATE CLASSROOM"
        },

        { title: "PARK CARDS", 
            people: "Dragana Zoric, Pratt Institute", 
            tags: ["LANDSCAPE, PATTERN, POST-HUMAN"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "Rather than closely aligning with the understanding which clearly delineates disciplinary boundaries and ascribes abstraction solely to landscape.",
            session: "IMAGE EXHIBITION"
        },


           { title: "Taking on the Tabula Scripta", 
            people: "Nikole Bouchard, University of Wisconsin-Milwaukee", 
            tags: ["MATERIALITY, ADAPTIVE RE-USE, URBANISM"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "“Buildings, like humans, are the products of their generation and their location…Buildings are inevitably formed by both a place and a history. They are brought into existence, they have a youth, a maturity, a senility, a death. Buildings are not fixed things; they change, they grow, they get sick, they die, or, more commonly, they are murdered.",
            session: "MONSTROUS INFRASTRUCTURE"
        },

           { title: "Palm-House", 
            people: "Brittany Utting, Rice University ; Daniel Jacobs, University of Houston", 
            tags: ["AGRICULTURE, ADAPTIVE RE-USE, WATER"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "PALM-HOUSE is an ongoing research and design project investigating the relationships between natural ecosystems, material commodities, and ecological care. The project takes the form of a speculative design for the Orto Botanico in Padua, Italy, a Medieval garden founded in 1545. Within this walled garden is a palm house protecting Goethe’s Palm, a Mediterranean Palm planted in 1585 that served as the inspiration for Goethe’s The Metamorphosis of Plants. The architecture of this palm house, performing as a protective shelter for a single specimen, can be critically examined as an index of the changing relationship between a living ecosystem and the technical, environmental, and material systems required for its care.",
            session: "MONSTROUS INFRASTRUCTURE"
        },
        
        { title: "CRISISCITY", 
            people: "Alex Barker, Pratt Institute", 
            tags: ["AGRICULTURE, ADAPTIVE RE-USE, WATER"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "In the Anthropocene thesis, human activity has affected all ecologic, geologic and biological systems and has eroded the boundary between human and non-human life and between nature and culture, with catastrophic impacts on the Earth that have brought us to a point of climate crisis.  Nature is partly a human creation. As recent texts have argued, the current social and health crises are direct resultants of human actions dating back to the time of Western colonization.",
            session: "MONSTROUS INFRASTRUCTURE"
        },


           { title: "CLIMATE AGENCY IN PRACTICE", 
            people: "Christoph Korner, Woodbury University", 
            tags: ["PRACTICE, CLIMATE, PEDAGOGY"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "The construction industry is responsible for 40% of global carbon emissions and architecture and other design professions have willingly, or unwillingly, sided with an uneven development that has consequences expanding from food insecurity and nutrient deficiency to imposed displacement due to collapsing ecosystems. Countries and communities that are least responsible are feeling the impact of the decisions made on the opposite side of the world ‐ a trend which will exacerbate in the future as new portions of our shared earth industrialize. As we move out of our current global health emergency and confront the next very real crisis of climate alteration, should architecture’s agenda be to rally forth in action, or can architecture construct a new type of agency in the processes of inaction?",
            session: "PLENARIES"
        },

           { title: "Getting Well", 
            people: "Christoph Korner, Woodbury University", 
            tags: ["HEALTH, WELLBEING, REPRESENTATION"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "Human safety, health, and comfort are essential parts of our profession, but lack an academic discussion, which makes an integration in the curriculum sometimes challenging. At the same time the traditional output of our students can not represent them in any satisfactory way. How do we draw health and comfort in a floor plan? How do we show safety in a rendering?",
            session: "UNLEARNING ARCHITECTURE"
        },
        


          { title: "Sympoietic Structures: Enfolding Ecological Inputs into Core-Studio Curricula", 
            people: "Jason Vignieri-Beane", 
            tags: ["EARLY-DESIGN, ECOLOGY, WATER"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "Sympoietic Structures explores environmental morphology in first-year design studio pedagogy with an interest in new fundamentals based on sympoiesis and the enfolding of ecological inputs into form and organization. While first-year design curricula are often driven by abstraction, internal logics, formal processes and a general tendency to foreground autonomous aspects of architecture as a discipline, these features increasingly beg partnerships with inter- or extra-disciplinary operations in order to engage external worlds with environmental agency.",
            session: "ABSTRACT BY DESIGN"
        },

           { title: "Jonathan a. scelsa", 
            people: "CO-CHAIR OF STEERING COMMITTEE, SCIENTIFIC TRACK COMMITTEE MODERATOR", 
            tags: ["PRODUCTION, URBANISM, INFRASTRUCTURE"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "As an urbanist, Jonathan critically examines the unsustainable models of center-periphery planning that have externalized major services and programs to the hinterlands that forced a massive infrastructural network and a social inequity on the city within the twentieth century. Through speculative project work and scholarly writing, Jonathan explores the potentials of re-invigorating the city with these lost parts informing a collective node-based urbanism towards a more even and equitable density.",
            session: "MONSTROUS INFRASTRUCTURE"
        },

           { title: "ARIANE LOURIE HARRISON, PRATT INSTITUTE", 
            people: "SCIENTIFIC TRACK COMMITTEE + MODERATOR", 
            tags: ["CONSTRUCTION, ECOLOGY, POST-HUMAN"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "Ariane is a registered architect in New York State and an educator. She is the Coordinator of the Masters of Science programs in Architecture and Urban Design at Pratt GAUD. She was a critic at the Yale School of Architecture from 2006-2017. She received her AB from Princeton (summa), her M.Arch from Columbia GSAPP (excellence in design) and her Ph.D from New York University. ",
            session: "THE CROSS-DISCPLINARY CLIMATE CLASSROOM"
        },

        { title: "PARK CARDS", 
            people: "Dragana Zoric, Pratt Institute", 
            tags: ["LANDSCAPE, PATTERN, POST-HUMAN"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "Rather than closely aligning with the understanding which clearly delineates disciplinary boundaries and ascribes abstraction solely to landscape.",
            session: "IMAGE EXHIBITION"
        },


           { title: "Taking on the Tabula Scripta", 
            people: "Nikole Bouchard, University of Wisconsin-Milwaukee", 
            tags: ["MATERIALITY, ADAPTIVE RE-USE, URBANISM"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "“Buildings, like humans, are the products of their generation and their location…Buildings are inevitably formed by both a place and a history. They are brought into existence, they have a youth, a maturity, a senility, a death. Buildings are not fixed things; they change, they grow, they get sick, they die, or, more commonly, they are murdered.",
            session: "MONSTROUS INFRASTRUCTURE"
        },

           { title: "Palm-House", 
            people: "Brittany Utting, Rice University ; Daniel Jacobs, University of Houston", 
            tags: ["AGRICULTURE, ADAPTIVE RE-USE, WATER"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "PALM-HOUSE is an ongoing research and design project investigating the relationships between natural ecosystems, material commodities, and ecological care. The project takes the form of a speculative design for the Orto Botanico in Padua, Italy, a Medieval garden founded in 1545. Within this walled garden is a palm house protecting Goethe’s Palm, a Mediterranean Palm planted in 1585 that served as the inspiration for Goethe’s The Metamorphosis of Plants. The architecture of this palm house, performing as a protective shelter for a single specimen, can be critically examined as an index of the changing relationship between a living ecosystem and the technical, environmental, and material systems required for its care.",
            session: "MONSTROUS INFRASTRUCTURE"
        },
        
        { title: "CRISISCITY", 
            people: "Alex Barker, Pratt Institute", 
            tags: ["AGRICULTURE, ADAPTIVE RE-USE, WATER"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "In the Anthropocene thesis, human activity has affected all ecologic, geologic and biological systems and has eroded the boundary between human and non-human life and between nature and culture, with catastrophic impacts on the Earth that have brought us to a point of climate crisis.  Nature is partly a human creation. As recent texts have argued, the current social and health crises are direct resultants of human actions dating back to the time of Western colonization.",
            session: "MONSTROUS INFRASTRUCTURE"
        },


           { title: "CLIMATE AGENCY IN PRACTICE", 
            people: "Christoph Korner, Woodbury University", 
            tags: ["PRACTICE, CLIMATE, PEDAGOGY"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "The construction industry is responsible for 40% of global carbon emissions and architecture and other design professions have willingly, or unwillingly, sided with an uneven development that has consequences expanding from food insecurity and nutrient deficiency to imposed displacement due to collapsing ecosystems. Countries and communities that are least responsible are feeling the impact of the decisions made on the opposite side of the world ‐ a trend which will exacerbate in the future as new portions of our shared earth industrialize. As we move out of our current global health emergency and confront the next very real crisis of climate alteration, should architecture’s agenda be to rally forth in action, or can architecture construct a new type of agency in the processes of inaction?",
            session: "PLENARIES"
        },

           { title: "Getting Well", 
            people: "Christoph Korner, Woodbury University", 
            tags: ["HEALTH, WELLBEING, REPRESENTATION"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "Human safety, health, and comfort are essential parts of our profession, but lack an academic discussion, which makes an integration in the curriculum sometimes challenging. At the same time the traditional output of our students can not represent them in any satisfactory way. How do we draw health and comfort in a floor plan? How do we show safety in a rendering?",
            session: "UNLEARNING ARCHITECTURE"
        },
        


          { title: "Sympoietic Structures: Enfolding Ecological Inputs into Core-Studio Curricula", 
          people: "Jason Vignieri-Beane", 
          tags: ["EARLY-DESIGN, ECOLOGY, WATER"], 
          image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
          description: "Sympoietic Structures explores environmental morphology in first-year design studio pedagogy with an interest in new fundamentals based on sympoiesis and the enfolding of ecological inputs into form and organization. While first-year design curricula are often driven by abstraction, internal logics, formal processes and a general tendency to foreground autonomous aspects of architecture as a discipline, these features increasingly beg partnerships with inter- or extra-disciplinary operations in order to engage external worlds with environmental agency.",
          session: "ABSTRACT BY DESIGN"
      },

         { title: "Jonathan a. scelsa", 
          people: "CO-CHAIR OF STEERING COMMITTEE, SCIENTIFIC TRACK COMMITTEE MODERATOR", 
          tags: ["PRODUCTION, URBANISM, INFRASTRUCTURE"], 
          image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
          description: "As an urbanist, Jonathan critically examines the unsustainable models of center-periphery planning that have externalized major services and programs to the hinterlands that forced a massive infrastructural network and a social inequity on the city within the twentieth century. Through speculative project work and scholarly writing, Jonathan explores the potentials of re-invigorating the city with these lost parts informing a collective node-based urbanism towards a more even and equitable density.",
          session: "MONSTROUS INFRASTRUCTURE"
      },

         { title: "ARIANE LOURIE HARRISON, PRATT INSTITUTE", 
          people: "SCIENTIFIC TRACK COMMITTEE + MODERATOR", 
          tags: ["CONSTRUCTION, ECOLOGY, POST-HUMAN"], 
          image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
          description: "Ariane is a registered architect in New York State and an educator. She is the Coordinator of the Masters of Science programs in Architecture and Urban Design at Pratt GAUD. She was a critic at the Yale School of Architecture from 2006-2017. She received her AB from Princeton (summa), her M.Arch from Columbia GSAPP (excellence in design) and her Ph.D from New York University. ",
          session: "THE CROSS-DISCPLINARY CLIMATE CLASSROOM"
      },

      { title: "PARK CARDS", 
          people: "Dragana Zoric, Pratt Institute", 
          tags: ["LANDSCAPE, PATTERN, POST-HUMAN"], 
          image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
          description: "Rather than closely aligning with the understanding which clearly delineates disciplinary boundaries and ascribes abstraction solely to landscape.",
          session: "IMAGE EXHIBITION"
      },


         { title: "Taking on the Tabula Scripta", 
          people: "Nikole Bouchard, University of Wisconsin-Milwaukee", 
          tags: ["MATERIALITY, ADAPTIVE RE-USE, URBANISM"], 
          image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
          description: "“Buildings, like humans, are the products of their generation and their location…Buildings are inevitably formed by both a place and a history. They are brought into existence, they have a youth, a maturity, a senility, a death. Buildings are not fixed things; they change, they grow, they get sick, they die, or, more commonly, they are murdered.",
          session: "MONSTROUS INFRASTRUCTURE"
      },

         { title: "Palm-House", 
          people: "Brittany Utting, Rice University ; Daniel Jacobs, University of Houston", 
          tags: ["AGRICULTURE, ADAPTIVE RE-USE, WATER"], 
          image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
          description: "PALM-HOUSE is an ongoing research and design project investigating the relationships between natural ecosystems, material commodities, and ecological care. The project takes the form of a speculative design for the Orto Botanico in Padua, Italy, a Medieval garden founded in 1545. Within this walled garden is a palm house protecting Goethe’s Palm, a Mediterranean Palm planted in 1585 that served as the inspiration for Goethe’s The Metamorphosis of Plants. The architecture of this palm house, performing as a protective shelter for a single specimen, can be critically examined as an index of the changing relationship between a living ecosystem and the technical, environmental, and material systems required for its care.",
          session: "MONSTROUS INFRASTRUCTURE"
      },
      
      { title: "CRISISCITY", 
          people: "Alex Barker, Pratt Institute", 
          tags: ["AGRICULTURE, ADAPTIVE RE-USE, WATER"], 
          image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
          description: "In the Anthropocene thesis, human activity has affected all ecologic, geologic and biological systems and has eroded the boundary between human and non-human life and between nature and culture, with catastrophic impacts on the Earth that have brought us to a point of climate crisis.  Nature is partly a human creation. As recent texts have argued, the current social and health crises are direct resultants of human actions dating back to the time of Western colonization.",
          session: "MONSTROUS INFRASTRUCTURE"
      },


         { title: "CLIMATE AGENCY IN PRACTICE", 
          people: "Christoph Korner, Woodbury University", 
          tags: ["PRACTICE, CLIMATE, PEDAGOGY"], 
          image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
          description: "The construction industry is responsible for 40% of global carbon emissions and architecture and other design professions have willingly, or unwillingly, sided with an uneven development that has consequences expanding from food insecurity and nutrient deficiency to imposed displacement due to collapsing ecosystems. Countries and communities that are least responsible are feeling the impact of the decisions made on the opposite side of the world ‐ a trend which will exacerbate in the future as new portions of our shared earth industrialize. As we move out of our current global health emergency and confront the next very real crisis of climate alteration, should architecture’s agenda be to rally forth in action, or can architecture construct a new type of agency in the processes of inaction?",
          session: "PLENARIES"
      },

         { title: "Getting Well", 
          people: "Christoph Korner, Woodbury University", 
          tags: ["HEALTH, WELLBEING, REPRESENTATION"], 
          image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
          description: "Human safety, health, and comfort are essential parts of our profession, but lack an academic discussion, which makes an integration in the curriculum sometimes challenging. At the same time the traditional output of our students can not represent them in any satisfactory way. How do we draw health and comfort in a floor plan? How do we show safety in a rendering?",
          session: "UNLEARNING ARCHITECTURE"
      },
      


          { title: "Sympoietic Structures: Enfolding Ecological Inputs into Core-Studio Curricula", 
            people: "Jason Vignieri-Beane", 
            tags: ["EARLY-DESIGN, ECOLOGY, WATER"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "Sympoietic Structures explores environmental morphology in first-year design studio pedagogy with an interest in new fundamentals based on sympoiesis and the enfolding of ecological inputs into form and organization. While first-year design curricula are often driven by abstraction, internal logics, formal processes and a general tendency to foreground autonomous aspects of architecture as a discipline, these features increasingly beg partnerships with inter- or extra-disciplinary operations in order to engage external worlds with environmental agency.",
            session: "ABSTRACT BY DESIGN"
        },

           { title: "Jonathan a. scelsa", 
            people: "CO-CHAIR OF STEERING COMMITTEE, SCIENTIFIC TRACK COMMITTEE MODERATOR", 
            tags: ["PRODUCTION, URBANISM, INFRASTRUCTURE"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "As an urbanist, Jonathan critically examines the unsustainable models of center-periphery planning that have externalized major services and programs to the hinterlands that forced a massive infrastructural network and a social inequity on the city within the twentieth century. Through speculative project work and scholarly writing, Jonathan explores the potentials of re-invigorating the city with these lost parts informing a collective node-based urbanism towards a more even and equitable density.",
            session: "MONSTROUS INFRASTRUCTURE"
        },

           { title: "ARIANE LOURIE HARRISON, PRATT INSTITUTE", 
            people: "SCIENTIFIC TRACK COMMITTEE + MODERATOR", 
            tags: ["CONSTRUCTION, ECOLOGY, POST-HUMAN"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "Ariane is a registered architect in New York State and an educator. She is the Coordinator of the Masters of Science programs in Architecture and Urban Design at Pratt GAUD. She was a critic at the Yale School of Architecture from 2006-2017. She received her AB from Princeton (summa), her M.Arch from Columbia GSAPP (excellence in design) and her Ph.D from New York University. ",
            session: "THE CROSS-DISCPLINARY CLIMATE CLASSROOM"
        },

        { title: "PARK CARDS", 
            people: "Dragana Zoric, Pratt Institute", 
            tags: ["LANDSCAPE, PATTERN, POST-HUMAN"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "Rather than closely aligning with the understanding which clearly delineates disciplinary boundaries and ascribes abstraction solely to landscape.",
            session: "IMAGE EXHIBITION"
        },


           { title: "Taking on the Tabula Scripta", 
            people: "Nikole Bouchard, University of Wisconsin-Milwaukee", 
            tags: ["MATERIALITY, ADAPTIVE RE-USE, URBANISM"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "“Buildings, like humans, are the products of their generation and their location…Buildings are inevitably formed by both a place and a history. They are brought into existence, they have a youth, a maturity, a senility, a death. Buildings are not fixed things; they change, they grow, they get sick, they die, or, more commonly, they are murdered.",
            session: "MONSTROUS INFRASTRUCTURE"
        },

           { title: "Palm-House", 
            people: "Brittany Utting, Rice University ; Daniel Jacobs, University of Houston", 
            tags: ["AGRICULTURE, ADAPTIVE RE-USE, WATER"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "PALM-HOUSE is an ongoing research and design project investigating the relationships between natural ecosystems, material commodities, and ecological care. The project takes the form of a speculative design for the Orto Botanico in Padua, Italy, a Medieval garden founded in 1545. Within this walled garden is a palm house protecting Goethe’s Palm, a Mediterranean Palm planted in 1585 that served as the inspiration for Goethe’s The Metamorphosis of Plants. The architecture of this palm house, performing as a protective shelter for a single specimen, can be critically examined as an index of the changing relationship between a living ecosystem and the technical, environmental, and material systems required for its care.",
            session: "MONSTROUS INFRASTRUCTURE"
        },
        
        { title: "CRISISCITY", 
            people: "Alex Barker, Pratt Institute", 
            tags: ["AGRICULTURE, ADAPTIVE RE-USE, WATER"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "In the Anthropocene thesis, human activity has affected all ecologic, geologic and biological systems and has eroded the boundary between human and non-human life and between nature and culture, with catastrophic impacts on the Earth that have brought us to a point of climate crisis.  Nature is partly a human creation. As recent texts have argued, the current social and health crises are direct resultants of human actions dating back to the time of Western colonization.",
            session: "MONSTROUS INFRASTRUCTURE"
        },


           { title: "CLIMATE AGENCY IN PRACTICE", 
            people: "Christoph Korner, Woodbury University", 
            tags: ["PRACTICE, CLIMATE, PEDAGOGY"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "The construction industry is responsible for 40% of global carbon emissions and architecture and other design professions have willingly, or unwillingly, sided with an uneven development that has consequences expanding from food insecurity and nutrient deficiency to imposed displacement due to collapsing ecosystems. Countries and communities that are least responsible are feeling the impact of the decisions made on the opposite side of the world ‐ a trend which will exacerbate in the future as new portions of our shared earth industrialize. As we move out of our current global health emergency and confront the next very real crisis of climate alteration, should architecture’s agenda be to rally forth in action, or can architecture construct a new type of agency in the processes of inaction?",
            session: "PLENARIES"
        },

           { title: "Getting Well", 
            people: "Christoph Korner, Woodbury University", 
            tags: ["HEALTH, WELLBEING, REPRESENTATION"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "Human safety, health, and comfort are essential parts of our profession, but lack an academic discussion, which makes an integration in the curriculum sometimes challenging. At the same time the traditional output of our students can not represent them in any satisfactory way. How do we draw health and comfort in a floor plan? How do we show safety in a rendering?",
            session: "UNLEARNING ARCHITECTURE"
        },
        


          { title: "Sympoietic Structures: Enfolding Ecological Inputs into Core-Studio Curricula", 
            people: "Jason Vignieri-Beane", 
            tags: ["EARLY-DESIGN, ECOLOGY, WATER"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "Sympoietic Structures explores environmental morphology in first-year design studio pedagogy with an interest in new fundamentals based on sympoiesis and the enfolding of ecological inputs into form and organization. While first-year design curricula are often driven by abstraction, internal logics, formal processes and a general tendency to foreground autonomous aspects of architecture as a discipline, these features increasingly beg partnerships with inter- or extra-disciplinary operations in order to engage external worlds with environmental agency.",
            session: "ABSTRACT BY DESIGN"
        },

           { title: "Jonathan a. scelsa", 
            people: "CO-CHAIR OF STEERING COMMITTEE, SCIENTIFIC TRACK COMMITTEE MODERATOR", 
            tags: ["PRODUCTION, URBANISM, INFRASTRUCTURE"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "As an urbanist, Jonathan critically examines the unsustainable models of center-periphery planning that have externalized major services and programs to the hinterlands that forced a massive infrastructural network and a social inequity on the city within the twentieth century. Through speculative project work and scholarly writing, Jonathan explores the potentials of re-invigorating the city with these lost parts informing a collective node-based urbanism towards a more even and equitable density.",
            session: "MONSTROUS INFRASTRUCTURE"
        },

           { title: "ARIANE LOURIE HARRISON, PRATT INSTITUTE", 
            people: "SCIENTIFIC TRACK COMMITTEE + MODERATOR", 
            tags: ["CONSTRUCTION, ECOLOGY, POST-HUMAN"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "Ariane is a registered architect in New York State and an educator. She is the Coordinator of the Masters of Science programs in Architecture and Urban Design at Pratt GAUD. She was a critic at the Yale School of Architecture from 2006-2017. She received her AB from Princeton (summa), her M.Arch from Columbia GSAPP (excellence in design) and her Ph.D from New York University. ",
            session: "THE CROSS-DISCPLINARY CLIMATE CLASSROOM"
        },

        { title: "PARK CARDS", 
            people: "Dragana Zoric, Pratt Institute", 
            tags: ["LANDSCAPE, PATTERN, POST-HUMAN"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "Rather than closely aligning with the understanding which clearly delineates disciplinary boundaries and ascribes abstraction solely to landscape.",
            session: "IMAGE EXHIBITION"
        },


           { title: "Taking on the Tabula Scripta", 
            people: "Nikole Bouchard, University of Wisconsin-Milwaukee", 
            tags: ["MATERIALITY, ADAPTIVE RE-USE, URBANISM"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "“Buildings, like humans, are the products of their generation and their location…Buildings are inevitably formed by both a place and a history. They are brought into existence, they have a youth, a maturity, a senility, a death. Buildings are not fixed things; they change, they grow, they get sick, they die, or, more commonly, they are murdered.",
            session: "MONSTROUS INFRASTRUCTURE"
        },

           { title: "Palm-House", 
            people: "Brittany Utting, Rice University ; Daniel Jacobs, University of Houston", 
            tags: ["AGRICULTURE, ADAPTIVE RE-USE, WATER"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "PALM-HOUSE is an ongoing research and design project investigating the relationships between natural ecosystems, material commodities, and ecological care. The project takes the form of a speculative design for the Orto Botanico in Padua, Italy, a Medieval garden founded in 1545. Within this walled garden is a palm house protecting Goethe’s Palm, a Mediterranean Palm planted in 1585 that served as the inspiration for Goethe’s The Metamorphosis of Plants. The architecture of this palm house, performing as a protective shelter for a single specimen, can be critically examined as an index of the changing relationship between a living ecosystem and the technical, environmental, and material systems required for its care.",
            session: "MONSTROUS INFRASTRUCTURE"
        },
        
        { title: "CRISISCITY", 
            people: "Alex Barker, Pratt Institute", 
            tags: ["AGRICULTURE, ADAPTIVE RE-USE, WATER"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "In the Anthropocene thesis, human activity has affected all ecologic, geologic and biological systems and has eroded the boundary between human and non-human life and between nature and culture, with catastrophic impacts on the Earth that have brought us to a point of climate crisis.  Nature is partly a human creation. As recent texts have argued, the current social and health crises are direct resultants of human actions dating back to the time of Western colonization.",
            session: "MONSTROUS INFRASTRUCTURE"
        },


           { title: "CLIMATE AGENCY IN PRACTICE", 
            people: "Christoph Korner, Woodbury University", 
            tags: ["PRACTICE, CLIMATE, PEDAGOGY"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "The construction industry is responsible for 40% of global carbon emissions and architecture and other design professions have willingly, or unwillingly, sided with an uneven development that has consequences expanding from food insecurity and nutrient deficiency to imposed displacement due to collapsing ecosystems. Countries and communities that are least responsible are feeling the impact of the decisions made on the opposite side of the world ‐ a trend which will exacerbate in the future as new portions of our shared earth industrialize. As we move out of our current global health emergency and confront the next very real crisis of climate alteration, should architecture’s agenda be to rally forth in action, or can architecture construct a new type of agency in the processes of inaction?",
            session: "PLENARIES"
        },

           { title: "Getting Well", 
            people: "Christoph Korner, Woodbury University", 
            tags: ["HEALTH, WELLBEING, REPRESENTATION"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "Human safety, health, and comfort are essential parts of our profession, but lack an academic discussion, which makes an integration in the curriculum sometimes challenging. At the same time the traditional output of our students can not represent them in any satisfactory way. How do we draw health and comfort in a floor plan? How do we show safety in a rendering?",
            session: "UNLEARNING ARCHITECTURE"
        },
        


          { title: "Sympoietic Structures: Enfolding Ecological Inputs into Core-Studio Curricula", 
            people: "Jason Vignieri-Beane", 
            tags: ["EARLY-DESIGN, ECOLOGY, WATER"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "Sympoietic Structures explores environmental morphology in first-year design studio pedagogy with an interest in new fundamentals based on sympoiesis and the enfolding of ecological inputs into form and organization. While first-year design curricula are often driven by abstraction, internal logics, formal processes and a general tendency to foreground autonomous aspects of architecture as a discipline, these features increasingly beg partnerships with inter- or extra-disciplinary operations in order to engage external worlds with environmental agency.",
            session: "ABSTRACT BY DESIGN"
        },

           { title: "Jonathan a. scelsa", 
            people: "CO-CHAIR OF STEERING COMMITTEE, SCIENTIFIC TRACK COMMITTEE MODERATOR", 
            tags: ["PRODUCTION, URBANISM, INFRASTRUCTURE"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "As an urbanist, Jonathan critically examines the unsustainable models of center-periphery planning that have externalized major services and programs to the hinterlands that forced a massive infrastructural network and a social inequity on the city within the twentieth century. Through speculative project work and scholarly writing, Jonathan explores the potentials of re-invigorating the city with these lost parts informing a collective node-based urbanism towards a more even and equitable density.",
            session: "MONSTROUS INFRASTRUCTURE"
        },

           { title: "ARIANE LOURIE HARRISON, PRATT INSTITUTE", 
            people: "SCIENTIFIC TRACK COMMITTEE + MODERATOR", 
            tags: ["CONSTRUCTION, ECOLOGY, POST-HUMAN"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "Ariane is a registered architect in New York State and an educator. She is the Coordinator of the Masters of Science programs in Architecture and Urban Design at Pratt GAUD. She was a critic at the Yale School of Architecture from 2006-2017. She received her AB from Princeton (summa), her M.Arch from Columbia GSAPP (excellence in design) and her Ph.D from New York University. ",
            session: "THE CROSS-DISCPLINARY CLIMATE CLASSROOM"
        },

        { title: "PARK CARDS", 
            people: "Dragana Zoric, Pratt Institute", 
            tags: ["LANDSCAPE, PATTERN, POST-HUMAN"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "Rather than closely aligning with the understanding which clearly delineates disciplinary boundaries and ascribes abstraction solely to landscape.",
            session: "IMAGE EXHIBITION"
        },


           { title: "Taking on the Tabula Scripta", 
            people: "Nikole Bouchard, University of Wisconsin-Milwaukee", 
            tags: ["MATERIALITY, ADAPTIVE RE-USE, URBANISM"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "“Buildings, like humans, are the products of their generation and their location…Buildings are inevitably formed by both a place and a history. They are brought into existence, they have a youth, a maturity, a senility, a death. Buildings are not fixed things; they change, they grow, they get sick, they die, or, more commonly, they are murdered.",
            session: "MONSTROUS INFRASTRUCTURE"
        },

           { title: "Palm-House", 
            people: "Brittany Utting, Rice University ; Daniel Jacobs, University of Houston", 
            tags: ["AGRICULTURE, ADAPTIVE RE-USE, WATER"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "PALM-HOUSE is an ongoing research and design project investigating the relationships between natural ecosystems, material commodities, and ecological care. The project takes the form of a speculative design for the Orto Botanico in Padua, Italy, a Medieval garden founded in 1545. Within this walled garden is a palm house protecting Goethe’s Palm, a Mediterranean Palm planted in 1585 that served as the inspiration for Goethe’s The Metamorphosis of Plants. The architecture of this palm house, performing as a protective shelter for a single specimen, can be critically examined as an index of the changing relationship between a living ecosystem and the technical, environmental, and material systems required for its care.",
            session: "MONSTROUS INFRASTRUCTURE"
        },
        
        { title: "CRISISCITY", 
            people: "Alex Barker, Pratt Institute", 
            tags: ["AGRICULTURE, ADAPTIVE RE-USE, WATER"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "In the Anthropocene thesis, human activity has affected all ecologic, geologic and biological systems and has eroded the boundary between human and non-human life and between nature and culture, with catastrophic impacts on the Earth that have brought us to a point of climate crisis.  Nature is partly a human creation. As recent texts have argued, the current social and health crises are direct resultants of human actions dating back to the time of Western colonization.",
            session: "MONSTROUS INFRASTRUCTURE"
        },


           { title: "CLIMATE AGENCY IN PRACTICE", 
            people: "Christoph Korner, Woodbury University", 
            tags: ["PRACTICE, CLIMATE, PEDAGOGY"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "The construction industry is responsible for 40% of global carbon emissions and architecture and other design professions have willingly, or unwillingly, sided with an uneven development that has consequences expanding from food insecurity and nutrient deficiency to imposed displacement due to collapsing ecosystems. Countries and communities that are least responsible are feeling the impact of the decisions made on the opposite side of the world ‐ a trend which will exacerbate in the future as new portions of our shared earth industrialize. As we move out of our current global health emergency and confront the next very real crisis of climate alteration, should architecture’s agenda be to rally forth in action, or can architecture construct a new type of agency in the processes of inaction?",
            session: "PLENARIES"
        },

           { title: "Getting Well", 
            people: "Christoph Korner, Woodbury University", 
            tags: ["HEALTH, WELLBEING, REPRESENTATION"], 
            image: "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/" ,
            description: "Human safety, health, and comfort are essential parts of our profession, but lack an academic discussion, which makes an integration in the curriculum sometimes challenging. At the same time the traditional output of our students can not represent them in any satisfactory way. How do we draw health and comfort in a floor plan? How do we show safety in a rendering?",
            session: "UNLEARNING ARCHITECTURE"
        },
        






    ];

    return {
        projects: projects
    };
})();