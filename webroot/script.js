// Built-in translations
const translations = {
  ES: {
    subtitle: "Panel Interactivo para APatch y KernelSU",
    ram_title: "Estado de la Memoria",
    free_ram: "RAM Libre:",
    used: "Usado",
    cpu_title: "Estado de la CPU",
    governor: "Gobernador",
    freq: "Frecuencia",
    cores: "Núcleos",
    cpu_desc: "Cambio rápido de gobernador para todos los núcleos.",
    perf: "Performance",
    balanced: "Balanced",
    powersave: "Powersave",
    display_title: "Pantalla",
    display_desc: "Forzar tasa de refresco (el panel debe soportar el valor elegido).",
    profiles_title: "Perfiles de Ajuste",
    profiles_desc: "Aplica parámetros de kernel y memoria optimizados para el hardware.",
    profile_high: "⚡ 6GB+ Alto Rendimiento",
    profile_low: "🛡️ 6GB- Ahorro de Memoria",
    cleaners_title: "Limpiadores del Sistema",
    clean_ram: "🧹 Limpiar Caché (RAM)",
    trim_storage: "💾 FSTRIM Almacenamiento",
    kill_apps: "⛔ Cerrar Apps en Segundo Plano",
    reset_battery: "🔋 Reiniciar Stats de Batería",
    tweaks_title: "Controles de Ajustes",
    joyose_title: "Rendimiento Térmico (Joyose)",
    joyose_desc: "Deshabilita Joyose para máximo FPS en juegos.",
    doze_title: "Modo Doze Agresivo",
    doze_desc: "Deshabilita restricciones en segundo plano para respuesta táctil instantánea.",
    miuiopt_title: "Desactivar Optimización MIUI/HyperOS",
    miuiopt_desc: "persist.sys.miui_optimization = 0. Mejora compatibilidad. Requiere reinicio.",
    ads_title: "Eliminar Anuncios y Analítica",
    ads_desc: "Deshabilita servicios de anuncios de Xiaomi (MSA, systemAdSolution).",
    terminal_title: "Terminal de Ejecución",
    clear: "Limpiar",
    warn_miuiopt: "¿Deseas desactivar la optimización MIUI/HyperOS? Algunos servicios pueden reiniciarse."
  },
  EN: {
    subtitle: "Interactive Panel for APatch and KernelSU",
    ram_title: "Memory Status",
    free_ram: "Free RAM:",
    used: "Used",
    cpu_title: "CPU Status",
    governor: "Governor",
    freq: "Frequency",
    cores: "Cores",
    cpu_desc: "Quick governor switch for all CPU cores.",
    perf: "Performance",
    balanced: "Balanced",
    powersave: "Powersave",
    display_title: "Display",
    display_desc: "Force refresh rate (display panel must support selected value).",
    profiles_title: "Tweak Profiles",
    profiles_desc: "Applies kernel and memory parameters optimized for hardware.",
    profile_high: "⚡ 6GB+ High Performance",
    profile_low: "🛡️ 6GB- Memory Saver",
    cleaners_title: "System Cleaners",
    clean_ram: "🧹 Clear Cache (RAM)",
    trim_storage: "💾 FSTRIM Storage",
    kill_apps: "⛔ Force Stop Background Apps",
    reset_battery: "🔋 Reset Battery Stats",
    tweaks_title: "Tweak Controls",
    joyose_title: "Thermal Performance (Joyose)",
    joyose_desc: "Disables Joyose for maximum gaming FPS.",
    doze_title: "Aggressive Doze Mode",
    doze_desc: "Disables background restrictions for instant touch response.",
    miuiopt_title: "Disable MIUI/HyperOS Optimization",
    miuiopt_desc: "persist.sys.miui_optimization = 0. Improves compatibility. Requires reboot.",
    ads_title: "Remove Ads & Analytics",
    ads_desc: "Disables Xiaomi ad services (MSA, systemAdSolution).",
    terminal_title: "Execution Terminal",
    clear: "Clear",
    warn_miuiopt: "Do you want to disable MIUI/HyperOS Optimization? Some services might restart."
  },
  RU: {
    subtitle: "Интерактивная панель для APatch и KernelSU",
    ram_title: "Состояние памяти",
    free_ram: "Свободно RAM:",
    used: "Занято",
    cpu_title: "Состояние ЦП",
    governor: "Планировщик",
    freq: "Частота",
    cores: "Ядра",
    cpu_desc: "Быстрое переключение планировщика для всех ядер.",
    perf: "Performance",
    balanced: "Balanced",
    powersave: "Powersave",
    display_title: "Экран",
    display_desc: "Принудительная частота обновления (дисплей должен поддерживать).",
    profiles_title: "Профили настроек",
    profiles_desc: "Применяет параметры ядра и памяти, оптимизированные для железа.",
    profile_high: "⚡ 6GB+ Высокая производительность",
    profile_low: "🛡️ 6GB- Экономия памяти",
    cleaners_title: "Очистка системы",
    clean_ram: "🧹 Очистить кэш (RAM)",
    trim_storage: "💾 FSTRIM Накопителя",
    kill_apps: "⛔ Закрыть фоновые прил.",
    reset_battery: "🔋 Сбросить стат. батареи",
    tweaks_title: "Управление твиками",
    joyose_title: "Тепловая производительность (Joyose)",
    joyose_desc: "Отключает Joyose для максимального FPS в играх.",
    doze_title: "Агрессивный режим Doze",
    doze_desc: "Отключает ограничения в фоне для мгновенного отклика.",
    miuiopt_title: "Отключить оптимизацию MIUI/HyperOS",
    miuiopt_desc: "persist.sys.miui_optimization = 0. Улучшает совместимость. Нужен перезапуск.",
    ads_title: "Удалить рекламу и аналитику",
    ads_desc: "Отключает рекламные сервисы Xiaomi (MSA, systemAdSolution).",
    terminal_title: "Терминал выполнения",
    clear: "Очистить",
    warn_miuiopt: "Вы хотите отключить оптимизацию MIUI/HyperOS? Некоторые службы могут перезапуститься."
  }
};

