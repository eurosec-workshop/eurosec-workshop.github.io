// ==================================
// (papers.js)
// ==================================

// 1) Arrays of paper metadata
const sessionA = [
  {
    title:
      "No Wallet for Old Tricks: Introducing Context-aware Defenses Against Cryptocurrency-based Social Engineering Attacks",
    authors:
      "Muhammad Muzammil, Harsh Shah, and Nick Nikiforakis (Stony Brook University New York, USA)",
    // doi: "https://doi.org/10.1145/3722041.3723104",
    abstract: `
        Cryptocurrency users routinely fall victim to social engineering
        attacks. Attackers trick victims into mistakenly authorizing transactions
        that transfer funds to attacker-controlled wallets rather than
        the intended recipient. Existing protections against these attacks
        largely rely on public blocklists, which attackers can easily evade.
        Official reports and recent measurement studies indicate that such
        attacks have led to billions of dollars in financial losses that are
        irreversible due to the immutable nature of blockchain transactions.
        In this work, we introduce the idea that cryptocurrency wallets
        can incorporate an additional context-aware, client-side layer of
        defense. Using this layer, wallets can better protect users from social
        engineering attacks by tailoring their defense to user’s specific
        cryptocurrency activity, instead of exclusively relying on global
        blocklists. To demonstrate this approach, we design and implement
        detection mechanisms targeting three prevalent attack vectors in
        the most widely used Ethereum wallet, MetaMask. We show that
        these mechanisms can be integrated without substantial engineering
        complexity and incur negligible runtime overhead. We hope that
        our work encourages wallet providers to consider incorporating
        them into their existing security workflows.
      `,
  },
  {
    title:
      "From Anomaly to Attack Path: LLM-Based Network Traffic Investigation for APT Detection",
    authors: "Benedikt Pletzer and Jürgen Mottok (OTH Regensburg, Germany)",
    abstract: `
        Advanced Persistent Threats (APTs) pose a growing challenge to
        critical infrastructure security. Their extended timescales, stealth,
        and multi-stage tactics limit the effectiveness of traditional Network
        Intrusion Detection Systems (NIDS), as signature-based methods
        miss novel techniques and anomaly detection alone produce a flood
        of low-confidence, low-specificity events. We propose a system that
        combines unsupervised anomaly detection with automated, large
        language model (LLM)-driven investigation to analyze suspicious
        network flows and reconstruct attack paths from network-level
        observations. Flagged flows are examined at both the feature and
        payload level using a locally hosted language model. Investigation
        results are aggregated in a graph database to reconstruct the attack
        progression through the network. Evaluation on the CICAPT-IIoT
        dataset shows that the system identifies all labeled malicious flows
        while uncovering mislabeled traffic containing clear indicators of
        compromise, suggesting detection capability without prior attack
        knowledge. We further discuss risks introduced by deploying language
        models in security-critical applications, including prompt
        injection via malicious payloads and data poisoning attacks.
    `,
  },
];

