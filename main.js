import { getGateHTML, getAsmHTML, getPDPHTML, getCycleHTML } from './emulators.js';

const slidesData = [
  {
    page: 1,
    title: "Microprocessors Basics",
    content: `
      <div class="uni-header">
        <img src="/images/logo.png" alt="Gilgamesh University Logo" class="uni-logo">
        <div class="uni-text">
          <h3 class="uni-name">Gilgamesh University</h3>
          <p class="uni-dept">Department of Technical Engineering: Cyber Security</p>
        </div>
      </div>
      <h2 style="border:none; text-align:center; font-size: 2rem; color: var(--text-secondary); margin-top:1rem;">Architecture, Logic Gates, Assembly, and PDP-11</h2>
      
      <div class="creators-section" style="display: flex; align-items: center; justify-content: center; gap: 4rem; padding: 2rem;">
        <div class="creators-group">
          <p class="creators-title" style="margin-bottom: 2rem;">Developed By</p>
          <div class="creators-grid" style="display: flex; gap: 4rem;">
            <div class="creator-card">
              <p style="font-size: 1.4rem; font-weight: bold;">Mustafa Wadhah Fadhil</p>
            </div>
            <div class="creator-card">
              <p style="font-size: 1.4rem; font-weight: bold;">Wisam Mohammed<br>Abdul-Mounim</p>
            </div>
            <div class="creator-card">
              <p style="font-size: 1.4rem; font-weight: bold;">Abdullah Ahmed<br>Sami Badallah</p>
            </div>
          </div>
        </div>
        
        <div class="qr-box" style="text-align: center; background: rgba(0,0,0,0.3); padding: 1.5rem; border-radius: 15px; border: 1px solid var(--glass-border);">
          <img src="/images/qr-code.jpg" alt="Project QR Code" style="width: 180px; height: 180px; border-radius: 10px; border: 2px solid var(--text-accent); box-shadow: 0 0 20px rgba(0, 229, 255, 0.4);">
          <p style="margin-top: 1rem; color: var(--text-accent); font-family: var(--font-heading); font-size: 1.1rem; letter-spacing: 1px;">SCAN TO VISIT</p>
        </div>
      </div>
      
    `,
  },
  {
    page: 2,
    title: "Agenda",
    content: `
      <ul>
        <li>Introduction to Microprocessors (Slides 3-5)</li>
        <li>Logic Gates Fundamentals (Slides 6-10)</li>
        <li>Microprocessor Architecture (Slides 11-18)</li>
        <li>Assembly Language Basics (Slides 19-24)</li>
        <li>PDP-11 Example (Slides 25-28)</li>
        <li>Conclusion & Q&A (Slides 29-30)</li>
      </ul>
    `,
  },
  {
    page: 3,
    title: "What is a Microprocessor?",
    content: `
      <div class="content-split">
        <div class="split-left">
          <p>A microprocessor is a compact electronic processing unit on a single integrated circuit (IC) that performs arithmetic, logic, control, and I/O operations.</p>
          <ul>
            <li>Invented in 1971 with Intel 4004.</li>
            <li>Acts as the "brain" of computers, embedded systems.</li>
            <li>Key evolution from discrete transistors to billions of transistors today.</li>
          </ul>
        </div>
        <div class="split-right">
          <img src="/images/amd_cpu.png" alt="AMD Ryzen Processor Chip" class="slide-image glow-img" />
        </div>
      </div>
    `,
  },
  {
    page: 4,
    title: "Microprocessor History",
    content: `
      <p>Microprocessors revolutionized computing by enabling personal computers.</p>
      <ul>
        <li>1971: Intel 4004 (4-bit, 2300 transistors).</li>
        <li>1972: Intel 8008 (8-bit).</li>
        <li>1974: Intel 8080, used in Altair 8800 (first PC kit).</li>
        <li>Led to x86 family dominance.</li>
      </ul>
    `,
  },
  {
    page: 5,
    title: "Microprocessor Applications",
    content: `
      <p>Microprocessors power everyday devices.</p>
      <ul>
        <li>PCs, smartphones, servers.</li>
        <li>Embedded: cars, appliances, IoT.</li>
        <li>Performance measured in MIPS (Millions Instructions Per Second).</li>
      </ul>
    `,
  },
  {
    page: 6,
    title: "Logic Gates Introduction",
    content: `
      <div class="content-split">
        <div class="split-left">
          <p>Logic gates are basic building blocks of digital circuits in microprocessors.</p>
          <ul>
            <li>Implement Boolean algebra functions.</li>
            <li>Use binary: 0 (false/low), 1 (true/high).</li>
            <li>Constructed from transistors.</li>
          </ul>
        </div>
        <div class="split-right">
          <img src="/images/logic_gates.png" alt="Logic Gates Diagram" class="slide-image glow-img" />
        </div>
      </div>
    `,
  },
  {
    page: 7,
    title: "AND Gate",
    content: `
      <p>AND gate outputs 1 only if all inputs are 1.</p>
      ${getGateHTML('gA', 'AND')}
    `,
  },
  {
    page: 8,
    title: "OR Gate and NOT Gate",
    content: `
      <p>OR gate outputs 1 if any input is 1. NOT inverts input.</p>
      ${getGateHTML('gO', 'OR')}
    `,
  },
  {
    page: 9,
    title: "NAND and NOR Gates",
    content: `
      <p>NAND (AND + NOT): 0 only if all inputs 1. NOR (OR + NOT): 1 only if all 0.<br>Universal gates: Any circuit from NAND/NOR alone.</p>
      ${getGateHTML('gN', 'NAND')}
    `,
  },
  {
    page: 10,
    title: "XOR Gate",
    content: `
      <p>XOR (exclusive OR): 1 if inputs differ.</p>
      ${getGateHTML('gX', 'XOR')}
    `,
  },
  {
    page: 11,
    title: "Microprocessor Architecture Overview",
    content: `
      <p>Von Neumann: Single memory for data/instructions. Harvard: Separate.</p>
      <ul>
        <li>Key components: ALU, Registers, Control Unit, Bus.</li>
        <li>Fetches, decodes, executes instructions.</li>
      </ul>
    `,
  },
  {
    page: 12,
    title: "Von Neumann vs Harvard",
    content: `
      <div class="content-split">
        <div class="split-left">
          <table>
            <thead><tr><th>Feature</th><th>Von Neumann</th><th>Harvard</th></tr></thead>
            <tbody>
              <tr><td>Memory</td><td>Shared</td><td>Separate</td></tr>
              <tr><td>Speed</td><td>Slower (bottleneck)</td><td>Faster parallel access</td></tr>
              <tr><td>Use</td><td>PCs</td><td>DSPs, microcontrollers</td></tr>
            </tbody>
          </table>
        </div>
        <div class="split-right">
          <img src="/images/von_neumann.png" alt="Von Neumann vs Harvard" class="slide-image glow-img" />
        </div>
      </div>
    `,
  },
  {
    page: 13,
    title: "ALU (Arithmetic Logic Unit)",
    content: `
      <div class="content-split">
        <div class="split-left">
          <p>Performs math/logic ops.</p>
          <ul>
            <li>Arithmetic: ADD, SUB, MUL, DIV.</li>
            <li>Logic: AND, OR, XOR, NOT.</li>
            <li>Flags: Carry, Zero, Overflow.</li>
          </ul>
        </div>
        <div class="split-right">
          <img src="/images/alu_unit.png" alt="ALU Unit Diagram" class="slide-image glow-img" />
        </div>
      </div>
    `,
  },
  {
    page: 14,
    title: "Registers",
    content: `
      <p>Fast storage inside CPU.</p>
      <ul>
        <li>General Purpose (GPRs): Data temp storage.</li>
        <li>Special: PC (Program Counter), SP (Stack Pointer), IR (Instruction Register).</li>
        <li>Accumulator: Common in simple designs.</li>
      </ul>
    `,
  },
  {
    page: 15,
    title: "Control Unit",
    content: `
      <p>Directs operations.</p>
      <ul>
        <li>Fetches instruction from memory.</li>
        <li>Decodes opcode/operands.</li>
        <li>Generates control signals for ALU, registers.</li>
      </ul>
    `,
  },
  {
    page: 16,
    title: "Buses",
    content: `
      <p>Communication paths.</p>
      <ul>
        <li>Address Bus: Memory location.</li>
        <li>Data Bus: Data transfer.</li>
        <li>Control Bus: Signals (read/write).</li>
      </ul>
      <p style="color:var(--text-secondary);">Width determines capacity (e.g., 8/16/32-bit).</p>
    `,
  },
  {
    page: 17,
    title: "Instruction Cycle",
    content: `
      <div class="content-split">
        <div class="split-left">
          <ol style="margin-left: 2rem; font-size: 1.5rem; line-height: 2;">
            <li><strong>Fetch:</strong> PC → Memory → IR.</li>
            <li><strong>Decode:</strong> Interpret instruction.</li>
            <li><strong>Execute:</strong> ALU ops, store result.</li>
            <li><strong>Repeat.</strong></li>
          </ol>
        </div>
        <div class="split-right" style="flex:2;">
          ${getCycleHTML()}
        </div>
      </div>
    `,
  },
  {
    page: 18,
    title: "Pipelining Basics",
    content: `
      <p>Overlaps stages for speed.</p>
      <ul>
        <li>Stages: Fetch, Decode, Execute, Memory, Writeback.</li>
        <li>Improves throughput but hazards possible.</li>
      </ul>
    `,
  },
  {
    page: 19,
    title: "Assembly Language Intro",
    content: `
      <p>Low-level: Mnemonics for machine code.</p>
      <ul>
        <li>Human-readable, assembler → binary.</li>
        <li>Example:</li>
      </ul>
      <div class="code-block">MOV AX, 5</div>
    `,
  },
  {
    page: 20,
    title: "Assembly Syntax",
    content: `
      <ul>
        <li><strong>Labels:</strong> Jump targets.</li>
        <li><strong>Instructions:</strong> Opcode operand1, operand2.</li>
        <li><strong>Directives:</strong> .DATA, .CODE.</li>
      </ul>
    `,
  },
  {
    page: 21,
    title: "Data Movement Instructions",
    content: `
      <ul>
        <li><strong style="color:var(--text-accent);">MOV:</strong> Copy data (dest, src).</li>
        <li><strong style="color:var(--text-accent);">PUSH/POP:</strong> Stack ops.</li>
      </ul>
      <p>Example:</p>
      <div class="code-block">MOV R0, #10
PUSH R0</div>
    `,
  },
  {
    page: 22,
    title: "Arithmetic Instructions",
    content: `
      <ul>
        <li><strong style="color:var(--text-accent);">ADD, SUB, MUL, DIV.</strong></li>
      </ul>
      <p>Example:</p>
      <div class="code-block">ADD R1, R0, #5  ; R1 = R0 + 5
SUB R2, R1, R0</div>
    `,
  },
  {
    page: 23,
    title: "Logic and Branch",
    content: `
      <ul>
        <li><strong style="color:var(--text-accent);">AND, OR, NOT.</strong></li>
        <li><strong style="color:var(--text-accent);">JMP, JZ (jump if zero), CALL/RET.</strong></li>
      </ul>
      <p>Example:</p>
      <div class="code-block">CMP R1, #10
JZ label</div>
    `,
  },
  {
    page: 24,
    title: "Simple Assembly Program",
    content: `
      ${getAsmHTML()}
      <p style="color:var(--text-secondary); margin-top: 1rem; text-align:center;">Loop 1 to 10 (Try Stepping above!).</p>
    `,
  },
  {
    page: 25,
    title: "PDP-11 Introduction",
    content: `
      <div class="content-split">
        <div class="split-left">
          <p>PDP-11: DEC's 16-bit minicomputer (1970), influenced Unix, C.</p>
          <ul>
            <li>Models: PDP-11/20 (unibus).</li>
            <li>Basis for VAX.</li>
          </ul>
        </div>
        <div class="split-right">
          <img src="/images/pdp_11.png" alt="PDP-11 Minicomputer" class="slide-image glow-img" />
        </div>
      </div>
    `,
  },
  {
    page: 26,
    title: "PDP-11 Architecture",
    content: `
      <p>16-bit words, 8/16-bit bytes.</p>
      <ul>
        <li>Registers: 8 GPRs (R0-R7), R7=PC.</li>
        <li>Memory: Up to 256KB, Unibus.</li>
        <li>Orthogonal instruction set.</li>
      </ul>
    `,
  },
  {
    page: 27,
    title: "PDP-11 Components",
    content: `
      <ul>
        <li><strong>ALU:</strong> 16-bit arithmetic/logic.</li>
        <li><strong>Modes:</strong> Register, Autoincrement, Indexed.</li>
      </ul>
      <p>Example addressing:</p>
      <div class="code-block">(R1)+</div>
    `,
  },
  {
    page: 28,
    title: "PDP-11 Assembly Example",
    content: `
      ${getPDPHTML()}
      <p style="color:var(--text-secondary); margin-top: 1rem; text-align:center;">Counts to 200 (Step above!).</p>
    `,
  },
  {
    page: 29,
    title: "Key Takeaways",
    content: `
      <ul>
        <li>Logic gates → ALU → Microprocessor core.</li>
        <li>Architecture: Fetch-decode-execute cycle.</li>
        <li>Assembly: Bridge to machine code; PDP-11 classic example.</li>
      </ul>
    `,
  },
  {
    page: 30,
    title: "Official Resources & End",
    content: `
      <div class="resources-grid">
        <a href="https://bitsavers.org/pdf/dec/pdp11/?utm_source=perplexity" target="_blank" class="res-btn"><span class="res-num">[1]</span> Bitsavers: DEC PDP-11 Manuals</a>
        <a href="https://www.semanticscholar.org/paper/8085-Microprocessor-Assembly-Language-Programming-Pandya/e18c481de5ce0d2ef97f88818415b4ed815944d2?utm_source=perplexity" target="_blank" class="res-btn"><span class="res-num">[2]</span> Semantic Scholar: 8085 Microprocessor Assembly</a>
        <a href="https://ijaers.com/uploads/issue_files/5IJAERS-0720202-Building.pdf?utm_source=perplexity" target="_blank" class="res-btn"><span class="res-num">[3]</span> IJAERS: Building Architecture Paper</a>
        <a href="https://gunkies.org/wiki/PDP-11?utm_source=perplexity" target="_blank" class="res-btn"><span class="res-num">[4]</span> Gunkies Wiki: PDP-11</a>
        <a href="https://figshare.com/articles/journal_contribution/CMU-11_engineering_documentation/6604136/1/files/12094532.pdf?utm_source=perplexity" target="_blank" class="res-btn"><span class="res-num">[5]</span> Figshare: CMU-11 Engineering Documentation</a>
        <a href="https://www.sciencedirect.com/science/chapter/monograph/abs/pii/B9780932376008500189?utm_source%3Dperplexity%26via%3Dihub" target="_blank" class="res-btn"><span class="res-num">[6]</span> ScienceDirect: Processor Architecture</a>
      </div>
      <h2 style="border:none; text-align:center; font-size:4rem; color:var(--text-secondary); margin-top: 2rem; text-shadow: 0 0 20px var(--text-secondary);">Q & A</h2>
    `,
  }
];