let currentLangData = translations.ES;

function loadLanguage(langCode) {
  if (translations[langCode]) {
    currentLangData = translations[langCode];
    applyTranslations();
    localStorage.setItem("tweak_lang", langCode);
    logTerminal(`Language: ${langCode}`, "info");
  }
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (currentLangData[key]) el.innerText = currentLangData[key];
  });
}

function changeLanguage(langCode) {
  loadLanguage(langCode);
}

function t(key) {
  return currentLangData[key] || key;
}

// Unified Root execution (Supports KernelSU and APatch WebUI)
async function execCmd(command) {
  try {
    let rawResult = null;

    if (window.ksu && typeof window.ksu.exec === 'function') {
      rawResult = await window.ksu.exec(command);
    } else if (typeof window.exec === 'function') {
      rawResult = await window.exec(command);
    } else if (typeof exec === 'function') {
      rawResult = await exec(command);
    } else {
      logTerminal("[NO-ROOT] " + command, "error");
      return "mock_success";
    }

    if (typeof rawResult === "string" && rawResult.trim().startsWith("{")) {
      try { rawResult = JSON.parse(rawResult); } catch (e) {}
    }

    if (typeof rawResult === "object" && rawResult !== null) {
      if (rawResult.errno !== undefined && rawResult.errno !== 0) {
        logTerminal("[ERROR] Code " + rawResult.errno + ": " + (rawResult.stderr || ""), "error");
      }
      return typeof rawResult.stdout === "string" ? rawResult.stdout : String(rawResult.stdout || "");
    }

    return typeof rawResult === "string" ? rawResult : String(rawResult || "");
  } catch (e) {
    logTerminal("[EXEC EXCEPTION] " + e, "error");
    return null;
  }
}

function logTerminal(message, type = "info") {
  const terminal = document.getElementById("terminal-log");
  if (!terminal) return;
  const entry = document.createElement("div");
  entry.className = `log-entry ${type}`;
  entry.innerText = `[${new Date().toLocaleTimeString()}] ${message}`;
  terminal.appendChild(entry);
  terminal.scrollTop = terminal.scrollHeight;
}

function clearLog() {
  const terminal = document.getElementById("terminal-log");
  if (terminal) terminal.innerHTML = "";
}

