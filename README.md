# 🚀 HyperOS Tweak Engine

**Version:** 1.0
**Author:** N.DEV  
**Compatibility:** Magisk, KernelSU, APatch (Android 14+)

## 📖 Short Description
This module makes optimizations and tweaks to the Xiaomi framework and the system. It applies hardware-optimized kernel and memory parameters to HyperOS. It features an interactive WebUI for real-time monitoring, CPU/Display tweaking, and debloating, alongside an intelligent installer that automatically selects the best profile based on your device's RAM.

## ✨ Key Features

*   🧠 **Smart Auto-Profiling:** The `customize.sh` script automatically detects your device's RAM and applies either the Mid/High-End (6GB+) or Entry-Level (< 6GB) profile.
*   🎛️ **Interactive WebUI (KernelSU/APatch):** Built-in dashboard (available in EN, ES, RU) to monitor RAM/CPU, switch governors, force refresh rates, clean caches, and toggle tweaks like Joyose or MIUI Optimization.
*   🚀 **Memory Optimization (zRAM):** Custom sysctl parameters (`swappiness=100`, `page-cluster=0`) prioritize compressing background apps into zRAM instead of killing them (LMK), drastically improving multitasking.
*   ⚡ **UI & Touch Responsiveness:** Custom animation scales (0.5x - 0.75x) and reduced long-press timeouts (250ms) for an ultra-snappy interface.
*   🗑️ **Safe Debloating:** Built-in removal of unnecessary Xiaomi telemetry, ads, and heavy background services.

## ⚙️ How it Works

### High-End Profile (6GB+)
Focuses on multitasking fluidity. It tells the kernel to compress background apps rather than killing them outright, reducing the "stuck/laggy" feeling when switching back to an app.

### Entry-Level Profile (< 6GB)
Focuses on stability and free RAM. Implements aggressive zRAM usage to prevent out-of-memory crashes, faster UI animations (0.5x) to mask stutters, and static debloat of heavy background services.

## 🛠️ Installation
1. Flash the module via Magisk, KernelSU, or APatch.
2. The installer will analyze your hardware and apply the correct script.
3. Reboot the device.
4. (Optional) If using KernelSU or APatch, open the module's WebUI to access the interactive dashboard.

## ⚠️ Safety & Compatibility
This module uses safe runtime commands (`sysctl`, `settings put`, `pm disable-user`). It is fully compatible with rescue tools like AshLoper / Auto-Skip Catcher in case of boot loops.
