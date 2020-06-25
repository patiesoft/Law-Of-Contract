<template>
<!--Navbar-->
<div class="container-fluid text-left">
   
    <!--DropDown Button  -->
      <div class=" sticky-top col-sm-12 col-lg-0 cont"  color="">
        <mdb-dropdown  v-mdb-scroll-spy="{container: 'custom-container'}" class="dropChapter"  color="">
          <mdb-dropdown-toggle color="primary" slot="toggle">Chapters</mdb-dropdown-toggle>
          <mdb-dropdown-menu>
            <mdb-dropdown-item><a class="nav-link active"   href="#introduction">Introduction</a></mdb-dropdown-item>
            <mdb-dropdown-item><a class="nav-link"          href="#facts">         Facts</a></mdb-dropdown-item>
            <mdb-dropdown-item><a class="nav-link"          href="#issues">        Issues</a></mdb-dropdown-item>
            <mdb-dropdown-item><a class="nav-link"          href="#unitSammary">   Unit Sammary</a></mdb-dropdown-item>
            <mdb-dropdown-item><a class="nav-link"          href="#typeOfCondition">   Types of Condition</a></mdb-dropdown-item>
            <mdb-dropdown-item><a class="nav-link"          href="#activity1">Activity 1</a></mdb-dropdown-item>
            <mdb-dropdown-item><a class="nav-link"          href="#activity2">Activity 2</a></mdb-dropdown-item>
            <mdb-dropdown-item><a class="nav-link"          href="#selfAssessment">SELF-ASSESMENT</a></mdb-dropdown-item>           
            <div class="dropdown-divider"></div>
            <mdb-dropdown-item><a><mdb-icon far icon="arrow-alt-circle-up" /></a></mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
      </div>
    <!--DropDown Button  -->
      
            
            
      

    <!-- Header -->
    <div class="Head"> 
       <br>
        <p class="h1-responsive red-text text-center main-topic">CONDITIONS AND WARRANTIES</p>
    </div>
    <!--/Header -->        

    <!-- Body rom -->
    <div class="row  text-left m-2" > 
          <!-- Side Nav -->
            <div id="topics" class="col-sm-3 col-lg-2 sideNev  ">
                <div class="sticky-top border border-primary">
                    <h1 class="h1 text-center red-text h1-responsive">UNIT 1</h1>
                     <hr >
                
                    <ul  v-mdb-scroll-spy="{container: 'custom-container'}" >
                        <li><a class="nav-link active"   href="#introduction">  Introduction</a></li>                
                        <li><a class="nav-link"          href="#facts">         Facts</a></li> 
                        <li><a class="nav-link"          href="#issues">        Issues</a></li> 
                        <li><a class="nav-link"          href="#held">          Held</a></li> 
                        <li><a class="nav-link"          href="#unitSammary">   Unit Sammary</a></li> 
                        <li><a class="nav-link"          href="#activity1">     Activity 1</a></li> 
                        <li><a class="nav-link"          href="#activity2">     Activity2</a></li> 
                        <li><a class="nav-link"          href="#selfAssessment">SELF-ASSESMENT</a></li> 
                    </ul>
                </div>
            </div>
        <!-- Side Nav -->



        <!--Body col-->
        <div class="col content text-justify"> 
            <!--Chapter Introduction --> 
            <hr id="introduction">
            <br>
            <div class="Chapter" >
                <h1 class="text-center chapter-topic  secondary-heading text-primary"> <strong>Introduction</strong></h1> 
                <div>   
                    <p> 
                        The nature of the provisions of a contract will vary from case to case, 
                        depending on legal requirements, as well as the objectives and intentions of the parties. 
                        Contracts often come with conditions and warranties. For instance if, 
                        in agreements where electronic devices are sold, there is normally
                        an indication of a warranty period- in some cases, the warranty may even be sold separately as a commodity. 
                        A prudent lawyer ought to know the meaning and legal implications of conditions and warranties in contracts.
                    </p>       

                    <!--Contents -->   
                    <h4 class="text-left"><strong>Contents</strong></h4>
                    <h6 class="h6"><strong>This Unit is divided into three (3) areas:</strong></h6> 
                    <p class="text-left">
                        <ol id="contentlist" style="list-style-type:decimal">
                            <li>Conditions</li>
                            <li>Types of Conditions</li>
                            <li>Warranties</li>
                        </ol>
                    </p>
                    <!--/Contents -->

                    <!--Outcomes -->
                    <div class="">
                        <h4> <i class="fas fa-graduation-cap"> Outcomes</i></h4>
                        <h6 class="h6"> <strong>Upon completion of this unit you will be able to:</strong></h6>
                    <ul class="text-left">
                        <li>Demonstrate a reasonable comprehension of conditions and warranties.</li>
                            <li>Draw the fundamental differences between conditions and warranties</li>
                            <li>Determine the significance of warranties in contracts.</li>
                        </ul>

                    </div>
                    <!--/Outcomes -->

                    <!--Terminology -->
                    <div class="text-left">
                        <h4> <i class="fas fa-spell-check"> Terminology</i></h4>
                        <h6>Conditions</h6>
                        <h6> Warranties</h6>
                        <h6>Suspensive condition</h6>
                        <h6>Resolutive conditions</h6>
                        <h6>Fictional fulfilment</h6>
                        <br>
                        <div class="note note-warning">NB: Find the meanings of these key terms in this unit.</div>
                    </div>
                    <!--Terminology -->

                    <br>

                    <!--Time-->
                    <div class="text-left">
                            <h4 class="h4"><i class="far fa-clock"></i> Time</h4>
                        <p>You will be expected to have covered this Unit in one week.</p> 
                    </div>
                    <!--Time-->

                    <br>

                    <!--Study Skills-->
                    <div class="text-left">
                        <h4 class="h4"><mdb-icon icon="book-open" /> Study Skills</h4>
                        <strong>The study skills that will be required in this Unit are as follows:</strong> 
                        <ul>
                            <li>You will be expected to have basic knowledge on the basic classification of terms covered in LAW203.</li>
                            <li>As we are now in the era of technology and E-Learning, you will be referred to relevant and informative websites on the law of contract.</li>
                        </ul>
                    </div> 
                    <!--/Study Skills--> 
                
                    <br>

                    <!--Case Studies-->
                    <div >
                        <h4 class="h4"> <i class="fas fa-gavel"> Case Law</i></h4>
                        <ul>
                            <li>Poussard v Spiers (1876) 1 QBD 410</li>
                            <li>R. v Katz 1959 (3) S.A. 408</li>
                            <li>Norlaw Investments (Pty) Ltd v Eric Slabbert Agencies (Pty) Ltd (2507/2011) [2013] SZHC 69 (3rd May, 2013)</li>
                            <li>MPE Timbers Swaziland (Pty) Ltd & Timber Magnet (Pty) Ltd v Ngwane Treated Timbers (Pty) Ltd. (44/2015) [2015] SZSC 06 (09 DECEMBER 2015)</li>
                            <li>MacDuff & Co Ltd (in Liquidation) v Johannesburg Consolidated Investment Co Ltd 1924 AD 573</li>
                            <li>Lekup Prop Co No 4 (Pty) Ltd v Wright (286/11) [2012] ZASCA 67 (23 May 2012).</li>
                            <li>Lungisani Vilakati v Purell (Pty) Ltd, (945/14) [2017] SZHC158 (27th July, 2017)</li>
                        </ul>
                    </div>
                    <!--Case Studies-->
                    <br>
                    <!--Reading--> 
                    <div id="reading " >
                        <h4 class="h4"><i class="fas fa-book"></i> Reading</h4>
                        
                        <ul>
                            <li>Robert Sharrock “Business Transactions Law” 9th Ed, Juta</li>
                            <li>Dale Hutchison “ The Law of Contract in South Africa”, 3rd Ed, Oxford</li>
                            <li>Gibson, “South African Mercantile and Company Law” 8th Ed, Juta</li>
                        </ul>
                    </div>
                    <!--/Reading-->
        
                </div>
            </div>
            <!--/Chapter Introduction -->

                

            <hr id="facts">
            <br>
            
            
            <!--Chapter Facts-->
            <div class="Chapter" >
                <h1 class="text-center chapter-topic secondary-heading text-primary"><strong>Facts</strong></h1>
                <p>
                    You will recall that one of the units in LAW203, we defined terms and the 
                    classifications according to modern and Roman-Dutch Law. To avoid confusion,
                    our main focus was on terms and we did not touch on conditions. It is very 
                    important to mention at the very inception of this unit that there is big 
                    difference between terms, conditions and warranties. Let us distinguish terms 
                    from conditions. ‘Terms’ in a contract serve to determine the contents of a contract.
                    On the other hand, a condition is a term which makes the enforceability or
                    consequence of the contract dependent on the occurrence or non-occurrence of 
                    an uncertain future event.1
                </p>
                <p>
                    A condition is a major term of the contract which goes to the root
                    of the contract. If a condition is breached the innocent party is entitled 
                    to repudiate (end) the contract and claim damages2. This principle was clearly
                    illustrated in the old case of Poussard v. Spiers3.
                </p>
                <p>
                    The Claimant (Poussard) was an opera singer. She was contracted by the defendant 
                    to perform in that capacity for a duration of three months. This was to subject to 
                    certain conditions, such as a salary of £11 per week, a start of “on or about” the 
                    14th of November and an option to re-engage the Claimant’s services for another three 
                    months for a salary not exceeding 14 pounds per week. Instead of the 14th of November
                    however, the launch performance was subsequently scheduled for the 28th of November,
                    to which the Claimant gave no objection. However, she fell ill just before the start
                    of the opera and could not sing for the first three days. The defendant hired another 
                    singer as potential cover and then actual cover when the claimant could not sing for 
                    the first three days of performances. Once the Claimant was well again, she wanted to 
                    take up her position in the performance but this was refused by the Defendant. An action
                    for wrongful dismissal was then launched against the defendant. At trial, the jury found
                    in favour of the defendant and awarded them the right to claim £83 from the Claimant, as 
                    it had been reasonable to hire her replacement. The Claimant appealed against this.
                </p>
            </div>
            <!--Chapter /Facts-->
                
            <hr id="issues">
            <br>

            
            <!--Issues-->
            <div class="Chapter ">
                
                <h1 class="text-center chapter-topic secondary-heading text-primary"><strong><i class="fas fa-puzzle-piece"></i> Issues</strong></h1>
                <ol>
                    <p>
                        The issue in this case was whether failing to turn up to the first day of performance amounted to a breach of a condition of the contract.
                    </p>
                    <hr id="held">
                    <br>
                    <h1 class="text-center chapter-topic secondary-heading text-primary"><strong>Held</strong></h1>
                    <p>
                        It was held that failure to turn up did amount to a breach of a condition of the contract 
                        as this went to its very root and that Spiers were therefore free to rescind the contract.
                    </p>

                    <!--Box-1 Example-1--> 
                    <div class="example z-depth-2 bg2 p-3 m-4">
                        <h6 class="text-left class h6">Example 1</h6>
                        <em>
                        <p>
                            Nomcebo promises Phindile E500, 00 if she travels to Germany in May. The contract is concluded 
                            in January, but Phindile may claim the money only if she fulfils the condition. What is the condition?
                            The operation of the contract is suspended and rendered dependent on an uncertain future event. 
                            If on the other hand, Nomcebo promises Phindile E500, 00 in February with the stipulation that she 
                            must travel to Germany in May, we are not dealing with a condition. Phindile may claim the E500, 
                            00 immediately, but Nomcebo will be able to sue her for breach of contract if she does not fulfil
                            her obligation. The operation of the contract is not rendered dependent on an uncertain future event 
                            in the second scenario: the agreement is unconditional and immediately enforceable. The intention of
                            the parties determines whether we are dealing with a condition or term (in the form of a counter-
                        </p>
                        </em>
                    </div>
                    <!--Box-1 Example-1 end-->

                    <hr id="typeOfCondition">
                    <br>

                    <div>
                        <h1   class="text-center  secondary-heading text-primary chapter-topics"> <strong>Types Of Conditions </strong></h1>
                        <p>
                            In a unanimous judgment, De Villiers A.J. sitting with Watermeyer J in R. v Katz4 explaining the types
                            of conditions, it was held as follows:
                        </p>
                        <p>
                            “The word ‘condition’ in relation to a contract is sometimes used in a wide sense as meaning a provision 
                            of the contract, i.e. an accepted stipulation, as for example in the phrase ‘conditions of sale’. 
                            In this sense the word includes ordinary arrangements as to time and manner of delivery and of payment
                            of the purchase price, etc-in other words the so-called accidentalia of the contract. In the sense of 
                            a true suspensive or resolutive condition, however, the word has a much more limited meaning, viz. of 
                            a qualification which renders the operation and consequences of the whole contract dependent upon an 
                            uncertain future event…. Where the qualification defers the operation of the contract, the condition is
                            suspensive, and where it provides for dissolution of the contract after interim operation, the condition 
                            is resolutive. The exact dividing line between the two classes is sometimes difficult to draw, because 
                            failure of a suspensive condition may have a resolutive effect, and a resolutive condition in a sense 
                            suspends dissolution of the contract. But for present purposes that aspect of the matter need not be pursued.
                            What is of importance is the distinction between true conditions of either kind and ordinary stipulations 
                            falling outside their category. In the case of true conditions the parties by specific agreement introduce
                            contingency as to the existence or otherwise of the contract, whereas provisions which are not true conditions
                            bind the parties as to their fulfilment and on breach give rise to ordinary contractual remedies of a compensatory
                            nature, i.e. (depending on the circumstances) specific performance, damages, cancellation or certain combinations of these…”
                        </p>
                        <p>
                            The above -mentioned case was very instrumental to the judgment of the Swaziland High Court in the case of Norlaw Investments 
                            (Pty) Ltd v Eric Slabbert Agencies (Pty) Ltd5.
                        </p>
                        <p>
                            From the summary above, I am sure it has dawned to the reader that in the strict sense there are two types of conditions. 
                            These are the suspensive conditions and resolutive conditions. We will briefly unpack them below.
                            <ol type="a">
                                <li>
                                    <h5 class="h5"> Suspensive Condition</h5>

                                    <ol>
                                        <li class="h6">Nature</li>
                                        <p>
                                            According to Sharrock6 by its very nature, the suspensive condition suspends the operation of an obligation arising
                                            from the contract (or a number of obligations, or the whole contract) until the occurrence or non-occurrence as the 
                                            case may be, of future uncertain event. This definition was also upheld in the case of Tamarillo (Pty) Ltd v. B N Aiken 
                                            (Pty) Ltd7. Other jurists have suggested from time to time that where there is a suspensive condition there is no contract
                                            at all until the condition has been fulfilled.8 Note that this view is due to a misconception that the contract will not 
                                            be binding unless a certain condition is fulfilled. But it is important to note the literal meaning of the word ‘suspensive’-
                                            an operative principle denoting the suspension of an obligation, not the entire agreement. Gibson9 and Sharrock10 therefore 
                                            argue that a contract that is subject to a suspensive condition is a valid and binding contract from the moment of its conclusion.
                                            This basically means that obligations are created when the contract is completed and neither party can resale from it. It is a particular 
                                            obligation that cannot be enforced until the condition is fulfilled.
                                        </p>


                                        <li class="h6">The Position of the Parties prior to fulfillment</li>
                                        <p>
                                            According to Sharrock11, prior to the fulfillment of the condition (occurrence or non-occurrence of the specified event),
                                            the conditional debtor is not liable to perform the suspended obligation. But the parties are contractually bound to each other 
                                            and each must carry out any obligations which are not affected by the condition. See the example below as an illustration of this principle: 
                                        </p>
                                        <!--Example-->
                                        <div class="example z-depth-2 bg2 p-3 m-4">
                                            <h6 class="text-left class h6">Example</h6>
                                            <em>
                                            <p>
                                                B buys S’s house on condition that he (B) is able to raise a loan in a specified sum or sell his own house on certain conditions.
                                                It is agreed that B will take immediate occupation of the property and pay a certain amount each month as “occupational rental”.
                                                Prior to his obtaining the loan or selling his house, B is not required to pay the purchase price to S; but he can insist upon S
                                                giving occupation of the property, and can be made to pay the occupational rental.
                                            </p>
                                            </em>
                                        </div>
                                        <!--/Example-->

                                        <li class="h6">The Effect of Fulfillment or Failure</li>
                                        <p>
                                            As it has been alluded to above that a conditional agreement remains valid despite the inclusion of a suspensive condition. Similarly, 
                                            where a suspensive condition is fulfilled, the debtor must perform the obligation which was suspended12. Where a suspensive condition 
                                            fails, the suspended obligation comes to an end (unless the conditional debtor has waived fulfillment). In the case of Tuckers Land
                                            and Development Corporation (Pty) Ltd v. Strydom, it was stated that a sale subject to suspensive conditions is a sale, although 
                                            consequences such as the passing of risk do not take place until the sale is perfected by the fulfilment of the condition. Another 
                                            landmark case which clearly illustrate the principle in discussion is that of Africast (Pty) Ltd v. Pangbourne Properties Ltd13 
                                            [You are required to study this judgment].
                                        </p>
                                        <p>
                                            It is also worth noting that obligations which were not affected by the condition also terminate if the agreement so provides, or, 
                                            if they were agreed to in contemplation of the condition being fulfilled, for example, an obligation to give immediate occupation 
                                            or delivery in terms of a sale which is conditional upon the buyer obtaining a loan.
                                        </p>

                                        <li class="h6">The time of Fulfilment</li>
                                        <p>
                                            According to Sharrock, if no time for the occurrence (or non-occurrence) of the event has been agreed upon, expressly or impliedly,
                                            the law holds that the condition fails if the event does not take place within a reasonable time. Important factors to be borne in 
                                            mind in determining whether a reasonable time has elapsed are: difficulties, obstacles and delays which the parties contemplated, 
                                            or ought to have foreseen, at the time of entering into the contract, and the commercial interests of each of the parties14. A case
                                            in point is that of Cardoso v. Tuckers Land and Development Corporation (Pty) Ltd15[You are required to study the judgment].
                                        </p>

                                        <li class="h6">Fictional Fulfilment</li>
                                        <p>
                                            The doctrine of fictional fulfilment provides that if a party to a contract which is subject to a suspensive condition deliberately 
                                            prevents fulfilment of the condition to avoid being bound by the contract, the condition may be deemed to have been fulfilled. 
                                            MacDuff & Co Ltd (in Liquidation) v Johannesburg Consolidated Investment Co Ltd 16 is the leading case in South African contract 
                                            law on the issue of fictional fulfilment of suspensive conditions. The case involved two companies: Johannesburg Consolidated Investment
                                            (JCI) which was a minority shareholder in Macduff & Co. JCI had entered into a contract with Macduff whereby the latter would undergo 
                                            voluntary liquidation. Macduff agreed that, once liquidated, it would transfer all its assets into a newly founded company under the 
                                            auspices and supervision of JCI. In the agreement was a suspensive condition which permitted liquidation only if the shareholders of 
                                            Macduff agreed to it.                                  
                                        </p>
                                        <p>
                                            At the time of contracting, this was a promising deal for JCI. When market conditions changed, however, it was no longer of much economic
                                            benefit. JCI accordingly bought up shares in Macduff, until it was the majority shareholder and then voted against liquidation,
                                            deliberately obstructing the possibility of the occurrence of the suspensive condition in the contract. The Appellate Division ruled 
                                            that such obstruction was unlawful, and therefore that there was a fictional fulfilment of the suspensive condition. JCI was thus held
                                            liable for breach of contract. 
                                        </p>
                                        <p>
                                            This remedy is an equitable one that has its origins in Roman law, and which was subsequently accepted in Roman-Dutch law. Two landmark 
                                            cases that dealt with this principle are that of Gowan v Bowern17 and MacDuff & Co Ltd v Johannesburg Consolidated Investment Co Ltd18. 
                                            In the MacDuff case Innes CJ succinctly stated the position as follows:
                                        </p>
                                        <p>
                                            “[B]y our law a condition is deemed to have been fulfilled as against a person who would, subject to its fulfilment, be bound by an obligation,
                                            and who has designedly prevented its fulfilment, unless the nature of the contract or the circumstances show an absence of dolus on his part”.
                                        </p>
                                        <p>
                                            Dolus in this context does not bear its usual meaning of deliberate wrongdoing or fraudulent intent but a more specific meaning, namely, the 
                                            deliberate intention of preventing the fulfilment of the condition in order to escape the obligation subject to it.
                                        </p>
                                        <p>
                                            In Gowan v Bowern Wessels JA stated that:
                                        </p>
                                        <p>
                                            “The Court must hold that if a contract is made subject to a casual condition then if the person in whose interest it is that it should not be 
                                            fulfilled deliberately does some act by which he hinders the accomplishment of the condition, he is liable as if the condition had been fulfilled.
                                            But a party cannot be said to frustrate a condition unless he actively does something by which he hinders its performance. There must be an intention
                                            on his part to prevent his obligation coming into force”.
                                        </p>
                                        <p>
                                            In order to successfully invoke the doctrine of fictional fulfilment, a plaintiff must prove the following (per Holmes JA in Scott and Another v Poupard
                                            and Another): 
                                        </p>
                                        <div>
                                            <ol>
                                                <li> non–fulfilment of the condition</li>
                                                <li>the defendant’s breach of his duty with an intention to frustrate the fulfilment, and</li>
                                                <li>a causal link between (a) and (b)</li>
                                            </ol>
                                        </div>

                                    </ol>
                                </li>

                                <li class="h5">Resolutive Condition</li>
                                <p>
                                    A resolutive condition is a contractual term which renders the continued existence of the contract dependant on the occurrence (or non-occurrence) of a specified 
                                    uncertain future event.19 A contract subject to a resolutive condition is immediately binding with all rights and obligations coming into existence and becoming 
                                    enforceable from the time of the agreement. There is no suspension of rights and obligations. Unlike a suspensive condition, if a resolutive condition is fulfilled, 
                                    it would have the effect of terminating the contract with retrospect between the parties and the operation of the rights and obligations between the parties would 
                                    immediately cease to exist. The parties would then need to be restored to their pre-contractual state, which is often complicated as this may for example require 
                                    the unbundling of a complicated transaction. In this instance it may be better suited, to avoid such unbundling, to make use of a suspensive condition as opposed 
                                    to a resolutive condition.
                                </p>

                                <p>
                                    An example of a resolutive condition would be as follows:
                                </p>
                                <p>
                                    “In the event Mrs Smith does not provide proof that she has resigned as a director of ABC Company by 15 March 2019, the contract will be deemed to be cancelled and be
                                    of no force or effect”
                                </p>

                            </ol>

                            <ol>
                                <li class="h5">Warranty (Guarantee)</li>
                                <p>
                                    <ol>
                                        <li class="h6">What is a Warranty?</li>
                                        <p>
                                            The concept of a warranty bears a variety of meanings. According to Sharrock, warranty or ‘guarantee’ in the strict sense is a contractual undertaking that a certain state of affairs exists or 
                                            that a certain act will be performed or a state of affairs will exist in the future20. Hutchinson defines a warranty as a term inserted in a contract in favour of one party to extend the liability 
                                            of the other party beyond what it would normally be21.Havenga defines a warranty as a contractual term whereby a contracting party accepts absolute responsibility for proper performance relating to
                                            the absence of defects in the warrantor’s product or service, or to the possibility that that the warrantor is able to render the performance, or to the quality or standard of the warrantor’s product
                                            or service, or to the quantity of performance etc. 
                                        </p>
                                        <p>
                                            A party who is concerned that the other party may escape liability on the ground that no obligation was created due to an initial objective impossibility of performance could insist that the other 
                                            party should warranty performance. If the warranty is agreed to, the obligation is
                                        </p>
                                        <p>
                                            Is created, even though performance is impossible. The party in breach of the warranty would then be liable to pay damages22.
                                        </p>

                                        <!--Example-->
                                        <div class="example z-depth-2 bg2 p-3 m-4">
                                            <h6 class="text-left class h6">Example</h6>
                                            <em>
                                            <p>
                                                The seller of a motor vehicle may undertake that that the vehicle has travelled no more than a stated number of kilometres or that it will achieve a particular level of fuel consumption if driven under
                                                certain conditions. If the vehicle has done more kilometres or uses more fuel than promised, the warrantor may be held liable in damages for breach of contract. 
                                            </p>
                                            </em>
                                        </div>
                                        <!--/Example-->

                                        <li class="h6">Types of Warranty</li>
                                        <p>
                                            A warranty may be express or implied23. If it is clear from the circumstances that the mutual intention of the parties was that a statement should be a term of the contractor, the term will be an implied warranty.
                                            In certain cases warranties are implied by law (such as the implied warranty against eviction, and the implied warranty against latent defects in every contract of purchase and sale). 
                                        </p>

                                        <li class="h6">Common - Law Warranty</li>
                                        <p>
                                            In the local case of Lungisani Vilakati v Purell (Pty) Ltd24, it was stated that the duty of establishing the existence and operation of an implied term in a contract falls within the onus of proof which is ordinarily
                                            on a balance of probabilities. In discharging this onus the courts have come to recognise the so called hypothetical officious bystander fiction as an aid for assigning the common intention of the parties. In the classic
                                            oft-quoted dictum of De Villiers J, in Simon v DCU Holdings (Pty) Ltd and others where he said:
                                        </p>

                                        <div>
                                            <p>
                                                In the local case of Lungisani Vilakati v Purell (Pty) Ltd24, it was stated that the duty of establishing the existence and operation of an implied term in a contract falls within the onus of proof which is ordinarily
                                                on a balance of probabilities. In discharging this onus the courts have come to recognise the so called hypothetical officious bystander fiction as an aid for assigning the common intention of the parties. In the classic 
                                                oft-quoted dictum of De Villiers J, in Simon v DCU Holdings (Pty) Ltd and others where he said:
                                            </p>
                                        </div>
                                        <p>
                                            In Alfred McAlpine & Son (Pty) Ltd v Transvaal Provincial Administration25 this is how the court explained and articulated the concept of an implied term of contract:
                                        </p>
                                        <div>
                                            <p>
                                                “In legal parlance the expression "implied term”.,, is used to describe an unexpressed provision of the contract which the law imports therein, generally as a matter of cause, without reference to the actual intention of the parties.
                                                The intention of the parties is not totally ignored. Such a term is not normally implied if it is in conflict with the express provision of the contract. On the other hand it does not originate in the contractual consensus: it is
                                                imposed by the law from without. Indeed, terms are often implied by the law in cases where it is by no means clear that the parties would have agree to incorporate them in their contracts. Such implied terms may derive from the common
                                                law, trade usage or custom, or from statute. In a sense “implied term” is, in this context, a misnomer in that in content it simply represents a legal duty (giving rise to a correlative right) imposed by law, unless excluded by the parties,
                                                in the case of certain classes of contracts, it is naturalium of the contract in question.”
                                            </p>
                                        </div> 
                                    </ol>
                                </p>
                            </ol>
                        </p>
                        <p>

                        </p>

                    </div>
                </ol>

            </div>
            <!--/Issues-->
            
            <hr id="unitSammary">
            <br>

            <!--Summary-->
            <div > 
                <h1  class="text-center chapter-topic secondary-heading text-primary"><strong><i class="fas fa-book-reader"></i> Summary</strong></h1>
                <div >
                    <p>
                        This brings us to the end of Unit 1 where we unpacked conditions and warranties. We were introduced to these new concepts
                        which are very familiar in the law of contract. In this unit we also covered the different types of conditions as well as
                        the different types of warranties. In the discussion on warranties we highlighted the common law warranty which is similar
                        to an implied term of a contract. We will now proceed to Unit 2 to discuss variations and waiver. Enjoy!
                    </p>
                </div> 
            </div>
            <!--Summary-->
            
            <hr id="activity1">
            <br>

            <!--Activity 1-->
            <div class="Chapter">
                <h1 id="activity1" class="text-center chapter-topic secondary-heading text-primary"><strong><i class="fas fa-tools"></i>Activity 1</strong></h1>
                
                <p>
                    With reference to your LAW203 and the current unit, distinguish between terms and conditions of a contract.
                </p>

            </div>
            <!--/Activity-->

                <hr id="activity2">
                <br>

            <!--Activity 2-->
            <div class="Chapter">
                <h1  class="text-center chapter-topic  secondary-heading text-primary"><strong><i class="fas fa-tools"></i> Activity 2</strong></h1>     
                <p>
                    A bought a car from B at a price of E15,000.00. A was to pay the total amount of E15,000.00 in cash before 
                    gaining possession of the car. Further to that, B was to deliver the car to A on or before the lapse of three
                    days on receipt of the money paid in full. A paid the required amount but B delivered the vehicle 10 days later.
                    On delivery, a note was given to A stating that the vehicle would be under warrant for 6 months on delivery.
                    The warrant would only cover mechanical problems which should not be caused by conduct of A (buyer). Two months later, 
                    the vehicle developed mechanical problems and A took it back to B and demanded refund of the cash paid. B refuses to entertain A.
                </p>
                <p>What are the legal issues? </p>

            </div>
            <!--/Activity-->
            
            <hr id="unitSammary" >
            <br>
            
            <!--Self-Assessment--> 
            <div class="Chapter">
                <h1 class="text-center chapter-topic secondary-heading text-primary"><strong><i class="fas fa-book-reader"></i>Self-Assessment</strong></h1>
                
                <ol>
                    <li>
                        Taylor sees an ad for a 32-inch TV for $100 and goes to the store to buy it. 
                        He pays the $100 and takes the TV home, but upon opening the box he discovers
                        the TV is only 27 inches. What is this an example of?
                    </li>
                    <li>
                        Landon buys a new particular type of lawnmower after the salesperson suggested
                        it due to the type of grass in Landon's lawn. However, when Landon uses the mower
                        it doesn't cut the grass. Instead, it just pushes the grass blades to the side.
                        What is this an example of?
                    </li>
                    <li>
                        A told B, a car dealer that he wanted to purchase a car ' suitable for touring 
                        purposes'. B suggested that a 'Bugatti' car would be fit for the purpose. Relying
                        upon this statement, A bought a ' Bugatti' car which turned out to be unfit for 
                        touring purposes, advise A.
                    </li>
                </ol>
            </div>
            <!--Self-Assessment-->                
        </div>
        <!--/Body col  -->
    
    </div>
    <!--/Body row -->

</div> 


</template>

<script>
    import { mdbScrollSpy,mdbCollapse, mdbContainer,mdbDropdown, mdbDropdownItem, mdbDropdownMenu, mdbDropdownToggle} from "mdbvue";
  export default {
    directives: {
      mdbScrollSpy,
      mdbCollapse,
      mdbContainer
    }, 
     components: {
      mdbDropdown,
      mdbDropdownItem,
      mdbDropdownMenu,
      mdbDropdownToggle
    } 
  };

</script>

<style>
.row{
    position: relative;
}
.scrollspy-example {
height: 100%;
overflow-y:inherit;
}
.main-topic{
    font-weight:700;
}

#contentlist{
    list-style-type:decimal;
}

.sideNev{
  list-style: armenian
   

}
.bg{
    background-color: #e1f5fe;
}
.bg2{
  background-color: #bbdefb;  
}
.navbar {
  background: #1e88e5 ;
}

.sideNev{
    display: none;
      list-style: armenian
  }
.dropChapter{
  display:block;
  position:fixed;
  left: 70%;
  top: 0px; 
  font-weight: 700;
  z-index: 5;
  width: 60%;
  margin: 0px;
  
}

@media (min-width: 576px) { 
  .sideNev{
    display:block;

  }
  .dropChapter{
    display: none;
  }
 }

</style>