const sessionB = [
  {
    title:
      "Detecting Compiler-Introduced Security Bugs via IR Mutation and Coverage-Guided Fuzzing",
    authors:
      "Selim Oh and Seulbae Kim (Pohang University of Science and Technology, South Korea)",
    abstract: `
        Compilers translate source code into executable binaries without
        altering their intended semantics. To improve performance, modern
        compilers apply a wide range of optimizations, such as eliminating
        redundant computations and removing code deemed unnecessary,
        that analyze and transform programs under strong semantic assumptions.
        However, aggressive optimizations designed to maximize performance
        can inadvertently introduce security vulnerabilities that did not exist
        in the source code. These are referred to as
        Compiler-Introduced Security Bugs (CISBs), and they are particularly
        dangerous as they often silently eliminate security-critical
        checks (e.g., bounds checks) under the guise of removing dead code.
        Existing research on CISBs has largely relied on source-level mutation
        or formal verification, which often fails to exercise deep
        optimization logic or lacks scalability.
        In this paper, we propose CISBFuzz, a two-dimensional automated
        testing framework designed to proactively detect CISBs
        within the LLVM’s optimization pipeline. CISBFuzz first mutates
        the LLVM IR (Intermediate Representation) of pre-optimization test
        programs to directly stress-test optimization passes. It then applies
        coverage-guided input fuzzing to the optimized binaries compiled
        from the mutants to trigger CISBs whose manifestation depends on
        specific runtime inputs. Running CISBFuzz on LLVM 18, we uncover
        23 previously unknown CISBs.
      `,
  },
  {
    title: "Formalizing the RISC-V Hypervisor Extension in Sail",
    authors:
      "Lowie Deferme, Danny Hughes, and Dominique Devriese (KU Leuven, Belgium)",
    abstract: `
        Formal ISA specifications improve security of software systems
        by reducing the risk of incorrect developer assumptions and by
        enabling testing and verification of hardware and (security-critical)
        software. RISC-V International offers an official formal specification
        of the RISC-V ISA, intended to be unambiguous, executable, easy
        to understand and well-suited for formal analysis. Unfortunately, it
        does not yet implement all ratified RISC-V standard extensions. This
        work presents an implementation of the missing, security-critical
        hypervisor extension into the official model, implemented in the
        Sail programming language. The extended model has been validated
        in various ways, including regression-checked using bundled
        tests. The hypervisor extension has been verified with an accompanying
        test suite developed together with the model and also by
        two third-party test suites. Finally, the extracted emulator is able to
        boot Linux on top of a type-1 hypervisor. The extensions to the Sail
        model are in the process of being merged into the official specification.
        The formal model and the test suite support the testing and
        verification of secure hardware and software that implements or
        uses the hypervisor extension. Additionally, we offer some thoughts
        and observations about the process of formally specifying this extension
        and the engineering process of formal ISA specifications
        for RISC-V and elsewhere.
      `,
  },
  {
    title:
      "MMCaps: Towards Fast and Secure IPC using MMU-Accelerated Memory Capabilities",
    authors:
      "Niklas Gollenstede (Technische Universität Braunschweig, Germany), Sören Tempel (Technische Universität Braunschweig, Germany), Lars Wrenger (Leibniz Universität Hannover, Germany), Daniel Lohmann (Leibniz Universität Hannover, Germany), and Christian Dietrich (Technische Universität Braunschweig, Germany)",
    abstract: `
        Inter-process communication (IPC) is essential to securely exchange data between
        isolated processes, especially in highly-compartmentalized systems. However,
        established synchronous mechanisms are limited in message size and multi-core scalability;
        approaches based on shared memory suffer from either high synchronization overheads or time-of-check to time-of-use (TOCTOU) vulnerabilities.
        We propose MMCaps, a new OS abstraction for fast and secure zero-copy asynchronous IPC.
        Conceptually, MMCaps are globally-unique capabilities to sharable buffers.
        Technically, an MMCap is a fixed-offset grant to a memory page located in a
        process-local Cap-Space. The MMU implicitly enforces access checks on MMCap invocations
        in hardware, so no kernel mediation is needed. Our Linux-based prototype shows that
        MMCaps outperform Linux pipes by 63 percent for four inflight messages and up
        to 221 percent for 64 inflight messages of 4 KiB.
      `,
  },
  {
    title:
      "HypoVisor: Multi-Tenant POSIX Process Virtualization in Userspace for Untrusted Native Code",
    authors:
      "Matthias Neugschwandtner, Rudi Horn, Tomáš Fiedor, Lukas Stadler, Aleksandar Prokopec, William Blair, Zbynˇek Slajchrt, Andrija Kolic, Keith Lucas, Francois Farquet, and Andrew Brownsword (Oracle America Inc.)",
    abstract: `
        Today, isolation at the hypervisor level remains the default choice for
        running untrusted workloads of various form and size on the same
        underlying hardware. While the security and deployment properties
        of this model are well understood, it can be a poor fit with respect to
        density because it duplicates large parts of the software stack and
        incurs substantial startup overhead. Conversely, isolation at a higher
        level in the stack improves resource utilization but increases the
        shared attack surface that needs to be secured.
        HypoVisor aims at reconciling density and security aspects: Hypo-
        Visor is a virtualization solution at the process level: multiple native
        workloads are executed inside a regular OS process. It provides a
        virtualized POSIX process environment tailored towards smaller,
        function-style workloads, enabling developers to use familiar APIs
        and transfer existing workloads with minimal changes. At the same
        time, HypoVisor acts as a protective layer that shields the underlying
        host operating system from direct access by untrusted workloads.
        HypoVisor cold starts 26× faster than Firecracker snapshots and
        42× faster than gVisor, while having a 7.5× lower memory overhead
        than gVisor.
      `,
  },
  {
    title: "Beyond CVEs: Untracked Vulnerabilities in Public Issue Trackers",
    authors:
      "Mădălin Simion (TU Delft, The Netherlands), Max van der Horst (TU Delft, The Netherlands), Stan Plasmeijer (Dutch Institute for Vulnerability Disclosure, The Netherlands), and Yury Zhauniarovich (TU Delft, The Netherlands)",
    abstract: `
        Software vulnerabilities – particularly in open-source software
        (OSS) components, which are now embedded in nearly every application – pose major security and privacy risks. Existing tools
        and research focus largely on vulnerabilities listed in the Common Vulnerabilities and Exposures (CVE) system, leaving those
        without CVE identifiers often overlooked. In this study, we aim
        to estimate the number of such CVE-less vulnerabilities in OSS
        projects by systematically analyzing project issue trackers to identify security-related reports that could qualify as CVEs. We use
        an AI-human collaborative approach, combining AI-based issue
        pre-filtering with expert validation to efficiently and accurately
        estimate the prevalence of these overlooked vulnerabilities.
        We closely examined four large C++ projects and found that
        approximately 1.55% of all reported issues were classified by our
        model as security-related. Expert validation performed by the CVE
        Numbering Authority (CNA) Administrator on the gRPC project
        revealed that about 22% of these predicted security-related issues
        correspond to real, previously untracked vulnerabilities. This number is nearly five times greater than the total number of CVEs listed
        for this project in the National Vulnerability Database (NVD). These
        results reveal a gap in today’s vulnerability disclosure ecosystem:
        many vulnerabilities are publicly disclosed in issue trackers yet
        never formally communicated through the CVE program, leaving
        them largely unexplored and potentially unaddressed
      `,
  },
];

