<!--Template-->
<template> 
  <!--Container-->
  <div class="container-fluid text-left">
  <!--  -
    --Nevigation  -
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
                <mdb-dropdown-item href="#specificPerfomance">Specific Perfomance</mdb-dropdown-item>
                <mdb-dropdown-item href="#prohibitoryInterdict">Prohibitory Interdict</mdb-dropdown-item>
                <mdb-dropdown-item href="#declarationOfRights">Declaration Of Rights</mdb-dropdown-item>
                <mdb-dropdown-item href="#cancellation">Cancellation</mdb-dropdown-item>
                <mdb-dropdown-item href="#damages">Damages</mdb-dropdown-item>
                <mdb-dropdown-item href="#unitSammary">Unit Summary</mdb-dropdown-item>
                <mdb-dropdown-item href="#discussion">Discussion</mdb-dropdown-item>
                <mdb-dropdown-item href="#activity1">Activity 1</mdb-dropdown-item>
                <mdb-dropdown-item href="#activity2">Activity 2</mdb-dropdown-item>
                <mdb-dropdown-item href="#selfAssessment">Self-Assessment</mdb-dropdown-item>
              </mdb-dropdown-menu>
            </mdb-dropdown>
          </mdb-navbar-nav>
        </mdb-navbar-toggler>
      </mdb-navbar>
    --  -->
    <!--Nevigation  -->
    

      <!--Header-->
      <div class="Head">
        <h1 class="h1 h1-responsive">UNIT6</h1> 
        <p class="h1-responsive red-text text-center main-topic">Remedies Of Contract</p> 
      </div>
      <!--/Header-->
    

  
    <!--Row-->
    <div class="row text-left" > 
      <!-- Side Nav -->
        <div id="topics" class="col-sm-3 col-lg-2 sideNev  ">
          <div class="border border-primary sticky-top">
            <h1 class="h1 text-center red-text h1-responsive">UNIT 6</h1>
              <hr>

            <ul  v-mdb-scroll-spy="{container: 'custom-container'}" >
              <li><a class="nav-link active"    href="#introduction">Introduction</a></li>
              <li><a class="nav-link"           href="#specificPerfomance">Specific Perfomance</a></li>
              <li><a class="nav-link"           href="#prohibitoryInterdict">Prohibitory Interdict</a> </li>
              <li><a class="nav-link"           href="#declarationOfRights">Declaration of Rights</a> </li>
              <li><a class="nav-link"           href="#cancellation">Cancellation</a> </li>
              <li><a class="nav-link"           href="#damages">Damages</a> </li>
              <li><a class="nav-link"           href="#unitSummary">Unit Summary</a></li>
              <li><a class="nav-link"           href="#discussion">Discussion</a></li>
              <li><a class="nav-link"           href="#activity1">Activitiy 1</a></li>
              <li><a class="nav-link"           href="#activity2">Activitiy 2</a></li>
            </ul>
          </div>
        </div>
      <!-- Side Nav -->

      <div class="col text-justify">
         
          <!--Introduction-->
            <div class="Chapter">

              <hr id="introduction">
              <br>

              <h1  class="text-center chapter-topic secondary-heading text-primary"><strong> Introduction</strong></h1>
              <p class="text-left">
                As a legal practitioner, you may find yourself seized of a matter in which your client has failed to honour his/her contractual 
                obligation(s), or where your client wishes to enforce a contractual right, or where one or both parties is/are in breach of the 
                agreement. You may therefore have to determine the proper course of action or legal advice to offer your client so as to secure 
                them some legal remedies or just redress. 
              </p>
              
              <p class="text-left">
                There are basically five (5) remedies available to an aggrieved party for breach of contract, and these are the following: 
                <ul class="contentlist" style="list-style-type:disk;">
                  <li>An order for specific performance </li>
                  <li>A prohibitory interdict</li>
                  <li>A declaration of rights</li>
                  <li>Cancellation of the contract</li>
                  <li>A claim for damages</li>
                </ul>
              </p> 
              <p class="text-left">
                All these remedies are not limited and/or confined to cases of breach or threatened breach of contract but are available 
                throughout the law. However, for the purposes of this discussion we will confine ourselves to the application where breach 
                of contract is alleged.
              </p>
            </div>
          <!--Introduction-->
        
          <br>

          <!--Expected Outcomes -->
            <div >
              <h4> <i class="fas fa-graduation-cap"> Outcomes</i></h4>
              <h4 class="text-left">Upon completion of this unit you will be able to:</h4>
              <ul class="text-left">
                <li>
                  Explain the types of remedies available following breach of contract, the application of those remedies and the consequences 
                  thereof;
                </li>
                <li>
                  Formulate a legal opinion, supported by legal authorities, in which to advice a party to a contract in cases of breach.
                </li>
              </ul> 
            </div>
          <!--Expected Outcomes -->
        
          <br>

          <!--Terminology --> 
            <div>
              <h4> <i class="fas fa-spell-check"> Terminology</i></h4>                       
              <h4 class="text-left">In this Unit, you will be introduced to the following concepts</h4>
              <p class="light-blue-text">
                <em>
                  Interdict, damages, specific performance, ad factum praestandum, ad pecuniam solvendam, prima facie, declaration of rights, 
                  interdict pendete lite,  
                </em>
              </p> 
            </div>
          <!--Terminology-->
       
          <br> 

          <!--Case law -->
            <div>
              <h4 class="h4"> <i class="fas fa-gavel"> Case Law</i></h4>                      
              <ul class="text-left">
                <li> <strong><em>Lavery & Co. Ltd v Jungheinrich</em></strong> 1931 AD 156; </li>
                <li> <strong><em>Shatz Investments v kalovyrnas</em></strong>1976 (2) SA 545 (A);</li>
                <li> <strong><em>Thoroughbred Breeders Association v Price Waterhouse</em></strong>2001 (4) SA 551 (SCA) 579 – 583;</li>
                <li> <strong><em>Transnet Ltd t/a National Ports Authority v Owner of MV Snow Crystal</em></strong>2008 (4) SA 111 (SCA) paragraphs 31-36</li>
              </ul>
            </div>
          <!--Case law--> 

          <br> 

          <!--Chapter Specific Perfomance-->
            <div class="Chapter">
              <ol type="1"> 
                <h1 id="specificPerfomance" class="text-center chapter-topic  secondary-heading text-primary"><strong> Specific Perfomance</strong></h1>
                <!--Paragraph 1 -->
                <p>
                  In Roman Dutch Law an order for specific performance is the primary remedy for breach of contract. The classic statement of this rule was 
                  made by Innes J A in <strong><i>Farmers Cooperative Society v Berry</i></strong><sup>138</sup>
                   where the Court said the following: 
                </p>
                <!--Paragraph 1 end -->
                <!--Blockquote-->
                <div class="z-depth-2  p-3 m-2">                 
                  <blockquote class="blockquote text-left">
                    “Prima facie, every party to a binding agreement who is ready to carry out his own obligation under it has a right to demand from the 
                    other party, as far as is possible, a performance of his undertaking in terms of the contract.”
                  </blockquote>
                </div>
                <!--Blockquote end-->
                <!--Paragraph 2-->
                <p>
                  See also <strong>Benson v S A Mutual Life Assurance Society <sup>139</sup>
                  </strong> which provides another example of the primary application of this remedy. 
                </p> 
                <!--Paragraph 2 end-->
                <!--Paragraph 3-->
                <p>
                  The phrase ‘as far as possible’ excludes a supervening impossibility of performance. What is meant therefore is that 
                  although the defaulting party remains bound by the contract, specific performance cannot, or can no longer be rendered. <sup>140</sup>
                </p>
                <!--Paragraph 3 end-->
                <!--Box-1 Example-1--> 
                  <div class="example z-depth-2 bg2 p-3 m-2">
                    <h6 class="text-left class h6">Example 1</h6>                    
                      <p>
                        A sells B’s property to C and fails in his subsequent attempt to acquire it from B. C is entitled to have the property 
                        transferred to his name after having paid all the monies that were required in terms of the contract. C has the right 
                        to see relief from the Court for specific performance ordering A perform. A has committed a breach by not transferring 
                        the property to who has paid and done all that was due to him in accordance with the terms of contract. The question is; 
                        if the aggrieved party desires, and claims, incomplete performance, it is possible that it may be ordered?
                      </p>                    
                  </div> 
                <!--Box-1 Example-1 end-->
                <br>
                <!--Paragraph 4-->
                <p>
                  Without any straining of language, any one of three different meanings can be given to specific performance:
                  <ol type="1">
                    <li>
                      An order to perform a specified act <em>(ad factum praestandum)</em> in pursuance of a contractual or any other obligation.
                    </li>
                    <li>
                      An order to perform a specified act or to pay money <em>(ad pecuniam solvendam)</em> in pursuance of a contractual obligation.
                    </li>
                    <li>
                      It is an order to perform a specified act in pursuance of a contractual obligation.
                    </li>
                  </ol>
                </p>
                <!--Paragraph 4 end-->
                <!--Paragraph 5-->
                <p>
                  This common law principle that specific performance is the primary remedy is, by the way, in contrast with English Law, where unless 
                  there are special circumstance which makes specific performance appropriate, the Court will primarily award damages. However, in our 
                  common law, the court will primarily order specific performance when claimed, unless there are special circumstances which make this 
                  remedy inappropriate. In this regard, you are required to study the following authorities (which we also referred to in Unit 3): 
                  <ul>
                    <li>
                      <em><strong>Farmers Cooperative Society v Berry</strong></em> 1912 AD 343 – 350
                    </li>
                    <li> 
                      <em><strong>Kruntel Brothers v Lazarus</strong></em> 1992 (2) SA 423
                    </li>
                    <li> 
                      <em><strong>Haynes v King Williams Town Municipality </strong></em> 1950 (1) SA 370 – where the SA Appellate Division gave 
                      indication where the Court will refuse the order of specific performance.
                    </li>
                  </ul>
                </p>
                <!--Paragraph 5 end-->
                <!--Paragraph 6 end-->
                <p>
                  Note the following circumstances in which the court will refuse to grant an order for specific performance:
                  <ul>
                    <li>
                      Where specific performance will be difficult to enforce – e.g. In <em>Winterton Holmes and Hills v Paterson 
                      SC115/95</em> where the Supreme Court of South Africa accepted that it will not order reinstatement specific 
                      performance where there has been a bitter relationship between the employer and employee Where the thing 
                      being sought in terms of the contract can be easily founded elsewhere. 
                    </li>
                    <li>
                      Another landmark case on the court’s discretion to grant or refuse specific performance is that of Benson <em><strong>v SA 
                      Life Assurance Company</strong></em> <sup><a id="141" href="#141r">141</a></sup>
                      where the plaintiff was seeking special performance of delivery of company shares when 
                      some were available at the Johannesburg Stock Exchange. The court determined that the granting of an order of 
                      specific performance is entirely a matter of the discretion of the court. Apart from the rule that such discretion 
                      is to be exercised judicially upon all the relevant facts, no rules should be prescribed to regulate that discretion, 
                      as such rules would inevitably curtail the court's discretion and negate or erode the plaintiff's right to select his 
                      remedy.
                      <br>
                      <br> 
                      It was further stated in this case that the English rules regulating courts' discretion to order specific performance are 
                      predicated upon that remedy's availability by way of equitable relief only; they are inappropriate to South African law. 
                      The Appellate Division held, therefore, that the indiscrete following of English cases in this regard is to be decried.  
                      It was therefore held that the granting an order of specific performance in an action for delivery of shares freely obtainable 
                      on the Stock Exchange) was by this reasoning confirmed. 
                    </li>
                    <li>
                      It is worth mention that a court will not order specific performance where the remedy will require services of a personal nature. 
                      This principle was discussed in the case of <strong>National Union of Textile Workers v Stag Packings (Pty) Ltd <sub><a id="142" href="#142r">142</a></sub> 
                      </strong>, but the reasons why 
                      the courts have not granted such orders remain as valid as ever, provided it is remembered that in every case the court has a discretion. <sup><a id="145" href="#143r">143</a></sup>
                      
                    </li>
                    <li>
                      A court will not order specific performance where such performance will operate unduly harshly over the defendant or where performance is 
                      impossible.  
                    </li>

                  </ul>
                </p>
                <!--Paragraph 6 end-->
              </ol>
            </div>
          <!--Chapter Specific Perfomance-->
          <hr>
          <br>
          
          <!--Chapter/Section-->
            <div class="Chapter">
              <ol type="1"> 
                <h1 id="prohibitoryInterdict" class="text-center chapter-topic secondary-heading text-primary"><strong> A Prohibitory Interdict</strong></h1>
                <!--Paragraph 1 -->
                <p>
                  An interdict is the appropriate remedy to prevent a breach or threatened breach of contract. It is an order of court prohibiting the defendant 
                  from doing whatever negative or positive act as specified in the order. In simple terms an interdict is an order stopping the other party from 
                  doing something which will jeopardise one’s rights under the contract. An interdict can be temporary or final. As  
                </p>
                <!--Paragraph 1 end -->
                <!--Blockquote-->
                <div class="example z-depth-2 p-3  m-2">                  
                  <blockquote class="blockquote text-left">
                    Phumelele is employed by Tri-Cash Engineering Solutions, one clause to her contract of employment is that she will not share the information 
                    on Tri-Cash with any other company without any consent from her Managing Director. Phumelele resigns from Tri-Cash and gets employed by IT Solutions, 
                    on her first day of work, she starts downloading file and sharing the information with IT Solutions. Tri-Cash is informed on what Phumelele is doing. 
                    Tri-Cash approaches court for a prohibitory interdict. Stopping the covenantor (Phumelele) from breaching the covenant. 
                  </blockquote>                  
                </div> 
                <!--Blockquote end-->
                <!--Paragraph 2-->
                <p>
                  the term suggests, a temporary interdict operates for a limited but specified period. A final interdict is an equivalent of specific performance, where the 
                  obligation sought to be enforced is negative in character e.g. a covenant in restraint of trade. 
                  <br>
                  A temporary interdict also known as a interdict pende lite, literally to free a situation pending litigation, that is, where a purchaser wants to stop the 
                  seller from transferring a disrupted property pending litigation. A good example was in the case of <em><strong>Flamelilly v Zimbabwe Salvage (Pty) Ltd and Another <sup><a id="143" href="#143r">143</a></sup>
                  ,</strong></em> 
                  where the interdict being sought was to stop the respondent from destroying a mining dump until litigation pertaining therefrom had been finalised.  R H 
                  Christie indicates that the requirements for a final interdict are the same as those for specific performance but are different to those of a final interdict. 
                </p>
                <!--Paragraph 2 end-->
                <!--Paragraph 3-->
                <p>
                  For the aggrieved party to be successful in his/her claim for a prohibitory interdict, they must prove the following: 
                  <ul>
                    <li>
                      A clear right – arising from the contract;
                    </li>
                    <li>
                      That there is a reasonable apprehension of irreparable harm if the interdict is not granted- The <em><strong>Flamelilly</strong></em> case is instructive in this regard since if the 
                      respondent had proceeded to destroy the mining, there would be no mining dump at the end.
                    </li>
                    <li>
                      That there is no other alternative remedy which would give the applicant the protection sought. The balance of convenience must be in the applicant’s favour, 
                      this means that the circumstances must be such that the prejudice suffered by applicant if the interdict was not given would be greater than the prejudice 
                      suffered by the respondent if the interdict was granted.  The potential prejudice to the applicant should he succeed in the main claim is 
                      that he will not be able to get an order for specific performance.  
                    </li>
                  </ul>
                </p>
                <!--Paragraph 3 end-->
                <!--Paragraph 4-->
                <p>
                  Study the following cases:
                  <ul> 
                    <li>
                      <strong> Gideon v Ngumo</strong> 1973 RLR 197
                    </li>
                    <li>
                      <em><strong>Setlogelo v Setlogelo </strong></em> 1914 AD 221
                    </li>
                  </ul>
                </p>
                <!--Paragraph 4 end-->
                <h6><u><strong>Interdict <em>pendente lite</em></strong></u></h6>
                <!--Paragraph 5-->
                <p>
                  TThis ordinarily means obtaining an interdict pending the bringing and/or institution or finalisation of any Court proceedings. 
                  It is said that reasons for seeking an interdict pending the bringing of an action or other proceedings are almost as varied as 
                  the manifestations of human frailty, but in contract cases the applicant’s reason will almost always be to maintain the status 
                  quo by preventing a continuing of threatened breach which, if persisted in, would deprive him of the fruits of the action he is 
                  about to bring. Therefore, an interdict will be appropriate to prevent the respondent disposing of the property which is the subject 
                  matter of the dispute.
                </p>
                <!--Paragraph 5 end-->
                <!--Paragraph 6 end-->
                <p>
                  In the case of <strong><em>Yamomoto v Rand Canvas Co. <sup><a id="145" href="#145r">145</a></sup>
                  </em></strong>, the view was expressed that in such cases a higher probability of success in the proposed 
                  action would have to be shown in ordinary cases such as claims on contracts than in vindicatory actions, but the distinction has not 
                  subsequently been recognised. However, in the case of <strong><em>Stiebel v Horn <sup>146</sup>
                  </em></strong> 
                  , the Court declined to grant a mandatory interdict to transfer part of the subject matter of a disputed contract of sale to the 
                  plaintiff <em>pendente lite</em>, but indicated that it was not beyond the bounds of possibility that such an order might be granted in a 
                  suitable case 
                </p>
                <!--Paragraph 6 end-->
                <!--Paragraph 7-->
                <!--Paragraph 7 end-->
                <p>
                  Lastly, in <em><strong>Addison Bros Ltd v Addison & Co. <sup>147</sup>
                  </strong></em>, there was added the requirement that the applicant should come to Court with clean hands 
                  (the respondent’s breach having there been occasioned by the fraud of the applicant’s servant). 
                </p>
                
              </ol>
            </div>
          <!--Chapter/Section end-->

          <hr>
          <br>
         
          <!--Chapter/Section-->
            <div class="Chapter">
              <ol type="1"> 
                <h1 id="declarationOfRights" class="text-center chapter-topic secondary-heading text-primary"><strong>A Declaration Of Rights</strong></h1>
                <!--Paragraph 1 -->
                <p>
                  It is worth mention that a declaratory order normally does not form part of the discourse on remedies for breach of contract. 
                  The obvious reason being that once the court has rendered a declaration/ruling as to who is entitled to what, whom is obligated 
                  to do what… what then? The declaration(s) in the court order will invariably then bring (indirectly so) to the fore the conventional 
                  remedies i.e. who must do what (specific performance), who must pay what (damages), who must cease doing what etc. So the question 
                  as to whether a declaration of rights is a remedy for breach is an academic one. We will however proceed to have a brief discussion 
                  on it below.
                </p>
                <!--Paragraph 1 end -->
                <!--Paragraph 2--> 
                <p>
                  In understanding the concept of declaration of rights, it is apposite that one first draws from the case of <em><strong>Government of the 
                  Self-Governing Territory of Kwazulu Natal v Mhlangu <sup><a id="148" href="148">148</a></sup>
                  </strong></em>, where Eloff J pointed out that;
                </p>
                <!--Paragraph 2 end-->
                <!--Blockquote-->
                <div >
                  <p>                  
                      <strong>
                        <blockquote class="blockquote text-left">
                          “...The nature and scope of the right might be inquired into, but in the absence of proof of such a right, or at least a contention that 
                          there is such a right, the Court has no jurisdiction. <u>This is consistent with the well-established principle that Courts are not there 
                          to rule on abstract  concepts or on any dispute and, as far as declaratory orders are concerned, only on legally recognisable and 
                          enforceable rights.</u>” [My emphasis]
                        </blockquote>
                      </strong>                   
                  </p>
                </div> 
                <!--Blockquote end-->
                <!--Paragraph 3-->
                <p>
                  It is clear that the Court will only declare a right that is legally recognisable and enforceable. To qualify as an “interested person” the applicant 
                  must have a real not merely an abstract or intellectual interest in the right or obligation, and the right or obligation must similarly not be merely 
                  <em>in obstracto</em>, but a declaratory order may be made in order to resolve a real and pertinent dispute on liability on the basis of certain assumed facts. <sup><a id="149" href="149r">149</a></sup> 
                 </p>
                <!--Paragraph 3 end-->
                <!--Paragraph 4-->
                <p>
                  It is also worth mentioning that one of the factors that will weigh with the Court in deciding whether to exercise its discretion, however, is the undesirability 
                  of hearing disputes piecemeal, so if there has been a breach of contract or some other invasion of rights entitling the plaintiff to claim consequential relief, 
                  prima facie the case is not one for a declaratory order<sup><a id="150" href="150r">150</a></sup>  . 
                  But if, for example, a declaratory order would bring the matter to finality more quickly than an action 
                  for consequential relief that would require a long period of notice, or if a declaratory order would prevent possibly abortive proceedings, it may be a proper case 
                  for the exercise of the Court’s discretion to grant such declaratory relief. <sup><a id="151" href="151r">151</a></sup>
                </p>
                <!--Paragraph 4 end--> 
              </ol>
            </div>
          <!--Chapter/Section end-->
          <hr>
          <br>
          <!--Chapter Cancellation-->
            <div class="Chapter">
              <ol type="1"> 
                <h1 id="cancellation" class="text-center chapter-topic secondary-heading text-primary"><strong>Cancellation</strong></h1>
                <!--Paragraph 1 -->
                <p>
                  The general purpose of the law of contract is to achieve fulfilment of the contract. If such fulfilment is not achieved, the remedy of cancellation is aimed at the 
                  termination of the consequences of a validly concluded contract. Therefore, cancellation is considered an extraordinary remedy that can only be used in certain 
                  circumstances. <sup>152</sup>
                    As a general rule, cancellation means that the obligations under the contract are extinguished from the date of cancellation. 
                </p>
                <!--Paragraph 1 end -->
                <!--Paragraph 2--> 
                <p>
                  This is how AJ Kerr <sup><a id="153" href="#153r">153</a></sup>
                  sums it;
                </p>
                <!--Paragraph 2 end-->
                <!--Blockquote-->
                  <div >   
                    <i>
                    <blockquote class="blockquote text-left z-depth-2">
                      “When cancellation takes place the legal position is similar to that when a lease is said to have terminated by effluxion of time or in consequences 
                      of notice duly given:  a major change in the history of the parties’ contractual relationship has taken place but certain adjustments may still have 
                      to be made between them (the parties). In the case of cancellation the major change is that no further performances by either party is due; obligations 
                      to perform in future are terminated, brought to an end, no longer exist; but rights already accrued, due and enforceable, can be pursued and whatever 
                      adjustments the law allows in respect of the default by the one party can be enforced.’’
                    </blockquote>
                    </i>
                  </div> 
                <!--Blockquote end-->
               
                <p>
                  Unlike void contracts, a contract that has been cancelled may result in contractual obligations of the parties even after the date of cancellation, namely a duty 
                  to pay damages and duties to perform. Parties may also cancel a contract by mutual consent, or the contract may create a right to cancel in certain circumstances 
                  irrespective of breach. However, for the purposes of this chapter we will focus on the unilateral cancellation of a contract which results from breach of contract 
                  by the other party. 
                </p>
               
                <strong><u><h6>Requirements for cancellation</h6></u></strong>
                <!--Paragraph 4-->
                <p>
                  The Requirements for cancellation of a contract as a result of a breach are:
                  <ul>
                    <li>
                      The innocent party must have a right to cancel.
                    </li>
                    <li>
                      The innocent party must have the ability to restore performances received.
                    </li>
                    <li>
                      The innocent party must exercise her right to cancel
                    </li>
                  </ul>
                </p> 
                <!--Paragraph 4 end--> 
                <!--Paragraph 5-->
                <ol type="i">
                  <li>
                    <u>
                      <strong>
                        Right to cancel
                      </strong>
                    </u>
                    <p>
                      The mere fact that the other party has breached the contract is not sufficient to justify cancellation of the contract by the innocent party. If a party attempts 
                      to cancel a contract without sufficient justification, the cancellation will be ineffective and the contract will still stand. In addition, the party who tried 
                      to cancel will be guilty of repudiation and for this reason, it is very important to determine whether a party has the right to cancel before attempting to 
                      exercise this remedy. <sup><a id="154" href="#154r">154</a></sup>
                    </p>
                  </li> 
                  <li>
                    <u>
                      <strong>
                        Ability to restore performance
                      </strong>
                    </u>
                    <p>
                      Now since cancellation involves undoing the consequences of a contract, it creates an obligation to restore any performance that has already been received. 
                      Therefore, a party seeking cancellation of the contract must be able to return any performance that he received in terms of the contract, in addition to 
                      any fruits or proceeds of the performance. Note that this obligation is also subject to the doctrine of accrued rights.
                    </p>
                    <p>
                      The inability of the innocent party to restore any performance received would generally prevent her from cancelling the contract. However, the innocent 
                      party will still be able to cancel if the inability to restore is not due to the fault of the innocent party and she has not benefited by the performance 
                      made: <em><strong>See Feinstein v Niggli <sup><a id="155" href="#155r">155</a></sup>
                      </strong></em>. The following are examples of where an inability to restore performance will not prevent cancellation:
                      <ul>
                        <li>
                          Where the deterioration of the asset is due to an inherent defect, an example being where X delivers a car with an electrical fault to Y. The 
                          electrical fault causes an explosion. The car is blown into pieces.
                        </li>
                        <li>
                          Perishables. If X delivered tomatoes instead of cherries to Y, then the tomatoes go bad before Y comes to collect them.
                        </li>
                        <li>
                          Where the object perished as a result of <em>vis major</em> or a <em>casus fortuitous</em>. An example could be where a cow dies from a disease which the 
                          innocent party could not prevent or treat.
                        </li>
                        <li>
                          Where the object perished when used for the purpose and in the manner in which it was intended. X sells washing powder to Y. When Y uses the washing 
                          powder to wash his clothes, it causes all the clothes to turn grey. Y will not be able to return the washing powder. 
                        </li>
                        <li>
                          Where the contracting party has used/altered the (defective) performance to produce a new product. Although not a settled position, however there is 
                          suggestion that it would be equitable to allow cancellation subject to restitution of the new product or providing a monetary equivalent of the 
                          original performance. An example is where X purchases 10kg of yeast from Y. X uses the yeast to make beer. However, the yeast proves to be 
                          ineffective and the brew fails to turn into beer.
                        </li>
                      </ul>
                    </p>
                    <p>
                      If the innocent party has benefited from a performance, she is unable to return, she must restore the monetary equivalent of the performance. 
                      A classical case for this proposition is the case of <em><strong>Sackstein N.O. v Proudfoot SA (Pty) Ltd <sup><a id="156" href="#156r">156</a></sup>
                      ,</strong></em> where P was employed by the innocent X. X 
                      cancelled because of P’s breach and claimed back the salary paid to P. Obviously it was impossible for X to return the services rendered 
                      by P. However, the Court held that X had to pay P the monetary equivalent of the services because X had benefitted from P’s performance.
                    </p>
                  </li>
                  <li>
                    <u>
                      <strong>
                        Exercise of the right to cancel
                      </strong>
                    </u>
                    <p>
                      The right to cancel is exercised by way of notice of cancellation. Note that there is an important distinction between a notice of 
                      rescission and a notice of cancellation. A notice of rescission can be mutually agreed upon by both parties, or it can be done by one 
                    </p>
                  </li> 
                  <!--Blockquote-->
                  <div class=" example z-depth-2 bg2 p-3 m-4">     
                    <h6 class="text-left class h6">Example 2</h6>               
                        <blockquote class="blockquote text-left">
                          A party may combine the notice of recession with an advance notice of cancellation
                          <br>
                          <i>
                          “I will have the right to cancel the contract if you do not perform by 1 August of this year (notice of recession), and I elect 
                          to cancel the contract if you do not perform in time (notice of cancellation).”
                          </i>
                          <br>
                          If the debtor fails to perform by 1 August, the creditor does not have to do anything further. Since he has already communication 
                          his election to the debtor, the contract is cancelled automatically on 1st August. 
                        </blockquote>                    
                  </div> 
                  <!--Blockquote end-->
                  <p>
                    party in a contract for a legitimate cause. A notice of cancellation is the actual exercise of the right of cancellation.
                  </p>
                  <li>
                    <u>
                      <strong>
                        Cancellation alone
                      </strong>
                    </u>
                    <p>
                      Cancelation is a unilateral juristic act performed by the innocent party and it does not require the consent of the guilty party: 
                      See <em><strong>Stuart Wrightson (Pty) Ltd v Thorpe <sup><a id="157" href="#157r">157</a></sup>
                      .</strong></em> A J Kerr <sup><a id="158" href="#158r">158</a> </sup>
                      asserts the foregoing annotation by stating that “if a party aggrieved by a 
                      major breach … wishes to take some active steps to show that the contract is being brought to an end, that is, he wishes to do 
                      more than just disregard the contract, he may cancel the contract without asking for any remedies such as restitution or damages”.
                    </p>
                    <p>
                      Cancellation can be effected extra-judicially (i.e. without a court order) and does not require confirmation by a Court of Law. 
                      In order for an innocent part to exercise his right to cancel the contract: 
                      <ul>
                        <li>
                          He must express his intention to cancel the contract by words or by conduct that manifests a clear election to cancel the 
                          contract; and 
                        </li>
                        <li>
                          He must communicate his decision to cancel to the guilty party
                        </li>
                      </ul>
                    </p>
                  </li>
                  <li>
                    <strong>
                      What does the requirements of communication to the guilty party entail? 
                    </strong>
                    <p>
                      <ul>
                        <li>
                          Some cases have held that the guilty party must have actual knowledge of the innocent party’s intention to cancel. However, 
                          actual knowledge does not have to be proved if the innocent party can prove that he took reasonable steps to notify the 
                          other party of his election to cancel. See the case of <em><strong>Stuart Wrightson (Pty) Ltd v Thorpe</strong> supra</em>. 
                        </li>
                        <li>
                          There are no prescribed formalities for cancellation. Provided that there is an unambiguous election to cancel, 
                          notification of cancellation can be expressed (in words), implied (by conduct) or may even be contained in a 
                          summon <sup><a id="159" href="#159r">159</a></sup>
                          The parties can even agree to dispense with the requirement of notice of cancellation.
                        </li>
                        <li>
                          The decision to cancel must be conveyed to the guilty party. The only issue is whether the notice of cancellation reached 
                          the guilty party: See in this regard <strong><em>Datacolour International (Pty) Ltd v Intamarket (Pty) Ltd <sup><a id="160" href="#160"></a> 160</sup>
                          </em></strong>
                        </li>
                        <li>
                          In cases of major breach the innocent party does not have to state the grounds for cancellation. Furthermore, if the 
                          innocent party states an incorrect or inadequate ground for cancellation he will not be bound thereby. 
                        </li>
                      </ul>

                    </p> 
                  </li>
                  <li>
                    <strong>
                      <u>
                        Election
                      </u>
                    </strong>
                    <p>
                      Note the following principles of election:
                      <ul>
                        <li>
                          When the terms of payment are fixed in the following manner: [payment is to be by instalments, seller has option to 
                          cancel on failure by the purchaser to pay an instalment on due date] - the seller’s right to cancel accrues by 
                          reason of the buyers default on the date of payment, and the seller must then elect whether or not he will avail 
                          himself of it <sup>161</sup>;
                        </li>
                        <li>
                          If party A commits a breach which, in the language often used, “goes to the root/substance of the contract”, 
                          party B may elect to hold him to the contract or to cancel it <sup id="162"><a href="#162r">162</a></sup>; 
                        </li>
                        <li>
                          When an event occurs which entitles one party to refuse to carry out his part of the contract that party 
                          has a choice; he can either elect to take advantage of the event or he can elect not to do so. He is entitled 
                          to a reasonable time in which to make up his mind. <sup id="163"><a href="#163r">163</a></sup>; 
                          <p>
                            It is important to be aware that the election can be done expressly or by conduct. For instance, if the innocent 
                            party conducts himself in a way that clearly indicates that he intends to uphold the contract, that fact will be 
                            implicit from his conduct. Mere delay in exercising the election to cancel does not automatically mean that the 
                            right to cancel is lost. However, if the delay causes the other party to reasonably believe that the innocent party 
                            elected to uphold the contract, the right to cancel will be lost. 
                          </p>
                          <p>
                            A case in point would be that of <em><strong>Mahabeer v Sharma <sup id="164"><a href="#164r">164</a></sup>
                            </strong></em> wherein a contract of sale was concluded between M and S. M was to pay the purchase price in 
                            instalments. These payments were not made. S wrote to M and stated that contracted would be cancelled if 
                            payment was not made within 30 days (notice of rescission). M did not pay. 5 months after this letter 
                            was sent, S sold the property to someone else. At this time, M’s attorney was informed of the cancellation 
                            (notice of cancellation) and subsequent sale. M argued that the right to cancel lapses unless it is exercised 
                            within a reasonable time. 
                          </p>
                          <p>
                            The court held that a mere delay in final notification cannot per se result in the loss of the right to cancel. 
                            The delay could however indicate an election to uphold the contract. On the facts, the Court held that an inference 
                            could be made, as the guilty party never believed that the innocent party had given up the right to cancel the contract. 
                            As a result, S’s right to cancel was not lost. See also <em><strong>Paradyskloof Golf Estate v Stellenbosch Municipality
                            <sup id="165"><a href="#165r">165</a></sup></strong></em>. 
                          </p> 
                          <div class="note note-danger">
                            <i class="fas fa-sticky-note">NB:</i>
                            <p class="text-left">
                              When the innocent party has elected to cancel, the contract is at an end and there is no possibility to uphold it later on. 
                            </p>
                          </div>                          
                        </li>
                      </ul>
                    </p>
                  </li>
                  <li>
                    <strong>
                      <u>
                        The effect of cancelation
                      </u>
                    </strong>
                    <p>
                      Cancelation extinguishes all obligations that need to be performed after the date of cancelation, and further creates an obligation to 
                    </p> 
                    <!--Blockquote-->
                    <div class="example z-depth-2 bg2 p-3 m-4">  
                      <h6 class="text-left class h6">Example 1</h6>                    
                          <blockquote class="blockquote text-left">
                            A sells his bull to B for E10, 000.00 to mate with B’s cows. The parties agree that A will deliver the bull to B on payment of a 
                            E5, 000.00 deposit. They agree that B will pay the remainder of the purchase price in monthly instalments of E1, 000.00 over the 
                            next 5 months. B pays the E5, 000.00 deposit and A delivers the bull. However the bull turns out to be impotent. A therefore 
                            commits a breach of positive malperformance. B then elects to cancel the contract. The effect of the cancelation is the following: 
                            <ul>
                              <li>
                                It creates a duty to restore all performances already made (restitution). B is therefore obliged to return the bull to A and 
                                A is obliged to return the E5, 000.00 to B;
                              </li>
                              <li>
                                All future obligations are terminated. B will not have to pay the future monthly instalments.
                              </li>
                            </ul>
                          </blockquote>                        
                    </div> 
                    <!--Blockquote end-->
                    <p>
                      restore any performance that has already been made.
                    </p>
                  </li>
                  <li>
                    <strong>
                      <u>
                        The Doctrine of accurued rights
                      </u>
                    </strong>
                    <p>
                      This doctrine applies where the performances in terms of the contract are divisible or where the contract creates continuous (ongoing) 
                      obligations (e.g. rental contracts, employment and service contracts). According to this doctrine, rights that are due and enforceable 
                      before cancelation and are independent of any executory part of the contract are not extinguished by cancelation. By the executory part 
                      of the contract we mean the obligations which still have to be performed after the date of cancelation. Examples of these are
                      <sup><a id=166 href="#166r">166</a></sup>. You can also see in this regard the case of <em><strong>Crest Enterprises (Pty) Ltd v Rycklof Beleggings (Edms) Bpk
                        <sup><a id=167 href="#167r">167</a></sup></strong></em>.  
                    </p>
                    <p>
                      In other words, where the doctrine of accrued rights applies, cancelation only terminates those obligations that have not yet accrued by the time 
                      of cancelation. In effect, we are dealing with partial cancelation –
                      <ul>
                        <li>
                          rights that have not accrued are cancelled; and 
                        </li>
                        <li>
                          rights that have accrued are enforceable by way of specific performance as if the contract has not been cancelled
                        </li>
                      </ul> 
                    </p>
                    <p>
                      There are three requirements for the operation of the doctrine of accrued rights which are as follows:
                      <ul>
                        <li>
                          The contract must be divisible into separate sets of reciprocal performances;
                        </li>
                        <li>
                          The accrued rights must be due and enforceable before the date of cancelation;
                        </li>
                        <li>
                          The accrued rights must be independent from any outstanding (unperformed) obligation at the time of cancelation.
                        </li>
                      </ul>
                    </p>
                    <p>
                      For further reading on the above requirement students are referred to the following authorities which are instructive on the above principle:
                      <ul>
                        <li>
                          <em><strong>Nash v Golden Dumps (Pyt) Ltd</strong></em> 1985 (3) SA 1 (A); 
                        </li>
                        <li>
                          <em><strong>PBL Management (Pty) Ltd v Telkom SA Ltd</strong></em> 2001 (2) SA 313 (T);
                        </li>
                        <li>
                          Read also <em>“The Principles of the Law of Contract”</em> by A J Kerr (6th Edition) at pages 733 to 735 on Cancelation and Restitution. 
                        </li>
                      </ul>
                    </p>
                  </li>
                </ol>
                <!--Paragraph 5 end-->
              </ol>
            </div>
          <!--Chapter Cancellation end-->
          <hr>
          <br>
          <!--Chapter Damages-->
            <div class="Chapter">
              
              <ol type="1"> 
                <h1 id="damages" class="text-center chapter-topic  secondary-heading text-primary"><strong>Damages</strong></h1>
                <!--Paragraph 1 -->
                <p>
                  Damages may be rewarded to an aggrieved party who shows that he has suffered loss; that the breach of contract is the significant factor 
                  or cause in bringing about the loss; that the amount claimed and proved is either as agreed upon or as provided for in the residual rules; 
                  and that in appropriate cases the rules or notices relating to cancelation have been complied with.
                  <sup><a id="168" href="#168r">168</a></sup>
                 
                </p>
                <!--Paragraph 1 end -->
                <ol type="i">
                  <li>
                    <strong>
                      <u>
                        The nature of damages for breach
                      </u>
                    </strong>
                    <p>
                      Unlike damages for delict, damages for breach of contract are not intended to recompense the innocent party for his loss, but to put him in the position he would have been if the contract had been properly performed. The difference herein was succinctly stated by Van den Heever JA in <em><strong>Trotman v Edwick
                      <sup><a id="169" href="#169r">169</a></sup> 
                        
                        </strong></em>: 
                    </p> 
                    <!--Blockquote-->
                    <div class="example z-depth-2  p-3 m-2">
                          <blockquote class="blockquote text-left">
                            “A litigant who sues on contract sues to have his bargain or its equivalent in money or in money and kind. The litigant who sues 
                            on delict sues to recover the loss which he has sustained because of the wrongful conduct of another, in other words, that the 
                            amount by which his patrimony has been diminished by such conduct should be restored to him.”
                          </blockquote>     
                    </div> 
                    <!--Blockquote end-->
                    <p>
                      It is worth noting that damages are usually claimed together with further/alternative relief. For example:
                      <ul>
                        <li>
                          One can claim specific performance and damages;
                        </li>
                        <li>
                          One can claim specific performance and in the same action ask the Court that, in the event of the defendant’s non- compliance with 
                          this order within the stipulated time, the contract be cancelled and damages be rewarded (double- barrelled procedure)
                        </li>
                        <li>
                          One can claim specific performance and, in the alternative, damages, that is if the Court exercises is discretion and refuses to 
                          grant an order of specific performance, and one wants damages for loss suffered
                        </li>
                        <li>
                          One can claim cancellation, restitution and damages
                        </li>
                      </ul>
                    </p>
                  </li>
                  <li>
                    <strong>
                      <u>
                        Requirements for a claim for damages
                      </u>
                    </strong>
                    <p>
                      The plaintiff must prove the following:
                      <ul>
                        <li>
                          Breach of contract by the other party. 
                        </li>
                        <li>
                          Patrimonial loss
                        </li>
                        <li>
                          A causal connection between the breach and the loss (factual causation).
                        </li>
                        <li>
                          That the loss is not too remote (legal causation – general versus special damages). The onus is on the party claiming 
                          damages to prove these requirements. Once these elements have been proven, the onus shifts to the defendant to prove 
                          that there was.
                        </li>
                        <li>
                          A duty on the plaintiff to mitigate his losses, which he failed to do. 
                        </li>
                      </ul>
                    </p>
                    <p>
                      Study the case of <strong><em>Victor Products SA (Pty) Ltd v Lateulere Manufacturing (Pty) Ltd
                         <sup><a id="170" href="#170r">170</a></sup> 
                        </em></strong>  
                    </p>
                    <p>
                      Let us now consider each of the above requirements in detail:
                      <ol type="a">
                        <li>
                          <strong>
                            <u>
                              Breach
                            </u>
                          </strong>
                          <p>
                            On this requirement do consider the discussion on breach discussed in the previous chapter.
                          </p>
                        </li>
                        <li>
                          <strong>
                            <u>
                              Patrimonial loss
                            </u>
                          </strong>
                          <p>
                            The law adopts a materialistic approach to loss in the context of contract. Loss must affect 
                            your patrimony, that is, the breach must cause financial loss. In the case of <em><strong>Administrator, 
                            Natal v Edouard  <sup><a id="171" href="#171r">171</a></sup> 
                            
                            </strong></em>, it was stated that one cannot claim for non-patrimonial loss such as pain 
                            and suffering, mental anguish, sentimental losses, physical inconvenience, etc in the law of contract. 
                          </p>
                          <p>
                            The <u>once and for all rule</u> is applicable: a plaintiff must claim all his damages in one action. This 
                            means that he must claim not only for present losses but also for prospective (future) losses. It is 
                            however quite difficult to calculate loss, especially in relation to opportunities that the innocent 
                            party has lost as a result of the breach. See in this regard <em><strong>SDR Investment Holdings Co. (Pty) Ltd v 
                            Nedcor Bank Ltd<sup><a id="172" href="#172r">172</a></sup>
                            </strong></em>. The courts therefore do not insist that the plaintiff quantify his loss with mathematical 
                            procession. The plaintiff must however, produce the best evidence that he can prove the quantum of his loss. 
                          </p>
                          <p>
                            A breach of contract can have both detrimental and beneficial consequences. To the extent that both flow 
                            from the breach and taking account of the question of remoteness, it is often said that both should in 
                            principle be taken into account to determine the net effect on the plaintiff’s financial position. 
                            The following example is made:
                          </p> 
                          <!--Blockquote-->
                          <div class="example z-depth-2">                           
                                <blockquote class="blockquote text-left">
                                  If, in a contract for the sale of a house, the purchaser is given the right of occupation of the 
                                  house and the seller fails to evict the tenants, the seller commits a breach of contract. The 
                                  tenants, whilst in occupation of the house, must however, pay rent to the purchaser. The 
                                  rental income is a beneficial consequence that must be taken into account in accessing 
                                  the purchaser’s damages
                                </blockquote>                             
                          </div>
                          <!--Blockquote end-->
                        </li>
                        <li>
                          <strong>
                            <u>
                              Factual Causation
                            </u>
                          </strong>
                          <p>
                            Factual causation is a question of fact-we use the <em>conditio sine qua non</em> test (the but for test) 
                            to ask whether this loss would have occurred but for the breach of the contract. If the damage 
                            would not have occurred, the breach caused the damage. It has been stated by previous authorities 
                            the uncertainty whether the innocent party’s claim could fail or be reduced if he caused his own 
                            losses due to contributory negligence. However, this question has been settled by the Supreme 
                            Court of South Africa in the case of <strong><em>Thoroughbred Breeders Association v Price Waterhouse<sup><a id="173" href="#173r">173</a></sup>
                            </em></strong><strong> [Study the judgment]</strong>
                          </p>
                        </li>
                        <li>
                          <strong>
                            <u>
                              Remoteness of Harm (legal Causation) 
                            </u>
                          </strong>
                          <p>
                            It is in the interest of fairness to the defendant, that a line be drawn between damages caused by his 
                            breach for which he is to be held liable and damages which, although in the broad sense of the word 
                            caused by his breach, are so remote from it that he ought not to be held liable for them. The starting 
                            point is the judgment of Corbbett JA in <strong><em>Holmdene Brick Works (Pty) Ltd v Roberts Construction Co. Ltd
                             <sup><a id="174" href="#174r">174</a></sup>
                             </em></strong>.
                          </p>
                          <p>
                            Basically, legal causation entails that the harm must be reasonable foreseeable at the time of entering into contract. 
                            The English case of <strong><em>Hadley v Baxendale <sup><a id="175" href="#175r">175</a></sup>
                            </em></strong>, stated as follows: 
                          </p>
                          <!--Blockquote-->
                          <div class="example z-depth-2 p-3 m-2">
                                <blockquote class="blockquote text-left">
                                  “Where two parties have made a contract which one of them has broken, the damages which the other party ought to 
                                  receive in respect of such breach of contract should be such as may fairly and reasonable be considered either 
                                  arising naturally, i.e. according to the usual course of things, from such breach of contract itself, or such 
                                  as may reasonable be supposed to have been in the contemplation of both parties, at the time they made the 
                                  contract, as the probable result of the breach of it.”
                                </blockquote>                              
                          </div>
                          <!--Blockquote end-->
                          <p>
                            Instead of using a straight forward test based on foreseeability to determine legal causation, the Court complicate 
                            the issue by drawing a distinction between general damages (intrinsic loss) and special damages (extrinsic loss).
                            <ol>
                              <li>
                                General Damages (intrinsic Loss):
                                <p>
                                  This is the normal sort of earm that you would expect to flow from such a breach of contract – the natural 
                                  and probable consequences of the breach. The general damages, as thus defined, cause little difficulty. 
                                  They do not have to be specially pleaded, and the question in each case is simply whether they flow naturally 
                                  and generally from the kind of breach that has been committed.<sup><a id="176" href="#176r">176</a></sup> 
                                  For example, it is normal and probable that 
                                  the failure to sterilise a woman would result in her having further children which she would have to support. 
                                  The costs of support these children is general damages.
                                </p>
                              </li>
                              <li>
                                Special Damages (Extrinsic Loss):
                                <p>
                                  Although the loss is factually caused by the breach, it is unusual because of some special circumstances or 
                                  interest of the innocent party. The guilty party would not in the ordinary course of events expect such loss 
                                  in the case of breach. An example could be, a woman contracts with a doctor to perform a sterilisation because 
                                  she suffers from High Blood Pressure, a medical condition that is aggravated by pregnancy. As a result of 
                                  the unplanned pregnancy her blood pressure becomes so high that she suffers a stroke which paralyses her so 
                                  that she will never be able to work again. The woman’s loss of income as a result of the stroke is special 
                                  damage-not every woman who becomes pregnant after a failed sterilisation will suffer a stroke. 
                                </p>
                              </li>
                              <p>
                                With special damages there lies a problem in their recovery in that they are generally not foreseeable. However, 
                                the Courts have held that if the plaintiff can show on the facts that the loss was reasonable foreseeable, the 
                                damages can be calculated. 
                              </p>
                              <p>
                                For further reading on the subject refer to the following authorities:
                                <ul>
                                  <li>
                                    <strong><em>Lavery & Co. Ltd v Jungheinrich</em></strong> 1931 AD 156; 
                                  </li>
                                  <li>
                                    <strong><em>Sharz Investment v kalovyrnas</em></strong> 1976 (2) SA 545 (A); 
                                  </li>
                                  <li>
                                    <strong><em>Thoroughbred Breeders Association v Price Waterhouse</em></strong> 2001 (4) SA 551 (SCA) 579-583; 
                                  </li>
                                  <li>
                                    <strong><em>Transnet Ltd t/a National Ports Authority v Owner of MV Snow Crystal</em></strong>2008 (4) SA 111 (SCA) paragraphs 31-36
                                  </li>
                                </ul>
                              </p>
                            </ol>
                          </p>
                        </li>
                      </ol>
                    </p>
                  </li>
                  <li>
                    <strong>
                      <u>
                      Mitigation of Damages 
                      </u>
                    </strong>
                    <p>
                      When a contract has been breached the innocent party is not entitled to sit back and allow damages to multiply. It is his duty to mitigate his damages. 
                      The duty was well expressed by Stratford CJ in <em><strong>Hazis v Transvaal and Delagoa Bay Investments Co. Ltd
                      <sup><a id="177" href="#177r">177</a></sup>
                      </strong></em> as follows:
                    </p> 
                    <!--Blockquote-->
                    <div class="example z-depth-2 bg2 p-3 m-4">
                      <blockquote class="blockquote text-left">
                        “This rule about mitigating damages relates not to what the claimant in fact did, but to what he should have done. It is in essence a claim based on 
                        negligence-neglect to do what a reasonable man would do if placed n the position of the person claiming damages. The defendant in such claim says 
                        ‘admitting that in fact you suffered those damages, you have only yourself to blame for having suffered so much, or at all because you did not take 
                        reasonable steps to protect yourself and, therefore, me’.”
                      </blockquote>                        
                    </div>
                    <!--Blockquote end-->
                    <p>
                      It is further to be noted that in mitigation of damages the plaintiff does not have to plead and prove that he has done what is reasonable to mitigate his 
                      damages, because the onus is on the defendant to prove that he has not. The plaintiff is not required to do more than a reasonable man would do to mitigate 
                      his damages, and the defendant’s onus of proving that the plaintiff has not acted reasonable is difficult to charge. In <strong><em>Holmdene Brick Works (Pty) Ltd v Roberts 
                      Construction</em></strong> supra, Corbett JA said:
                    </p>
                    <!--Blockquote-->
                    <div class="example z-depth-2 bg2 p-3 m-4">
                      <blockquote class="blockquote text-left">
                        “Being a question of mitigation, the onus of establishing that there were other less costly remedies which the respondent ought to have adopted rested upon the appellant. 
                        In a case such as the present one, where the breach of contract creates something of an emergency and the sufferer finds himself in a position of embarrassment as a 
                        consequence of the breach, the measures which he may be forced to adopt to extricate himself ought not to be weighed in nice scales and the Court should not be 
                        astute to hold that this onus has been discharged. The law is satisfied if the sufferer from the breach has acted reasonable in the adoption of remedial measures.”
                      </blockquote>                        
                    </div>
                    <!--Blockquote end-->
                  </li>
                </ol>
              </ol>
            </div>
          <!--Chapter Damages end-->
          <hr>
          <br>
         
          <!--Unit Summary-->
            <div class="Chapter">
                <h1 id="unitSammary" class="text-center chapter-topic secondary-heading text-primary"><strong><i class="fas fa-book-reader"></i> Summary</strong></h1>
              <p class="text-left">
                In summary, it is evident that there are five (5) remedies available for breach or threatened breach of contract. These are generally, specific performance, interdict, declaration of rights, 
                cancellation and damages. The first three (3) may be regarded as methods of enforcements and the last two methods of claiming compensation for non- performance. As was demonstrated in our discussion 
                on these remedies, it was clear that the choice between these remedies rests primarily with the injured party, the plaintiff, who may choose more than one of them, either in the alternative or together, 
                subject to the general principles that he may not claim inconsistent remedies and he may not be over compensated. Can a party to a contract transfer his or her rights and obligations to another person? 
                We shall discuss this in the next unit. Enjoy!
              </p>

            </div>
          <!--Unit Summary-->
          <hr>
          <br> 
        
          <!--Discussion-->
            <div>
              <i class="fas fa-comments"></i>
              <h5 id="discussion" class="text-left">Discussion</h5>
              <p class="text-left">
                With reference to case law discuss the five (5) remedies covered in this unit for breach or threated breach.  
              </p>

            </div>
          <!--Discussion-->
          <hr>
          <br> 
         
          <!--Activity 1-->
            <div class="Chapter">
              <h1 id="activity1" class="text-center chapter-topic secondary-heading text-primary"><strong><i class="fas fa-tools"></i>Activity 1</strong></h1>
              <p class="text-left">
                A enters into a contract with B for the installation an alarm system at B’s private property. B pays a deposit of E3,000.00 with a balance of E2,000.00. Upon payment of the deposit, A disappears. 
                B looks for A and locates his whereabouts after 2 weeks. A is given another opportunity to install the system but he says he has other ongoing projects which are a priority. B comes to you for advice
              </p>

            </div>
          <!--Activity 1-->
          <hr>
          <br> 
          
          <!--Activity 2-->
            <div class="Chapter">
               <h1 id="activity2" class="text-center chapter-topic  secondary-heading text-primary"><strong><i class="fas fa-tools"></i> Activity 2</strong></h1>     
              <p class="text-left">
                Discuss the legal principles of cancellation as a remedy for breach of contract, referring to case law. 
              </p> 
            </div>
          <!--Activity 2-->
          <hr>
          <br> 
          <!--Refferences  -->
            <div class="note ">
              <h1 id="activity2" class="text-center chapter-topic  secondary-heading text-primary"><strong> References</strong></h1>
            
              <li> <a id="130r" href="#130">130</a> 1986 (1) SA 776 (A) at 872 H – J</li>
              <li> <a id="140r" href="#140">140</a>A J Kerr, “The Principles of the Law of Contract” 6th Edition, at page 677</li>
              <li> <a id="141r" href="#141">141</a>1986 (1) SA 776</li>
              <li> <a id="145r" href="#145">145</a>1919 WLD 100</li>
              <li> <a id="146r" href="#146">146</a>1971 (3) SA 643 (W)</li>
              <li> <a id="147r" href="#147">147</a>1924 NPD 208 148 1994 (1) SA 626</li>
              <li> <a id="148r" href="#148">148</a>1994 (1) SA 626 (T) 634 B-C</li>
              <li> <a id="149r" href="#149">149</a>Compagnie Interafricaine de Travaux v South African Transport Services 1991 (4) SA 217 (A) 2301-231 C; Ex parte Van Schalkwyk and Hay 1952 (2) SA 407 (A); Durban City Council v Association of Building Sicieties 1942 AD 27 32-3.</li>
              <li> <a id="150r" href="#150">150</a>Taljaard v Glose 1951 (1) SA 209 (SWA); Shaban v Culemborg Bnaking Corpn Ltd 1962 (2) SA 450 (W).</li>
              <li> <a id="151r" href="#151">151</a>AJ Kerr supra at p.595-596.</li>
              <li> <a id="152r" href="#152">152</a>Deeksha Bhana et al, “Student’s Guide to the Law of Contract” (3rd Edition) at page 321.</li>
              <li> <a id="153r" href="#153">153</a>AJ Kerr, “The Principles of the Law of Contract” 6th Edition, p. 703.</li>
              <li> <a id="154r" href="#154">154</a>Deeksha Bhana et al, “Students Guide to the Law of Contract “3rd Edition, p. 322</li>
              <li> <a id="155r" href="#155">155</a>1981 (2) SA 684 (A).</li>
              <li> <a id="156r" href="#156">156</a>2006 (6) SA 358 (SCA) para 11</li>
              <li> <a id="157r" href="#157">157</a>1977 (2) SA 943 (A)</li>
              <li> <a id="158r" href="#158">157</a>The Principles of the Law of Contract, supra page 704)</li>
              <li> <a id="160r" href="#160">160</a>2001 (2) SA 284 SCA</li>
              <li> <a id="161r" href="#161">161</a>Schuurman v Davey 1908 TS 664 at 671 per Innes CJ followed in Jaffer v Falante 1959 (4) SA 360 (C) at 362</li>
              <li> <a id="162r" href="#162">162</a>Radiotronics (Pty) Ltd v Scott, Lindberg & Co. Ltd 1951 (1) SA 312 (C) at 324</li>
              <li> <a id="163r" href="#163">163</a>Segal v Mazzur 1920 CPD 634 at 644 approved in Du Plessis And Another NNO v Rolfes Ltd 1997 (2) SA 354 (A) at 364 H</li>
              <li> <a id="164r" href="#164">164</a>N.O. 1985 (3) SA 729 (A)</li>
              <li> <a id="165r" href="#165">165</a>2011 (2) SA 525 (SCA).</li>
              <li> <a id="166r" href="#166">166</a>A tenant’s duty to restore property in original condition after cancellation of lease, subject to wear and tear. Another example would be that of the employer’s obligation to pay wages subsequent to the cancellation of the employment contract.</li>
              <li> <a id="167r" href="#167">167</a>1972 (2) SA 863 (A)</li>
              <li> <a id="168r" href="#168">168</a>AJ Kerr supra page 737</li>
              <li> <a id="169r" href="#169">169</a>1951 (1) SA 443 (A) 449 B-C</li>
              <li> <a id="170r" href="#170">170</a>1975 (1) SA 961 W</li>
              <li> <a id="171r" href="#171">171</a>1990 (3) SA 581 (A)</li>
              <li> <a id="172r" href="#172">172</a>2007 (4) SA 190 (C)</li>
              <li> <a id="173r" href="#173">173</a>2001 (4) SA 551 (SCA).</li>
              <li> <a id="174r" href="#174">174</a>1977 (3) SA 670 (A) 687</li>
              <li> <a id="175r" href="#175">175</a>(1854) 150 ER 145</li>
              <li> <a id="176r" href="#176">176</a>RH Christie supra, at page 607</li>
              <li> <a id="177r" href="#177">177</a>1939 AD 372-388</li>
            </div>

          <!--Refferences  -->


      </div>
      <!--Column--> 

    </div> 
    <!--Row-->

  </div> 
<!--Container-->

</template>
<!--Template-->
<script>
     import { mdbScrollSpy,mdbCollapse, mdbContainer} from "mdbvue";
  export default {
    directives: {
      mdbScrollSpy,
      mdbCollapse,
      mdbContainer
    }  
  };

</script>

<style>
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
#dotted_underline{
  border-bottom: 1px dotted #000;
  text-decoration: none;

}
.bg{
  background-color: #e1f5fe;
}
.bg2{
  background-color: #bbdefb;  
}

</style>