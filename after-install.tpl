#!/bin/bash

# Link to the binary
ln -sf "/opt/${sanitizedProductName:-etcher-privacy}/${executable:-etcher-privacy}" "/usr/bin/${executable:-etcher-privacy}"

# SUID chrome-sandbox for Electron 5+
chmod 4755 "/opt/${sanitizedProductName:-etcher-privacy}/chrome-sandbox" || true

update-mime-database /usr/share/mime || true
update-desktop-database /usr/share/applications || true
