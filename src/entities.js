/**
 * OpenAI. (2026). ChatGPT (GPT-5.4) [Large language model]. https://chat.openai.com
 * Google. (2026). Gemini [Large language model]. https://gemini.google.com
 * 
 * Parts of the mechanical modeling logic and high-fidelity animation loops in this 
 * file were co-authored with AI assistants to achieve the Cyber-Pacman aesthetic.
 */

import * as THREE from 'three';

/**
 * Creates the main Pacman model using a simple glowing shell and painted eyes.
 */
export function createPacman() {
  const group = new THREE.Group();
  const upperGroup = new THREE.Group();
  const lowerGroup = new THREE.Group();

  const radius = 3.5;
  const shellMaterial = new THREE.MeshStandardMaterial({
    color: 0xffd21a,
    emissive: 0xffb000,
    emissiveIntensity: 0.45,
    roughness: 0.32,
    metalness: 0.05,
    transparent: true,
    opacity: 1
  });
  const upperShellMaterial = shellMaterial.clone();
  const eyeUniforms = {
    blink: { value: 1 },
    power: { value: 0 }
  };
  upperShellMaterial.customProgramCacheKey = () => 'showroom-pacman-painted-eyes';
  upperShellMaterial.onBeforeCompile = (shader) => {
    shader.uniforms.uEyeBlink = eyeUniforms.blink;
    shader.uniforms.uPowerMode = eyeUniforms.power;
    shader.vertexShader = shader.vertexShader.replace(
      '#include <common>',
      `#include <common>
      varying vec3 vLocalPos;`
    );
    shader.vertexShader = shader.vertexShader.replace(
      '#include <begin_vertex>',
      `#include <begin_vertex>
      vLocalPos = position;`
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <common>',
      `#include <common>
      uniform float uEyeBlink;
      uniform float uPowerMode;
      varying vec3 vLocalPos;`
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <opaque_fragment>',
      `
      if (vLocalPos.z > 0.0 && vLocalPos.y > 0.35) {
        float blinkHeight = max(0.08, uEyeBlink);
        vec2 rightEye = vec2((vLocalPos.x - 1.18) / 0.42, (vLocalPos.y - 1.7) / (0.43 * blinkHeight));
        vec2 leftEye = vec2((vLocalPos.x + 1.18) / 0.42, (vLocalPos.y - 1.7) / (0.43 * blinkHeight));
        float rightEyeMask = 1.0 - smoothstep(0.76, 1.0, dot(rightEye, rightEye));
        float leftEyeMask = 1.0 - smoothstep(0.76, 1.0, dot(leftEye, leftEye));

        vec2 rightGlint = vec2((vLocalPos.x - 1.18) / 0.08, (vLocalPos.y - 1.76) / (0.08 * blinkHeight));
        vec2 leftGlint = vec2((vLocalPos.x + 1.18) / 0.08, (vLocalPos.y - 1.76) / (0.08 * blinkHeight));
        float rightGlintMask = 1.0 - smoothstep(0.55, 1.0, dot(rightGlint, rightGlint));
        float leftGlintMask = 1.0 - smoothstep(0.55, 1.0, dot(leftGlint, leftGlint));

        float eyeMask = max(rightEyeMask, leftEyeMask);
        float glintMask = max(rightGlintMask, leftGlintMask);
        float eyeGlow = 1.0 - smoothstep(1.0, 2.0, min(dot(rightEye, rightEye), dot(leftEye, leftEye)));

        outgoingLight = mix(outgoingLight, vec3(0.18, 0.15, 0.03), eyeGlow * 0.18 * uEyeBlink);
        outgoingLight = mix(outgoingLight, vec3(0.006, 0.007, 0.01), eyeMask);
        vec3 glintColor = mix(vec3(0.95, 0.82, 0.34), vec3(0.15, 0.92, 1.0), uPowerMode);
        outgoingLight = mix(outgoingLight, glintColor, glintMask * uEyeBlink);
      }
      #include <opaque_fragment>`
    );
  };

  const mouthMaterial = new THREE.MeshBasicMaterial({
    color: 0x010103,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 1
  });

  const deathUniforms = {
    mouthAngle: { value: 0.35 },
    eyeBlink: { value: 1 },
    eyeFade: { value: 1 }
  };
  const deathShellMaterial = shellMaterial.clone();
  deathShellMaterial.customProgramCacheKey = () => 'pacman-death-mouth-cut';
  deathShellMaterial.onBeforeCompile = (shader) => {
    shader.uniforms.uDeathMouthAngle = deathUniforms.mouthAngle;
    shader.vertexShader = shader.vertexShader.replace(
      '#include <common>',
      `#include <common>
      varying vec3 vDeathLocalPos;`
    );
    shader.vertexShader = shader.vertexShader.replace(
      '#include <begin_vertex>',
      `#include <begin_vertex>
      vDeathLocalPos = position;`
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <common>',
      `#include <common>
      uniform float uDeathMouthAngle;
      uniform float uDeathEyeBlink;
      uniform float uDeathEyeFade;
      varying vec3 vDeathLocalPos;`
    );
    shader.uniforms.uDeathEyeBlink = deathUniforms.eyeBlink;
    shader.uniforms.uDeathEyeFade = deathUniforms.eyeFade;
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <clipping_planes_fragment>',
      `#include <clipping_planes_fragment>
      float deathAngle = atan(abs(vDeathLocalPos.y), vDeathLocalPos.z);
      float deathBlinkHeight = max(0.08, uDeathEyeBlink);
      vec2 deathRightEye = vec2((vDeathLocalPos.x - 1.18) / 0.42, (vDeathLocalPos.y - 1.7) / (0.43 * deathBlinkHeight));
      vec2 deathLeftEye = vec2((vDeathLocalPos.x + 1.18) / 0.42, (vDeathLocalPos.y - 1.7) / (0.43 * deathBlinkHeight));
      float deathRightEyeMask = 1.0 - smoothstep(0.76, 1.0, dot(deathRightEye, deathRightEye));
      float deathLeftEyeMask = 1.0 - smoothstep(0.76, 1.0, dot(deathLeftEye, deathLeftEye));
      float deathEyeMask = max(deathRightEyeMask, deathLeftEyeMask) * uDeathEyeFade;
      if (deathAngle < uDeathMouthAngle && deathEyeMask < 0.08) discard;`
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <opaque_fragment>',
      `
      if (vDeathLocalPos.z > 0.0 && vDeathLocalPos.y > 0.35) {
        float deathBlinkHeight = max(0.08, uDeathEyeBlink);
        vec2 deathRightEye = vec2((vDeathLocalPos.x - 1.18) / 0.42, (vDeathLocalPos.y - 1.7) / (0.43 * deathBlinkHeight));
        vec2 deathLeftEye = vec2((vDeathLocalPos.x + 1.18) / 0.42, (vDeathLocalPos.y - 1.7) / (0.43 * deathBlinkHeight));
        float deathRightEyeMask = 1.0 - smoothstep(0.76, 1.0, dot(deathRightEye, deathRightEye));
        float deathLeftEyeMask = 1.0 - smoothstep(0.76, 1.0, dot(deathLeftEye, deathLeftEye));

        vec2 deathRightGlint = vec2((vDeathLocalPos.x - 1.18) / 0.08, (vDeathLocalPos.y - 1.76) / (0.08 * deathBlinkHeight));
        vec2 deathLeftGlint = vec2((vDeathLocalPos.x + 1.18) / 0.08, (vDeathLocalPos.y - 1.76) / (0.08 * deathBlinkHeight));
        float deathRightGlintMask = 1.0 - smoothstep(0.55, 1.0, dot(deathRightGlint, deathRightGlint));
        float deathLeftGlintMask = 1.0 - smoothstep(0.55, 1.0, dot(deathLeftGlint, deathLeftGlint));

        float deathEyeMask = max(deathRightEyeMask, deathLeftEyeMask) * uDeathEyeFade;
        float deathGlintMask = max(deathRightGlintMask, deathLeftGlintMask) * uDeathEyeFade;
        outgoingLight = mix(outgoingLight, vec3(0.006, 0.007, 0.01), deathEyeMask);
        outgoingLight = mix(outgoingLight, vec3(0.95, 0.82, 0.34), deathGlintMask);
      }
      #include <opaque_fragment>`
    );
  };

  const jawGeometry = new THREE.SphereGeometry(radius, 48, 24, 0, Math.PI * 2, 0, Math.PI / 2);
  const capGeometry = new THREE.CircleGeometry(radius * 0.985, 48);
  const deathShell = new THREE.Mesh(new THREE.SphereGeometry(radius, 48, 32), deathShellMaterial);
  deathShell.visible = false;
  const deathMouthMaterial = mouthMaterial.clone();
  const deathMouth = new THREE.Group();
  const deathMouthTop = new THREE.Mesh(new THREE.CircleGeometry(radius * 0.99, 48, 0, Math.PI), deathMouthMaterial);
  deathMouthTop.rotation.x = Math.PI / 2;
  const deathMouthBottom = deathMouthTop.clone();
  deathMouth.add(deathMouthTop, deathMouthBottom);
  deathMouth.visible = false;
  const deathEyeMaterial = new THREE.MeshBasicMaterial({
    color: 0x050507,
    transparent: true,
    opacity: 1,
    depthWrite: false
  });
  const deathEyeGlintMaterial = new THREE.MeshBasicMaterial({
    color: 0xf2d357,
    transparent: true,
    opacity: 1,
    depthWrite: false
  });
  const deathEyeRig = new THREE.Group();
  const deathEyeMeshes = [];
  const deathEyeAxis = new THREE.Vector3(1, 0, 0);

  [-1, 1].forEach((side) => {
    const eye = new THREE.Group();
    const eyeBody = new THREE.Mesh(new THREE.SphereGeometry(0.32, 18, 18), deathEyeMaterial);
    const glint = new THREE.Mesh(new THREE.SphereGeometry(0.075, 10, 10), deathEyeGlintMaterial);
    glint.position.set(0, 0.1, 0.2);
    eye.add(eyeBody, glint);
    eye.userData.baseDeathPosition = new THREE.Vector3(side * 1.18, 1.7, 2.72);
    eye.position.copy(eye.userData.baseDeathPosition);
    deathEyeRig.add(eye);
    deathEyeMeshes.push(eye);
  });
  deathEyeRig.visible = false;

  const upperShell = new THREE.Mesh(jawGeometry, upperShellMaterial);
  const upperCap = new THREE.Mesh(capGeometry, mouthMaterial);
  upperCap.rotation.x = Math.PI / 2;
  upperGroup.add(upperShell, upperCap);

  lowerGroup.rotation.x = Math.PI;
  const lowerShell = new THREE.Mesh(jawGeometry, shellMaterial);
  const lowerCap = new THREE.Mesh(capGeometry, mouthMaterial);
  lowerCap.rotation.x = -Math.PI / 2;
  lowerGroup.add(lowerShell, lowerCap);

  const throat = new THREE.Mesh(
    new THREE.SphereGeometry(radius * 0.96, 40, 14, Math.PI, Math.PI),
    mouthMaterial
  );
  group.add(throat, upperGroup, lowerGroup, deathShell, deathMouth, deathEyeRig);

  const baseEmissiveIntensity = 0.45;
  const poweredEmissiveIntensity = 1.25;
  const visibleMaterials = [shellMaterial, upperShellMaterial, mouthMaterial, deathShellMaterial, deathMouthMaterial, deathEyeMaterial, deathEyeGlintMaterial];
  const deathState = {
    active: false,
    elapsed: 0,
    duration: 1.45,
    baseScale: new THREE.Vector3(1, 1, 1)
  };
  let isPowerMode = false;

  function setModelOpacity(opacity) {
    visibleMaterials.forEach((material) => {
      material.opacity = opacity;
    });
  }

  function resetPacmanVisualPose() {
    group.visible = true;
    group.scale.copy(deathState.baseScale);
    setModelOpacity(1);
    upperGroup.visible = true;
    lowerGroup.visible = true;
    throat.visible = true;
    deathShell.visible = false;
    deathMouth.visible = false;
    deathEyeRig.visible = false;
    deathEyeRig.rotation.x = 0;
    deathUniforms.mouthAngle.value = 0.35;
    deathUniforms.eyeBlink.value = 1;
    deathUniforms.eyeFade.value = 0;
    deathMouthTop.rotation.x = Math.PI / 2;
    deathMouthBottom.rotation.x = Math.PI / 2;
    deathEyeMeshes.forEach((eye) => {
      eye.position.copy(eye.userData.baseDeathPosition);
      eye.rotation.set(0, 0, 0);
      eye.scale.y = 1;
    });
    deathState.active = false;
    deathState.elapsed = 0;
  }

  group.setPowerMode = (enabled) => {
    isPowerMode = Boolean(enabled);
    eyeUniforms.power.value = isPowerMode ? 1 : 0;
    if (!isPowerMode) {
      shellMaterial.emissiveIntensity = baseEmissiveIntensity;
      upperShellMaterial.emissiveIntensity = baseEmissiveIntensity;
    }
  };

  group.playDeathAnimation = (duration = 1.45) => {
    deathState.baseScale.copy(group.scale);
    resetPacmanVisualPose();
    deathState.active = true;
    deathState.duration = duration;
    upperGroup.visible = false;
    lowerGroup.visible = false;
    throat.visible = false;
    deathShell.visible = true;
    deathMouth.visible = true;
    deathEyeRig.visible = true;
    deathUniforms.eyeFade.value = 0;
  };

  group.resetDeathAnimation = resetPacmanVisualPose;
  group.isDeathAnimationActive = () => deathState.active;

  group.userData = {
    type: 'pacman',
    update: (time, deltaTime = 1 / 60) => {
      if (deathState.active) {
        deathState.elapsed = Math.min(deathState.duration, deathState.elapsed + deltaTime);

        const progress = deathState.duration > 0
          ? deathState.elapsed / deathState.duration
          : 1;
        const fadeProgress = THREE.MathUtils.smoothstep(progress, 0.82, 1);
        const openProgress = THREE.MathUtils.smoothstep(progress, 0, 1);

        deathUniforms.mouthAngle.value = THREE.MathUtils.lerp(0.35, Math.PI, openProgress);
        deathUniforms.eyeBlink.value = 1;
        deathUniforms.eyeFade.value = 0;
        const mouthPlaneAngle = deathUniforms.mouthAngle.value;
        deathMouthTop.rotation.x = Math.PI / 2 - mouthPlaneAngle;
        deathMouthBottom.rotation.x = Math.PI / 2 + mouthPlaneAngle;
        deathEyeRig.rotation.x = 0;
        const deathEyeFade = 1 - THREE.MathUtils.smoothstep(progress, 0.72, 0.94);
        deathEyeMaterial.opacity = deathEyeFade;
        deathEyeGlintMaterial.opacity = deathEyeFade;
        deathEyeMeshes.forEach((eye) => {
          eye.position.copy(eye.userData.baseDeathPosition).applyAxisAngle(deathEyeAxis, -mouthPlaneAngle);
          eye.position.add(eye.position.clone().normalize().multiplyScalar(0.08));
          eye.rotation.set(0, 0, 0);
          eye.scale.y = 1;
        });
        eyeUniforms.blink.value = 1;
        group.scale.copy(deathState.baseScale);
        setModelOpacity(1 - fadeProgress);

        if (progress >= 1) {
          deathState.active = false;
          group.visible = false;
        }

        return;
      }

      const chomp = Math.abs(Math.sin(time * 6.5)) * 0.48;
      upperGroup.rotation.x = -chomp;
      lowerGroup.rotation.x = Math.PI + chomp;
      setModelOpacity(1);

      const blink = Math.sin(time * 2.1) > 0.985 ? 0.18 : 1;
      eyeUniforms.blink.value = blink;

      if (isPowerMode) {
        const pulse = 0.82 + Math.sin(time * 8.0) * 0.18;
        const intensity = poweredEmissiveIntensity * pulse;
        shellMaterial.emissiveIntensity = intensity;
        upperShellMaterial.emissiveIntensity = intensity;
      }
    }
  };

  return group;
}

