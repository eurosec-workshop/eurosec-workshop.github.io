// ==================================
// (papers.js)
// ==================================

// 1) Arrays of paper metadata
const sessionA = [
    {
      title: "Provable Co-Owned Data Deletion with Zero-Residuals and Verifiability in Multi-Cloud Environment",
      authors: "Marwan Adnan Darwish, Evangelia Anna Markatou, Georgios Smaragdakis (TU Delft)",
      abstract: `
        The rapid expansion of multi-cloud environments and the growing prevalence of collaborative data ownership 
        present significant challenges in ensuring the verifiable deletion of co-owned data. 
        Current approaches predominantly address individual ownership and often rely on simplistic one-bit 
        result protocols where a deletion command merely outputs success or failure, turning the deletion 
        into a black box without proper verification. This paper tackles the problem of secure processing 
        and verifiable deletion of shared outsourced data in multi-cloud environments. 
        We design a framework that enables a data owner to outsource encrypted data to multiple co-owners, 
        who perform computations directly within their respective cloud providers—ensuring 
        that sensitive data never leaves the cloud. 
        Our system leverages readily available cloud Hardware Security Modules (HSMs) to manage cryptographic keys 
        from generation to controlled destruction—ensuring data remains inaccessible beyond its intended use. 
        Secure Enclaves enforce on-cloud data computation, eliminating local copies and preventing unauthorized exposure. 
        Encrypted data is structured within a fixed storage model, ensuring controlled allocation and strict storage constraints. 
        When data expires or must be deleted to meet regulatory requirements, 
        our framework triggers zero-residual permuted overwriting to remove the data traces irreversibly. 
        Verifiability is achieved at two levels: Bounded Merkle Hash Tree (BMHT) ensures bounded storage and verifiable deletion within each cloud provider. 
        In contrast, Global Merkle Forest (GMF) aggregates BMHT roots across providers, enabling consistent global verification. 
        The data owner maintains a log of these BMHT roots, allowing independent verification of secure deletion across the multi-cloud environment.
      `
    }
  ];
  
