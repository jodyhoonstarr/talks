<template>
  <div>
    <div class="absolute inset-0 -z-10 overflow-hidden bg-gray-950 right-[40rem] min-w-full">
      <svg class="absolute -right-40 bottom-auto left-auto top-[-40%] h-[180%] w-[80rem]" aria-hidden="true">
        <defs>
          <radialGradient id="commit-gradient" cx="100%">
            <stop offset="0%" stop-color="rgba(56, 189, 248, 0.3)"></stop>
            <stop offset="53.95%" stop-color="rgba(0, 71, 255, 0.09)"></stop>
            <stop offset="100%" stop-color="rgba(10, 14, 23, 0)"></stop>
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#commit-gradient)" class="block"></rect>
      </svg>
      <div class="absolute bottom-0 right-0 bg-white mix-blend-overlay left-auto top-0 h-auto w-px"> </div>
      <div class="absolute inset-x-0 bottom-0 right-0 h-px bg-white mix-blend-overlay w-[calc(100%-1px)]"> </div>
    </div>
    <div class="absolute bottom-0 right-0 bg-white mix-blend-overlay left-auto top-0 h-auto w-px"> </div>
    <div class="absolute inset-x-0 bottom-0 right-0 h-px bg-white mix-blend-overlay w-[calc(100%-1px)]"> </div>
    <div class="slidev-layout default">
      <slot />
    </div>
  </div>
</template>