import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

/**
 * Creates a high-fidelity 'Cyber-Phantom' Ghost
 */
export function createGhost(color = 0xff0044) {
  const group = new THREE.Group();

  // --- Geometry Construction (Bottom at Y=0) ---
  const radius = 2.1; 
  const bodyHeight = 4.5; 
  const radialSegments = 64;
  const heightSegments = 32;

  const domeGeo = new THREE.SphereGeometry(radius, radialSegments, 16, 0, Math.PI * 2, 0, Math.PI / 2);
  domeGeo.translate(0, bodyHeight, 0);

  const cylinderGeo = new THREE.CylinderGeometry(radius, radius, bodyHeight, radialSegments, heightSegments, true);
  cylinderGeo.translate(0, bodyHeight / 2, 0);
  
  const bodyGeo = mergeGeometries([domeGeo, cylinderGeo]);
  bodyGeo.attributes.position.setUsage(THREE.DynamicDrawUsage);
  
  const posAttr = bodyGeo.attributes.position;
  const originalYs = new Float32Array(posAttr.count);
  for (let i = 0; i < posAttr.count; i++) {
    originalYs[i] = posAttr.getY(i);
  }

  // --- Holographic Shader Material ---
  // A custom shader to create that perfect glowing, translucent rim-lit membrane
  const ghostShader = {
    uniforms: {
      uColor: { value: new THREE.Color(color) },
      uHeight: { value: bodyHeight },
      // Mathematically calculate the exact surface coordinates of the eyes on the dome
      uEyeRight: { value: new THREE.Vector3(0.8, bodyHeight + 0.65, Math.sqrt(radius*radius - 0.8*0.8 - 0.65*0.65)) },
      uEyeLeft: { value: new THREE.Vector3(-0.8, bodyHeight + 0.65, Math.sqrt(radius*radius - 0.8*0.8 - 0.65*0.65)) },
      // Vulnerability state (0.0 = normal, 1.0 = scared blue, 2.0 = flashing warning)
      uIsVulnerable: { value: 0.0 },
      uVulnerableColor: { value: new THREE.Color(0x0022ff) }, // Deep neon blue
      uVulnerableEyeColor: { value: new THREE.Color(0xffb888) }, // Peach
      uTime: { value: 0.0 }
    },
    vertexShader: `
      varying vec3 vNormal;
      varying vec3 vLocalPos;
      void main() {
        // Normal in view space for Fresnel calculation
        vNormal = normalize(normalMatrix * normal);
        vLocalPos = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 uColor;
      uniform float uHeight;
      uniform vec3 uEyeRight;
      uniform vec3 uEyeLeft;
      uniform float uIsVulnerable;
      uniform vec3 uVulnerableColor;
      uniform vec3 uVulnerableEyeColor;
      uniform float uTime;
      
      varying vec3 vNormal;
      varying vec3 vLocalPos;
      
      void main() {
        // Fresnel Effect: glow more at grazing angles (edges)
        float fresnel = pow(1.0 - abs(vNormal.z), 2.2);
        
        // Vertical Gradient: glow more at the bottom skirt
        float bottomGlow = smoothstep(uHeight, 0.0, vLocalPos.y);
        
        // Restored to the beloved original 0.1 base opacity for the pure glow
        float baseOpacity = 0.1;           
        float rimOpacity = fresnel * 0.8;  
        float skirtOpacity = bottomGlow * 0.25; 
        
        float finalAlpha = baseOpacity + rimOpacity + skirtOpacity;
        
        // --- Vulnerability State Logic ---
        bool isVulnerable = uIsVulnerable > 0.5;
        bool isFlashing = uIsVulnerable > 1.5;
        
        // Flashing alternates cleanly between 0 and 1 every ~0.2 seconds
        float flashCycle = isFlashing ? step(0.0, sin(uTime * 15.0)) : 0.0;
        
        // Classic flashing colors: Blue body/Peach eyes -> White body/Red eyes
        vec3 activeVulnerableColor = mix(uVulnerableColor, vec3(0.9, 0.9, 1.0), flashCycle);
        vec3 activeVulnerableEyeColor = mix(uVulnerableEyeColor, vec3(1.0, 0.1, 0.1), flashCycle);
        
        // Base color shift: Transition to active vulnerable color if scared
        vec3 activeShellColor = mix(uColor, activeVulnerableColor, isVulnerable ? 1.0 : 0.0);
        vec3 finalColor = mix(activeShellColor, vec3(1.0), fresnel * 0.35);
        
        // --- Shader Eyes & Mouth (Seamlessly painted onto the curvature) ---
        // Only draw on the front half of the ghost
        if (vLocalPos.z > 0.0) {
           float dR = distance(vLocalPos, uEyeRight);
           float dL = distance(vLocalPos, uEyeLeft);
           float dEye = min(dR, dL);
           
           float eyeCoreRadius = 0.55; 
           float eyeHaloRadius = 0.8; 
           
           float eyeCore = 1.0 - smoothstep(0.28, eyeCoreRadius, dEye);
           float eyeHalo = 1.0 - smoothstep(0.28, eyeHaloRadius, dEye);
           
           float eyeIntensity = gl_FrontFacing ? 1.0 : 0.2;
           
           // Transition eye color when vulnerable
           vec3 currentEyeColor = mix(vec3(1.0), activeVulnerableEyeColor, isVulnerable ? 1.0 : 0.0);
           
           // Paint the eyes over the shell color
           finalColor = mix(finalColor, currentEyeColor, eyeCore * eyeIntensity);
           finalAlpha += ((eyeHalo * 0.15) + (eyeCore * 0.85)) * eyeIntensity; 
           
           // --- Vulnerable Animated Squiggly Mouth ---
           if (isVulnerable) {
               // Using cos() makes it perfectly symmetrical around x=0!
               // Adding uTime animates the wave, making it travel horizontally.
               float mouthY = 3.5 + cos(vLocalPos.x * 7.0 + uTime * 8.0) * 0.15;
               float dMouth = abs(vLocalPos.y - mouthY);
               
               // Constrain the mouth width
               if (abs(vLocalPos.x) < 1.4 && vLocalPos.y > 2.5 && vLocalPos.y < 4.5) {
                   // Soft fade at the edges of the mouth
                   float mouthEdgeFade = smoothstep(1.4, 1.0, abs(vLocalPos.x));
                   
                   float mouthCore = 1.0 - smoothstep(0.04, 0.08, dMouth);
                   float mouthHalo = 1.0 - smoothstep(0.08, 0.25, dMouth);
                   
                   mouthCore *= mouthEdgeFade;
                   mouthHalo *= mouthEdgeFade;
                   
                   finalColor = mix(finalColor, activeVulnerableEyeColor, mouthCore * eyeIntensity);
                   finalAlpha += ((mouthHalo * 0.2) + (mouthCore * 0.8)) * eyeIntensity;
               }
           }
        }
        
        gl_FragColor = vec4(finalColor, finalAlpha);
      }
    `
  };

  const shellMaterial = new THREE.ShaderMaterial({
    uniforms: ghostShader.uniforms,
    vertexShader: ghostShader.vertexShader,
    fragmentShader: ghostShader.fragmentShader,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    side: THREE.DoubleSide
  });

  const visualGroup = new THREE.Group();
  group.add(visualGroup);
  
  const shell = new THREE.Mesh(bodyGeo, shellMaterial);
  shell.renderOrder = 2; // Ensure the glow is drawn ON TOP of the core
  visualGroup.add(shell);

  // --- Inner Obscuring Core ---
  const coreMaterial = new THREE.MeshBasicMaterial({
    color: 0x000000, 
    transparent: true,
    opacity: 0.85, 
    blending: THREE.NormalBlending,
    depthWrite: false
  });
  
  const innerCore = new THREE.Mesh(bodyGeo, coreMaterial);
  innerCore.scale.set(0.98, 0.98, 0.98);
  innerCore.renderOrder = 1; 
  visualGroup.add(innerCore);

  // --- Animation Settings ---
  const waves = 6;
  const waveAmplitude = 0.35; 
  const waveSpeed = 4.2;

  group.userData = {
    type: 'ghost',
    update: (time) => {
      // Pass time to the shader for the animated mouth and flashing
      ghostShader.uniforms.uTime.value = time;
      
      // Levitate locally
      visualGroup.position.y = Math.sin(time * 2.2) * 0.2; 
      
      for (let i = 0; i < posAttr.count; i++) {
        const origY = originalYs[i];
        
        // Target vertices at the very bottom (base is exactly at y=0 now)
        if (origY < 2.5) {
          const x = posAttr.getX(i);
          const z = posAttr.getZ(i);
          const angle = Math.atan2(z, x);
          
          // Standard smooth sine wave for harmonious, rounded scallops
          const wave = Math.sin(angle * waves + time * waveSpeed);
          const blend = Math.pow((2.5 - origY) / 2.5, 1.1);
          
          // Apply wave smoothly up and down
          posAttr.setY(i, origY + (wave * waveAmplitude * blend));
        }
      }
      bodyGeo.computeVertexNormals();
      posAttr.needsUpdate = true;
    }
  };

  // --- API ---
  group.setVulnerable = (state) => {
    if (state === 'flashing') ghostShader.uniforms.uIsVulnerable.value = 2.0;
    else if (state) ghostShader.uniforms.uIsVulnerable.value = 1.0;
    else ghostShader.uniforms.uIsVulnerable.value = 0.0;
  };

  return group;
}

