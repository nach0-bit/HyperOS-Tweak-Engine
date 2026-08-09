SKIPUNZIP=0

ui_print "--------------------------------------"
ui_print "     ⚡ Installing Module 🚀          "
ui_print "--------------------------------------"

ui_print "- Analyzing device hardware..."

# 1. Get total RAM in MB (with fallback for safety)
RAM_TOTAL=$(free -m 2>/dev/null | awk '/Mem:/ {print $2}')

# Fallback: If 'free' fails, read directly from meminfo
if [ -z "$RAM_TOTAL" ] || [ "$RAM_TOTAL" -eq 0 ]; then
  RAM_TOTAL_KB=$(grep MemTotal /proc/meminfo | awk '{print $2}')
  RAM_TOTAL=$((RAM_TOTAL_KB / 1024))
fi

if [ -n "$RAM_TOTAL" ] && [ "$RAM_TOTAL" -gt 0 ]; then
  ui_print "  Detected RAM: ${RAM_TOTAL} MB"
else
  ui_print "  Could not detect RAM. Using base profile."
  RAM_TOTAL=0
fi

# 2. Select profile based on available RAM
SCRIPTS_DIR="$MODPATH/scripts"

if [ "$RAM_TOTAL" -ge 5500 ]; then
  ui_print "- Profile applied: Mid / High End (6GB+)"
  if [ -f "$SCRIPTS_DIR/service_high.sh" ]; then
    mv -f "$SCRIPTS_DIR/service_high.sh" "$MODPATH/service.sh"
  fi
else
  ui_print "- Profile applied: Entry Level (< 6GB)"
  if [ -f "$SCRIPTS_DIR/service_low.sh" ]; then
    mv -f "$SCRIPTS_DIR/service_low.sh" "$MODPATH/service.sh"
  fi
fi

# 3. Clean up temporary scripts directory
if [ -d "$SCRIPTS_DIR" ]; then
  rm -rf "$SCRIPTS_DIR"
fi

# 4. Set permissions (This function is executed automatically by the framework)
set_permissions() {
  # Standard system permissions (if the folder exists)
  if [ -d "$MODPATH/system" ]; then
    set_perm_recursive "$MODPATH/system" 0 0 0755 0644
  fi
  
  # Execution permissions for the service script
  if [ -f "$MODPATH/service.sh" ]; then
    set_perm "$MODPATH/service.sh" 0 0 0755
  fi
  
  # WebRoot setup for APatch/KernelSU WebUI
  if [ -d "$MODPATH/webroot" ]; then
    set_perm_recursive "$MODPATH/webroot" 0 0 0755 0644
  fi
}

ui_print "--------------------------------------"
ui_print "     ✅ Installation Complete         "
ui_print "--------------------------------------"

