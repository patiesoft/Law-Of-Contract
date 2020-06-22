<template>
    
    <div class="container-fluid text-left" >
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
                <mdb-dropdown-item href="#introduction">Introduction</mdb-dropdown-item>
                <mdb-dropdown-item href="#facts">What is Varietion</mdb-dropdown-item>
                <mdb-dropdown-item href="#issues">Conclusion</mdb-dropdown-item>
                <mdb-dropdown-item href="#unitSammary">Unit Summary</mdb-dropdown-item>
                <mdb-dropdown-item href="#activity1">Activity 1</mdb-dropdown-item>
                <mdb-dropdown-item href="#activity2">Activity 2</mdb-dropdown-item>
                <mdb-dropdown-item href="#selfAssessment">Self-Assessment</mdb-dropdown-item>
              </mdb-dropdown-menu>
            </mdb-dropdown>
          </mdb-navbar-nav>
        </mdb-navbar-toggler>
      </mdb-navbar>
      
      <!-- Header -->
      <div class="Head"> 
        <h1 class="h1 h1-responsive">UNIT 2</h1>
        <p class="h1-responsive red-text text-center main-topic">Variation And Waiver</p>
      </div>
      <!--/Header --> 

      <div class="row text-left"> 
        <article class="col text-justify">

          <!--Introduction-->
          <div class="Chapter note  note-primary">
            <h1 id="introduction" class="text-center secondary-heading text-primary"><strong>Introduction</strong></h1>
            <div>
              <p>
                After successfully completing our discussion on conditions and warranties in a contract, our next mandate is to look at a variation of a contract and the circumstances wherein a valid contract can be varied or in simpler terms can be deviated from. The unit will further cover the issue of a waiver in a contract and context within which waiver occurs.
              </p>

              <!--Contents-->
              <h3><strong>Contents</strong></h3>
              <p>
                In this unit we will cover the following aspects:
                <ol>
                  <li>Variation in a contract</li>
                  <li>Types of variation</li>
                  <li>The effects of variation in a contract</li>
                  <li>The nature of waiver</li>
                  <li>Types of waver</li>
                  <li>The requisites of a waiver</li>
                </ol>
              </p>
               <!--/Contents--> 
              

               <!--Outcomes-->
              <div>
                <p>
                  Upon completion of this unit you will be able to:
                </p>
                <ul>
                  <li>Give the difference between variation and waiver</li>
                  <li>State the circumstances wherein a variation of a contract has occurred vis – a- vis a waiver</li>
                  <li>Discuss the limitations on variations and also non variations clause</li>
                  <li>Explain the terminology covered in this unit.</li>
                </ul>
              </div>
              <!--/Outcomes-->


              <!-- Terminology -->
              <div>
                  <p>
                    In this Unit, you will be introduced to the following concepts:
                    Variation, waiver, non-variation clause,
                  </p>
              </div>
                <!--/Terminology  -->

                <!-- Time -->
                  <div>
                    <p>
                      We will be expected to finish this Unit in one (1) week.
                    </p>
                  </div>
                <!-- /Time -->


                <!-- Study Skills -->
                <div>
                  <p>
                    The study skills that will be required in this Unit are as follows:
                    <ul>
                      <li>
                        You will be expected to have basic knowledge of a contract as discussed in LAW 203.
                      </li>
                      <li>
                        As we are now in the era of technology and E-Learning, you will be referred to relevant 
                        and informative websites on the law of contract.
                      </li>
                    </ul>
                  </p>

                </div>
                 <!-- Study Skills -->

                <!-- Case Study -->
                <div>
                  <ul>
                    <li>Road Accident Fund v Mothupi [2003] 3 ALL SA 181 (A); 2000 (4) SA 38 (SCA)</li>
                    <li>Swaziland Revenue Authority v Ndzimandze [2013] SZSC</li>
                    <li>Mutual Life Insurance Co of New York v Ingle 1910 TPD 540</li>
                    <li>Botha (now Griessel) and another v Finanscredit (Pty) Ltd 1989 (3) SA 773 (A)</li>
                    <li>Chrysafis and Others v Katsapsa 1988 V4 SA.</li>
                    <li>Administrator, Orange Free State and Others v Mokopanele and Another 1990 (3) SA 780 (A)</li>
                    <li>ABSA Insurance Brokers (Pty) Ltd v Lutting NO and another [1997] 3 ALL SA 267 (A)</li>
                    <li>Ming-Chieh Shen v Meyer 1992 (3) 496 (W</li>
                    <li>Colleen vs Rietfontein Engineering Works 1948 (1) SA 413 (A)</li>
                    <li>Simplex Concrete Piles v Borough of St Pancras (1958) 14 BLR 80</li>
                  </ul>
                </div>
                <!-- /Case Study -->

                <!-- Reading -->
                <div>
                  <p>Please refer to textbooks highlighted in Unit 1. </p>
                </div>
                <!-- /Reading -->

                <!-- What Is A Variation -->
                <div class="">
                  <ol id="whatIsAVariation">
                    <li><h3 >What is Variation?</h3></li>
                  </ol>
                  <p>
                    The terms of a contract may be varied by the parties to the contract through a later agreement.
                     In simple terms, a variation is a change of terms of a contract. A variation to a contract 
                     therefore could include, but not be limited to a change to the service level or type, product, 
                     delivery, time frame, personnel, and a price etc.
                  </p>
                  <p>
                    The principle in the example was discussed in the case of Chrysafis and Others v Katsapsa26 [Study the judgment].
                  </p>
                  <!-- Example box -->
                  <div>
                    <p>Example</p>
                    <p>
                      Phetsile and Phumelele enter into a written agreement for the sale of a certain property for an amount E3500.00. Phumelele 
                      was to pay this amount at the conclusion of the agreement. However they again entered into an oral agreement that Phumelele 
                      would pay E500.00 monthly instalment for the purchase of the property up until the amount is fully paid and set off the other
                      E500.00 against a debt owed by Phumelele to Phetsile. (When the oral agreement was concluded the resultant position was that 
                      there was variation of the entire rights and obligation of the parties under the written agreement. Thereafter the agreement
                      was partly written and partly oral; and the tenor of the agreement and intention of the parties had to be construed with reference 
                      not only to the written contract but also by reference to the oral contract which was supplementary to it.)
                    </p>
                  </div>
                  <!-- /Example box -->

                  <ol>
                    <li>How Can You Vary a Contract?</li>
                    <p>
                      It is common in a commercial contract to include a provision that any changes made to a contract are ineffective unless made in 
                      writing and signed by or on behalf of both parties. This is known as a variation clause and it is intended to prevent informal 
                      or inadvertent oral variations.27 These variation clauses may also detail the process or procedure to follow, often specifying 
                      the need for variations to be executed in writing. Whilst it is best practice for any variation to be in writing, it must be noted
                      that a change can inadvertently be made to a contract by verbal agreement or conduct even when there are clauses expressly stating 
                      that variation are to be in writing (refer to our example one above). What do think would be the legal effect of such a purported variation?
                    </p>

                    <li>Non –Variation Clauses</li>
                    <p>
                      When the parties impose restrictions on their own power of subsequent variation or cancellation of their contract with the laudable object
                      of achieving certainty and avoiding disputes about whether a variation or cancellation has been agreed, they will incorporate in their contract 
                      a non-variation clause. Typically, a non-variation clause provides that no subsequent agreement between the parties on a specified on a specified 
                      topic (for instance subletting, cancellation, additional work in a building contract) shall be valid unless in writing, or that no variation clause 
                      of any of the terms of the contract (including the non-variation clause itself) shall be valid unless it is in writing.28
                    </p>
                    <p>
                      Remember that variation clauses are not always expressly called “variation clauses”. When considering any proposed variation always note that it is
                      important to review all the documents that make up the contract (the entire agreement). This greatly assists the parties whether a variation per se
                      has occurred or not.
                    </p>

                    <li>The Importance of Having Variations in Writing</li>
                    <p>
                      If a contract is varied based on a verbal agreement, it can be difficult to determine exactly what was agreed, particularly if things go wrong. Again,
                      consider the case of Chrysafis and others29 above where such confusion was evident after the contract was interpreted varied following the oral agreement 
                      on the payment terms. The following reasons (though not exhaustive), can be considered as to why variations ought to be in writing:
                    </p>
                    <ul>
                        <li>
                          It minimises the chance of misunderstanding as expectations and requirements are documented.
                        </li>
                        <li>
                          There is evidence referencing what was agreed and who is responsible for what.
                        </li>
                        <li>
                          It minimises the risk of unwanted surprises associated with “agreed changes”.30
                        </li>
                    </ul>

                    <li>
                        Considerations to be Made Before Contract Variation. It is important that before parties vary a contract,
                         certain key things must be taken into consideration:
                    </li>
                    <ul>
                          <li>
                            Ensure that the variation is allowable under contract (be familiar with all the contract documents and what the contract covers).
                          </li>
                          <li>
                            Consider any agency-specific policies, procedures, templates or forms relating to variations.
                          </li>
                          <li>
                            Determine who has the authority to negotiate and approve contract variations.
                          </li>
                          <li>
                            Ensure that the full impact of the proposed variation has been assessed, (the list is not exhaustive)
                          </li>
                    </ul>

                    <li>
                      Limitations on Variation   
                      <ol>
                        <li>
                          The general rule that parties to a contract are a free to vary or discharge their contracts as they were to make it is subject to limitations. 
                          The legislature in circumstances does prescribe certain formalities for the making of contracts of a certain type.31WAIVER
                        </li>
                      </ol>                   
                    </li>

                  </ol>


                <h3>WAIVER</h3>
                <ol>
                  <li>The Nature of Waiver</li>
                  <p>
                    In contractual contexts waiver is in essence a unilateral decision not to avail oneself of a right or a remedy, a privilege or power, an interest or 
                    benefit arising from the agreement.32 In the case of Road Accident Fund v Mothupi [2003] 3 ALL SA 181 (A); 2000 (4) SA 38 (SCA) in para [15] Nienaber JA said:
                  </p>
                  <div>
                    “Waiver is, first and foremost, a matter of intention. Whether it is...in unilateral or bilateral form, the starting point invariably is the will of the party said to have waived it.”
                  </div>
                  <p>
                    Refer to the local case of Eswatini Revenue Authority v Ndzimandze [2013] SZSC 24- where the principles of waiver are restated.
                  </p>
                  <p>
                    The right or remedy, privilege or power, interest or benefit may, for example, be to have acceptance communicated; to complete an incomplete clause in a contract; or to cancel a contract.
                    The ‘unilateral nature’ of waiver is apparent from what is said by Innes CJ in Mutual Life Insurance Co of New York v Ingle33, reaffirmed in Botha (now Griessel) and another v Finanscredit (Pty) Ltd34viz-
                  </p>
                  <div>
                    “Waiver is the renunciation of a right. When the intention to renounce is expressly communicated to the person affected he is entitled to act upon it, and the right is gone. When the renunciation
                     though not communicated, is evidenced by conduct inconsistent with the enforcement of the right, or clearly showing an intention to surrender it, then also the intention may be acted upon, and the right perishes.’’
                  </div>
                  <p>
                    In the case of Administrator, Orange Free State and Others v Mokopanele and Another 1990 (3) SA 780 (A), M and others, employees of a provincial hospital, participated in a work stoppage for two days. On the second day
                    , the employees were informed by an assistant director in the Public Service who had been authorised to negotiate with them that, if they did not return to work on the following day, they would be dismissed. The employees’
                    responded to this ultimatum by returning to work the next day but they were nevertheless dismissed about a month later on the grounds of their participation in the work stoppage.
                  </p>
                  <p>
                    In proceedings to have the dismissal set aside as unlawful, it was held that, even if the participation in the work stoppage amounted to a breach of contract justifying summary dismissal (this was accepted for purposes of 
                    the decision), the hospital had waived its right to dismiss the employees concerned by giving them the ultimatum. In the court’s view, the statement ‘if you do not come back to work tomorrow you will be dismissed’ necessarily
                    implied that if the striking workers did return they would not be dismissed. This was a conditional waiver of the right to dismiss and, since the condition had been fulfilled, the employer had lost its right to dismiss.
                  </p>
                  <p>
                    From the above example, it is clear that once the employer had given the employees the ultimatum of going to work, and the employees returned to work, the employer had waived his right to terminate their employment regardless 
                    that the employees had engaged in a work stoppage.
                  </p>

                  <li>The Requisites of a Waiver</li>
                  <p>
                    Having defined what a waiver is, our next stop is to look at the requisites of a waiver. Having gone through the trouble of acquiring contractual rights, it is generally unlikely to give them up. There is therefore a generally 
                    strong presumption against waiver. That means not only that the onus is upon the party asserting waiver to prove it, but that although, as in all civil cases, the onus may be discharged on a balance of probability, it is not 
                    easily discharged.35 In Hepner v Rooderpoort –Maraisburg Town Council36) Steyn CJ stated that:
                  </p>
                  <div>
                    “There is authority for the view that in the case of waiver by conduct, the conduct must leave no reasonable doubt as to the intention of surrendering the right in issue...”
                  </div>
                  <p>
                    From the foregoing it is evident that the onus is on the party alleging waiver to demonstrate without any doubt that the other party, with full knowledge of his rights, decided to abandon them, whether expressly or by conduct
                     plainly inconsistent with an intention to enforce those rights.
                  </p>

                  <!-- Note it -->
                  <div>
                    <p>
                      One cannot waive someone else’s right. That is waiver only arises where that person or party has a right in law which can be waived either expressly or by conduct. In this regard, study the case of ABSA Insurance Brokers (Pty)
                      Ltd v Lutting NO and another37.
                    </p>
                    <p>
                      Note further that there is a distinction between waiving a right created by a contract and waiving a benefit laid down by law. In the latter case, public policy may prevent waiver of a benefit, even though the parties agree that
                      it be waived. For instance, in a sale where there is a suspensive condition with a time limit attached, the part specifying the time limit is for the benefit of the seller, while the other part is for the benefit of the buyer. 
                      See the case of Ming-Chien Shen v Meyer38 where this principle was enunciated. From this judgment you will learn that if the time limit has passed without waiver having taken place, there is no contract thereafter.

                    </p>
                  </div>
                  <!-- /Note it -->

                  <li>           
                    Waiver of a Condition for The Sole Benefit of One Party       
                  </li>
                  <p>
                    Sometimes a party wishes to enforce a contract despite non-fulfilment of a condition. The question is whether he can waive the condition unilaterally (without the consent of the other party), so that the contract becomes unconditional.
                  </p>
                  <!-- Exercise -->
                  <div>
                    <p>Example</p>
                    <p>
                      The courts have held that a condition may be waived unilaterally by a party, provided the condition was inserted into the contract solely for that party’s benefit. In the example above????[Which example?], 
                      the condition that a loan must be obtained was inserted solely for the buyer’s benefit. The buyer will therefore be able to waive the condition; in other words, he can choose to carry on with the contract even if he does not 
                      obtain the loan. However, the seller will not be able to waive the condition, since it was not inserted for his
                    </p>
                  </div>
                  <!-- Exercise -->
                  <p>
                    In addition, the condition must be waived before the contract lapses. A case in point is that of Ming-Chieh Shen v Meyer40 wherein Meyer sold his membership in a close corporation to Ming. Meyer has previously stood surety for the 
                    close corporation debts. He was only willing to sell his membership if the bank agreed to cancel the suretyship. The sale of the membership was therefore made subject to a suspensive condition that Meyer must be released from his 
                    liability as surety before 28th February 1991. However, the condition was not fulfilled by the due date. In a later dispute, Ming argued that the contract had lapsed due to non- fulfilment of the condition. However, Meyer argued 
                    that he had waived the condition, and that the contract had therefore become unconditional. According to Meyer, the contract was therefore still valid. The Court held as follows:
                  </p>

                  <p>
                    <ul>
                      <li>
                          A condition that is exclusively for the benefit of one party can be waived by such party. The condition will then fall away and the obligation becomes unconditional.
                      </li>
                      <li>
                          One can only waive such condition before it lapses (i.e. before the expiry of the time stipulated for the fulfilment of the condition, or if no time is stipulated, before the expiry of a reasonable period of time). Once the
                           condition lapses, the contract falls away and one would need a new contract.
                      </li>
                      <li>
                        The other party must be notified of the waiver within the time stipulated for the fulfilment of the condition. If the no time is stipulated, the notice of waiver must be given within a reasonable time.
                      </li>
                    </ul>
                  </p>
                  <p>
                    Applying these principles to the facts, the court held that the condition had been inserted for the sole benefit of Meyer. It was therefore possible for him to waive the condition. However, the waiver would only be valid if 
                    Meyer notified Ming of his waiver before 28 February 2001. Since Meyer had not done so, the condition still formed part of the contract. The contract had therefore lapsed due to non -fulfilment of the suspensive condition.
                  </p>

                  <li>The Onus of Proof</li>

                  <p>
                    The standard of exposition on the onus of proof in cases of waiver is enunciated in the case of Colleen vs Rietfontein Engineering Works 1948 (1) SA 413 (A) where Centlivres JA said:
                  </p>

                  <div>
                    <p>
                      “It should be pointed out, as Innes CJ stated in Laws vs Rutherford (1924) AD 261, at page 263), that the onus of proving waiver is strictly on the party alleging it and he must show that the other party with full 
                      knowledge of his right decided to abandon it, whether expressly or by conduct plainly inconsistent with an intention to enforce it.
                    </p>

                  </div>

                </ol>

                <!-- Conclusion -->
                  <div class="Chapter">
                    <h2 id="coclusion">CONCLUSION</h2>
                    <p>
                      From the foregoing analysis, it appears that, in essence, waiver is a unilateral act and not a contractual act and can take place in the absence of a contract to that effect. 
                      It is, however, open to the parties if they so wish to make a special contract concerning a specified waiver, or if they are negotiating a contract of a different kind to note 
                      therein that a waiver has taken place, or is taking place, or expected to take place, or to make their contract conditional upon a specified waiver taking place42.
                    </p>

                  </div>
                <!-- /Conclusion -->

                <!-- Unit Summary -->
                  <div id="unitSummary" class="Chapter">
                    <p>
                      This brings us to the end of Unit 2, where we unpacked variations and waivers. In this unit we examined the nature and legal effect of variation of contract and waiver of contractual rights. We were introduced to these new concepts which are very familiar in the law of contract.
                      From the above annotation on variation, we note that parties are free to vary their contracts but, subject to certain conditions and/or limitations. We further understand that variation may be in writing or by implication or conduct. Whether there has been an implied variation 
                      depends upon the circumstances of each case, but it must be remembered that in general, implied variation of important provisions is not lightly to be presumed.43 Variation is distinct from both rectification and waiver.
                    </p>
                    <p>
                      In the discussion on warranties we highlighted the common law warranty which is similar to an implied term of a contract. We will now proceed to Unit 3 to discuss performance. Enjoy!
                    </p>
                  </div>
                <!-- /Unit Summary -->

                  <!-- Activity 1 -->
                  <div class="Chapter">
                    <h2 id="activity1">Activity 1</h2>
                    <div>
                      <p>
                        A being a construction company entered into a contract with B for the construction of a nine-story block of flats in Manzini. A, the foundations contractor, was responsible for the design, which used driven piles. It transpired that this design was inadequate, 
                        following which the employer’s architect had discussions with A as to what could be done to overcome the problem. A recommended changing the piling design so as to use bored piles instead and the architect wrote instructing this change. Despite the fact that the 
                        change had only been required because the design had proved inadequate, A claimed for the additional cost of the bored piles on the basis that a variation had been instructed, which should be valued and paid under the contract. Discuss all possible legal issues 
                        and be a judge in this matter.
                      </p>
                    </div>

                  </div>
                  <!-- /Activity 1 -->

                  <!-- Activity 2 -->
                  <div class="Chapter">
                    <h2 id="activity2">Activity 2</h2>
                    <div>
                      <p>
                        Employer A employed Thuli as an Administrator. Thuli decided to abscond from work for three consecutive days. The Employer wrote to her demanding that she returns to work otherwise she would face a DC and be dismissed instantly. Upon receipt of the instruction to 
                        report for work, Thuli reported for work the next day. A month later, she was charged for absenteeism for the three days. Thuli comes to you for advice.
                      </p>
                    </div>
                  </div>
                  <!-- /Activity 2 -->

                  <!-- Self Assessment -->
                  <div id="selfAssesment" class="Chapter">
                      <h2>Self Assessment</h2>
                       <ol>
                         <li>What is a variation?</li>
                         <li>What is a variation clause?</li>
                         <li>What is the procedure for variation?</li>
                         <li>What is a non-variation clause?</li>
                         <li>Why is it important to have variations in writing?</li>
                         <li>What are the critical considerations to be made before a contract variation?</li>
                         <li>What is a waiver?</li>
                         <li>What are the requisites of a waiver?</li>
                         <li>Who has the onus to prove the existence of a waiver?</li>
                       </ol>
                  </div>
                  <!-- Self Assessment -->


                </div>
                <!-- /What Is A Variation -->



               </div>
              
            
          </div>
          <!--/Introduction-->




        </article>
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
.nevigation{
 position: sticky;


}
</style>