const sessionC = [
  {
    title:
      "IoTLS 2.0: How Far Has IoT Industry Come in Securing Communications with TLS?",
    authors:
      "Chakshu Gupta, Nilufer Guldali, and Marc Damie (University of Twente, The Netherlands)",
    abstract: `
        Transport Layer Security (TLS) is commonly used to secure communications over the Internet. However, since the rise of Internet
        of Things (IoT) devices, there have been concerns regarding the
        security practices adopted in the development of these devices. In
        particular, the study IoTLS (IMC’21) analyzed TLS practices in consumer IoT devices and revealed widespread use of insecure protocol
        versions, weak cipher suites, and improper certificate validation.
        Our work reproduces the IoTLS analysis on a new set of 22
        comparable consumer IoT devices to assess the advancement of
        security practices five years later. Our findings indicate significant
        improvements; for example, support for deprecated TLS versions
        has decreased from 45% to 9.1%. However, insecure configurations
        remain prevalent: 86.4% of devices still accept weak cipher suites.
        These results indicate that while manufacturers have made progress
        in adopting secure TLS practices, further efforts are needed to
        achieve a consistently secure IoT landscape.
    `,
  },
  {
    title:
      "The Last of the Apaches: Investigating the State of Internet-facing End-of-Life Software",
    authors:
      "Ioannis Arakas (FORTH-ICS and University of Crete Greece), Panagiotis Pallis (FORTH-ICS and University of Crete Greece), Evangelos Markatos (FORTH-ICS and University of Crete Greece), and Georgios Smaragdakis (Delft University of Technology, The Netherlands)",
    abstract: `
        In the software development life-cycle, new software packages are
        deployed while older ones are phased out as they reach their “End
        of Life” and are no longer supported. Despite this lack of support,
        some of these End-of-Life (EoL) software distributions are still
        popular and are being used. However, running EoL software poses
        massive security risks as older software may contain vulnerabilities
        for which security updates are no longer available. In this paper
        we investigate the prevalence of EoL software in Internet-facing
        devices. To our surprise, we find that more than 6 million out of
        the 44.3 million hosts we consider in our study are running at least
        one EoL version of very popular software, including web server
        software, software libraries, databases, and scripting languages.
        In addition, NIST identifies some of these EoL versions as highly
        vulnerable and highly or critically severe (severity score higher than
        7 and 9 respectively). To identify which networks are at greater risk,
        we investigate regions and networks with a high concentration
        of hosts running EoL software. Our work aims to raise awareness
        within both the research and operational communities about the
        current state of End-of-Life (EoL) software and the potential risks
        associated with its continued large-scale use.
      `,
  },
  {
    title:
      "Sanxia: A Stratified In-Network Framework for High-Coverage Flow-Level Malicious Traffic Detection",
    authors:
      "Qingyang Li, Yunpeng Tan, Mingxin Yang, Zongming Guo, and Xinggong Zhang (Peking University Beijing, China)",
    abstract: `
        Programmable switches enable line-rate malicious traffic detection,
        yet existing systems fail to provide high-coverage flow-level detection under high concurrency due to severe data-plane memory
        constraints—an issue that is particularly acute for mice flows consisting of only a few packets. This paper presents Sanxia, a stratified
        in-network detection framework that improves flow-level coverage while adhering to strict hardware limitations. Sanxia explicitly
        separates heavy flows and mice flows in the data plane and applies
        targeted detection strategies for each class. To overcome the inherent ambiguity of per-flow features in mice flows, Sanxia leverages
        cross-flow aggregation to enhance their detectability. In addition,
        Sanxia adopts early-exit decisions to promptly release flow state,
        further alleviating memory pressure. Through preliminary evaluation, Sanxia significantly improves both detection accuracy and
        flow coverage compared to state-of-the-art in-network detection
        approaches under high concurrency.
    `,
  },
];

