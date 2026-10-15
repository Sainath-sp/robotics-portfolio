(() => {
  const menuButton = document.querySelector('.menu-button');
  const nav = document.querySelector('.nav');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') !== 'true';
      menuButton.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('open', open);
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      nav.classList.remove('open');
    }));
  }

  const progress = document.querySelector('.scroll-line span');
  const backTop = document.querySelector('.back-top');
  const heroState = document.getElementById('hero-state');
  const heroMode = document.getElementById('hero-mode');
  const updateScroll = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? window.scrollY / max : 0;
    if (progress) progress.style.width = `${ratio * 100}%`;
    if (backTop) backTop.classList.toggle('visible', window.scrollY > 500);
    if (heroState) heroState.textContent = ratio > .78 ? 'CONTACT CHANNEL' : ratio > .56 ? 'SYSTEM INTEGRATION' : ratio > .33 ? 'CONTROL ACTIVE' : ratio > .12 ? 'DESIGN MODE' : 'SYSTEM READY';
    if (heroMode) heroMode.textContent = ratio > .55 ? 'INTEGRATION' : ratio > .25 ? 'KINEMATICS' : 'SIMULATION';
  };
  window.addEventListener('scroll', updateScroll, { passive: true });
  updateScroll();
  if (backTop) backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(el => revealObserver.observe(el));
  } else {
    revealItems.forEach(el => el.classList.add('is-visible'));
  }

  const domains = {
    robotics: { code:'DOMAIN / 01', title:'Robotics & Manipulation', description:'Robot modeling, motion planning and simulation — connecting a designed mechanism to a robot that can be visualized and commanded.', tags:['ROS 2','MoveIt 2','URDF / Xacro','RViz','Gazebo'] },
    embedded: { code:'DOMAIN / 02', title:'Embedded Systems & Electronics', description:'Microcontroller-based systems, sensor and actuator integration, electronics design and firmware that connect software to the physical world.', tags:['Python','C / C++','ESP32','Arduino','KiCad','EasyEDA'] },
    autonomy: { code:'DOMAIN / 03', title:'Autonomous Systems & UAVs', description:'Avionics and embedded integration for autonomous platforms, bringing flight controllers, sensors and communication systems together.', tags:['UAVs','Avionics','Mission Planner','Sensors','Communication'] },
    design: { code:'DOMAIN / 04', title:'CAD, Prototyping & Mechanisms', description:'Developing mechanical assemblies and robot structures through CAD, mechanism design, iterative prototyping and 3D printing.', tags:['SolidWorks','Fusion 360','CAD','3D Printing','Mechanisms'] },
    control: { code:'DOMAIN / 05', title:'Control, Sensors & Vision', description:'Exploring feedback control and sensing — from PID line following and instrumentation to computer-vision-driven robotic applications.', tags:['PID','Sensor Integration','Motor Control','Computer Vision','Instrumentation'] }
  };
  const domainPanel = document.querySelector('.domain-panel');
  const tabs = document.querySelectorAll('.domain-tab');
  function setDomain(key) {
    const data = domains[key];
    if (!data || !domainPanel) return;
    domainPanel.dataset.domain = key;
    document.getElementById('domain-code').textContent = data.code;
    document.getElementById('domain-title').textContent = data.title;
    document.getElementById('domain-description').textContent = data.description;
    document.getElementById('domain-tags').innerHTML = data.tags.map(t => `<span>${t}</span>`).join('');
    tabs.forEach(tab => {
      const active = tab.dataset.domain === key;
      tab.classList.toggle('active', active);
      tab.setAttribute('aria-selected', String(active));
    });
  }
  tabs.forEach(tab => tab.addEventListener('click', () => setDomain(tab.dataset.domain)));

  const journeyVisual = document.getElementById('journey-visual');
  const steps = document.querySelectorAll('.journey-step');
  const stageLabels = [
    ['CAD / STRUCTURE','01 — DESIGN'],
    ['SENSORS / ACTUATION','02 — ELECTRONICS'],
    ['ROBOT MODEL / CONTROL','03 — SOFTWARE'],
    ['VALIDATION / ITERATION','04 — SIMULATION'],
    ['SENSING / DECISION','05 — AUTONOMY']
  ];
  function activateStage(index) {
    if (!journeyVisual) return;
    journeyVisual.dataset.stage = String(index);
    document.getElementById('journey-stage-label').textContent = `STAGE 0${index + 1}`;
    document.getElementById('journey-readout-a').textContent = stageLabels[index][0];
    document.getElementById('journey-readout-b').textContent = stageLabels[index][1];
    steps.forEach((step, i) => step.classList.toggle('active', i === index));
  }
  if ('IntersectionObserver' in window && steps.length) {
    const stageObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) activateStage(Number(entry.target.dataset.stage));
      });
    }, { rootMargin: '-35% 0px -40% 0px', threshold: 0 });
    steps.forEach(step => stageObserver.observe(step));
  }
  steps.forEach(step => step.addEventListener('click', () => activateStage(Number(step.dataset.stage))));

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();