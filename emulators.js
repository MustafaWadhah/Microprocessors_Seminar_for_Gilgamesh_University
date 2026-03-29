export function getGateHTML(gateId, type) {
  return `
    <div class="emulator-box" id="gate-${gateId}">
      <h3 style="text-align:center; color: var(--text-accent); margin-bottom: 2rem; font-size: 2rem; text-shadow: 0 0 10px rgba(0, 229, 255, 0.5);">${type} Gate Emulator</h3>
      <div class="gate-ui">
        <div class="gate-inputs">
          <div class="input-group">
            <label for="${gateId}-in-a">Input A:</label>
            <select class="gate-select" id="${gateId}-in-a" onchange="window.evaluateGate('${gateId}', '${type}')">
              <option value="0">0 (LOW)</option>
              <option value="1">1 (HIGH)</option>
            </select>
          </div>
          <div class="input-group">
            <label for="${gateId}-in-b">Input B:</label>
            <select class="gate-select" id="${gateId}-in-b" onchange="window.evaluateGate('${gateId}', '${type}')">
              <option value="0">0 (LOW)</option>
              <option value="1">1 (HIGH)</option>
            </select>
          </div>
        </div>
        <div class="logic-gate-symbol" id="${gateId}-symbol">${type}</div>
        <div class="gate-output" id="${gateId}-out">
          <div class="led-light" id="${gateId}-led"></div>
          <span>Output: 0</span>
        </div>
      </div>
    </div>
  `;
}

// Global state for gates
window.gateState = {};

window.evaluateGate = (gateId, type) => {
  const inA = document.getElementById(`${gateId}-in-a`);
  const inB = document.getElementById(`${gateId}-in-b`);
  
  const A = parseInt(inA.value);
  const B = parseInt(inB.value);
  
  let out = 0;
  switch(type) {
    case 'AND': out = (A === 1 && B === 1) ? 1 : 0; break;
    case 'OR': out = (A === 1 || B === 1) ? 1 : 0; break;
    case 'NOT': 
      out = (A === 0) ? 1 : 0; 
      inB.disabled = true; // B is not used
      break; 
    case 'NAND': out = !(A === 1 && B === 1) ? 1 : 0; break;
    case 'NOR': out = !(A === 1 || B === 1) ? 1 : 0; break;
    case 'XOR': out = (A !== B) ? 1 : 0; break;
  }
  
  const outDiv = document.getElementById(`${gateId}-out`);
  const led = document.getElementById(`${gateId}-led`);
  const symbol = document.getElementById(`${gateId}-symbol`);
  
  outDiv.querySelector('span').innerText = `Output: ${out}`;
  
  if (out === 1) {
    outDiv.classList.add('active-out');
    symbol.classList.add('active-gate');
    led.classList.add('led-on');
  } else {
    outDiv.classList.remove('active-out');
    symbol.classList.remove('active-gate');
    led.classList.remove('led-on');
  }
};

export function getAsmHTML() {
  return `
    <div class="emulator-box asm-emu">
      <h3 style="color:var(--text-accent); text-align:center;">Simple Assembly Emulator</h3>
      <div class="asm-layout">
        <div class="asm-code">
          <div id="asm-line-0" class="asm-line">ORG 0</div>
          <div id="asm-line-1" class="asm-line">MOV R0, #1</div>
          <div id="asm-line-2" class="asm-line">LOOP: ADD R0, #1</div>
          <div id="asm-line-3" class="asm-line">CMP R0, #10</div>
          <div id="asm-line-4" class="asm-line">JNZ LOOP</div>
          <div id="asm-line-5" class="asm-line">HLT</div>
        </div>
        <div class="asm-state">
          <div><strong>R0: </strong> <span id="asm-r0" class="reg-val">0</span></div>
          <div><strong>PC: </strong> <span id="asm-pc" class="reg-val">0</span></div>
          <button class="step-btn" onclick="window.stepAsm()">STEP (Execute)</button>
        </div>
      </div>
    </div>
  `;
}

window.asmState = { r0: 0, pc: 0, running: true };
window.stepAsm = () => {
  if (!window.asmState.running) return;
  
  // Clear highlights
  document.querySelectorAll('.asm-line').forEach(el => el.classList.remove('active-line'));
  
  const line = document.getElementById(`asm-line-${window.asmState.pc}`);
  if(line) line.classList.add('active-line');
  
  switch(window.asmState.pc) {
    case 0: // ORG 0
      window.asmState.pc = 1; break;
    case 1: // MOV R0, #1
      window.asmState.r0 = 1; 
      window.asmState.pc = 2; break;
    case 2: // ADD R0, #1
      window.asmState.r0 += 1;
      window.asmState.pc = 3; break;
    case 3: // CMP R0, #10
      window.asmState.pc = 4; break;
    case 4: // JNZ LOOP
      if(window.asmState.r0 < 10) {
        window.asmState.pc = 2; // Jump to LOOP
      } else {
        window.asmState.pc = 5;
      }
      break;
    case 5: // HLT
      window.asmState.running = false;
      break;
  }
  
  document.getElementById('asm-r0').innerText = window.asmState.r0;
  document.getElementById('asm-pc').innerText = window.asmState.pc;
};

