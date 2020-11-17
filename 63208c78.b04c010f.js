(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{69:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return i})),n.d(e,"metadata",(function(){return a})),n.d(e,"rightToc",(function(){return u})),n.d(e,"default",(function(){return d}));var l=n(2),b=n(6),c=(n(0),n(92)),r=n(93),i={id:"observation",title:"Observation Data Model",sidebar_label:"Observation (ODM)",description:"Observation Data Model (ODM)"},a={unversionedId:"observation",id:"observation",isDocsHomePage:!1,title:"Observation Data Model",description:"Observation Data Model (ODM)",source:"@site/docs\\observation.md",permalink:"/docs/observation",editUrl:"https://github.com/citizen-science-association/ppsr-core/edit/master/docs/observation.md",lastUpdatedBy:"BBudnicki",lastUpdatedAt:1605064759,sidebar_label:"Observation (ODM)",sidebar:"coreSidebar",previous:{title:"Dataset Metadata Model",permalink:"/docs/dataset"},next:{title:"Contribute",permalink:"/docs/contribute"}},u=[{value:"Information Sharing Example",id:"information-sharing-example",children:[]},{value:"Future Work",id:"future-work",children:[]}],o={rightToc:u};function d(t){var e=t.components,n=Object(b.a)(t,["components"]);return Object(c.b)("wrapper",Object(l.a)({},o,n,{components:e,mdxType:"MDXLayout"}),Object(c.b)("p",null,"An observation record is a collection of information associated with a unique data collection activity or event. The information (attribute data) comprising a record is generally based on something that has been seen, heard, noticed or provided by a survey participant. A collection of observation records comprises a dataset."),Object(c.b)("p",null,"The ",Object(c.b)("strong",{parentName:"p"},"O"),"bservation ",Object(c.b)("strong",{parentName:"p"},"D"),"ata ",Object(c.b)("strong",{parentName:"p"},"M"),"odel ",Object(c.b)("strong",{parentName:"p"},"(ODM)")," describes a number of \u201cprofiles\u201d for particular domains (or areas of science) and \u201cCore\u201d sets of attributes which must be included for particular types of surveys. These Core attribute sets can apply across multiple, but not necessarily all, domain profiles. The diagram below provides a graphical representation of how this works. "),Object(c.b)("p",null,"The purpose of defining \u201ccore\u201d attributes for domain profiles is to enable data from different datasets to be aggregated for larger scale analysis than is possible with individual datasets. When attributes are common across different domain profiles, different datasets from within that group of domain profiles can be joined to enable analysis and insights which are otherwise impossible to achieve \u2013 core attributes enable cross-domain dataset joining. Owing to the potentially infinite variability and complexity of survey requirements it is possible that core attributes for one set of profiles may not include a required attribute that is included as a core attribute for a different set of profiles. In this case the latter may be adopted by the survey needing to use it, instead of creating a completely new and different attribute extension for the profile needing it."),Object(c.b)("img",{alt:"Docusaurus with Keytar",src:Object(r.a)("img/observation-schematic-2020-0.png")}),Object(c.b)("p",null,"ODM domain profiles will use existing domain-specific data standards as much as possible, where they exist. The table below provides profiles for current known domain standards and indicates where such standards either do not yet exist of if they do, they have not yet been discovered by the PPSR-Core team. Development of these profiles is still a work in progress and the PPSR-Core project team is continuing to develop new profiles and refine existing ones. We are particularly keen to have expert domain-based knowledge contributing to this process, especially in domain areas which are under-represented and not well described. Please see our ",Object(c.b)("a",Object(l.a)({parentName:"p"},{href:"/docs/contribute"}),"contribute page")," to get involved"),Object(c.b)("h2",{id:"information-sharing-example"},"Information Sharing Example"),Object(c.b)("p",null,"Scientists and platform managers need to share scientific observations about the world. They need to do so to advance science and decision making. And they may also need to do so to leverage the unique strengths of various platforms to improve data quality. For example, a project on ",Object(c.b)("a",Object(l.a)({parentName:"p"},{href:"https://www.citsci.org/"}),"CitSci.org")," might ask its volunteers to collect species occurrence observations of a rare butterfly. But they also need to crowd source the identification of this specific rare butterfly. Imagine their delight when they learn they can automatically share observations submitted to their CitSci project and have these appear on ",Object(c.b)("a",Object(l.a)({parentName:"p"},{href:"https://www.inaturalist.org/"}),"iNaturalist")," and then have this online community verify the taxonomic identity of the butterfly observation to make this observation become deemed as \u201cResearch Grade.\u201d Then, their delight grows when they learn that all Research Grade observations are automatically shared with the ",Object(c.b)("a",Object(l.a)({parentName:"p"},{href:"https://www.gbif.org/"}),"Global Biodiversity Information Facility (GBIF)"),". Now we have observations submitted to one platform becoming verified on another, sent back to the original platform so it can be represented as Research Grade, and also being sent to the go-to-source for global biodiversity data worldwide."),Object(c.b)("h2",{id:"future-work"},"Future Work"),Object(c.b)("p",null,"It is intended to comprise a series of domain appropriate sets of attributes and/or schemas which are required for effective and useful aggregation of data for scientific use. An example of this would be the Darwin Core standard used for global biodiversity occurrence data. Other domains also have their specific standards. The ODM will recommend application of relevant existing domain standards where they exist, develop new models where they don't, and will seek to identify and standardize common attributes across domains to enable multi-disciplinary aggregation of datasets on those attributes for cross-disciplinary analysis."),Object(c.b)("table",{class:"table table-bordered table-hover table-condensed"},Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",{title:"Field #1"},"Domain area (type of science)"),Object(c.b)("th",{title:"Field #2"},"ODM Core attribute set"),Object(c.b)("th",{title:"Field #3"},"Domain Profile standard(s)"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"Agricultural And Veterinary Sciences - Agriculture, Land And Farm Management"),Object(c.b)("td",null,Object(c.b)("a",{target:"_blank",href:"https://dwc.tdwg.org/terms/#event"},"Event Core")),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Agricultural And Veterinary Sciences - Animal Production"),Object(c.b)("td",null,Object(c.b)("a",{target:"_blank",href:"https://dwc.tdwg.org/terms/#event"},"Event Core")),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Agricultural And Veterinary Sciences - Crop And Pasture Production"),Object(c.b)("td",null,Object(c.b)("a",{target:"_blank",href:"https://dwc.tdwg.org/terms/#event"},"Event Core")),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Agricultural And Veterinary Sciences - Fisheries Sciences"),Object(c.b)("td",null,Object(c.b)("a",{target:"_blank",href:"https://dwc.tdwg.org/terms/#event"},"Event Core")),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Agricultural And Veterinary Sciences - Forestry Sciences"),Object(c.b)("td",null,Object(c.b)("a",{target:"_blank",href:"https://dwc.tdwg.org/terms/#event"},"Event Core")),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Agricultural And Veterinary Sciences - Horticultural Production"),Object(c.b)("td",null,Object(c.b)("a",{target:"_blank",href:"https://dwc.tdwg.org/terms/#event"},"Event Core")),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Art Theory And Criticism"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Biological Sciences - Biodiversity"),Object(c.b)("td",null,Object(c.b)("a",{target:"_blank",href:"https://dwc.tdwg.org/terms/#event"},"Event Core")," "),Object(c.b)("td",null,Object(c.b)("a",{target:"_blank",href:"https://dwc.tdwg.org/terms/"},"Darwin Core"),Object(c.b)("br",null),Object(c.b)("a",{target:"_blank",href:"https://www.tdwg.org/standards/ac/"},"Audubon Core"),Object(c.b)("br",null),Object(c.b)("a",{target:"_blank",href:"https://www.ogc.org/standards/om"},"Observations and Measurements"))),Object(c.b)("tr",null,Object(c.b)("td",null,"Biological Sciences - Ecology"),Object(c.b)("td",null,Object(c.b)("a",{target:"_blank",href:"https://dwc.tdwg.org/terms/#event"},"Event Core")),Object(c.b)("td",null,Object(c.b)("a",{target:"_blank",href:"https://eml.ecoinformatics.org/"},"Ecological Metadata Language - EML"),Object(c.b)("br",null),Object(c.b)("a",{target:"_blank",href:"https://dwc.tdwg.org/terms/"},"Darwin Core"),Object(c.b)("br",null),Object(c.b)("a",{target:"_blank",href:"https://www.tdwg.org/standards/ac/"},"Audubon Core"),Object(c.b)("br",null),Object(c.b)("a",{target:"_blank",href:"https://www.ogc.org/standards/om"},"Observations and Measurements"))),Object(c.b)("tr",null,Object(c.b)("td",null,"Biological Sciences - Evolutionary Biology"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Biological Sciences - Genetics"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Biological Sciences - Microbiology"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Biological Sciences - Other Biological Sciences"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Biological Sciences - Physiology"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Biological Sciences - Plant Biology"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Biological Sciences - Zoology"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Chemical Sciences - Analytical Chemistry"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Chemical Sciences - Inorganic Chemistry"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Chemical Sciences - Macromolecular And Materials Chemistry"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Chemical Sciences - Medicinal And Biomolecular Chemistry"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Chemical Sciences - Organic Chemistry"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Chemical Sciences - Physical Chemistry"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Chemical Sciences - Theoretical And Computational Chemistry"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Earth Sciences - Atmospheric Sciences"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Earth Sciences - Geochemistry"),Object(c.b)("td",null,Object(c.b)("a",{target:"_blank",href:"https://dwc.tdwg.org/terms/#event"},"Event Core")," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Earth Sciences - Geology"),Object(c.b)("td",null,Object(c.b)("a",{target:"_blank",href:"https://dwc.tdwg.org/terms/#event"},"Event Core")),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Earth Sciences - Geophysics"),Object(c.b)("td",null,Object(c.b)("a",{target:"_blank",href:"https://dwc.tdwg.org/terms/#event"},"Event Core")," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Earth Sciences - Hydrological Sciences"),Object(c.b)("td",null,Object(c.b)("a",{target:"_blank",href:"https://dwc.tdwg.org/terms/#event"},"Event Core")," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Earth Sciences - Oceanography"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Earth Sciences - Physical Geography And Environmental Geoscience"),Object(c.b)("td",null,Object(c.b)("a",{target:"_blank",href:"https://dwc.tdwg.org/terms/#event"},"Event Core")," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Engineering - Aerospace Engineering"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Engineering - Automotive Engineering"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Engineering - Biomedical Engineering"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Engineering - Chemical Engineering"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Engineering - Civil Engineering"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Engineering - Electrical And Electronic Engineering"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Engineering - Environmental Engineering"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Engineering - Food Sciences"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Engineering - Manufacturing Engineering"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Engineering - Maritime Engineering"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Engineering - Materials Engineering"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Engineering - Mechanical Engineering"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Engineering - Other Engineering"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Engineering - Resources Engineering And Extractive Metallurgy"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Environmental Sciences - Ecological Applications"),Object(c.b)("td",null,Object(c.b)("a",{target:"_blank",href:"https://dwc.tdwg.org/terms/#event"},"Event Core")," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Environmental Sciences - Environmental Science And Management"),Object(c.b)("td",null,Object(c.b)("a",{target:"_blank",href:"https://dwc.tdwg.org/terms/#event"},"Event Core")," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Environmental Sciences - Soil Sciences"),Object(c.b)("td",null,Object(c.b)("a",{target:"_blank",href:"https://dwc.tdwg.org/terms/#event"},"Event Core")),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Information And Computing Sciences - Artificial Intelligence And Image Processing"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Information And Computing Sciences - Computation Theory And Mathematics"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Information And Computing Sciences - Computer Software"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Information And Computing Sciences - Distributed Computing"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Information And Computing Sciences - Information Systems"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Information And Computing Sciences - Library And Information Studies"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Language, Communication And Culture - Communication And Media Studies"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Language, Communication And Culture - Cultural Studies"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Language, Communication And Culture - Language Studies"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Language, Communication And Culture - Linguistics"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Language, Communication And Culture - Literary Studies"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Law And Legal Studies"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Mathematical Sciences - Mathematical Physics"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Mathematical Sciences - Numerical And Computational Mathematics"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Mathematical Sciences - Other Mathematical Sciences"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Medical And Health Sciences - Cardiorespiratory Medicine And Haematology"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Medical And Health Sciences - Clinical Sciences"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Medical And Health Sciences - Complementary And Alternative Medicine"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Medical And Health Sciences - Dentistry"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Medical And Health Sciences - Human Movement And Sports Science"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Medical And Health Sciences - Immunology"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Medical And Health Sciences - Medical Biochemistry And Metabolomics"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Medical And Health Sciences - Medical Microbiology"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Medical And Health Sciences - Medical Physiology"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Medical And Health Sciences - Neurosciences"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Medical And Health Sciences - Nursing"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Medical And Health Sciences - Nutrition And Dietetics"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Medical And Health Sciences - Oncology And Carcinogenesis"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Medical And Health Sciences - Optometry And Ophthalmology"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Medical And Health Sciences - Paediatrics And Reproductive Medicine"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Medical And Health Sciences - Pharmacology And Pharmaceutical Sciences"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Medical And Health Sciences - Public Health And Health Services"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Philosophy And Religious Studies - Applied Ethics"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Philosophy And Religious Studies - History And Philosophy Of Specific Fields"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Philosophy And Religious Studies - Philosophy"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Philosophy And Religious Studies - Religion And Religious Traditions"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Physical Sciences - Astronomical And Space Sciences"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Physical Sciences - Atomic, Molecular, Nuclear, Particle And Plasma Physics"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Physical Sciences - Classical Physics"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Physical Sciences - Condensed Matter Physics"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Physical Sciences - Optical Physics"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Physical Sciences - Other Physical Sciences"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Physical Sciences - Quantum Physics"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Psychology And Cognitive Sciences - Cognitive Science"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Psychology And Cognitive Sciences - Psychology"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Statistics"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Studies In Human Society - Anthropology"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Studies In Human Society - Criminology"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Studies In Human Society - Demography"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Studies In Human Society - Human Geography"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Studies In Human Society - Other Studies In Human Society"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Studies In Human Society - Policy And Administration"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Studies In Human Society - Political Science"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Studies In Human Society - Social Work"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Studies In Human Society - Sociology"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Technology - Agricultural Biotechnology"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Technology - Communications Technologies"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Technology - Computer Hardware"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Technology - Environmental Biotechnology"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Technology - Industrial Biotechnology"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Technology - Medical Biotechnology"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Technology - Nanotechnology"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")),Object(c.b)("tr",null,Object(c.b)("td",null,"Technology - Other Technology"),Object(c.b)("td",null," "),Object(c.b)("td",null," ")))))}d.isMDXComponent=!0},91:function(t,e,n){"use strict";var l=n(0),b=n(21);e.a=function(){const t=Object(l.useContext)(b.a);if(null===t)throw new Error("Docusaurus context not provided");return t}},92:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return j}));var l=n(0),b=n.n(l);function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,l,b=function(t,e){if(null==t)return{};var n,l,b={},c=Object.keys(t);for(l=0;l<c.length;l++)n=c[l],e.indexOf(n)>=0||(b[n]=t[n]);return b}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(l=0;l<c.length;l++)n=c[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(b[n]=t[n])}return b}var u=b.a.createContext({}),o=function(t){var e=b.a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=o(t.components);return b.a.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return b.a.createElement(b.a.Fragment,{},e)}},O=b.a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,c=t.originalType,r=t.parentName,u=a(t,["components","mdxType","originalType","parentName"]),d=o(n),O=l,j=d["".concat(r,".").concat(O)]||d[O]||s[O]||c;return n?b.a.createElement(j,i(i({ref:e},u),{},{components:n})):b.a.createElement(j,i({ref:e},u))}));function j(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var c=n.length,r=new Array(c);r[0]=O;var i={};for(var a in e)hasOwnProperty.call(e,a)&&(i[a]=e[a]);i.originalType=t,i.mdxType="string"==typeof t?t:l,r[1]=i;for(var u=2;u<c;u++)r[u]=n[u];return b.a.createElement.apply(null,r)}return b.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},93:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return r}));var l=n(91),b=n(94);function c(){const{siteConfig:{baseUrl:t="/",url:e}={}}=Object(l.a)();return{withBaseUrl:(n,l)=>function(t,e,n,{forcePrependBaseUrl:l=!1,absolute:c=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(b.b)(n))return n;if(l)return e+n;const r=!n.startsWith(e)?e+n.replace(/^\//,""):n;return c?t+r:r}(e,t,n,l)}}function r(t,e={}){const{withBaseUrl:n}=c();return n(t,e)}},94:function(t,e,n){"use strict";function l(t){return!0===/^(\w*:|\/\/)/.test(t)}function b(t){return void 0!==t&&!l(t)}n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return b}))}}]);