// Refresh Rate Control for HyperOS
async function setRefreshRate(hz) {
  if (hz === "auto") {
    logTerminal("Resetting refresh rate to Auto...", "info");
    await execCmd("settings delete system peak_refresh_rate");
    await execCmd("settings delete system min_refresh_rate");
    await execCmd("settings delete system user_refresh_rate");
  } else {
    logTerminal(`Setting display to ${hz}Hz...`, "info");
    await execCmd(`settings put system user_refresh_rate ${hz}`);
    await execCmd(`settings put system peak_refresh_rate ${hz}.0`);
    await execCmd(`settings put system min_refresh_rate ${hz}.0`);
  }
  localStorage.setItem("tweak_refresh", hz);
  highlightChip("refresh-chips", "data-hz", hz);
}

// RAM Parsing
async function refreshRAM() {
  logTerminal("Querying RAM...", "info");
  let output = await execCmd("cat /proc/meminfo");

  if (!output || output === "mock_success") {
    updateRAMDisplay(7634, 2600);
    return;
  }

  let totalMatch = output.match(/^MemTotal:\s*(\d+)\s*kB/im);
  let availMatch = output.match(/^MemAvailable:\s*(\d+)\s*kB/im);

  let totalMB = totalMatch ? Math.round(parseInt(totalMatch[1], 10) / 1024) : 0;
  let availMB = availMatch ? Math.round(parseInt(availMatch[1], 10) / 1024) : 0;

  if (totalMB > 0) {
    updateRAMDisplay(totalMB, availMB);
    logTerminal("RAM metrics updated.", "success");
  }
}

function updateRAMDisplay(totalMB, availMB) {
  const usedMB = totalMB - availMB;
  const usedGB = (usedMB / 1024).toFixed(1);
  const totalGB = (totalMB / 1024).toFixed(1);
  const freeGB = (availMB / 1024).toFixed(1);
  const percentage = Math.round((usedMB / totalMB) * 100);

  const ramUsed = document.getElementById("ram-used");
  const ramTotal = document.getElementById("ram-total");
  const ramFree = document.getElementById("ram-free");
  const ramPercentage = document.getElementById("ram-percentage");
  const ramBar = document.getElementById("ram-bar");

  if (ramUsed) ramUsed.innerText = `${usedGB} GB`;
  if (ramTotal) ramTotal.innerText = `${totalGB} GB`;
  if (ramFree) ramFree.innerText = `${freeGB} GB`;
  if (ramPercentage) ramPercentage.innerHTML = `${percentage}% <span data-i18n="used">${t("used")}</span>`;
  if (ramBar) ramBar.style.width = `${percentage}%`;
}

async function refreshCPU() {
  logTerminal("Querying CPU...", "info");
  const governorRaw = await execCmd("cat /sys/devices/system/cpu/cpu0/cpufreq/scaling_governor");
  const freqRaw = await execCmd("cat /sys/devices/system/cpu/cpu0/cpufreq/scaling_cur_freq");
  const coresRaw = await execCmd("nproc");

  const govEl = document.getElementById("cpu-governor");
  const freqEl = document.getElementById("cpu-freq");
  const coresEl = document.getElementById("cpu-cores");

  const governor = (typeof governorRaw === "string" && governorRaw.trim()) ? governorRaw.trim() : "n/a";
  if (govEl) govEl.innerText = governor;

  if (typeof freqRaw === "string" && freqRaw.trim() && !isNaN(parseInt(freqRaw.trim(), 10))) {
    const mhz = Math.round(parseInt(freqRaw.trim(), 10) / 1000);
    if (freqEl) freqEl.innerText = `${mhz} MHz`;
  }

  if (typeof coresRaw === "string" && coresRaw.trim()) {
    if (coresEl) coresEl.innerText = coresRaw.trim();
  }

  highlightChip("governor-chips", "data-gov", governor);
  logTerminal("CPU status updated.", "success");
}

async function setGovernor(gov) {
  logTerminal(`Changing governor to '${gov}'...`, "info");
  await execCmd(`for c in /sys/devices/system/cpu/cpu[0-9]*/cpufreq/scaling_governor; do echo ${gov} > "$c" 2>/dev/null; done`);
  localStorage.setItem("tweak_governor", gov);
  logTerminal(`Governor set to '${gov}'.`, "success");
  refreshCPU();
}

async function toggleMiuiOptimization(enable) {
  if (enable && !confirm(t("warn_miuiopt"))) {
    document.getElementById("toggle-miuiopt").checked = false;
    return;
  }
  localStorage.setItem("tweak_miuiopt", enable ? "true" : "false");
  const value = enable ? "0" : "1";
  await execCmd(`resetprop persist.sys.miui_optimization ${value}`);
  logTerminal(`persist.sys.miui_optimization=${value}. Reboot the device.`, "success");
}