export function getPDPHTML() {
  return `
    <div class="emulator-box pdp-emu">
      <h3 style="color:var(--text-accent); text-align:center;">PDP-11 Micro-Emulator</h3>
      <div class="asm-layout">
        <div class="asm-code">
          <div id="pdp-line-0" class="asm-line">MOV #100, R0</div>
          <div id="pdp-line-1" class="asm-line">LOOP: INC R0</div>
          <div id="pdp-line-2" class="asm-line">CMP R0, #200</div>
          <div id="pdp-line-3" class="asm-line">BLOS LOOP</div>
        </div>
        <div class="asm-state">
          <div><strong>R0: </strong> <span id="pdp-r0" class="reg-val">0</span></div>
          <div><strong>PC: </strong> <span id="pdp-pc" class="reg-val">0</span></div>
          <button class="step-btn" onclick="window.stepPDP()">INSTRUCT</button>
        </div>
      </div>
    </div>
  `;
}

window.pdpState = { r0: 0, pc: 0, running: true };
window.stepPDP = () => {
  if (!window.pdpState.running) return;
  document.querySelectorAll('.pdp-emu .asm-line').forEach(el => el.classList.remove('active-line'));
  const line = document.getElementById(`pdp-line-${window.pdpState.pc}`);
  if(line) line.classList.add('active-line');
  
  switch(window.pdpState.pc) {
    case 0: // MOV #100, R0
      window.pdpState.r0 = 100; window.pdpState.pc = 1; break;
    case 1: // INC R0
      window.pdpState.r0 += 1; window.pdpState.pc = 2; break;
    case 2: // CMP R0, #200
      window.pdpState.pc = 3; break;
    case 3: // BLOS LOOP
      if(window.pdpState.r0 <= 200) {
        window.pdpState.pc = 1;
      } else {
        window.pdpState.running = false;
      }
      break;
  }
  document.getElementById('pdp-r0').innerText = window.pdpState.r0;
  document.getElementById('pdp-pc').innerText = window.pdpState.pc;
};

export function getCycleHTML() {
  return `
    <div class="emulator-box cpu-cycle-box">
      <h3 style="color:var(--text-accent); text-align:center; margin-bottom:1rem;">Instruction Cycle Live Animator</h3>
      <div class="cycle-grid">
        <div class="cycle-item" id="cyc-memory">Memory</div>
        <div class="cycle-bus" id="bus-data">➜ Data Bus ➜</div>
        <div class="cycle-item" id="cyc-cu">Control Unit</div>
        <div class="cycle-bus" id="bus-ctrl">➜ Ctrl Bus ➜</div>
        <div class="cycle-item" id="cyc-alu">ALU / Regs</div>
      </div>
      <div style="text-align:center; margin-top:2rem;">
        <div class="state-label" style="font-size:2rem;">State: <span id="cyc-state" style="color:var(--text-secondary);">IDLE</span></div>
        <button class="step-btn" onclick="window.stepCycle()" style="margin-top:10px;">PULSE CLOCK</button>
      </div>
    </div>
  `;
}

window.cycleState = -1; // -1: IDLE, 0: FETCH, 1: DECODE, 2: EXECUTE
window.stepCycle = () => {
    const states = ["FETCH", "DECODE", "EXECUTE"];
    window.cycleState = (window.cycleState + 1) % 3;
    const s = document.getElementById("cyc-state");
    s.innerText = states[window.cycleState];
    
    // Clear animations
    document.querySelectorAll('.cycle-bus, .cycle-item').forEach(el => el.classList.remove('active-bus', 'active-module'));
    
    if(window.cycleState === 0) { // FETCH
        document.getElementById("cyc-memory").classList.add('active-module');
        document.getElementById("bus-data").classList.add('active-bus');
        document.getElementById("cyc-cu").classList.add('active-module');
    } else if (window.cycleState === 1) { // DECODE
        document.getElementById("cyc-cu").classList.add('active-module');
    } else if (window.cycleState === 2) { // EXECUTE
        document.getElementById("cyc-cu").classList.add('active-module');
        document.getElementById("bus-ctrl").classList.add('active-bus');
        document.getElementById("cyc-alu").classList.add('active-module');
    }
};