const sessionD = [
  {
    title:
      "DNA: Automated Vulnerability Variant Detection through AI-Synthesized Queries",
    authors:
      "Arash Ale Ebrahim, Ali Abbasi, and Nils Ole Tippenhauer (CISPA Helmholtz Center for Information Security Saarbrücken, Germany)",
    abstract: `
        CVE disclosures trigger an immediate race between attackers who
        leverage patches to search for vulnerability variants and defenders
        who attempt to harden their systems. Static analysis frameworks
        such as CodeQL can, in principle, automate variant detection, but
        writing correct, high-signal CodeQL queries remains a a challenging
        and specialist skill .
        We introduce DNA, an automated pipeline that transforms CVE
        information and patch diffs into candidate CodeQL queries in order
        to perform variant analysis and iteratively repair them using compiler/LSP feedback. DNA targets a key failure mode of LLM-based
        CodeQL synthesis symbol hallucination via a hybrid repair loop: (i)
        a deterministic Auto-Fixer that corrects frequent, systematic API
        mistakes, and (ii) an LSP-guided refinement step grounded by a
        RAG over version matched CodeQL documentation.
        We evaluate DNA on 11 CVEs across different well-known Open-Source projects, including Expat, VLC, FFmpeg, and React. Across
        54 fully autonomous runs, DNA improves the end-to-end query
        compilation rate from 12.0% (naive prompting) to 44.4% (hybrid repair). On the subset of queries that compile, DNA surfaces candidate
        variant locations that require human triage; we present detailed
        success/failure analyses and discuss why macro-heavy C/C++ codebases remain challenging.
        Finally, we include a case study on CVE-2025-55182 (“React2Shell”),
        a critical pre-authentication RCE in React Server Components. We
        show how DNA, seeded only with public patch and advisory context, generates an executable query that narrows the search space
        to a small set of production-relevant candidate code paths consistent with the disclosed vulnerability mechanism; one previously
        unknown candidate which we reported upstream and its technical
        validity was confirmed.
    `,
  },
  {
    title: "Fuzzing Cross-Chain Vulnerabilities with BridgeFuzz",
    authors:
      "Pascal Winkler, Christian Scholz, Jens-Rene Giesen, Noah Kappert, and Lucas Davi (Software Technology, University of Duisburg-Essen Essen, Germany)",
    abstract: `
        Cross-chain bridges are critical for decentralized finance (DeFi)
        to enable asset interoperability across heterogeneous blockchains.
        They are based on a complex hybrid architecture that involves
        on-chain contracts and off-chain relayers. In the recent past, several major attacks exploited vulnerabilities in cross-chain bridges.
        However, existing analysis tools have limited detection effectiveness as they focus on individual contracts and do not capture the
        complex interaction chain in cross-chain bridges. In this paper, we
        present BridgeFuzz, the first fuzzing framework for cross-chain
        bridge developers capable of detecting vulnerabilities such as balance mismatches, protocol errors, and off-chain denial-of-service
        bugs. BridgeFuzz is the first step towards bridging the gap between
        smart contract vulnerability research and the holistic vulnerability
        analysis of cross-chain bridges.
    `,
  },
  {
    title:
      "Vulnerabilities of IllusionCAPTCHA: An Empirical Analysis and a Stronger Human-Easy AI-Hard Design",
    authors:
      "Abhinav L G (RV College of Engineering Bengaluru, India), Chethohaar J M (RV College of Engineering Bengaluru, India), Nuthan B (RV College of Engineering Bengaluru, India), Pranav A (RV College of Engineering Bengaluru, India), Sebastian Biedermann (Technische Hochschule Würzburg-Schweinfurt Würzburg, Germany), Aaron Kutzner (Technische Hochschule Würzburg-Schweinfurt Würzburg, Germany), and Minal Moharir (RV College of Engineering Bengaluru, India)",
    abstract: `
        As multimodal Large Language Models (LLMs) rapidly improve in
        visual reasoning and in-context learning, designing CAPTCHAs
        that remain both human-friendly and resistant to automated attacks has become increasingly difficult. Illusion-based CAPTCHAs
        have emerged as a promising direction, leveraging perceptual distortions that are intuitive for humans but presumed challenging
        for machines.
        Illusion-based CAPTCHAs have been explored as a method
        for designing visual challenges that remain intuitive for humans
        while limiting machine and Large Language Model (LLM)–based
        attacks. IllusionCAPTCHA is a recently proposed system that pairs
        illusion-diffusion imagery with long descriptive options designed
        to interfere with automated reasoning. Its original evaluation reported low LLM success rates and high human accuracy, positioning illusion-based approaches as a promising direction for future
        CAPTCHA design. However, our re-analysis demonstrates that
        these results do not hold under realistic attack conditions. Using
        state-of-the-art models, we show that IllusionCAPTCHA can be
        reliably solved using structured prompting or iterative questioning.
        Our findings reveal that the vulnerability stems primarily from
        the option-generation scheme rather than from the illusion images
        themselves.
        To address this, we introduce a fully automated and redesigned
        option-generation method that uses LLM to produce short, visually
        grounded, and ambiguity-preserving choices—effectively leveraging LLMs as a defensive tool against LLM attackers. Human accuracy increased from 45.24% to 89.85%, solving time decreased by 58%
        and the LLM success rates decreased substantially across all models
        and prompting conditions. These results suggest that illusion-based
        CAPTCHAs remain viable, but they require carefully engineered
        option structures to withstand modern LLM capabilities
      `,
  },
];

