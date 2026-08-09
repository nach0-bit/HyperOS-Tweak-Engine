#!/system/bin/sh
# HyperOS Tweak Module (Android 14+) - Entry Level Profile
# Runtime commands only (pm / settings / sysctl)

MODDIR="${0%/*}"
LOG="$MODDIR/service.log"

log() {
  echo "[$(date '+%H:%M:%S')] $1" >> "$LOG"
}

# --- WAIT FOR BOOT COMPLETE ---
until [ "$(getprop sys.boot_completed)" = "1" ]; do
  sleep 5
done

# Extended delay for entry-level hardware
sleep 15

log "Boot complete, initializing Entry-Level tweaks"

# --- STATIC DEBLOAT (Only bloatware not controlled by WebUI) ---
disable_pkg() {
  if pm list packages | grep -q "^package:$1$"; then
    pm disable-user --user 0 "$1" >/dev/null 2>&1 && log "Disabled: $1"
  fi
}

disable_pkg com.miui.bugreport             # Error reporting
disable_pkg com.miui.cloudservice.sysbase  # Xiaomi Cloud Base
disable_pkg com.miui.miservice             # Customer Support Service

# --- MEMORY: Aggressive zRAM usage to prevent out-of-memory crashes ---
apply_sysctl() {
  if sysctl -w "$1=$2" >/dev/null 2>&1; then
    log "sysctl $1=$2"
  else
    log "sysctl $1 not available on this kernel, skipped"
  fi
}

apply_sysctl vm.swappiness 100
apply_sysctl vm.vfs_cache_pressure 100
apply_sysctl vm.page-cluster 0

log "Memory tweaks applied (swappiness=100, vfs_cache_pressure=100, page-cluster=0)"

# --- TOUCH RESPONSE & ANIMATIONS ---
settings put secure long_press_timeout 250
settings put global window_animation_scale 0.5
settings put global transition_animation_scale 0.5
settings put global animator_duration_scale 0.5

log "Touch and animation tweaks applied"
log "Entry-Level tweaks completed successfully"
