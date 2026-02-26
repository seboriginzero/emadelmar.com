#!/bin/bash
for d in services/*; do
  if [ -d "$d/public" ]; then
    rm -f "$d/public/images"
    ln -s ../../../gateway-acasa/public/images "$d/public/images"
  fi
done