const sessionE = [
  {
    title:
      "DTAC: Decision-Tree-based Automatic Configuration of Entangled DDoS Defense Policies",
    authors:
      "Yunpeng Tan, Qingyang Li, Mingxin Yang, and Xinggong Zhang (Peking University Beijing, China)",
    abstract: `
        As adaptive DDoS attacks intensify, the expert-dependent and time-consuming configuration for DDoS mitigation devices lags behind.
        However, the complex logical and dependency relations among
        defense policies make automatic configuration extremely challenging. Existing works have utilized Large Language Models’ (LLMs)
        analytical and reasoning capabilities, but they still struggle with
        the configuration, due to their limitation in data processing and
        generation.
        To overcome these drawbacks, we propose an automatic configuration system for entangled DDoS defense policies, DTAC, which
        applies Decision Tree (DT) to handle the complex relations. Specifically, we reduce the LLM’s workload to extracting the complex
        relations from the device manual. Then, a prefix-merging-based Primary Parameter Solver and a topo-order-based Secondary Parameter Solver separately handle the logical relations between conditions
        and the dependency relations between parameters. Preliminary experiments on public and real-world traffic traces show that DTAC
        can yield effective defense policies at least 1000× faster than manual
        configuration.
    `,
  },
  {
    title:
      "How Secure is a High-Performance RISC-V Core? A Spectre V1 Case Study on XiangShan Open-Source CPU",
    authors:
      "Rey Paraula, Roberto Petenzi, Alessandro Bertani, Davide Conficconi (Dipartimento di Elettronica, Informazione e Bioingegneria (DEIB), Politecnico di Milano, Milan, Italy)",
    abstract: `
        Speculative execution attacks pose a significant threat to processor
        security, as mitigating them without significant performance loss
        is difficult. The discovery of this class of attacks has confirmed
        that security through obscurity is not a valid strategy. To shift towards a transparent and secure-by-design development paradigm,
        the open RISC-V architecture was introduced. RISC-V chips are
        now gaining traction as a possible alternative to ARM and x86
        counterparts in fields such as high-performance computing and
        industrial applications where data management and protection are
        critical. Among them, XiangShan is a high-performance RISC-V
        processor developed as an open-source project in close collaboration with industrial partners. As security is often overlooked in
        favor of achieving extremely high performance, this research work
        aims to analyze the XiangShan architecture against Spectre. Its
        ability to leak sensitive information via side-channel attacks on the
        cache subsystem makes Spectre a significant threat. We develop a
        Spectre V1 Proof-of-Concept (PoC) for XiangShan and implement
        a cache-based timing attack to exfiltrate data. Leveraging a cycle-accurate simulation, we demonstrate that the high-performance
        XiangShan second and third generations are vulnerable to Spectre1.
        To mitigate the vulnerability, we investigate the most invasive countermeasure, i.e., disabling the branch prediction unit, and observe a
        ~3x slowdown in CoreMark.
    `,
  },
  {
    title:
      "Risky by Design? Evaluating Trust Assumptions in the Slack Application Ecosystem",
    authors:
      "Shou-Ching Hsiao (National Taiwan University Taipei, Taiwan), Shih-Wei Li (National Taiwan University Taipei, Taiwan), and Hsu-Chun Hsiao (National Taiwan University and Academia Sinica, Taipei, Taiwan)",
    abstract: `
        Business Collaboration Platforms (BCPs) such as Slack derive significant value from third-party app integration. However, a critical
        disconnect exists regarding the threat model: platform vendors
        often attribute the installation of risky apps—whether malicious,
        excessively privileged, or insecure—to failures in user administration or developer implementation. This stance rests on the premise
        that the ecosystem can self-regulate effectively, assuming that developers can navigate complex permission models correctly and that
        users can accurately assess security risks during app downloads.
        This work challenges such security premises.
        Our study reveals that the Slack platform exhibits systematic
        inconsistencies across the pre-installation phases of the app lifecycle,
        including development, app vetting, and download. At the development stage, Slack exposes developers to inconsistent permission
        specifications: 25% of documented API methods exhibit mismatched
        method-to-scope mappings, increasing the risk of permission over-privilege. At the app vetting stage, our longitudinal analysis of
        approximately 2,500 apps in the official Slack marketplace from
        2024 to 2025 reveals persistent violations of marketplace policies.
        Specifically, at least 9% of apps declare permission scopes prohibited by Slack in both years, while about 1% consistently exhibit TLS
        certificate errors. Even worse, at the download stage, we observe
        cases where the app downloaded does not match the one presented
        in the marketplace. Our findings suggest that the Slack application
        ecosystem is risky by design in its pre-installation phases, as inconsistencies across development, marketplace vetting, and download
        authenticity undermine the trust users and administrators place in
        the platform.
      `,
  },
  {
    title:
      "Robust and Size-Optimized Error Handling in Rust for Resource-Constrained Embedded Systems",
    authors:
      "Philipp Schloyer (THA_innos – Institute for Innovative Safety and Security, Technical University of Applied Sciences Augsburg Augsburg, Germany), Bernhard Bauer (ISSE – Institute for Software and Systems Engineering, University of Augsburg Augsburg, Germany), and Dominik Merli (THA_innos – Institute for Innovative Safety and Security, Technical University of Applied Sciences Augsburg Augsburg, Germany)",
    abstract: `
        Reliable error handling is essential in embedded firmware, where
        failures cannot be isolated by an operating system and improper
        fault management may compromise functionality and security. This
        work investigates the influence of Rust’s error-handling mechanisms on firmware efficiency, focusing on the trade-off between
        panic-based termination and explicit Result<T, E> propagation.
        Three representative firmware examples — computation-only,
        peripheral-driven and memory-oriented — were implemented over
        3 different error handling methods and compiled across six optimization profiles. Binary metrics were extracted automatically
        using a reproducible build and analysis framework.
        The results show that compiler configuration has a stronger
        effect on binary size than the choice of error-handling strategy. Explicit result-based implementations introduced negligible overhead
        compared to a minimal Baseline, while panic-based implementations produced larger binaries. Size-optimized and low-memory
        profiles effectively eliminated the differences between result-based
        and baseline.
        These findings demonstrate that robust and efficient error handling in embedded Rust is attainable without sacrificing resource
        constraints. When combined with appropriate compiler profiles,
        explicit error propagation provides a practical balance between
        safety and code compactness.
    `,
  },
];