const sessionB = [
    {
      title: "Diagnosing and Neutralizing Address-Sensitive Behavior in Multi-Variant Execution Systems",
      authors: "Anton Schelfhout, Adriaan Jacobs, Jonas Vinck, Stijn Volckaert (DistriNet, KU Leuven)",
      abstract: `
        Multi-Variant eXecution (MVX) systems are a potent building block for comprehensive memory corruption defenses. 
        They run multiple diversified variants of the same program in parallel, feed them the same inputs, 
        and monitor whether they produce the same outputs. If applied correctly, MVX systems ensure that 
        (i) no single exploit payload can simultaneously compromise all variants and 
        (ii) any exploit causes an observable divergence in the variants' behavior.

        After repeatedly demonstrating their prowess in detecting control-flow hijacks, 
        MVX systems are naturally keen to extend their protection to data-only attacks, 
        which do not solely focus on corrupting code pointers. 
        However, that would require diversifying the variants' data layout as well, 
        which vastly exacerbates known compatibility issues of existing systems. 
        Due to Address-Sensitive Behavior (ASB), benign programs can behave in dissimilar 
        but functionally equivalent ways depending on memory layout and address values. 
        This causes variants to diverge in ways that are indistinguishable from the effects of an attack to the MVX monitor.

        In this paper, we explore the practical implications of adopting data diversification in future-oriented MVX systems. 
        For the first time, we characterize and quantify the issue of ASB across a wide range of real-world software, 
        and find that it is a significant hurdle towards support for data diversification in MVX. To help address this issue, 
        we develop a new variant diffing technique that allows us to recognize and, at times, even neutralize different classes 
        of ASB by precisely locating address-related data in the variants without compiler support.
      `
    },
    {
      title: "Site Attestation: Browser-based Remote Attestation",
      authors: "Luca Preibsch, Maxim Ritter, Rüdiger Kapitza (Friedrich-Alexander-Universität Erlangen-Nürnberg)",
      abstract: `
        When a website is accessed, a connection is made using HTTPS to ensure that it ends 
        with the website owner and that subsequent data traffic is secured. 
        However, no further assurances can be given to a user. 
        It is therefore a matter of trust that the site is secure and treats the information exchanged faithfully. 
        This puts users at risk of interacting with insecure or even fraudulent systems. With the availability of confidential computing, 
        which makes execution contexts secure from external access and remotely attestable, this situation can be fundamentally improved.

        In this paper, we propose browser-based site attestation that allows users to validate advanced security properties 
        when accessing a website secured by confidential computing. 
        This includes data handling policies such as the data provided being processed only during the visit and not stored or forwarded. 
        Or informs the user that the accessed site has been audited by a security company and that the audited state is still intact. 
        This is achieved by integrating remote attestation capabilities directly into a commodity browser and enforcing user-managed attestation rules.
      `
    },
    {
      title: "Can Neural Decompilation Assist Vulnerability Prediction on Binary Code?",
      authors: "Domenico Cotroneo, Francesco Crescenzo Grasso, Roberto Natella, Vittorio Orbinato (University of Naples Federico II)",
      abstract: `
        Vulnerability prediction is valuable in identifying security issues efficiently, 
        even though it requires the source code of the target software system, which is a restrictive hypothesis. 
        This paper presents an experimental study to predict vulnerabilities in binary code without source code 
        or complex representations of the binary, leveraging the pivotal idea of decompiling the binary file 
        through neural decompilation and predicting vulnerabilities through deep learning on the decompiled source code. 
        The results outperform the state-of-the-art in both neural decompilation and vulnerability prediction, 
        showing that it is possible to identify vulnerable programs with this approach concerning bi-class 
        (vulnerable/non-vulnerable) and multi-class (type of vulnerability) analysis.
      `
    },
    {
      title: "CUDA, Woulda, Shoulda: Returning Exploits in a SASS-y World",
      authors: "Jonas Roels, Adriaan Jacobs, Stijn Volckaert (DistriNet, KU Leuven)",
      abstract: `
        The rising popularity of Graphics Processing Units (GPUs) has made them an attractive target 
        for attackers looking to steal Intellectual Property (IP) such as ML models or disrupt 
        the operation of heterogeneous computing systems. 
        However, defending against GPU attacks is anything but trivial since the inner workings 
        of these - often proprietary - devices are still poorly understood. 
        Preliminary work demonstrates a worrying similarity to the attack surface of the CPU domain, 
        particularly concerning the memory unsafety of device-side code. 
        We corroborate these worrying findings by constructing the first rigorous experimental analysis of input-triggered, 
        ROP-based exploits entirely within device-side NVIDIA CUDA code. 
        We also repurposed known CPU-based code-reuse attack techniques to unlock previously unusable gadgets in this code. 
        We then prove that the gadget set is Turing-complete, thus allowing attackers to perform arbitrary computations. 
        Finally, we conclude that ROP attacks on GPUs are feasible and more potent than previously thought.

        Following this discovery, we evaluate the strength of current device-side mitigations, 
        such as stack canaries and Address Space Layout Randomization (ASLR). 
        Given the lack of more powerful protection mechanisms, these basic security measures currently play a crucial role in GPU security. 
        However, we find them to be even less secure than their CPU counterparts. 
        Our findings indicate that the GPU domain urgently needs robust protection mechanisms 
        that fit the unique GPU architectures and address the flaws in existing systems.
      `
    },
    {
      title: "rustc++: Facilitating Advanced Analysis of Rust Code",
      authors: "Antonis Louka (University of Cyprus), Georgios Portokalidis (IMDEA Software Institute), Elias Athanasopoulos (University of Cyprus),",
      abstract: `
        Rust is a popular programming language with strong memory-safety guarantees, 
        achieved through its ownership and borrowing model. Rust allows a programmer 
        to escape memory safety using explicitly marked unsafe code in order to facilitate 
        integration with existing C/C++ code. Such safe code is not immune to typical memory errors. 
        To avoid such bugs researchers try to provide both static and dynamic analysis tools and
        incorporate C/C++ hardening techniques for unsafe Rust. However, such analysis is not 
        always trivial as Rust uses multiple intermediate representations (IR), and when 
        lowering a higher level IR to a lower level IR, all information that marks a specific 
        block of code as unsafe is lost. Since the two worlds of Rust, safe and unsafe, 
        are built on different assumptions many analysis tools and techniques can benefit 
        from knowing where the safe context changes to unsafe and vice-versa.

        In this work, we present a modified Rust compiler (rustc++) that extends the capabilities 
        of the Mid-level Intermediate Representation (MIR) to enable serialization and metadata enhancements. 
        Our framework introduces MIR++, an enhanced MIR representation that embeds metadata identifying 
        safe and unsafe instructions, enabling fine-grained safety tracking throughout the compilation pipeline. 
        Additionally, rustc++ enhances the LLVM-IR representation and produced binaries with metadata allowing 
        LLVM passes and post-compilation analysis tools to distinguish between the safe and unsafe context. 
        Lastly, rustc++ makes preliminary efforts in serializing Rusts MIR to a portable JSON format using 
        the Serde serialization library. Our goal is to allow external tools to work on MIR and its in-memory metadata, 
        without requiring the full compiler pipeline. Modifications of rustc++ maintain compatibility with the 
        existing Rust ecosystem while offering a powerful foundation for future analysis tools.
      `
    }
  ];
  
