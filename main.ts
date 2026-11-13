// ai-happy-01 entry program (Node 22, standard library only).
//
// The entry is the image file entry.png sitting next to this program.
// This program copies it to the output directory as entry.png, creating
// the directory first if it does not exist yet. The grader supplies the
// output directory through MAKEFUN_OUTPUT_DIR; when that variable is not
// set, the program writes to /output. Run it locally like this:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// What the image shows: a small friendly robot and a laughing little girl
// blowing one giant rainbow soap bubble together in a sunny garden.
// There is no text anywhere in the image — the joy comes from the scene
// itself: one shared bubble, the laughter, the warm sunlight.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
