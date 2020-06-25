<template>
    
  <div class="container-fluid text-left " >
    <mdb-navbar
      position="top "
      transparent
      color="mdb"
      dark
      scrolling
      class="sticky-top"
      >
      <mdb-navbar-brand @click.native="toggleSideNav" class="button-collapse"><mdb-icon icon="bars"/></mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav>
          <mdb-nav-item href="#/" waves-fixed active>Home</mdb-nav-item>
          <mdb-nav-item href="#/About" waves-fixed active>Overview</mdb-nav-item>
          <mdb-dropdown tag="li" class="nav-item">
            <mdb-dropdown-toggle slot="toggle"  waves-fixe  tag="li" outline="none" class="btn-red">Sections</mdb-dropdown-toggle>
            <mdb-dropdown-menu color="red">
              <mdb-dropdown-item href="#intro">Introduction</mdb-dropdown-item>
              <mdb-dropdown-item href="#parties">Parties to Contract</mdb-dropdown-item>
              <mdb-dropdown-item href="#nature">Nature of a Contract Heading</mdb-dropdown-item>
              <mdb-dropdown-item href="#recite">Recitals and Preambles</mdb-dropdown-item>
              <mdb-dropdown-item href="#date">Date of Agreement</mdb-dropdown-item>
              <mdb-dropdown-item href="#sequence">Sequence of Clauses</mdb-dropdown-item>
              <mdb-dropdown-item href="#specific">Specific Clauses</mdb-dropdown-item>
              <mdb-dropdown-item href="#general">General Clauses</mdb-dropdown-item>
              <mdb-dropdown-item href="#struct">Structure and Language</mdb-dropdown-item>
              <mdb-dropdown-item href="#sign">Signatures</mdb-dropdown-item>
              <mdb-dropdown-item href="#unit">Unit Summary</mdb-dropdown-item>
              <mdb-dropdown-item href="#activity">Activity 1</mdb-dropdown-item>
            </mdb-dropdown-menu>
          </mdb-dropdown>
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
    </mdb-navbar>
    <!-- Header -->
    <div class="Head">
      <h1 class="h1 h1-responsive">UNIT 8</h1>
      <p class="h1-responsive red-text text-center main-topic">DRAFTING OF CONTRACTS</p>
    </div>
    <!-- Header -->

    <div class="row text-left m-2" >  
      <div class="col content text-justify">
        <hr id="intro">
        <br>
        <!--Introduction-->
        <div class="Chapter">  
          <h1 class="text-center chapter-topic  secondary-heading text-primary h1">Introduction</h1>
          <p class="text-left">
            From the information and knowledge covered in both Law203 and Law204, we should be able to appreciate and understand the various components of a contract. In this last unit, we focus on the drafting of contracts. We will focus on the main averments that should be included when drafting a contract. These include being able to identify the parties, describing the parties, nature and heading of a contract, definition and interpretation clauses, essential elements, suspensive conditions and general clauses. Many contracts are concluded informally, but contracts of a commercial nature are generally concluded or reflected in writing. The contractual document is the instrument that reflects the agreement between the parties and it usually the primary evidence relied upon to enforce contractual rights.
          </p>
                
          <br>

          <!--Contents-->
          <div> 
            <h4 class="h4 text-left">Contents</h4>
            <p class="h6">This Unit is divided into eight (8) key areas:</p>
            <ol id="contentlist" style="list-style-type:decimal;">
              <li>Parties to a contract.</li>
              <li>Describing the parties to a contract.</li>
              <li>Nature of contract and heading.</li>
              <li>Recitals and preambles.</li>
              <li>Date of agreement</li>
              <li>Sequence, specific and general clauses.</li>
              <li>Structure and language of a contract</li>
              <li>Signatures.</li>
            </ol>
          </div>
          <!--/Contents-->
                
          <br>
                 
          <!--Outcomes--> 
          <div class="">
            <h4 class="h4"> <i class="fas fa-graduation-cap"> Outcomes</i></h4> 
            <p class="h6">Upon completion of this unit you will be able to:</p>
            <ul>
              <li>Describe the essential parties to a contract</li>
              <li>Explain the nature of contract and heading </li>
              <li>Write  recitals and preambles for a contact </li>
              <li>Sequence, specific and general clauses in a contract </li>
              <li>Use the appropriate structure and language in a contract</li>
              <li>Justify the significance of signatures in a contract.</li>
            </ul>
          </div>
          <!--/Outcomes-->

          <br>

          <!--Terminology --> 
          <div class="text-left">
            <h4 class="h4"> <i class="fas fa-spell-check"> Terminology</i></h4>
            <p class="h6">In this Unit, you will be introfuced to the following concepts:</p>
            <ul class="list-unstyled"> 
              <li>Recitals</li>
              <li>Preamble</li>
              <li>Amendments</li>
              <li>Governing law</li>
              <li>Suspensive condition</li>
              <li>Resolutive condition</li>
              <li>Confidentiality</li>
              <li>Active voice</li>
              <li>Passive voice</li>
              <li>Indicative verb</li>
              <li>Subjunctive verb</li>
            </ul> 
          </div>
          <!--/Teminology--> 

          <br>

          <!--Reading-->
          <div id="reading " >
            <h4 class="h4"><i class="fas fa-book"></i> Reading</h4>
            <ul>
              <li>Deeksha Bhana, Elsje Bonthuys and Minette Nortje,<em class="h6"> “Students Guide to the Law of Contract”</em>,
                3rd Edition, 2013</li>
              <li>AJ Kerr,<em class="h6"> “The Principles of the Law of Contract”</em>, 6th Edition, 2002</li>
              <li>RH Christie,<em class="h6"> “The Law of Contract in South Africa”</em>, 3rd Edition, 1996</li>
            </ul>
          </div>
          <!--/Reading-->
                
          <br>

          <!--Case Studies--> 
          <div >
            <h4 class="h4"> <i class="fas fa-gavel"> Case Law</i></h4>
            <p class="text-danger">There is no case law applicable in the drafting of contracts. </p>
          </div>
        </div>
        <!--/Introduction-->

        <hr id="parties">
        <br>

        <!--Parties-->
        <div  class="Chapter">
          <h1 class="h1 text-center chapter-topic secondary-heading text-primary">Parties to Contracts</h1>
          <p>Since no contracts can come into existence without the parties thereto, the first step in drafting a contract is to identify and describe the parties accurately so as to avoid any uncertainty .Since no contracts can come into existence without the parties thereto, the first step in drafting a contract is to identify and describe the parties accurately so as to avoid any uncertainty<sup id="197r"><a href="#197">197</a></sup>.</p>
          <ol>
            <li class="h5">Identity of the Parties</li>
            <p>It is vitally important to note that a party must be an independent legal subject<sup id="198r"><a href="#198">198</a></sup>. The following should be determined before the parties enter into a contract:</p>
            <ul>
              <li>The nature of the entity (for example, a registered corporation or merely a natural person trading under another name)</li>
              <li>The status and capacity of a person (for example, whether a person is a minor requiring assistance or an insolvent) <sup id="199r"><a href="#199">199</a></sup>.</li>
              <ol class="list-unstyled">
                <li class="h6">Reflection</li>
                <p>
                  If a department of a university wishes to contract with a supplier, the contracting parties will be the university (not the department) and the supplier. The department is not a separate legal entity although the head of department could be authorised to sign the contract on behalf of the university. 
                </p>
                <p>
                  It is worth mention that any person who is to have rights or duties under the contract should be a party. Sometimes parties are added to the contract although they do have duties and obligations in terms of that particular contract. Hutchison argues that this position in not generally advisable, parties to a contract must have duties and obligations.
                </p>
              </ol>
            </ul>
            <li class="h5">Describing the Parties </li>
            <p>It is good practice to always provide as much information as possible to identify the parties at the head of the agreement<sup id="200r"><a href="#200">200</a></sup>. For legal certainty, at the head of an agreement, the full names and identity numbers as well as the status of the natural person should appear. In the case of juristic or legal person, the full name (such as the company name identified by the wording (Pty) Ltd) and possible identity numbers such as the company registration number should appear. A company registration number remains constant, even though the company name may change. Where no registration number is available, the principal place of business can be used.</p>
            <ul class="list-unstyled">
              <li class="h6">Reflection</li>
              <p>
                Where parties share any obligations, it should be made clear in the provisions of the contract whether they are jointly or severally liable, or whether there is simple joint liability of performance of those obligations.  
              </p>
            </ul>
          </ol>
        </div> 

        <hr id="nature">
        <br>
        <!--Nature-->
          <div class="Chapter">
            <h1 class="h1 text-center chapter-topic secondary-heading text-primary">Nature of a Contract Heading</h1>
            <p>A contract does not require the heading “contract” to identify it as such as its content will indicate its nature. However, terms used as heading include “agreement” “contract” or a name specifying the specific nominate contract concluded such as “Purchase and Sale Agreement”. A contract will be a nominate contract if it contains the required essentialia for that type of nominate contract even though the contract is not specifically identified in name.</p>
            <div class=" example z-depth-2 bg2 p-3 m-4">
              <h6 class="text-left class h6 text-danger"><mdb-icon far icon="bell"/> Note it</h6>
              <p>A Memorandum of Understanding or MoU is also a valid and binding contract if reflects consensus between the parties. An MoU is usually a preliminary, short and basic contract that creates a binding a legal obligation between the parties in anticipation of successful negotiations on the finer and more intricate details of the relationship that the parties envisage. Any subsequent agreement on these outstanding issues and the drafting of a comprehensive formal main contract document could either completely substitute, or only complement the provisions in the initial MoU.</p>
            </div>
          </div>
        <!--/Nature-->

        <hr id="recite">
        <br>

        <!--Recite-->
        <div  class="Chapter">
          <h1 class="h1 text-center chapter-topic secondary-heading text-primary">Recitals and Preambles</h1>
          <p>Recitals and preambles may be helpful to explain the background to an agreement, but they are not compulsory<sup id="201r"><a href="#201">201</a></sup>. If they are incorporated in the agreement, they should not include any obligations owed by the parties as these should be included in the operative clauses. </p>
        </div>
        <!--/Recite-->

        <hr id="date">
        <br>

        <!--Date-->
        <div class="Chapter">
          <h1 class="h1 text-center chapter-topic secondary-heading text-primary">Date of Agreement</h1>
          <p>The agreement should be dates with the date on which it was signed. This can be done either at the beginning of the agreement or at the end of the document. The latter is usually preferred.</p>

          <!--Example 1-->
          <div class="example z-depth-2 bg2 p-3 m-4">
            <h6 class="text-left class h6">Example 1</h6>
            <em>
              <p>THIS AGREEMENT IS MDAE ON THE……….DAY OF………20…………BETWEEN:</p>
              <div>or</div>  
              <p>THUS DONE AND SIGNED AT ………………………………ON THE ………………..DAY OF…………….20……IN THE PRESENCE OF THE UNDERSIGNED WITNESSES. 
              </p>
            </em>
          </div>
          <!--/Example1-->
          
          <p>The date of the agreement is the date on which it has been executed by all parties to the agreement. If parties sign on different dates, the date of the agreement is the date when the last party signs. According to Hutchison<sup id="202r"><a href="#202">202</a></sup>, the agreement date is important for the following reasons:</p>
          <ul>
            <li>One practical reason is so that the agreement may be referred to at a later date (for example, the agreement between A and B dated   X). </li>
            <li>The date will provide clarity regarding the statues, rules and regulations that were in operation at the time of conclusion, as well as determine the contractual capacity of the parties at the date of signing. </li>
            <li>Often an agreement will include provisions that take effect by reference to the date of the agreement (for example, royalties may be paid on each anniversary of the date of the licence contract). </li>
            <li>Where there are several contracts concerned with the same subject matter, it may be essential to know the order in which they were made to determine which contract was first in time and therefore strongest in right.</li>
            <li>Express stipulations on the exact time and place of the conclusion of the contract exclude the need to apply the theories in our law that determine time and place.</li>
          </ul>
        </div>
        <!--Date-->

        <hr id="sequence">
        <br>
        <!--Sequence of Clauses-->
        <div class="Chapter">
          <h1 class="h1 text-center chapter-topic secondary-heading text-primary">Sequence of Clauses</h1>
          <p>Contracts typically include various types of clauses, each playing a particular role. The order in which various clauses appear in a contractual document may greatly affect the meaning of the contract-and certainty, it will affect the ease or difficulty with which a document is understood. </p>
          <p>Hutchison<sup id="203r"><a href="#203">203</a></sup> alludes that in general, it is often sound to use the following sequence clauses: </p>
          <ul>
            <li>Definition clauses</li>
            <li>Interpretation clause</li>
            <li>Reference to documents attached or incorporated by reference</li>
            <li><em>Essentialia</em> </li>
            <li><em>Naturalia</em> (if not excluded)</li>
            <li><em>Incidentalia</em><sup id="204r"><a href="#204">204</a></sup></li>
            <li>Miscellaneous and general incidental clauses. </li>
          </ul>
          <ol class>
            <li class="h6">Definition and Interpretation Clauses</li>
            <p>The use of defined terms can simplify a document immeasurably. While the number and extent of the definition section depend upon the nature of the agreement, virtually all contracts will include some defined terms.</p>
            <li class="h6">Documents attached or incorporated by reference</li>
            <li class="h6">Essential Elements</li>
            <li class="h6">Additional provisions</li>
          </ol>
        </div>
        <!--/Sequences of Clauses-->

        <hr id=specific>
        <br>
        
        <!--Specific Clauses-->
        <div class="Chapter">
          <h1 class="h1 text-center chapter-topic secondary-heading text-primary">Specific Clauses</h1>
          <ol>
            <li class="h6">Suspensive or resolutive conditions and time periods </li>
            <p>Conditions refer to events, the occurrence of which either triggers or discharges the duty of a party to a contract to perform the obligations created by the promises. It is important to understand that such conditions refer to conditions to performance of an obligation of a contract that has already been formed. An event that conditions performance may be either a “condition precedent” or a “condition subsequent”. A condition precedent is an event that must occur before performance of an obligation becomes due. Thus, the occurrence of the condition precedent triggers the obligation in the contract. In contract, a condition subsequent is an event whose occurrence discharges an obligation. The use of conditions precedent is more common in contract drafting. </p>
            <p>Typical language for the expression of conditions are phrases such as: “if…, then…”; “provided that…”; “on condition that…”; “in the event that…”. In addition to express conditions written into the contract, some conditions may be implied from circumstances (such as usage of trade). The consequence for non-occurrence of an event that is made a condition of an obligation in a contract can be significant: the conditioned obligation of a party typically would become discharged.</p>
            <li class="h6">Clauses on breach of contract </li>
            <p>Although promises are not necessarily made to be broken, that possibility must be considered when drafting a contract. What will constitute a breach of the agreement? What opportunity will the parties have to “cure” the breach?</p>
            <li class="h6">Liability, indemnity and exemption clauses</li>
            <p>The indemnification portion of the contract deals with the allocation of liability in the event that all does not go as planned. Questions to be addressed in this portion of the contract include who will be liable for what, and to what extent.</p>
            <li class="h6">(iv)	Performance guarantees and warranties </li>
            <p>Most agreements will include affirmative duties owed to each party by the other party, in specific sections setting forth each party’s respective performance obligations. In addition, contracts generally include warranties, indemnities, and limitations on warranties.</p>
            <p>Simply stated, a warranty is a promise. Warranties are, for the most part, promises concerning the future quality or performance of goods to be sold or leased, of real property to be sold or leased, of intellectual property to be sold or licensed, or of services to be rendered. A breach of warranty results if the quality or performance falls short of the promise made in the contract. In addition, commercial codes describe the express and implied warranties that arise in certain transactions. Some warranties are statements of facts. A breach of warranty would result if the fact warranted is untrue. However, whether the warranty is based on promise or statement of fact, breach of warranty has the same consequences as the breach of any other promise.</p>
          </ol>
        </div>
        <!--/Specific Clauses-->

        <hr id="general">
        <br>

        <!--General Clauses-->
        <div class="Chapter">
          <h1 class="h1 text-center chapter-topic secondary-heading text-primary">General Clauses</h1>
          <ol class="text-left">
            <li>Amendment </li>
            <li>Entire agreement </li>
            <li>Cession, delegation and assignment </li>
            <li>Waiver/relaxation of terms</li>
            <li>Communications, notices and addresses for service/<em>domicilia citandi et executandi</em></li>
            <li><em>Force majeure</em></li>
            <li>Governing law</li>
            <li>Jurisdiction of the Magistrates’ courts </li>
            <li>Alternative dispute resolution procedures </li>
            <li>Costs</li>
            <li>Confidentiality</li>
          </ol>
        </div>
        <!--/General Clauses-->

        <hr id="struct">
        <br>

        <!--Structure and Langugae-->
        <div class="Chapter">
          <h1 class="h1 text-center chapter-topic secondary-heading text-primary">Structure and Language</h1>
          <p>
            The techniques and rules discussed here for the drafting are not prescriptive or peremptory but are suggestions to help the drafter to achieve his or her objectives. The main objective when drafting any contract is to ensure that a court will interpret the contract in the way the parties intended. Hutchison has summarised that standard ways of expressing particular concepts, which will be understood by the court as follows:
          </p>
          <ul>
            <li>Use simple and direct language.</li>
            <li>Sue short sentences and correct word order, preferably in an active voice.</li>
            <li>Use defined terms where needed.</li>
            <li>Order clauses in a logical and practical sequence.</li>
            <li>Use techniques such as headings, numbering and punctuation to make the contract clear.</li>
            <li>Specify clearly who has the duty to perform and to whom.  </li>
          </ul>
          <ol>
            <li class="h6">Language</li>
            <p>The drafter should be aware of how words are used and understood by other legal drafters and by the courts. A common mistake is the use of the term “termination” as a synonym for the term “cancellation”<sup id="205r"><a href="#205">205</a></sup>.  Traditional contract language often includes jargon and old-fashioned language that not part of everyday speech.</p>
            <li class="h6">Sentence structure and length </li>
            <p>Keep sentences short: average 15 words. If you go over 30, you run the risk that the reader may have a problem to follow you. As author, you are responsible for communicating your ideas efficiently and effectively.</p>
            <p class="red-text"><mdb-icon far icon="bell"/><strong> Note: </strong>the exception when using bullet points and lists.</p>
            <li class="h6">Active and Passive voice</li>
            <p>A serious problem in legal documents is overuse of passive verbs. Documents are more readable in English if the passive is avoided. Say again? You can make documents more readable in English by avoiding the passive. Documents in English are more readable when the drafter avoids the passive. If the English-language drafter avoids the passive, then the document becomes more readable.  Passive verbs hide responsibility and make sentences longer than needed.</p>
            <ol >
              <p class="h6"> Possible Cures</p>
              <ul>
                <li>Put a subject (the “doer”) before the verb.</li>
                <li>Cut part of the verb</li>
                <li>Use another verb.</li>
              </ul>
              <ul class="list-unstyled">
                <li><em>Use the Passive rarely *</em></li>
                <li>Two or three time a page is enough.</li>
                <li>Use passives when the doer of the verb is obvious, unimportant, or unknown.</li>
                <li>Use <em>you </em>where possible</li>
                <li>Often, “you” is implied (understood).</li>
                <li>Without “you” it is almost impossible to avoid passives, especially when stating obligations (imperatives). The cleanest way to avoid passives is to lead with verbs as commands, e.g., <em>provide, avoid, include, perform.</em></li>
                <li>In this way it is even possible to avoid “you must”.</li>
                <li>Active verbs become natural for writers who ask the important question – WHO does WHAT to WHOM? (In grammar: SUBJECT + VERB + OBJECT).</li>
              </ul>
            </ol>
            <p></p>
            <li class="h6">(iv)	Indicative and subjunctive </li>
            <p>In contractual drafting, it is generally advisable to avoid the Revisit Law203 for a recap on the common law classification of terms subjunctive form of verb. The subjunctive mood is a grammatical mood that expresses doubt, wishful thinking, and possibility and is not suited to the certainty that is the aim of formal contracts.
            </p>
            <div class="example z-depth-2 bg2 p-3 m-4">
              <h6 class="text-left class h6">Example 2</h6>
              <p>Subjunctive and indicative forms of verb:</p>
              <ol>
                <li>Y shall pay X the sum of E1000,00 within 30 days of the date of this Agreement. </li>
                <li>Y should pay X the sum of E1000,00 within 30 days of the date of this Agreement. </li>
              </ol>
              <p></p>
              <p>
                From the example above, (i) with “shall” is indicative, (ii) with “should” is subjunctive. The latter is ungrammatical in the contractual context and should be avoided. 
              From the example above, (i) with “shall” is indicative, (ii) with “should” is subjunctive. The latter is ungrammatical in the contractual context and should be avoided. 
                From the example above, (i) with “shall” is indicative, (ii) with “should” is subjunctive. The latter is ungrammatical in the contractual context and should be avoided. 
              </p>
            
            </div>   
          </ol>
        </div>
        <!--/Structure and Language-->

        <hr id="sign">
        <br>

        <!--Signatures-->
        <div class=
        "Chapter">
          <h1 class="h1 text-center chapter-topic secondary-heading text-primary">Signatures</h1>
          <p>Signature blocks for parties and witnesses should be used at the end of the contract. Read more on their significance; get relevant information from the internet and library. </p>
        </div>
        <!--/Signatures-->

        <hr id="unit">
        <br>

        <!--Unit Summary-->
        <div class="Chapter">
          <h1 class="h1 text-center chapter-topic secondary-heading text-primary"><i class="fas fa-book-reader"> Unit summary</i></h1>
          <p>After having done LAW203 and LAW204, this Unit brings us to the end of the law of contract. This Unit is just a summary of the entire law of contract. It brings the practical aspect of this very fascinating course. After this unit, you should be able to draft a simple contracts following the study guidelines  discussed in the unit.</p>
        </div>
        <!--/Unit Summary-->
       
        <hr id="discussion">
        <br>
        
        <!--Discussion-->
        <div class="Chapter">
          <h1 class="text-center chapter-topic  secondary-heading text-primary h1"><i class="fas fa-comments"></i> Discussion</h1>
          <p>Briefly discuss the all the necessary guidelines and clauses that must be present in a standard contract. Post your responses on Moodle. </p>
        </div>
        <!--/Discussion-->

        <hr id="activity">
        <br>

        <!--Activity 1--> 
        <div  class="Chapter">
          <h1 class="h1 text-center chapter-topic secondary-heading text-primary"><i class="fas fa-tools">Activity 1</i></h1>
          <p>Using the guideline covered in this agreement. Draft simple contract of your choice. </p>
        </div>
        <!--/Activity 1-->

        <hr id="conclusion">
        <br>

        <!--Conclusion-->
        <div class="Chapter"> 
          <h1 class="h1 text-center chapter-topic secondary-heading text-primary">Conclusion</h1>
          <p>Thank you for sharing this second half of the semester with me. I hope it has been a rewarding experience for you to be exposed on the basic concepts of the law of contract. Please use this knowledge you have gained in a profitable manner. </p>
        </div>
        <!--/Conclusion--> 

      
        <hr>
        <br>

        <!--References-->
        <div class="Chapter">
        <h1 class="h1 text-center chapter-topic secondary-headeing text-primary">References</h1>
          <p id="197"><sup><a href="#197r">197</a></sup>  Hutchison, “The Law of Contract in South Africa”, 3rd Edition, Oxford, p.408 </p>
          <p id="198"><sup><a href="#198r">198</a></sup>  Hutchison supra p.408</p>
          <p id="199"><sup><a href="#199r">199</a></sup>  Refer to Law203 under capacity to contract for ease of reference. </p>
          <p id="200"><sup><a href="#200r">200</a></sup>  Hutchison, “The Law of Contract in South Africa” 3rd Edition, Oxford, p.410.</p>
          <p id="201"><sup><a href="#201r">201</a></sup>  Hutchison, “The Law of Contract in South Africa” 3rd Edition, Oxford, p.412</p>
          <p id="202"><sup><a href="#202r">202</a></sup>  Hutchison, “The Law of Contract in South Africa” 3rd Edition, Oxford, p.413</p>
          <p id="203"><sup><a href="#203r">203</a></sup>Hutchison, “The Law of Contract in South Africa” 3rd Edition, Oxford, p.413</p>
          <p id="204"><sup><a href="#204r">204</a></sup>Revisit Law203 for a recap on the common law classification of terms</p>
          <p id="205"><sup><a href="#205">205</a></sup>  Refer to Unit 4 of this module for a refresher on termination and cancellation. </p>
        </div>
        <!--References-->
      </div>
    </div>
  </div>
 
</template>

<script>
  import { 
    mdbScrollSpy, 
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbDropdown, 
    mdbDropdownItem, 
    mdbDropdownMenu, 
    mdbDropdownToggle, 
    mdbNavbarBrand, 
    mdbIcon
  } from "mdbvue";
  import { mapActions } from 'vuex';
  export default {
    components: {
      mdbNavbar,
      mdbNavItem,
      mdbNavbarNav,
      mdbNavbarToggler,
      mdbDropdown, 
      mdbDropdownItem, 
      mdbDropdownMenu, 
      mdbDropdownToggle, 
      mdbNavbarBrand, 
      mdbIcon
    },directives: {
      mdbScrollSpy
    } ,
    data() {
    return {};
  },
  methods: mapActions(['toggleSideNav']),
  computed: {
    computedPage () {
      return {
        activePage: this.page,
        toggle: false
      }
    }
  },    scrollToTop() {
        window.scrollTo(0,0);
    },
    mounted () {
    this.activePage = this.$route.name
  },
  updated () {
    this.activePage = this.$route.name
  }

  };
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Libre+Franklin&display=swap');


</style>