const sessionC = [
    {
      title: "Enhancing IoT Defenses Against Radio Jamming: Insights from a Thread Testbed Case Study",
      authors: "Poonam Yadav, Anthony Moulds, Peter Gillingham (University of York, UK)",
      abstract: `
        As the Internet of Things (IoT) ecosystem continues to expand, 
        ensuring robust wireless communication in the face of radio jamming 
        attacks has become a critical concern. This paper presents a comprehensive case 
        study on enhancing IoT resilience to radio jamming using the Thread protocol 
        within a controlled testbed environment. We investigate the vulnerability of 
        Thread-based IoT networks to constant jamming and implement an effective countermeasure 
        to improve network robustness. Our study focuses on the channel hopping method for 
        countermeasure implementation, demonstrating its effectiveness against jamming attacks 
        through detailed experimental results and analysis. This work underscores how jamming and 
        countermeasure systems can be developed and tested on real hardware, fostering further research 
        in the field of network security. The experimental results provide valuable insights into 
        the efficacy of these strategies in mitigating jamming threats.
      `
    },
    {
      title: "Snort Meets Transformers: Accelerating Transformer-Based Network Traffic Classification for Real-Time Performance",
      authors: `
        Mohamed Hashim Changrampadi (Chalmers University of Technology and University of Gothenburg), 
        Magnus Almgren (Chalmers University of Technology and University of Gothenburg)
        Pablo Picazo-Sanchez (Halmstad University), Ahmed Ali-Eldin (Chalmers University of Technology and University of Gothenburg)
      `,
      abstract: `
        Transformer-based models have emerged as a powerful solution for network traffic classification,
        achieving high accuracy by autonomously learning patterns in raw traffic data. 
        However, their high computational costs make real-time deployment impractical. 
        In contrast, industry-proven tools like Snort and Suricata offer efficient network analysis 
        but rely on manually crafted signatures, resulting in slower updates and limited adaptability to emerging threats.

        In this work, we propose a cascading model that leverages the strengths of both approaches. 
        During training, a transformer-based model learns traffic patterns, which are then extracted 
        using SHAP analysis to enhance the knowledge base of a signature-based IDS. In deployment, 
        the IDS handles routine classifications, while only complex cases are escalated to the transformer model. 
        Our experiments combining the analysis of ET-BERT with Snort demonstrate a four-fold performance improvement 
        over running only ET-BERT without compromising false positive or false negative rates.
      `
    },
    {
      title: "hwdbg: Debugging Hardware Like Software",
      authors: `
        Mohammad Sina Karvandi (Vrije Universiteit Amsterdam), 
        Soroush Meghdadizanjani (Stony Brook University), 
        Saleh Khalaj Monfared (Worcester Polytechnic Institute), 
        Erik van der Kouwe (Vrije Universiteit Amsterdam), 
        Asia Slowinska (Vrije Universiteit Amsterdam)                            `,
      abstract: `
        Debugging hardware designs presents unique and significant challenges compared to software debugging. 
        Software simulators often fail to uncover design issues arising from physical constraints or incorrect elaboration.
        Traditional hardware debugging tools typically lack flexibility, ease of use, and robust real-time interaction, 
        slowing down the development and potentially compromising security.

        We present hwdbg, which eases hardware debugging by introducing software debugging concepts. 
        Unlike existing approaches, hwdbg allows stepping through the hardware design cycle-by-cycle, 
        visualizing waveforms, and inspecting values (e.g., like a logical analyzer). 
        Users can script both passive and active debugging, modifying signals in real time. 
        Furthermore, it has the potential for reverse engineering and chip fuzzing by injecting 
        random signals to test functionality under different conditions. 
        A key insight allowing hwdbg to achieve these goals is that, unlike existing approaches, 
        it can be synthesized as an FPGA, directly interacting with the device under test in real time. 
        We provide an open-source prototype.
      `
    },
    {
      title: "Enhancing Graphical Authentication with EEG: A Study on Neural Responses and AI-Driven Security",
      authors: `
        Ioannis Katoikos (Dept. of ECE, University of Patras), Christos A. Fidas (Dept. of ECE, University of Patras),
        Dimitrios Koukopoulos (Dept. of History and Archaeology, University of Patras)
      `,
      abstract: `
        The development of reliable authentication schemes is a significant challenge due to vulnerabilities 
        like shoulder-surfing and impersonation attacks. This paper presents a six-month in-lab study (N=30) 
        during which we designed and evaluated a novel two-factor authentication prototype combining Microsoft’s 
        Picture Gesture Authentication (PGA) with Electroencephalography (EEG). We aimed to leverage users' unique 
        neural responses during pictorial processing in PGA, in order to train individual AI models that could 
        mitigate impersonation attacks. Additionally, our study examined how users’ familiarity with background 
        images affected the accuracy of these models. Results indicated that: a) familiar stimuli enhance cognitive 
        efficiency and authentication accuracy; b) the combination of Wavelet features, Hjorth parameters, and spectral 
        entropy with Support Vector Machines yielded good performance. These findings suggest that EEG-based technology 
        has the potential to improve graphical authentication systems, offering more secure alternatives to traditional methods.
      `
    },
    {
      title: "Mazu: A Zero Trust Architecture for Service Mesh Control Planes",
      authors: `
        Aashutosh Poudel, Pankaj Niroula, Collin MacDonald, 
        Lily Gloudemans, Stephen Herwig (William & Mary)      
    `,
      abstract: `
        Microservices are a dominant cloud computing architecture because they enable applications 
        to be built as collections of loosely coupled services. To provide greater observability 
        and control into the resultant distributed system, microservices often use an overlay proxy 
        network called a service mesh. A key advantage of service meshes is their ability to implement 
        zero trust networking by encrypting microservice traffic with mutually authenticated TLS. 
        However, the service mesh control plane—particularly its local certificate authority—becomes 
        a critical point of trust. If compromised, an attacker can issue unauthorized certificates 
        and redirect traffic to impersonating services.

        In this paper, we introduce our initial work in Mazu, a system designed to eliminate trust 
        in the service mesh control plane by replacing its certificate authority with an unprivileged principal. 
        Mazu leverages recent advances in registration-based encryption and integrates seamlessly with Istio, 
        a widely used service mesh. Our preliminary evaluation, using Fortio macro-benchmarks and 
        Prometheus-assisted micro-benchmarks, shows that Mazu significantly reduces the service mesh’s 
        attack surface while adding just 0.17 ms to request latency compared to mTLS-enabled Istio.
      `
    }
  ];
  


  // 2) Function to render a single paper as collapsible HTML
  function renderPaper(paper, index, sessionName) {
    const collapseId = `collapse-${sessionName}-${index}`;
    return `
      <li>
        <strong>${paper.title}</strong><br>
        <em>${paper.authors}</em><br>
        <button
          class="btn btn-link p-0"
          type="button"
          data-toggle="collapse"
          data-target="#${collapseId}"
          aria-expanded="false"
          aria-controls="${collapseId}"
        >
        Abstract
        </button>
        <div class="collapse mt-2" id="${collapseId}">
          <div class="card card-body">
            ${paper.abstract}
          </div>
        </div>
      </li>
    `;
  }
  