// Elements
const slidesContainer = document.getElementById("slides-container");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const progressText = document.getElementById("progress-text");
const progressBar = document.getElementById("progress-bar");
const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");

// State
let currentSlide = 0;
const totalSlides = slidesData.length;

// Inject Slides into DOM
function initSlides() {
  slidesData.forEach((slide, index) => {
    let section = document.createElement("section");
    section.className = "slide";
    
    // Default classes
    if (index === 0) section.classList.add("active");
    else section.classList.add("next"); // queue to the right

    // Different title handling for page 1
    const titleClass = slide.page === 1 ? "" : "slide-title";

    section.innerHTML = `
      <h1 class="${titleClass}">${slide.title}</h1>
      <div class="slide-body">
        ${slide.content}
      </div>
    `;
    slidesContainer.appendChild(section);
  });
  updateUI();
  
  // Intialize default logic gate states visually so LED defaults to accurate logic
  setTimeout(() => {
    if (window.evaluateGate) {
      window.evaluateGate('gA', 'AND');
      window.evaluateGate('gO', 'OR');
      window.evaluateGate('gN', 'NAND');
      window.evaluateGate('gX', 'XOR');
    }
  }, 100);
}

// Logic to transition slides
function updateUI() {
  const allSlides = document.querySelectorAll(".slide");
  
  allSlides.forEach((slide, index) => {
    slide.className = "slide"; // Reset classes
    if (index === currentSlide) {
      slide.classList.add("active");
    } else if (index < currentSlide) {
      slide.classList.add("prev"); // Has passed
    } else {
      slide.classList.add("next"); // Is coming next
    }
  });

  // Update controls
  prevBtn.disabled = currentSlide === 0;
  nextBtn.disabled = currentSlide === totalSlides - 1;
  progressText.textContent = `${currentSlide + 1} / ${totalSlides}`;
  
  const percentage = ((currentSlide) / (totalSlides - 1)) * 100;
  progressBar.style.width = `${percentage}%`;
}