async function toggleAdsDebloat(enable) {
  localStorage.setItem("tweak_ads", enable ? "true" : "false");
  const packages = ["com.miui.analytics", "com.miui.msa.global", "com.miui.systemAdSolution"];
  for (const pkg of packages) {
    await execCmd(enable ? `pm disable-user --user 0 ${pkg}` : `pm enable ${pkg}`);
  }
  logTerminal(enable ? "Ads disabled." : "Ads enabled.", "success");
}

function highlightChip(groupId, attr, value) {
  const group = document.getElementById(groupId);
  if (!group) return;
  group.querySelectorAll(".chip").forEach(chip => {
    chip.classList.toggle("active", chip.getAttribute(attr) === value);
  });
}

async function applyProfile(type) {
  if (type === 'high') {
    logTerminal("Applying 6GB+ High Performance profile...", "info");
    await execCmd("sysctl -w vm.swappiness=10");
    await execCmd("sysctl -w vm.vfs_cache_pressure=50");
    await execCmd("settings put global window_animation_scale 0.75");
  } else if (type === 'low') {
    logTerminal("Applying 4GB- Memory Saver profile...", "info");
    await execCmd("sysctl -w vm.swappiness=70");
    await execCmd("sysctl -w vm.vfs_cache_pressure=100");
    await execCmd("settings put global window_animation_scale 0.5");
  }
  refreshRAM();
}

async function runCleanRAM() {
  logTerminal("Clearing Memory Cache...", "info");
  await execCmd("sync && echo 3 > /proc/sys/vm/drop_caches");
  setTimeout(refreshRAM, 1000);
}

async function killBackgroundApps() {
  const pkgList = await execCmd("pm list packages -3");
  if (!pkgList || typeof pkgList !== "string") return;
  const packages = pkgList.split("\n").map(p => p.replace("package:", "").trim()).filter(Boolean);
  for (const pkg of packages) {
    await execCmd(`am force-stop ${pkg}`);
  }
  logTerminal("Background applications terminated.", "success");
}

async function resetBatteryStats() {
  await execCmd("dumpsys batterystats --reset");
  logTerminal("Battery statistics reset.", "success");
}

async function runTrim() {
  await execCmd("fstrim -v /data");
  logTerminal("Storage TRIM executed.", "success");
}

async function toggleJoyose(enable) {
  localStorage.setItem("tweak_joyose", enable ? "true" : "false");
  await execCmd(enable ? "pm disable-user --user 0 com.xiaomi.joyose" : "pm enable com.xiaomi.joyose");
}

async function toggleDoze(enable) {
  localStorage.setItem("tweak_doze", enable ? "true" : "false");
  await execCmd(enable ? "dumpsys deviceidle disable" : "dumpsys deviceidle enable");
}

function syncTweakStates() {
  const joyoseSwitch = document.getElementById("toggle-joyose");
  const dozeSwitch = document.getElementById("toggle-doze");
  const miuiOptSwitch = document.getElementById("toggle-miuiopt");
  const adsSwitch = document.getElementById("toggle-ads");

  if (joyoseSwitch) joyoseSwitch.checked = localStorage.getItem("tweak_joyose") === "true";
  if (dozeSwitch) dozeSwitch.checked = localStorage.getItem("tweak_doze") === "true";
  if (miuiOptSwitch) miuiOptSwitch.checked = localStorage.getItem("tweak_miuiopt") === "true";
  if (adsSwitch) adsSwitch.checked = localStorage.getItem("tweak_ads") === "true";

  const savedGov = localStorage.getItem("tweak_governor");
  if (savedGov) highlightChip("governor-chips", "data-gov", savedGov);

  const savedHz = localStorage.getItem("tweak_refresh");
  if (savedHz) highlightChip("refresh-chips", "data-hz", savedHz);
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("tweak_lang") || "ES";
  const langSelect = document.getElementById("lang-selector");
  if (langSelect) langSelect.value = savedLang;

  loadLanguage(savedLang);
  syncTweakStates();

  setTimeout(() => {
    refreshRAM();
    refreshCPU();
  }, 400);
});
        