// 2) Function to render a single paper as collapsible HTML
function renderPaper(paper, index, sessionName) {
  const collapseId = `collapse-${sessionName}-${index}`;

  // Awards
  let badges = "";
  if (paper.title.includes("CUDA, Woulda, Shoulda")) {
    badges += `<span class="badge badge-success ml-2">Best Paper Award 🏆</span>`;
  }
  if (paper.title.includes("Mazu: A Zero Trust Architecture")) {
    badges += `<span class="badge badge-primary ml-2">Best Presentation Award 🎙️</span>`;
  }

  const doiLink = paper.doi
    ? `<a href="${paper.doi}" class="btn btn-link p-0 ml-3" target="_blank">DOI/ACM</a>`
    : "";

  return `
    <li>
      <strong>${paper.title}</strong>${badges}<br>
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
      ${doiLink}
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
    time: "09:00–10:00",
    speaker: "Kaveh Razavi (ETH Zurich)",
    title: "Rowhammer bit flips a decade later",
    abstract: `
        <b>Talk:</b>
        The first Rowhammer exploit was published a little more than a decade ago on a
        DDR3-based system. Since then, we have had two generations of DRAM technology with
        proprietary mitigations. In this talk, I present our journey in understanding the security
        guarantees of these mitigations in DDR4 and DDR5 devices through significant platform
        building efforts, painstaking reverse engineering, and creative system-level techniques. The
        results are not encouraging; DRAM is as insecure as a decade ago while the cost of
        independent security analysis is growing beyond what academia can do. I finish with a brief
        discussion of possible paths forward.
        <br><br>
        <b>Bio:</b>
        Kaveh is an associate professor at ETH Zurich where he leads the COMSEC group. Next
        to defensive work, he has been involved in the discovery of many high-profile security
        vulnerabilities in commodity DRAM and CPU chips. He is a proud owner of five Pwnies and
        many best/distinguished paper awards, including at Oakland, USENIX Security and MICRO.
      `,
  },
  {
    id: "keynote2",
    time: "16:00–17:00",
    speaker: "Lorenzo Cavallaro (University College London)",
    title: "Trustworthy AI… for Systems Security",
    abstract: `
        <b>Talk:</b>
        No day goes by without reading about machine learning (ML) success stories in every
        walk of life. Systems security is no exception, where ML’s tantalizing performance may leave us
        wondering whether any problems remain unsolved. Yet ML has no clairvoyant abilities, and
        once the magic wears off, we are left in uncharted territory. Can it truly help us build secure
        systems? In this talk, I will argue that performance alone is not enough. I will highlight the
        consequences of adversarial attacks and distribution shifts in realistic settings, and discuss how
        semantics may provide a path forward. My goal is to foster a deeper understanding of machine
        learning’s role in systems security and its potential for future advancements.
        <br><br>
        <b>Bio:</b>
        Lorenzo Cavallaro grew up on pizza, spaghetti, and Phrack, and soon developed a passion
        for underground and academic research. He is a Full Professor of Computer Science at
        University College London (UCL), where he leads the Systems Security Research Lab —
        https://s2lab.cs.ucl.ac.uk. Lorenzo’s research vision is to enhance the effectiveness of machine
        learning for systems security in adversarial settings. To this end, he and his team investigate the
        interplay among program analysis abstractions, engineered and learned representations, and
        grounded models, and their crucial role in creating Trustworthy AI for Systems Security.
        Lorenzo publishes at and sits on the Program Committee of leading conferences in computer
        security and ML, received the Distinguished Paper Award at USENIX Security 2022, ICML 2024
        Spotlight Paper, and DLSP 2025 Best Paper Award (co-located with IEEE S&P). He is also
        Associate Editor of ACM TOPS and IEEE TDSC. Lorenzo is co-founder & Chief Scientific
        Officer of BynarIO — https://bynar.io, a startup that's pioneering AI to autonomously identify and
        repair vulnerabilities in software, restoring trust and control over what you run. In addition to his
        love for food, Lorenzo finds his Flow in science, music, and family.
      `,
  },
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
document.addEventListener("DOMContentLoaded", function () {
  insertSessionPapers(sessionA, "sessionA-papers", "A");
  insertSessionPapers(sessionB, "sessionB-papers", "B");
  insertSessionPapers(sessionC, "sessionC-papers", "C");
  insertSessionPapers(sessionD, "sessionD-papers", "D");
  insertSessionPapers(sessionE, "sessionE-papers", "E");
});

function renderKeynote(kn, index) {
  const collapseId = `collapse-keynote-${index}`;
  return `
    <tr>
      <td class="orga">
        <strong>Keynote: "${kn.title}"</strong><br>
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
  keynotes.forEach((kn) => {
    const tdElem = document.getElementById(kn.id);
    if (tdElem) {
      tdElem.innerHTML = renderKeynote(kn, kn.id);
    }
  });
});