const keynotes = [
    {
      id: "keynote1",
      time: "09:15–10:10",
      speaker: "Mathias Payer (École Polytechnique Fédérale de Lausanne)",
      title: "Advanced Android Archaeology: Baffled By Bloated Complexity",
      abstract: `
            Talk:
            Android has become a ubiquitous platform for running mobile apps,
            granting different actors access to vast amounts of private data. The
            growing complexity of the Android ecosystem introduces significant
            security challenges. In this talk, we will explore multiple layers of
            Android security: examining the foundational virtualization layers,
            stress-testing trusted applications, and assessing the impact of recent
            user-space mitigations. Through the lens of system security, we uncover
            vulnerabilities even in the most trusted layers. Trusted applications
            are susceptible to type confusion, while regular apps may face risks
            such as heap corruption attacks. Join us on this journey to enhance
            mobile ecosystem security through fuzzing, improved standards, and safer
            defaults.
            <br><br>
            Bio:
            Mathias Payer is an associate professor at EPFL, leading the HexHive
            group. His research centers on strengthening software and system
            security in the presence of vulnerabilities. His broader interests
            include fuzzing and sanitization to uncover and address flaws,
            developing effective mitigations to protect against the exploitation of
            unknown or unpatched bugs, and employing fault isolation to enforce
            privilege separation. Mathias joined EPFL in 2018 where he founded the
            Polygl0ts CTF team. Previously, he was an assistant professor at Purdue
            University, a PostDoc at UC Berkeley, and a PhD student at ETH Zurich.      `
    },
    {
      id: "keynote2",
      time: "16:00–17:00",
      speaker: "Yan Shoshitaishvili (Arizona State University)",
      title: "Cyber Challenges and You: Challenges Encountered and Lessons Learned from CGC and AIxCC",
      abstract: `
        In 2014, DARPA launched the Cyber Grand Challenge (CGC), ushering in
        an era of autonomous Cyber Reasoning Systems that can, without human
        intervention, analyze software, find vulnerabilities, and reason about
        their exploitation and repair. Then, a decade later, DARPA held the
        qualifying round for the AI Cyber Challenge (AIxCC), an effort to
        evolve Cyber Reasoning Systems through the integration of modern AI
        techniques. These systems came awake at DEFCON, unleashing their power
        on an unsuspecting humanity and showing an exciting potential for
        finding (and fixing!) real bugs in real software.
        <br><br>
        As the captain of Shellphish during the Cyber Grand Challenge, I was
        there when the deep magic was written to birth our Cyber Reasoning
        System, the Mechanical Phish. As a professor and Advisor of the
        shadowy Shellphish Support Syndicate, I help guide my students through
        the AIxCC and the augmentation of the Mechanical Phish into the self-
        (and software-)aware ARTIPHISHELL. This talk will cover my experiences
        and lessons learned, from both the human and the technical side of
        competitions like the CGC and AIxCC. We'll discuss their deep
        scientific and engineering challenges, their interactions with our
        PhDs and our souls, and the incredible potential for real impact that
        these events carry. I'll try to bring you, mentally, into the midst of
        these competitions, show you around, and maybe inspire you to join in
        for the next one!
      `
    }
  ];
  // 3) Helper to insert an entire session’s papers into the DOM