// Navigation Listeners
prevBtn.addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateUI();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentSlide < totalSlides - 1) {
    currentSlide++;
    updateUI();
  }
});

// Keybinds (Arrows & Space)
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter") {
    if (currentSlide < totalSlides - 1) {
      currentSlide++;
      updateUI();
    }
  } else if (e.key === "ArrowLeft") {
    if (currentSlide > 0) {
      currentSlide--;
      updateUI();
    }
  }
});

// Advanced Sci-Fi Particle Logic Overlay
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particles = [];
const particleCount = 100;

class SignalTrace {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    
    this.direction = Math.random() > 0.5 ? 'horizontal' : 'vertical';
    this.speed = (Math.random() * 2 + 1) * (Math.random() > 0.5 ? 1 : -1);
    this.length = 0;
    this.maxLength = Math.random() * 200 + 50;
    this.path = [{x: this.x, y: this.y}];
    this.life = Math.random() * 150 + 50;
    
    const colors = ["#00e5ff", "#ff00ea", "#ffffff"];
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }
  
  update() {
    if (this.life <= 0) {
      this.reset();
      return;
    }
    this.life--;
    
    let nextX = this.x;
    let nextY = this.y;
    
    if (this.direction === 'horizontal') {
      nextX += this.speed;
    } else {
      nextY += this.speed;
    }
    
    this.length += Math.abs(this.speed);
    
    // Turn 90 degrees
    if (this.length > this.maxLength) {
      this.direction = this.direction === 'horizontal' ? 'vertical' : 'horizontal';
      this.speed = (Math.random() * 2 + 1) * (Math.random() > 0.5 ? 1 : -1);
      this.length = 0;
    }
    
    this.x = nextX;
    this.y = nextY;
    this.path.push({x: this.x, y: this.y});
    if (this.path.length > 25) {
      this.path.shift();
    }
  }
  
  draw() {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 1.5;
    ctx.shadowBlur = 10;
    ctx.shadowColor = this.color;
    
    for (let i = 0; i < this.path.length; i++) {
        if (i === 0) ctx.moveTo(this.path[i].x, this.path[i].y);
        else ctx.lineTo(this.path[i].x, this.path[i].y);
    }
    ctx.stroke();
    
    // Head logic node
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, 2.5, 0, Math.PI * 2);
    ctx.fill();
  }
}

function initParticles() {
  for (let i = 0; i < particleCount; i++) {
    particles.push(new SignalTrace());
  }
}

function animateParticles() {
  // Add a slight dark overlay to create trail effects instead of full clearRect
  ctx.fillStyle = "rgba(3, 5, 20, 0.4)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animateParticles);
}

// Window resizing
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Boot application
initSlides();
initParticles();
animateParticles();
