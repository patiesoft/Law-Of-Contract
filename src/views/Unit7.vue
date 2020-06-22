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
                <mdb-dropdown-item href="#intro">Introduction</mdb-dropdown-item>
                <mdb-dropdown-item href="#def">Defination of Cession</mdb-dropdown-item>
                <mdb-dropdown-item href="#nature">The Legal Nature of Cession</mdb-dropdown-item>
                <mdb-dropdown-item href="#reqmnt">Requirements of a Valid Cession</mdb-dropdown-item>
                <mdb-dropdown-item href="#consequences">Consequences of Cession</mdb-dropdown-item>
                <mdb-dropdown-item href="#extinct">Extinction of Obligations</mdb-dropdown-item>
                <mdb-dropdown-item href="#summary">Unit Summary</mdb-dropdown-item>
                <mdb-dropdown-item href="#activity">Activity</mdb-dropdown-item>
              </mdb-dropdown-menu>
            </mdb-dropdown>
          </mdb-navbar-nav>
        </mdb-navbar-toggler>
      </mdb-navbar>

    <div class="Head">
      <h1 class="h1 h1-responsive">UNIT 7</h1>
      <p class="h1-responsive red-text text-center">TRANSFER OF RIGHTS AND OBLIGATIONS (CESSION)</p>
    </div>
   
  <div class="row" >

      <!-- Content -->
        <div class="col text-justify">
              <div class="note note-primary">  
                <h2 id="intro" class="text-center  secondary-heading text-primary">Introduction</h2>
                <p class="text-justify lead">Generally, contractual rights, present and future may be freely transferred by cession. 
                  Under the civil law system, cession is the equivalent of assignment and therefore, is an act by 
                  which a personal claim is transferred from the assignor (cedent) to the assignee (cessionary). 
                  Whereas real rights transferred by delivery, personal rights are transferred by cession. 
                </p>
                <h5 class="h5">Contents</h5>
                <p>This Unit is divided into five (5) key areas:</p>
                <ul>
                  <li>The Definition of Cession</li>
                  <li>The Legal Nature of Cession</li>
                  <li>Requirements of Cession</li>
                  <li>Consequences of Cession</li>
                  <li>Extinction of Obligations</li>
                </ul>
                <h5 class="h5">Outcomes</h5>  
                <p>Upon completion of this unit you will be able to:</p>
                <ul>
                  <li>Demonstrate a clear understanding of cession by explaining its requirements and consequences.</li>
                  <li>Demonstrate how rights are transferred.</li>
                  <li>Justify the extinction of obligations in a contract.</li>
                </ul>
                <h5 class="h5">Terminology</h5>
                <p>In this Unit, you will be introfuced to the following concepts:</p>
                <blockquote class="blockquote bq-info">
                  <p class="text-black">Cession, cedent, contractual  rights,  document rule, delectus personae,  
                  valid causa, pactum de non cedendo, animo solvendi, exceptio non adimpleti contractus 
                  </p>
                </blockquote>
                <h5 class="h5">Reading<mdb-icon icon="book-open" /></h5>
                <ul>
                  <li>Deeksha Bhana, Elsje Bonthuys and Minette Nortje,<em class="h6"> “Students Guide to the Law of Contract”</em>,
                  3rd Edition, 2013</li>
                  <li>AJ Kerr,<em class="h6"> “The Principles of the Law of Contract”</em>, 6th Edition, 2002</li>
                  <li>RH Christie,<em class="h6"> “The Law of Contract in South Africa”</em>, 3rd Edition, 1996</li>
                </ul>
                <h5 class="h5">Case Law</h5>
                <ul>
                  <li><strong>Mother Truckers (Pty) Ltd v Sharp Freight (Pty) Ltd </strong>[2007] SZHC 66</li>
                  <li><strong>First National Bank of SA Ltd v Lynn N.O. and Others </strong>1996 (2) SA 339 (A)</li>
                  <li><strong>Makgathu v Cargo Carriers (Pty) Ltd </strong>(591/2012) [ 2018] SZHC 151</li>
                  <li><strong>Benefeld v West</strong> 2011 (2) SA 379 (GSJ)</li>
                  <li><strong>Tauber v Von Abo</strong> 1984 (4) SA 482 (E)</li>
                  <li><strong>Smith v Farrelly’s Trustee</strong><sup>178</sup>  1904 TS 949</li>
                  <li><strong>Labuschagne v Denny</strong><sup>179</sup> 1963 (3) SA 538 (A)</li>
                  <li><strong>Standard Bank of SA Limited v Ocean Commodities In</strong> 1983 (1) SA 276 (A)</li>
                </ul>
                <p class="small red-text"><sup>178</sup> 1904 TS 949</p>
                <p class="small red-text"><sup>179</sup> 1963 (3) SA 538 (A)</p>
            </div>

          <div class="note note-secondary text-justify">   
            <h5 id="def" class="h5 text-primary">Definition of Cession</h5>
            <p class="blockquote bq-info">Cession is the legal act whereby a personal right is transferred from a creditor to another person, who then becomes a creditor<sup>180</sup>. </p>
            <p>A simple example of cession is the following:</p>
            <blockquote class="blockquote bq-success">
              <p class="bq-title">Example 1</p>
              <p>A buys a car from B. In respect of that car: A (creditor) has a personal right against B (debtor) for delivery of the car.
                A may want to transfer this personal right to C. This can be done by way of cession. The effect of a valid cession is that C 
                will now have a personal right for delivery of the car which is enforceable against B.</p>
            </blockquote>  
            <p>The person who transfers his right (the original creditor) is called the cedent. The person who 
              obtains the ceded right is called the cessionary. </p>
            <p>Note that there is an important distinction between cession and delegation: Delegation is an act through which legal duties are transferred from one ‘debtor’ to another. Cession should also be distinguished from assignment, where both rights and duties are transferred (thus a cession and a delegation combined). Note that both delegation and assignment require that all three of the parties must consent to the transfer (the old debtor/creditor, the new debtor/creditor and the other party). </p>
            <p>In the case of cession, only the cedent and the cessionary need to consent<sup>181</sup> . Let us look at the following example in explaining the above statement:</p>
            <blockquote class="blockquote bq-success">
              <p class="bq-title">Example 2</p>
              <p>A bought a car from B at a price of E50, 000.00. A is the debtor in relation to the price, and the creditor in relation to the car.</p>
              <p><strong>Cession:</strong> A transfers his right to the car to C. C is now the new creditor for the car. Only A and C need to consent to the transfer of the right. Note that A remains the debtor in relation to the purchase price.</p>
              <p><strong>Delegation:</strong> A transfers his duty to pay the price to C. C is now the new debtor in relation to payment of the price. All three parties (A, B and C) must consent to the transfer. Note that A remains the creditor in relation to the car.</p>
              <p><strong>Assignment:</strong> A transfers both his right to the car and his duty to pay the price to C. C is now the new creditor in relation to the car, and the new debtor in relation to the payment of the price. All three parties (A, B and C) must consent to the transfer. A is no longer a party to the contract (he has transferred all his rights and duties to C).</p>
            </blockquote>  
            <p>In reciprocal contracts the mere fact that cession has taken place does not automatically replace the debtor - for that a delegation is necessary.</p>
            <p class="small red-text"><sup>180</sup> First National Bank of SA Ltd v Lynn N.O. and Others 1996 (2) SA 339 (A); Headleigh Private Hospital (Pty) Ltd t/a Rand Clinic v Soller & Manning Attorneys and Others 2001 (1) SA 360 (W)</p>
            <p class="small red-text"><sup>181</sup> “Students Guide to the Law of Contract” supra at page 458</p>
          </div>
          <div class="note note-secondary text-justify">
            <h5 id="nature" class="h5">The Legal Nature of Cession</h5>
            <p>Cession is not a contract that creates personal rights and duties. It is a real agreement that actually affects the transfer of the personal right from the cedent to the cessionary<sup>182</sup> . Cession is therefore an act of transfer like delivery of a movable or registration of an immovable thing to transfer ownership. Cession, will however, usually be preceded by a cession contract (called the Obligationary Agreement) between the cedent and the cessionary which creates obligation to effect cession. This contract is often reciprocal. What is intended to be described by the phrase “Obligationary Agreement” is what in all other contexts is called a contract so should be referred to as such. The above is illustrated in the case of 
            <strong><em>First National Bank of SA Limited supra.</em></strong>  
            </p>
            <p>Very often, the contract to cede and the cession happens simultaneously and both are embodied in the same legal document. However, this is not necessarily the case. As we will see, in some situations we need delivery of a document to complete the cession and this would take place after the contract to cede has been concluded.
            </p>
            <blockquote class="blockquote bq-success">
              <p class="bq-title">Example 3</p>
              <p>X owes A E15, 000.00. A agrees to cede her right against X to B in return for E10, 000.00 cash (Obligationary Agreement Contract):</p>
                <ul class="h6">
                  <li>The contract between A and B to effect cession of the right is a normal contract like any other. A has a duty to transfer (cede) her right against X to B and if she fails to do so, she is guilty of breach of contract. B can then enforce A’s duty to cede the right by way of specific performance;</li>
                </ul>
            </blockquote>
            <p class="small red-text"><sup>182</sup> Hutchison, “The Law of Contract in South Africa”, 3rd Edition, Oxford, p.367</p>
          </div>
          <div class="note note-secondary text-justify">
            <h4 id="reqmnt" class="h5">Requirements of A Valid Cession</h4>
            <p>Cession is not a contract that creates personal rights and duties. It is a real agreement that actually affects the transfer of the personal right from the cedent to the cessionary<sup>183</sup>. Cession is therefore an:</p>
            <ul>
            <li>The cedent must have the capacity to cede the right.</li>
            <li>Is there a valid <em>causa</em> (Obligationary Agreement)</li>
            <li>It must be a real agreement (actual cession)</li>
            <li>Formalities must be satisfied</li>
            <li>The right must be capable of being ceded</li>
            <li>The cession must be legal</li>
            <li>There must be no prejudice for the debtor</li>
            <li>Has notice been given to the debtor</li>
          </ul>
          <blockquote class="blockquote bq-info">
            <p class="bq-title">(a)	Capacity to cede</p>
            <p>In order to cede a right, the cedent must be a holder of a personal right against the debtor. He cannot cede something that he does not have. This is premised on the Latin maxim <em>‘nemo plus iuris ad alium transferre potest, quam ipse haberet’</em>- no one can transfer to another more rights than he himself has. If a person attempts to cede a right that he does not have, the cessionary can sue for damages for breach of the cession contract, but there can be no cession. In addition, any defects that attach to the right can also be asserted against the cessionary. Thus, if the debtor would have had a defence against the cedent, the same defence can generally also be used against the cessionary. The cedent cannot cede a right that is stronger than the one he has. See the discussion on the effects of cession below.</p>
            <p class="bq-title">(b) Valid causa (Obligationary Agreement)</p>
            <p>This is the contract that underlies the cession (like the contract of sale which underlies the transfer of ownership in a house). If cession is not effected, potential cessionary may sue on this contract. This contract is like any other and the normal requirements for a valid contract apply. It is unclear whether the obligationary agreement must be valid in order for cession (transfer) to be effective. It is possible that cession operates like transfer of ownership of a thing. In other words, there can be a valid transfer of the right, even if the obligationary agreement is invalid for some reason.</p>
            <p class="bq-title">(c)	Real Agreement</p>
            <p>In order to effect the cession, both parties must intend to transfer the right in question (that is they carry out the obligationary agreement by ceding the right to the cessionary).</p>
            <p class="bq-title">(d)	Formalities</p>
            <blockquote class="bq-light">
              <p class="red-text">(i)	Document Rule: </p>
              <p>As a general rule, the law requires no formalities for a cession. However, where the right that is ceded is incorporated in a written document, some cases have held that the cession is not complete until the document has been handed over to the cessionary. This is called the <strong> Documents Rule</strong>. It was first formulated in <strong>Smith v Farrelly’s Trustee</strong><sup>184</sup> and has since been applied in <strong>Labuschagne v Denny</strong><sup>185</sup> and <strong>Standard Bank of SA Limited v Ocean Commodities Inc</strong><sup>186</sup>. . It should be noted that the documents rule has been severely criticised. </p>
              <p>In the case <strong>Botha v Fick</strong><sub>187</sub> , the Court held that, normally, mere agreement is sufficient to effect the cession that is cession would simply consist of the intention of the cedent to transfer the right to the cessionary and the corresponding intention of the cessionary to receive the right from the cedent. However, in cases where a right is embodied in a document in such a way that it cannot exist without the document (for example a negotiable instrument), delivery of the document is required. By contrast, where a right is embodied in a document, but the existence of the right can be proved independently from the document (for example a loan agreement which is put in writing), delivery of the document is not necessary for a valid cession. </p>
              <p  class="red-text">(ii)	Self- imposed formalities</p>
              <p>As in other contracts, the parties themselves may agree to certain formalities as a formal requirement for the validity of the cession. </p>
              <p class="red-text">(iii)	Formalities imposed by Law</p>
              <p>In certain types of contracts, a transfer of documents may be required by law. For example, for the transfer of shares, it is necessary that the share certificates be handed over together with a transfer form signed by the cedent. In the case of rights embodied in negotiable instruments, one needs to deliver the documents in order to effect transfer. For the transfer of rights under mortgage bonds, registration in the Deeds Office is necessary.</p>
            </blockquote>
            <p class="bq-title">(e)	The right must be capable of being ceded</p>
            <p>In principle, any personal right, which has a monetary value in the estate of the creditor, may be subject of a cession. Exceptions to this principle:</p>
            <p>
              <ul class="blue-grey-text">
                <li>Public Policy dictates that certain types of rights should not be capable of cession. These are, for example, rights deriving from a maintenance order, delictual claims for pain and suffering and iniuria before litis contestation;</li>
                <li>Where the debtor has a <em> delectus personae</em>, the rights may not be ceded. <em>Delectus personae </em>is where the debtor’s performance is of such a nature that it makes a difference to him as to who the creditor is. An example is where A and B enter into a contract of employment in terms of which B is employed as A’s gardener. A cannot transfer her rights to B’s services as gardener to someone else, as it makes a different to B who his employer is. </li>
                <li><em>Pacta de non cedendo</em> (agreement not cede rights) can prevent the cession of rights. Such agreements may be potentially prejudicial to third parties who are unaware of them and then become cessionary. Courts have therefore held that they are only enforceable where the debtor can show an interest in such a restriction on cession. However, this proviso is interpreted very widely. Let us look at the following case for illustration:
                    <div class="red-text note note-warning">
                      <p> Paiges v Van Ryn Gold Mines<sup>188</sup></p>  
                      <p> An employee ceded his rights to a third party despite a <em>pactum de non cedendo</em> in the contract of employment. The employer argued that the cession was invalid because the right was not capable of being ceded. The cessionary averred that the <em>pactum de non cedendo</em> was invalid because it infringed upon the employee’s freedom of contract. The question was whether the debtor (the employer) had an interest in the restriction of cession. The Court held that an employer who employs hundreds of people obviously has an interest in knowing the identity of his creditors. Moreover, the <em>pactum de non cedendo</em> could also favour employees by protecting their rights to wages from unscrupulous creditors. For these reasons the <em>pactum de non cedendo</em> was valid and the employee’s cession of his rights to wages was ineffective (invalid).</p>
                    </div>
                </li>
                <li>(iv)	Rights which are not yet in existence: one can cede a right which is subject to a suspensive or resolutive condition. However, is it possible to cede a <em>spes</em> (a mere hope of a right, for example the possibility of inheriting from a rich relative)? A cedent cannot cede that which she does not have and before a right exists, there is nothing to cede. However, commercial needs sometimes require such transactions. For this purpose, the idea of a cession in <em>anticipando</em> has been developed whereby both the cession contract and the transfer (the cession) take place before the right accrues – on the condition that a right accrues. Thus, as soon as the right comes into existence the cession takes place automatically. See: <strong> Brummer v Gorfil Brothers Investments (Pty) Ltd</strong><sup>189</sup>  </li>
              </ul>
            </p>
            <p class="bq-title">(f)	Legality</p>
            <p>This means that the cession should not contravene any legislation and that it should be contrary to public policy. Examples of   cessions which have been regarded as illegal because they are contrary to public policy are Champertous Agreements, and the cession in <strong>Sasfin (Pty) Ltd v Beukes</strong><sup>190</sup>  which was contra bonos mores. Let us look at the following case summary;
            <div class="red-text note note-warning">
              <p> Nedcor Bank Ltd v Hyperlec Electric and Mechanical Supplies CC)<sup>191</sup></p>
              <p> Facts: H owed N a substantial amount of money. N applied for judgment against H and for H’s liquidation if it failed to pay. In order to save or to stave of the banks claim H took cession of a claim against the bank. In this manner, H hoped that it would become the creditor of the bank and thus hold off the banks’ claim by the operation of set off.</p>
              <p>Court held: A cession that is only aimed at frustrating a legitimate claim in <em>contra bonos mores</em> and illegal. </p>
            </div>
            <p class="bq-title">(g)	Not prejudicial to the debtor</p>
                <p>Although a cession does not require the consent of the debtor, the general rule is that a cession may not make the position of the debtor more burdensome. Examples of cessions that will prejudice the debtor are as follows:</p>
                <p>
                  <ul class="teal-text">
                    <li>Where a single right is ceded to two or more creditors with the effect of splitting the right and rendering the debtor liable to claims from a multiplicity of creditors (See: <strong> Van der Merwe v Nedcor Bank Bpk</strong><sup>192</sup>  </li>
                    <li>Where more than one cause of action arises from a single set of facts (for example, a contractual and a delictual claim arising out of a car accident, or a judgment and a cost order from a single case) these rights are separate from one other and cession from the debtor would not amount to splitting of a right. N.B: where a single right is ceded to a number of people as joint and several creditors, this does not split the right because they can only institute the action jointly, or where one creditor institutes an action, payment to one serves as payment to all.</li>
                    <li>What about a counter claim that the debtor may have against the cedent? A counter claim exists where the debtor has a   liquid    claim against the cedent (like a right to damages where a Court must still determine the amount of the claim). If sued by the cedent, the counter claim would be heard in the same action. Once the Court has decided on both claims, set off would operate and the debtor would only be obliged to pay the balance left after set off. 
                      <div>If the right is ceded, the debtor may be deprived of the advantages of asserting his counter claim and may be prejudiced in this way. Since the cessionary is not the debtor in the counter claim, the debtor will not be able to claim it from him. The debtor will therefore have to pay the ceded claim in full, and then claim the counter claim in a separate action against the cedent. </div>
                      <div>For instance, in the case of <strong>LTA Engineering Co. Ltd v Seecat Investments (Pty) Ltd</strong><sup>193</sup> , the Court decided that where the cession was <em>mala fide</em> (i.e. both the cedent and the cessionary colluded to deprive the debtor of the advantage of the counterclaim) the cessionary was obliged the “defend” the cedent. In practice this means that the cessionary cannot institute a claim against the debtor, but should wait until the debtor has had the opportunity to liquidate her claim against the cedent by way of a Court Order. Once the claim has been liquidated, it can then be set off against the cessionary’s claim against the debtor (<em>nemo plus iurus</em> rule).</div> 
                      <div>However, if the debtor’s liquidated claim is for a higher claim than the cessionary’s claim against the debtor, the cessionary is not obliged to pay the rest of the debtor’s claim on behalf of the cedent. The debtor must claim the rest of the money from the cedent. See: <strong>Frank v Premier Hangers CC.</strong><sup>194</sup></div>
                    </li>
                  </ul>
                </p>
              </blockquote>
              <div class="small red-text">
                <p><sup>183</sup> Hutchison, “The Law of Contract in South Africa”, 3rd Edition, Oxford, p.367</p>
                <p><sup>184</sup>  1904 TS 949</p>
                <p><sup>185</sup>  1963 (3) SA 538 (A)</p>
                <p><sup>186</sup>  1983 (1) SA 276 (A)</p>
                <p><sup>187</sup>  1995 (2) SA 750 (A)</p>
                <p><sup>188</sup>  1920 AD 600</p>
                <p><sup>189</sup>  1999(3) SA 389 (SCA).</p>
                <p><sup>190</sup>  1989 (1) SA 1 (A) </p>
                <p><sup>191</sup>  2000 (2) SA 880 (T)</p>
                <p><sup>192</sup>  2003 (1) SA 169 (SCA)).</p>
                <p><sup>193</sup>  1974 (1) SA 747 (A)</p>
                <p><sup>194</sup>  2008 (3) SA 594 (C).</p>

              </div>
            </div>
          
          <div class="text-justify note note-secondary">
            <h4 id="consequences" class="h4">Consequences of Cession</h4>
            <p>The most important consequence of a valid cession is that the right is transferred from cedent to the cessionary. In the words of Innes CJ<sup>195</sup> ;.</p>
            <blockquote class="blockquote bq-info teal-text"><strong>
            “The cessionary is the only person who can compel the debtor to pay or who can grant him a discharge of his liability in whole or in part. The title of the cedent has passed away from him, and while the cession stands, the cessionary is the dominus of the right.</strong>
          </blockquote>
            <p> The consequences include all the advantages which attach to this right and accessory rights, like the right to interest,     preferential voting rights attached to shares and, according to the case of <strong><em>Pizani v First Consolidated Holdings (Pty) Ltd</em></strong><sup>196</sup>  also  rights which secure the original right which was ceded. Thus, if the right was protected by a suretyship, this advantage automatically falls to the cessionary, without the need for a separate cession of such rights. However, because of the <em>nemo plus iurus</em> rule, the cessionary cannot get rights that are stronger than the rights that the cedent had. Consequently, all the defences in rem, which were available against the cedent can also be asserted against the cessionary. Defences in rem relate to the validity of the right and do not relate to the person of the cedent (defences in <em>personam</em>). Defences <em>in rem </em>include:
            </p> 
            <ul class="blue-text h6">
              <li>The original contract was void;</li>
              <li>The original contract was voidable due to misrepresentation, duress or undue influence;</li>
              <li>The right has been extinguished by prescription, agreement, set off or release of debtor;</li>
              <li>The right is not enforceable because of the<em> exceptio non adimpleti contractus </em></li>
            </ul> 
            <p class="small red-text"><sup>195</sup>  Rothschild v Lowndes 1908 TS 493 – 499 </p>
            <p class="small red-text"><sup>196</sup>  1979 (1) SA 69 (A)</p>
          </div>
          <div class="note note-secondary text justify">
            <h4 id="extinct" class="h4">Extinction of Obligations</h4>
            <blockquote class="blockquote ">
              <p>Obligations are extinguished by the following means:</p>
              <ul class="red-text h6">
                <li>Performance</li>
                <li>Release and waiver</li>
                <li>Novation</li>
                <li>Compormise</li>
                <li>Set off</li>
                <li>Prescription</li>
                <li>Supervising impossibility of perfomrance</li>
              </ul>
            </blockquote>
          </div>
          <div class="note note-info text-justify"> 
            <h4 id="summary" class="h4">Unit Summary</h4>
            <p class="red-text">From the above topic, it is evident that the transfer of contractual rights also known as cession, occur to present and future rights of the parties. Such cession may occur with or without the knowledge or consent of the party against whom the right is held. It is also evident from the discussion that a cession once entered into can also be cancelled without the consent of the debtor, and then lastly that for every cession that has occurred there are incidental consequences that are attached to it. We are now approaching the end of this course. But before we part ways, let us do a bit of drafting in the last unit. Enjoy!</p>
          </div>
          <div class="note note-success text justify">
            <h4 id="discus" class="h4">Discussion</h4>
            <p>With the aid of decided cases briefly discuss the law pertaining to the cession of right and obligations in a contract.</p>
          </div>
          <div class="note note-success text justify">  
            <h4 id="activity" class="h4">Activity</h4>
            <p>A enters into a contract with B for the killing of C. A duly pays B a deposit if E15,000.00. On the agreed date of the execution. B decides to engage D and he gives him the money to kill B. upon taking the money D disappears. B comes to you for advice regarding the transaction claiming that he ceded his obligation to D. Advise B. </p>
          </div>
        </div>
      <!-- /Content -->
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