function insertSessionPapers(papersArray, listId, sessionName) {
    const ulElem = document.getElementById(listId);
    if (!ulElem) return; // if the element doesn't exist, just skip
  
    let allPapersHTML = "";
    papersArray.forEach((paper, idx) => {
      allPapersHTML += renderPaper(paper, idx, sessionName);
    });
    ulElem.innerHTML = allPapersHTML;
  }
  
  // 4) When DOM is loaded, insert all sessions
  document.addEventListener("DOMContentLoaded", function() {
    insertSessionPapers(sessionA, "sessionA-papers", "A");
    insertSessionPapers(sessionB, "sessionB-papers", "B");
    insertSessionPapers(sessionC, "sessionC-papers", "C");
  });

function renderKeynote(kn, index) {
  const collapseId = `collapse-keynote-${index}`;
  return `
    <tr>
      <td class="orga">
        <strong>Keynote: ${kn.title}</strong><br>
        <em>${kn.speaker}</em><br>
        <button
          class="btn btn-link p-0"
          type="button"
          data-toggle="collapse"
          data-target="#${collapseId}"
          aria-expanded="false"
          aria-controls="${collapseId}"
        >
        Info
        </button>
        <div class="collapse mt-2" id="${collapseId}">
          <div class="card card-body">
            ${kn.abstract}
          </div>
        </div>
      </td>
    </tr>
  `;
}
  
// Insert the keynote data into the table cells
document.addEventListener("DOMContentLoaded", () => {
    keynotes.forEach(kn => {
      const tdElem = document.getElementById(kn.id);
      if (tdElem) {
        tdElem.innerHTML = renderKeynote(kn);
      }
    });
  });