/**
 * Creates a high-fidelity 'Cyber-Pellet' (Energy Shard)
 */
export function createPellet() {
  const group = new THREE.Group();

  const color = 0xffaa00; // Warm Energy Orange
  
  const coreMaterial = new THREE.MeshStandardMaterial({
    color: color,
    emissive: color,
    emissiveIntensity: 6.0,
  });

  const ringMaterial = new THREE.MeshBasicMaterial({
    color: color,
    transparent: true,
    opacity: 0.4,
    side: THREE.DoubleSide
  });

  // --- Core (Low-poly Energy Crystal) ---
  const core = new THREE.Mesh(new THREE.IcosahedronGeometry(1.0, 0), coreMaterial);
  group.add(core);

  // --- Outer Spinner Ring ---
  const ring = new THREE.Mesh(new THREE.TorusGeometry(1.8, 0.04, 8, 48), ringMaterial);
  ring.rotation.x = Math.PI / 2;
  group.add(ring);

  // --- Animation ---
  group.userData = {
    type: 'pellet',
    update: (time) => {
      // Spinning core
      core.rotation.y = time * 2;
      core.rotation.z = time * 1.5;
      
      // Floating motion
      group.position.y += Math.sin(time * 3) * 0.006;
      
      // Ring animation
      ring.rotation.z = -time * 3;
      ring.scale.setScalar(1 + Math.sin(time * 4) * 0.1);
    }
  };

  return group;
}

/**
 * Creates a standard 'Cyber-Pellet' (Normal Dot)
 * Designed to be highly performant so hundreds can exist in the maze.
 */
export function createStandardPellet() {
  const group = new THREE.Group();
  const color = 0xffaa00; // Same warm orange as the power pellet

  // A simple sphere using a Standard material to catch scene lights
  // but with high emissive so it glows on its own
  const coreMaterial = new THREE.MeshStandardMaterial({
    color: color,
    emissive: color,
    emissiveIntensity: 1.5,
    roughness: 0.2,
    metalness: 0.8
  });

  // A highly performant additive glow shell (no actual lights)
  const glowMaterial = new THREE.MeshBasicMaterial({
    color: color,
    transparent: true,
    opacity: 0.3,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  // Keep geometry simple: 16x16 segments
  const geometry = new THREE.SphereGeometry(0.35, 16, 16);
  
  const core = new THREE.Mesh(geometry, coreMaterial);
  const glow = new THREE.Mesh(geometry, glowMaterial);
  glow.scale.set(1.4, 1.4, 1.4);
  
  group.add(core);
  group.add(glow);

  // Subtle floating animation
  group.userData = {
    type: 'standard_pellet',
    update: (time) => {
      group.position.y += Math.sin(time * 4) * 0.005;
    }
  };

  return group;
}
